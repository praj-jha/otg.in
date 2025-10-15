import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, TrendingUp, FileText, Users, Shield, Target } from 'lucide-react';

const Services = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: BarChart3,
            title: "Financial Models",
            description: "Driver-based, scenario-ready models that investors can easily follow—so founders present with confidence.",
            features: ["Driver-Based Models", "Scenario Analysis", "Investor-Ready Format", "Clear Navigation"],
            image: "/pic1.jpg",
            route: "/financial-models"
        },
        {
            icon: Target,
            title: "Valuations",
            description: "Multi-method valuations grounded in context. Whether pricing a round or reviewing offers—we help you get there with confidence.",
            features: ["Multi-Method Approach", "Contextual Analysis", "Round Pricing", "Offer Review"],
            image: "/pic2.jpg",
            route: "/valuations"
        },
        {
            icon: FileText,
            title: "Pitch Decks, Investment Memorandums & Blurbs",
            description: "Investor-focused narratives from 10-slide decks to 1-pagers—sharp, informed, and aligned to your stage.",
            features: ["Investor Logic Structure", "10-slide Decks", "1-pager Summaries", "Stage-Aligned Content"],
            image: "/pic3.jpg",
            route: "/pitch-decks"
        },
        {
            icon: TrendingUp,
            title: "Raise Strategy & Term Sheet Advisory",
            description: "Focused investor outreach plans and term sheet support—so you're prepared at every stage of the raise.",
            features: ["Investor Outreach Planning", "Term Sheet Structuring", "Negotiation Support", "Raise Stage Preparation"],
            image: "/pic1.jpg",
            route: "/raise-strategy"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Times, "Times New Roman", serif', fontWeight: '600', letterSpacing: '0.02em' }}>
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide comprehensive financial advisory services designed to drive growth,
                        optimize performance <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-lg font-semibold">and create sustainable value for our clients.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group cursor-pointer transform hover:-translate-y-2 border border-gray-200 hover:border-orange-500"
                        >
                            <div className="flex gap-6">
                                {/* Left side - Image Box */}
                                <div className="flex-shrink-0">
                                    <div className="w-48 h-72 rounded-xl overflow-hidden bg-gray-100 relative">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Right side - Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center text-gray-600 text-sm">
                                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                                                    <span className="truncate">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-100">
                                        <button
                                            onClick={() => service.route ? navigate(service.route) : null}
                                            className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition-colors duration-300 flex items-center text-sm"
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

                <div className="text-center mt-12">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors duration-300 transform hover:scale-105">
                        Explore All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;