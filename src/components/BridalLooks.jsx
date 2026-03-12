import React from "react";
import "../css/BridalLooks.css";
import img1 from "../image/Bridal2.jpg";
import img2 from "../image/preWedding1.jpg";
import img3 from "../image/sangeet1.jpg";
import img4 from "../image/haldi1.jpg";
import img5 from "../image/mainMakeup.jpg";
import img6 from "../image/fashion1.jpg";
import img15 from "../image/Event1.jpg";
import img7 from "../image/traditional.jpg";
import img8 from "../image/Retro1.jpg";
import img9 from "../image/Editorial1.jpg";
import img10 from "../image/Prosthetic1.jpg";
import img11 from "../image/smokee1.jpg";
import img12 from "../image/decor1.jpg";
import img13 from "../image/color1.jpg";
import img14 from "../image/fantasy1.jpg";


const bridalLooks1 = [
  { image: img1, title: "Bridal makeup", },
  { image: img2, title: "Pre-wedding Makeup" },
  { image: img3, title: "Sangeet Makeup"  },
  { image: img4, title: "Haldi Makeup"  },
  { image: img5, title: "Airbrush makeup"  },
  { image: img6, title: "Fashion makeup" },
  { image : img15, title : "Event-Look makeup"},
  { image: img7, title: "Traditional makeup"  },
  { image: img8, title: "Retro makeup" },
  { image: img9, title: "Editorial makeup" },
  { image: img10, title: "Prostheetic Makeup" },
  { image: img11, title: "Smoky eyes makeup" },
  { image: img12, title: "Decor makeup" },
  { image: img13, title: "Colour photography , makeup"},
  { image: img14, title: "Fantasy Makeup"  },
];

const BridalLooks = () => {
  const whatsappNumber = "918788661412"; // without + sign

  const handleBookNow = (look) => {
    const message = `Hello ma'am i am coming through your website , I am interested in booking the ${look.title}.  Please share more details.`;
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
              <p className="price"> Confirm your booking with afordable price  </p>
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
