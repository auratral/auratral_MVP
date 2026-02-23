import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, UploadCloud, Users, CreditCard } from 'lucide-react';

export const Customize = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-32 pb-16 min-h-screen bg-slate-900">
            <div className="container mx-auto px-8 max-w-3xl">
                <h1 className="text-3xl font-bold text-primary mb-2">Customize Cohort parameters</h1>
                <p className="text-secondary mb-8">AUR-EHR-00087: Longitudinal ICU Encounters</p>

                <div className="glass-panel p-8 space-y-8">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Record Volume Constraint</label>
                        <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-primary outline-none">
                            <option>Full Dataset (~186,000 records) - Base Price</option>
                            <option>10% Random Sample - $49</option>
                            <option>Custom Stratified Sample...</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Demographic Bias Configurator <span className="text-[10px] ml-2 bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded">BETA</span></label>
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 text-sm text-slate-400">
                            <label className="flex items-center gap-3">
                                <input type="checkbox" className="w-4 h-4 rounded bg-slate-800" defaultChecked />
                                Enforce demographic parity across Age/Sex index
                            </label>
                            <p className="mt-2 text-xs text-slate-500 ml-7">May reduce total available record count by up to 14% to achieve balance.</p>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Delivery Format</label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="border border-teal-500/50 bg-teal-500/10 p-4 rounded-lg cursor-pointer flex items-center justify-between">
                                <span className="font-semibold text-teal-400">REST API</span>
                                <div className="w-4 h-4 rounded-full border-4 border-teal-500 bg-slate-900"></div>
                            </label>
                            <label className="border border-slate-700 bg-slate-900 p-4 rounded-lg cursor-pointer flex items-center justify-between hover:border-slate-500">
                                <span className="text-slate-300">Direct Download</span>
                                <div className="w-4 h-4 rounded-full border border-slate-500 bg-slate-800"></div>
                            </label>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-glass-border flex justify-between items-center">
                        <div className="text-2xl font-bold text-primary">$149.00</div>
                        <button onClick={() => navigate('/agreement')} className="btn btn-primary">Continue to Legal Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Agreement = () => {
    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="pt-32 pb-16 min-h-screen bg-slate-900">
            <div className="container mx-auto px-8 max-w-3xl">
                <div className="flex items-center gap-3 mb-6 border-b border-glass-border pb-4">
                    <ShieldCheck size={28} className="text-pink-500" />
                    <h1 className="text-2xl font-bold text-primary">Data Use Agreement (DUA)</h1>
                </div>

                <div className="glass-panel p-8 mb-8 h-96 overflow-y-auto custom-scrollbar text-sm text-slate-300 space-y-4">
                    <h3 className="font-bold text-primary text-lg">Auratral 12-Condition Medical Data Agreement</h3>
                    <p>By accessing this derived clinical dataset (AUR-EHR-00087), you agree to the following legally binding terms under penalty of immediate revocation and potential reporting to regulatory authorities:</p>
                    <ol className="list-decimal pl-5 space-y-3 mt-4 text-slate-400">
                        <li><strong className="text-slate-200">Non-Reidentification:</strong> The User explicitly agrees to make NO ATTEMPT to re-identify any individual, patient, or healthcare provider present in the dataset.</li>
                        <li><strong className="text-slate-200">No Patient Contact:</strong> The User agrees to never attempt to contact any individual based on information derived from this dataset.</li>
                        <li><strong className="text-slate-200">Ethical AI Use:</strong> The User agrees not to use this data to train models intended for discriminatory practices, surveillance, or any system that negatively impacts patient care without human oversight (e.g., fully autonomous diagnostic systems lacking FDA clearance).</li>
                        <li><strong className="text-slate-200">HIPAA Safe Harbor Acknowledgment:</strong> The User accepts that while the data has been de-identified according to 45 CFR § 164.514(b) (Safe Harbor), incidental findings must be immediately reported and purged.</li>
                        <li><strong className="text-slate-200">Security Posture:</strong> The data must be stored encrypted at rest (AES-256) and in transit (TLS 1.2+). It may not be uploaded to public repositories (e.g., public GitHub repos).</li>
                        {/* Truncated for mock */}
                        <li>... [Conditions 6-12 follow standard clinical research NDA clauses] ...</li>
                    </ol>
                </div>

                <div className="glass-panel p-6 border-teal-500/20 flex items-start gap-4 mb-8">
                    <input
                        type="checkbox"
                        id="agree"
                        className="w-5 h-5 rounded mt-1 bg-slate-800 border-slate-600 text-teal-500 focus:ring-teal-500"
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <label htmlFor="agree" className="text-slate-300 text-sm cursor-pointer">
                        I affirm that I have read and agree to all 12 conditions of the Auratral Medical Data Agreement. I am authorized to sign on behalf of my institution.
                    </label>
                </div>

                <div className="flex justify-end gap-4">
                    <button onClick={() => navigate(-1)} className="btn btn-outline">Go Back</button>
                    <button
                        onClick={() => navigate('/checkout')}
                        className={`btn ${agreed ? 'btn-primary bg-emerald-600 hover:bg-emerald-500' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}
                        disabled={!agreed}
                    >
                        Sign & Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export const Checkout = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-32 pb-16 min-h-screen bg-slate-900">
            <div className="container mx-auto px-8 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">

                <div>
                    <h1 className="text-3xl font-bold text-primary mb-2">Secure Checkout</h1>
                    <p className="text-secondary mb-8">Payment processed via Stripe</p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Email for License Key</label>
                            <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-primary outline-none" placeholder="team@company.com" />
                        </div>

                        <div className="p-4 bg-slate-800 border border-slate-700 rounded-lg">
                            <div className="flex items-center gap-2 mb-4 text-slate-300">
                                <CreditCard size={18} /> Card Details
                            </div>
                            <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-primary outline-none mb-3" placeholder="Card Number" />
                            <div className="grid grid-cols-2 gap-3">
                                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-primary outline-none" placeholder="MM / YY" />
                                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-primary outline-none" placeholder="CVC" />
                            </div>
                        </div>

                        <button onClick={() => {
                            alert("Payment mocked successfully. Navigating home.");
                            navigate('/');
                        }} className="w-full btn btn-primary flex justify-center items-center gap-2 py-4 shadow-[0_4px_20px_rgba(45,212,191,0.2)]">
                            <Lock size={16} /> Pay $149.00
                        </button>
                        <p className="text-[10px] text-center text-slate-500">Secured by 256-bit SSL encryption</p>
                    </form>
                </div>

                <div className="glass-panel p-8 h-fit">
                    <h3 className="font-bold text-primary mb-4 border-b border-glass-border pb-2">Order Summary</h3>
                    <div className="flex justify-between items-start mb-4 text-sm">
                        <div>
                            <div className="text-slate-300 font-medium">Longitudinal ICU Encounters</div>
                            <div className="text-xs text-slate-500">AUR-EHR-00087 • API Delivery</div>
                            <div className="text-[10px] text-teal-400 mt-1">DUA Signed</div>
                        </div>
                        <div className="text-primary">$149.00</div>
                    </div>

                    <div className="border-t border-glass-border pt-4 flex justify-between items-center mt-8">
                        <span className="font-bold text-slate-300">Total</span>
                        <span className="text-2xl font-bold text-primary">$149.00</span>
                    </div>
                </div>

            </div>
        </div>
    );
};
