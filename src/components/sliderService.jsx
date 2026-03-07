import React from "react";
import sampleVideo from "../videos/ServicePage.mp4";
import "../css/SliderService.css";

const SliderService = () => {
  const whatsappNumber = "918788661412";

  const handleBookAppointment = () => {
    const message = `Hello, I am interested in booking bridal services at Samrajya Makeover. Please share more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };


  // woeriwor

  return (
    <section className="slider-service">
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
    </section>
  );
};

export default SliderService;
