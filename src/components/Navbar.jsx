import React, { useState } from "react"; 
import '../css/Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { isAdmin, isLoggedIn, logout } from "../api";
import { SiTurkishairlines } from "react-icons/si";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <SiTurkishairlines style={{ marginRight: "8px", color: "black", width: "50px", height: "40px" }} />
        Samrajya Makeover
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Service</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {isAdmin() && <li><Link to="/admin">Dashboard</Link></li>}
        {isLoggedIn() ? (
          <li>
            <a href="#logout" onClick={(e) => { e.preventDefault(); handleLogout(); }}>Logout</a>
          </li>
        ) : (
          <li><Link to="/Login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;