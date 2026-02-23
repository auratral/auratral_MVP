import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Database, Activity } from 'lucide-react';

export const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-20 bg-slate-900 flex flex-col lg:flex-row font-sans">
            {/* Left Side - Visuals (Hidden on small screens) */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900 items-center justify-center p-12 border-r border-glass-border">
                {/* Background Glows */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>

                {/* Visual Content */}
                <div className="relative z-10 max-w-lg">
                    <div className="glass-panel p-8 mb-8 backdrop-blur-xl border-t-2 border-t-teal-500 relative">
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-slate-900 border border-slate-700 rounded flex items-center justify-center">
                            <Activity size={16} className="text-teal-400" />
                        </div>
                        <h3 className="font-bold text-lg text-primary mb-2">Secure API Access</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">Connect directly to our network of 150+ healthcare providers via REST or GraphQL. HIPAA-compliant endpoints guaranteed.</p>
                    </div>

                    <div className="glass-panel p-8 backdrop-blur-xl border-t-2 border-t-purple-500 ml-12 relative">
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-slate-900 border border-slate-700 rounded flex items-center justify-center">
                            <Database size={16} className="text-purple-400" />
                        </div>
                        <h3 className="font-bold text-lg text-primary mb-2">Curated Cohorts</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">Search millions of de-identified patient records across EHR, Imaging, and Clinical Trials instantly. Quality scoring applied to every dataset.</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-12 relative bg-slate-900">
                <div className="w-full max-w-md relative z-10">

                    <div className="text-center lg:text-left mb-10">
                        <Link to="/" className="inline-block mb-8">
                            <img src="/logo.png" alt="Auratral" className="h-12 w-auto mx-auto lg:mx-0" />
                        </Link>
                        <h1 className="text-3xl font-bold text-primary mb-3">Welcome back</h1>
                        <p className="text-slate-400">Log in to manage your datasets, API keys, and billing.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Institutional Email</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3.5 text-primary outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all shadow-inner"
                                placeholder="researcher@university.edu"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest">Password</label>
                                <a href="#" className="text-xs text-teal-400 hover:text-teal-300 font-semibold transition-colors">Forgot password?</a>
                            </div>
                            <input
                                type="password"
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3.5 text-primary outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all shadow-inner"
                                placeholder="••••••••"
                            />
                        </div>

                        <button type="submit" className="w-full btn btn-primary py-3.5 justify-center text-sm tracking-wide mt-4 shadow-lg shadow-teal-500/20">
                            Sign In to Console
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-glass-border text-center text-sm text-slate-400">
                        Don't have an account? <Link to="/signup" className="text-teal-400 hover:text-teal-300 font-semibold transition-colors">Create an account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

export const Signup = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-20 bg-slate-900 flex flex-col lg:flex-row-reverse font-sans">
            {/* Right Side - Visuals (Hidden on small screens) */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900 items-center justify-center p-12 border-l border-glass-border">
                {/* Background Glows */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>

                {/* Visual Content */}
                <div className="relative z-10 max-w-lg text-center">
                    <ShieldCheck size={48} className="text-purple-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-primary mb-4">Enterprise-Grade Security</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Join 1,000+ researchers and ML engineers accelerating healthcare innovation. Every dataset is scrutinized to meet HIPAA Safe Harbor and GDPR Article 9 requirements.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                            <div className="text-2xl font-bold text-teal-400 mb-1">150+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Provider Networks</div>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                            <div className="text-2xl font-bold text-purple-400 mb-1">40M+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Patient Records</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Left Side - Form */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-12 relative bg-slate-900">
                <div className="w-full max-w-md relative z-10">

                    <div className="text-center lg:text-left mb-10">
                        <Link to="/" className="inline-block mb-8">
                            <img src="/logo.png" alt="Auratral" className="h-12 w-auto mx-auto lg:mx-0" />
                        </Link>
                        <h1 className="text-3xl font-bold text-primary mb-3">Create your account</h1>
                        <p className="text-slate-400">Start provisioning compliant medical data today.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">First Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3.5 text-primary outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Last Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3.5 text-primary outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Work Email</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3.5 text-primary outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                                placeholder="name@institution.edu"
                            />
                            <p className="text-[10px] text-slate-500 mt-1.5">Please use your institutional or company email domain.</p>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3.5 text-primary outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                                placeholder="••••••••"
                            />
                        </div>

                        <button type="submit" className="w-full btn btn-primary py-3.5 justify-center text-sm tracking-wide mt-6 shadow-lg shadow-purple-500/20">
                            Create Account
                        </button>

                        <p className="text-center text-xs text-slate-500 mt-4 leading-relaxed">
                            By creating an account, you agree to Auratral's <a href="#" className="text-purple-400 hover:underline">Terms of Service</a> and <a href="#" className="text-purple-400 hover:underline">Privacy Policy</a>.
                        </p>
                    </form>

                    <div className="mt-8 pt-8 border-t border-glass-border text-center text-sm text-slate-400">
                        Already have an account? <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">Log in here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
