import React from 'react';
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

export function AboutSection() {
    return (
        <section id="about" className="bg-background/50 py-24">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">About One Trillion Group India</h2>
                            <p className="text-xl mb-4">
                                One Trillion Group India is a premier financial engineering and consulting group dedicated to helping businesses navigate complex challenges and achieve sustainable growth across South Asia and the Indo-Pacific region.
                            </p>
                            <p className="text-muted-foreground mb-6">
                                We've built a reputation for delivering exceptional results through our unique approach that combines deep industry expertise, innovative thinking, and collaborative partnerships with our clients.
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Our team of experienced consultants comes from diverse backgrounds, bringing a wealth of knowledge and perspectives to every project. We're committed to excellence, integrity, and creating tangible value for the organizations we serve.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <Button size="lg">Our Team</Button>
                                <Button variant="outline" size="lg">Our Process</Button>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border">
                                <img
                                    src="/3.jpg"
                                    alt="One Trillion Group India Team"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-primary/10 rounded-2xl w-full h-full -z-10"></div>
                        </div>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    );
}
