import React, { useState } from "react";
import "../css/Login.css";
import loginImage from "../image/Login.jpg";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { API, saveSession, logout } from "../api";

const LoginForm = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("user"); // "user" | "admin"
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        setError(mode === "admin" ? "Invalid admin email or password." : "Invalid email or password.");
        return;
      }

      const data = await response.json();

      if (mode === "admin" && data.role !== "ADMIN") {
        logout();
        setError("This account does not have admin access.");
        return;
      }

      saveSession(data);
      // Admin accounts always go to the dashboard, customers go home
      navigate(data.role === "ADMIN" ? "/admin" : "/");
    } catch (err) {
      console.error("Error:", err);
      setError("Cannot reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="login-section">
        <div className="login-wrapper">
          <div className="login-image">
            <img src={loginImage} alt="Login visual" />
          </div>

          <div className="login-form">
            <h2>{mode === "admin" ? "Admin Sign In" : "Sign In"}</h2>

            <div className="login-tabs" role="tablist">
              <button
                type="button"
                className={mode === "user" ? "active" : ""}
                onClick={() => { setMode("user"); setError(""); }}
              >
                Customer
              </button>
              <button
                type="button"
                className={mode === "admin" ? "active" : ""}
                onClick={() => { setMode("admin"); setError(""); }}
              >
                Admin
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <div className="login-error">{error}</div>}

              <button type="submit" className="btn-signin" disabled={loading}>
                {loading ? "Signing in..." : mode === "admin" ? "SIGN IN AS ADMIN" : "SIGN IN"}
              </button>

              {mode === "user" && (
                <p className="signup-text">
                  Don’t have an account? <Link to="/signup">SIGN UP NOW</Link>
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;