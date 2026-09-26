import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Megaphone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden bg-white">
      {/* Vibrant Radial Background Gradient using Logo Colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00AED6_0%,#F5A623_35%,#E6007A_70%,#00C48C_100%)] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Text & Headline - Directly aligned with Header Logo */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00AED6] animate-pulse"></span>
              Full-Stack Digital Growth Partner
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 sm:mb-6 leading-[1.14] text-slate-900">
              We don't just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                market businesses.
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-normal">
              We build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] font-semibold">digital growth</span> engine—combining data-driven SEO, high-ROAS performance marketing, and modern web engineering to scale revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto text-white font-bold py-3.5 px-8 rounded-xl transition-all text-sm sm:text-base shadow-lg shadow-pink-500/10 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 bg-gradient-to-r from-[#00AED6] to-[#E6007A] hover:opacity-95"
              >
                Book Strategy Session <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto bg-white border border-slate-300 text-slate-700 hover:border-[#00AED6] hover:text-[#00AED6] font-bold py-3.5 px-8 rounded-xl transition-all text-sm sm:text-base shadow-sm hover:shadow text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Dashboard Mockup */}
          <div className="lg:col-span-5 w-full relative">
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -left-4 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </div>

            <div className="absolute top-1/4 -right-4 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <svg className="w-5 h-5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>

            <div className="absolute -bottom-6 left-8 z-20 bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100 hidden sm:flex items-center gap-1.5">
              <Megaphone className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-bold text-slate-700">Google Ads</span>
            </div>

            <div className="absolute -top-4 right-10 z-20 bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100 hidden sm:flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs font-bold text-slate-700">SEO</span>
            </div>

            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col">
              
              {/* Dashboard Top Bar */}
              <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200/80">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold px-2 py-0.5 bg-white border border-slate-200 rounded-md shadow-sm">
                  Live Growth Engine
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-white flex flex-col justify-between">
                
                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">Total Reach</p>
                    <p className="text-2xl font-extrabold text-slate-900">2.4M</p>
                    <div className="flex items-center mt-1 text-xs font-bold text-[#00AED6]">
                      <span>↑ 18.5% YoY</span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">Avg. ROAS</p>
                    <p className="text-2xl font-extrabold text-slate-900">420%</p>
                    <div className="flex items-center mt-1 text-xs font-bold text-[#00C48C]">
                      <span>↑ 12.3% MoM</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Chart Area */}
                <div className="border border-slate-100 bg-slate-50 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden h-44">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Conversion Trends</span>
                    <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">Consistent Growth</span>
                  </div>
                  
                  <div className="flex items-end justify-between h-24 gap-3">
                    <div className="w-full bg-[#00AED6]/20 rounded-t-lg h-[40%] relative">
                      <div className="absolute bottom-0 w-full bg-[#00AED6] rounded-t-lg h-[60%]"></div>
                    </div>
                    <div className="w-full bg-[#F5A623]/20 rounded-t-lg h-[60%] relative">
                      <div className="absolute bottom-0 w-full bg-[#F5A623] rounded-t-lg h-[75%]"></div>
                    </div>
                    <div className="w-full bg-[#E6007A]/20 rounded-t-lg h-[50%] relative">
                      <div className="absolute bottom-0 w-full bg-[#E6007A] rounded-t-lg h-[65%]"></div>
                    </div>
                    <div className="w-full bg-[#00C48C]/20 rounded-t-lg h-[80%] relative">
                      <div className="absolute bottom-0 w-full bg-[#00C48C] rounded-t-lg h-[90%]"></div>
                    </div>
                    <div className="w-full bg-[#00AED6]/20 rounded-t-lg h-[95%] relative">
                      <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#00AED6] to-[#E6007A] rounded-t-lg h-[100%]"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
