import React, { useEffect, useState } from "react";
import "../css/MessageForm.css";
import { FaWhatsapp, FaPaperPlane, FaTrashAlt } from "react-icons/fa";
import { API, WHATSAPP_NUMBER, MAX_WORDS, countWords, limitWords, timeAgo } from "../api";

// localStorage keys
const SENT_KEY = "sm_sent_messages"; // visitor's own history (this browser)
const PENDING_KEY = "sm_pending_messages"; // not yet delivered to the server

const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

async function postMessage(payload) {
  const res = await fetch(`${API}/public/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

// Try to deliver anything saved while the server was unreachable
async function flushPending() {
  const pending = read(PENDING_KEY);
  if (!pending.length) return;
  const still = [];
  for (const p of pending) {
    try {
      if (!(await postMessage(p))) still.push(p);
    } catch {
      still.push(p);
    }
  }
  write(PENDING_KEY, still);
}

export default function MessageForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [history, setHistory] = useState(read(SENT_KEY));
  const [status, setStatus] = useState({ type: "", text: "" });
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    flushPending();
  }, []);

  const words = countWords(form.message);
  const remaining = MAX_WORDS - words;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === "message" ? limitWords(value) : value }));
    setStatus({ type: "", text: "" });
  };

  const submit = async (channel) => {
    if (!form.name.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: "Please enter your name and a message." });
      return;
    }
    if (words > MAX_WORDS) {
      setStatus({ type: "error", text: `Message must be ${MAX_WORDS} words or fewer.` });
      return;
    }

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
      channel,
    };

    // Open WhatsApp straight from the click so the browser doesn't block the popup
    if (channel === "WHATSAPP") {
      const text = `Hi, I'm ${payload.name}${payload.phone ? ` (${payload.phone})` : ""}. ${payload.message}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    }

    setBusy(true);
    let delivered = false;
    try {
      delivered = await postMessage(payload);
    } catch {
      delivered = false;
    }

    if (!delivered) write(PENDING_KEY, [...read(PENDING_KEY), payload]);

    const entry = { ...payload, time: new Date().toISOString(), delivered, id: Date.now() };
    const next = [entry, ...read(SENT_KEY)].slice(0, 20);
    write(SENT_KEY, next);
    setHistory(next);

    setForm((f) => ({ ...f, message: "" }));
    setStatus({
      type: delivered ? "success" : "warn",
      text: delivered
        ? channel === "WHATSAPP"
          ? "Opened WhatsApp and saved your message. We'll get back to you soon!"
          : "Message sent! We'll get back to you soon."
        : "Server is busy — your message is saved on this device and will be sent automatically.",
    });
    setBusy(false);
  };

  const removeOne = (id) => {
    const next = read(SENT_KEY).filter((m) => m.id !== id);
    write(SENT_KEY, next);
    setHistory(next);
  };

  return (
    <section className="mf-section">
      <div className="mf-card">
        <div className="mf-head">
          <span className="mf-eyebrow">GET IN TOUCH</span>
          <h2>Send us a message</h2>
          <p>Tell us what you need — bridal, party makeup, courses. Keep it short (max {MAX_WORDS} words).</p>
        </div>

        <div className="mf-grid">
          <label>
            Your name
            <input name="name" value={form.name} onChange={onChange} placeholder="e.g. Priya Patil" maxLength={100} />
          </label>
          <label>
            Phone (optional)
            <input name="phone" value={form.phone} onChange={onChange} placeholder="e.g. 9876543210" maxLength={20} inputMode="tel" />
          </label>
        </div>

        <label className="mf-full">
          Message
          <textarea name="message" rows={4} value={form.message} onChange={onChange} placeholder="Write your message here..." />
        </label>

        <div className={`mf-counter ${remaining <= 5 ? "low" : ""}`}>
          <div className="mf-bar">
            <span style={{ width: `${Math.min(100, (words / MAX_WORDS) * 100)}%` }} />
          </div>
          {words} / {MAX_WORDS} words
        </div>

        {status.text && <div className={`mf-status ${status.type}`}>{status.text}</div>}

        <div className="mf-actions">
          <button className="mf-btn wa" disabled={busy} onClick={() => submit("WHATSAPP")}>
            <FaWhatsapp size={20} /> Send on WhatsApp
          </button>
          <button className="mf-btn site" disabled={busy} onClick={() => submit("WEBSITE")}>
            <FaPaperPlane /> Send to Admin
          </button>
        </div>

        {history.length > 0 && (
          <div className="mf-history">
            <div className="mf-history-head">
              <h3>Your recent messages</h3>
              <button
                onClick={() => {
                  write(SENT_KEY, []);
                  setHistory([]);
                }}
              >
                Clear all
              </button>
            </div>
            {history.slice(0, 5).map((m) => (
              <div className="mf-item" key={m.id}>
                <div>
                  <p>{m.message}</p>
                  <small>
                    {m.channel === "WHATSAPP" ? "WhatsApp" : "Website"} · {timeAgo(m.time)} ·{" "}
                    {m.delivered ? "✓ delivered" : "⏳ will retry"}
                  </small>
                </div>
                <button aria-label="Delete" onClick={() => removeOne(m.id)}>
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}