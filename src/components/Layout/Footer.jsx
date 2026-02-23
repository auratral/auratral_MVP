import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Activity } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer border-t border-glass-border">
            <div className="footer-container">

                {/* Brand & Compliance Column */}
                <div className="footer-brand">
                    <Link to="/" className="navbar-logo mb-4">
                        <span className="logo-icon text-gradient">▲</span>
                        <span className="logo-text">Auratral</span>
                    </Link>
                    <p className="footer-desc">
                        The world's most trusted medical dataset platform for clinical research, AI training, and pharmaceutical development.
                    </p>

                    <div className="footer-badges">
                        <div className="badge tooltip-trigger">
                            <ShieldCheck size={18} /> HIPAA Safe Harbor
                        </div>
                        <div className="badge tooltip-trigger">
                            <Lock size={18} /> GDPR Article 9
                        </div>
                        <div className="badge tooltip-trigger">
                            <Activity size={18} /> ISO 27001 (Roadmap)
                        </div>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Platform</h4>
                        <Link to="/gallery">Dataset Gallery</Link>
                        <Link to="/custom-request">Custom Request</Link>
                        <Link to="/pricing">Pricing & Licenses</Link>
                        <Link to="/docker">Docker Delivery</Link>
                    </div>

                    <div className="link-group">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/news">News & Insights</Link>
                        <Link to="/testimonials">Testimonials</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="link-group">
                        <h4>Legal & Policy</h4>
                        <Link to="/legal/tos">Terms of Service</Link>
                        <Link to="/legal/privacy">Privacy Policy</Link>
                        <Link to="/legal/data-use">Data Use Policy</Link>
                        <Link to="/legal/hipaa">HIPAA Notice</Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container bottom-container">
                    <p>&copy; {new Date().getFullYear()} Auratral Inc. All rights reserved.</p>
                    <div className="footer-disclaimer">
                        All data is de-identified in accordance with HIPAA CFR §164.514. Not intended for direct diagnostic use without clinical validation.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
