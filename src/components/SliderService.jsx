import React from "react";
import sampleVideo from "../videos/ServicePage.mp4";
import showcaseImage from "../image/a5.jpg"; // replace with your image
import "../css/SliderService.css";

const SliderService = () => {
  const whatsappNumber = "+919405731098";

  const handleBookAppointment = () => {
    const message = `Hello, I am interested in booking bridal services at Samrajya Makeover. Please share more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="slider-service">
      {/* Image Section */}
      <div className="image-wrapper">
        <img
          src={showcaseImage}
          alt="Bridal Showcase"
          className="showcase-image fade-in"
        />
      </div>

      {/* Text Section */}
      <div className="text-wrapper">
        <h2>Our Bridal Services</h2>
        <p>
          At Samrajya Makeover, we specialize in elegant bridal looks that
          enhance your natural beauty. Our professional artistry ensures you
          shine on your special day.
        </p>
        <button className="hero-btn" onClick={handleBookAppointment}>
          Book Appointment
        </button>
      </div>

      {/* Video Section */}
      <div className="video-wrapper">
        <video
          className="background-video"
          src={sampleVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
};

export default SliderService;
