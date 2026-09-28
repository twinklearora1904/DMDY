import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BarChart3, TrendingUp, Users, Sparkles, Zap } from 'lucide-react';

const caseStudies = [
  {
    client: 'Elevate Retail Group',
    industry: 'D2C E-Commerce',
    metric: '+340%',
    metricLabel: 'Return on Ad Spend (ROAS)',
    description: 'Reconstructed Meta and Google Ads architectures and deployed custom landing pages with checkout friction reduction, resulting in a 5.2x revenue expansion within 90 days.',
    icon: <BarChart3 className="w-6 h-6 text-[#00AED6]" />,
    tags: ['Meta Ads', 'Google Shopping', 'CRO', 'Shopify']
  },
  {
    client: 'TechFlow Solutions',
    industry: 'B2B SaaS & Tech',
    metric: '3.4x',
    metricLabel: 'Qualified Enterprise Pipeline',
    description: 'Executed an Account-Based Marketing (ABM) framework on LinkedIn combined with high-intent Google Search campaigns to triple qualified enterprise demo bookings.',
    icon: <TrendingUp className="w-6 h-6 text-[#E6007A]" />,
    tags: ['LinkedIn B2B', 'Intent Search', 'ABM', 'Lead Nurture']
  },
  {
    client: 'National Logistics Hub',
    industry: 'Logistics & Supply Chain',
    metric: '+215%',
    metricLabel: 'Organic Search Traffic',
    description: 'Conducted a comprehensive technical SEO overhaul, eliminated crawl bloat, and deployed a localized keyword matrix that propelled them to top 3 rankings nationally.',
    icon: <Users className="w-6 h-6 text-[#F5A623]" />,
    tags: ['Technical SEO', 'Content Matrix', 'Link Authority', 'Local Maps']
  }
];

const Portfolio = () => {
  useEffect(() => {
    document.title = 'Client Case Studies & Growth Teardowns — DMDY';
  }, []);
  return (
    <div className="bg-slate-50 font-sans min-h-screen">
      
      {/* ========================================================= */}
      {/* HERO SECTION: 2-COLUMN (Left: Text, Right: Live Dashboard)*/}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_30%,transparent_70%)] opacity-5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (7 cols): Hero Positioning */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                Proven Client Results & Case Studies
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                Case Studies in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Revenue Acceleration
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
                We operate on verifiable metrics, not subjective theories. Discover how our digital frameworks and forensic execution drive measurable top-line revenue expansion.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <Link 
                  to="/contact" 
                  className="py-3.5 px-8 rounded-full font-bold text-white text-xs sm:text-sm shadow-xl bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  Request Custom Case Study <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="#case-studies"
                  className="py-3.5 px-7 rounded-full font-bold text-slate-700 text-xs sm:text-sm bg-white border border-slate-200/90 hover:bg-slate-50 transition-all text-center shadow-sm"
                >
                  Explore Teardowns &darr;
                </a>
              </div>

              {/* Verified Trust Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-slate-100 max-w-lg">
                <div>
                  <div className="text-base sm:text-xl font-extrabold text-slate-900">₹10Cr+</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Ad Capital Scaled</div>
                </div>
                <div>
                  <div className="text-base sm:text-xl font-extrabold text-slate-900">4.2x</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Average ROAS</div>
                </div>
                <div>
                  <div className="text-base sm:text-xl font-extrabold text-slate-900">98%</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Client Retention</div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Interactive Performance Telemetry Showcase */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              
              {/* Floating Badge Top Left */}
              <div className="absolute -top-4 -left-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Aggregated ROI</div>
                  <div className="text-xs font-extrabold text-emerald-600">+340% ROAS Expansion</div>
                </div>
              </div>

              {/* Floating Badge Bottom Right */}
              <div className="absolute -bottom-4 -right-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <div className="w-7 h-7 rounded-xl bg-cyan-100 flex items-center justify-center text-[#00AED6] font-bold text-xs">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Audited Scale</div>
                  <div className="text-xs font-extrabold text-slate-900">₹48M+ Inbound Pipeline</div>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00AED6]/25 via-[#E6007A]/20 to-[#F5A623]/20 rounded-3xl blur-2xl opacity-75 pointer-events-none"></div>

              {/* Main Executive Performance Card */}
              <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-7 overflow-hidden">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Live Telemetry
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    FY25 Growth Cohort
                  </span>
                </div>

                {/* Primary Growth KPI */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    Average Scale Velocity
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                      5.2x
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      &uarr; 90-Day Sprint
                    </span>
                  </div>
                </div>

                {/* Smooth Vector Curve Chart */}
                <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 mb-5 relative">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">
                    <span>Baseline (Day 0)</span>
                    <span>Optimization (Day 45)</span>
                    <span className="text-[#00AED6]">Scale (Day 90)</span>
                  </div>

                  <svg viewBox="0 0 400 120" className="w-full h-24 overflow-visible">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00AED6" />
                        <stop offset="50%" stopColor="#E6007A" />
                        <stop offset="100%" stopColor="#F5A623" />
                      </linearGradient>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00AED6" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#00AED6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 10 100 Q 90 95 150 70 T 270 40 T 390 12 L 390 115 L 10 115 Z"
                      fill="url(#areaGradient)"
                    />
                    <path
                      d="M 10 100 Q 90 95 150 70 T 270 40 T 390 12"
                      fill="none"
                      stroke="url(#chartGradient)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="100" r="4" fill="#00AED6" />
                    <circle cx="150" cy="70" r="4" fill="#00AED6" />
                    <circle cx="270" cy="40" r="4" fill="#E6007A" />
                    <circle cx="390" cy="12" r="5" fill="#F5A623" className="animate-pulse" />
                  </svg>
                </div>

                {/* Micro Case Breakdowns */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-100/70 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00AED6]"></div>
                      <span className="text-xs font-bold text-slate-800">Elevate Retail (D2C)</span>
                    </div>
                    <span className="text-xs font-extrabold text-[#00AED6]">+340% ROAS</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-100/70 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#E6007A]"></div>
                      <span className="text-xs font-bold text-slate-800">TechFlow SaaS (B2B)</span>
                    </div>
                    <span className="text-xs font-extrabold text-[#E6007A]">3.4x Pipeline</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-100/70 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#F5A623]"></div>
                      <span className="text-xs font-bold text-slate-800">National Logistics</span>
                    </div>
                    <span className="text-xs font-extrabold text-[#F5A623]">+215% Traffic</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CASE STUDIES GRID                                         */}
      {/* ========================================================= */}
      <section id="case-studies" className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-1.5 block">
              Performance Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Featured Growth Teardowns
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal max-w-xl">
              Representative examples of revenue expansion across direct-to-consumer, B2B SaaS, and national enterprise accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
                      {study.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[#00AED6] transition-colors">
                    {study.client}
                  </h3>

                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] mb-1 tracking-tight">
                    {study.metric}
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                    {study.metricLabel}
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal mb-6">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {study.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-sm sm:text-base font-bold text-slate-900 hover:text-[#00AED6] transition-colors group/link"
                  >
                    Request Strategy Teardown 
                    <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM CTA SECTION                                        */}
      {/* ========================================================= */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#00AED6] bg-[#00AED6]/10 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Next Growth Cycle
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight">
              Ready to write your company's growth story?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed font-normal max-w-xl mx-auto">
              We partner exclusively with businesses ready for structured, predictable scaling. Book a confidential consultation today.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full font-bold text-white text-xs sm:text-sm shadow-xl bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 transition-all"
            >
              Apply for Partnership <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
