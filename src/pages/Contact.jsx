import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactHero';
import MapSection from '../components/MapSection';
import WhatsAppButton from '../components/WhatsAppButton'
import ContactIcons from '../components/ContactIcons';

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <ContactHero/>
        <WhatsAppButton/>
        <MapSection/>
        <ContactIcons/>
        <Footer/>

    </div>
  )
}
