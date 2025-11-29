import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, TrendingUp, FileText, Users, Shield, Target } from 'lucide-react';

const Services = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: BarChart3,
            title: "Financial Models",
            description: "Driver-based, scenario-ready models that investors can easily follow so founders present with confidence.",
            features: ["Driver-Based Models", "Scenario Analysis", "Investor-Ready Format", "Clear Navigation"],
            image: "/pic1.jpg",
            route: "/services"
        },
        {
            icon: Target,
            title: "Valuations",
            description: "Multi-method valuations grounded in context. Whether pricing a round or reviewing offers, we help you get there with confidence.",
            features: ["Multi-Method Approach", "Contextual Analysis", "Round Pricing", "Offer Review"],
            image: "/pic2.jpg",
            route: "/services"
        },
        {
            icon: FileText,
            title: "Pitch Decks, Investment Memorandums & Blurbs",
            description: "Investor-focused narratives from 10-slide decks to 1-pagers. Sharp, informed, and aligned to your stage.",
            features: ["Investor Logic Structure", "10-slide Decks", "1-pager Summaries", "Stage-Aligned Content"],
            image: "/pic3.jpg",
            route: "/services"
        },
        {
            icon: TrendingUp,
            title: "Raise Strategy & Term Sheet Advisory",
            description: "Focused investor outreach plans and term sheet support so you're prepared at every stage of the raise.",
            features: ["Investor Outreach Planning", "Term Sheet Structuring", "Negotiation Support", "Raise Stage Preparation"],
            image: "/pic1.jpg",
            route: "/services"
        },
        {
            icon: Shield,
            title: "Project Funding",
            description: "Infrastructure and project financing through non-recourse or limited-recourse financial structures.",
            features: ["Business Analysis", "Due Diligence", "Risk Evaluation", "Funding Options"],
            image: "/pic2.jpg",
            route: "/services"
        },
        {
            icon: Shield,
            title: "Bank Instruments & Guarantees",
            description: "Financial instruments and backstops including SBLC, LC, BG, and various trade finance solutions.",
            features: ["Standby Letter of Credit", "Bank Guarantees", "Medium Term Notes", "Performance Bonds"],
            image: "/pic3.jpg",
            route: "/services"
        },
        {
            icon: Users,
            title: "Business Consultancy",
            description: "Bespoke strategic solutions for start-ups, unicorns, and industrial development firms.",
            features: ["Strategic Planning", "Start-up Support", "Technology Advisory", "Industrial Development"],
            image: "/pic1.jpg",
            route: "/services"
        }
    ];

    return (
        <section id="services" className="py-12 md:py-16 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 md:mb-4 px-2" style={{ fontFamily: 'Times, "Times New Roman", serif', fontWeight: '600', letterSpacing: '0.02em' }}>
                        Our Services
                    </h2>
                    <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto px-4">
                        We provide comprehensive financial advisory services designed to drive growth,
                        optimize performance <span className="inline-block bg-gradient-to-r from-blue-700 to-blue-500 text-white px-2 sm:px-3 py-1 rounded-lg font-semibold text-sm sm:text-base">and create sustainable value for our clients.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 p-4 md:p-6 group cursor-pointer transform hover:-translate-y-2 border border-white/20 hover:border-blue-500"
                        >
                            {/* Mobile: Vertical Layout, Desktop: Horizontal Layout */}
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                                {/* Image Box */}
                                <div className="flex-shrink-0 w-full sm:w-40 md:w-48">
                                    <div className="w-full h-48 sm:h-64 md:h-72 rounded-xl overflow-hidden bg-gray-900 relative">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0 flex flex-col">
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-white/70 mb-3 md:mb-4 leading-relaxed text-sm">
                                        {service.description}
                                    </p>

                                    <div className="space-y-2 md:space-y-3 flex-grow">
                                        <h4 className="font-semibold text-white text-sm">Key Features:</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-start text-white/70 text-sm">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0 mt-1.5"></div>
                                                    <span className="leading-tight">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/10">
                                        <button
                                            onClick={() => service.route ? navigate(service.route) : null}
                                            className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-400 transition-all duration-300 flex items-center text-sm w-full sm:w-auto justify-center sm:justify-start"
                                        >
                                            Learn More
                                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 md:mt-12 px-4">
                    <button 
                        onClick={() => navigate('/services')}
                        className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto shadow-lg shadow-blue-600/30"
                    >
                        Explore All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;