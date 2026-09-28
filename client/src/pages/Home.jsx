import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import { LineChart, Target, ArrowRight, Search, Share2, PenTool, Monitor, HeartHandshake } from 'lucide-react';
const industryTabs = [
  {
    label: 'Healthcare',
    color: '#E6007A',
    headline: 'Strengthen digital visibility, trust and patient acquisition',
    desc: 'Laser-targeted paid campaigns across Google, Meta, and LinkedIn engineered to maximize your Return on Ad Spend (ROAS) and scale your pipeline.',
    points: ['Google Search & Shopping Ads', 'Meta & Instagram Campaigns', 'LinkedIn B2B Lead Generation', 'Advanced Retargeting & Lookalikes'],
    stat1: { label: 'Avg. ROAS', value: '420%' }, stat2: { label: 'Leads Generated', value: '50K+' },
    tags: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting'],
  },
  {
    label: 'E-commerce',
    color: '#00AED6',
    headline: 'Build product discovery, customer acquisition and online sales.',
    desc: 'Strategic paid media, SEO and conversion optimization designed to increase visibility, drive qualified traffic, and improve online sales.',
    points: ['Product Listing Ads (PLA)', 'Conversion-Focused Landing Pages', 'Customer Journey Optimization', 'E-commerce SEO & Technical Audit'],
    stat1: { label: 'Orders Generated', value: '12K+' }, stat2: { label: 'Avg. Conversion Rate', value: '3.2%' },
    tags: ['Google Shopping', 'CRO', 'E-commerce SEO', 'Paid Media'],
  },
  {
    label: 'Real Estate',
    color: '#F5A623',
    headline: 'Drive property visibility, qualified leads and sales velocity.',
    desc: 'Targeted digital campaigns and conversion-optimized landing pages designed to attract buyers, renters and investors at scale.',
    points: ['Property-Focused Paid Media', 'Lead Capture Landing Pages', 'Lead Nurturing Workflows', 'Google My Business & Local SEO'],
    stat1: { label: 'Projects Completed', value: '85+' }, stat2: { label: 'Leads Generated', value: '30K+' },
    tags: ['Real Estate Marketing', 'Lead Gen', 'Paid Ads', 'CRO'],
  },
  {
    label: 'Hospitality',
    color: '#00C48C',
    headline: 'Build awareness, demand and direct customer engagement.',
    desc: 'Strategic social content, community management, and engagement campaigns that build loyal audiences and drive real business results across all platforms.',
    points: ['Content Calendar & Strategy', 'Community Management', 'Influencer Partnerships', 'Social Analytics & Reporting'],
    stat1: { label: 'Followers Grown', value: '2M+' }, stat2: { label: 'Engagement Rate', value: '6.8%' },
    tags: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter/X'],
  },
  {
    label: 'Enterprise & Established Brands',
    color: '#A39BD6',
    headline: 'Build integrated digital ecosystems designed for complex growth objectives.',
    desc: 'Custom websites and web applications engineered for speed, conversion, and scale — from landing pages to full enterprise platforms.',
    points: ['React & Next.js Development', 'E-commerce & WooCommerce', 'Conversion Rate Optimization', 'Mobile-First & PWA'],
    stat1: { label: 'Sites Launched', value: '120+' }, stat2: { label: 'Avg. Load Time', value: '<1.5s' },
    tags: ['React', 'Next.js', 'Node.js', 'CRO'],
  },
];

const IndustriesSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = industryTabs[activeIdx];

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: active.color + '08' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading + Tabs */}
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6"
              style={{ color: active.color, backgroundColor: active.color + '18' }}
            >
              Industries
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              One <span style={{ color: '#00AED6' }}>Digital Growth</span> Mindset
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-lg">
              Every industry has different customers, buying behaviour, competition and growth opportunities. DMDY adapts its digital approach to the realities of your market—not the other way around.
            </p>

            <div className="space-y-3">
              {industryTabs.map((tab, idx) => (
                <div
                  key={tab.label}
                  onClick={() => setActiveIdx(idx)}
                  className="flex items-center justify-between px-5 py-3.5 rounded-xl cursor-pointer transition-all duration-300"
                  style={
                    activeIdx === idx
                      ? { backgroundColor: tab.color, color: '#fff', boxShadow: `0 4px 24px ${tab.color}40` }
                      : { backgroundColor: '#f8fafc', color: '#475569', border: `1.5px solid ${tab.color}30` }
                  }
                >
                  <span className="font-bold text-sm sm:text-[15px]">{tab.label}</span>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                    style={{ backgroundColor: activeIdx === idx ? 'rgba(255,255,255,0.2)' : tab.color + '20' }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: activeIdx === idx ? '#fff' : tab.color }} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Content Card */}
          <div className="relative pt-4 lg:pt-28">
            <div className="absolute -inset-2 rounded-3xl blur-2xl opacity-15" style={{ background: active.color }}></div>
            <div className="relative bg-white rounded-3xl border shadow-xl overflow-hidden" style={{ borderColor: active.color + '30' }}>
              <div className="px-7 py-5 border-b" style={{ borderColor: active.color + '20', backgroundColor: active.color + '08' }}>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1.5">{active.headline}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{active.desc}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: active.color + '15' }}>
                <div className="bg-white px-7 py-5 text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold" style={{ color: active.color }}>{active.stat1.value}</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">{active.stat1.label}</p>
                </div>
                <div className="bg-white px-7 py-5 text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold" style={{ color: active.color }}>{active.stat2.value}</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">{active.stat2.label}</p>
                </div>
              </div>

              {/* Points */}
              <div className="px-7 py-6">
                <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">What We Do</p>
                <ul className="space-y-3">
                  {active.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-medium">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: active.color + '20' }}>
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: active.color }}></span>
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-5" style={{ borderTop: `1px solid ${active.color}20` }}>
                  {active.tags.map((tag) => (
                    <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full" style={{ color: active.color, background: active.color + '18' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const { openModal } = useContactModal();
  useEffect(() => {
    document.title = 'DMDY — 360° Digital Growth Partner & Performance Marketing Agency';
  }, []);

  return (
    <div className="bg-slate-50 font-sans">
      <Hero />
      
      

      {/* Services Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Enhanced Section Header */}
          <div className="text-left mb-16 max-w-4xl">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A] tracking-widest uppercase">
                DMDY — Digi Me Digi You
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
              Digital Growth, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">Designed Around You.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              A 360° digital marketing partner combining strategy, creativity, performance and technology to build digital growth around your business, industry, niche and goals.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 md:gap-8 mb-6 text-slate-700 font-semibold text-xs sm:text-sm bg-white px-4 sm:px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00AED6] animate-pulse"></span>
                10+ Years of Experience
              </div>
              <div className="hidden sm:block w-px h-5 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E6007A] animate-pulse"></span>
                15+ Clients & Projects
              </div>
              <div className="hidden sm:block w-px h-5 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] animate-pulse"></span>
                10+ Digital Specialists
              </div>
            </div>

            {/* Quote / Sub-text */}
            <div className="relative mb-8 max-w-2xl">
              <p className="text-base sm:text-lg font-semibold text-slate-800 italic relative z-10 py-1.5 border-l-4 border-[#00AED6] pl-4">
                "We don't sell you everything. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">We figure out what you actually need."</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <button 
                type="button"
                onClick={() => openModal()}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Start a Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-emerald-50 text-emerald-600 font-bold border-2 border-emerald-100 rounded-xl transition-all shadow-sm hover:shadow text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                WhatsApp DMDY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* One Digital Partner - Services List */}
      <section className="py-14 relative overflow-hidden">
        {/* Full Screen Soft Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00AED6]/10 via-[#E6007A]/5 to-[#F5A623]/10 pointer-events-none opacity-80"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
              Full Spectrum Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 leading-tight">
              One Digital Partner for All Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">Digital Marketing</span> Needs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Comprehensive digital solutions tailored to scale your brand, increase visibility, and drive measurable revenue.
            </p>
          </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category 1 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#00AED6]/30 hover:border-[#00AED6] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#00AED6]/10 flex items-center justify-center text-[#00AED6] group-hover:scale-110 transition-transform">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Search</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#00AED6] transition-colors"><ArrowRight className="w-4 h-4 text-[#00AED6] shrink-0" /> SEO</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#00AED6] transition-colors"><ArrowRight className="w-4 h-4 text-[#00AED6] shrink-0" /> Local SEO</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#00AED6] transition-colors"><ArrowRight className="w-4 h-4 text-[#00AED6] shrink-0" /> Google Ads / PPC</li>
                </ul>
              </div>

              {/* Category 2 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#E6007A]/30 hover:border-[#E6007A] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] group-hover:scale-110 transition-transform">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Social & Content</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#E6007A] transition-colors"><ArrowRight className="w-4 h-4 text-[#E6007A] shrink-0" /> Social Media Marketing</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#E6007A] transition-colors"><ArrowRight className="w-4 h-4 text-[#E6007A] shrink-0" /> Content Marketing</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#E6007A] transition-colors"><ArrowRight className="w-4 h-4 text-[#E6007A] shrink-0" /> Influencer Marketing</li>
                </ul>
              </div>

              {/* Category 3 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#F5A623]/30 hover:border-[#F5A623] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Performance</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#F5A623] transition-colors"><ArrowRight className="w-4 h-4 text-[#F5A623] shrink-0" /> Performance Marketing</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#F5A623] transition-colors"><ArrowRight className="w-4 h-4 text-[#F5A623] shrink-0" /> Lead Generation</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#F5A623] transition-colors"><ArrowRight className="w-4 h-4 text-[#F5A623] shrink-0" /> Conversion Optimization</li>
                </ul>
              </div>

              {/* Category 4 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#00C48C]/30 hover:border-[#00C48C] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#00C48C]/10 flex items-center justify-center text-[#00C48C] group-hover:scale-110 transition-transform">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Creative & Brand</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#00C48C] transition-colors"><ArrowRight className="w-4 h-4 text-[#00C48C] shrink-0" /> Branding</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#00C48C] transition-colors"><ArrowRight className="w-4 h-4 text-[#00C48C] shrink-0" /> Creative Design</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#00C48C] transition-colors"><ArrowRight className="w-4 h-4 text-[#00C48C] shrink-0" /> Content Creation</li>
                </ul>
              </div>

              {/* Category 5 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#7C3AED]/30 hover:border-[#7C3AED] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:scale-110 transition-transform">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Digital Experience</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#7C3AED] transition-colors"><ArrowRight className="w-4 h-4 text-[#7C3AED] shrink-0" /> Website Design</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#7C3AED] transition-colors"><ArrowRight className="w-4 h-4 text-[#7C3AED] shrink-0" /> Web Development</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#7C3AED] transition-colors"><ArrowRight className="w-4 h-4 text-[#7C3AED] shrink-0" /> E-commerce</li>
                </ul>
              </div>

              {/* Category 6 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#F43F5E]/30 hover:border-[#F43F5E] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F43F5E]/10 flex items-center justify-center text-[#F43F5E] group-hover:scale-110 transition-transform">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Retention</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#F43F5E] transition-colors"><ArrowRight className="w-4 h-4 text-[#F43F5E] shrink-0" /> Email Marketing</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#F43F5E] transition-colors"><ArrowRight className="w-4 h-4 text-[#F43F5E] shrink-0" /> CRM</li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-700 font-medium hover:text-[#F43F5E] transition-colors"><ArrowRight className="w-4 h-4 text-[#F43F5E] shrink-0" /> Marketing Automation</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm sm:text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                style={{background: 'linear-gradient(135deg, #00AED6 0%, #E6007A 50%, #F5A623 100%)'}}
              >
                Explore All Digital Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
        </div>
      </section>

      {/* Actually Need Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
              Goal-Driven Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 leading-tight">
              What Do You <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">Actually Need?</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Skip the jargon. Tell us your goal, and we'll show you the exact digital growth strategies to achieve it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Item 1 */}
            <div className="bg-white/80 backdrop-blur-md hover:bg-white border border-[#00AED6]/20 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-3xl p-8 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 flex items-center justify-center text-[#00AED6] group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Need more visibility?</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#00AED6]/30 transition-colors">SEO</span>
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#00AED6]/30 transition-colors">Local SEO</span>
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#00AED6]/30 transition-colors">Content</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white/80 backdrop-blur-md hover:bg-white border border-[#F5A623]/20 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-3xl p-8 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Need more leads?</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#F5A623]/30 transition-colors">Ads</span>
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#F5A623]/30 transition-colors">Performance Marketing</span>
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#F5A623]/30 transition-colors">Landing Pages</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white/80 backdrop-blur-md hover:bg-white border border-[#E6007A]/20 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-3xl p-8 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] group-hover:scale-110 transition-transform">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Need more sales?</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#E6007A]/30 transition-colors">Paid Media</span>
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#E6007A]/30 transition-colors">E-commerce</span>
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#E6007A]/30 transition-colors">Conversion Optimization</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white/80 backdrop-blur-md hover:bg-white border border-[#00C48C]/20 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-3xl p-8 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00C48C]/10 flex items-center justify-center text-[#00C48C] group-hover:scale-110 transition-transform">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Need a stronger brand?</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#00C48C]/30 transition-colors">Branding</span>
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#00C48C]/30 transition-colors">Creative</span>
                <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 group-hover:border-[#00C48C]/30 transition-colors">Social Media</span>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 sm:mt-16 w-full p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">Not sure where to start?</h3>
              <p className="text-sm sm:text-base text-slate-600 font-normal">That's exactly what we're here for. Let's figure it out together.</p>
            </div>
            <button
              type="button"
              onClick={() => openModal()}
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm sm:text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group text-center cursor-pointer"
              style={{background: 'linear-gradient(135deg, #00AED6 0%, #E6007A 50%, #F5A623 100%)'}}
            >
              Get a Digital Growth Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Expertise — Interactive 2-Column Section */}
      <IndustriesSection />

      {/* Trust Banner */}
      <div className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Trusted by leading brands across India</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {[
              { name: 'BrandOne',   color: '#00AED6' },
              { name: 'TechCorp',   color: '#F5A623' },
              { name: 'GrowthX',    color: '#E6007A' },
              { name: 'StudioAlpha',color: '#00C48C' },
              { name: 'ElevateHQ',  color: '#A39BD6' },
            ].map((brand) => (
              <div
                key={brand.name}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-100 bg-slate-50 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: brand.color }}></span>
                <span className="text-sm font-bold text-slate-700 tracking-wide">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clean Corporate CTA Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-slate-900 tracking-tight leading-tight">
              Ready to elevate your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">digital presence?</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed font-normal max-w-2xl">
              Partner with DMDY for data-backed strategies and transparent reporting. Schedule a consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
              <button 
                type="button"
                onClick={() => openModal()}
                className="w-full sm:w-auto bg-gradient-to-r from-[#00AED6] to-[#E6007A] text-white hover:opacity-95 font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base text-center cursor-pointer"
              >
                Request a Consultation
              </button>
              <Link to="/portfolio" className="w-full sm:w-auto bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 font-bold py-3.5 px-8 rounded-xl transition-all shadow-sm text-sm sm:text-base text-center">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
