import React from "react";
import "../css/Login.css";
import loginImage from "../image/Login.jpg"; // replace with your image
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
const LoginForm = () => {
  return (
<div>

<Navbar/>







    <section className="login-section">
      <div className="login-wrapper">
        
        {/* Left side: Image */}
        <div className="login-image">
          <img src={loginImage} alt="Login visual" />
        </div>

        {/* Right side: Form */}
        <div className="login-form">
          <h2>Sign In</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>

            <div className="form-links">
              <a href="#">Forgot Username / Password?</a>
            </div>

            <button type="submit" className="btn-signin">SIGN IN</button>

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
