import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactHero';
import MapSection from '../components/MapSection';
import WhatsAppButton from '../components/WhatsAppButton'
import ContactIcons from '../components/ContactIcons';
import MessageForm from '../components/MessageForm';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <MessageForm />
      <WhatsAppButton />
      <MapSection />
      <ContactIcons />
      <Footer />
    </div>
  )
}