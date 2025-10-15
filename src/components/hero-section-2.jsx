import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { TextRotate } from '@/components/ui/text-rotate'
import { LavaLamp } from '@/components/ui/fluid-blob'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const handleScheduleMeeting = () => {
    const appointmentLink = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1r1erspdw8QBh9sMgt0ikdTjkd9nnwIv-vyoM8RcRbExxkGzREe6avsGRzzrJweVNfb25UXV9R';
    window.open(appointmentLink, '_blank');
};

export function HeroSection() {
    return (
        <main className="min-h-screen overflow-hidden relative">
            {/* Fluid blob background */}
            <div className="absolute inset-0 -z-10 opacity-60">
                <LavaLamp />
            </div>

            <section className="min-h-screen flex flex-col justify-center relative z-10">
                <div className="relative pt-24 pb-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mx-auto text-center">
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-full max-w-4xl mx-auto">
                                        <h1
                                            className="mt-8 text-balance text-6xl font-normal md:text-7xl lg:text-8xl lg:mt-16">
                                            We handle your business{' '}
                                            <span className="relative">
                                                <TextRotate
                                                    texts={["Finance", "Slides", "Marketing"]}
                                                    rotationInterval={3000}
                                                    splitBy="characters"
                                                    mainClassName="bg-orange-500 text-white px-4 py-2 rounded-lg inline-flex"
                                                    staggerDuration={0.02}
                                                    transition={{
                                                        type: "spring",
                                                        damping: 20,
                                                        stiffness: 200
                                                    }}
                                                />
                                            </span>
                                        </h1>
                                        <p className="mt-8 text-pretty text-xl lg:text-2xl max-w-3xl mx-auto">
                                            Our team brings experience across investment banking, venture capital, and operator roles, so your materials are shaped by people who've raised, invested, and scaled.
                                        </p>
                                        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                                            <div key={1} className="p-0.5">
                                                <InteractiveHoverButton
                                                    onClick={() => handleScheduleMeeting()}
                                                    className="py-3 text-lg">
                                                    Schedule a Call
                                                </InteractiveHoverButton>
                                            </div>
                                            <Button
                                                key={2}
                                                asChild
                                                size="lg"
                                                variant="ghost"
                                                className="h-[52px] rounded-xl px-8 text-lg">
                                                <a href="#link">
                                                    <span className="text-nowrap">Email Us</span>
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}