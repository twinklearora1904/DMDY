import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Search, Code, Megaphone, BarChart3, ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Vibrant Radial Background Gradient using Logo Colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00AED6_0%,#F5A623_35%,#E6007A_70%,#00C48C_100%)] opacity-15"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Professional Corporate Dashboard Mockup */}
          <div className="order-2 lg:order-1 w-full max-w-lg mx-auto relative">
            
            {/* --- Floating Icons & Badges --- */}
            {/* Facebook */}
            <div className="absolute -top-6 -left-6 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-[bounce_3s_infinite]">
              <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </div>

            {/* Instagram */}
            <div className="absolute top-1/4 -right-8 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-[bounce_4s_infinite_0.5s]">
              <svg className="w-6 h-6 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>

            {/* LinkedIn */}
            <div className="absolute bottom-1/4 -left-10 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-[bounce_3.5s_infinite_1s]">
              <svg className="w-6 h-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>

            {/* Twitter */}
            <div className="absolute -top-8 right-16 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-[bounce_4.5s_infinite_1.5s]">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </div>

            {/* Mail */}
            <div className="absolute top-1/2 -left-6 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-[bounce_3.2s_infinite_0.8s]">
              <Mail className="w-5 h-5 text-rose-500" />
            </div>

            {/* Google Ads */}
            <div className="absolute bottom-10 -right-4 z-20 bg-white px-3 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 animate-[bounce_3.8s_infinite_0.2s]">
              <Megaphone className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-slate-700 tracking-wide">Google Ads</span>
            </div>

            {/* Meta */}
            <div className="absolute top-6 -right-12 z-20 bg-white px-3 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 animate-[bounce_4.2s_infinite_0.9s]">
              <svg className="w-4 h-4 text-[#0668E1]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21a9.014 9.014 0 0 1-7.85-4.52 9.006 9.006 0 0 1 0-8.96A9.014 9.014 0 0 1 12 3a9.014 9.014 0 0 1 7.85 4.52 9.006 9.006 0 0 1 0 8.96A9.014 9.014 0 0 1 12 21Zm0-15.5c-3.11 0-5.87 1.83-7.1 4.67a7.502 7.502 0 0 0 0 5.66C6.13 18.67 8.89 20.5 12 20.5s5.87-1.83 7.1-4.67a7.502 7.502 0 0 0 0-5.66C17.87 7.33 15.11 5.5 12 5.5Z"/></svg>
              <span className="text-xs font-bold text-[#0668E1] tracking-wide">Meta</span>
            </div>

            {/* SEO */}
            <div className="absolute -bottom-10 left-12 z-20 bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 flex items-center gap-2 animate-[bounce_3.6s_infinite_1.2s]">
              <Search className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold text-slate-700 tracking-wide">SEO</span>
            </div>

            {/* Development */}
            <div className="absolute -top-4 right-1/3 z-20 bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 flex items-center gap-2 animate-[bounce_3.1s_infinite_0.7s]">
              <Code className="w-4 h-4 text-indigo-500" />
              <span className="text-xs font-bold text-slate-700 tracking-wide"></span>
            </div>
            {/* Analytics */}
            <div className="absolute -bottom-6 right-1/4 z-20 bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 flex items-center gap-2 animate-[bounce_3.7s_infinite_1.1s]">
              <BarChart3 className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-bold text-slate-700 tracking-wide">Analytics</span>
            </div>

            {/* eCommerce */}
            <div className="absolute top-1/3 -left-12 z-20 bg-white px-3 py-2 rounded-full shadow-xl border border-slate-100 flex items-center gap-2 animate-[bounce_4.1s_infinite_0.3s]">
              <ShoppingCart className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-bold text-slate-700 tracking-wide"></span>
            </div>
            {/* --------------------------------- */}

            {/* Subtle Corporate Shadow (No heavy glows) */}
            <div className="absolute -inset-1 bg-slate-200 rounded-2xl blur-xl opacity-50"></div>
            
            {/* Main Dashboard Container (Clean, White, Bordered) */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 flex flex-col">
              
              {/* Dashboard Top Bar */}
              <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold px-2 py-1 bg-white border border-slate-200 rounded-md shadow-sm">
                  Analytics Overview
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 h-[320px] flex flex-col justify-between bg-white relative">
                
                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Total Reach</p>
                    <p className="text-2xl font-bold text-slate-800">2.4M</p>
                    <div className="flex items-center mt-1 text-xs font-semibold text-[#00AED6]">
                      <span>↑ 18.5%</span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Avg. ROAS</p>
                    <p className="text-2xl font-bold text-slate-800">420%</p>
                    <div className="flex items-center mt-1 text-xs font-semibold text-[#00C48C]">
                      <span>↑ 12.3%</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Chart Area */}
                <div className="flex-1 border border-slate-100 bg-slate-50 rounded-xl p-4 flex flex-col justify-end relative overflow-hidden">
                  <p className="absolute top-4 left-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Conversion Trends</p>
                  
                  <div className="flex items-end justify-between h-3/4 gap-2 mt-8">
                    {/* Chart Bars using Brand Colors */}
                    <div className="w-full bg-[#00AED6]/20 rounded-t-sm h-[40%] relative group">
                      <div className="absolute bottom-0 w-full bg-[#00AED6] rounded-t-sm h-[60%] transition-all duration-1000 group-hover:h-[80%]"></div>
                    </div>
                    <div className="w-full bg-[#F5A623]/20 rounded-t-sm h-[60%] relative group">
                      <div className="absolute bottom-0 w-full bg-[#F5A623] rounded-t-sm h-[70%] transition-all duration-1000 group-hover:h-[90%]"></div>
                    </div>
                    <div className="w-full bg-[#E6007A]/20 rounded-t-sm h-[50%] relative group">
                      <div className="absolute bottom-0 w-full bg-[#E6007A] rounded-t-sm h-[50%] transition-all duration-1000 group-hover:h-[60%]"></div>
                    </div>
                    <div className="w-full bg-[#00C48C]/20 rounded-t-sm h-[80%] relative group">
                      <div className="absolute bottom-0 w-full bg-[#00C48C] rounded-t-sm h-[85%] transition-all duration-1000 group-hover:h-[100%]"></div>
                    </div>
                    <div className="w-full bg-[#00AED6]/20 rounded-t-sm h-[70%] relative group">
                      <div className="absolute bottom-0 w-full bg-[#00AED6] rounded-t-sm h-[75%] transition-all duration-1000 group-hover:h-[95%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text & CTA */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-800">
              We don't just <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">market businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We build their <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">digital growth</span> engine, build visibility, attract customers and convert digital attention into measurable business growth.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link to="/services" className="w-full sm:w-auto bg-white border-2 border-brandPrimary text-brandPrimary hover:bg-brandPrimary hover:text-white font-bold py-4 px-8 rounded-full transition-all text-lg shadow-sm">
                View Strategies
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-brandPrimary to-brandSecondary text-white hover:opacity-90 font-bold py-4 px-8 rounded-full transition-all text-lg shadow-lg flex items-center justify-center">
                Try Strategy for Free <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div> */}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
