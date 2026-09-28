import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Target, Zap, ArrowRight, CheckCircle2, ShieldCheck, Award, Sparkles, Layers, Eye, Compass, Building2, HeartPulse, ShoppingCart, GraduationCap, Store, UtensilsCrossed, Briefcase, Building, Globe, Quote } from 'lucide-react';
import aboutHeroGrowthImg from '../assets/about_hero_growth.jpg';

const About = () => {
  useEffect(() => {
    document.title = 'About DMDY — Digital Growth Architects & Performance Specialists';
  }, []);

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Clean Corporate Hero Section */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_30%,transparent_70%)] opacity-5 pointer-events-none"></div>
        
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column (7 cols): Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00AED6] animate-pulse"></span>
                About DMDY — Digi Me Digi You
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.14]">
                We Don't Just Market Brands.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  We Build Digital Growth.
                </span>
              </h1>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-2xl">
                <p>
                  DMDY (Digi Me Digi You) is a 360° digital marketing agency created with one belief: every business deserves powerful marketing that is strategic, affordable, and results-driven.
                </p>
                <p>
                  With over 10 years of industry experience, we help startups, local businesses, established brands, and growing enterprises create a strong digital presence through customized marketing solutions. Rather than offering one-size-fits-all packages, we design strategies that match each client's industry, audience, and business goals.
                </p>
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/70 via-pink-50/40 to-amber-50/50 border border-slate-200/80">
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">
                    Our mission is simple—to turn your digital presence into measurable business growth.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-500/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 flex items-center justify-center gap-2"
                >
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/services" 
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 font-bold text-sm sm:text-base transition-all text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Column (5 cols): 3D Visual & Growth Ecosystem Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              
              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C48C] animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">10+ Years Experience</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-bold text-xs">
                  360°
                </div>
                <span className="text-xs font-bold text-slate-800">Customized Solutions</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img 
                  src={aboutHeroGrowthImg} 
                  alt="DMDY 360° Digital Growth Ecosystem" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Micro Pillar Badges Underneath Image */}
              <div className="grid grid-cols-3 gap-2.5 mt-4">
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#00AED6]">Strategic</div>
                  <div className="text-xs text-slate-500 font-medium">Bespoke Plans</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#E6007A]">Affordable</div>
                  <div className="text-xs text-slate-500 font-medium">High Efficiency</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#F5A623]">Results-Driven</div>
                  <div className="text-xs text-slate-500 font-medium">Measurable ROI</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: OUR STORY                                      */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Elements */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column (5 cols): "Under One Roof" Capabilities Visual Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              
              <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl p-6 sm:p-8 overflow-hidden group">

                <div className="mb-6">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#00AED6] mb-1.5">
                    Creativity Meets Performance
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    All Under One Roof
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 font-normal">
                    Combining every growth discipline under one unified team.
                  </p>
                </div>

                {/* 7 Disciplines Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {[
                    { name: 'Branding', color: 'text-[#E6007A] bg-pink-50 border-pink-100' },
                    { name: 'Content', color: 'text-[#F5A623] bg-amber-50 border-amber-100' },
                    { name: 'Advertising', color: 'text-[#4285F4] bg-blue-50 border-blue-100' },
                    { name: 'SEO', color: 'text-[#00AED6] bg-cyan-50 border-cyan-100' },
                    { name: 'Social Media', color: 'text-[#7C3AED] bg-purple-50 border-purple-100' },
                    { name: 'Web Development', color: 'text-emerald-700 bg-emerald-50 border-emerald-100' },
                    { name: 'Lead Generation', color: 'text-slate-900 bg-slate-100 border-slate-200' }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className={`p-2.5 rounded-xl border flex items-center gap-2 font-bold text-xs sm:text-sm ${item.color} ${idx === 6 ? 'col-span-2 justify-center' : ''}`}
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Highlight Tag */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white text-center">
                  <div className="text-sm font-bold text-white flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C48C] animate-pulse"></span>
                    An Extension of Your Business
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Not just another marketing vendor
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column (7 cols): Narrative Content */}
            <div className="lg:col-span-7">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-4 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>Our Story</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Story
                </span>
              </h2>

              {/* Story Narrative Paragraphs */}
              <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Digital marketing has evolved rapidly, but many businesses still struggle with overpriced services, generic strategies, and agencies that don't understand their industry.
                </p>

                {/* Pivot Callout Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border-l-4 border-l-[#00AED6] border border-slate-200/80 shadow-xs">
                  <p className="text-base sm:text-lg font-bold text-slate-900">
                    DMDY was founded to change that.
                  </p>
                </div>

                <p>
                  We built an agency where creativity meets performance, combining branding, content, advertising, SEO, social media, website development, and lead generation under one roof. Our goal is to become an extension of your business—not just another marketing vendor.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: WHAT MAKES DMDY DIFFERENT?                     */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Target className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>The DMDY Advantage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What Makes DMDY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Different?
              </span>
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* 1. Customized Strategy */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Target className="w-6 h-6 text-[#00AED6]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    01
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Customized Strategy
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Every campaign is built around your business, niche, and objectives.
                </p>
              </div>
            </div>

            {/* 2. 360° Digital Expertise */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Layers className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    02
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  360° Digital Expertise
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  From brand identity to paid advertising, we handle complete digital growth.
                </p>
              </div>
            </div>

            {/* 3. Pocket-Friendly Solutions */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Zap className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F5A623] border border-amber-200/80">
                    03
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F5A623] transition-colors tracking-tight">
                  Pocket-Friendly Solutions
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Premium-quality marketing without unnecessary costs or inflated retainers.
                </p>
              </div>
            </div>

            {/* 4. Performance-Focused Execution */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00C48C]/10 text-[#00C48C] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <TrendingUp className="w-6 h-6 text-[#00C48C]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#00C48C] border border-emerald-200/80">
                    04
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00C48C] transition-colors tracking-tight">
                  Performance-Focused Execution
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  We measure success through leads, visibility, engagement, and business results.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Our Vision & Mission */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Vision &amp; Mission
              </span>
            </h2>
          </div>

          {/* Cards Grid: Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
            
            {/* Our Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-[#00AED6]/40 shadow-xs hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#00AED6]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00AED6]/10 transition-colors"></div>
              <Eye className="absolute -bottom-6 -right-6 w-32 h-32 text-slate-100/70 pointer-events-none group-hover:text-cyan-50/80 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <Eye className="w-7 h-7 text-[#00AED6]" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Vision
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Our Vision
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  To become one of India's most trusted digital growth partners by delivering innovative, transparent, and result-oriented marketing solutions for businesses of every size.
                </p>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-[#E6007A]/40 shadow-xs hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#E6007A]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E6007A]/10 transition-colors"></div>
              <Target className="absolute -bottom-6 -right-6 w-32 h-32 text-slate-100/70 pointer-events-none group-hover:text-pink-50/80 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-100 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <Target className="w-7 h-7 text-[#E6007A]" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Mission
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Our Mission
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  To provide affordable, customized, and high-impact digital marketing strategies that help brands attract customers, increase revenue, and build lasting online authority.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 5: The Numbers Behind Our Work */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Numbers Behind{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Our Work
              </span>
            </h2>
          </div>

          {/* 3 Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
            
            {/* Stat 1: 10+ Years of Experience */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-[#00AED6]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 text-[#00AED6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xs">
                <Award className="w-7 h-7 text-[#00AED6]" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-[#00AED6] transition-colors">
                10+
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-700">
                Years of Experience
              </p>
            </div>

            {/* Stat 2: 15+ Projects Delivered */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-[#E6007A]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-100 text-[#E6007A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xs">
                <TrendingUp className="w-7 h-7 text-[#E6007A]" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-[#E6007A] transition-colors">
                15+
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-700">
                Projects Delivered
              </p>
            </div>

            {/* Stat 3: 10+ Expert Freelance Team */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-[#F5A623]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 text-[#F5A623] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xs">
                <Users className="w-7 h-7 text-[#F5A623]" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-[#F5A623] transition-colors">
                10+
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-700">
                Expert Freelance Team
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Section 6: Industries We Empower */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Industry Reach</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Industries We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Empower
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-3xl">
              We create tailored digital strategies for businesses across multiple sectors:
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            
            {/* 1. Real Estate */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#00AED6]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#00AED6] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00AED6] transition-colors">
                Real Estate
              </h3>
            </div>

            {/* 2. Healthcare */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#E6007A]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 text-[#E6007A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#E6007A] transition-colors">
                Healthcare
              </h3>
            </div>

            {/* 3. E-commerce */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#F5A623]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-[#F5A623] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#F5A623] transition-colors">
                E-commerce
              </h3>
            </div>

            {/* 4. Education */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#00C48C]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-[#00C48C] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00C48C] transition-colors">
                Education
              </h3>
            </div>

            {/* 5. Retail */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#00AED6]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-[#00AED6] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00AED6] transition-colors">
                Retail
              </h3>
            </div>

            {/* 6. Hospitality */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#E6007A]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 text-[#E6007A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#E6007A] transition-colors">
                Hospitality
              </h3>
            </div>

            {/* 7. Professional Services */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#F5A623]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-[#F5A623] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#F5A623] transition-colors">
                Professional Services
              </h3>
            </div>

            {/* 8. Corporate Brands */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#6366F1]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-[#6366F1] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#6366F1] transition-colors">
                Corporate Brands
              </h3>
            </div>

            {/* 9. And many more */}
            <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-5 sm:p-6 border border-slate-300 hover:border-slate-400 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00AED6]/10 via-[#E6007A]/10 to-[#F5A623]/10 border border-slate-200 text-[#E6007A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-[#E6007A]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-[#00AED6] transition-colors">
                And many more
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Section 7: The Vision Behind DMDY & The People Behind the Vision */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Main Section Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Founders &amp; Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              The Vision Behind{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                DMDY
              </span>
            </h2>
            <p className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">
              Three founders. One vision. Infinite possibilities for brands.
            </p>
          </div>

          {/* Narrative Card */}
          <div className="w-full mb-12 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-xs space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left">
            <p>
              DMDY — Digi Me Digi You was built on a simple idea: digital marketing should be strategic, transparent, and accessible to every business. What began as a shared vision between three professionals has grown into a 360° digital marketing agency that helps brands build authority, generate leads, and scale with confidence.
            </p>
            <p className="font-semibold text-slate-800">
              We don't believe in selling services—we believe in building long-term growth partnerships. Every strategy we create is tailored to the client's industry, audience, and business goals.
            </p>
          </div>

          {/* Subsection: The People Behind the Vision */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              The People Behind the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Vision
              </span>
            </h3>
          </div>

          {/* 3 Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
            
            {/* 1. Twinkle Arora */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00AED6] to-[#007799] text-white flex items-center justify-center font-black text-xl shadow-md shadow-cyan-500/20 mb-5 group-hover:scale-105 transition-transform">
                  TA
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-[#00AED6] transition-colors">
                  Twinkle Arora
                </h4>
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-[#00AED6] text-xs sm:text-sm font-bold border border-cyan-200/80 mb-3">
                  Founder &amp; Director
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Vision • Brand Growth • Client Leadership
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  As the Founder &amp; Director of DMDY, Twinkle leads the agency with a passion for helping businesses grow through meaningful digital experiences. Her approach combines strategic thinking with creative execution, ensuring every client receives marketing solutions that are personalized, practical, and performance-driven. She believes that every brand has a unique story—and the right digital strategy can turn that story into lasting success.
                </p>
              </div>
            </div>

            {/* 2. Rahul Arora */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E6007A] to-[#B3005F] text-white flex items-center justify-center font-black text-xl shadow-md shadow-pink-500/20 mb-5 group-hover:scale-105 transition-transform">
                  RA
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-[#E6007A] transition-colors">
                  Rahul Arora
                </h4>
                <div className="inline-block px-3 py-1 rounded-full bg-pink-50 text-[#E6007A] text-xs sm:text-sm font-bold border border-pink-200/80 mb-3">
                  Co-Founder &amp; COO
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Operations • Performance • Execution
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Rahul oversees the operational excellence that powers DMDY's client success. From execution to management, he ensures that every project is delivered with precision, efficiency, and measurable impact. His focus is simple: transform great ideas into consistent business results through streamlined execution and data-backed decision making.
                </p>
              </div>
            </div>

            {/* 3. Dimple Lamba */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#F5A623]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#C9800F] text-white flex items-center justify-center font-black text-xl shadow-md shadow-amber-500/20 mb-5 group-hover:scale-105 transition-transform">
                  DL
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-[#F5A623] transition-colors">
                  Dimple Lamba
                </h4>
                <div className="inline-block px-3 py-1 rounded-full bg-amber-50 text-[#F5A623] text-xs sm:text-sm font-bold border border-amber-200/80 mb-3">
                  Co-Founder &amp; CSO
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Strategy • Innovation • Business Development
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  As Chief Strategy Officer, Dimple brings together market insights, consumer behavior, and innovative thinking to build growth-focused marketing strategies. She works closely with brands to identify opportunities that strengthen their digital presence and long-term positioning. Her strategic mindset helps DMDY deliver solutions that are not only creative—but commercially effective.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 8: Our Shared Vision - What We Stand For */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
              <Target className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>What We Stand For</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Our Shared{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Vision
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-3xl">
              We envision a future where businesses of every size can compete confidently in the digital world. By combining creativity, technology, and strategy, we help brands build meaningful customer relationships and achieve sustainable growth. Our mission isn't to become the biggest agency—it's to become the most trusted growth partner for every client we work with.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            
            {/* 1. Client-First Thinking */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 text-[#00AED6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
                  <Target className="w-6 h-6 text-[#00AED6]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Client-First Thinking
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Every decision begins with your business goals.
                </p>
              </div>
            </div>

            {/* 2. 360° Expertise */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 text-[#E6007A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
                  <Layers className="w-6 h-6 text-[#E6007A]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  360° Expertise
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Complete digital solutions under one roof.
                </p>
              </div>
            </div>

            {/* 3. Transparency */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F5A623]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-[#F5A623] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F5A623] transition-colors tracking-tight">
                  Transparency
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Clear communication and honest partnerships.
                </p>
              </div>
            </div>

            {/* 4. Results That Matter */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00C48C]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-[#00C48C] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
                  <TrendingUp className="w-6 h-6 text-[#00C48C]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00C48C] transition-colors tracking-tight">
                  Results That Matter
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Growth measured beyond vanity metrics.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 9: Why Clients Choose DMDY */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="w-full rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-b from-slate-50/90 to-white border border-slate-200/90 shadow-sm relative overflow-hidden">
            
            {/* Subtle decorative glow accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00AED6]/10 via-[#E6007A]/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#F5A623]/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>Why DMDY</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                Why Clients Choose{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  DMDY
                </span>
              </h2>

              {/* Core statement */}
              <p className="text-lg sm:text-xl font-bold text-slate-800 leading-snug mb-6">
                Because successful marketing isn't about spending more—it's about making smarter decisions.
              </p>

              {/* Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
                At DMDY, we believe in transparent communication, creative thinking, data-backed strategies, and long-term partnerships. Whether you're launching a new brand or scaling an established business, we work with the same commitment: delivering marketing that creates real business impact.
              </p>

              {/* Brand Tagline Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-pink-50/50 to-amber-50/60 border border-slate-200/80 inline-block">
                <p className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight mb-0.5">
                  DMDY — Digi Me Digi You
                </p>
                <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Your Growth. Our Digital Strategy.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Section 10: A Message From the Founders & Brand Finale */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* A Message From the Founders */}
          <div className="w-full p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-xs mb-10 relative overflow-hidden text-center">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mx-auto mb-4">
              <Quote className="w-6 h-6 text-[#00AED6]" />
            </div>
            <div className="inline-block text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              A Message From the Founders
            </div>
            <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 leading-relaxed mb-6 italic max-w-4xl mx-auto">
              "DMDY isn't just our company—it's our commitment to helping ambitious businesses grow with confidence. Every campaign we build, every website we design, and every strategy we deliver is created with one purpose: creating real value for our clients."
            </blockquote>
            <p className="text-sm sm:text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              — Twinkle Arora, Rahul Arora &amp; Dimple Lamba
            </p>
          </div>

          {/* Grand Finale: Your Brand Deserves More Than Marketing */}
          <div className="w-full p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white to-slate-50/90 border border-slate-200/90 shadow-sm text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Your Brand Deserves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                More Than Marketing
              </span>
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-700 max-w-2xl mx-auto mb-6">
              It deserves a team that believes in its vision as much as you do.
            </p>
            <div className="inline-block px-5 py-2 rounded-full bg-slate-900 text-white font-extrabold text-sm sm:text-base mb-8 shadow-xs">
              DMDY — Digi Me Digi You
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-500/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 flex items-center justify-center gap-2"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-sm sm:text-base border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow transition-all duration-200 flex items-center justify-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
