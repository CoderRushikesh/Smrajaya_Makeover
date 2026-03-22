import React, { useState } from "react";
import "../css/Login.css";
import loginImage from "../image/Login.jpg"; // replace with your image
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8082/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // ✅ store JWT
        alert("Login successful!");
        // Optionally redirect:
        window.location.href = "/";
        
      } else {
        const errorText = await response.text();
        alert("Login failed: " + errorText);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="login-section">
        <div className="login-wrapper">
          {/* Left side: Image */}
          <div className="login-image">
            <img src={loginImage} alt="Login visual" />
          </div>

          {/* Right side: Form */}
          <div className="login-form">
            <h2>Sign In</h2>
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

              <div className="form-links">
                <a href="#">Forgot Username / Password?</a>
              </div>

              <button type="submit" className="btn-signin" disabled={loading}>
                {loading ? "Signing in..." : "SIGN IN"}
              </button>

              <p className="signup-text">
                Don’t have an account? <Link to="/signup">SIGN UP NOW</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
