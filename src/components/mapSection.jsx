import React from "react";
import "../css/MapSection.css";

const MapSection = () => {
  return (
    <section id="map" className="map-section">
      <h2 className="map-title">📍 Find Us</h2>
      <div className="map-container">
        <div className="map-info">
          <p>
            We are located in <strong>Pune, Maharashtra</strong>. Visit our office
            to discuss your bridal makeup, photography, or styling needs. We’re
            always happy to welcome clients and talk about how we can make your
            special day unforgettable.
          </p>
        </div>

        <div className="map-frame">
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.8033639!3d18.4571619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295b3c814d679%3A0xc0b2e0742b5c81fd!2sTejas%20Dolas%20Photography!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
