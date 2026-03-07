import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import SliderService from '../components/SliderService';
import BridalLooks from '../components/BridalLooks';
import CoursesSection from '../components/CoursesSection';
// import HeroStatic from '../components/serviceHero';
import ServiceHero from '../components/ServiceHero';
import WhatsAppButton from '../components/WhatsApp';
import VideoGrid from '../components/VideoGrid';

export default function Services() {
  return (
    <div>


      <Navbar />
      <ServiceHero />
      <SliderService style={{ marginTop: "60px", marginBottom: "60px" }} />
      <BridalLooks />
      <VideoGrid/>
      <CoursesSection />
      <WhatsAppButton/>
      <Footer />
    </div>
  )
}
