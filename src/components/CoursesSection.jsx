import React from "react";
import "../css/CoursesSection.css";
import { BsYoutube } from "react-icons/bs";

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="courses-text">
        <h2 className="courses-heading">
          <BsYoutube style={{ color: "#FF0000", marginRight: "8px" }} />
          Our YouTube Channel
        </h2>
        <p className="courses-description">
          At Makeup Samrajya, we believe in sharing knowledge and artistry with the world.
          Our official YouTube channel features bridal transformations,
          professional makeup tutorials, and behind-the-scenes glimpses of our academy.
          Whether you’re a bride-to-be, a student eager to learn, or simply a beauty enthusiast,
          our videos bring expert techniques and creative inspiration right to your screen.
        </p>
        <button
          className="courses-btn"
          onClick={() =>
            window.open("https://youtube.com/@makeupsamrajya9220?si=D0zyKOSDYoUUmqxp", "_blank")
          }
        >
          🎥 Visit Channel
        </button>
      </div>

      <div className="courses-video">
        <a
          href="https://youtube.com/@makeupsamrajya9220?si=D0zyKOSDYoUUmqxp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="video-card">
            <img
              src="https://img.youtube.com/vi/K--w5FUgIcI/0.jpg"
              alt="Makeup Course Video Thumbnail"
              className="video-thumbnail"
            />
            <div className="video-overlay">
              <BsYoutube size={48} color="#fff" />
              <span>Watch Now</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CoursesSection;
