import React, { useState, useEffect } from "react";
import "../css/HeroSlider.css";
import slide1 from "../image/nav2.jpeg";
import slide2 from "../image/services.png";
import slide3 from "../image/nav1.jpeg";

const slides = [slide1, slide2, slide3];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="slide-img" />
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
