import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'

const handleScheduleMeeting = () => {
    const appointmentLink = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1r1erspdw8QBh9sMgt0ikdTjkd9nnwIv-vyoM8RcRbExxkGzREe6avsGRzzrJweVNfb25UXV9R';
    window.open(appointmentLink, '_blank');
};

const About = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="min-h-screen bg-black">
            <Navbar className="text-white" />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/newyork.png')`
                    }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

                {/* Content */}
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    {/* One Trillion Group India Tag */}
                    <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                        <span className="text-sm font-medium tracking-wide">One Trillion Group India</span>
                    </div>

                    {/* Hero Text */}
                    <h1 className={`text-5xl md:text-7xl font-light mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            About Us
                        </span>
                    </h1>

                    <p className={`text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        We help founders and investors move faster—with clarity behind the numbers and the narrative.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-gradient-to-b from-black via-blue-950/20 to-black relative">
                {/* Bluish gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10 pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 relative z-10">

                    {/* About Us Paragraph */}
                    <div className="mb-20">
                        <div className="bg-white/5 backdrop-blur-md p-12 rounded-3xl shadow-lg border border-white/10">
                            <p className="text-xl text-white/90 font-light leading-relaxed text-center">
                                We work with startups, investors, and consulting firms to build financial models, pitch decks, investment memos, valuations, and capital raise strategy. As a financial engineering and consulting group, we bring deep expertise from venture capital and operating roles—bringing clarity to the numbers and narratives that drive capital decisions across stages, sectors, and geographies.
                            </p>
                        </div>
                    </div>

                    {/* Leadership Team Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-light mb-6">
                                <span className="text-white">Our </span>
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Leadership</span>
                            </h2>
                            <p className="text-lg text-white/70 max-w-2xl mx-auto">
                                Meet the team driving innovation across South Asia and the Indo-Pacific region
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Mick Sawhney */}
                            <div className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                                <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/30 relative">
                                    <img
                                        src="/mick.jpg"
                                        alt="Mick Sawhney"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-blue-400">MS</div>';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-2">Mick Sawhney</h3>
                                    <p className="text-blue-400 font-medium mb-3 text-sm">Managing Director</p>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Leading strategic vision and operations with extensive experience in financial advisory and capital markets.
                                    </p>
                                </div>
                            </div>

                            {/* Rishabh Jain */}
                            <div className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                                <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/30 relative">
                                    <img
                                        src="/Rj.jpg"
                                        alt="Rishabh Jain"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-blue-400">RJ</div>';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-2">Rishabh Jain</h3>
                                    <p className="text-blue-400 font-medium mb-3 text-sm">Director - South Asia Indo-Pacific Region</p>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Spearheading regional growth and strategic partnerships across South Asia and Indo-Pacific markets.
                                    </p>
                                </div>
                            </div>

                            {/* Prajwal Jha */}
                            <div className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                                <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/30 relative">
                                    <img
                                        src="/pr.png"
                                        alt="Prajwal Jha"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-blue-400">PJ</div>';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-2">Prajwal Jha</h3>
                                    <p className="text-blue-400 font-medium mb-3 text-sm">CTO - South Asia Indo-Pacific Region</p>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Driving technological innovation and digital transformation initiatives across the region.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section - Now with Button */}
                    <div className="text-center">
                        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                            If you're working on something capital-related—and need clean, credible material—we're happy to support.
                        </p>
                        <InteractiveHoverButton
                            onClick={() => handleScheduleMeeting()}
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
                        >
                            Schedule a Call →
                        </InteractiveHoverButton>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About
