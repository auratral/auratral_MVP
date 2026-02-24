import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, Bookmark } from 'lucide-react';

// Hardcoded mock article data for demo purposes.
// In a real app, this would be fetched from an API using the `id` param.
const articleData = {
    'abdm-ai-diagnostics': {
        category: "AI in Indian Healthcare",
        title: "India's Digital Health Mission Accelerates AI Adoption in Rural Diagnostics",
        date: "Feb 22, 2026",
        author: "Dr. Ananya Sharma",
        role: "Chief Medical Informatics Officer",
        readTime: "6 min read",
        imageUrl: "https://picsum.photos/seed/abdm/1200/600",
        content: `
            <p>The Ayushman Bharat Digital Mission (ABDM) is fundamentally restructuring how healthcare data flows across India's vast and diverse population. By standardizing health records through the ABHA (Ayushman Bharat Health Account) ecosystem, Indian AI startups are finally gaining access to unified, structured data necessary to deploy diagnostic models in remote villages.</p>
            
            <h3>The Challenge of Rural Diagnostics</h3>
            <p>For decades, the primary bottleneck in rural Indian healthcare hasn't just been a lack of doctorsâ€”it's been a lack of specialized diagnostic equipment and the expertise to interpret results in real-time. Conditions like diabetic retinopathy, tuberculosis, and early-stage oral cancers often went undetected until it was too late.</p>
            
            <blockquote>"Structured data is the lifeblood of clinical AI. Before ABDM, a patient's medical history was scattered across paper files in multiple clinics. Now, we can train algorithms on longitudinal histories." - Dr. Vikram Seth, AI Researcher</blockquote>
            
            <h3>How Unified Data Enables ML</h3>
            <p>With unified EHRs (Electronic Health Records) mandated by the ABDM framework, machine learning models can now be trained on highly standardized datasets. This allows startups to:</p>
            <ul>
                <li>Deploy lightweight, edge-computed vision models on smartphones for frontline ASHA workers.</li>
                <li>Reduce screening times for TB from weeks to seconds.</li>
                <li>Cross-reference new diagnostic imaging with a patient's historical ABHA records for higher accuracy.</li>
            </ul>
            
            <h3>The Road Ahead</h3>
            <p>As Auratral continues to partner with verified clinical registries in South Asia, we are committed to providing the clean, anonymized datasets that power these life-saving algorithms. The next frontier involves not just tabular data, but integrating complex, multi-modal clinical notes in regional languages.</p>
        `
    },
    'ehr-structuring-india': {
        category: "Data Infrastructure",
        title: "Upgrading Legacy EHRs: How Indian Startups are Structuring Data for ML",
        date: "Feb 18, 2026",
        author: "Rajesh Kumar",
        role: "Head of Data Engineering",
        readTime: "5 min read",
        imageUrl: "https://picsum.photos/seed/ehr/1200/600",
        content: `
            <p>Transforming decades of unstructured, handwritten clinical notes and legacy siloed databases into ML-ready datasets is the biggest challenge facing Indian HealthTech today.</p>
            <h3>The Unstructured Data Problem</h3>
            <p>Over 80% of clinical data currently residing in Indian hospitals is unstructured. We're seeing a massive push towards automated structuring using specialized NLP pipelines.</p>
        `
    },
    'diverse-datasets-india': {
        category: "Diversity & Inclusion",
        title: "The Need for Diverse Clinical Datasets: Representing the 1.4 Billion",
        date: "Feb 10, 2026",
        author: "Meera Patel",
        role: "Director of Biostatistics",
        readTime: "8 min read",
        imageUrl: "https://picsum.photos/seed/diverse/1200/600",
        content: `
            <p>Machine learning models are only as good as the data they are trained on. For too long, global biomedical AI models have been trained predominantly on populations from North America and Europe.</p>
            <h3>Building Representative AI</h3>
            <p>To build algorithms that accurately serve the Indian subcontinent, we must prioritize assembling diverse, high-quality, and ethically sourced cohorts that reflect local genetics, lifestyle, and disease prevalence.</p>
        `
    },
    'south-asian-cardio-records': {
        category: "Platform Updates",
        title: "Auratral Adds 500k Verified South Asian Cardiovascular Records",
        date: "Feb 02, 2026",
        author: "Auratral Data Ops",
        role: "Operations Team",
        readTime: "3 min read",
        imageUrl: "https://picsum.photos/seed/cardio/1200/600",
        content: `
            <p>We are excited to announce a massive expansion to our cardiovascular data repository, adding over 500,000 new, verified longitudinal records focusing specifically on South Asian demographics.</p>
            <p>This dataset includes high-resolution ECGs, detailed medication adherence logs, and mapped readmission events, providing unprecedented insight into cardiac health within this high-risk population.</p>
        `
    }
};

const NewsArticle = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        // Mock fetching article data based on URL parameter
        window.scrollTo(0, 0);
        if (id && articleData[id]) {
            setArticle(articleData[id]);
        } else {
            // Fallback for general numbered IDs from the main News page
            setArticle({
                category: "General Update",
                title: "Accelerating Clinical Research with Premium Datasets",
                date: "Recent",
                author: "Auratral Editor",
                role: "Content Team",
                readTime: "4 min read",
                imageUrl: `https://picsum.photos/seed/${id || 'default'}/1200/600`,
                content: "<p>This is a placeholder article. In a fully implemented backend, this content would be fetched from a CMS based on the requested article ID.</p>"
            });
        }
    }, [id]);

    if (!article) return <div className="min-h-screen pt-32 pb-24 text-center">Loading...</div>;

    return (
        <article className="min-h-screen pt-28 pb-24">

            {/* Navigation Bar */}
            <div className="container mx-auto px-6 max-w-4xl mb-8">
                <Link to="/news" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors font-semibold">
                    <ArrowLeft size={18} /> Back to All News
                </Link>
            </div>

            {/* Article Header */}
            <header className="container mx-auto px-6 max-w-4xl mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                        {article.category}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">{article.readTime}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                    {article.title}
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-primary font-bold">
                            {article.author.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-white text-lg">{article.author}</div>
                            <div className="text-sm text-slate-400 flex items-center gap-2">
                                <span>{article.role}</span>
                                <span className="text-slate-700">â€¢</span>
                                <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500/20 hover:text-blue-400 border border-slate-700 hover:border-blue-500/50 flex items-center justify-center text-slate-400 transition-all">
                            <Bookmark size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] border border-slate-700 hover:border-[#1DA1F2]/50 flex items-center justify-center text-slate-400 transition-all">
                            <Twitter size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] border border-slate-700 hover:border-[#0A66C2]/50 flex items-center justify-center text-slate-400 transition-all">
                            <Linkedin size={18} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Image */}
            <div className="container mx-auto px-6 max-w-5xl mb-16">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-[2/1]">
                    <div className="absolute inset-0 bg-slate-800 animate-pulse"></div>
                    <img
                        src={article.imageUrl}
                        alt="Article hero"
                        className="w-full h-full object-cover relative z-10"
                    />
                </div>
            </div>

            {/* Article Body */}
            <div className="container mx-auto px-6 max-w-3xl">
                {/* 
                  Using an injected div for HTML content since we're mocking a CMS response.
                  In production with real user input, always sanitize this to prevent XSS.
                */}
                <div
                    className="prose prose-invert prose-lg max-w-none
                        prose-headings:text-white prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
                        prose-h3:text-2xl prose-h3:text-blue-400
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-400 prose-blockquote:bg-slate-800/30 prose-blockquote:py-2 prose-blockquote:rounded-r-lg
                        prose-ul:text-slate-300 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                        prose-li:mb-2
                    "
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>

            {/* CTA Footer */}
            <div className="container mx-auto px-6 max-w-3xl mt-24 pt-12 border-t border-slate-800 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Advance Your Research</h3>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                    Access premium, highly-structured clinical datasets tailored for machine learning. Join thousands of engineers building the future of healthcare AI.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/gallery" className="btn btn-primary px-8">Browse Datasets</Link>
                    <Link to="/news" className="btn border border-slate-700 text-slate-300 hover:bg-slate-800 px-8 rounded font-semibold transition-colors">Read More News</Link>
                </div>
            </div>

        </article>
    );
};

export default NewsArticle;
