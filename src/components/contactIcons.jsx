import React from "react";
import "../css/ContactIcons.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const ContactIcons = () => {
  return (
    <section className="contact-icons">
      <h2 className="icons-title">📱 Connect With Us</h2>
      <div className="icons-container">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+919405731098?text=Hello%20I%20saw%20your%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaWhatsapp size={80} color="#25D366" />
          <p>WhatsApp</p>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/makeup_samrajya?igsh=aGVwOGF2Mm5qM3V1" /* replace with your Insta link */
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaInstagram size={80} color="#E1306C" />
          <p>Instagram</p>
        </a>
      </div>
    </section>
  );
};

export default ContactIcons;
