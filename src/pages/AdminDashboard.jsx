import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import "../css/AdminDashboard.css";
import {
  FaUsers, FaUserPlus, FaEnvelope, FaWhatsapp, FaSignOutAlt, FaHome,
  FaTrashAlt, FaCheck, FaDownload, FaSearch, FaSyncAlt, FaChartBar,
} from "react-icons/fa";
import { API, authHeaders, isAdmin, logout, timeAgo, waLink, parseDate } from "../api";

const CACHE_KEY = "sm_admin_cache"; // last data seen by the admin (works offline)

const readCache = () => {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || null;
  } catch {
    return null;
  }
};

const EMPTY_STATS = {
  totalUsers: 0, newUsersLast7Days: 0, totalMessages: 0, unreadMessages: 0,
  whatsappLeads: 0, registrationsByDay: [], topCities: [],
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const cached = useMemo(readCache, []);
  const [tab, setTab] = useState("overview");
  const [stats, setStats] = useState(cached?.stats || EMPTY_STATS);
  const [users, setUsers] = useState(cached?.users || []);
  const [messages, setMessages] = useState(cached?.messages || []);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [updatedAt, setUpdatedAt] = useState(cached?.at || null);

  const adminName = localStorage.getItem("name") || "Admin";

  const signOut = useCallback(() => {
    logout();
    navigate("/Login");
  }, [navigate]);

  const load = useCallback(async () => {
    try {
      const opts = { headers: authHeaders() };
      const [s, u, m] = await Promise.all([
        fetch(`${API}/admin/stats`, opts),
        fetch(`${API}/admin/users`, opts),
        fetch(`${API}/admin/messages`, opts),
      ]);
      if ([s, u, m].some((r) => r.status === 401 || r.status === 403)) {
        signOut(); // token expired or not an admin
        return;
      }
      if (![s, u, m].every((r) => r.ok)) throw new Error("bad response");
      const data = { stats: await s.json(), users: await u.json(), messages: await m.json(), at: Date.now() };
      setStats(data.stats);
      setUsers(data.users);
      setMessages(data.messages);
      setUpdatedAt(data.at);
      setOffline(false);
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch {
      setOffline(true); // keep showing cached data
    } finally {
      setLoading(false);
    }
  }, [signOut]);

  useEffect(() => {
    if (!isAdmin()) return;
    load();
    const id = setInterval(load, 30000); // auto-refresh every 30s
    return () => clearInterval(id);
  }, [load]);

  if (!isAdmin()) return <Navigate to="/Login" replace />;

  const markSeen = async (id) => {
    setMessages((ms) => ms.map((m) => (m.id === id ? { ...m, seen: true } : m)));
    await fetch(`${API}/admin/messages/${id}/seen`, { method: "PATCH", headers: authHeaders() });
    load();
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this message permanently?")) return;
    setMessages((ms) => ms.filter((m) => m.id !== id));
    await fetch(`${API}/admin/messages/${id}`, { method: "DELETE", headers: authHeaders() });
    load();
  };

  const exportCsv = () => {
    const rows = [["Name", "Email", "Mobile", "City", "Registered"]].concat(
      users.map((u) => [u.name, u.email, u.mobile, u.city, parseDate(u.createdAt)?.toLocaleString("en-IN") || ""])
    );
    const csv = rows.map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = "samrajya-users.csv";
    a.click();
  };

  const q = search.trim().toLowerCase();
  const filteredUsers = users.filter(
    (u) => !q || [u.name, u.email, u.mobile, u.city].some((v) => (v || "").toLowerCase().includes(q))
  );
  const filteredMessages = messages.filter((m) =>
    filter === "unread" ? !m.seen : filter === "whatsapp" ? m.channel === "WHATSAPP" : true
  );

  const maxDay = Math.max(1, ...stats.registrationsByDay.map((d) => d.count));
  const maxCity = Math.max(1, ...stats.topCities.map((c) => c.count));
  const dayLabel = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { weekday: "short" });
  const initials = (n) => (n || "?").trim().charAt(0).toUpperCase();

  const cards = [
    { icon: <FaUsers />, label: "Registered users", value: stats.totalUsers, tone: "violet" },
    { icon: <FaUserPlus />, label: "New this week", value: stats.newUsersLast7Days, tone: "rose" },
    { icon: <FaEnvelope />, label: "Messages", value: stats.totalMessages, sub: `${stats.unreadMessages} unread`, tone: "amber" },
    { icon: <FaWhatsapp />, label: "WhatsApp leads", value: stats.whatsappLeads, tone: "green" },
  ];

  const MessageCard = ({ m }) => (
    <div className={`ad-msg ${m.seen ? "" : "unread"}`}>
      <div className="ad-avatar">{initials(m.name)}</div>
      <div className="ad-msg-body">
        <div className="ad-msg-top">
          <strong>{m.name}</strong>
          <span className={`ad-chip ${m.channel === "WHATSAPP" ? "wa" : "web"}`}>
            {m.channel === "WHATSAPP" ? "WhatsApp" : "Website"}
          </span>
          {!m.seen && <span className="ad-chip new">New</span>}
          <span className="ad-time">{timeAgo(m.createdAt)}</span>
        </div>
        <p>{m.message}</p>
        {m.phone && <small>📞 {m.phone}</small>}
        <div className="ad-msg-actions">
          {m.phone && (
            <a href={waLink(m.phone, `Hi ${m.name}, thanks for contacting Samrajya Makeover!`)} target="_blank" rel="noreferrer" className="wa">
              <FaWhatsapp /> Reply
            </a>
          )}
          {!m.seen && (
            <button onClick={() => markSeen(m.id)}><FaCheck /> Mark read</button>
          )}
          <button className="danger" onClick={() => remove(m.id)}><FaTrashAlt /> Delete</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="ad-shell">
      <aside className="ad-side">
        <div className="ad-brand">✦ Samrajya<span>Makeover</span></div>
        <nav>
          <button className={tab === "overview" ? "on" : ""} onClick={() => setTab("overview")}><FaChartBar /> Overview</button>
          <button className={tab === "users" ? "on" : ""} onClick={() => setTab("users")}><FaUsers /> Users <b>{stats.totalUsers}</b></button>
          <button className={tab === "messages" ? "on" : ""} onClick={() => setTab("messages")}>
            <FaEnvelope /> Messages {stats.unreadMessages > 0 && <b className="alert">{stats.unreadMessages}</b>}
          </button>
        </nav>
        <div className="ad-side-foot">
          <Link to="/"><FaHome /> View website</Link>
          <button onClick={signOut}><FaSignOutAlt /> Logout</button>
        </div>
      </aside>

      <main className="ad-main">
        <header className="ad-top">
          <div>
            <h1>{tab === "overview" ? `Welcome back, ${adminName} 👋` : tab === "users" ? "Registered users" : "Customer messages"}</h1>
            <p>
              {offline ? "⚠ Server unreachable — showing last saved data" : "Live data from your database"}
              {updatedAt && ` · updated ${timeAgo(new Date(updatedAt).toISOString())}`}
            </p>
          </div>
          <button className="ad-refresh" onClick={() => { setLoading(true); load(); }}>
            <FaSyncAlt className={loading ? "spin" : ""} /> Refresh
          </button>
        </header>

        {tab === "overview" && (
          <>
            <section className="ad-cards">
              {cards.map((c) => (
                <div className={`ad-card ${c.tone}`} key={c.label}>
                  <div className="ad-card-icon">{c.icon}</div>
                  <div>
                    <div className="ad-card-val">{c.value}</div>
                    <div className="ad-card-label">{c.label}</div>
                    {c.sub && <div className="ad-card-sub">{c.sub}</div>}
                  </div>
                </div>
              ))}
            </section>

            <section className="ad-grid2">
              <div className="ad-panel">
                <h3>Registrations — last 7 days</h3>
                <div className="ad-bars">
                  {stats.registrationsByDay.map((d) => (
                    <div className="ad-bar" key={d.date}>
                      <span className="n">{d.count}</span>
                      <div className="col"><i style={{ height: `${(d.count / maxDay) * 100}%` }} /></div>
                      <span className="d">{dayLabel(d.date)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ad-panel">
                <h3>Top cities</h3>
                {stats.topCities.length === 0 && <p className="ad-empty">No city data yet.</p>}
                {stats.topCities.map((c) => (
                  <div className="ad-hbar" key={c.city}>
                    <div><span>{c.city}</span><b>{c.count}</b></div>
                    <div className="track"><i style={{ width: `${(c.count / maxCity) * 100}%` }} /></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="ad-grid2">
              <div className="ad-panel">
                <div className="ad-panel-head"><h3>Latest messages</h3><button onClick={() => setTab("messages")}>View all →</button></div>
                {messages.length === 0 && <p className="ad-empty">No messages yet.</p>}
                {messages.slice(0, 3).map((m) => <MessageCard key={m.id} m={m} />)}
              </div>
              <div className="ad-panel">
                <div className="ad-panel-head"><h3>Newest users</h3><button onClick={() => setTab("users")}>View all →</button></div>
                {users.length === 0 && <p className="ad-empty">No users yet.</p>}
                {users.slice(0, 6).map((u) => (
                  <div className="ad-user-row" key={u.id}>
                    <div className="ad-avatar sm">{initials(u.name)}</div>
                    <div><strong>{u.name}</strong><small>{u.city || "—"} · {u.email}</small></div>
                    <span className="ad-time">{timeAgo(u.createdAt)}</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {tab === "users" && (
          <div className="ad-panel">
            <div className="ad-toolbar">
              <div className="ad-search"><FaSearch /><input placeholder="Search name, email, mobile, city…" value={search} onChange={(e) => setSearch(e.target.value)} /></div>
              <button className="ad-export" onClick={exportCsv}><FaDownload /> Export CSV</button>
            </div>
            <div className="ad-table-wrap">
              <table className="ad-table">
                <thead><tr><th>User</th><th>Mobile</th><th>City</th><th>Registered</th><th /></tr></thead>
                <tbody>
                  {filteredUsers.map((u) => (
                    <tr key={u.id}>
                      <td>
                        <div className="ad-user-cell">
                          <div className="ad-avatar sm">{initials(u.name)}</div>
                          <div><strong>{u.name}</strong>{u.role === "ADMIN" && <span className="ad-chip new">Admin</span>}<small>{u.email}</small></div>
                        </div>
                      </td>
                      <td>{u.mobile}</td>
                      <td>{u.city}</td>
                      <td>{timeAgo(u.createdAt) || "—"}</td>
                      <td>{u.mobile && u.mobile !== "-" && <a className="ad-wa-btn" href={waLink(u.mobile)} target="_blank" rel="noreferrer"><FaWhatsapp /></a>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredUsers.length === 0 && <p className="ad-empty">No users found.</p>}
            </div>
          </div>
        )}

        {tab === "messages" && (
          <div className="ad-panel">
            <div className="ad-filters">
              {[["all", `All (${messages.length})`], ["unread", `Unread (${stats.unreadMessages})`], ["whatsapp", `WhatsApp (${stats.whatsappLeads})`]].map(([k, label]) => (
                <button key={k} className={filter === k ? "on" : ""} onClick={() => setFilter(k)}>{label}</button>
              ))}
            </div>
            {filteredMessages.length === 0 && <p className="ad-empty">Nothing here yet.</p>}
            {filteredMessages.map((m) => <MessageCard key={m.id} m={m} />)}
          </div>
        )}
      </main>
    </div>
  );
}