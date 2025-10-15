import React, { useEffect, useState } from 'react'
import { ChevronDown, Presentation, FileText, Target, ArrowRight, CheckCircle } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const PitchDecks = () => {
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
            backgroundImage: `url('/nyc3.png')`
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
            <span className="text-white">Pitch Decks, Investment </span>
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Memorandums & Blurbs
            </span>
          </h1>

          <p className={`text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Compelling investment materials that tell your story and drive results
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
                Professional investment materials that capture attention and communicate value effectively
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Presentation className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Investor Presentations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create compelling pitch decks that clearly communicate your value proposition and growth story to potential investors.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Due Diligence Materials</h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop comprehensive investment memorandums and supporting materials for detailed investor review.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Marketing Materials</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create executive summaries and teaser materials that generate interest and drive initial conversations.
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
                Comprehensive suite of investment materials tailored to your fundraising goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  'Professional pitch deck design and content development',
                  'Comprehensive investment memorandum with detailed business analysis',
                  'Executive summary and teaser materials',
                  'Financial projections and supporting models',
                  'Market analysis and competitive positioning',
                  'Management team profiles and organizational structure'
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
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Material Suite</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our complete package provides everything you need for a successful fundraising process, from initial outreach to final negotiations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Pitch Deck (15-20 slides)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Investment Memorandum</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Executive Summary</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Financial Models</span>
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
                Perfect for companies at various stages seeking investment or strategic partnerships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Startups',
                'Growth Companies',
                'Private Equity',
                'Investment Banks',
                'Corporate Development',
                'Family Offices',
                'Venture Capital',
                'Strategic Acquirers'
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
                Our collaborative process ensures materials that effectively communicate your story
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Story Development',
                  description: 'Work with you to craft a compelling narrative that resonates with investors.'
                },
                {
                  step: '02',
                  title: 'Content Creation',
                  description: 'Develop detailed content covering all aspects of your business and opportunity.'
                },
                {
                  step: '03',
                  title: 'Design & Layout',
                  description: 'Create professional, visually appealing materials that enhance your message.'
                },
                {
                  step: '04',
                  title: 'Review & Refine',
                  description: 'Iterate based on your feedback to ensure materials meet your needs.'
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
              Ready to Tell Your Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Create investment materials that capture attention and drive results for your fundraising.
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

export default PitchDecks
