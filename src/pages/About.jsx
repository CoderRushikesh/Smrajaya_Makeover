import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CertificateSection from '../components/CertificateSection'
import AboutHero from '../components/AboutHero'
import Self from '../components/Self';
import OwnerSection from '../components/OwnerSection'
import TeamSection from '../components/TeamMem'
import WhatsAppButton from '../components/WhatsApp'

export default function about() {
  return (
    <div>
      <Navbar/>
      <AboutHero/>
     
      <CertificateSection/>
      <OwnerSection/>
      <Self/>
      <TeamSection/>
      <WhatsAppButton/>
        <Footer/>
    </div>
  )
}
