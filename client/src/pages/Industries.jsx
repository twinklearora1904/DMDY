import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  HeartPulse,
  Rocket,
  Crown,
  Layers,
  CheckCircle2,
  Zap,
  Building2,
  GraduationCap,
  Utensils,
  Factory,
  Scale,
  Users,
  MapPin,
  Target,
  Wallet,
  Award
} from 'lucide-react';

// Industry Visual Assets
import realEstateImg from '../assets/social-media/industry-real-estate.jpg';
import ecommerceImg from '../assets/social-media/industry-ecommerce.jpg';
import healthcareImg from '../assets/social-media/industry-healthcare.jpg';
import educationImg from '../assets/google-ads/industry-education.jpg';
import hospitalityImg from '../assets/social-media/industry-hospitality.jpg';
import creativeGoalsImg from '../assets/creative_goals.jpg';
import corporateImg from '../assets/web-development/corporate-website.jpg';
import professionalServicesImg from '../assets/social-media/industry-professional-services.jpg';
import startupsImg from '../assets/social-media/industry-startups.jpg';

// Section 2: 9 Specialized Industries Data
const specializedIndustries = [
  {
    id: 'real-estate',
    title: 'Real Estate & Property Marketing',
    shortName: 'Real Estate',
    category: 'Property & Development',
    icon: Building2,
    color: '#F5A623',
    image: realEstateImg,
    description:
      "Real estate isn't about selling properties—it's about generating qualified buyers and building trust before the first site visit.",
    servicesLabel: 'We help with:',
    services: [
      'Property Lead Generation',
      'Google & Meta Ads',
      'Local SEO & Google Maps',
      'Luxury Project Branding',
      'Drone & Video Marketing',
      'Landing Pages for Projects'
    ],
    idealFor: 'Builders, Developers, Realtors, Property Consultants'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & D2C Brands',
    shortName: 'E-commerce',
    category: 'Retail & D2C',
    icon: ShoppingBag,
    color: '#00AED6',
    image: ecommerceImg,
    description:
      'Your customers compare products across multiple platforms before purchasing. We create a complete acquisition and retention ecosystem.',
    servicesLabel: 'Growth services include:',
    services: [
      'Product SEO',
      'Shopping Ads',
      'Meta Conversion Campaigns',
      'Email Marketing',
      'Abandoned Cart Automation',
      'Creative Product Content'
    ],
    idealFor: 'Fashion, Beauty, Electronics, Lifestyle & Home Brands'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical Practices',
    shortName: 'Healthcare',
    category: 'Medical & Wellness',
    icon: HeartPulse,
    color: '#E6007A',
    image: healthcareImg,
    description:
      'Patients search for trustworthy healthcare providers online before booking appointments. We help clinics build visibility and credibility.',
    servicesLabel: 'Our healthcare solutions:',
    services: [
      'Local SEO',
      'Google Business Optimization',
      'Patient Lead Generation',
      'Educational Content Marketing',
      'Clinic Website Development',
      'Reputation Management'
    ],
    idealFor: 'Clinics, Hospitals, Dentists, Physiotherapists & Wellness Centers'
  },
  {
    id: 'education',
    title: 'Education, Coaching & EdTech',
    shortName: 'Education',
    category: 'Academies & EdTech',
    icon: GraduationCap,
    color: '#00AED6',
    image: educationImg,
    description:
      'Modern students discover institutions digitally. We create campaigns focused on admissions, enquiries, and parent trust.',
    servicesLabel: 'Services include:',
    services: [
      'Admission Campaigns',
      'Google Search Ads',
      'YouTube Advertising',
      'Educational Content Strategy',
      'Landing Pages',
      'CRM Lead Nurturing'
    ],
    idealFor: 'Schools, Colleges, Coaching Institutes & Online Learning Platforms'
  },
  {
    id: 'hospitality',
    title: 'Hospitality, Cafés & Restaurants',
    shortName: 'Hospitality',
    category: 'Dining & Venues',
    icon: Utensils,
    color: '#E6007A',
    image: hospitalityImg,
    description:
      'Visual storytelling drives hospitality. We help restaurants become destinations people want to visit.',
    servicesLabel: 'We deliver:',
    services: [
      'Food Photography & Reels',
      'Instagram Growth',
      'Local SEO',
      'Google Maps Visibility',
      'Offer Campaigns',
      'Event Promotions'
    ],
    idealFor: 'Cafés, Restaurants, Fine Dining, Cloud Kitchens & Hospitality Venues'
  },
  {
    id: 'fashion-lifestyle',
    title: 'Fashion, Beauty & Lifestyle',
    shortName: 'Fashion & Beauty',
    category: 'Creative & Lifestyle',
    icon: Sparkles,
    color: '#F5A623',
    image: creativeGoalsImg,
    description:
      'For visually driven industries, branding and content become your strongest sales tools.',
    servicesLabel: 'Creative growth includes:',
    services: [
      'Brand Identity',
      'Influencer Collaborations',
      'Reels & UGC Content',
      'Meta Ads',
      'Product Photography',
      'E-commerce Optimization'
    ],
    idealFor: 'Designer Labels, Skincare & Cosmetics, Apparel & Lifestyle Boutiques'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial Businesses',
    shortName: 'Manufacturing',
    category: 'B2B & Industrial',
    icon: Factory,
    color: '#00AED6',
    image: corporateImg,
    description:
      'Industrial companies need credibility, not viral content. We focus on qualified B2B lead generation and professional digital presence.',
    servicesLabel: 'Solutions include:',
    services: [
      'Corporate Websites',
      'SEO for Industrial Keywords',
      'LinkedIn Marketing',
      'Google Ads',
      'Brochure Design',
      'International Lead Generation'
    ],
    idealFor: 'Industrial Plants, B2B Manufacturers, Exporters & Engineering Firms'
  },
  {
    id: 'professional-services',
    title: 'Legal, Finance & Professional Services',
    shortName: 'Professional Services',
    category: 'Advisory & Corporate',
    icon: Scale,
    color: '#E6007A',
    image: professionalServicesImg,
    description:
      'Trust is the biggest conversion factor in professional services. We build authority through content and visibility.',
    servicesLabel: 'Growth strategy:',
    services: [
      'Personal Branding',
      'LinkedIn Marketing',
      'Local SEO',
      'Website Development',
      'Thought Leadership Content',
      'Lead Generation Funnels'
    ],
    idealFor: 'Law Firms, Financial Advisors, Chartered Accountants & Consultancies'
  },
  {
    id: 'startups',
    title: 'Startups & Growing Businesses',
    shortName: 'Startups',
    category: 'Emerging & Tech',
    icon: Rocket,
    color: '#F5A623',
    image: startupsImg,
    description:
      'Every startup needs a different growth engine. We create scalable digital foundations that evolve with your business.',
    servicesLabel: 'Startup launch package:',
    services: [
      'Brand Strategy',
      'Logo & Identity',
      'Website Design',
      'SEO Foundation',
      'Social Media Setup',
      'Paid Marketing'
    ],
    idealFor: 'Seed & Early-Stage Startups, SaaS Founders, Innovators & Scale-ups'
  }
];

// Section 3: Essential Business Factors Data
const approachFactors = [
  {
    factor: 'Industry',
    adaptation: 'Custom marketing framework for your niche',
    icon: Layers,
    color: '#00AED6'
  },
  {
    factor: 'Target Audience',
    adaptation: 'Platform & content selection',
    icon: Users,
    color: '#E6007A'
  },
  {
    factor: 'Location',
    adaptation: 'Local, national or global campaigns',
    icon: MapPin,
    color: '#F5A623'
  },
  {
    factor: 'Competition',
    adaptation: 'SEO & advertising strategy',
    icon: Target,
    color: '#00AED6'
  },
  {
    factor: 'Budget',
    adaptation: 'Pocket-friendly scalable solutions',
    icon: Wallet,
    color: '#E6007A'
  },
  {
    factor: 'Business Goals',
    adaptation: 'Leads, sales, branding or growth',
    icon: Award,
    color: '#F5A623'
  }
];

// Section 4: 4 Core Pillars Data
const whyDmdyPillars = [
  {
    title: 'Requirement-Based Strategy',
    description: 'No unnecessary services. Only what your business truly needs.',
    icon: Target,
    color: '#00AED6',
    step: '01'
  },
  {
    title: 'Pocket-Friendly Growth',
    description: 'Premium digital marketing without unnecessary agency overheads.',
    icon: Wallet,
    color: '#E6007A',
    step: '02'
  },
  {
    title: '360° Digital Expertise',
    description: 'SEO, Paid Ads, Social Media, Websites, Branding & Creative under one roof.',
    icon: Layers,
    color: '#F5A623',
    step: '03'
  },
  {
    title: 'Flexible Specialist Team',
    description: 'We assemble the right creative and marketing specialists according to your project.',
    icon: Users,
    color: '#00AED6',
    step: '04'
  }
];

const Industries = () => {
  const { openModal } = useContactModal();
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    document.title = 'Industries We Empower — DMDY';
    window.scrollTo(0, 0);
  }, []);

  const filteredIndustries =
    selectedFilter === 'all'
      ? specializedIndustries
      : specializedIndustries.filter((item) => item.id === selectedFilter);

  return (
    <div className="bg-slate-50 font-sans min-h-screen">
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_25%,transparent_70%)] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (7 cols): User-Provided Hero Content */}
            <div className="lg:col-span-7">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                Tailored Market Strategies &bull; 360° Growth
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                Industries We{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Empower
                </span>
              </h1>

              {/* Subheading / Lead Content */}
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-2xl">
                <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed">
                  Every industry has different customers, different competition, and different opportunities. DMDY builds digital strategies designed around your market—not generic marketing packages.
                </p>
                <p>
                  At DMDY (Digi Me Digi You), we believe successful digital marketing begins with understanding your business ecosystem. Whether you're a startup, a luxury brand, a healthcare clinic, or an e-commerce company, our 360° Digital Marketing Services are tailored to your industry's buying behavior, customer journey, and growth goals.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
                <button
                  type="button"
                  onClick={() => openModal('Industry Strategy')}
                  className="btn-primary w-full sm:w-auto"
                >
                  Get Free Industry Audit <ArrowRight className="w-4 h-4 ml-1" />
                </button>
                <a href="#industries-grid" className="btn-secondary w-full sm:w-auto">
                  Explore Specialized Industries &darr;
                </a>
              </div>

              {/* Trust Indicators Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 max-w-lg">
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">Custom</div>
                  <div className="text-xs text-slate-500 font-medium">Market Strategy</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                    360°
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Ecosystem Alignment</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Tailored Funnels</div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Industry Ecosystem Card Visual */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">

              {/* Floating Top Badge */}
              <div className="absolute -top-6 -left-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-cyan-100 flex items-center justify-center text-[#00AED6] font-bold text-xs">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Market Intelligence</div>
                  <div className="text-xs font-extrabold text-slate-900">Custom Ecosystems</div>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-8 -right-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Execution</div>
                  <div className="text-xs font-extrabold text-slate-900">Zero Generic Packages</div>
                </div>
              </div>

              {/* Ambient Glow behind Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00AED6]/20 via-[#E6007A]/20 to-[#F5A623]/20 rounded-3xl blur-2xl opacity-75 pointer-events-none"></div>

              {/* Main Ecosystem Visual Card */}
              <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-7 overflow-hidden text-left">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Tailored Industry Verticals
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    DMDY 360°
                  </span>
                </div>

                {/* Verticals Mentioned in User Content */}
                <div className="space-y-3">
                  {/* Item 1: Startups */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-cyan-100 text-[#00AED6] flex items-center justify-center shrink-0">
                        <Rocket className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Startups & Tech</div>
                        <div className="text-[11px] text-slate-500 font-normal">Fast validation & CAC reduction</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#00AED6]">Rapid Scale</span>
                  </div>

                  {/* Item 2: Luxury Brands */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-[#F5A623] flex items-center justify-center shrink-0">
                        <Crown className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Luxury & Premium Brands</div>
                        <div className="text-[11px] text-slate-500 font-normal">Aesthetic prestige & high-value buyers</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#F5A623]">High-Ticket</span>
                  </div>

                  {/* Item 3: Healthcare Clinics */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-pink-100 text-[#E6007A] flex items-center justify-center shrink-0">
                        <HeartPulse className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Healthcare Clinics</div>
                        <div className="text-[11px] text-slate-500 font-normal">Patient trust & local search authority</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#E6007A]">High Trust</span>
                  </div>

                  {/* Item 4: E-commerce Companies */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-cyan-100 text-[#00AED6] flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">E-Commerce Companies</div>
                        <div className="text-[11px] text-slate-500 font-normal">Shopping ads & conversion rate speed</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#00AED6]">Max ROAS</span>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Mapped to your buyer journey</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal('Industry Audit')}
                    className="font-bold text-[#00AED6] hover:text-[#E6007A] transition-colors cursor-pointer"
                  >
                    Request Audit &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: DIGITAL SOLUTIONS ACROSS DIVERSE INDUSTRIES    */}
      {/* ========================================================= */}
      <section id="industries-grid" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
              Industries We Specialize In
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Digital Solutions Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Diverse Industries
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 font-normal leading-relaxed">
              We don't believe in one-size-fits-all marketing. Every campaign is customized according to your niche, audience, location, competition, and business objectives.
            </p>
          </div>

          {/* Sleek Horizontal Filter Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
            >
              All Industries ({specializedIndustries.length})
            </button>
            {specializedIndustries.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedFilter(item.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedFilter === item.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
              >
                {item.shortName}
              </button>
            ))}
          </div>

          {/* Compact, Ultra-Professional 3x3 Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredIndustries.map((ind) => {
              const IconComponent = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Compact Header Image Banner */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>

                    {/* Category Pill on Image Top */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-slate-800 shadow-xs">
                        <IconComponent className="w-3 h-3 text-[#00AED6]" />
                        {ind.category}
                      </span>
                    </div>

                    {/* Title on Image Bottom */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
                      <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-snug">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
                    <div>
                      {/* 2-Line Crisp Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3.5 line-clamp-2">
                        {ind.description}
                      </p>

                      {/* Services in Compact 2-Column Grid */}
                      <div className="mb-3.5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          {ind.servicesLabel}
                        </div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                          {ind.services.map((srv, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00AED6] shrink-0"></span>
                              <span className="truncate" title={srv}>{srv}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Ideal For Compact Bar */}
                      <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 mb-4 text-[11px] text-slate-600 flex items-center gap-1.5">
                        <span className="font-bold text-slate-900 shrink-0">For:</span>
                        <span className="truncate" title={ind.idealFor}>{ind.idealFor}</span>
                      </div>
                    </div>

                    {/* Card Footer with Compact Action */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">Custom Funnel</span>
                      <button
                        type="button"
                        onClick={() => openModal(ind.title)}
                        className="btn-primary-sm !px-3.5 !py-1.5 !text-xs flex items-center gap-1"
                      >
                        <span>Tailor Plan</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: OUR INDUSTRY-FIRST MARKETING APPROACH          */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" /> Strategic Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Industry-First{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Marketing Approach
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
              Instead of selling fixed packages, DMDY begins with understanding your business model. Every strategy is built around six essential business factors:
            </p>
          </div>

          {/* Executive Adaptation Table / Matrix */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mb-10">
            {/* Table Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50/90 border-b border-slate-200/80 px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-500">
              <div className="md:col-span-4">Business Factor</div>
              <div className="md:col-span-8 mt-1 md:mt-0">How DMDY Adapts</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100">
              {approachFactors.map((item, index) => {
                const FactorIcon = item.icon;
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-12 px-6 py-4 sm:py-5 items-center hover:bg-slate-50/70 transition-colors group"
                  >
                    {/* Column 1: Business Factor */}
                    <div className="md:col-span-4 flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                        style={{ backgroundColor: `${item.color}15`, color: item.color }}
                      >
                        <FactorIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Factor 0{index + 1}
                        </div>
                        <div className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#00AED6] transition-colors">
                          {item.factor}
                        </div>
                      </div>
                    </div>

                    {/* Column 2: How DMDY Adapts */}
                    <div className="md:col-span-8 mt-2.5 md:mt-0 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {item.adaptation}
                        </span>
                      </div>
                      <span className="hidden sm:inline-flex text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-cyan-50 group-hover:text-[#00AED6] transition-colors">
                        Tailored
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHY DMDY WORKS ACROSS INDUSTRIES               */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-15 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" /> The DMDY Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why DMDY Works{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Across Industries
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 font-normal leading-relaxed">
              We eliminate agency bloat and cookie-cutter packages. Our agile framework aligns directly with your commercial needs, budget, and growth velocity.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDmdyPillars.map((item, index) => {
              const PillarIcon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon & Step Counter */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                        style={{ backgroundColor: `${item.color}15`, color: item.color }}
                      >
                        <PillarIcon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-extrabold text-slate-200 group-hover:text-slate-300 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2.5 tracking-tight group-hover:text-[#00AED6] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle Accent Bottom Indicator */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Built Around You</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: NOT SURE WHICH STRATEGY FITS YOU? (LAST SECTION)*/}
      {/* ========================================================= */}
      <section className="py-10 sm:py-14 bg-white relative overflow-hidden text-center">
        {/* Subtle Ambient Background Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#00AED6_0%,#E6007A_25%,transparent_70%)] opacity-5 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
            Not Sure Which Strategy Fits You?
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
            Let's Build Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Industry Growth Plan
            </span>
          </h2>

          {/* Subheading / Lead Context */}
          <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed max-w-2xl mx-auto mb-2">
            Whether you're launching a startup, growing a local business, scaling an e-commerce brand, or building a luxury corporate identity, DMDY creates a digital roadmap tailored specifically to your industry.
          </p>

          {/* Secondary Context */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl mx-auto mb-6">
            Get a free consultation to discover the right combination of SEO, Paid Marketing, Social Media, Website Development, Content, and Branding for your business.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => openModal('Industry Strategy Call')}
              className="w-full sm:w-auto btn-primary"
            >
              <span>Get Free Strategy Call</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <a
              href="https://wa.me/919876543210?text=Hello%20DMDY%20Team%2C%20I%20would%20like%20to%20discuss%20our%20industry%20digital%20marketing%20growth."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-whatsapp"
            >
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span>WhatsApp DMDY</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Industries;
