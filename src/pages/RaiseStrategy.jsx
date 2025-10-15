import React, { useEffect, useState } from 'react'
import { ChevronDown, Target, Users, FileCheck, ArrowRight, CheckCircle } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const RaiseStrategy = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section')
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar className="text-white" />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/nyc.avif')`
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          {/* One Trillion Group India Tag */}
          <div className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="text-sm font-medium tracking-wide">One Trillion Group India</span>
          </div>

          {/* Hero Text */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light mb-6 transition-all duration-1000 leading-tight ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white">Raise Strategy & </span>
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Term Sheet Advisory
            </span>
          </h1>

          <p className={`text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Strategic guidance through every step of your fundraising journey
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        >
          <div className="flex flex-col items-center space-y-2">
            {/* Mouse Container */}
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/70 transition-colors">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse group-hover:bg-white/80 transition-colors"></div>
            </div>
            {/* Bouncing Arrow */}
            <ChevronDown className="w-5 h-5 text-white/60 animate-bounce group-hover:text-white/80 transition-colors" />
            {/* Label */}
            <span className="text-xs text-white/50 font-medium tracking-wider group-hover:text-white/70 transition-colors">
              SCROLL
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="content-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Why You Might Need This */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                <span className="text-gray-900">Why You Might Need </span>
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">This</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate complex fundraising processes with expert strategy and term sheet guidance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Strategic Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop comprehensive fundraising strategies that align with your business goals and market conditions.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Investor Relations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Navigate investor conversations and negotiations with confidence and professional guidance.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Term Sheet Review</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understand and negotiate term sheets to protect your interests and maximize value.
                </p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                <span className="text-gray-900">What's </span>
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Included</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end support throughout your fundraising process
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  'Fundraising strategy development and timeline planning',
                  'Investor identification and targeting',
                  'Preparation for investor meetings and due diligence',
                  'Term sheet analysis and negotiation support',
                  'Legal and regulatory guidance',
                  'Post-investment planning and board preparation'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-100">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Advisory Services</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our comprehensive advisory services guide you through every aspect of the fundraising process, from strategy to closing.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Strategic Planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Process Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Negotiation Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Ongoing Guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who It's For */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                <span className="text-gray-900">Who It's </span>
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">For</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Supporting companies and stakeholders through critical fundraising moments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Early-stage Startups',
                'Growth Companies',
                'Management Teams',
                'Founders & CEOs',
                'Board Members',
                'Private Equity',
                'Family Offices',
                'Corporate Ventures'
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{category}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                <span className="text-gray-900">How It </span>
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach to maximize your fundraising success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Strategy Development',
                  description: 'Assess your situation and develop a comprehensive fundraising strategy.'
                },
                {
                  step: '02',
                  title: 'Preparation & Planning',
                  description: 'Prepare materials, identify targets, and plan the execution timeline.'
                },
                {
                  step: '03',
                  title: 'Process Execution',
                  description: 'Manage investor outreach, meetings, and due diligence processes.'
                },
                {
                  step: '04',
                  title: 'Negotiation & Closing',
                  description: 'Support term sheet negotiations and guide through to closing.'
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

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Plan Your Raise?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert guidance to navigate your fundraising process and achieve optimal outcomes.
            </p>
            <button className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Let's Talk
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default RaiseStrategy
