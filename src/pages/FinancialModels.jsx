import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Button } from '@/components/ui/button'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { ArrowRight } from 'lucide-react'

const handleScheduleMeeting = () => {
    const appointmentLink = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1r1erspdw8QBh9sMgt0ikdTjkd9nnwIv-vyoM8RcRbExxkGzREe6avsGRzzrJweVNfb25UXV9R';
    window.open(appointmentLink, '_blank');
};

export function FinancialModels() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar className="text-white" />

            {/* Hero Section */}
            <main className="min-h-screen flex items-center justify-center relative">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/nyc3.png')"
                    }}
                />

                {/* Black gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
                    <div className="text-center">
                        {/* One Trillion Group India Tag */}
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                            <span className="text-white/80 text-sm font-light tracking-wide">One Trillion Group India</span>
                        </div>

                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight mb-6"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            <span className="text-white">Financial</span> <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Models</span>
                        </h1>

                        <p className="text-lg lg:text-xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                            Driver-based, scenario-ready models that investors can easily follow—so founders present with confidence.
                            Build robust financial models that drive strategic decisions with real-world experience backing every assumption.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <InteractiveHoverButton
                                onClick={() => handleScheduleMeeting()}
                                className="py-3 px-6 text-base font-light"
                            >
                                Schedule Consultation
                            </InteractiveHoverButton>

                            <Button
                                asChild
                                size="lg"
                                variant="ghost"
                                className="h-[48px] rounded-xl px-6 text-base font-light border border-white/30 hover:bg-white/10 text-white"
                            >
                                <a href="mailto:contact@onetrilliongroup.in">
                                    <span>Email Us</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Scroll Animation Line */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex flex-col items-center animate-bounce">
                        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center mb-2">
                            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                        </div>
                        <div className="text-white/60 text-xs font-light tracking-widest">SCROLL</div>
                        <svg
                            className="w-4 h-4 mt-2 text-white/60 animate-bounce"
                            style={{ animationDelay: '0.5s', animationDuration: '2s' }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </main>

            {/* Why You Might Need This Section */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-16">
                        Why You Might Need This
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-semibold text-lg">1</span>
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-4">Your numbers don't tell the full story.</h3>
                            <p className="text-gray-600 font-light leading-relaxed text-sm">
                                Revenue is growing, but you're not sure how to show it. Costs are rising, but it's unclear why. We help you turn scattered data into a model that makes sense—internally and externally.
                            </p>
                        </div>

                        <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-semibold text-lg">2</span>
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-4">You're raising capital, but the model feels shaky.</h3>
                            <p className="text-gray-600 font-light leading-relaxed text-sm">
                                Investors are asking for projections, runway, and funding needs—and you're either stuck in an old file or don't know where to begin. We help you build a model that's clear, structured, and easy to walk through.
                            </p>
                        </div>

                        <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-semibold text-lg">3</span>
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-4">You want to test scenarios before making a move.</h3>
                            <p className="text-gray-600 font-light leading-relaxed text-sm">
                                Whether it's pricing a round, evaluating a deal, or planning a hire—we help you model it out and see the impact before making the decision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-16">
                        What's Included
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white font-semibold">1</span>
                                </div>
                                <h3 className="text-xl font-light text-gray-900">Fundraising Models (Seed to Series C)</h3>
                            </div>
                            <p className="text-gray-600 font-light mb-4 text-sm">For investor conversations, board discussions, and capital planning.</p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                                    Revenue and cost drivers
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                                    Monthly P&L and cash flow
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                                    Cap table + dilution
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                                    Scenario toggles
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                                    Funding needs and runway view
                                </div>
                            </div>
                        </div>

                        <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white font-semibold">2</span>
                                </div>
                                <h3 className="text-xl font-light text-gray-900">Project Finance Models</h3>
                            </div>
                            <p className="text-gray-600 font-light mb-4 text-sm">For capital-heavy expansions, infra projects, or one-off vertical builds.</p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                                    Unit economics & ramp-up assumptions
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                                    Operating vs financing cash flows
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                                    Debt/equity mix modeling
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                                    Payback period & IRR
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                                    Risk buffers & returns under scenarios
                                </div>
                            </div>
                        </div>

                        <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white font-semibold">3</span>
                                </div>
                                <h3 className="text-xl font-light text-gray-900">Buy-Side/Investor Evaluation Models</h3>
                            </div>
                            <p className="text-gray-600 font-light mb-4 text-sm">For investors reviewing opportunities or family offices needing analysis.</p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                                    Cash flow forecasting
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                                    Scenario stress testing
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                                    Valuation & ROI metrics
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                                    Sensitivity analysis
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                                    Return profiles by entry/exit points
                                </div>
                            </div>
                        </div>

                        <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white font-semibold">4</span>
                                </div>
                                <h3 className="text-xl font-light text-gray-900">Internal Operating Models</h3>
                            </div>
                            <p className="text-gray-600 font-light mb-4 text-sm">For teams wanting internal visibility before speaking to investors.</p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                                    Team hiring plans
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                                    Unit-level margin structures
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                                    GTM cost buildouts
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                                    Cohort or retention logic
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 font-light text-lg mb-4">
                            We work across sectors—SaaS, healthcare, consumer, infra, financial services, and more.
                        </p>
                        <p className="text-gray-600 font-light">
                            Thanks to our diverse backgrounds, we're comfortable picking things up quickly—so whatever space you're in, feel free to book a call.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-6">
                            <span className="text-gray-900">Who It's </span>
                            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">For</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our financial modeling services serve a wide range of stakeholders and use cases
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            'Startups & Founders',
                            'Consulting Firms',
                            'Investors & Family Offices',
                            'Private Equity Firms',
                            'Investment Banks',
                            'Corporate Development',
                            'Financial Advisors',
                            'Portfolio Companies'
                        ].map((category, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                                <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">{category}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-6">
                            <span className="text-gray-900">How It </span>
                            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Works</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our proven process ensures accurate, investor-ready financial models
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Initial Discovery',
                                description: 'Understand your business model, key drivers, and specific requirements.'
                            },
                            {
                                step: '02',
                                title: 'Model Architecture',
                                description: 'Design the model structure and identify key assumptions and drivers.'
                            },
                            {
                                step: '03',
                                title: 'Build & Test',
                                description: 'Develop the model with integrated scenarios and sensitivity analysis.'
                            },
                            {
                                step: '04',
                                title: 'Review & Refine',
                                description: 'Iterate based on your feedback to ensure accuracy and usability.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                    <div className="text-3xl font-bold text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-6 h-6 text-gray-300" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Let's Talk Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Let's Talk</h2>
                    <p className="text-lg text-gray-600 font-light mb-8">
                        If you're working on something and think we could be a good fit—happy to chat.
                    </p>
                    <InteractiveHoverButton
                        onClick={() => handleScheduleMeeting()}
                        className="py-4 px-8 text-lg font-light"
                    >
                        → Schedule a Call
                    </InteractiveHoverButton>
                </div>
            </section>

            <Footer />
        </div>
    )
}
