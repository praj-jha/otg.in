import React from 'react';
import { TestimonialsColumn } from './blocks/testimonials-columns-1';

// Sample testimonial data - you can replace with your actual data
const firstColumnTestimonials = [
    {
        text: "Black & Arrow transformed our business with their innovative solutions. Their team went above and beyond our expectations.",
        image: "/prj2.png",
        name: "Prajwal Jha",
        role: "Founder, Perhance Media"
    },
    {
        text: "Working with Black & Arrow was a game changer. Their attention to detail and commitment to excellence is unparalleled.",
        image: "/2.JPG",
        name: "Michael Chen",
        role: "CTO, InnovateCorp"
    },
    {
        text: "The team at Black & Arrow delivered exceptional results. They truly understand our business needs and objectives.",
        image: "/1.jpg",
        name: "Emily Rodriguez",
        role: "Marketing Director, GrowthLabs"
    }
];

const secondColumnTestimonials = [
    {
        text: "Black & Arrow provided us with cutting-edge solutions that helped us stay ahead of the competition.",
        image: "/1.jpg",
        name: "David Wilson",
        role: "Product Manager, NextWave"
    },
    {
        text: "Their strategic approach and creative thinking make Black & Arrow the ideal partner for any business looking to scale.",
        image: "/3.jpg",
        name: "Sophia Lee",
        role: "Operations Director, ScaleUp"
    },
    {
        text: "We've seen tremendous growth since partnering with Black & Arrow. Their team is responsive, knowledgeable, and dedicated.",
        image: "/2.JPG",
        name: "James Thompson",
        role: "Founder, BuildBetter"
    }
];

const thirdColumnTestimonials = [
    {
        text: "The expertise and professionalism at Black & Arrow is outstanding. They've helped us achieve our goals faster than anticipated.",
        image: "/1.jpg",
        name: "Olivia Martinez",
        role: "VP of Sales, RevenueBoost"
    },
    {
        text: "Black & Arrow's solutions are elegant, effective, and exactly what our business needed to move forward in today's market.",
        image: "/2.JPG",
        name: "Daniel Park",
        role: "Tech Lead, FutureSystems"
    },
    {
        text: "I'm impressed with the level of service and results we've received from Black & Arrow. Highly recommended for any business.",
        image: "/3.jpg",
        name: "Rachel Adams",
        role: "COO, StrategicGrowth"
    }
];

export const TestimonialsSection = () => {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We've helped businesses of all sizes achieve their goals. Here's what some of our clients have to say about working with us.
                    </p>
                </div>

                <div className="flex justify-center gap-6 lg:gap-10">
                    {/* First column */}
                    <div className="hidden md:block w-72 h-[30rem] overflow-hidden">
                        <TestimonialsColumn
                            className="w-full h-full"
                            testimonials={firstColumnTestimonials}
                            duration={15}
                        />
                    </div>

                    {/* Second column - visible on all devices */}
                    <div className="w-72 h-[30rem] overflow-hidden">
                        <TestimonialsColumn
                            className="w-full h-full"
                            testimonials={secondColumnTestimonials}
                            duration={20}
                        />
                    </div>

                    {/* Third column */}
                    <div className="hidden lg:block w-72 h-[30rem] overflow-hidden">
                        <TestimonialsColumn
                            className="w-full h-full"
                            testimonials={thirdColumnTestimonials}
                            duration={18}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
