import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
    {
        quote: "Auratral's ICU cohort data allowed us to validate our sepsis prediction model with demographics that accurately matched our target clinical population.",
        author: "Dr. Elena Rostova",
        role: "Lead Clinical ML Engineer, BioTech Innovations",
        rating: 5,
        dataset: "Longitudinal ICU Encounters"
    },
    {
        quote: "Sourcing HIPAA-compliant research data used to take our pharmacology team 8 months. On Auratral, we customized our extract and accessed it via API the same day.",
        author: "Marcus Chen",
        role: "Director of R&D, PharmaCorp",
        rating: 5,
        dataset: "FDA FAERS Curated Extract"
    },
    {
        quote: "The Docker delivery is game-changing. Having the data pre-loaded in PostgreSQL alongside a Jupyter environment saved weeks of setup time.",
        author: "Sarah Jenkins, PhD",
        role: "Epidemiological Researcher, GenHealth",
        rating: 5,
        dataset: "High-Res Chest X-Ray Annotations"
    }
];

const news = [
    {
        category: "Platform Updates",
        title: "Docker Delivery Now Available for Enterprise Cohorts",
        date: "Feb 18, 2026",
        link: "/news/1"
    },
    {
        category: "Regulatory",
        title: "Understanding HIPAA Expert Determination for AI Teams",
        date: "Feb 10, 2026",
        link: "/news/2"
    },
    {
        category: "New Dataset",
        title: "Added 500k New Records to the Cardiovascular Cohort",
        date: "Feb 02, 2026",
        link: "/news/3"
    }
];

const TestimonialsNews = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-8 grid grid-cols-1 xl:grid-cols-12 gap-16">

                {/* Testimonials Column */}
                <div className="xl:col-span-8">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-3xl font-bold text-primary">Trusted by Clinical Leaders</h2>
                        <Link to="/testimonials" className="text-sm font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1">
                            All Testimonials <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="glass-panel p-6 flex flex-col h-full">
                                <div className="flex text-yellow-500 mb-4">
                                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-secondary text-sm italic mb-6 flex-grow">"{t.quote}"</p>
                                <div className="border-t border-glass-border pt-4">
                                    <div className="font-semibold text-primary text-sm">{t.author}</div>
                                    <div className="text-xs text-slate-400 mb-2">{t.role}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-purple-400 font-bold">Used: {t.dataset}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* News Column */}
                <div className="xl:col-span-4 flex flex-col h-full">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-3xl font-bold text-primary">Latest News</h2>
                        <Link to="/news" className="text-sm font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1">
                            Read All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="glass-panel p-6 flex-grow flex flex-col gap-6">
                        {news.map((n, idx) => (
                            <Link to={n.link} key={idx} className="group block border-b border-glass-border pb-4 last:border-0 last:pb-0">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{n.category}</span>
                                    <span className="text-xs text-slate-500">{n.date}</span>
                                </div>
                                <h3 className="font-semibold text-primary text-sm leading-snug group-hover:text-teal-400 transition-colors">
                                    {n.title}
                                </h3>
                            </Link>
                        ))}

                        <div className="mt-auto pt-4">
                            <div className="p-4 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl text-center">
                                <h4 className="text-sm font-bold text-white mb-2">Subscribe to Insights</h4>
                                <div className="flex gap-2">
                                    <input type="email" placeholder="Email address" className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs text-slate-300 outline-none focus:border-purple-500" />
                                    <button className="bg-purple-600 hover:bg-purple-500 text-white rounded px-3 py-2 text-xs font-bold transition-colors">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialsNews;
