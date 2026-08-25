import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Vibrant Radial Background Gradient using Logo Colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00AED6_0%,#F5A623_35%,#E6007A_70%,#00C48C_100%)] opacity-15"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Professional Corporate Dashboard Mockup */}
          <div className="order-2 lg:order-1 w-full max-w-lg mx-auto relative">
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

            {/* Static Professional Badge (Overlapping) */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg p-3 border border-slate-200 flex items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#E6007A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div className="pr-2">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Performance</p>
                <p className="text-sm font-bold text-slate-800">Optimized</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text & CTA */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-800">
              India's Leading Platform for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">Digital Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Committed to Empowering Businesses with Innovative and Comprehensive Performance Marketing Solutions.
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
