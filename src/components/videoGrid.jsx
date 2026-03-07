import React, { useRef, useState } from "react";
import customer1 from "../videos/feedBack2.mp4"
import customer2 from "../videos/feedBack1.webm";
import customer3 from "../videos/feedBack3.mp4";
import "../css/VideoGrid.css";

const videos = [
  { src: customer1, name: "🌟🌟🌟🌟🌟" },
  { src: customer2, name: "💗💗💗💗💗" },
  { src: customer3, name: "😇😇😇😇😇" },
 
  // Add more videos herehworiew
];

const VideoGrid = () => {
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(Array(videos.length).fill(false));

  const handleToggle = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (isPlaying[index]) {
      video.pause();
    } else {
      video.play();
      video.controls = true;
    }

    // Update play/pause state
    const newState = [...isPlaying];
    newState[index] = !isPlaying[index];
    setIsPlaying(newState);
  };

  return (
    <section className="video-reviews">
      <h2>Customer Feedback</h2>
      <div className="video-grid">
        
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <div className="video-wrapper">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                muted
                playsInline
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <button
                className="play-button"
                onClick={() => handleToggle(index)}
              >
                {isPlaying[index] ? "⏸" : "▶"}
              </button>
            </div>
            <p>{video.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
