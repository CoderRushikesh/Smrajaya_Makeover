import React from "react";
import "../css/footer.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiTurkishairlines } from "react-icons/si";  // Import icon


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-left">
          
          <h3>  <SiTurkishairlines style={{marginRight: "8px", color: "balck" , width:"50px" , height:"40px" , color:"white" ,}}/> Samrajya Makeover</h3>
          <p>Enhancing beauty, creating confidence.
Thank you for visiting Makeup Samrajya. Stay connected with us on social media for bridal inspirations, tutorials, and academy updates..</p>
          <p>Thank you for visiting my personal website. Connect with me on socials!</p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#About">About us </a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Contact Info</h4>
          <p>📞 +91 94057 31098</p>
          <p>📧 Khushboomahajan799@gmail.com</p>
          <p>📍 Pune, India - 411002</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/makeup_samrajya?igsh=aGVwOGF2Mm5qM3V1" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} /></a>
            <a href="https://wa.me/9405731098?text=Hello%20I%20saw%20your%20website" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={28} /></a>
          
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Designed With ❤️ By Rushikesh Kamble | Mobile: 7709 200 299 | Email: rushikamble462@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
