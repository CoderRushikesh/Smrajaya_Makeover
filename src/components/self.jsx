import React from "react";
import "../css/Self.css"
// if images folder is outside components
import img1 from "../image/t2.jpg";
// import img2 from "../assets/images/about2.jpg";
// import img3 from "../assets/images/about3.jpg";

const Self = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">SAMRAJYA</h1>
      <p className="about-tagline">
        Best bridal makeup artist from Pune, Mumbai (India)
      </p>

      <div className="about-images">
        <img src={img1} alt="Bridal look 1" />
        {/* <img src={img2} alt="Bridal look 2" />
        <img src={img3} alt="Bridal look 3" />  */}
      </div>

      <h2 className="about-heading">SAMRAJYA</h2>
      <p className="about-subtext">
        <em>
          is a versatile bridal makeup artist & makeup educator having  years
          of experience
        </em>
      </p>

      <p className="about-description">
       Samrajya is more than just a name — it represents artistry, elegance, and education in the world of beauty. With a decade of professional experience, Tejaswini has become one of India’s most trusted bridal makeup artists, known for creating natural yet glamorous looks that enhance every bride’s individuality. Beyond bridal transformations, she is also a dedicated makeup educator, guiding aspiring artists through professional courses and hands‑on training. Her work blends creativity with precision, ensuring that every client feels confident and radiant, while every student gains the skills to succeed in the beauty industry.
      </p>

      <button className="about-btn"  onClick={() => (window.location.href = "/services")}>Explore</button>
    </section>
  );
};

export default Self;
