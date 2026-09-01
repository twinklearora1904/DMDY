import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { LineChart, Target, Code2, ArrowRight, CheckCircle2, Search, Share2, PenTool, Monitor, HeartHandshake } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-slate-50 font-sans">
      <Hero />
      
      

      {/* Services Section */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Enhanced Section Header */}
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="inline-block mb-6 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 shadow-sm">
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A] tracking-widest uppercase">
                DMDY — Digi Me Digi You
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1] w-full">
              Digital Growth, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">Designed Around You.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              A 360° digital marketing partner combining strategy, creativity, performance and technology to build digital growth around your business, industry, niche and goals.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 text-slate-700 font-bold text-sm md:text-base bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00AED6] animate-pulse"></span>
                10+ Years of Experience
              </div>
              <div className="hidden md:block w-px h-6 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E6007A] animate-pulse"></span>
                15+ Clients & Projects
              </div>
              <div className="hidden md:block w-px h-6 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] animate-pulse"></span>
                10+ Digital Specialists
              </div>
            </div>

            {/* Quote / Sub-text */}
            <div className="relative mb-12">
              <div className="absolute -top-4 -left-6 text-6xl text-slate-200 font-serif leading-none">"</div>
              <p className="text-xl md:text-2xl font-semibold text-slate-800 italic relative z-10 px-8 py-2">
                We don't sell you everything. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">We figure out what you actually need.</span>
              </p>
              <div className="absolute -bottom-8 -right-4 text-6xl text-slate-200 font-serif leading-none rotate-180">"</div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-emerald-50 text-emerald-600 font-bold border-2 border-emerald-100 rounded-full transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                WhatsApp DMDY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* One Digital Partner - Services List */}
      <section className="py-10 relative overflow-hidden">
        {/* Full Screen Soft Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00AED6]/10 via-[#E6007A]/5 to-[#F5A623]/10 pointer-events-none opacity-80"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              One Digital Partner for All Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">Digital Marketing</span> Needs
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to scale your brand, increase visibility, and drive measurable revenue.
            </p>
          </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#00AED6]/30 hover:border-[#00AED6] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#00AED6]/10 flex items-center justify-center text-[#00AED6] group-hover:scale-110 transition-transform">
                    <Search className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Search</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#00AED6] transition-colors"><ArrowRight className="w-4 h-4 text-[#00AED6]" /> SEO</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#00AED6] transition-colors"><ArrowRight className="w-4 h-4 text-[#00AED6]" /> Local SEO</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#00AED6] transition-colors"><ArrowRight className="w-4 h-4 text-[#00AED6]" /> Google Ads / PPC</li>
                </ul>
              </div>

              {/* Category 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#E6007A]/30 hover:border-[#E6007A] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] group-hover:scale-110 transition-transform">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Social & Content</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#E6007A] transition-colors"><ArrowRight className="w-4 h-4 text-[#E6007A]" /> Social Media Marketing</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#E6007A] transition-colors"><ArrowRight className="w-4 h-4 text-[#E6007A]" /> Content Marketing</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#E6007A] transition-colors"><ArrowRight className="w-4 h-4 text-[#E6007A]" /> Influencer Marketing</li>
                </ul>
              </div>

              {/* Category 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#F5A623]/30 hover:border-[#F5A623] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Performance</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#F5A623] transition-colors"><ArrowRight className="w-4 h-4 text-[#F5A623]" /> Performance Marketing</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#F5A623] transition-colors"><ArrowRight className="w-4 h-4 text-[#F5A623]" /> Lead Generation</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#F5A623] transition-colors"><ArrowRight className="w-4 h-4 text-[#F5A623]" /> Conversion Optimization</li>
                </ul>
              </div>

              {/* Category 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#00C48C]/30 hover:border-[#00C48C] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#00C48C]/10 flex items-center justify-center text-[#00C48C] group-hover:scale-110 transition-transform">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Creative & Brand</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#00C48C] transition-colors"><ArrowRight className="w-4 h-4 text-[#00C48C]" /> Branding</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#00C48C] transition-colors"><ArrowRight className="w-4 h-4 text-[#00C48C]" /> Creative Design</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#00C48C] transition-colors"><ArrowRight className="w-4 h-4 text-[#00C48C]" /> Content Creation</li>
                </ul>
              </div>

              {/* Category 5 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#7C3AED]/30 hover:border-[#7C3AED] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:scale-110 transition-transform">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Digital Experience</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#7C3AED] transition-colors"><ArrowRight className="w-4 h-4 text-[#7C3AED]" /> Website Design</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#7C3AED] transition-colors"><ArrowRight className="w-4 h-4 text-[#7C3AED]" /> Web Development</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#7C3AED] transition-colors"><ArrowRight className="w-4 h-4 text-[#7C3AED]" /> E-commerce</li>
                </ul>
              </div>

              {/* Category 6 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-[#F43F5E]/30 hover:border-[#F43F5E] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F43F5E]/10 flex items-center justify-center text-[#F43F5E] group-hover:scale-110 transition-transform">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Retention</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#F43F5E] transition-colors"><ArrowRight className="w-4 h-4 text-[#F43F5E]" /> Email Marketing</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#F43F5E] transition-colors"><ArrowRight className="w-4 h-4 text-[#F43F5E]" /> CRM</li>
                  <li className="flex items-center gap-2.5 text-slate-600 font-medium hover:text-[#F43F5E] transition-colors"><ArrowRight className="w-4 h-4 text-[#F43F5E]" /> Marketing Automation</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                style={{background: 'linear-gradient(135deg, #00AED6 0%, #E6007A 50%, #F5A623 100%)'}}
              >
                Explore All Digital Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
        </div>
      </section>

      {/* Actually Need Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              What Do You <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">Actually Need?</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Skip the jargon. Tell us your goal, and we'll show you the exact digital growth strategies to achieve it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Item 1 */}
            <div className="bg-white/80 backdrop-blur-md hover:bg-white border border-[#00AED6]/20 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-3xl p-8 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00AED6]/10 flex items-center justify-center text-[#00AED6] group-hover:scale-110 transition-transform">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Need more visibility?</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#00AED6]/30 transition-colors">SEO</span>
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#00AED6]/30 transition-colors">Local SEO</span>
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#00AED6]/30 transition-colors">Content</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white/80 backdrop-blur-md hover:bg-white border border-[#F5A623]/20 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-3xl p-8 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Need more leads?</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#F5A623]/30 transition-colors">Ads</span>
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#F5A623]/30 transition-colors">Performance Marketing</span>
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#F5A623]/30 transition-colors">Landing Pages</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white/80 backdrop-blur-md hover:bg-white border border-[#E6007A]/20 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-3xl p-8 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] group-hover:scale-110 transition-transform">
                  <LineChart className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Need more sales?</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#E6007A]/30 transition-colors">Paid Media</span>
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#E6007A]/30 transition-colors">E-commerce</span>
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#E6007A]/30 transition-colors">Conversion Optimization</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white/80 backdrop-blur-md hover:bg-white border border-[#00C48C]/20 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-3xl p-8 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00C48C]/10 flex items-center justify-center text-[#00C48C] group-hover:scale-110 transition-transform">
                  <PenTool className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Need a stronger brand?</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#00C48C]/30 transition-colors">Branding</span>
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#00C48C]/30 transition-colors">Creative</span>
                <span className="bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-100 group-hover:border-[#00C48C]/30 transition-colors">Social Media</span>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 max-w-5xl mx-auto p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 ">
            <div className="text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Not sure where to start?</h4>
              <p className="text-slate-600 text-lg font-medium">That's exactly what we're here for. Let's figure it out together.</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              style={{background: 'linear-gradient(135deg, #00AED6 0%, #E6007A 50%, #F5A623 100%)'}}
            >
              Get a Digital Growth Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Expertise — Interactive 2-Column Section */}
      {(() => {
        const tabs = [
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
            headline: 'Rank Higher. Get Found. Grow Organically.',
            desc: 'Data-driven technical SEO, authoritative link building, and content strategy designed to secure top rankings and drive qualified organic traffic.',
            points: ['Technical SEO & Core Web Vitals', 'Enterprise Content Strategy', 'Authority Link Building', 'Local & E-commerce SEO'],
            stat1: { label: 'Organic Traffic ↑', value: '+145%' }, stat2: { label: 'Keywords Ranked', value: '10K+' },
            tags: ['On-Page SEO', 'Link Building', 'Content', 'Technical Audit'],
          },
          {
            label: 'Education',
            color: '#F5A623',
            headline: 'Reach students, parents and decision-makers across the digital journey.',
            desc: 'From brand identity to visual design systems — we craft compelling brand stories and creative assets that differentiate your business in crowded markets.',
            points: ['Logo & Visual Identity', 'Brand Guidelines & Style Guide', 'Creative Ad Design', 'Pitch Decks & Presentations'],
            stat1: { label: 'Brands Built', value: '200+' }, stat2: { label: 'Design Assets', value: '5K+' },
            tags: ['Logo Design', 'UI/UX', 'Brand Identity', 'Creative'],
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
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeIdx, setActiveIdx] = useState(0);
        const active = tabs[activeIdx];
        return (
          <section className="py-20 overflow-hidden" style={{backgroundColor: active.color + '08'}}>
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left: Heading + Tabs */}
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6" style={{color: active.color, backgroundColor: active.color + '18'}}>
                    Industries 
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                    One <span style={{color: '#00AED6'}}>Digital Growth</span> Mindset
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-lg">
                    Every industry has different customers, buying behaviour, competition and growth opportunities. DMDY adapts its digital approach to the realities of your market—not the other way around.
                  </p>

                  <div className="space-y-3">
                    {tabs.map((tab, idx) => (
                      <div
                        key={tab.label}
                        onClick={() => setActiveIdx(idx)}
                        className="flex items-center justify-between px-5 py-4 rounded-xl cursor-pointer transition-all duration-300"
                        style={activeIdx === idx
                          ? { backgroundColor: tab.color, color: '#fff', boxShadow: `0 4px 24px ${tab.color}40` }
                          : { backgroundColor: '#f8fafc', color: '#475569', border: `1.5px solid ${tab.color}30` }}
                      >
                        <span className="font-bold text-[15px]">{tab.label}</span>
                        <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                          style={{ backgroundColor: activeIdx === idx ? 'rgba(255,255,255,0.2)' : tab.color + '20' }}>
                          <ArrowRight className="w-4 h-4" style={{color: activeIdx === idx ? '#fff' : tab.color}} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Dynamic Content Card — aligned with tab list */}
                <div className="relative" style={{paddingTop: '140px'}}>
                  <div className="absolute -inset-2 rounded-3xl blur-2xl opacity-15" style={{background: active.color}}></div>
                  <div className="relative bg-white rounded-3xl border shadow-xl overflow-hidden" style={{borderColor: active.color + '30'}}>
                    {/* Card header */}
                    <div className="px-7 py-5 border-b" style={{borderColor: active.color + '20', backgroundColor: active.color + '08'}}>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-1">{active.headline}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{active.desc}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-px" style={{backgroundColor: active.color + '15'}}>
                      <div className="bg-white px-7 py-5 text-center">
                        <p className="text-3xl font-black" style={{color: active.color}}>{active.stat1.value}</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{active.stat1.label}</p>
                      </div>
                      <div className="bg-white px-7 py-5 text-center">
                        <p className="text-3xl font-black" style={{color: active.color}}>{active.stat2.value}</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{active.stat2.label}</p>
                      </div>
                    </div>

                    {/* Points */}
                    <div className="px-7 py-6">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">What We Do</p>
                      <ul className="space-y-3">
                        {active.points.map(pt => (
                          <li key={pt} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                            <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: active.color + '20'}}>
                              <span className="w-2 h-2 rounded-full" style={{backgroundColor: active.color}}></span>
                            </span>
                            {pt}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-6 pt-5" style={{borderTop: `1px solid ${active.color}20`}}>
                        {active.tags.map(tag => (
                          <span key={tag} className="text-[11px] font-bold px-3 py-1 rounded-full" style={{color: active.color, background: active.color + '18'}}>
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
      })()}

      {/* Trust Banner */}
      <div className="bg-white border-y border-slate-100 py-10">
        <div className="container mx-auto px-6 text-center">
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
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">
            Ready to elevate your digital presence?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Partner with DMDY for data-backed strategies and transparent reporting. Schedule a consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto bg-brandPrimary text-white hover:bg-indigo-700 font-bold py-4 px-10 rounded-lg transition-colors">
              Request a Consultation
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 font-bold py-4 px-10 rounded-lg transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
