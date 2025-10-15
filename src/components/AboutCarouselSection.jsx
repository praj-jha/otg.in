import React from 'react';
import { Carousel, Card } from './ui/apple-cards-carousel';
import { AnimatedGroup } from './ui/animated-group';

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

// Cards data for the carousel
const aboutCards = [
    {
        src: "/OS.jpg",
        title: "Startups",
        category: "Startups",
        content: (
            <div className="space-y-6 text-lg">
                <p>
                    One Trillion Group India has evolved into a premier advisory firm with a strong footprint across South Asia and the Indo-Pacific region. Our journey began with a vision to transform how businesses approach their strategic challenges.
                </p>
                <p>
                    We've grown to a team of dedicated professionals spanning the region, while maintaining our commitment to personalized service and exceptional results tailored to the unique dynamics of Asian markets.
                </p>
                <p>
                    Our methodology combines deep industry expertise with innovative thinking, creating solutions that not only address immediate needs but position our clients for long-term success in an ever-changing business landscape.
                </p>
            </div>
        ),
    },
    {
        src: "/ov.png",
        title: "Our Values",
        category: "Guiding Principles",
        content: (
            <div className="space-y-6 text-lg">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p>We strive for excellence in every aspect of our work, never settling for "good enough" when we can achieve greatness.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                    <p>We operate with unwavering integrity, maintaining the highest ethical standards in all our interactions.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p>We embrace innovation, constantly seeking new and better ways to address our clients' most complex challenges.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                    <p>We believe in the power of collaboration, working closely with our clients and each other to achieve extraordinary results.</p>
                </div>
            </div>
        ),
    },
    {
        src: "/OL.jpeg",
        title: "Our Leadership",
        category: "Meet the Team",
        content: (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                        <img src="/1.jpg" alt="CEO" className="w-full h-48 object-cover rounded-lg" />
                        <h3 className="text-xl font-semibold">Prajwal Jha</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Founder & CEO</p>
                        <p className="text-sm">Prajwal has over 20 years of experience in management consulting and has led major transformation initiatives for Fortune 500 companies.</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <img src="/3.jpg" alt="COO" className="w-full h-48 object-cover rounded-lg" />
                        <h3 className="text-xl font-semibold">Samantha Chen</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Chief Operating Officer</p>
                        <p className="text-sm">Samantha brings 15 years of operational excellence and has been instrumental in scaling our global operations.</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <img src="/2.JPG" alt="CTO" className="w-full h-48 object-cover rounded-lg" />
                        <h3 className="text-xl font-semibold">Michael Johnson</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Chief Technology Officer</p>
                        <p className="text-sm">Michael leads our digital transformation practice and has pioneered our data-driven approach to consulting.</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <img src="/1.jpg" alt="CFO" className="w-full h-48 object-cover rounded-lg" />
                        <h3 className="text-xl font-semibold">Sarah Miller</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Chief Financial Officer</p>
                        <p className="text-sm">Sarah oversees our financial strategy and has been key to our sustainable growth and profitability.</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        src: "/OA.jpeg",
        title: "Our Approach",
        category: "Methodology",
        content: (
            <div className="space-y-6 text-lg">
                <p>
                    At One Trillion Group India, we employ a unique four-phase approach that combines rigorous analysis with creative problem-solving:
                </p>
                <div>
                    <h3 className="text-xl font-semibold mb-2">1. Discover</h3>
                    <p>We begin with a comprehensive assessment of your current situation, challenges, and opportunities, using both qualitative and quantitative methods to develop a complete understanding.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">2. Design</h3>
                    <p>Building on our discoveries, we collaboratively design customized solutions that address your specific needs and align with your strategic objectives.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">3. Develop</h3>
                    <p>We meticulously develop implementation plans, defining clear metrics, milestones, and responsibilities to ensure successful execution.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">4. Deliver</h3>
                    <p>We work alongside your team to implement solutions, providing guidance, support, and adjustments as needed to deliver measurable results.</p>
                </div>
            </div>
        ),
    },
    {
        src: "/GP.jpeg",
        title: "Global Presence",
        category: "Where We Work",
        content: (
            <div className="space-y-6 text-lg">
                <p>
                    One Trillion Group India operates across South Asia and the Indo-Pacific region with presence in key business hubs. Our regional expertise allows us to bring deep understanding of local markets and cultural nuances to deliver solutions that work effectively across the region.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">South Asia</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>New York</li>
                            <li>San Francisco</li>
                            <li>Toronto</li>
                            <li>São Paulo</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Europe</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>London</li>
                            <li>Berlin</li>
                            <li>Paris</li>
                            <li>Amsterdam</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Asia Pacific</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Singapore</li>
                            <li>Tokyo</li>
                            <li>Sydney</li>
                            <li>Mumbai</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Middle East & Africa</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Dubai</li>
                            <li>Johannesburg</li>
                            <li>Tel Aviv</li>
                            <li>Riyadh</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
    },
];

export function AboutCarouselSection() {
    // Convert our card data into Card components
    const cardItems = aboutCards.map((card, index) => (
        <Card key={index} card={card} index={index} layout={true} />
    ));

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
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-stretch-110% font-light tracking-tight md:text-5xl">Who We Work With</h2>
                        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                            We work with startups, consulting firms, and investors—helping each one move faster and make better decisions around capital.
                        </p>
                    </div>
                </AnimatedGroup>

                <Carousel items={cardItems} />
            </div>
        </section>
    );
}
