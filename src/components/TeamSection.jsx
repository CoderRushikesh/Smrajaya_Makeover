import React from "react";
import "../css/TeamSection.css";
import teamPhoto from "../image/samrajyaGroup.jpeg"; // replace with your actual team image

const TeamSection = () => {
  return (
    <section className="team-section">
     <div className="team-wrapper">
  {/* Info first */}
  <div className="team-info">
    <h2>Meet Our Team</h2>
    <p>Our dedicated team of makeup artists and stylists bring creativity,
       passion, and expertise to every project...</p>
    <p>We believe in teamwork, innovation, and personalized care...</p>
  </div>

  {/* Photo second */}
  <div className="team-photo">
    <img src={teamPhoto} alt="Our Team" />
  </div>
</div>

    </section>
  );
};

export default TeamSection;
