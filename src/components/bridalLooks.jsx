import React from "react";
import "../css/BridalLooks.css";
import img1 from "../image/m1.png";
import img2 from "../image/m2.png";
import img3 from "../image/m3.jpg";
import img4 from "../image/m4.png";

const bridalLooks1 = [
  { image: img1, title: "North Indian Bridal Makeup", info: "Traditional North Indian bridal style with bold eyes and jewelry.", price: "₹15,000" },
  { image: img2, title: "South Indian Bridal Makeup", info: "Classic South Indian look with temple jewelry and rich colors.", price: "₹18,000" },
  { image: img3, title: "Maharashtrian Bridal Makeup", info: "Elegant Maharashtrian bridal style with nath and green bangles.", price: "₹14,000" },
  { image: img4, title: "Haldi Ceremony Look", info: "Fresh floral jewelry and natural glow for Haldi function.", price: "₹10,000" },
];

const BridalLooks = () => {
  const whatsappNumber = "918788661412"; // without + sign

  const handleBookNow = (look) => {
    const message = `Hello, I am interested in booking the ${look.title}. The price mentioned is ${look.price}. Please share more details.`;
    const url = `https://wa.me/${9405731098}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bridal-showcase">
      <h2 className="showcase-title">Bridal Makeup Styles</h2>
      <div className="showcase-grid">
        {bridalLooks1.map((look, i) => (
          <div key={i} className="showcase-card">
            <div className="image-wrapper">
              <img src={look.image} alt={look.title} />
              <div className="image-title">{look.title}</div>
              <div className="overlay">
                <p>{look.info}</p>
              </div>
            </div>
            <div className="card-footer">
              <p className="price">Price: {look.price}</p>
              <button 
                className="book-btn" 
                onClick={() => handleBookNow(look)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* changes  */}
    </section>
  );
};  

export default BridalLooks;
