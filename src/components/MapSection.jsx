import React from "react";
import "../css/MapSection.css";

const MapSection = () => {
  return (
    <section id="map" className="map-section">
      <h2 className="map-title">📍 Find Us</h2>
      <div className="map-container">
        <div className="map-info">
          <p>
            We are located at <strong>Makeup Samrajya,  Jaisalmer, Rajasthan</strong>. 
            Visit us to discuss your bridal makeup, photography, or styling needs. 
            We’re always happy to welcome clients and talk about how we can make 
            your special day unforgettable.
          </p>
        </div>

        <div className="map-frame">
          <iframe
            title="makeup-samrajya-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.759879010635!2d70.8947302!3d26.9035788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3947bd594e1b2d09%3A0x3beb9d27b18a228!2sMakeup%20Samrajya!5e0!3m2!1sen!2sin!4v1709472000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
