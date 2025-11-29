import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
        window.scrollTo(0, 0);
    };

    const handleBackClick = () => {
        setSelectedBlog(null);
        window.scrollTo(0, 0);
    };

    const blogs = [
        {
            id: 1,
            title: "The Art of Building Investor-Ready Financial Models",
            excerpt: "Learn how to structure financial models that tell a compelling story and withstand investor scrutiny.",
            date: "November 15, 2024",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            content: `
                Building financial models for investors is more than spreadsheet work. It's about telling a story through numbers that makes sense at every level of scrutiny.

                Start with clear revenue drivers. Investors want to understand what moves the needle in your business. Whether it's active users, average transaction size, or enterprise contracts, make these drivers explicit and defensible.

                Structure your model in layers. Begin with core assumptions, build up to unit economics, then aggregate to P&L, balance sheet, and cash flow. Each layer should flow logically from the previous one.

                Scenario planning is essential. Build base, upside, and downside cases. Investors will stress-test your assumptions, so show them you've already thought through the risks and opportunities.

                Keep navigation simple. Use clear sheet names, color coding for inputs and outputs, and consistent formatting throughout. A confused investor is unlikely to write a check.

                Finally, document your assumptions. Add a dedicated sheet explaining key drivers, growth rates, and margin assumptions. This transparency builds credibility and makes due diligence smoother.
            `
        },
        {
            id: 2,
            title: "Valuation Methods That Actually Matter in Fundraising",
            excerpt: "Understanding which valuation approaches investors trust and how to build a defensible valuation range.",
            date: "November 10, 2024",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            content: `
                Valuation is often where founders and investors first diverge. Understanding which methods matter and when can help bridge that gap.

                The Discounted Cash Flow (DCF) method remains the gold standard for mature companies. It values a company based on projected future cash flows, discounted to present value. The challenge? Startups often have negative cash flows for years, making this less relevant in early stages.

                Comparable company analysis looks at how similar public companies are valued. Metrics like EV/Revenue or P/E ratios provide market-based benchmarks. This works well when clear comparables exist, but struggles with novel business models.

                Precedent transactions examine recent M&A deals in your space. This method captures control premiums and strategic value, making it particularly relevant for exit planning or later-stage rounds.

                Venture Capital Method works backwards from an assumed exit value and required return. Early-stage investors often use this to determine ownership targets and valuation caps.

                In practice, most fundraising valuations use a combination of methods to triangulate a reasonable range. The key is presenting a coherent argument that acknowledges market reality while making your case for growth potential.

                Remember that valuation is a negotiation tool, not a precise science. Use multiple methods to build credibility, but focus your pitch on the business fundamentals that create value.
            `
        },
        {
            id: 3,
            title: "Term Sheet Essentials: What Founders Need to Know",
            excerpt: "Navigate term sheets with confidence. Understanding key terms that impact control, economics, and future flexibility.",
            date: "November 5, 2024",
            readTime: "12 min read",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
            content: `
                A term sheet is not just about valuation. The terms you accept today will shape your company's trajectory for years to come.

                Valuation and ownership are the headline numbers, but dig deeper. Pre-money vs post-money valuation matters. An option pool created before the round (pre-money) dilutes founders more than one created after (post-money).

                Liquidation preference determines who gets paid first and how much when the company exits. A 1x non-participating preference is standard. Anything higher (2x, 3x) or participating preferences significantly favor investors over common shareholders.

                Anti-dilution provisions protect investors if you raise future rounds at lower valuations. Broad-based weighted average is founder-friendly. Full ratchet is extremely dilutive and should be avoided unless absolutely necessary.

                Board composition affects control. A balanced board (founders, investors, independents) preserves flexibility. Investor-heavy boards can constrain decision-making, especially in difficult situations.

                Protective provisions give investors veto rights on major decisions. Standard items include future fundraising, M&A, and changes to charter. Watch for overly broad provisions that could limit operational flexibility.

                Pro-rata rights allow investors to maintain their ownership percentage in future rounds. This is standard and generally founder-friendly as it shows investor commitment.

                Before signing, model out scenarios. What happens if you raise a down round? What if an acquisition offer comes in below your last valuation? Understanding these edge cases helps you negotiate better terms upfront.
            `
        },
        {
            id: 4,
            title: "Building a Fundraising Strategy That Works",
            excerpt: "From identifying the right investors to closing the round, a systematic approach to capital raising.",
            date: "October 28, 2024",
            readTime: "15 min read",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
            content: `
                Fundraising is a process, not an event. Success comes from preparation, targeting, and execution discipline.

                Start with the right timing. Fundraise when you have momentum: growing revenues, strong retention, expanding margins, or hitting key milestones. Investors back trajectories, not promises.

                Define your raise clearly. How much capital do you need? What milestones will it fund? What ownership dilution is acceptable? These parameters guide every subsequent decision.

                Build your investor list strategically. Research funds that invest in your stage, sector, and geography. Look at their portfolio to understand thesis fit. Target 50-100 investors initially, then narrow based on feedback.

                Craft your narrative before diving into materials. What problem are you solving? Why now? Why is your team positioned to win? This story anchors your pitch deck, model, and conversations.

                Prepare for due diligence early. Organize cap table, contracts, financials, and IP documentation. Slow due diligence kills momentum and signals operational weakness.

                Run a tight process. Update your investor list weekly, track conversations systematically, and maintain momentum. The best rounds come together quickly once you find the right lead.

                Negotiate thoughtfully. Beyond valuation, focus on terms that preserve flexibility and align incentives. Reference your lawyer early and often.

                The best fundraises are those you don't need to do. Build from a position of strength: growing business, clear path to profitability, and options if the raise doesn't materialize.
            `
        }
    ];

    if (selectedBlog) {
        return (
            <div className="min-h-screen bg-black">
                <Navbar />
                
                <article className="pt-32 pb-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <button 
                            onClick={handleBackClick}
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
                        >
                            <ArrowRight className="w-4 h-4 rotate-180" />
                            Back to Blogs
                        </button>

                        {/* Blog Header */}
                        <div className="mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                {selectedBlog.title}
                            </h1>
                            <div className="flex items-center gap-6 text-white/70">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">{selectedBlog.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">{selectedBlog.readTime}</span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-video rounded-2xl overflow-hidden mb-8 border border-white/10">
                            <img 
                                src={selectedBlog.image}
                                alt={selectedBlog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10">
                            <div className="prose prose-invert prose-lg max-w-none">
                                {selectedBlog.content.split('\n\n').map((paragraph, idx) => (
                                    paragraph.trim() && (
                                        <p key={idx} className="text-white/80 leading-relaxed mb-6">
                                            {paragraph.trim()}
                                        </p>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </article>

                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10 pointer-events-none" />
                
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-light mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Insights & Articles
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Expert perspectives on fundraising, financial modeling, and capital strategy
                    </p>
                </div>
            </section>

            {/* Blogs Grid */}
            <section className="py-16 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogs.map((blog) => (
                            <div 
                                key={blog.id}
                                onClick={() => handleBlogClick(blog)}
                                className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                            >
                                {/* Image */}
                                <div className="aspect-video overflow-hidden">
                                    <img 
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{blog.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{blog.readTime}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {blog.title}
                                    </h2>

                                    <p className="text-white/70 mb-4 leading-relaxed">
                                        {blog.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                                        <span className="text-sm font-medium">Read More</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Blogs

