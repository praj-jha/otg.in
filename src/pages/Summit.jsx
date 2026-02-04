import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CometCard } from '../components/ui/comet-card'
import { SplineScene } from '../components/ui/SplineScene'
import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const speakers = [
    {
        name: "Rajesh Sharma",
        role: "CEO, Venture Capital Fund",
        image: "/pr.png",
    },
    {
        name: "Priya Mehta",
        role: "Managing Director, Investment Bank",
        image: "/Rj.jpg",
    },
    {
        name: "Amit Patel",
        role: "Founder, Unicorn Startup",
        image: "/mick.jpg",
    },
    {
        name: "Sneha Reddy",
        role: "Partner, Private Equity",
        image: "/pr.png",
    },
    {
        name: "Vikram Singh",
        role: "Chief Economist",
        image: "/Rj.jpg",
    },
    {
        name: "Ananya Gupta",
        role: "Head of Strategy, Fortune 500",
        image: "/mick.jpg",
    },
    {
        name: "Karan Malhotra",
        role: "Serial Entrepreneur",
        image: "/pr.png",
    },
    {
        name: "Neha Kapoor",
        role: "CFO, Tech Giant",
        image: "/Rj.jpg",
    },
    {
        name: "Suhas",
        role: "Industry Expert",
        image: "/suhas.jpeg",
    },
    {
        name: "Adriana",
        role: "Strategic Advisor",
        image: "/adriana.jpeg",
    }
]

const pricingPlans = [
    {
        name: "Early Bird",
        price: "$99",
        originalPrice: "$149",
        description: "Limited time offer",
        features: [
            "Full day access",
            "Networking lunch",
            "Conference materials",
            "Certificate of attendance",
            "Access to recordings"
        ],
        popular: false,
        cta: "Register Now"
    },
    {
        name: "VIP Pass",
        price: "$299",
        originalPrice: "$399",
        description: "Premium experience",
        features: [
            "Everything in Early Bird",
            "Front row seating",
            "VIP networking dinner",
            "1-on-1 speaker meetups",
            "Exclusive workshop access",
            "Priority Q&A sessions"
        ],
        popular: true,
        cta: "Get VIP Access"
    },
    {
        name: "Corporate",
        price: "$999",
        originalPrice: "$1,299",
        description: "For teams of 5",
        features: [
            "5 VIP passes included",
            "Dedicated seating block",
            "Company logo display",
            "Speaking opportunity",
            "Private meeting room",
            "Post-event lead list"
        ],
        popular: false,
        cta: "Contact Sales"
    }
]

export function Summit() {
    const navigate = useNavigate()
    const [currentSlide, setCurrentSlide] = useState(0)
    const slidesPerView = 4

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev + slidesPerView >= speakers.length ? 0 : prev + 1
        )
    }

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? speakers.length - slidesPerView : prev - 1
        )
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-black min-h-screen font-light">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
                        {/* Left side - Text content */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-10">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                                </span>
                                <span className="text-white/60 text-xs tracking-wide font-light">26 March 2026 • New Delhi</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-tight">
                                OTG Global
                                <span className="block text-purple-400 font-light">
                                    Summit 2026
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/50 max-w-2xl lg:mx-0 mx-auto mb-14 font-light leading-relaxed">
                                India's premier finance and strategy conference bringing together industry leaders,
                                investors, and innovators.
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-normal text-sm tracking-wide transition-all duration-300 hover:bg-white/90"
                                >
                                    Register Now
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#speakers"
                                    className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-8 py-4 rounded-full font-light text-sm tracking-wide transition-all duration-300 hover:border-white/40"
                                >
                                    View Speakers
                                </a>
                            </div>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 text-white/40 text-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span className="font-light">26 March 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="font-light">New Delhi</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    <span className="font-light">500+ Attendees</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Spline Robot */}
                        <div className="flex-1 h-[400px] md:h-[500px] lg:h-[600px] w-full">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Scrolling banner */}
                <div className="absolute bottom-0 left-0 right-0 bg-purple-900 py-4 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...Array(12)].map((_, i) => (
                            <span key={i} className="flex items-center mx-12 text-white font-light text-sm tracking-widest uppercase">
                                OTG Global Summit
                                <span className="mx-6 text-purple-300">✦</span>
                                New Delhi
                                <span className="mx-6 text-purple-400">•</span>
                                26 March 2026
                                <span className="mx-6 text-purple-300">✦</span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Partners Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-black via-purple-950/5 to-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-purple-400/80 text-xs font-light uppercase tracking-[0.2em]">Partnerships</span>
                        <h2 className="text-4xl md:text-5xl font-extralight text-white mt-3 tracking-tight">
                            Featured Partners for the Event
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Svitch */}
                        <div className="group relative rounded-2xl p-8 bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500 hover:translate-y-[-4px]">
                            <div className="absolute top-6 right-6 text-purple-400/40 text-xs font-light">01</div>
                            <h3 className="text-white text-xl font-light mb-2 tracking-tight">Svitch</h3>
                            <p className="text-white/40 text-sm font-light">EV Motorcycle</p>
                        </div>

                        {/* Soul Strips */}
                        <div className="group relative rounded-2xl p-8 bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500 hover:translate-y-[-4px]">
                            <div className="absolute top-6 right-6 text-purple-400/40 text-xs font-light">02</div>
                            <h3 className="text-white text-xl font-light mb-2 tracking-tight">Soul Strips</h3>
                            <p className="text-white/40 text-sm font-light">Nutritional Dissolvable Supplements</p>
                        </div>

                        {/* Metabolics */}
                        <div className="group relative rounded-2xl p-8 bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500 hover:translate-y-[-4px]">
                            <div className="absolute top-6 right-6 text-purple-400/40 text-xs font-light">03</div>
                            <h3 className="text-white text-xl font-light mb-2 tracking-tight">Metabolics</h3>
                            <p className="text-white/40 text-sm font-light">BioTech</p>
                        </div>

                        {/* Destination Travels */}
                        <div className="group relative rounded-2xl p-8 bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500 hover:translate-y-[-4px]">
                            <div className="absolute top-6 right-6 text-purple-400/40 text-xs font-light">04</div>
                            <h3 className="text-white text-xl font-light mb-2 tracking-tight">Destination Travels</h3>
                            <p className="text-white/40 text-sm font-light">Travels and Tours</p>
                        </div>

                        {/* Amazing Party House */}
                        <div className="group relative rounded-2xl p-8 bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500 hover:translate-y-[-4px] md:col-span-2 lg:col-span-1">
                            <div className="absolute top-6 right-6 text-purple-400/40 text-xs font-light">05</div>
                            <h3 className="text-white text-xl font-light mb-2 tracking-tight">Amazing Party House</h3>
                            <p className="text-white/40 text-sm font-light">"Big or Small, We Do It All"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About One Trillion Group Section */}
            <section className="py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-purple-400 text-sm tracking-widest uppercase font-light">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mt-4 tracking-tight">
                            About One Trillion Group
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left side - Video */}
                        <div className="flex-1 w-full">
                            <div className="relative rounded-2xl overflow-hidden aspect-video bg-white/5 border border-white/10">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/otg.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                                Pioneering <span className="text-purple-400">Financial Engineering</span> Globally
                            </h3>

                            <p className="text-white/60 text-lg leading-relaxed mb-6 font-light">
                                One Trillion Group is a global financial engineering powerhouse, dedicated to transforming
                                the way businesses and investors approach capital markets, strategic investments, and
                                wealth creation.
                            </p>

                            <p className="text-white/50 text-base leading-relaxed font-light">
                                With a presence across multiple continents, we combine cutting-edge financial technology
                                with deep market expertise to deliver innovative solutions. Our team of seasoned professionals
                                works alongside entrepreneurs, corporations, and institutional investors to unlock unprecedented
                                growth opportunities and navigate complex financial landscapes.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Speakers Slider Section */}
            <section id="speakers" className="py-32 px-6 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-end justify-between mb-16">
                        <div>
                            <span className="text-purple-400/80 text-xs font-light uppercase tracking-[0.2em]">Featured</span>
                            <h2 className="text-4xl md:text-5xl font-extralight text-white mt-3 tracking-tight">
                                Hon'ble Speakers & Panelists
                            </h2>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={prevSlide}
                                className="p-3 border border-white/10 rounded-full text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-3 border border-white/10 rounded-full text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out gap-6"
                            style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView + 2)}%)` }}
                        >
                            {speakers.map((speaker, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-[calc(25%-18px)] group"
                                >
                                    <div className="aspect-square overflow-hidden mb-5 rounded-xl">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-white font-light text-lg tracking-tight">{speaker.name}</h3>
                                    <p className="text-white/40 text-sm font-light mt-1">{speaker.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-32 px-6 bg-black border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-purple-400/80 text-xs font-light uppercase tracking-[0.2em]">Pricing</span>
                        <h2 className="text-4xl md:text-5xl font-extralight text-white mt-3 tracking-tight">
                            Choose Your Pass
                        </h2>
                        <p className="text-white/40 text-base font-light mt-6 max-w-lg mx-auto">
                            Select the experience that fits your needs.
                        </p>

                        {/* Ticket Sales Progress */}
                        <div className="mt-12 max-w-md mx-auto">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-white/60 text-sm font-light">Passes Sold</span>
                                <span className="text-purple-400 text-sm font-medium">83 / 200 <span className="text-white/40 font-light">(41.5%)</span></span>
                            </div>
                            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: '41.5%' }}
                                />
                                <div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400/50 to-violet-400/50 rounded-full animate-pulse"
                                    style={{ width: '41.5%' }}
                                />
                            </div>
                            <p className="text-white/30 text-xs font-light mt-3">🔥 Hurry! Only 117 passes remaining</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-4px] ${plan.popular
                                    ? 'bg-gradient-to-b from-purple-500/20 to-purple-900/10 border border-purple-500/50 shadow-lg shadow-purple-500/10'
                                    : 'bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs font-light px-3 py-1 rounded-full tracking-wide">
                                        Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-white text-lg font-light mb-1">{plan.name}</h3>
                                    <p className="text-white/30 text-xs font-light">{plan.description}</p>
                                    <div className="flex items-baseline gap-2 mt-6">
                                        <span className="text-3xl font-light text-white">{plan.price}</span>
                                        <span className="text-white/30 line-through text-sm font-light">{plan.originalPrice}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-10">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/60 text-sm font-light">
                                            <CheckCircle className="w-4 h-4 text-purple-400/70 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3.5 rounded-full font-light text-sm tracking-wide transition-all duration-300 ${plan.popular
                                        ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:shadow-lg hover:shadow-purple-500/30'
                                        : 'bg-white/5 text-white hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Director's Message Section */}
            <section className="py-32 px-6 bg-black border-t border-white/5 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[200px]" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-purple-400/80 text-xs font-light uppercase tracking-[0.2em]">Message</span>
                        <h2 className="text-4xl md:text-5xl font-extralight text-white mt-3 tracking-tight">
                            Director's Message
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <CometCard className="flex justify-center">
                            <div className="rounded-2xl overflow-hidden">
                                <img
                                    src="/mick.jpg"
                                    alt="Director"
                                    className="w-full h-auto max-w-[550px] lg:max-w-[700px] object-cover"
                                />
                            </div>
                        </CometCard>

                        <div className="space-y-6">
                            <p className="text-white/60 text-lg font-light leading-relaxed">
                                "The OTG Global Summit represents our commitment to fostering meaningful connections
                                between industry leaders, innovators, and visionaries. This gathering is more than
                                a conference—it's a catalyst for transformation in the financial landscape."
                            </p>
                            <p className="text-white/50 text-base font-light leading-relaxed">
                                "We invite you to join us in New Delhi for what promises to be an extraordinary
                                experience of learning, networking, and inspiration. Together, we will shape
                                the future of finance and strategy."
                            </p>
                            <div className="pt-4">
                                <h4 className="text-white font-light text-lg">Mick Sawhney</h4>
                                <p className="text-purple-400/80 text-sm font-light">Founder & Director, One Trillion Group</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Venue Section */}
            <section className="py-32 px-6 bg-black border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[150px] animate-float" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-purple-400/80 text-xs font-light uppercase tracking-[0.2em]">Location</span>
                            <h2 className="text-4xl md:text-5xl font-extralight text-white mt-3 mb-8 tracking-tight">
                                Venue
                            </h2>
                            <p className="text-white/40 text-base font-light leading-relaxed mb-10">
                                Join us at one of New Delhi's most prestigious conference venues,
                                equipped with state-of-the-art facilities.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-white/30 mt-0.5" />
                                    <div>
                                        <h4 className="text-white font-light">Address</h4>
                                        <p className="text-white/40 text-sm font-light mt-1"> Maharashtra Sadan, New Delhi - 110070</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="w-5 h-5 text-white/30 mt-0.5" />
                                    <div>
                                        <h4 className="text-white font-light">Date & Time</h4>
                                        <p className="text-white/40 text-sm font-light mt-1">26 March 2026, 9:00 AM onwards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4897894889183!2d77.1465!3d28.5245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzI4LjIiTiA3N8KwMDgnNDcuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="grayscale opacity-60"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 bg-black border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-tight">
                        Ready to Join?
                    </h2>
                    <p className="text-white/40 text-lg font-light mb-12">
                        Limited seats available.
                    </p>
                    <a
                        href="#pricing"
                        className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-normal text-sm tracking-wide transition-all duration-300 hover:bg-white/90"
                    >
                        Register Now
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            <Footer />

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
        </div>
    )
}
