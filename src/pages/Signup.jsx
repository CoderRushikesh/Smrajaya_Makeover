import React, { useState } from "react";
import "../css/Signup.css";
import Navbar from "../components/Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
    city: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8082/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Signup successful!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          password: "",
          address: "",
          city: ""
        });
        window.location.href = "/Login";
      } else {
        const errorText = await response.text();
        alert("Signup failed: " + errorText);
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


    <Navbar/>
    <section className="signup-section">
      <div className="signup-wrapper">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              required
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              />
          </div>

          <button type="submit" className="btn-signup" disabled={loading}>
            {loading ? "Signing up..." : "SIGN UP"}
          </button>
        </form>
      </div>
    </section>
              </div>
  );
};

export default Signup;
