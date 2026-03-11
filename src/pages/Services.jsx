import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SliderService from '../components/SliderService'; // ✅ now resolves correctly
import BridalLooks from '../components/BridalLooks';
import CoursesSection from '../components/CoursesSection';
import ServiceHero from '../components/ServiceHero';
import WhatsAppButton from '../components/WhatsAppButton';
import VideoGrid from '../components/VideoGrid';

export default function Services() {
  return (
    <div>
      <Navbar />
      <ServiceHero />
      <SliderService style={{ marginTop: "60px", marginBottom: "60px" }} />
      <BridalLooks />
      <VideoGrid />
      <CoursesSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
