import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import CertificateSection from '../components/CertificateSection'
import AboutHero from '../components/aboutHero'
import Self from '../components/self';
import OwnerSection from '../components/ownerSection'
import TeamSection from '../components/teamMem'
import WhatsAppButton from '../components/whatsApp'

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
