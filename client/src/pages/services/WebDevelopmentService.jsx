import React, { useEffect, useState } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import { 
  Sparkles, 
  Palette, 
  Layout, 
  Globe, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  Compass,
  Code2,
  Layers,
  Smartphone,
  ShoppingBag,
  Search,
  MessageCircle,
  Briefcase,
  Building2,
  Home,
  HeartPulse,
  Utensils,
  Terminal,
  Lock,
  ArrowRight,
  Target,
  Users,
  Crown,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import corporateImg from '../../assets/web-development/corporate-website.jpg';
import ecommerceImg from '../../assets/web-development/ecommerce-website.jpg';
import portfolioImg from '../../assets/web-development/portfolio-website.jpg';
import realEstateImg from '../../assets/web-development/realestate-website.jpg';
import healthcareImg from '../../assets/web-development/healthcare-website.jpg';
import hospitalityImg from '../../assets/web-development/hospitality-website.jpg';
import websiteGoalsImg from '../../assets/web-development/website-goals.jpg';

const WebDevelopmentService = () => {
  const { openModal } = useContactModal();
  const [selectedGoal, setSelectedGoal] = useState('enquiries');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = 'Professional Website Design & Development Services — DMDY';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans min-h-screen">

      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient Brand Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_25%,#F5A623_50%,transparent_75%)] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (7 cols): User Hero Content */}
            <div className="lg:col-span-7">
              
              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/80 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                  Professional Website Design &amp; Development Services
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00AED6]"></span>
                  UI/UX &bull; Development &bull; Conversion
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                Websites Don't Just Impress.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  They Convert.
                </span>
              </h1>

              {/* Subheading / Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                Your website is your digital headquarters. DMDY designs fast, responsive, SEO-ready websites that build trust, improve user experience, and turn visitors into customers.
              </p>

              {/* Stats & Trust Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 max-w-xl mb-8 pt-6 border-t border-slate-100">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">10+</span>
                    <span className="text-xs font-semibold text-slate-500">Years</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Industry Experience</div>
                </div>

                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                      99+
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Score</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Google Core Web Vitals</div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#F5A623]">
                      360°
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Craft</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">UI/UX &bull; Dev &bull; Conversion</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button 
                  type="button"
                  onClick={() => openModal('Website Development')}
                  className="w-full sm:w-auto btn-primary"
                >
                  <Sparkles className="w-4 h-4 text-[#F5A623] group-hover:rotate-12 transition-transform" />
                  Get Free Website Consultation
                </button>
                <a 
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20would%20like%20to%20discuss%20Website%20Design%20%26%20Development%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-whatsapp"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp DMDY
                </a>
              </div>

            </div>

            {/* Right Column (5 cols): Compact Single-Window Code Editor */}
            <div className="lg:col-span-5 w-full relative mt-8 lg:mt-0">
              
              {/* Floating Badge: Lighthouse 99+ */}
              <div className="absolute -top-4 -left-3 z-20 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-slate-700/80 flex items-center gap-2 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] font-mono font-bold text-emerald-400">99+ Google PageSpeed</span>
              </div>

              {/* Main Compact Code Window */}
              <div className="bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 ring-1 ring-white/10 font-mono text-left">
                
                {/* Window Header */}
                <div className="bg-slate-900/90 px-3.5 py-2.5 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-300 ml-2">ConversionPlatform.tsx</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700">
                    React 19 &bull; Next.js 15
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-4 space-y-1 text-xs leading-relaxed overflow-x-auto no-scrollbar">
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">1</span>
                    <span className="text-slate-200"><span className="text-[#E6007A] font-bold">import</span> &#123; useEdgeSpeed &#125; <span className="text-[#E6007A] font-bold">from</span> <span className="text-[#00AED6]">'@dmdy/core'</span>;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">2</span>
                    <span className="text-slate-500 italic">// High-Performance Digital Headquarters</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">3</span>
                    <span className="text-slate-200"><span className="text-[#E6007A] font-bold">export default function</span> <span className="text-[#00AED6] font-bold">DigitalHQ</span>() &#123;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">4</span>
                    <span className="text-slate-200">&nbsp;&nbsp;<span className="text-[#E6007A] font-bold">const</span> &#123; speed, seo &#125; = <span className="text-[#F5A623]">useEdgeSpeed</span>(&#123;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">5</span>
                    <span className="text-slate-200">&nbsp;&nbsp;&nbsp;&nbsp;loadTime: <span className="text-[#00AED6]">'&lt;1.1s'</span>,</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">6</span>
                    <span className="text-slate-200">&nbsp;&nbsp;&nbsp;&nbsp;coreWebVitals: <span className="text-[#00AED6]">'99/100'</span></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">7</span>
                    <span className="text-slate-200">&nbsp;&nbsp;&#125;);</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">8</span>
                    <span className="text-slate-200">&nbsp;&nbsp;<span className="text-[#E6007A] font-bold">return</span> (</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">9</span>
                    <span className="text-slate-200">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#00AED6] font-bold">Platform</span> <span className="text-[#F5A623]">speed</span>=&#123;speed&#125; <span className="text-[#F5A623]">seo</span>=&#123;seo&#125;&gt;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">10</span>
                    <span className="text-slate-200">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#00AED6] font-bold">WebsitesThatConvert</span> <span className="text-[#F5A623]">responsive</span> /&gt;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">11</span>
                    <span className="text-slate-200">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#00AED6] font-bold">InstantLeadCapture</span> <span className="text-[#F5A623]">toWhatsApp</span> /&gt;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">12</span>
                    <span className="text-slate-200">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#00AED6] font-bold">Platform</span>&gt;</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">13</span>
                    <span className="text-slate-200">&nbsp;&nbsp;);</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-600 select-none text-[11px] shrink-0 w-4 text-right">14</span>
                    <span className="text-slate-200">&#125;</span>
                  </div>
                </div>

                {/* Footer Status Bar */}
                <div className="bg-slate-900/80 px-3.5 py-1.5 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-semibold">● 0 Errors</span>
                    <span>TypeScript Strict</span>
                  </div>
                  <div className="text-slate-400 font-mono">
                    UTF-8 &bull; &lt;1.1s LCP
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: THE WAY WEBSITES HAVE CHANGED                  */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Top 2-Column Row: Left Graphic + Right Narrative Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (5 cols): Digital Headquarters & Credibility Graphic */}
            <div className="lg:col-span-5 w-full relative order-2 lg:order-1">
              
              {/* Outer Logo Gradient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00AED6]/20 via-[#E6007A]/20 to-[#F5A623]/20 rounded-3xl blur-lg opacity-70 -z-10"></div>

              {/* Floating Badge: 94% First Impressions */}
              <div className="absolute -top-4 -right-2 z-20 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-ping"></span>
                <span className="text-[11px] font-bold text-slate-800">94% First Impressions Are Design-Led</span>
              </div>

              {/* Main Simulated Digital Headquarters Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xl relative overflow-hidden">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00AED6] animate-pulse"></div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                      Digital Headquarters Architecture
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-100 text-[10px] font-bold text-[#00AED6]">
                    <Sparkles className="w-3 h-3 text-[#00AED6]" />
                    <span>Modern Web Standard</span>
                  </div>
                </div>

                {/* Simulated Visitor Decision Query Box */}
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 mb-4">
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center justify-between">
                    <span>Visitor Decision Window</span>
                    <span className="text-[#34A853] font-semibold text-[10px]">Within 0.05 Seconds</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                    <span>"Does this brand feel credible, premium &amp; trustworthy?"</span>
                  </div>
                </div>

                {/* 4 Modern Paradigm Shift Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {/* First Impressions */}
                  <div className="p-2 rounded-xl bg-cyan-50/60 border border-cyan-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Perception</div>
                    <div className="text-[9px] font-bold text-[#00AED6] flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Luxury
                    </div>
                  </div>

                  {/* UX & Speed */}
                  <div className="p-2 rounded-xl bg-pink-50/60 border border-pink-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Experience</div>
                    <div className="text-[9px] font-bold text-[#E6007A] flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> &lt;1.1s UX
                    </div>
                  </div>

                  {/* Search Ready */}
                  <div className="p-2 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Search</div>
                    <div className="text-[9px] font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> SEO Ready
                    </div>
                  </div>

                  {/* Convert Visitors */}
                  <div className="p-2 rounded-xl bg-pink-50/60 border border-pink-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Conversion</div>
                    <div className="text-[9px] font-bold text-[#E6007A] flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Active
                    </div>
                  </div>
                </div>

                {/* Evolution Comparison Teardown Strip */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white relative shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00AED6]" />
                      <span>Brochure vs. Conversion Platform</span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                      ROI Multiplier
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Old Way (Paper / Static Theme):</span>
                      <span className="font-semibold text-rose-400">Low Trust &bull; 80% Bounce</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-400">DMDY Modern Architecture:</span>
                      <span className="font-bold text-emerald-400">Active Sales &amp; Lead Engine</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-slate-300">Conversion Impact:</span>
                    </div>
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                      +340% More Inquiries
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column (7 cols): User Narrative Content */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2">
              
              {/* Category Pill with Brand Colors */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-50 via-pink-50 to-amber-50 text-slate-800 border border-[#00AED6]/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00AED6] to-[#E6007A] animate-pulse"></span>
                  The Evolution of Web Presence
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
                  Credibility &bull; UX &bull; Search &bull; Conversion
                </span>
              </div>

              {/* Title with Icon & Gradient */}
              <div className="flex items-start sm:items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00AED6]/15 via-[#E6007A]/10 to-[#F5A623]/10 border border-[#00AED6]/30 flex items-center justify-center text-[#00AED6] shrink-0 shadow-sm">
                  <Sparkles className="w-6 h-6 text-[#00AED6]" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  The Way Websites{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Have Changed
                  </span>
                </h2>
              </div>

              {/* Sub-headline / Narrative */}
              <p className="text-base sm:text-lg font-bold text-slate-900 mb-3 tracking-tight">
                People don't judge businesses by their brochure anymore.
              </p>

              {/* Key Decisions styled tags */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                They judge them by their website. Within seconds, visitors decide whether your brand feels{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-blue-50 text-[#00AED6] font-bold border border-blue-200/80 text-xs sm:text-sm">
                  credible
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-pink-50 text-[#E6007A] font-bold border border-pink-200/80 text-xs sm:text-sm">
                  premium
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/80 text-xs sm:text-sm">
                  trustworthy
                </span>
                , and{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-amber-50 text-[#F5A623] font-bold border border-amber-200/80 text-xs sm:text-sm">
                  worth contacting
                </span>
                .
              </p>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-50/70 via-pink-50/50 to-amber-50/50 border border-cyan-100 mb-6">
                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                  Modern websites are no longer digital brochures—they're <strong className="text-[#00AED6]">sales</strong>, <strong className="text-[#E6007A]">branding</strong>, and <strong className="text-[#F5A623]">lead-generation platforms</strong>.
                </p>
              </div>

              {/* Transition Question with Brand Gradient */}
              <div className="pt-4 border-t border-slate-200/80 mb-5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Every high-performing website has{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    four responsibilities:
                  </span>
                </h3>
              </div>

              {/* Four Responsibilities 2-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                
                {/* 1. Create First Impressions */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-cyan-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#00AED6]/10 flex items-center justify-center text-[#00AED6] group-hover:scale-105 transition-transform">
                      <Palette className="w-4 h-4 text-[#00AED6]" />
                    </div>
                    <span className="text-[10px] font-semibold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-100">
                      Brand Identity
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Create First Impressions
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Luxury design that reflects your brand identity.
                  </p>
                </div>

                {/* 2. Deliver Seamless Experience */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-pink-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] group-hover:scale-105 transition-transform">
                      <Layout className="w-4 h-4 text-[#E6007A]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#E6007A] bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                      Mobile-First UX
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Deliver Seamless Experience
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Responsive, mobile-first, and intuitive UX.
                  </p>
                </div>

                {/* 3. Be Search Ready */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                      <Globe className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      SEO Architecture
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Be Search Ready
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    SEO-friendly architecture, speed, and structured pages.
                  </p>
                </div>

                {/* 4. Convert Visitors */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-pink-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-4 h-4 text-[#E6007A]" />
                    </div>
                    <span className="text-[10px] font-semibold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                      Business Growth
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Convert Visitors
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Landing pages, CTAs, and user journeys built for business growth.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE DMDY DIGITAL EXPERIENCE FRAMEWORK™         */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Proprietary Methodology</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              The DMDY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Digital Experience Framework™
              </span>
            </h2>

            {/* Strategy → UX → Build → Convert Flow Pipeline */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-50 text-[#00AED6] font-bold text-xs sm:text-sm border border-cyan-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00AED6]"></span>
                Strategy
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-pink-50 text-[#E6007A] font-bold text-xs sm:text-sm border border-pink-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#E6007A]"></span>
                UX
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 text-[#F5A623] font-bold text-xs sm:text-sm border border-amber-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]"></span>
                Build
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-pink-50 text-[#E6007A] font-bold text-xs sm:text-sm border border-pink-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#E6007A]"></span>
                Convert
              </span>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              This becomes the signature methodology.
            </p>
          </div>

          {/* 4 Framework Layer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Layer 01 — Strategy */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Compass className="w-6 h-6 text-[#00AED6]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Layer 01
                  </span>
                </div>

                <div className="text-xs font-bold text-[#00AED6] uppercase tracking-wider mb-1">
                  Discovery &amp; Blueprint
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Strategy
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Business goals, audience research, sitemap, content hierarchy, and conversion planning.
                </p>
              </div>
            </div>

            {/* Layer 02 — UX Design */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Palette className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Layer 02
                  </span>
                </div>

                <div className="text-xs font-bold text-[#E6007A] uppercase tracking-wider mb-1">
                  Interface &amp; Wireframes
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  UX Design
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Wireframes, premium UI, responsive layouts, and intuitive customer journeys.
                </p>
              </div>
            </div>

            {/* Layer 03 — Development */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Code2 className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F5A623] border border-amber-200/80">
                    Layer 03
                  </span>
                </div>

                <div className="text-xs font-bold text-[#F5A623] uppercase tracking-wider mb-1">
                  Engineering &amp; Code
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#F5A623] transition-colors tracking-tight">
                  Development
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Fast, scalable, secure websites built with modern development standards.
                </p>
              </div>
            </div>

            {/* Layer 04 — Convert */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <TrendingUp className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Layer 04
                  </span>
                </div>

                <div className="text-xs font-bold text-[#E6007A] uppercase tracking-wider mb-1">
                  Leads &amp; Analytics
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Convert
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  SEO structure, CTAs, lead forms, WhatsApp integration, and analytics.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHAT'S INCLUDED IN OUR WEBSITE SERVICES        */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Section Header - Center Aligned */}
          <div className="mb-10 sm:mb-12 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3 text-[#00AED6]" />
              <span>Full-Spectrum Capabilities</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What's Included in Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Website Services
              </span>
            </h2>
          </div>

          {/* 3-Column Clean, Compact & Centered Layout (3-3 Pair) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10 w-full">
            
            {/* 1. Custom Website Design */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100/80 flex items-center justify-center shadow-xs">
                  <Palette className="w-5 h-5 text-[#00AED6]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#00AED6] transition-colors">
                Custom Website Design
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Premium UI tailored to your brand.
              </p>
            </div>

            {/* 2. Website Development */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100/80 flex items-center justify-center shadow-xs">
                  <Code2 className="w-5 h-5 text-[#00AED6]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#00AED6] transition-colors">
                Website Development
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Fast, responsive, scalable development.
              </p>
            </div>

            {/* 3. Responsive Design */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#E6007A] border border-pink-100/80 flex items-center justify-center shadow-xs">
                  <Smartphone className="w-5 h-5 text-[#E6007A]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#E6007A] transition-colors">
                Responsive Design
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Optimized for mobile, tablet &amp; desktop.
              </p>
            </div>

            {/* 4. E-commerce Development */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#34A853] border border-emerald-100/80 flex items-center justify-center shadow-xs">
                  <ShoppingBag className="w-5 h-5 text-[#34A853]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#34A853] transition-colors">
                E-commerce Development
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Online stores with seamless shopping experiences.
              </p>
            </div>

            {/* 5. SEO-Ready Architecture */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#E6007A] border border-pink-100/80 flex items-center justify-center shadow-xs">
                  <Search className="w-5 h-5 text-[#E6007A]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#E6007A] transition-colors">
                SEO-Ready Architecture
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Technical structure built for Google visibility.
              </p>
            </div>

            {/* 6. WhatsApp & Lead Integration */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#F5A623] border border-amber-100/80 flex items-center justify-center shadow-xs">
                  <MessageCircle className="w-5 h-5 text-[#F5A623]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#F5A623] transition-colors">
                WhatsApp &amp; Lead Integration
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Contact forms, CRM &amp; enquiry optimization.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: WEBSITES BUILT FOR EVERY BUSINESS             */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Tailored Digital Solutions</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Websites Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Every Business
              </span>
            </h2>
          </div>

          {/* 6 Business Solutions Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. Corporate Websites */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={corporateImg} 
                    alt="Corporate Websites" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#00AED6]">
                    <Building2 className="w-4 h-4 text-[#00AED6]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors">
                  Corporate Websites
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Professional digital presence for growing brands.
                </p>
              </div>
            </div>

            {/* 2. E-commerce Stores */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={ecommerceImg} 
                    alt="E-commerce Stores" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#F5A623]">
                    <ShoppingBag className="w-4 h-4 text-[#F5A623]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F5A623] transition-colors">
                  E-commerce Stores
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Conversion-focused online shopping experiences.
                </p>
              </div>
            </div>

            {/* 3. Portfolio Websites */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={portfolioImg} 
                    alt="Portfolio Websites" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#E6007A]">
                    <Palette className="w-4 h-4 text-[#E6007A]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors">
                  Portfolio Websites
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Showcase creativity, services, and expertise.
                </p>
              </div>
            </div>

            {/* 4. Real Estate Websites */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={realEstateImg} 
                    alt="Real Estate Websites" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#00AED6]">
                    <Home className="w-4 h-4 text-[#00AED6]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors">
                  Real Estate Websites
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Property listings with lead capture functionality.
                </p>
              </div>
            </div>

            {/* 5. Healthcare Websites */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={healthcareImg} 
                    alt="Healthcare Websites" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#00C48C]">
                    <HeartPulse className="w-4 h-4 text-[#00C48C]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00C48C] transition-colors">
                  Healthcare Websites
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Patient-focused experiences with trust and accessibility.
                </p>
              </div>
            </div>

            {/* 6. Hospitality Websites */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={hospitalityImg} 
                    alt="Hospitality Websites" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#E6007A]">
                    <Utensils className="w-4 h-4 text-[#E6007A]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors">
                  Hospitality Websites
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Elegant booking and experience-driven design.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: HOW DMDY BUILDS HIGH-CONVERTING WEBSITES       */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* SECTION 6: HOW DMDY BUILDS HIGH-CONVERTING WEBSITES       */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Development Blueprint</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              How DMDY Builds{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                High-Converting Websites
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A disciplined, end-to-end engineering pipeline built to turn business requirements into fast, secure, and conversion-ready digital platforms.
            </p>
          </div>

          {/* Single Developer Computer Screen Window */}
          <div className="max-w-6xl mx-auto relative text-left">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00AED6]/15 via-[#E6007A]/10 to-[#F5A623]/15 blur-3xl rounded-3xl -z-10 transform scale-95 opacity-60 pointer-events-none"></div>

            {/* Floating Top Badge */}
            <div className="absolute -top-4 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-800">100/100 Core Web Vitals</span>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-bold text-xs">
                <Code2 className="w-3.5 h-3.5 text-[#00AED6]" />
              </div>
              <span className="text-xs font-bold text-slate-800">Next.js 15 • React 19 • SEO-Ready</span>
            </div>

            {/* Main Window */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-[#0B1120]">
              
              {/* Window Chrome Title Bar */}
              <div className="bg-slate-900/95 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
                
                {/* Traffic Lights & Title */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-xs"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-xs"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-xs"></div>
                  </div>
                  
                  {/* File Tab */}
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200">
                    <Code2 className="w-3.5 h-3.5 text-[#00AED6]" />
                    <span>dmdy-production-flow.tsx</span>
                    <span className="text-slate-500 text-[10px] ml-1">×</span>
                  </div>
                </div>

                {/* Center / Secondary Info */}
                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-[#00AED6]">git:(main)</span>
                  <span className="text-slate-600">•</span>
                  <span>CI/CD Automated Pipeline</span>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>BUILD PASSING</span>
                  </div>
                </div>
              </div>

              {/* Sub-header inside screen (Workflow Breadcrumbs) */}
              <div className="bg-slate-950/60 px-5 sm:px-6 py-2.5 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">//</span>
                  <span className="text-slate-300">STAGE-BY-STAGE EXECUTION LIFECYCLE</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-slate-400">
                  <span>Target: <span className="text-white">Production</span></span>
                  <span>Speed: <span className="text-emerald-400 font-bold">&lt; 0.8s</span></span>
                  <span>Optimization: <span className="text-[#F5A623] font-bold">Max Conversion</span></span>
                </div>
              </div>

              {/* Screen Body: 4 Pipeline Stage Cards */}
              <div className="p-5 sm:p-7 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  
                  {/* Stage 01 */}
                  <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00AED6]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-[#00AED6]/5">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-lg bg-[#00AED6]/15 text-[#00AED6] border border-[#00AED6]/30 flex items-center justify-center font-extrabold text-xs font-mono group-hover:scale-110 transition-transform">
                          01
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50">
                          phase_01.ts
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00AED6] transition-colors mb-2">
                        Discovery
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        Understand your business, audience, competitors, and website objectives.
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="text-slate-400">Deliverable</span>
                      <span className="text-[#00AED6] font-medium">Business Matrix</span>
                    </div>
                  </div>

                  {/* Stage 02 */}
                  <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#F5A623]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-[#F5A623]/5">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-lg bg-[#F5A623]/15 text-[#F5A623] border border-[#F5A623]/30 flex items-center justify-center font-extrabold text-xs font-mono group-hover:scale-110 transition-transform">
                          02
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50">
                          phase_02.fig
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F5A623] transition-colors mb-2">
                        Planning &amp; Wireframes
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        Create sitemap, content flow, and UX layouts before design begins.
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="text-slate-400">Deliverable</span>
                      <span className="text-[#F5A623] font-medium">Sitemap &amp; UX Flow</span>
                    </div>
                  </div>

                  {/* Stage 03 */}
                  <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#E6007A]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-[#E6007A]/5">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-lg bg-[#E6007A]/15 text-[#E6007A] border border-[#E6007A]/30 flex items-center justify-center font-extrabold text-xs font-mono group-hover:scale-110 transition-transform">
                          03
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50">
                          phase_03.tsx
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E6007A] transition-colors mb-2">
                        Design &amp; Development
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        Build responsive, SEO-friendly, and visually premium digital experiences.
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="text-slate-400">Deliverable</span>
                      <span className="text-[#E6007A] font-medium">Clean Code &amp; UI</span>
                    </div>
                  </div>

                  {/* Stage 04 */}
                  <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00C48C]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-[#00C48C]/5">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-lg bg-[#00C48C]/15 text-[#00C48C] border border-[#00C48C]/30 flex items-center justify-center font-extrabold text-xs font-mono group-hover:scale-110 transition-transform">
                          04
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50">
                          phase_04.sh
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00C48C] transition-colors mb-2">
                        Launch &amp; Optimize
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        Speed optimization, analytics, SEO setup, testing, and continuous improvements.
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="text-slate-400">Deliverable</span>
                      <span className="text-[#00C48C] font-medium">Live Deployment</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Developer Terminal Console */}
              <div className="border-t border-slate-800 bg-[#060A12] text-left">
                
                {/* Terminal Pane Header */}
                <div className="px-4 sm:px-6 py-2.5 border-b border-slate-800/80 bg-slate-950/80 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
                  
                  {/* Left: Terminal Tabs */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">
                      <Terminal className="w-3.5 h-3.5 text-[#00AED6]" />
                      <span className="text-[11px] sm:text-xs font-bold text-slate-200">bash — dmdy-runner</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1"></span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-slate-500 hover:text-slate-300 text-[11px] transition-colors cursor-pointer">
                      <span>output.log</span>
                    </div>
                    <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 text-slate-500 hover:text-slate-300 text-[11px] transition-colors cursor-pointer">
                      <span>core-web-vitals.json</span>
                    </div>
                  </div>

                  {/* Right: Environment Info */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="hidden sm:inline text-slate-500">Node: <span className="text-slate-300">v22.12.0</span></span>
                    <span className="hidden md:inline text-slate-600">•</span>
                    <span className="hidden sm:inline text-slate-500">Stack: <span className="text-slate-300">Next.js 15 / React 19</span></span>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-[10px]">
                      LIVE CONSOLE
                    </span>
                  </div>
                </div>

                {/* Terminal Console Output Body */}
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] text-slate-300 space-y-2 overflow-x-auto leading-relaxed selection:bg-[#00AED6]/30">
                  
                  {/* Command Line Prompt */}
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-[#00AED6] font-bold">dmdy@production-studio:~/web-client$</span>
                    <span className="text-white font-semibold">pnpm run build:pipeline --target=high-conversion</span>
                  </div>

                  {/* Config & Initialization */}
                  <div className="text-slate-500 text-[11px] sm:text-xs">
                    <span>[info] Loaded configuration from dmdy.config.ts (Mobile-First, SEO-Ready, Ultra-Fast SSR)</span>
                  </div>

                  {/* Stage-by-Stage Execution Logs */}
                  <div className="space-y-1.5 pt-1 text-[11px] sm:text-xs">
                    <div className="flex items-start sm:items-center justify-between gap-2 text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="text-[#00AED6] font-bold">[1/4]</span>
                        <span className="text-slate-200 font-semibold">Discovery Matrix</span>
                        <span className="text-slate-600 hidden md:inline">....................</span>
                      </div>
                      <span className="text-slate-400 text-right">Business Audit &amp; Competitor Benchmark verified <span className="text-emerald-400 font-bold ml-1">(0.12s)</span></span>
                    </div>

                    <div className="flex items-start sm:items-center justify-between gap-2 text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="text-[#F5A623] font-bold">[2/4]</span>
                        <span className="text-slate-200 font-semibold">Planning &amp; Wireframes</span>
                        <span className="text-slate-600 hidden md:inline">...........</span>
                      </div>
                      <span className="text-slate-400 text-right">Sitemap hierarchy &amp; UX user journey approved <span className="text-emerald-400 font-bold ml-1">(0.18s)</span></span>
                    </div>

                    <div className="flex items-start sm:items-center justify-between gap-2 text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="text-[#E6007A] font-bold">[3/4]</span>
                        <span className="text-slate-200 font-semibold">Design &amp; Development</span>
                        <span className="text-slate-600 hidden md:inline">...........</span>
                      </div>
                      <span className="text-slate-400 text-right">Modern UI, Responsive components &amp; SEO compiled <span className="text-emerald-400 font-bold ml-1">(0.31s)</span></span>
                    </div>

                    <div className="flex items-start sm:items-center justify-between gap-2 text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="text-[#00C48C] font-bold">[4/4]</span>
                        <span className="text-slate-200 font-semibold">Launch &amp; Core Web Vitals</span>
                        <span className="text-slate-600 hidden md:inline">.......</span>
                      </div>
                      <span className="text-slate-400 text-right">Lighthouse: <span className="text-emerald-400 font-bold">100/100 Speed</span> • Zero CLS verified <span className="text-emerald-400 font-bold ml-1">(0.14s)</span></span>
                    </div>
                  </div>

                  {/* Score Highlight Box */}
                  <div className="my-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs">
                    <span className="text-slate-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="font-semibold text-white">Lighthouse Scorecard:</span>
                    </span>
                    <div className="flex items-center gap-3 sm:gap-4 font-bold text-emerald-400">
                      <span>Performance: 100</span>
                      <span className="text-slate-700">•</span>
                      <span>Accessibility: 100</span>
                      <span className="text-slate-700">•</span>
                      <span>Best Practices: 100</span>
                      <span className="text-slate-700">•</span>
                      <span>SEO: 100</span>
                    </div>
                  </div>

                  {/* Production Ready & Success Notification */}
                  <div className="text-emerald-400 font-semibold flex items-center gap-2 pt-1 text-[11px] sm:text-xs">
                    <span>✓ Production Build Succeeded in 0.75s</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300">Target: High-Converting Live Platform</span>
                  </div>

                  {/* Active Prompt with Blinking Cursor */}
                  <div className="pt-1 flex items-center gap-2 text-slate-300 text-[11px] sm:text-xs">
                    <span className="text-[#00AED6] font-bold">dmdy@production-studio:~/web-client$</span>
                    <span className="text-slate-400">ready for deployment</span>
                    <span className="inline-block w-2 h-3.5 bg-[#00AED6] animate-pulse"></span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: CHOOSE YOUR WEBSITE GOAL                       */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column (5 cols): 3D Visual Showcase */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              
              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00AED6] animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">Conversion Architecture</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-bold text-xs">
                  ROI
                </div>
                <span className="text-xs font-bold text-slate-800">Goal-Driven Development</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img 
                  src={websiteGoalsImg} 
                  alt="Choose Your Website Goal" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

            </div>

            {/* Right Column (7 cols): Content & Interactive Tabs */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
                <Target className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>Strategy Matcher</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Choose Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Website Goal
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-7 max-w-xl">
                Every business has distinct conversion targets. Select what matters most right now to see the exact web engineering architecture we deploy.
              </p>

              {/* Dynamic Strategy Card with Integrated Tabs Header */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm transition-all duration-300 relative overflow-hidden">
                
                {/* Interactive Tabs Header inside the Card - Full Width Grid, No Scroll */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2 p-1.5 bg-slate-200/70 rounded-2xl w-full mb-6 border border-slate-300/60">
                  {[
                    { id: 'enquiries', label: 'Generate Business Enquiries' },
                    { id: 'sales', label: 'Sell Products Online' },
                    { id: 'brand', label: 'Build a Premium Brand Presence' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedGoal(tab.id)}
                      className={`w-full px-2.5 sm:px-3 py-2.5 rounded-xl text-xs sm:text-[12px] md:text-[13px] font-bold text-center transition-all duration-200 cursor-pointer flex items-center justify-center ${
                        selectedGoal === tab.id
                          ? 'bg-white text-slate-950 shadow-sm border border-slate-200/80 scale-[1.01]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                {/* 1. Generate Business Enquiries */}
                {selectedGoal === 'enquiries' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-[#00AED6]" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Generate Business Enquiries
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">B2B, Corporate &amp; Professional Service Firms</p>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-0 sm:pl-13">
                      <span className="font-semibold text-slate-900">Recommended Architecture:</span> Corporate website + WhatsApp integration + lead forms + SEO landing pages.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80 pl-0 sm:pl-13">
                      {['Corporate Website', 'WhatsApp Integration', 'Lead Forms', 'SEO Landing Pages'].map((tactic, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-200/80 text-[11px] font-semibold text-[#00AED6]">
                          <CheckCircle2 className="w-3 h-3 text-[#00AED6]" />
                          <span>{tactic}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Sell Products Online */}
                {selectedGoal === 'sales' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-5 h-5 text-[#E6007A]" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Sell Products Online
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">E-commerce, D2C &amp; Online Retail Stores</p>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-0 sm:pl-13">
                      <span className="font-semibold text-slate-900">Recommended Architecture:</span> E-commerce development + payment gateway + shopping experience + conversion optimization.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80 pl-0 sm:pl-13">
                      {['E-commerce Development', 'Payment Gateway', 'Shopping Experience', 'Conversion Optimization'].map((tactic, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-pink-50 border border-pink-200/80 text-[11px] font-semibold text-[#E6007A]">
                          <CheckCircle2 className="w-3 h-3 text-[#E6007A]" />
                          <span>{tactic}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Build a Premium Brand Presence */}
                {selectedGoal === 'brand' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center shrink-0">
                        <Crown className="w-5 h-5 text-[#F5A623]" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Build a Premium Brand Presence
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">Luxury, High-End Brands &amp; Creative Portfolios</p>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-0 sm:pl-13">
                      <span className="font-semibold text-slate-900">Recommended Architecture:</span> Luxury UI/UX + custom visuals + storytelling + modern responsive design.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80 pl-0 sm:pl-13">
                      {['Luxury UI/UX', 'Custom Visuals', 'Storytelling', 'Modern Responsive Design'].map((tactic, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200/80 text-[11px] font-semibold text-[#F5A623]">
                          <CheckCircle2 className="w-3 h-3 text-[#F5A623]" />
                          <span>{tactic}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS                     */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column (4 cols): Sticky Section Header & Direct Support Box */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>Knowledge Base</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                Frequently Asked <br className="hidden lg:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Questions
                </span>
              </h2>

              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">
                Web Design • Development • Performance
              </p>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
                Clear answers to common questions about custom website design, technical development, SEO foundations, and launch timelines.
              </p>

              {/* Direct Support Card (Desktop only) */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hidden lg:block">
                <div className="w-10 h-10 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-[#00AED6]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Have a specific question?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Our web development specialists are available for free project audits and technical scope consultations.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20have%20questions%20about%20Website%20Design%20%26%20Development%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right Column (8 cols): Accordion Items */}
            <div className="lg:col-span-8 space-y-3.5">
              {[
                {
                  q: "What is the difference between Website Design and Website Development?",
                  a: "Website Design focuses on the visual appearance, user experience (UI/UX), layout, and branding. Website Development is the technical process of building the website's functionality, responsiveness, speed, and performance. DMDY provides both as one integrated service."
                },
                {
                  q: "Will my website be mobile-friendly?",
                  a: "Yes. Every website we build follows a mobile-first responsive design approach, ensuring seamless performance across smartphones, tablets, laptops, and desktops."
                },
                {
                  q: "Are DMDY websites SEO-friendly?",
                  a: "Absolutely. Our Website Design & Development Services include SEO-ready architecture, fast loading speeds, structured page hierarchy, Core Web Vitals optimization, and technical foundations that support better Google rankings."
                },
                {
                  q: "Can you build an e-commerce website?",
                  a: "Yes. We design and develop custom e-commerce websites with product management, payment gateways, shopping cart functionality, and conversion-focused customer journeys."
                },
                {
                  q: "Will my website include WhatsApp and lead forms?",
                  a: "Yes. We integrate WhatsApp chat, enquiry forms, contact forms, CRM integrations, call buttons, and analytics to maximize lead generation and customer communication."
                },
                {
                  q: "How long does a website project usually take?",
                  a: "Project timelines depend on the size and functionality of the website. A standard business website generally takes a few weeks, while larger custom or e-commerce projects require additional planning and development."
                }
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                const accentBorder = idx % 3 === 0 
                  ? 'border-[#00AED6]/50' 
                  : idx % 3 === 1 
                    ? 'border-[#E6007A]/50' 
                    : 'border-[#F5A623]/50';
                const accentText = idx % 3 === 0 
                  ? 'text-[#00AED6]' 
                  : idx % 3 === 1 
                    ? 'text-[#E6007A]' 
                    : 'text-[#F5A623]';

                return (
                  <div 
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen 
                        ? `bg-white ${accentBorder} shadow-sm` 
                        : 'bg-white border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? `rotate-180 ${accentText}` : 'text-slate-400'
                      }`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: FINAL CTA - YOUR WEBSITE SHOULD BE SALESPERSON */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-9 text-left">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              
              {/* Left Column: Heading & Content */}
              <div className="max-w-2xl">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-2.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                  <span>Digital Headquarters Architecture</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
                  Your Website Should Be Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Best Salesperson.
                  </span>
                </h2>

                {/* 3 Callout Pillars */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-2.5">
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00AED6]"></span>
                    Beautiful design attracts attention.
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E6007A]"></span>
                    Smart development creates performance.
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F5A623]"></span>
                    Strategic UX drives conversion.
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Let DMDY build a website that represents your brand and grows your business.
                </p>

              </div>

              {/* Right Column: Dual Action Buttons */}
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => openModal('Website Design & Development')}
                  className="btn-primary"
                >
                  <span>Get Your Free Website Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20want%20to%20discuss%20Website%20Design%20%26%20Development%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg className="w-4 h-4 text-[#00C48C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp DMDY</span>
                </a>
              </div>

            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 mt-5 border-t border-slate-200/80 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C48C]" />
                <span>100/100 Core Web Vitals speed</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>Mobile-first &amp; SEO-ready architecture</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E6007A]" />
                <span>Zero-risk initial consultation</span>
              </span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default WebDevelopmentService;
