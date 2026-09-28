import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 sm:pt-20 pb-8 sm:pb-12 font-sans border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-10 sm:mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="DMDY Logo" className="h-10 w-auto" />
            </Link>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 mb-5">
              <span>Powered by</span>
              <span className="text-white font-bold tracking-wide">Atul Rathaur</span>
            </div>
            <p className="leading-relaxed mb-8 max-w-sm">
              We are a performance-obsessed digital marketing agency focused on driving real revenue growth for ambitious brands worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/seo" className="hover:text-white transition-colors">Search Engine Optimization</Link></li>
              <li><Link to="/services/social-media" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services/google-ads" className="hover:text-white transition-colors">Google Ads & PPC</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/admin/login" className="hover:text-white transition-colors">Admin Login</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-center md:text-left">
          <div>
            &copy; {new Date().getFullYear()} DMDY Digital. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Powered by</span>
            <span className="font-bold text-white bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800">Atul Rathaur</span>
          </div>
          <div>
            Corporate Headquarters &bull; Global Operations
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
