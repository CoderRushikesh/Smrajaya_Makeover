import React from "react";
import "../css/CoursesSection.css";
import { BsDisplay } from "react-icons/bs";

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="courses-text">
      
       
       
        <p className="courses-description">
          At Makeup Samrajya, we believe in sharing knowledge and artistry with the world.
           Our official YouTube channel features bridal transformations,
            professional makeup tutorials, and behind-the-scenes glimpses of our academy. Whether you’re a bride-to-be, a student eager to learn, or simply a beauty enthusiast, our videos bring expert techniques and creative inspiration right to your screen. Explore our channel to see real results, step-by-step guidance, and the passion that drives our academy.
        </p>
        <button className="courses-btn"  onClick={() => window.location.href = "/about"}> more about us </button>
      </div>

      <div className="courses-video">
        {/* Redirect to YouTube channel when clicked */}
        <h5 > Youtube Chanel </h5>
        <a
          href="https://youtube.com/@makeupsamrajya9220?si=D0zyKOSDYoUUmqxp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.youtube.com/vi/K--w5FUgIcI/0.jpg"
            alt="Makeup Course Video Thumbnail"
            className="video-thumbnail"
          />
        </a>

      </div>
    </section>
  );
};

export default CoursesSection;
