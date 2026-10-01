import React from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import logo from '../assets/logo.png';
import { Mail, Phone, MapPin, Star } from 'lucide-react';

const Footer = () => {
  const { openModal } = useContactModal();
  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 sm:pt-20 pb-8 sm:pb-12 font-sans border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-10 sm:mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="DMDY Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal mb-5 max-w-sm">
              We are a performance-obsessed digital marketing agency focused on driving real revenue growth for ambitious brands worldwide.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-2 mb-6 text-xs sm:text-sm">
              <a
                href="mailto:hello@dmdy.in"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00AED6]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>hello@dmdy.in</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-[#E6007A]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 98765 43210</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-[#F5A623]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Delhi NCR, India &bull; Global Remote Operations</span>
              </div>
            </div>

            {/* Social Media Handles */}
            <div className="flex items-center gap-2 mb-6">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/dmdy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-[#00AED6] hover:bg-slate-800/80 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.37 9.74V9.93H5.09v8.57h2.74Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/dmdy.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-[#E6007A] hover:bg-slate-800/80 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/dmdydigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800/80 flex items-center justify-center transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210?text=Hello%20DMDY%20Team%2C%20I%20would%20like%20to%20discuss%20our%20digital%20marketing%20growth."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-[#00C48C] hover:bg-slate-800/80 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </div>

            {/* Rating / Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-bold text-white">4.9/5</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-400 font-medium">Verified Client Trust</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3 text-sm sm:text-base font-normal">
              <li><Link to="/services/360-digital-marketing" className="hover:text-white transition-colors">360° Digital Marketing</Link></li>
              <li><Link to="/services/seo" className="hover:text-white transition-colors">Search Engine Optimization</Link></li>
              <li><Link to="/services/web-development" className="hover:text-white transition-colors">Website Design & Development</Link></li>
              <li><Link to="/services/social-media" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services/google-ads" className="hover:text-white transition-colors">Google Ads & PPC</Link></li>
              <li><Link to="/services/paid-marketing" className="hover:text-white transition-colors">Paid Marketing</Link></li>
              <li><Link to="/services/content-marketing" className="hover:text-white transition-colors">Content Creation & Marketing</Link></li>
              <li><Link to="/services/graphic-designing-video-editing" className="hover:text-white transition-colors">Graphic Designing & Video Editing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3 text-sm sm:text-base font-normal">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights</Link></li>
              <li><button onClick={() => openModal()} className="hover:text-white transition-colors cursor-pointer text-left">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider mb-5">Legal</h4>
            <ul className="space-y-3 text-sm sm:text-base font-normal">
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
