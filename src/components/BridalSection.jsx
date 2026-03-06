import React from "react";
import '../css/BridalSection.css';
import bridalImg from "../image/m3.jpg"; // replace with your actual image

const BridalSection = () => {
  return (
    <section className="bridal-section">
      <h1 className="bridal-title">
        BEST BRIDAL MAKEUP ARTIST IN PUNE MUMBAI INDIA
      </h1>

      <div className="bridal-content">
        <div className="bridal-image">
          <img src={bridalImg} alt="Bridal Makeup" />
        </div>

        <div className="bridal-text">
          <h2>INDIAN BRIDAL MAKEUP ARTIST</h2>
          <p className="bridal-subtext">
            natural and classy bridal makeup for all wedding functions
          </p>

          <p className="bridal-description">
            Choosing the right bridal makeup artist is one of the most important decisions for your big day. Whether it’s your Engagement, Vidhi, Haldi, Cocktail Party, Reception, or the Wedding itself, every look deserves to be unique yet timeless. At Makeup Samrajya, Tejaswini brings over 10 years of professional experience as one of India’s most sought‑after bridal makeup artists. Known for her natural and classy approach, she ensures that each bride looks radiant, confident, and the best version of herself. From Pune and Mumbai to destination weddings across India, Tejaswini’s artistry has made her a trusted name for brides who want elegance with a personal touch.
          </p>

          <button className="bridal-btn"  onClick={() => (window.location.href = "/services")}>Explore</button>
        </div>
      </div>
    </section>
  );
};

export default BridalSection;
