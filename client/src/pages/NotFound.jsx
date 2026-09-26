import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Compass, Sparkles } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | DMDY';
  }, []);

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-12 sm:pb-20 flex items-center justify-center bg-slate-50 font-sans relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center relative z-10">
        <div className="max-w-lg w-full text-center bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-200/60 relative overflow-hidden">
          
          {/* Compass Icon */}
          <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mx-auto mb-4 text-[#00AED6]">
            <Compass className="w-7 h-7 animate-spin" style={{ animationDuration: '12s' }} />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#00AED6] bg-[#00AED6]/10 border border-[#00AED6]/20 mb-3">
            <Sparkles className="w-3 h-3 text-[#00AED6]" /> Route Not Located
          </div>

          {/* 404 Large Gradient Number */}
          <div className="text-6xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] mb-3">
            404
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2.5 tracking-tight">
            Page Not Found
          </h1>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-8 max-w-sm mx-auto">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Link 
              to="/" 
              className="w-full sm:w-auto py-3 px-6 rounded-xl font-bold text-white text-xs sm:text-sm shadow-xl bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" /> Return to Homepage
            </Link>
            <Link 
              to="/blog" 
              className="w-full sm:w-auto py-3 px-6 rounded-xl font-bold text-slate-700 text-xs sm:text-sm bg-white border border-slate-200/90 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Search className="w-4 h-4" /> Growth Insights
            </Link>
          </div>

          {/* Quick Footer Navigation */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-500">
            <Link to="/services" className="hover:text-[#00AED6] transition-colors">Services</Link>
            <span>&bull;</span>
            <Link to="/portfolio" className="hover:text-[#00AED6] transition-colors">Portfolio</Link>
            <span>&bull;</span>
            <Link to="/pricing" className="hover:text-[#00AED6] transition-colors">Pricing</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-[#00AED6] transition-colors">Contact Us</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
