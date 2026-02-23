import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Database, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        quote: "Auratral's ICU cohort data allowed us to validate our sepsis prediction model with demographics that accurately matched our target clinical population. The data was clean, well-documented, and ready for ingest.",
        author: "Dr. Elena Rostova",
        role: "Lead Clinical ML Engineer, BioTech Innovations",
        rating: 5,
        dataset: "Longitudinal ICU Encounters",
        verified: true
    },
    {
        quote: "Sourcing HIPAA-compliant research data used to take our pharmacology team 8 months of legal wrangling. On Auratral, we customized our extract and accessed it via API the same day. It's transformed our pipeline.",
        author: "Marcus Chen",
        role: "Director of R&D, PharmaCorp",
        rating: 5,
        dataset: "FDA FAERS Curated Extract",
        verified: true
    },
    {
        quote: "The Docker delivery is an absolute game-changer. Having the data pre-loaded in PostgreSQL alongside a Jupyter environment saved us weeks of infrastructure setup.",
        author: "Sarah Jenkins, PhD",
        role: "Epidemiological Researcher, GenHealth",
        rating: 5,
        dataset: "High-Res Chest X-Ray Annotations",
        verified: true
    },
    {
        quote: "We needed a highly specific rare disease cohort for an orphan drug trial design. Auratral's custom data request team sourced exactly what we needed from their hospital network within 3 weeks.",
        author: "Dr. Alistair Vance",
        role: "Clinical Strategy Lead, Orion Therapeutics",
        rating: 5,
        dataset: "Custom Registry Extraction",
        verified: true
    },
    {
        quote: "As a health-tech startup, being able to license high-quality EHR data without enterprise-level minimums is incredible. The pricing is transparent and the API is rock solid.",
        author: "Priya Sharma",
        role: "CTO, CarePredict",
        rating: 4,
        dataset: "Primary Care Encounters Subset",
        verified: true
    },
    {
        quote: "The demographic bias configuration tool gave us the confidence that our clinical AI models wouldn't suffer from representation gaps. Essential for modern FDA submissions.",
        author: "David Llewellyn",
        role: "Regulatory Affairs, Medvis AI",
        rating: 5,
        dataset: "Multi-site Stroke Registry",
        verified: true
    }
];

const Testimonials = () => {
    return (
        <div className="pt-32 pb-16 min-h-screen bg-slate-900">

            {/* Header */}
            <div className="bg-slate-800/50 border-b border-glass-border py-12 mb-12">
                <div className="container mx-auto px-8 text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">Trusted by Clinical Leaders</h1>
                    <p className="text-secondary max-w-2xl mx-auto text-lg">
                        See how leading healthcare AI teams, pharmaceutical researchers, and health-tech innovators accelerate their work with Auratral datasets.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-8">

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
                    <div className="glass-panel p-6 text-center">
                        <div className="text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
                        <div className="flex justify-center text-yellow-500 mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <div className="text-sm text-secondary">Average platform rating</div>
                    </div>
                    <div className="glass-panel p-6 text-center">
                        <div className="text-4xl font-bold text-teal-400 mb-2">500+</div>
                        <div className="text-sm text-secondary mt-4">Enterprise customers</div>
                    </div>
                    <div className="glass-panel p-6 text-center">
                        <div className="text-4xl font-bold text-pink-400 mb-2">98%</div>
                        <div className="text-sm text-secondary mt-4">IRB/Ethics approval rate</div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="glass-panel p-8 flex flex-col hover:border-purple-500/30 transition-colors">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex text-yellow-500">
                                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                {t.verified && (
                                    <span className="flex items-center gap-1 text-xs font-semibold text-teal-400 bg-teal-400/10 px-2 py-1 rounded">
                                        <ShieldCheck size={12} /> Verified
                                    </span>
                                )}
                            </div>

                            <p className="text-primary text-[0.95rem] leading-relaxed italic mb-8 flex-grow">
                                "{t.quote}"
                            </p>

                            <div className="border-t border-glass-border pt-6 mt-auto">
                                <div className="font-bold text-primary">{t.author}</div>
                                <div className="text-sm text-slate-400 mb-3">{t.role}</div>
                                <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-800 p-2 rounded border border-slate-700">
                                    <Database size={12} className="text-purple-400" />
                                    Dataset: {t.dataset}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center glass-panel p-12 max-w-3xl mx-auto border-teal-500/20">
                    <h2 className="text-2xl font-bold text-primary mb-4">Ready to accelerate your research?</h2>
                    <p className="text-secondary mb-8">
                        Join hundreds of clinical innovators who rely on Auratral for compliant, high-quality medical data.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/gallery" className="btn btn-primary">Browse Datasets</Link>
                        <Link to="/custom-request" className="btn btn-outline">Request Custom Data</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
