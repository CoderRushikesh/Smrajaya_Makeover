import React from "react";
import "../css/WhatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+919405731098?text=Hello%20I%20saw%20your%20website"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={40} color="#25D366" />
    </a>
  );
};

export default WhatsAppButton;
