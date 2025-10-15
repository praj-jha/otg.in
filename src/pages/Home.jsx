import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/hero-section-2'
import Services from '../components/ServicesSection'
import { WhoWeWorkWithSection } from '../components/WhoWeWorkWithSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export function Home() {
    return (
        <div className="Home">
            {/* Main content */}
            <Navbar />
            <HeroSection />
            <Services />
            <WhoWeWorkWithSection />
            <ContactSection />
            <Footer />
        </div>
    )
}
