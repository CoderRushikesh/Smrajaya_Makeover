export const API = import.meta.env.VITE_API_URL || "http://localhost:8082";

// Business WhatsApp number (country code + number, digits only)
export const WHATSAPP_NUMBER = "919405731098";

export const MAX_WORDS = 50;

export const countWords = (text) => {
  const t = (text || "").trim();
  return t ? t.split(/\s+/).length : 0;
};

// Keep only the first MAX_WORDS words (preserves a trailing space while typing)
export const limitWords = (text, max = MAX_WORDS) => {
  const parts = text.split(/(\s+)/);
  let words = 0;
  let out = "";
  for (const p of parts) {
    if (p.trim() === "") {
      out += p;
    } else {
      if (words >= max) break;
      words += 1;
      out += p;
    }
  }
  return out;
};

export const getToken = () => localStorage.getItem("token");
export const getRole = () => localStorage.getItem("role");
export const isLoggedIn = () => !!getToken();
export const isAdmin = () => !!getToken() && getRole() === "ADMIN";

export const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

export const saveSession = ({ token, role, name }) => {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role || "USER");
  localStorage.setItem("name", name || "");
};

export const logout = () => {
  ["token", "role", "name"].forEach((k) => localStorage.removeItem(k));
};

// Server sends UTC timestamps without a zone suffix -> treat them as UTC
export const parseDate = (s) => {
  if (!s) return null;
  const str = Array.isArray(s) ? null : String(s);
  if (!str) return null;
  return new Date(/[zZ]|[+-]\d\d:?\d\d$/.test(str) ? str : str + "Z");
};

export const timeAgo = (s) => {
  const d = parseDate(s);
  if (!d) return "";
  const sec = Math.floor((Date.now() - d.getTime()) / 1000);
  if (sec < 60) return "just now";
  if (sec < 3600) return `${Math.floor(sec / 60)} min ago`;
  if (sec < 86400) return `${Math.floor(sec / 3600)} hr ago`;
  if (sec < 604800) return `${Math.floor(sec / 86400)} d ago`;
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

export const waLink = (phone, text = "") => {
  let digits = String(phone || "").replace(/\D/g, "");
  if (digits.length === 10) digits = "91" + digits;
  return `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
};