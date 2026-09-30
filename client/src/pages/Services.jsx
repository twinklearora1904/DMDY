import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import { LineChart, Target, Code2, ArrowRight, CheckCircle2, TrendingUp, Sparkles, Layers, Zap, Share2 } from 'lucide-react';

const process = [
  {
    step: '01',
    title: 'Discovery & Forensic Audit',
    desc: 'We conduct a comprehensive forensic teardown of your current traffic, ad spend, tech stack, and competitors to identify immediate revenue opportunities.'
  },
  {
    step: '02',
    title: 'Strategic Architecture',
    desc: 'Our growth analysts formulate a bespoke 90-day execution roadmap aligned with your unit economics and target customer acquisition costs (CAC).'
  },
  {
    step: '03',
    title: 'Rapid Deployment',
    desc: 'Specialized teams deploy high-converting landing pages, creative assets, tracking pixels, and laser-targeted campaigns.'
  },
  {
    step: '04',
    title: 'Scale & Compound',
    desc: 'Through continuous attribution and multivariate testing, we scale winning funnels and maximize Return on Ad Spend (ROAS).'
  }
];

const Services = () => {
  const { openModal } = useContactModal();
  useEffect(() => {
    document.title = 'Full-Stack Digital Growth Services & Capabilities — DMDY';
  }, []);

  return (
    <div className="bg-slate-50 font-sans min-h-screen">

      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION (2-Column Grid)                   */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_30%,transparent_70%)] opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (7 cols): Hero Positioning */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                Full-Spectrum Growth Infrastructure
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                Specialized Services Built for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Aggressive Growth
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
                We provide structured, data-driven marketing and engineering frameworks engineered to scale mid-market and enterprise businesses without vanity metrics.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => openModal('Complete 360° Digital Marketing')}
                  className="btn-primary w-full sm:w-auto"
                >
                  Get Custom Growth Proposal <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#capabilities"
                  className="btn-secondary w-full sm:w-auto"
                >
                  Explore 5 Disciplines &darr;
                </a>
              </div>

              {/* Micro Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 max-w-lg">
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">5 Core</div>
                  <div className="text-xs text-slate-500 font-medium">Growth Pillars</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Attribution-Backed</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">Weekly</div>
                  <div className="text-xs text-slate-500 font-medium">Sprint Cadence</div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): 360° Growth Matrix Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">

              {/* Floating Badge Top Left */}
              <div className="absolute -top-4 -left-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <div className="w-7 h-7 rounded-xl bg-cyan-100 flex items-center justify-center text-[#00AED6] font-bold text-xs">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">360° Architecture</div>
                  <div className="text-xs font-extrabold text-slate-900">5 Integrated Disciplines</div>
                </div>
              </div>

              {/* Floating Badge Bottom Right */}
              <div className="absolute -bottom-4 -right-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Attribution Multiplier</div>
                  <div className="text-xs font-extrabold text-emerald-600">+412% Compounding Lift</div>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00AED6]/25 via-[#E6007A]/20 to-[#F5A623]/20 rounded-3xl blur-2xl opacity-75 pointer-events-none"></div>

              {/* Main Matrix Card */}
              <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-7 overflow-hidden">

                {/* Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Growth Stack Active
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    Full-Funnel Engine
                  </span>
                </div>

                {/* 4 Quadrants Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">

                  {/* Pillar 1: SEO */}
                  <div className="p-3.5 rounded-2xl bg-cyan-50/60 border border-cyan-100 hover:bg-cyan-50 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#00AED6] mb-2.5 border border-cyan-100">
                      <LineChart className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-extrabold text-slate-900 mb-0.5">Organic SEO</div>
                    <div className="text-[11px] text-slate-500 font-medium">Rank #1 Google & AI</div>
                  </div>

                  {/* Pillar 2: Paid Ads */}
                  <div className="p-3.5 rounded-2xl bg-pink-50/60 border border-pink-100 hover:bg-pink-50 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#E6007A] mb-2.5 border border-pink-100">
                      <Target className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-extrabold text-slate-900 mb-0.5">Paid Media</div>
                    <div className="text-[11px] text-slate-500 font-medium">Predictable 4.2x ROAS</div>
                  </div>

                  {/* Pillar 3: Web Engineering */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100 hover:bg-amber-50 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#F5A623] mb-2.5 border border-amber-100">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-extrabold text-slate-900 mb-0.5">Engineering</div>
                    <div className="text-[11px] text-slate-500 font-medium">&lt;1.2s Fast React Apps</div>
                  </div>

                  {/* Pillar 4: CRO */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:bg-emerald-50 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-emerald-600 mb-2.5 border border-emerald-100">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-extrabold text-slate-900 mb-0.5">CRO Science</div>
                    <div className="text-[11px] text-slate-500 font-medium">Multivariate Testing</div>
                  </div>

                </div>

                {/* Bottom Compounding Bar */}
                <div className="p-3.5 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#00AED6]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Unified Delivery</div>
                      <div className="text-xs font-bold text-white">Single Source of Truth</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Zero Silos &rarr;
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: SERVICES 4-PILLAR GRID                         */}
      {/* ========================================================= */}
      <section id="capabilities" className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12 text-left max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-1.5 block">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Integrated Capabilities for Predictable ROI
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Each discipline operates in lockstep to compound conversion rates, reduce customer acquisition cost, and accelerate enterprise valuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Service 1 - SEO */}
            <div id="seo" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 md:p-10 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#00AED6]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LineChart className="w-6 h-6 text-[#00AED6]" />
                </div>
                <div className="text-xs font-bold text-[#00AED6] uppercase tracking-widest mb-1.5">
                  Organic Dominance
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#00AED6] transition-colors">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base font-normal">
                  We engineer your web presence to dominate search engine results. Using advanced technical SEO, content architectures, and authoritative link acquisition, we drive high-intent organic traffic that converts directly into revenue.
                </p>
                <div className="space-y-2.5 mb-8">
                  {['Technical SEO Audits & Core Web Vitals Fixes', 'Competitive Keyword & Content Gap Analysis', 'High-Authority Editorial Link Acquisition', 'Local Maps & Google Business Profile Domination'].map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-700 font-medium text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#00AED6] mr-2.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link to="/services/seo" className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base text-[#00AED6] hover:text-[#E6007A] transition-colors">
                  Explore Detailed SEO Framework &rarr;
                </Link>
              </div>
            </div>

            {/* Service 2 - Performance Ads */}
            <div id="paid-ads" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 md:p-10 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#E6007A]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-[#E6007A]" />
                </div>
                <div className="text-xs font-bold text-[#E6007A] uppercase tracking-widest mb-1.5">
                  Paid Acquisition
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#E6007A] transition-colors">
                  Performance Marketing & Paid Ads
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base font-normal">
                  Precision-targeted paid campaigns across Google, Meta, and LinkedIn. We focus ruthlessly on maximizing your Return on Ad Spend (ROAS) and driving scalable, predictable inbound client acquisition.
                </p>
                <div className="space-y-2.5 mb-8">
                  {['Google Search, Performance Max & YouTube Ads', 'Meta (Facebook & Instagram) Creative Funnels', 'LinkedIn B2B Account-Based Marketing', 'Dynamic Multi-Touch Retargeting & Custom Audiences'].map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-700 font-medium text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#E6007A] mr-2.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link to="/services/google-ads" className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base text-[#E6007A] hover:text-[#00AED6] transition-colors">
                  Explore Google Ads & PPC Framework &rarr;
                </Link>
              </div>
            </div>

            {/* Service 3 - Web Engineering */}
            <div id="web-engineering" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 md:p-10 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div className="text-xs font-bold text-[#F5A623] uppercase tracking-widest mb-1.5">
                  Digital Engineering
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#F5A623] transition-colors">
                  Web & Application Engineering
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base font-normal">
                  High-performance, secure, and conversion-engineered digital properties. We build modern React and Node.js applications tailored to scale your business operations and reduce checkout drop-offs.
                </p>
                <div className="space-y-2.5 mb-8">
                  {['Custom React & Next.js Web Applications', 'Headless E-Commerce Solutions (Shopify & Custom)', 'REST API & Third-Party System Integrations', 'Lightning-Fast Page Speeds (<1.2s Load Times)'].map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-700 font-medium text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#F5A623] mr-2.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/services/web-development"
                  className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base text-[#F5A623] hover:text-[#00AED6] transition-colors cursor-pointer"
                >
                  Explore Web Engineering &rarr;
                </Link>
              </div>
            </div>

            {/* Service 4 - CRO */}
            <div id="cro" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 md:p-10 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#00C48C]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-[#00C48C]" />
                </div>
                <div className="text-xs font-bold text-[#00C48C] uppercase tracking-widest mb-1.5">
                  Revenue Optimization
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#00C48C] transition-colors">
                  Conversion Rate Optimization (CRO)
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base font-normal">
                  Data-backed UI/UX optimizations designed to turn more of your existing traffic into paying clients. We employ rigorous multivariate testing and heatmap behavioral analyses.
                </p>
                <div className="space-y-2.5 mb-8">
                  {['A/B & Multivariate Hypothesis Testing', 'Heatmapping & Session Recording Analysis', 'Frictionless Checkout & Funnel Redesigns', 'Micro-Copy & Offer Positioning Improvements'].map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-700 font-medium text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#00C48C] mr-2.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openModal('Performance Marketing')}
                  className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base text-[#00C48C] hover:text-[#00AED6] transition-colors cursor-pointer"
                >
                  Explore Conversion Optimization &rarr;
                </button>
              </div>
            </div>

            {/* Service 5 - Social & Content Marketing */}
            <div id="social-marketing" className="scroll-mt-28 md:col-span-2 bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 md:p-10 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="w-12 h-12 bg-[#E6007A]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Share2 className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <div className="text-xs font-bold text-[#E6007A] uppercase tracking-widest mb-1.5">
                    Omnichannel Storytelling
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#E6007A] transition-colors">
                    Social Media & Content Marketing
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base font-normal">
                    Brand storytelling, organic content engines, influencer outreach, and viral distribution models. We create high-engagement content architectures that build authority, community trust, and organic pipeline.
                  </p>
                </div>
                <div className="lg:col-span-5 space-y-2.5">
                  {['Cross-Platform Organic Strategy (Instagram, LinkedIn, YouTube)', 'High-Converting Short-Form Video & Reels Direction', 'Targeted Influencer Partnerships & Creator Collabs', 'Community Management & Real-Time Sentiment Monitoring'].map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-700 font-medium text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#E6007A] mr-2.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link to="/services/social-media" className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-[#E6007A] hover:text-[#00AED6] transition-colors">
                  Explore Social Growth Engine &rarr;
                </Link>
                <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                  Compounding Organic Reach
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: CORPORATE PROCESS TIMELINE                     */}
      {/* ========================================================= */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              Execution Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Structured for Predictable Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              A battle-tested 4-phase delivery system ensuring immediate impact and compounding long-term returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((p, i) => (
              <div key={i} className="relative p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-200 mb-3">{p.step}</div>
                <h4 className="text-lg sm:text-xl font-extrabold mb-2 text-slate-900 tracking-tight">{p.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: FINAL CTA SECTION                              */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 text-center bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#00AED6] bg-[#00AED6]/10 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> High-Velocity Execution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight">
              Ready to build your digital growth engine?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed font-normal max-w-xl mx-auto">
              Schedule a strategy consultation with our senior team. We will analyze your funnel and present an actionable execution blueprint.
            </p>
            <button
              type="button"
              onClick={() => openModal('Complete 360° Digital Marketing')}
              className="btn-primary"
            >
              Schedule Strategy Call <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
