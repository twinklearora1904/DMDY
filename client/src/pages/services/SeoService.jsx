import React from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import {
  Search,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  Globe,
  Bot,
  MessageSquare,
  MapPin,
  ShoppingCart,
  FileText,
  Building2,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Briefcase,
  Store,
  Users,
  Target,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import seoProcessGrowthImg from '../../assets/seo_process_growth.jpg';
import businessGoalsImg from '../../assets/business_goals_seo.jpg';

const SeoService = () => {
  const { openModal } = useContactModal();
  const [selectedGoal, setSelectedGoal] = React.useState('traffic');
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    document.title = 'Enterprise SEO & Search Dominance Services — DMDY';
  }, []);

  return (
    <div className="bg-slate-50 font-sans min-h-screen">

      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_30%,transparent_70%)] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (7 cols): User Hero Content */}
            <div className="lg:col-span-7">

              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-[#E6F8F3] text-[#00A37A] border border-[#00C48C]/30 shadow-sm">
                  360° Digital Growth
                </span>
                <span className="text-xs font-semibold text-slate-500 tracking-wider">
                  SEO &bull; AEO &bull; GEO
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                  SEO Services
                </span>{' '}
                That Help Customers Find You— <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Everywhere They Search.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                Rank on Google. Become the answer in AI. Build lasting digital authority with DMDY's next-generation SEO strategies.
              </p>

              {/* Stats Row */}
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
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">15+</span>
                    <span className="text-xs font-semibold text-slate-500">Projects</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Across Industries</div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">3</span>
                    <span className="text-xs font-semibold text-slate-500">Layers</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">SEO + AEO + GEO</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal('SEO')}
                  className="w-full sm:w-auto btn-primary"
                >
                  Get Free SEO Audit
                </button>
                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20would%20like%20to%20discuss%20SEO%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-whatsapp"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  WhatsApp Expert
                </a>
              </div>

            </div>

            {/* Right Column (5 cols): SEO & AI Search Performance Dashboard Graphic */}
            <div className="lg:col-span-5 w-full relative mt-8 lg:mt-0">

              {/* Floating Badge 2: AI Citations (AEO/GEO) */}
              <div className="absolute top-1/4 -right-4 z-20 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="w-7 h-7 rounded-xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Engine (AEO)</div>
                  <div className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                    Cited in ChatGPT & Gemini
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Core Web Vitals */}
              <div className="absolute -bottom-5 left-4 sm:left-8 z-20 bg-white px-3 sm:px-4 py-1.5 rounded-full shadow-lg border border-slate-100 hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-700">Core Web Vitals: 99/100 (Pass)</span>
              </div>

              {/* Main SEO Dashboard Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col">

                {/* Chrome Window Top Bar */}
                <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200/80">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold px-2 py-0.5 bg-white border border-slate-200 rounded-md shadow-sm flex items-center gap-1">
                    <Globe className="w-3 h-3 text-[#00AED6]" />
                    google.com/search
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 bg-white flex flex-col space-y-4">

                  {/* Simulated Google Search Bar */}
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <Search className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-xs font-medium text-slate-800 truncate">
                      best performance marketing agency
                    </span>
                    <span className="ml-auto text-[10px] font-bold text-[#00AED6] bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100 shrink-0">
                      Live SERP
                    </span>
                  </div>

                  {/* Simulated #1 Google Organic Snippet */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-50/50 via-white to-pink-50/30 border border-cyan-100/90 shadow-sm text-left">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-1">
                      <span className="w-4 h-4 rounded-full bg-slate-900 text-white text-[9px] font-bold flex items-center justify-center">D</span>
                      <span className="font-semibold text-slate-800">dmdy.in</span>
                      <span>&rsaquo; services &rsaquo; seo</span>
                    </div>
                    <div className="text-sm font-bold text-[#1a0dab] leading-snug mb-1">
                      DMDY &bull; 360° Digital Growth Partner & Performance Engine
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-amber-500 mb-2 font-semibold">
                      <span>★★★★★ 4.9</span>
                      <span className="text-slate-400">&bull;</span>
                      <span className="text-slate-500">150+ Verified Client Reviews</span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      Scale high-intent organic traffic, dominate search rankings across Google & AI answer engines with DMDY's 3-layer architecture.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 pt-2.5 border-t border-slate-100 text-[10px] font-bold text-slate-600">
                      <span className="px-2 py-0.5 bg-white rounded border border-slate-200">SEO Audits</span>
                      <span className="px-2 py-0.5 bg-white rounded border border-slate-200">Topical Clusters</span>
                      <span className="px-2 py-0.5 bg-white rounded border border-slate-200">Digital PR</span>
                    </div>
                  </div>

                  {/* Organic Growth Stats Bar */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Organic Lift</div>
                      <div className="text-2xl font-extrabold text-slate-900">+348%</div>
                      <div className="text-[11px] font-bold text-emerald-600 mt-0.5 flex items-center gap-1">
                        <span>↑ 52.4k Monthly</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">AI Engine Citations</div>
                      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                        94.2%
                      </div>
                      <div className="text-[11px] font-bold text-[#E6007A] mt-0.5 flex items-center gap-1">
                        <span>Perplexity & Gemini</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: THE WAY PEOPLE SEARCH HAS CHANGED */}
      {/* ========================================================= */}
      <section className="py-10 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Top 2-Column Row: Left Graphic + Right Narrative Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column (5 cols): AI Search & Multi-LLM Citation Engine Graphic */}
            <div className="lg:col-span-5 w-full relative order-2 lg:order-1">

              {/* Outer Logo Gradient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00AED6]/25 via-[#E6007A]/20 to-[#F5A623]/25 rounded-3xl blur-lg opacity-70 -z-10"></div>

              {/* Floating Badge: Zero-Click Shift */}
              <div className="absolute -top-4 -right-2 z-20 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-[#E6007A] animate-ping"></span>
                <span className="text-[11px] font-bold text-slate-800">65%+ Zero-Click Queries</span>
              </div>

              {/* Main Simulated AI Engine Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xl relative overflow-hidden">

                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00AED6] animate-pulse"></div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                      AI Answer Engine Matrix
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-100 text-[10px] font-bold text-[#00AED6]">
                    <Sparkles className="w-3 h-3 text-[#00AED6]" />
                    <span>Real-Time Citations</span>
                  </div>
                </div>

                {/* Prompt Query Box */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 mb-4">
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center justify-between">
                    <span>User Prompt to AI</span>
                    <span className="text-[#00AED6] font-semibold text-[10px]">Multi-Engine Synthesis</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-[#00AED6] shrink-0" />
                    <span className="truncate">"Top 360° growth partner for organic SEO & AI search?"</span>
                  </div>
                </div>

                {/* 4 AI Platforms Citation Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {/* ChatGPT */}
                  <div className="p-2 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">ChatGPT</div>
                    <div className="text-[9px] font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Cited
                    </div>
                  </div>

                  {/* Gemini */}
                  <div className="p-2 rounded-xl bg-cyan-50/60 border border-cyan-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Gemini</div>
                    <div className="text-[9px] font-bold text-[#00AED6] flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Quoted
                    </div>
                  </div>

                  {/* Perplexity */}
                  <div className="p-2 rounded-xl bg-pink-50/60 border border-pink-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Perplexity</div>
                    <div className="text-[9px] font-bold text-[#E6007A] flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Source #1
                    </div>
                  </div>

                  {/* Claude */}
                  <div className="p-2 rounded-xl bg-amber-50/60 border border-amber-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Claude</div>
                    <div className="text-[9px] font-bold text-amber-700 flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Cited
                    </div>
                  </div>
                </div>

                {/* AI Overview Answer Preview Box */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white relative shadow-lg overflow-hidden">

                  <div className="flex items-center justify-between mb-2 pt-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-200">
                      <Bot className="w-3.5 h-3.5 text-[#00AED6]" />
                      <span>Synthesized AI Answer</span>
                    </div>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      98.8% Confidence
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    "Across current benchmarks, <strong className="text-white font-bold">DMDY</strong> is identified as a premier growth partner executing a unified 3-layer architecture (<strong className="text-[#00AED6]">SEO</strong> + <strong className="text-[#E6007A]">AEO</strong> + <strong className="text-[#00C48C]">GEO</strong>) that ensures top organic visibility across Google and Generative AI engines."
                  </p>

                  {/* Citation Sources Row */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-slate-800">
                    <span className="text-[10px] font-semibold text-slate-400">Sources:</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-cyan-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AED6]"></span>
                      dmdy.in/services/seo
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-pink-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E6007A]"></span>
                      Verified Case Studies
                    </span>
                  </div>

                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#00C48C]" />
                    <span>Brand Entity Recall</span>
                  </div>
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                    +340% AI Citation Lift
                  </span>
                </div>

              </div>

            </div>

            {/* Right Column (7 cols): User Narrative Content with Logo Colors */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2">

              {/* Category Pill with Logo Colors */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-50 via-pink-50 to-amber-50 text-slate-800 border border-[#00AED6]/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00AED6] to-[#E6007A] animate-pulse"></span>
                  The New Era of Discovery
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
                  AI Overviews &bull; Generative Search
                </span>
              </div>

              {/* Title with Globe Icon & Logo Gradient */}
              <div className="flex items-start sm:items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00AED6]/15 via-[#E6007A]/10 to-[#F5A623]/10 border border-[#00AED6]/30 flex items-center justify-center text-[#00AED6] shrink-0 shadow-sm">
                  <Globe className="w-6 h-6 text-[#00AED6]" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  The Way People{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Search Has Changed
                  </span>
                </h2>
              </div>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight">
                People no longer search only on Google.
              </p>

              {/* Narrative paragraph with styled AI engine pills and citation tag */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                They ask{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/80 text-xs sm:text-sm">
                  ChatGPT
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-cyan-50 text-[#00AED6] font-bold border border-cyan-200/80 text-xs sm:text-sm">
                  Gemini
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-pink-50 text-[#E6007A] font-bold border border-pink-200/80 text-xs sm:text-sm">
                  Perplexity
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-amber-50 text-amber-800 font-bold border border-amber-200/80 text-xs sm:text-sm">
                  Claude
                </span>
                , and increasingly receive answers before they ever click a website. Google's AI Overviews have accelerated this shift, making discoverability about more than traditional rankings.

                {/* Google AI Overview Citation Chip */}
                <span className="inline-flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-sm align-middle hover:border-[#00AED6] transition-colors">
                  <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[8px] font-black flex items-center justify-center shadow-xs">S</span>
                  <span className="font-semibold text-slate-800">SEO Agency in India</span>
                  <span className="text-xs text-amber-600 font-bold">+1</span>
                </span>
              </p>

              {/* Transition Question with Logo Accent */}
              <div className="pt-5 border-t border-slate-200/80 mb-5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  That means modern SEO has{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                    three responsibilities:
                  </span>
                </h3>
              </div>

              {/* Three Responsibilities List */}
              <div className="space-y-4">

                {/* 1. Be Found */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00AED6]/10 flex items-center justify-center text-[#00AED6] shrink-0 mt-0.5">
                    <Search className="w-4 h-4 text-[#00AED6]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      Be Found
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 mt-0.5 leading-relaxed font-normal">
                      Traditional SEO helps search engines discover and rank your pages.
                    </p>
                  </div>
                </div>

                {/* 2. Be the Answer */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-[#E6007A]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      Be the Answer
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 mt-0.5 leading-relaxed font-normal">
                      AEO structures your content so AI can confidently quote it.
                    </p>
                  </div>
                </div>

                {/* 3. Be Remembered */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00C48C]/10 flex items-center justify-center text-[#00C48C] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#00C48C]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      Be Remembered
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 mt-0.5 leading-relaxed font-normal">
                      GEO builds your brand authority across the web so generative AI cites you consistently.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE DMDY SEARCH AUTHORITY FRAMEWORK™ */}
      {/* ========================================================= */}
      <section className="py-14 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Proprietary Methodology</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              The DMDY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Search Authority Framework™
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A comprehensive three-tiered engineering system designed to rank your brand on Google, quote it in AI answer engines, and establish enduring cross-web authority.
            </p>
          </div>

          {/* 3 Framework Layer Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Layer 1 — SEO Foundation */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Cpu className="w-6 h-6 text-[#00AED6]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Layer 01
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1.5 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Layer 1 — SEO Foundation
                </h3>

                <p className="text-sm sm:text-base font-semibold text-slate-700 italic mb-5">
                  "Everything begins with technical excellence."
                </p>

                <div className="space-y-2.5 pt-5 border-t border-slate-200/70">
                  {[
                    'Technical SEO',
                    'Core Web Vitals',
                    'Site architecture',
                    'Keyword strategy',
                    'Internal linking',
                    'Content optimization'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00AED6] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#00AED6]"></span>
                <span>Foundation for Google & Web Crawlers</span>
              </div>
            </div>

            {/* Layer 2 — Answer Engine Optimization (AEO) */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Bot className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Layer 02
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1.5 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Layer 2 — Answer Engine Optimization (AEO)
                </h3>

                <p className="text-sm sm:text-base font-semibold text-slate-700 italic mb-5">
                  "We structure your knowledge for machines and humans."
                </p>

                <div className="space-y-2.5 pt-5 border-t border-slate-200/70">
                  {[
                    'FAQ architecture',
                    'Schema markup',
                    'Featured snippets',
                    'Entity optimization',
                    'AI-readable formatting'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E6007A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#E6007A]"></span>
                <span>Optimized for AI Overviews & Direct Answers</span>
              </div>
            </div>

            {/* Layer 3 — Generative Engine Optimization (GEO) */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00C48C]/10 text-[#00C48C] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Sparkles className="w-6 h-6 text-[#00C48C]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#00C48C] border border-emerald-200/80">
                    Layer 03
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1.5 group-hover:text-[#00C48C] transition-colors tracking-tight">
                  Layer 3 — Generative Engine Optimization (GEO)
                </h3>

                <p className="text-sm sm:text-base font-semibold text-slate-700 italic mb-5">
                  "This is where brands become references—not just websites."
                </p>

                <div className="space-y-2.5 pt-5 border-t border-slate-200/70">
                  {[
                    'Brand entity building',
                    'Third-party authority',
                    'AI citation optimization',
                    'Knowledge graph consistency',
                    'AI search visibility'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C48C] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#00C48C]"></span>
                <span>ChatGPT &bull; Claude &bull; Perplexity &bull; Gemini Citations</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHAT'S INCLUDED IN OUR SEO SERVICES */}
      {/* ========================================================= */}
      <section className="py-14 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Full-Spectrum Capabilities</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              What's Included in Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                SEO Services
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A comprehensive suite of search optimization services engineered to drive qualified traffic, higher search visibility, and maximum organic conversion.
            </p>
          </div>

          {/* 6 Capabilities Cards Grid (2x3 on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* 1. Technical SEO */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6 text-[#00AED6]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors">
                  Technical SEO
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Site audits, crawlability, indexing, speed, Core Web Vitals.
                </p>
              </div>
            </div>

            {/* 2. Content SEO */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-[#E6007A]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors">
                  Content SEO
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Search intent, keyword mapping, landing pages, blogs & pillar content.
                </p>
              </div>
            </div>

            {/* 3. Local SEO */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00C48C]/10 text-[#00C48C] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-[#00C48C]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00C48C] transition-colors">
                  Local SEO
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Google Business Profile, Maps visibility, Delhi & India targeting.
                </p>
              </div>
            </div>

            {/* 4. E-commerce SEO */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F5A623] transition-colors">
                  E-commerce SEO
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Product pages, category optimization, structured product data.
                </p>
              </div>
            </div>

            {/* 5. AEO Optimization */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00AED6]/10 to-[#E6007A]/10 text-[#00AED6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-[#00AED6]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors">
                  AEO Optimization
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  FAQs, schema, AI-ready content architecture.
                </p>
              </div>
            </div>

            {/* 6. GEO Optimization */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E6007A]/10 to-[#00C48C]/10 text-[#E6007A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-[#E6007A]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors">
                  GEO Optimization
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  AI visibility, entity authority, citation strategy.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: SEO STRATEGIES TAILORED TO YOUR INDUSTRY */}
      {/* ========================================================= */}
      <section className="py-14 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Industry-Specific SEO</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              SEO Strategies Tailored to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Your Industry
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Different industries have different search behaviors. We create custom search campaigns that align with your specific market dynamics.
            </p>
          </div>

          {/* 6 Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* 1. Real Estate */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-[#00AED6]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors">
                  Real Estate
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Local SEO + lead generation
                </p>
              </div>
            </div>

            {/* 2. E-commerce */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F5A623] transition-colors">
                  E-commerce
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Product & category rankings
                </p>
              </div>
            </div>

            {/* 3. Healthcare */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00C48C]/10 text-[#00C48C] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-6 h-6 text-[#00C48C]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00C48C] transition-colors">
                  Healthcare
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Trust-building search visibility
                </p>
              </div>
            </div>

            {/* 4. Education */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-[#E6007A]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors">
                  Education
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Student acquisition through organic search
                </p>
              </div>
            </div>

            {/* 5. B2B & Professional Services */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00AED6]/10 to-[#E6007A]/10 text-[#00AED6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-[#00AED6]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors">
                  B2B & Professional Services
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  High-intent lead generation
                </p>
              </div>
            </div>

            {/* 6. Local Businesses */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C48C]/10 to-[#F5A623]/10 text-[#00C48C] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Store className="w-6 h-6 text-[#00C48C]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00C48C] transition-colors">
                  Local Businesses
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Google Maps & neighborhood visibility
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: HOW DMDY BUILDS SUSTAINABLE RANKINGS */}
      {/* ========================================================= */}
      <section className="py-14 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

            {/* Left Column (7 cols): Section Header & 4 Process Steps */}
            <div className="lg:col-span-7">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
                <TrendingUp className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>Execution Blueprint</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                How DMDY Builds{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Sustainable Rankings
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6 max-w-xl">
                A battle-tested 4-stage process engineered for compound organic growth, algorithmic resilience, and long-term brand authority.
              </p>

              {/* 4 Process Steps - Clean Unboxed Flow */}
              <div className="space-y-3.5">

                {/* 01 Audit & Research */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    01
                  </div>
                  <div className="flex-1 pb-3 border-b border-slate-200/80">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#00AED6] transition-colors mb-0.5">
                      Audit & Research
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      Technical audit, competitors, keyword opportunities.
                    </p>
                  </div>
                </div>

                {/* 02 Strategy */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    02
                  </div>
                  <div className="flex-1 pb-3 border-b border-slate-200/80">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#F5A623] transition-colors mb-0.5">
                      Strategy
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      SEO roadmap + AEO + GEO planning.
                    </p>
                  </div>
                </div>

                {/* 03 Build */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    03
                  </div>
                  <div className="flex-1 pb-3 border-b border-slate-200/80">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#E6007A] transition-colors mb-0.5">
                      Build
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      Technical fixes, content, schema & optimization.
                    </p>
                  </div>
                </div>

                {/* 04 Grow */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#00C48C]/10 text-[#00C48C] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#00C48C] transition-colors mb-0.5">
                      Grow
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      Authority building, reporting & continuous improvement.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column (5 cols): 3D Visual Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">Compounding Organic Curve</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-bold text-xs">
                  AI
                </div>
                <span className="text-xs font-bold text-slate-800">Multi-Engine Search Ready</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src={seoProcessGrowthImg}
                  alt="How DMDY Builds Sustainable Rankings"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: CHOOSE YOUR BUSINESS GOAL */}
      {/* ========================================================= */}
      <section className="py-14 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

            {/* Left Column (5 cols): 3D Visual Showcase */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00AED6] animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">Precision Targeting</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-bold text-xs">
                  ROI
                </div>
                <span className="text-xs font-bold text-slate-800">Goal-Oriented Outcomes</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src={businessGoalsImg}
                  alt="Choose Your Business Goal"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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
                  Business Goal
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-7 max-w-xl">
                Every business has different priorities. Select what matters most right now to see the exact search architecture we deploy.
              </p>

              {/* Interactive Tabs Header */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-slate-100/90 rounded-2xl w-fit mb-6 border border-slate-200/70">
                {[
                  { id: 'traffic', label: 'More Traffic' },
                  { id: 'leads', label: 'More Leads' },
                  { id: 'ai', label: 'AI Visibility' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedGoal(tab.id)}
                    className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${selectedGoal === tab.id
                      ? 'bg-white text-slate-950 shadow-sm border border-slate-200/80 scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Strategy Card according to Selected Tab */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm transition-all duration-300 relative overflow-hidden">
                {selectedGoal === 'traffic' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center shrink-0">
                        <Search className="w-4.5 h-4.5 text-[#00AED6]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        Recommended SEO Focus
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pl-12">
                      Technical SEO, keyword clusters, pillar content, internal linking, Core Web Vitals.
                    </p>
                  </div>
                )}

                {selectedGoal === 'leads' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center shrink-0">
                        <Users className="w-4.5 h-4.5 text-[#E6007A]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        Recommended Lead Generation SEO
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pl-12">
                      Commercial landing pages, local SEO, conversion optimization, Google Business Profile, service pages.
                    </p>
                  </div>
                )}

                {selectedGoal === 'ai' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#00C48C]/10 text-[#00C48C] flex items-center justify-center shrink-0">
                        <Sparkles className="w-4.5 h-4.5 text-[#00C48C]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        Recommended AI Search Strategy
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pl-12">
                      AEO, GEO, schema markup, entity optimization, AI-citable content architecture.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (SEO + AEO + GEO) */}
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
                SEO &bull; AEO &bull; GEO
              </p>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
                Clear answers to common questions about next-generation search engines, AI citation discovery, and sustainable digital rankings.
              </p>

              {/* Direct Support Card (Desktop only) */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hidden lg:block">
                <div className="w-10 h-10 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-[#00AED6]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Have a specific question?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Our SEO & AI search engineers are available for custom audits and strategy sessions.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20have%20questions%20about%20SEO%20Services."
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

              {/* FAQ 1 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openFaq === 0
                ? 'bg-white border-[#00AED6]/50 shadow-sm'
                : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    What is SEO in 2026?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openFaq === 0 ? 'rotate-180 text-[#00AED6]' : 'text-slate-400'
                    }`} />
                </button>
                {openFaq === 0 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      SEO (Search Engine Optimization) in 2026 is the practice of improving your website's visibility across both traditional search engines and AI-powered search experiences. Modern SEO Services combine technical SEO, content optimization, user experience, structured data, and AI Search Optimization to help businesses rank on Google, appear in AI Overviews, and become discoverable through platforms like ChatGPT and Gemini.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2: Comparison Table */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openFaq === 1
                ? 'bg-white border-[#E6007A]/50 shadow-sm'
                : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    What is the difference between SEO, AEO and GEO?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openFaq === 1 ? 'rotate-180 text-[#E6007A]' : 'text-slate-400'
                    }`} />
                </button>
                {openFaq === 1 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3 mb-4">
                      They work together but serve different purposes:
                    </p>

                    {/* Styled Comparison Table */}
                    <div className="overflow-x-auto rounded-xl border border-slate-200/80 bg-slate-50/60 mb-4">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-slate-200/80 bg-slate-100/80 text-slate-700">
                            <th className="py-2.5 px-4 font-bold w-1/3">Strategy</th>
                            <th className="py-2.5 px-4 font-bold">Purpose</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/70 text-slate-600">
                          <tr>
                            <td className="py-3 px-4 font-bold text-slate-900">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#00AED6]/10 text-[#00AED6] border border-[#00AED6]/20 text-[11px] font-extrabold mr-2">
                                SEO
                              </span>
                            </td>
                            <td className="py-3 px-4 leading-relaxed">
                              Improves your Google rankings and organic search visibility.
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-bold text-slate-900">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#E6007A]/10 text-[#E6007A] border border-[#E6007A]/20 text-[11px] font-extrabold mr-2">
                                AEO
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium block sm:inline">Answer Engine Optimization</span>
                            </td>
                            <td className="py-3 px-4 leading-relaxed">
                              Structures content so AI assistants and search engines can provide your website as a direct answer.
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-bold text-slate-900">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#00C48C]/10 text-[#00C48C] border border-[#00C48C]/20 text-[11px] font-extrabold mr-2">
                                GEO
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium block sm:inline">Generative Engine Optimization</span>
                            </td>
                            <td className="py-3 px-4 leading-relaxed">
                              Builds your brand authority so generative AI platforms are more likely to reference and cite your business.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-50/50 via-pink-50/50 to-amber-50/50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800">
                      At DMDY, our SEO Agency combines all three into one integrated Search + Answer + Authority strategy.
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openFaq === 2
                ? 'bg-white border-[#00AED6]/50 shadow-sm'
                : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    Can ChatGPT recommend my business?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openFaq === 2 ? 'rotate-180 text-[#00AED6]' : 'text-slate-400'
                    }`} />
                </button>
                {openFaq === 2 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Yes—but not through paid placement. ChatGPT and other AI platforms are more likely to reference businesses that have strong website authority, well-structured content, clear business information, and consistent online credibility. This is where GEO (Generative Engine Optimization) and AEO become valuable additions to traditional SEO Services.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openFaq === 3
                ? 'bg-white border-[#F5A623]/50 shadow-sm'
                : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 3 ? -1 : 3)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    How long do SEO services take to show results?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openFaq === 3 ? 'rotate-180 text-[#F5A623]' : 'text-slate-400'
                    }`} />
                </button>
                {openFaq === 3 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      SEO is a long-term growth strategy. Most businesses begin seeing measurable improvements within 3–6 months, while competitive industries may take longer depending on competition, website health, content quality, and domain authority. A professional SEO Agency focuses on building sustainable organic growth rather than short-term ranking spikes.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openFaq === 4
                ? 'bg-white border-[#00C48C]/50 shadow-sm'
                : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 4 ? -1 : 4)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    Is Local SEO different from normal SEO?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openFaq === 4 ? 'rotate-180 text-[#00C48C]' : 'text-slate-400'
                    }`} />
                </button>
                {openFaq === 4 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Yes. Local SEO focuses on helping your business appear in location-based searches such as “digital marketing agency near me” or “SEO services in Delhi.” It includes Google Business Profile optimization, local citations, Maps visibility, location pages, and geo-targeted keyword strategies, while traditional SEO targets broader national or global search rankings.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openFaq === 5
                ? 'bg-white border-[#00AED6]/50 shadow-sm'
                : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 5 ? -1 : 5)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    Do I need AEO if I already rank on Google?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openFaq === 5 ? 'rotate-180 text-[#00AED6]' : 'text-slate-400'
                    }`} />
                </button>
                {openFaq === 5 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Yes. Ranking on Google is only one part of modern search visibility. As more users ask questions in ChatGPT, Gemini, Perplexity, and Google's AI Overviews, Answer Engine Optimization (AEO) helps your content become the answer—not just another search result. Combining SEO, AEO, and GEO gives your business stronger visibility across both search engines and AI-powered discovery.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: FINAL CTA - READY TO BECOME VISIBLE */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* SECTION 9: FINAL CTA - READY TO BECOME VISIBLE */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden p-6 sm:p-8 lg:p-9 text-left">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">

              {/* Left Column: Heading & Content */}
              <div className="max-w-2xl">

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-2.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                  <span>Next-Generation Digital Growth</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
                  Ready to Become Visible Across{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Google & AI Search?
                  </span>
                </h2>

                {/* Statements */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                  <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00AED6]"></span>
                    Not just rankings.
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E6007A]"></span>
                    Not just traffic.
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Build a digital presence that search engines and AI assistants trust.
                </p>

              </div>

              {/* Right Column: Compact Action Buttons */}
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => openModal('SEO')}
                  className="btn-primary"
                >
                  <span>Get My Free SEO Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20would%20like%20to%20discuss%20an%20SEO%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg className="w-4 h-4 text-[#00C48C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp DMDY</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SeoService;
