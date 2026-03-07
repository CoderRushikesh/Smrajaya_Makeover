import React from "react";
import "../css/TeamSection.css";
import teamPhoto from "../image/samrajyaGroup.jpeg"; // replace with your actual team image

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-wrapper">
        {/* Left side: Team photo */}
        <div className="team-photo">
          <img src={teamPhoto} alt="Our Team" />
        </div>

        {/* Right side: Team info */}
        <div className="team-info">
          <h2>Meet Our Team</h2>
          <p>
            Our dedicated team of makeup artists and stylists bring creativity,
            passion, and expertise to every project. With years of experience in
            bridal and event styling, we work together to ensure every client
            feels confident and radiant.
          </p>
          <p>
            We believe in teamwork, innovation, and personalized care for each
            bride, making sure your special day is truly unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
