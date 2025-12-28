import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Hero from '../components/ui/neural-network-hero'
import Services from '../components/ServicesSection'
import { Footer } from '../components/Footer'

const handleScheduleMeeting = () => {
    const appointmentLink = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1r1erspdw8QBh9sMgt0ikdTjkd9nnwIv-vyoM8RcRbExxkGzREe6avsGRzzrJweVNfb25UXV9R';
    window.open(appointmentLink, '_blank');
};

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            {/* Main content */}
            <Navbar />
            <Hero
                title="Financial Engineering and Consulting Group"
                description="We bring deep expertise in financial engineering, quantitative modeling, and strategic analytics. From sophisticated financial models to derivatives valuation, risk management to capital structure optimization, we deliver technical precision and data-driven insights."
                badgeText="Financial Engineering and Consulting Group"
                badgeLabel="Elite"
                ctaButtons={[
                    { text: "Schedule a Call", href: "#get-started", primary: true, onClick: handleScheduleMeeting },
                    { text: "View Our Services", href: "/services", onClick: () => navigate('/services') }
                ]}
                microDetails={["Institutional Quality", "Data-Driven Insights", "Results Oriented"]}
            />
            <Services />
            <Footer />
        </div>
    )
}
