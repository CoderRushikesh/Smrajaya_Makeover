import React from "react";
import "../css/Self.css";
import img1 from "../image/mainMakeup.jpg";

const Self = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">SAMRAJYA</h1>
      <p className="about-tagline">
        Best bridal makeup artist from Pune, Mumbai (India)
      </p>
      <div className="about-images">
        <img src={img1} alt="Bridal look 1" />
      </div>
      <h2 className="about-heading">SAMRAJYA</h2>
      <p className="about-subtext">
        <em>
          is a versatile bridal makeup artist & makeup educator having years of experience
        </em>
      </p>
      <p className="about-description">
        Samrajya is more than just a name — it represents artistry, elegance, and education in the world of beauty...
      </p>
      <button
        className="about-btn"
        // onClick={() => (window.location.href = "/services")}
      >
       Thankhs for Visiting our site 🙏
      </button>
    </section>
  );  


  // add some commit 
};

export default Self;
