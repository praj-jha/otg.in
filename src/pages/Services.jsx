import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BarChart3, TrendingUp, FileText, Users, Shield, Target } from 'lucide-react'

const Services = () => {
    const allServices = [
        {
            icon: BarChart3,
            title: "Financial Models",
            description: "Driver-based, scenario-ready models that investors can easily follow so founders present with confidence.",
            details: "We build comprehensive financial models that tell your story through numbers. Our models are driver-based, scenario-ready, and designed for investor scrutiny. From revenue build-ups to three-statement models, we ensure every assumption is traceable and defensible.",
            features: [
                "Driver-Based Models",
                "Scenario Analysis", 
                "Investor-Ready Format",
                "Clear Navigation",
                "Revenue Build-Ups",
                "Three-Statement Integration"
            ],
            image: "/pic1.jpg",
        },
        {
            icon: Target,
            title: "Valuations",
            description: "Multi-method valuations grounded in context. Whether pricing a round or reviewing offers, we help you get there with confidence.",
            details: "Our valuation services combine multiple methodologies: DCF, comparable company analysis, precedent transactions to arrive at a well-supported range. We help you understand what your company is worth and how to defend that valuation to investors and acquirers.",
            features: [
                "Multi-Method Approach",
                "DCF Analysis",
                "Comparable Company Analysis",
                "Precedent Transactions",
                "Round Pricing",
                "Offer Review"
            ],
            image: "/pic2.jpg",
        },
        {
            icon: FileText,
            title: "Pitch Decks, Investment Memorandums & Blurbs",
            description: "Investor-focused narratives from 10-slide decks to 1-pagers. Sharp, informed, and aligned to your stage.",
            details: "We create investor materials that cut through the noise. Whether it's a concise 10-slide pitch deck, a detailed investment memo, or a one-page blurb, we structure the narrative around what investors actually care about: your market, traction, unit economics, and path to scale.",
            features: [
                "Investor Logic Structure",
                "10-slide Decks",
                "Investment Memos",
                "1-pager Summaries",
                "Stage-Aligned Content",
                "Clear Narrative Arc"
            ],
            image: "/pitchdeck.webp",
        },
        {
            icon: TrendingUp,
            title: "Raise Strategy & Term Sheet Advisory",
            description: "Focused investor outreach plans and term sheet support so you're prepared at every stage of the raise.",
            details: "Raising capital is more than pitch decks and models. We help you plan your outreach strategy, identify the right investors, prepare for due diligence, and navigate term sheets. Our support ensures you're making informed decisions at every stage of the raise.",
            features: [
                "Investor Outreach Planning",
                "Investor Identification",
                "Due Diligence Preparation",
                "Term Sheet Structuring",
                "Negotiation Support",
                "Raise Stage Preparation"
            ],
            image: "/strategy.jpg",
        },
        {
            icon: Shield,
            title: "Project Funding",
            description: "Infrastructure and project financing through non-recourse or limited-recourse financial structures.",
            details: "We structure project funding solutions for infrastructure, industrial projects, and large-scale developments. Our approach leverages sophisticated insurance and collateral structures to enable off-balance-sheet financing that doesn't strain corporate balance sheets.",
            features: [
                "Letter of Understanding",
                "Business Analysis",
                "In-Depth Due Diligence",
                "Risk Evaluation",
                "Project Funding Options",
                "Commitment Letter",
                "Approval & Funding"
            ],
            image: "/fund.jpg",
        },
        {
            icon: Shield,
            title: "Bank Instruments & Guarantees",
            description: "Financial instruments and backstops including SBLC, LC, BG, and various trade finance solutions.",
            details: "We facilitate access to bank instruments and guarantees that provide financial backstops for trade, project development, and business operations. These instruments serve as collateral to ensure obligations are met and enable access to capital and credit facilities.",
            features: [
                "Standby Letter of Credit (SBLC)",
                "Letter of Credit (LC)",
                "Bank Guarantee (BG)",
                "Bank Draft (BD)",
                "Medium Term Note (MTN)",
                "Performance Bond (PB)"
            ],
            image: "/bank.webp",
        },
        {
            icon: Users,
            title: "Business Consultancy",
            description: "Bespoke strategic solutions for start-ups, unicorns, and industrial development firms.",
            details: "When off-the-shelf solutions don't cut it, our consultancy services deliver bespoke strategies and implementations. We work with entrepreneurial start-ups, unicorns, and industrial firms to solve complex business challenges with innovative, results-oriented solutions.",
            features: [
                "Bespoke Financial Solutions",
                "Strategic Business Planning",
                "Start-up & Unicorn Support",
                "New Technology Advisory",
                "Industrial Development",
                "Results-Oriented Solutions"
            ],
            image: "/consulting.jpg",
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-light mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Our Services
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Comprehensive financial solutions across the capital lifecycle
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10 pointer-events-none" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="space-y-16">
                        {allServices.map((service, index) => (
                            <div 
                                key={index}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                            >
                                {/* Image */}
                                <div className="w-full lg:w-1/2">
                                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                                        <img 
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                                        <h2 className="text-3xl font-semibold text-white mb-4">{service.title}</h2>
                                        
                                        <p className="text-lg text-white/80 mb-4">{service.description}</p>
                                        <p className="text-white/70 mb-6">{service.details}</p>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-sm text-white/70">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Services

