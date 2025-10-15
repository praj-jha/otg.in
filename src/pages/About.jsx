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
        <div className="min-h-screen bg-white">
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

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

                {/* Content */}
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                    {/* One Trillion Group India Tag */}
                    <div className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                        <span className="text-sm font-medium tracking-wide">One Trillion Group India</span>
                    </div>

                    {/* Hero Text */}
                    <h1 className={`text-5xl md:text-7xl font-light mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                            About Us
                        </span>
                    </h1>

                    <p className={`text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        We help founders and investors move faster—with clarity behind the numbers and the narrative.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-6">

                    {/* Our Story */}
                    <div className="mb-20">
                        <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
                            <p className="text-xl text-gray-800 font-light leading-relaxed mb-6">
                                One Trillion Group India was built on a simple idea:
                            </p>
                            <p className="text-xl text-gray-800 font-light leading-relaxed mb-6">
                                <span className="font-medium">Great companies don't raise capital because of beautiful decks.</span>
                            </p>
                            <p className="text-xl text-gray-800 font-light leading-relaxed mb-8">
                                They raise because their story makes sense—and the numbers behind it hold up.
                            </p>
                            <p className="text-lg text-gray-700 font-light leading-relaxed">
                                We work with startups, investors, and consulting firms to build financial models, pitch decks, investment memos, valuations, and capital raise strategy—across stages, sectors, and geographies.
                            </p>
                        </div>
                    </div>

                    {/* Where We Come From */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-light mb-6">
                                <span className="text-gray-900">Where We Come </span>
                                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">From</span>
                            </h2>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-12 rounded-3xl border border-orange-100">
                            <div className="space-y-6">
                                <p className="text-xl text-gray-800 font-light leading-relaxed">
                                    We come from operating roles, investment banking, and venture capital.
                                </p>
                                <p className="text-xl text-gray-800 font-light leading-relaxed">
                                    We've raised capital. Evaluated companies. Sat across the table in real deals.
                                </p>
                                <p className="text-xl text-gray-800 font-light leading-relaxed">
                                    And we've seen how most materials fail to explain what matters—or fall apart when questions get tough.
                                </p>
                                <p className="text-2xl text-gray-900 font-medium leading-relaxed">
                                    That's what we fix.
                                </p>
                                <p className="text-lg text-gray-700 font-light leading-relaxed">
                                    We bring structure, speed, and sharp thinking to the parts of fundraising that often slow things down—without overcomplicating the process.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Team Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-light mb-6">
                                <span className="text-gray-900">Our </span>
                                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Leadership</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Meet the team driving innovation across South Asia and the Indo-Pacific region
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Mick Sawhney */}
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                <div className="aspect-square overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100">
                                    <img
                                        src="/mick.jpg"
                                        alt="Mick Sawhney"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-orange-500">MS</div>';
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mick Sawhney</h3>
                                    <p className="text-orange-500 font-medium mb-3">Managing Director</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Leading strategic vision and operations with extensive experience in financial advisory and capital markets.
                                    </p>
                                </div>
                            </div>

                            {/* Rishabh Jain */}
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                <div className="aspect-square overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100">
                                    <img
                                        src="/Rj.jpg"
                                        alt="Rishabh Jain"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-orange-500">RJ</div>';
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Rishabh Jain</h3>
                                    <p className="text-orange-500 font-medium mb-3">Director - South Asia Indo-Pacific Region</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Spearheading regional growth and strategic partnerships across South Asia and Indo-Pacific markets.
                                    </p>
                                </div>
                            </div>

                            {/* Prajwal Jha */}
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                <div className="aspect-square overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100">
                                    <img
                                        src="/prj.png"
                                        alt="Prajwal Jha"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-orange-500">PJ</div>';
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Prajwal Jha</h3>
                                    <p className="text-orange-500 font-medium mb-3">Chief Technical Officer - South Asia Indo-Pacific Region</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Driving technological innovation and digital transformation initiatives across the region.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-12 text-white">
                        <p className="text-xl text-white/95 mb-8 leading-relaxed">
                            If you're working on something capital-related—and need clean, credible material—we're happy to support.
                        </p>
                        <InteractiveHoverButton
                            onClick={() => handleScheduleMeeting()}
                            className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            → Schedule a Call
                        </InteractiveHoverButton>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About
