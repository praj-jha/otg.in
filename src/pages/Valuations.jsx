import React, { useEffect, useState } from 'react'
import { ChevronDown, TrendingUp, Users, Briefcase, ArrowRight, CheckCircle } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const Valuations = () => {
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
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          {/* One Trillion Group India Tag */}
          <div className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="text-sm font-medium tracking-wide">One Trillion Group India</span>
          </div>

          {/* Hero Text */}
          <h1 className={`text-5xl md:text-7xl font-light mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white">Business </span>
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Valuations
            </span>
          </h1>

          <p className={`text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Comprehensive business valuations using industry-standard methodologies
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
                Accurate business valuations are essential for strategic decisions, fundraising, and transactions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Strategic Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understand your company's worth for strategic decision-making, exit planning, and growth strategies.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Fundraising</h3>
                <p className="text-gray-600 leading-relaxed">
                  Support fundraising efforts with professional valuations that give investors confidence in your numbers.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">M&A Transactions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Facilitate mergers, acquisitions, and other transactions with credible, defensible valuations.
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
                Comprehensive valuation analysis using multiple methodologies and industry best practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  'Multiple valuation methodologies (DCF, Comparable Company Analysis, Precedent Transactions)',
                  'Industry-specific analysis and benchmarking',
                  'Detailed financial projections and sensitivity analysis',
                  'Risk assessment and discount rate calculations',
                  'Management presentation and executive summary'
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
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Valuation Report</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our comprehensive valuation reports provide detailed analysis, methodology explanations, and defensible conclusions that meet professional standards.
                </p>                  <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Executive Summary</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Detailed Methodology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Supporting Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Appendices & Data</span>
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
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">For</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our valuation services serve a wide range of stakeholders and use cases
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Business Owners',
                'Private Equity Firms',
                'Investment Banks',
                'Corporate Development',
                'Legal Professionals',
                'Financial Advisors',
                'Tax Professionals',
                'Insurance Companies'
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">{category}</h3>
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
                Our proven process ensures accurate, defensible valuations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'Understand your valuation needs, purpose, and timeline requirements.'
                },
                {
                  step: '02',
                  title: 'Data Collection',
                  description: 'Gather financial statements, operational data, and market information.'
                },
                {
                  step: '03',
                  title: 'Analysis & Modeling',
                  description: 'Apply multiple valuation methodologies and conduct sensitivity analysis.'
                },
                {
                  step: '04',
                  title: 'Report & Presentation',
                  description: 'Deliver comprehensive report with findings and recommendations.'
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

          {/* CTA Section */}            <div className="text-center bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Get Your Business Valued?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get professional, defensible valuations that meet your specific needs and timeline.
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

export default Valuations
