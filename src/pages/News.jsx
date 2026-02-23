import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ChevronRight } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        category: "Platform Updates",
        title: "Docker Delivery Now Available for Enterprise Cohorts",
        date: "Feb 18, 2026",
        author: "Auratral Product Team",
        excerpt: "We are thrilled to announce that enterprise customers can now provision custom clinical cohorts entirely within secure, self-contained Docker environments. This update significantly reduces the infrastructure overhead for biomedical R&D teams.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
    },
    {
        id: 2,
        category: "Regulatory",
        title: "Understanding HIPAA Expert Determination for AI Model Training",
        date: "Feb 10, 2026",
        author: "Sarah Jenkins, VP Compliance",
        excerpt: "As healthcare AI scales, the Safe Harbor de-identification standard is often insufficient for complex longitudinal datasets. We explore how Auratral utilizes Expert Determination to preserve clinical utility while guaranteeing privacy.",
        imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800&h=400",
    },
    {
        id: 3,
        category: "New Dataset",
        title: "Expansion: 500k New Records Added to the Cardiovascular Cohort",
        date: "Feb 02, 2026",
        author: "Auratral Data Ops",
        excerpt: "Our flagship longitudinal cardiovascular dataset has been updated with half a million new encounters spanning the latest 18 months, complete with high-resolution ECG telemetry and medication adherence logs.",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173eff3e8fc?auto=format&fit=crop&q=80&w=800&h=400",
    },
    {
        id: 4,
        category: "Healthcare AI",
        title: "Combating Demographic Bias in Clinical Machine Learning",
        date: "Jan 24, 2026",
        author: "Dr. Alistair Vance",
        excerpt: "A deep dive into why representative training data is the biggest bottleneck in medical AI, and how our new demographic bias configuration tool helps engineering teams build fairer algorithms.",
        imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800&h=400",
    },
    {
        id: 5,
        category: "Company News",
        title: "Auratral Achieves ISO 27001 Certification Phase 1",
        date: "Jan 15, 2026",
        author: "Auratral Executive Team",
        excerpt: "We are proud to announce the successful completion of our Phase 1 audit for ISO 27001 certification. As a trusted medical data broker, security remains our foundational operating principle.",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800&h=400",
    }
];

const categories = ["All", "Platform Updates", "New Dataset", "Regulatory", "Healthcare AI", "Company News"];

const News = () => {
    return (
        <div className="pt-32 pb-16 min-h-screen bg-slate-900">

            {/* Header */}
            <div className="container mx-auto px-8 mb-12">
                <h1 className="text-4xl font-bold text-primary mb-4">News & Insights</h1>
                <p className="text-secondary max-w-3xl text-lg">
                    Platform announcements, deep dives into healthcare data regulation, and best practices for clinical AI development.
                </p>
            </div>

            <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-4 gap-12">

                {/* Main Content */}
                <div className="lg:col-span-3 space-y-12">
                    {/* Featured Article */}
                    <div className="glass-panel overflow-hidden group cursor-pointer hover:border-purple-500/50 transition-colors">
                        <div className="h-64 sm:h-80 overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-800 animate-pulse"></div>
                            <img
                                src={newsItems[0].imageUrl}
                                alt={newsItems[0].title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 relative z-10"
                            />
                            <div className="absolute top-4 left-4 z-20">
                                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    {newsItems[0].category}
                                </span>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex gap-4 text-xs text-slate-400 mb-3">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {newsItems[0].date}</span>
                                <span className="flex items-center gap-1"><User size={14} /> {newsItems[0].author}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-teal-400 transition-colors">
                                {newsItems[0].title}
                            </h2>
                            <p className="text-secondary mb-6 leading-relaxed">
                                {newsItems[0].excerpt}
                            </p>
                            <Link to={`/news/${newsItems[0].id}`} className="text-teal-400 font-semibold flex items-center gap-1 hover:text-teal-300">
                                Read Full Article <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

          /* Grid of remaining articles */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {newsItems.slice(1).map((item) => (
                            <div key={item.id} className="glass-panel overflow-hidden group cursor-pointer hover:border-teal-500/50 transition-colors flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-800 animate-pulse"></div>
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 relative z-10"
                                    />
                                    <div className="absolute top-3 left-3 z-20">
                                        <span className="bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold px-2 py-1 rounded">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                                        <Calendar size={12} /> {item.date}
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-purple-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-secondary text-sm mb-6 flex-grow line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                    <Link to={`/news/${item.id}`} className="text-teal-400 text-sm font-semibold flex items-center gap-1 mt-auto hover:text-teal-300">
                                        Read Article <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center pt-8">
                        <button className="btn btn-outline px-8">Load More Articles</button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-8">

                    {/* Email Subscribe */}
                    <div className="glass-panel p-6 border-purple-500/20">
                        <h3 className="text-lg font-bold text-primary mb-2">Auratral Insights</h3>
                        <p className="text-sm text-secondary mb-4">Get the latest updates on medical data compliance and new longitudinal cohorts straight to your inbox.</p>
                        <div className="space-y-3">
                            <input type="email" placeholder="Professional Email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-primary focus:border-purple-500 outline-none" />
                            <button className="w-full btn btn-primary py-2 text-sm">Subscribe</button>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-3 text-center">We respect your privacy. Unsubscribe at any time.</p>
                    </div>

                    {/* Categories */}
                    <div className="glass-panel p-6">
                        <h3 className="text-lg font-bold text-primary mb-4">Categories</h3>
                        <ul className="space-y-2">
                            {categories.map((cat, idx) => (
                                <li key={idx}>
                                    <Link to="#" className="flex justify-between items-center text-sm text-slate-300 hover:text-teal-400 transition-colors py-1">
                                        {cat} <ChevronRight size={14} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Twitter / Socials stub */}
                    <div className="glass-panel p-6 bg-gradient-to-br from-slate-800 to-slate-900">
                        <h3 className="text-md font-bold text-primary mb-2">Follow Us</h3>
                        <p className="text-sm text-secondary mb-4">Join our community of clinical researchers and engineers.</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary hover:bg-slate-700 hover:text-[#1DA1F2] transition-colors">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary hover:bg-slate-700 hover:text-[#0A66C2] transition-colors">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default News;
