import React from "react";
import "../Css/Footer.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiTurkishairlines } from "react-icons/si";  // Import icon


const Footer = () => {
  return (
    <footer className="footer-section">

<div className="footer-bottom">
  <p>
    Designed With ❤️ By <strong>Rushikesh Kamble</strong> | 
    Mobile: <a href="tel:+917709200299">7709 200 299</a> | 
    Email: <a href="mailto:rushikamble462@gmail.com">rushikamble462@gmail.com</a> | 
    <a 
      href="https://www.instagram.com/ii_rishi_ll/?next=%2F" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaInstagram size={20} />
    </a> 
    <a 
      href="https://wa.me/917709200299?text=Hello%20I%20saw%20your%20website" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={20} />
    </a>
  </p>
</div>
    </footer>
  );
};

export default Footer;
