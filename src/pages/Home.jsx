import React from 'react'
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import Self from '../components/Self';
import BridalSection from '../components/BridalSection';
import BridalShowcase from '../components/BridalLooks';
import VideoGrid from '../components/VideoGrid';
import CoursesSection from '../components/CoursesSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsApp';

export default function Home() {
  return (
    <>
    <Navbar/>
     <HeroSlider/>
        <Self/>
       <BridalSection/>
       <BridalShowcase/>
       <VideoGrid />
       <CoursesSection/>
       <WhatsAppButton/>
        <Footer/>
    </>
  )
}
