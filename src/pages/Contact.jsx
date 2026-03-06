import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/contactHero'
import MapSection from '../components/mapSection'
import WhatsAppButton from '../components/whatsApp'
import ContactIcons from '../components/contactIcons'

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
