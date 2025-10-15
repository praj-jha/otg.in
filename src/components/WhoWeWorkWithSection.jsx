import React from 'react';
import { ChevronRight, ArrowRight, Target, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

const clientTypes = [
    {
        id: 1,
        title: 'Startups',
        shortTitle: 'Startups',
        description: 'Transform your vision into investor-ready materials that capture attention and drive action.',
        services: ['Pitch Decks', 'Financial Models', 'Valuations', 'Due Diligence Prep'],
        stats: { value: '50+', label: 'Startups Funded' },
        image: '/pic1.jpg',
        color: 'orange'
    },
    {
        id: 2,
        title: 'Consulting Firms',
        shortTitle: 'Consulting',
        description: 'Scale your advisory practice with white-label financial expertise and rapid delivery.',
        services: ['White-Label Deliverables', 'Rapid Turnaround', 'Scalable Support', 'Quality Assurance'],
        stats: { value: '100+', label: 'Projects Delivered' },
        image: '/pic2.jpg',
        color: 'orange'
    },
    {
        id: 3,
        title: 'Family Offices & Investors',
        shortTitle: 'Investors',
        description: 'Make informed investment decisions with thorough analysis and clear, actionable insights.',
        services: ['Due Diligence', 'Portfolio Support', 'Market Analysis', 'Risk Assessment'],
        stats: { value: '$2B+', label: 'Assets Analyzed' },
        image: '/pic3.jpg',
        color: 'orange'
    }
];

const approachSteps = [
    {
        step: '1',
        title: 'Quick Call',
        description: 'We understand your context, timelines, and what needs to be built.'
    },
    {
        step: '2',
        title: 'Scope & Quote',
        description: 'You get a clear scope, price, and delivery plan—within 24 hours.'
    },
    {
        step: '3',
        title: 'Build & Iterate',
        description: 'We get started fast, share drafts early, and refine based on feedback.'
    },
    {
        step: '4',
        title: 'Deliver with Confidence',
        description: 'Final outputs are clean, editable, and ready to share—with no loose ends.'
    }
];

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(8px)',
            y: 10,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 0.8,
            },
        },
    },
};

const handleScheduleMeeting = () => {
    const appointmentLink = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1r1erspdw8QBh9sMgt0ikdTjkd9nnwIv-vyoM8RcRbExxkGzREe6avsGRzzrJweVNfb25UXV9R';
    window.open(appointmentLink, '_blank');
};

//background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);

//background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);

export function WhoWeWorkWithSection() {
    return (
        <section className="py-16" style={{ backgroundImage: 'llinear-gradient(to top, #dfe9f3 0%, white 100%)' }}>
            <div className="mx-auto max-w-7xl px-6">
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}>

                    {/* Header */}
                    <div className="text-center mb-16">

                        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                            Who We Work With
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            We partner with ambitious teams across the financial ecosystem—from early-stage founders to established investment firms.
                        </p>
                    </div>

                    {/* Client Types Grid - 3 Columns */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {clientTypes.map((client, index) => (
                            <div
                                key={client.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group cursor-pointer transform hover:-translate-y-2 border border-gray-200 hover:border-orange-500 "
                            >
                                {/* Image at Top */}
                                <div className="mb-6">
                                    <div className="w-full h-48 rounded-xl overflow-hidden">
                                        <img
                                            src={client.image}
                                            alt={client.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Title and Stats */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                                        {client.title}
                                    </h3>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-xl font-bold text-black group-hover:text-orange-500 transition-colors">
                                            {client.stats.value}
                                        </span>
                                        <span className="text-gray-600 text-sm">{client.stats.label}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                                    {client.description}
                                </p>

                                {/* Services List */}
                                <div className="space-y-3 mb-6">
                                    <h4 className="font-semibold text-gray-900 text-sm text-center">Key Services:</h4>
                                    <div className="space-y-2">
                                        {client.services.map((service, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-2 bg-gray-50 group-hover:bg-orange-50 rounded-lg transition-colors">
                                                <div className="w-2 h-2 bg-black group-hover:bg-orange-500 rounded-full flex-shrink-0 transition-colors"></div>
                                                <span className="text-gray-700 text-sm font-medium">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="text-center pt-4 border-t border-gray-100">
                                    <InteractiveHoverButton
                                        onClick={handleScheduleMeeting}
                                        className="bg-black text-white hover:bg-orange-500 w-full transition-colors duration-300"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            Get Started

                                        </span>
                                    </InteractiveHoverButton>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Our Approach Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                            Our Approach
                        </h2>
                        <p className="text-lg text-gray-600">
                            We keep things simple and outcome-driven.
                        </p>
                    </div>

                    {/* Approach Steps */}
                    <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {/* Connecting line - positioned through middle of cards, thick */}
                        <div className="absolute left-0 right-0 h-1 bg-orange-600 hidden lg:block z-0" style={{ top: '50%', left: '8%', right: '8%', width: '84%', marginLeft: '8%', transform: 'translateY(-50%)' }}></div>

                        {approachSteps.map((step, index) => (
                            <div
                                key={step.step}
                                className="relative text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 z-10 border-2 border-orange-200 hover:border-orange-400"
                                style={{
                                    boxShadow: '0 0 20px rgba(249, 115, 22, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(249, 115, 22, 0.5), 0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 0 20px rgba(249, 115, 22, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}>
                                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-20 shadow-lg">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA Section */}
                    <div className="text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                            Whether you're raising capital, advising clients, or evaluating investments—we're here to strengthen what's behind your next big move.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <InteractiveHoverButton
                                onClick={handleScheduleMeeting}
                                className="py-3 text-lg"
                            >
                                <span className="flex items-center gap-2">
                                    Schedule a Call
                                </span>
                            </InteractiveHoverButton>
                            <div className="flex items-center gap-2 text-gray-600">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm">Usually respond within 2 hours</span>
                            </div>
                        </div>
                    </div>

                </AnimatedGroup>
            </div>
        </section>
    );
}
