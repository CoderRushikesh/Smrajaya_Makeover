import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/footer';
import SliderService from '../components/sliderService';
import BridalLooks from '../components/BridalLooks';
import CoursesSection from '../components/CoursesSection';
import HeroStatic from '../components/serviceHero';
import ServiceHero from '../components/serviceHero';
import WhatsAppButton from '../components/whatsApp';

export default function Services() {
  return (
    <div>




      <Navbar />

      <ServiceHero />

      <SliderService style={{ marginTop: "60px", marginBottom: "60px" }} />
      <BridalLooks />
      <CoursesSection />
      <WhatsAppButton/>
      <Footer />
    </div>
  )
}
