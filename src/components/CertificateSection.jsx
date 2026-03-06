import React from "react";
import "../css/CertificateSection.css";
import certificateImg from "../image/certificate.jpeg"; // replace with your certificate image

const CertificateSection = () => {
  return (
    <section className="certificate-section">
      <div className="certificate-wrapper">
        <img src={certificateImg} alt="Certificate" className="certificate-img" />
      </div>
      <div className="certificate-text">
        <h2>Our Certification</h2>
        <p>
          At Samrajya Makeover, we are proud to be certified in professional
          bridal and beauty artistry. This certification reflects our commitment
          to maintaining high standards of quality, creativity, and client
          satisfaction. It ensures that every bride receives expert care and
          flawless results on her special day.
        </p>
      </div>
    </section>
  );
};

export default CertificateSection;
