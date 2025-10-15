import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

const caseStudies = [
    {
        id: 1,
        title: 'Digital Transformation for Global Finance Firm',
        description: 'Helped a leading financial services company modernize their operations, resulting in 35% cost reduction and improved customer satisfaction.',
        image: '/4.jpg',
        tags: ['Finance', 'Digital Transformation'],
        link: '#case-study-1'
    },
    {
        id: 2,
        title: 'Strategic Growth Planning for Healthcare Provider',
        description: 'Developed a 5-year growth strategy for a healthcare network that led to successful market expansion and 40% revenue increase.',
        image: '/3.jpg',
        tags: ['Healthcare', 'Strategy'],
        link: '#case-study-2'
    },
    {
        id: 3,
        title: 'Supply Chain Optimization for Retail Giant',
        description: 'Redesigned supply chain processes for a major retailer, reducing inventory costs by 22% while improving fulfillment speed.',
        image: '/2.JPG',
        tags: ['Retail', 'Operations'],
        link: '#case-study-3'
    }
];

export function CaseStudiesSection() {
    return (
        <section id="case-studies" className="bg-background py-24">
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
                        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Case Studies</h2>
                        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                            Real-world examples of how we've helped organizations overcome challenges and achieve their goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((caseStudy) => (
                            <div
                                key={caseStudy.id}
                                className="group border rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={caseStudy.image}
                                        alt={caseStudy.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-0 inset-x-0 flex flex-wrap gap-2 p-4">
                                        {caseStudy.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-primary/80 text-white text-xs font-medium px-2.5 py-0.5 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                                    <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                                    <Button variant="ghost" size="sm" asChild className="group">
                                        <a href={caseStudy.link} className="flex items-center">
                                            Read case study
                                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button size="lg">View All Case Studies</Button>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    );
}
