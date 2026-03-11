import React from "react";
import "../css/OwnerSection.css";
import ownerPhoto from "../image/owner.jpg"; // replace with actual owner image

const OwnerSection = () => {
  return (
    <section className="owner-section">

         <h2>Meet Our Founder</h2>
      <div className="owner-wrapper">
       
     
        <div className="owner-photo">
          <img src={ownerPhoto} alt="Owner" />
        </div>

        {/*seowr*/}
        <div className="owner-info">
        
          <p>
            <strong>Khusbu Ma'am</strong>, the visionary behind our beauty parlour,
            is a passionate artist dedicated to enhancing natural beauty with
            creativity and precision. With years of experience in bridal makeup
            and event styling, Tejas has built a reputation for elegance,
            professionalism, and personalized care.
          </p>
          <p>
            her mission is to make every client feel confident and radiant,
            turning special occasions into timeless memories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
