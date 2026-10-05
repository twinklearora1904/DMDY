import React, { useEffect, useState } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import SEO from '../../components/SEO';
import SITE_CONFIG from '../../config/siteConfig';
import {
  Sparkles,
  Palette,
  Video,
  Film,
  Play,
  Layers,
  Zap,
  Sliders,
  Maximize2,
  Volume2,
  Eye,
  Target,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Share2,
  Smartphone,
  Building2,
  ShoppingBag,
  Utensils,
  HeartPulse,
  Rocket,
  Briefcase,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import realEstateImg from '../../assets/social-media/industry-real-estate.webp';
import ecommerceImg from '../../assets/social-media/industry-ecommerce.webp';
import hospitalityImg from '../../assets/social-media/industry-hospitality.webp';
import healthcareImg from '../../assets/social-media/industry-healthcare.webp';
import startupsImg from '../../assets/social-media/industry-startups.webp';
import professionalServicesImg from '../../assets/social-media/industry-professional-services.webp';
import creativeGoalsImg from '../../assets/creative_goals.webp';

const GraphicDesignVideoService = () => {
  const { openModal } = useContactModal();
  const [activeTab, setActiveTab] = useState('graphics');
  const [selectedGoal, setSelectedGoal] = useState('social');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = 'Graphic Designing & Video Editing Services — DMDY';
    window.scrollTo(0, 0);
  }, []);

  const studioData = {
    graphics: {
      type: 'Brand Visuals & Creatives',
      title: 'Premium Brand Visuals & Social Media Creatives',
      tag: 'Vector & Raster • High Resolution',
      resolution: '4K • 300 DPI Export',
      aspectRatio: '1:1 & 4:5 Social Optimized',
      accentColor: '#E6007A',
      features: ['Social Media Creatives', 'Visual Brand Assets', 'Attention-Capturing Layouts']
    },
    video: {
      type: 'Video Editing Suite',
      title: 'Reels, Shorts & High-Engagement YouTube Edits',
      tag: 'Pacing & Hooks • Retention Optimized',
      resolution: '4K 60fps • Pro Export',
      aspectRatio: '9:16 Vertical & 16:9 Cinema',
      accentColor: '#00AED6',
      features: ['Reels & Short-Form Edits', 'YouTube Long-Form Edits', 'Audio Sweetening & SFX']
    },
    motion: {
      type: 'Motion Graphics Engine',
      title: 'Dynamic Motion Graphics & Kinetic Visuals',
      tag: 'Keyframe Easing • Kinetic Typography',
      resolution: 'Vector Scalable 60fps',
      aspectRatio: 'Multi-Format Render',
      accentColor: '#F5A623',
      features: ['Kinetic Typography', 'Logo Motion & Idents', 'Animated Visual Effects']
    }
  };

  const currentStudio = studioData[activeTab];

  return (
    <div className="bg-slate-50 font-sans min-h-screen">
      <SEO
        title="Graphic Design & Video Editing Services — High-Impact Creative Assets | DMDY"
        description="Stop the scroll with performance creative assets: conversion-focused ad creatives, branded social templates, product reels, 4K motion graphics, and corporate videos."
        url="https://dmdy.in/services/graphic-design-video-editing"
        type="service"
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient Brand Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_25%,#F5A623_50%,transparent_75%)] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (7 cols): User Hero Content */}
            <div className="lg:col-span-7">

              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-pink-50 text-pink-700 border border-pink-200/80 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6007A]" />
                  360° Creative Studio
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00AED6]"></span>
                  Graphics &bull; Video &bull; Motion
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                Graphic Designing &amp; Video Editing That Makes Your Brand{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Impossible to Ignore
                </span>
              </h1>

              {/* Subheading / Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                From premium brand visuals and social media creatives to Reels, YouTube edits, and motion graphics—DMDY creates content that captures attention and drives engagement.
              </p>

              {/* Stats & Trust Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 max-w-xl mb-8 pt-6 border-t border-slate-100">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">10+</span>
                    <span className="text-xs font-semibold text-slate-500">Years</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Creative Experience</div>
                </div>

                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                      15+
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Projects</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Across Industries</div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#F5A623]">
                      360°
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Creative</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Visual Content Solutions</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal('Graphic Designing & Video Editing')}
                  className="w-full sm:w-auto btn-primary"
                >
                  <Sparkles className="w-4 h-4 text-[#F5A623] group-hover:rotate-12 transition-transform" />
                  Get Free Creative Consultation
                </button>
                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY, I would like to discuss Graphic Designing & Video Editing Services.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-whatsapp"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  WhatsApp Designer
                </a>
              </div>

            </div>

            {/* Right Column (5 cols): Compact 360° Creative Studio Visual */}
            <div className="lg:col-span-5 w-full relative mt-6 lg:mt-0 max-w-[460px] mx-auto lg:ml-auto">

              {/* Floating Badge 1: 360° Creative Studio */}
              <div className="absolute -top-6 -right-2 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <Zap className="w-3.5 h-3.5 text-[#E6007A] fill-[#E6007A]" />
                <span className="text-[11px] font-bold text-slate-800">360° Creative Suite</span>
              </div>

              {/* Floating Badge 2: High Resolution */}
              <div className="absolute -bottom-6 -left-2 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] font-bold text-slate-800">4K • 60fps • Vector Master</span>
              </div>

              {/* Main Creative Studio Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 flex flex-col text-left">

                {/* Header Window Bar */}
                <div className="bg-slate-50 px-3.5 py-2.5 flex items-center justify-between border-b border-slate-200/80">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-600 font-bold px-2 py-0.5 bg-white border border-slate-200 rounded-md shadow-xs flex items-center gap-1">
                    <Palette className="w-2.5 h-2.5 text-[#E6007A]" />
                    dmdy.creative/studio
                  </div>
                </div>

                {/* Studio Body */}
                <div className="p-4 sm:p-5 bg-white flex flex-col space-y-3.5">

                  {/* Creative Disciplines Tabs */}
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100 overflow-x-auto text-[11px]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('graphics')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 flex items-center gap-1.5 ${activeTab === 'graphics'
                        ? 'bg-pink-50 text-[#E6007A] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                      <Palette className="w-3 h-3" />
                      Graphics
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('video')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 flex items-center gap-1.5 ${activeTab === 'video'
                        ? 'bg-cyan-50 text-[#00AED6] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                      <Video className="w-3 h-3" />
                      Video
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('motion')}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 flex items-center gap-1.5 ${activeTab === 'motion'
                        ? 'bg-amber-50 text-[#F5A623] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                      <Film className="w-3 h-3" />
                      Motion
                    </button>
                  </div>

                  {/* Active Discipline Preview Canvas */}
                  <div className="rounded-xl bg-slate-950 p-4 text-white relative overflow-hidden border border-slate-800">
                    <div className="flex items-center justify-between mb-3 text-[10px] text-slate-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentStudio.accentColor }}></span>
                        <span className="font-semibold text-slate-200">{currentStudio.type}</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                        {currentStudio.resolution}
                      </span>
                    </div>

                    {/* Visual Artboard / Viewport Mockup */}
                    <div className="relative rounded-lg bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900 border border-slate-700/60 p-4 mb-3.5 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 via-cyan-500/10 to-transparent pointer-events-none"></div>

                      <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        {currentStudio.tag}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug mb-2">
                        {currentStudio.title}
                      </h4>
                      <p className="text-[10px] text-slate-300 font-medium">
                        {currentStudio.aspectRatio}
                      </p>

                      {/* Studio Action Tools Bar */}
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-700/60 text-[10px] text-slate-400">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-slate-300">
                            <Layers className="w-3 h-3 text-[#00AED6]" /> Multi-Layer
                          </span>
                          <span className="flex items-center gap-1 text-slate-300">
                            <Sliders className="w-3 h-3 text-[#E6007A]" /> Color Graded
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Volume2 className="w-3 h-3" />
                          <Maximize2 className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    {/* Multi-Track Timeline Simulation */}
                    <div className="space-y-1.5 font-mono text-[9px]">
                      <div className="flex items-center gap-2">
                        <span className="w-8 text-slate-500 shrink-0">V1</span>
                        <div className="h-3.5 flex-1 rounded bg-pink-500/20 border border-pink-500/30 flex items-center px-1.5 text-pink-300">
                          Video &bull; 4K Master Track
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-8 text-slate-500 shrink-0">GFX</span>
                        <div className="h-3.5 flex-1 rounded bg-cyan-500/20 border border-cyan-500/30 flex items-center px-1.5 text-cyan-300">
                          Graphics &bull; Kinetic Typography
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-8 text-slate-500 shrink-0">A1</span>
                        <div className="h-3.5 flex-1 rounded bg-amber-500/20 border border-amber-500/30 flex items-center px-1.5 text-amber-300">
                          Audio &bull; Spatial SFX &bull; Score
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-slate-700 text-[11px] font-semibold">
                    {currentStudio.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00AED6] shrink-0"></span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer Status Bar */}
                <div className="bg-slate-50 px-3.5 py-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="font-semibold text-slate-700">DMDY 360° Creative Pipeline</span>
                  <span className="text-[#00AED6] font-bold">100% Brand Tailored</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: THE NEW ERA OF VISUAL CONTENT                  */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Top 2-Column Row: Left Graphic + Right Narrative Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column (5 cols): Visual Attention & Perception Engine Graphic */}
            <div className="lg:col-span-5 w-full relative order-2 lg:order-1">

              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00AED6]/25 via-[#E6007A]/20 to-[#F5A623]/25 rounded-3xl blur-lg opacity-70 -z-10"></div>

              {/* Floating Badge: Attention Window */}
              <div className="absolute -top-4 -right-2 z-20 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-[#E6007A] animate-ping"></span>
                <span className="text-[11px] font-bold text-slate-800">Visual Perception Within Seconds</span>
              </div>

              {/* Main Simulated Attention Engine Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xl relative overflow-hidden">

                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00AED6] animate-pulse"></div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                      Visual Attention Engine
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-bold text-[#E6007A]">
                    <Sparkles className="w-3 h-3 text-[#E6007A]" />
                    <span>Stop The Scroll</span>
                  </div>
                </div>

                {/* Simulated Competition for Attention Query Box */}
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 mb-4 text-left">
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center justify-between">
                    <span>The Attention Economy</span>
                    <span className="text-[#00AED6] font-semibold text-[10px]">Instant Impact</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                    <span>"Every scroll is a competition for attention."</span>
                  </div>
                </div>

                {/* 4 Creative Pillars Mini Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {/* Attention */}
                  <div className="p-2 rounded-xl bg-pink-50/60 border border-pink-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Attention</div>
                    <div className="text-[9px] font-bold text-[#E6007A] flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Stop Scroll
                    </div>
                  </div>

                  {/* Identity */}
                  <div className="p-2 rounded-xl bg-cyan-50/60 border border-cyan-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Identity</div>
                    <div className="text-[9px] font-bold text-[#00AED6] flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Consistent
                    </div>
                  </div>

                  {/* Engagement */}
                  <div className="p-2 rounded-xl bg-amber-50/60 border border-amber-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Engagement</div>
                    <div className="text-[9px] font-bold text-[#F5A623] flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Dynamic
                    </div>
                  </div>

                  {/* Conversion */}
                  <div className="p-2 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Conversion</div>
                    <div className="text-[9px] font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Sales Focus
                    </div>
                  </div>
                </div>

                {/* Visual Content Strategy Teardown */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white relative shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00AED6]" />
                      <span>Beyond Just Aesthetics</span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                      High Impact
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Modern visual content isn't just decoration—it is engineered to{' '}
                    <strong className="text-[#00AED6]">communicate</strong>,{' '}
                    <strong className="text-[#E6007A]">influence</strong>, and{' '}
                    <strong className="text-[#F5A623]">convert</strong>.
                  </p>

                  {/* Platforms Row */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-slate-800">
                    <span className="text-[10px] font-semibold text-slate-400">Omnichannel:</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-pink-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E6007A]"></span>
                      Instagram
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-cyan-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AED6]"></span>
                      LinkedIn
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-rose-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      YouTube
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-indigo-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                      Facebook
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-amber-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
                      Website
                    </span>
                  </div>
                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Visual Content Impact</span>
                  </div>
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Stop For Visuals &bull; Stay For Stories
                  </span>
                </div>

              </div>

            </div>

            {/* Right Column (7 cols): User Narrative Content */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2">

              {/* Category Pill with Brand Colors */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-pink-50 via-amber-50 to-cyan-50 text-slate-800 border border-[#E6007A]/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00AED6] to-[#E6007A] animate-pulse"></span>
                  The New Era of Visual Content
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
                  Communicate &bull; Influence &bull; Convert
                </span>
              </div>

              {/* Title with Sparkles Icon & Brand Gradient */}
              <div className="flex items-start sm:items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00AED6]/15 via-[#E6007A]/10 to-[#F5A623]/10 border border-[#00AED6]/30 flex items-center justify-center text-[#00AED6] shrink-0 shadow-sm">
                  <Sparkles className="w-6 h-6 text-[#00AED6]" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  People Stop for Visuals.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    They Stay for Stories.
                  </span>
                </h2>
              </div>

              {/* Sub-headline / Narrative */}
              <p className="text-base sm:text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Every scroll is a competition for attention.
              </p>

              {/* Narrative Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Whether it's{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-pink-50 text-[#E6007A] font-bold border border-pink-200/80 text-xs sm:text-sm">
                  Instagram
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-blue-50 text-[#00AED6] font-bold border border-blue-200/80 text-xs sm:text-sm">
                  LinkedIn
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-rose-50 text-rose-600 font-bold border border-rose-200/80 text-xs sm:text-sm">
                  YouTube
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-600 font-bold border border-indigo-200/80 text-xs sm:text-sm">
                  Facebook
                </span>
                , or your{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-amber-50 text-[#F5A623] font-bold border border-amber-200/80 text-xs sm:text-sm">
                  website
                </span>
                , your visual identity determines how people perceive your brand within seconds.
              </p>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50/70 via-cyan-50/50 to-amber-50/50 border border-pink-100 mb-6">
                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                  Modern Graphic Designing &amp; Video Editing isn't just about aesthetics—it's about creating visuals that <strong className="text-[#00AED6]">communicate</strong>, <strong className="text-[#E6007A]">influence</strong>, and <strong className="text-[#F5A623]">convert</strong>.
                </p>
              </div>

              {/* Transition Heading */}
              <div className="pt-4 border-t border-slate-200/80 mb-5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Every successful creative should:
                </h3>
              </div>

              {/* Four Core Cards 2-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">

                {/* 1. Capture Attention */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-pink-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] group-hover:scale-105 transition-transform">
                      <Eye className="w-4 h-4 text-[#E6007A]" />
                    </div>
                    <span className="text-[10px] font-semibold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                      Stop The Scroll
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Capture Attention
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Stop the scroll with premium visual storytelling.
                  </p>
                </div>

                {/* 2. Build Identity */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-cyan-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#00AED6]/10 flex items-center justify-center text-[#00AED6] group-hover:scale-105 transition-transform">
                      <Palette className="w-4 h-4 text-[#00AED6]" />
                    </div>
                    <span className="text-[10px] font-semibold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-100">
                      Brand Language
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Build Identity
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Create a recognizable and consistent brand language.
                  </p>
                </div>

                {/* 3. Increase Engagement */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] group-hover:scale-105 transition-transform">
                      <Film className="w-4 h-4 text-[#F5A623]" />
                    </div>
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                      Dynamic Content
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Increase Engagement
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Reels, motion graphics &amp; dynamic video content.
                  </p>
                </div>

                {/* 4. Support Conversions */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      Sales-Focused
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Support Conversions
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Ad creatives, thumbnails &amp; sales-focused visuals.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE DMDY CREATIVE IMPACT FRAMEWORK™            */}
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
                Creative Impact Framework™
              </span>
            </h2>

            {/* Imagine → Design → Motion → Influence Pipeline */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-50 text-[#00AED6] font-bold text-xs sm:text-sm border border-cyan-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00AED6]"></span>
                Imagine
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-pink-50 text-[#E6007A] font-bold text-xs sm:text-sm border border-pink-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#E6007A]"></span>
                Design
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 text-[#F5A623] font-bold text-xs sm:text-sm border border-amber-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]"></span>
                Motion
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs sm:text-sm border border-emerald-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Influence
              </span>
            </div>
          </div>

          {/* 4 Framework Layer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            {/* Layer 1 — Imagine */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Compass className="w-6 h-6 text-[#00AED6]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Layer 1
                  </span>
                </div>

                <div className="text-xs font-bold text-[#00AED6] uppercase tracking-wider mb-1">
                  Creative Direction
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Imagine
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We understand your brand, audience, campaign objective, and creative direction.
                </p>
              </div>
            </div>

            {/* Layer 2 — Design */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Palette className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Layer 2
                  </span>
                </div>

                <div className="text-xs font-bold text-[#E6007A] uppercase tracking-wider mb-1">
                  Brand Visuals
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Design
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Premium graphics, brand visuals, social creatives, banners, and marketing assets.
                </p>
              </div>
            </div>

            {/* Layer 3 — Motion */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Film className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F5A623] border border-amber-200/80">
                    Layer 3
                  </span>
                </div>

                <div className="text-xs font-bold text-[#F5A623] uppercase tracking-wider mb-1">
                  Video &amp; Motion
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#F5A623] transition-colors tracking-tight">
                  Motion
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Reels, YouTube editing, motion graphics, transitions, subtitles, and cinematic storytelling.
                </p>
              </div>
            </div>

            {/* Layer 4 — Influence */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    Layer 4
                  </span>
                </div>

                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  Marketing Performance
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors tracking-tight">
                  Influence
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Every creative is optimized to increase engagement, strengthen brand identity, and support marketing performance.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHAT'S INCLUDED IN OUR CREATIVE SERVICES       */}
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
                Creative Services
              </span>
            </h2>
          </div>

          {/* 3-Column Clean, Compact & Centered Layout (6 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10 w-full">

            {/* 1. Social Media Graphics */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100/80 flex items-center justify-center shadow-xs">
                  <Share2 className="w-5 h-5 text-[#00AED6]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#00AED6] transition-colors">
                Social Media Graphics
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Instagram posts, carousel designs, stories &amp; ad creatives.
              </p>
            </div>

            {/* 2. Reels & Short Videos */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#E6007A] border border-pink-100/80 flex items-center justify-center shadow-xs">
                  <Video className="w-5 h-5 text-[#E6007A]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#E6007A] transition-colors">
                Reels &amp; Short Videos
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Vertical editing, captions, transitions &amp; hooks.
              </p>
            </div>

            {/* 3. Brand Design */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#F5A623] border border-amber-100/80 flex items-center justify-center shadow-xs">
                  <Palette className="w-5 h-5 text-[#F5A623]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#F5A623] transition-colors">
                Brand Design
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Visual identity, marketing materials &amp; campaign creatives.
              </p>
            </div>

            {/* 4. YouTube Video Editing */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-rose-600 border border-rose-100/80 flex items-center justify-center shadow-xs">
                  <Film className="w-5 h-5 text-rose-600" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-rose-600 transition-colors">
                YouTube Video Editing
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Long-form edits, intros, outros &amp; thumbnails.
              </p>
            </div>

            {/* 5. Motion Graphics */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#E6007A] border border-pink-100/80 flex items-center justify-center shadow-xs">
                  <Zap className="w-5 h-5 text-[#E6007A]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#E6007A] transition-colors">
                Motion Graphics
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Animated titles, logo reveals &amp; promotional videos.
              </p>
            </div>

            {/* 6. Ad Creative Design */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100/80 flex items-center justify-center shadow-xs">
                  <Target className="w-5 h-5 text-[#00AED6]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#00AED6] transition-colors">
                Ad Creative Design
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Google Display, Meta Ads &amp; high-converting visual campaigns.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: CREATIVE SOLUTIONS FOR EVERY INDUSTRY          */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Tailored Creative Solutions</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Creative Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Every Industry
              </span>
            </h2>
          </div>

          {/* 6 Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* 1. Real Estate */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={realEstateImg}
                    alt="Real Estate"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#00AED6]">
                    <Building2 className="w-4 h-4 text-[#00AED6]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors">
                  Real Estate
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Property creatives, brochure designs &amp; cinematic walkthrough edits.
                </p>
              </div>
            </div>

            {/* 2. E-commerce */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={ecommerceImg}
                    alt="E-commerce"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#F5A623]">
                    <ShoppingBag className="w-4 h-4 text-[#F5A623]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F5A623] transition-colors">
                  E-commerce
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Product creatives, promotional videos &amp; conversion-focused ads.
                </p>
              </div>
            </div>

            {/* 3. Hospitality */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={hospitalityImg}
                    alt="Hospitality"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#E6007A]">
                    <Utensils className="w-4 h-4 text-[#E6007A]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors">
                  Hospitality
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Food reels, menu promotions &amp; brand storytelling.
                </p>
              </div>
            </div>

            {/* 4. Healthcare */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={healthcareImg}
                    alt="Healthcare"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#00C48C]">
                    <HeartPulse className="w-4 h-4 text-[#00C48C]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00C48C] transition-colors">
                  Healthcare
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Educational graphics &amp; trust-building visual communication.
                </p>
              </div>
            </div>

            {/* 5. Startups */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={startupsImg}
                    alt="Startups"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#00AED6]">
                    <Rocket className="w-4 h-4 text-[#00AED6]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors">
                  Startups
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Brand launch kits, investor presentations &amp; digital identity.
                </p>
              </div>
            </div>

            {/* 6. Professional Services */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={professionalServicesImg}
                    alt="Professional Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#E6007A]">
                    <Briefcase className="w-4 h-4 text-[#E6007A]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors">
                  Professional Services
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  LinkedIn creatives, thought leadership &amp; premium business visuals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: HOW DMDY CREATES HIGH-IMPACT VISUAL CONTENT    */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
                How DMDY Creates{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  High-Impact Visual Content
                </span>
              </h2>

              {/* 4 Process Steps */}
              <div className="space-y-4">

                {/* 01 Creative Brief */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    01
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#00AED6] transition-colors mb-0.5">
                      Creative Brief
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      Understand your brand, campaign objective, audience &amp; visual direction.
                    </p>
                  </div>
                </div>

                {/* 02 Concept Development */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    02
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#E6007A] transition-colors mb-0.5">
                      Concept Development
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      Moodboards, layouts, storyboards &amp; creative planning.
                    </p>
                  </div>
                </div>

                {/* 03 Design & Editing */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    03
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#F5A623] transition-colors mb-0.5">
                      Design &amp; Editing
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      Graphics, motion, color grading, typography &amp; premium visual execution.
                    </p>
                  </div>
                </div>

                {/* 04 Optimize & Deliver */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors mb-0.5">
                      Optimize &amp; Deliver
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      Platform-ready exports for Instagram, YouTube, LinkedIn, Facebook &amp; websites.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column (5 cols): Production Pipeline Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 max-w-[440px] mx-auto lg:mx-0 w-full">

              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00AED6]/20 via-[#E6007A]/15 to-[#F5A623]/20 rounded-2xl blur-md opacity-60 -z-10"></div>

              {/* Floating Top Badge */}
              <div className="absolute -top-3 -right-2 z-20 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5 hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-800">4-Stage Production Flow</span>
              </div>

              {/* Main Card */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xl relative overflow-hidden text-left">

                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 px-2 py-0.5 bg-slate-50 border border-slate-200 rounded-md">
                    dmdy.creative/pipeline
                  </span>
                </div>

                {/* Visual Steps Summary */}
                <div className="space-y-2.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-50/70 border border-cyan-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#00AED6] text-white flex items-center justify-center font-bold text-[10px]">1</span>
                      <span className="text-xs font-bold text-slate-900">Creative Brief</span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#00AED6]">Visual Direction</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-pink-50/70 border border-pink-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#E6007A] text-white flex items-center justify-center font-bold text-[10px]">2</span>
                      <span className="text-xs font-bold text-slate-900">Concept Development</span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#E6007A]">Moodboards &amp; Layouts</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#F5A623] text-white flex items-center justify-center font-bold text-[10px]">3</span>
                      <span className="text-xs font-bold text-slate-900">Design &amp; Editing</span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#F5A623]">Graphics &amp; Motion</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">4</span>
                      <span className="text-xs font-bold text-slate-900">Optimize &amp; Deliver</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700">Platform-Ready</span>
                  </div>
                </div>

                {/* Multi-Platform Export Badges */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Multi-Platform Exports
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Instagram', 'YouTube', 'LinkedIn', 'Facebook', 'Websites'].map((plat, idx) => (
                      <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700">
                        {plat}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: CHOOSE YOUR CREATIVE GOAL                      */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

            {/* Left Column (5 cols): 3D Visual Showcase */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E6007A] animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">Targeted Creative Strategy</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-8 -right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-bold text-xs">
                  <Target className="w-3.5 h-3.5 text-[#00AED6]" />
                </div>
                <span className="text-xs font-bold text-slate-800">Goal-Oriented Outcomes</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src={creativeGoalsImg}
                  alt="Choose Your Creative Goal"
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Choose Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Creative Goal
                </span>
              </h2>

              {/* Interactive Tabs Header */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-slate-100/90 rounded-2xl w-fit mb-6 border border-slate-200/70">
                {[
                  { id: 'social', label: 'Grow on Social Media' },
                  { id: 'ads', label: 'Run Better Ad Campaigns' },
                  { id: 'brand', label: 'Build a Premium Brand Identity' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
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
                {selectedGoal === 'social' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center shrink-0">
                        <Smartphone className="w-5 h-5 text-[#E6007A]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        Grow on Social Media
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      Reels editing, carousel design, stories &amp; engagement-focused creatives.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => openModal('Graphic Designing & Video Editing - Grow on Social Media')}
                        className="btn-primary text-xs sm:text-sm"
                      >
                        <Sparkles className="w-4 h-4 text-[#F5A623]" />
                        Get Free Creative Consultation
                      </button>
                    </div>
                  </div>
                )}

                {selectedGoal === 'ads' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center shrink-0">
                        <TrendingUp className="w-5 h-5 text-[#00AED6]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        Run Better Ad Campaigns
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      High-converting Meta, Google Display &amp; YouTube ad creatives.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => openModal('Graphic Designing & Video Editing - Run Better Ad Campaigns')}
                        className="btn-primary text-xs sm:text-sm"
                      >
                        <Sparkles className="w-4 h-4 text-[#F5A623]" />
                        Get Free Creative Consultation
                      </button>
                    </div>
                  </div>
                )}

                {selectedGoal === 'brand' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center shrink-0">
                        <Palette className="w-5 h-5 text-[#F5A623]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        Build a Premium Brand Identity
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      Consistent visual language, branding assets &amp; professional creative systems.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => openModal('Graphic Designing & Video Editing - Build a Premium Brand Identity')}
                        className="btn-primary text-xs sm:text-sm"
                      >
                        <Sparkles className="w-4 h-4 text-[#F5A623]" />
                        Get Free Creative Consultation
                      </button>
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
                Graphics &bull; Video &bull; Motion
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
                  Our creative directors and designers are available for custom project consultations and creative planning.
                </p>
                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY, I have questions about Graphic Designing & Video Editing Services.')}
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
                  q: "What is included in DMDY's Graphic Design Services?",
                  a: "Our Graphic Design Services include social media creatives, carousel posts, brand graphics, ad creatives, banners, brochures, presentations, thumbnails, marketing materials, and custom visual branding."
                },
                {
                  q: "Do you create Instagram Reels and short-form videos?",
                  a: "Yes. Our Video Editing Services include Instagram Reels, Facebook videos, YouTube Shorts, promotional edits, subtitles, motion graphics, transitions, and platform-optimized vertical video content."
                },
                {
                  q: "Can you design creatives for Google Ads and Meta Ads?",
                  a: "Absolutely. We create high-converting ad creatives specifically designed for Google Display Ads, Facebook Ads, Instagram Ads, and YouTube campaigns to improve engagement and campaign performance."
                },
                {
                  q: "What's the difference between Graphic Designing and Video Editing?",
                  a: "Graphic Designing focuses on static visual communication such as social posts, branding, and marketing materials, while Video Editing creates dynamic visual storytelling through Reels, promotional videos, YouTube content, and motion graphics."
                },
                {
                  q: "Do I need both graphic design and video content?",
                  a: "Yes. Modern digital marketing performs best when brands combine strong static visuals with engaging video content. Together they create a consistent and memorable brand experience across every platform."
                },
                {
                  q: "Which industries do you create creative content for?",
                  a: "DMDY creates graphic design and video content for real estate, healthcare, hospitality, e-commerce, startups, education, professional services, and local businesses, with visuals tailored to each industry's audience and goals."
                }
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                      ? 'bg-white border-[#00AED6]/50 shadow-sm'
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00AED6]' : 'text-slate-400'
                          }`}
                      />
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
      {/* SECTION 9: FINAL CTA - GREAT DESIGN GETS NOTICED          */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden p-6 sm:p-8 lg:p-9 text-left">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">

              {/* Left Column: Heading & Content */}
              <div className="max-w-2xl">

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-2.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6007A]" />
                  <span>360° Creative Studio</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
                  Great Design Gets Noticed.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Great Creativity Gets Remembered.
                  </span>
                </h2>

                {/* Subtitle (Exact User Copy) */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Whether you need premium graphics, cinematic Reels, ad creatives, or complete visual branding, DMDY creates content designed to elevate your brand and grow your business.
                </p>

              </div>

              {/* Right Column: Action Buttons */}
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => openModal('Graphic Designing & Video Editing')}
                  className="btn-primary"
                >
                  <span>Get Your Free Creative Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY, I would like to discuss Graphic Designing & Video Editing Services.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
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

export default GraphicDesignVideoService;
