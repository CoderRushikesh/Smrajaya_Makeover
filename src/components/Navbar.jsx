import React, { useState } from "react"; 
import '../css/Navbar.css';
import { Link } from "react-router-dom";
import { SiTurkishairlines } from "react-icons/si";  // Import icon


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <SiTurkishairlines style={{  marginRight: "8px", color: "balck" , width:"50px" , height:"40px" }}/> 
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
        <li><Link to="/Login">  Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
