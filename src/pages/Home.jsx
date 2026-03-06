import React from 'react'
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlier';
import Self from '../components/self';
import BridalSection from '../components/BridalSection';
import BridalShowcase from '../components/bridalLooks';
import VideoGrid from '../components/videoGrid';
import CoursesSection from '../components/CoursesSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/whatsApp';

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
