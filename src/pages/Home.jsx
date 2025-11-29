import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero from '../components/ui/neural-network-hero'
import Services from '../components/ServicesSection'
import { Footer } from '../components/Footer'

const handleScheduleMeeting = () => {
    const appointmentLink = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1r1erspdw8QBh9sMgt0ikdTjkd9nnwIv-vyoM8RcRbExxkGzREe6avsGRzzrJweVNfb25UXV9R';
    window.open(appointmentLink, '_blank');
};

export function Home() {
    return (
        <div className="Home">
            {/* Main content */}
            <Navbar />
            <Hero 
                title="Strategic Financial Advisory for Modern Enterprises"
                description="We bring deep expertise from investment banking, venture capital, and operating roles. From pitch decks to financial models, valuations to fundraising strategy, we help you secure capital and drive growth with precision."
                badgeText="Financial Engineering and Consulting group"
                badgeLabel="Elite"
                ctaButtons={[
                    { text: "Schedule a Call", href: "#get-started", primary: true, onClick: handleScheduleMeeting },
                    { text: "View Our Services", href: "#services" }
                ]}
                microDetails={["Institutional Quality", "Data-Driven Insights", "Results Oriented"]}
            />
            <Services />
            <Footer />
        </div>
    )
}
