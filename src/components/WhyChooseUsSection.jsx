import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';

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
                duration: 1.2,
            },
        },
    },
};

const advantages = [
    {
        id: 1,
        title: 'Expert Team',
        description: 'Our consultants bring decades of combined experience across various industries and disciplines.'
    },
    {
        id: 2,
        title: 'Customized Solutions',
        description: 'We develop tailored strategies that address your specific challenges and opportunities.'
    },
    {
        id: 3,
        title: 'Data-Driven Approach',
        description: 'Our recommendations are backed by rigorous analysis and market intelligence.'
    },
    {
        id: 4,
        title: 'Proven Results',
        description: 'We have a track record of delivering measurable improvements and ROI for our clients.'
    },
    {
        id: 5,
        title: 'Collaborative Process',
        description: 'We work closely with your team to ensure alignment and successful implementation.'
    },
    {
        id: 6,
        title: 'Ongoing Support',
        description: "Our engagement doesn't end with delivery; we provide continued guidance and assistance."
    }
];

export function WhyChooseUsSection() {
    return (
        <section className="bg-primary/5 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-medium tracking-tight md:text-5xl">Why Choose One Trillion Group India</h2>
                        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                            What sets us apart and why leading organizations across South Asia and Indo-Pacific trust us with their most important challenges
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advantages.map((advantage) => (
                            <div key={advantage.id} className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <CheckCircle2 className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                                    <p className="text-muted-foreground">{advantage.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    );
}
