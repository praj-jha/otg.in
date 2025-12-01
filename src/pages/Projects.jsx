import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projectCategories = [
        "Hotels, Resorts & Casinos",
        "Infrastructure Construction",
        "Textile Industries",
        "Restaurants, Food & Beverage Chains",
        "Franchise Companies",
        "Ice Cream & Yogurt Brands",
        "Commercial Real Estate Acquisition & Development",
        "Mining Industries",
        "Movies, TV & Broadway Shows Production",
        "Educational & Growth Companies",
        "Travel & Tours",
        "Aviation & Transportation",
        "Electric Vehicle & Battery Technology",
        "Hospitals, Healthcare, Medical Equipment & P.P.E",
        "Retail Stores & Strip Malls",
        "Personal Care, Gym, Spa's & Cosmetics",
        "Crypto Currency & E-Commerce",
        "Farming & Hydroponics",
        "Energy - Solar, Wind, Bio & Water Reclamation",
        "Medical & Lab - Research & Development",
        "Imports & Exports",
        "App Development",
        "Marketing & P.R. Companies",
        "Newspaper & Magazines",
        "Private & Public Construction Companies",
        "Coaching & Consulting Companies",
        "Real Estate Sales Companies",
        "International Commodity & Traders"
    ];

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/nyc2.png')`
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
                            Our Projects
                        </span>
                    </h1>

                    <p className={`text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        We support leading global companies uniquely positioned at the intersection of business goals and consumer needs.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-gradient-to-b from-black via-blue-950/20 to-black relative">
                {/* Bluish gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10 pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    {/* Description */}
                    <div className="mb-16">
                        <div className="bg-white/5 backdrop-blur-md p-12 rounded-3xl shadow-lg border border-white/10">
                            <p className="text-xl text-white/90 font-light leading-relaxed text-center">
                                Our clients have award-winning ideas, new technology, seamless business development systems, and more. Together, we explore the immense opportunities and possibilities that will help them build an impactful, successful business.
                            </p>
                        </div>
                    </div>

                    {/* Project Categories List */}
                    <div className="bg-white/5 backdrop-blur-md p-12 rounded-3xl shadow-lg border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {projectCategories.map((category, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-white/80 hover:text-blue-400 transition-colors duration-200 group"
                                >
                                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors flex-shrink-0" />
                                    <span className="text-lg font-light">{category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
