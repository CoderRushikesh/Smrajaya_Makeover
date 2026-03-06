import React, { useState, useEffect } from "react";
import '../css/HeroSlider.css';
import slide1 from  "../image/makeUp.png";
import slide2 from  "../image/services.png";
import slide3 from  "../image/makeUp2.png";


const slides = [
  {
    image: slide1,
    heading: "Classy Brides",
    text: "Beautiful and natural bridal makeup",
  },
  {
    image: slide2,
    heading: "Elegant Looks",
    text: "Perfect for weddings and special occasions",
  },
  {
    image: slide3,
    heading: "Professional Artistry",
    text: "Enhancing your natural beauty",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h1>{slide.heading}</h1>
            <p>{slide.text}</p>
            {/* <button className="hero-btn">Book Appointment</button> */}
          </div>
        </div>
      ))}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
