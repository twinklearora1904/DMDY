import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import SEO from '../components/SEO';
import api from '../utils/api';
import SITE_CONFIG from '../config/siteConfig';
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Layers,
  Zap,
  ShieldCheck,
  X,
  Clock,
  Lock,
  Search,
  Share2,
  TrendingUp,
  Globe,
  PenTool,
  Palette,
  Target,
  Building2,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Utensils,
  Briefcase,
  Rocket,
  Sliders
} from 'lucide-react';

const serviceOptions = [
  'Complete 360° Digital Marketing',
  'Search Engine Optimization (SEO)',
  'Website Design & Development',
  'Social Media Marketing',
  'Google Ads & PPC Management',
  'Paid Marketing (360° Paid Media)',
  'Content Creation & Marketing',
  'Graphic Designing & Video Editing',
  'E-commerce & Lead Generation',
  'Other / Custom Consultation'
];

const ecosystemItems = [
  {
    step: '01',
    hook: 'Be Found',
    title: 'SEO • AEO • GEO',
    badges: ['Google Search', 'AI Overviews', 'Perplexity & Maps'],
    desc: 'Get discovered where your customers search — from Google to emerging AI-powered search experiences.',
    cta: 'Explore SEO',
    link: '/services/seo',
    icon: Search,
    color: '#00AED6',
    accentBorder: 'border-l-[#00AED6]',
    textColor: 'text-[#00AED6]',
    bgLight: 'bg-cyan-50/80',
    borderLight: 'border-cyan-200/80',
    glowColor: 'bg-cyan-200/40',
    widget: {
      type: 'search',
      title: 'Customer Query Discovery',
      tags: ['Google Search #1', 'AI Overviews', 'Perplexity & Maps']
    }
  },
  {
    step: '02',
    hook: 'Be Remembered',
    title: 'Social Media Marketing',
    badges: ['Community Growth', 'Viral Reach', 'Brand Recall'],
    desc: 'Build presence, community and meaningful brand interactions across social platforms.',
    cta: 'Explore Social Media',
    link: '/services/social-media',
    icon: Share2,
    color: '#E6007A',
    accentBorder: 'border-l-[#E6007A]',
    textColor: 'text-[#E6007A]',
    bgLight: 'bg-pink-50/80',
    borderLight: 'border-pink-200/80',
    glowColor: 'bg-pink-200/40',
    widget: {
      type: 'social',
      title: 'Active Brand Presence & Community',
      badge: 'Multi-Platform Sync'
    }
  },
  {
    step: '03',
    hook: 'Be Seen',
    title: 'Paid Marketing',
    badges: ['Google Ads', 'Meta Ads', 'YouTube', 'Remarketing', 'Email'],
    desc: 'Put your brand in front of the right audience and turn attention into action.',
    cta: 'Explore Paid Marketing',
    link: '/services/paid-marketing',
    icon: TrendingUp,
    color: '#F5A623',
    accentBorder: 'border-l-[#F5A623]',
    textColor: 'text-[#F5A623]',
    bgLight: 'bg-amber-50/80',
    borderLight: 'border-amber-200/80',
    glowColor: 'bg-amber-200/40',
    widget: {
      type: 'paid',
      title: 'High-Converting Channels',
      channels: ['Google Ads', 'Meta Ads', 'YouTube', 'Remarketing', 'Email']
    }
  },
  {
    step: '04',
    hook: 'Be Experienced',
    title: 'Website Design & Development',
    badges: ['Modern UI/UX', 'Mobile Responsive', 'High Conversion'],
    desc: 'Create a digital home that looks premium, performs seamlessly and is built to convert.',
    cta: 'Explore Websites',
    link: '/services/web-development',
    icon: Globe,
    color: '#00AED6',
    accentBorder: 'border-l-[#00AED6]',
    textColor: 'text-[#00AED6]',
    bgLight: 'bg-cyan-50/80',
    borderLight: 'border-cyan-200/80',
    glowColor: 'bg-cyan-200/40',
    widget: {
      type: 'web',
      domain: 'yourbrand.com',
      badge: 'Built to Convert',
      speed: '99% Core Web Vitals'
    }
  },
  {
    step: '05',
    hook: 'Be Heard',
    title: 'Content Creation & Marketing',
    badges: ['Brand Narratives', 'Copywriting', 'SEO Articles'],
    desc: 'Words, stories, campaigns and content designed to educate, engage and move people.',
    cta: 'Explore Content',
    link: '/services/content-marketing',
    icon: PenTool,
    color: '#E6007A',
    accentBorder: 'border-l-[#E6007A]',
    textColor: 'text-[#E6007A]',
    bgLight: 'bg-pink-50/80',
    borderLight: 'border-pink-200/80',
    glowColor: 'bg-pink-200/40',
    widget: {
      type: 'content',
      title: 'Words, Stories & Strategic Campaigns',
      badge: 'Strategic Copy'
    }
  },
  {
    step: '06',
    hook: 'Be Recognized',
    title: 'Graphic Design & Video Editing',
    badges: ['Visual Identity', 'Reels & Motion', 'Ad Creatives'],
    desc: 'Visual identities, social creatives, Reels, videos, motion and campaigns that make your brand stand apart.',
    cta: 'Explore Creative',
    link: '/services/graphic-design',
    icon: Palette,
    color: '#F5A623',
    accentBorder: 'border-l-[#F5A623]',
    textColor: 'text-[#F5A623]',
    bgLight: 'bg-amber-50/80',
    borderLight: 'border-amber-200/80',
    glowColor: 'bg-amber-200/40',
    widget: {
      type: 'creative',
      title: 'Visual Identities, Reels, Videos & Motion'
    }
  }
];

const processSteps = [
  {
    step: '01',
    name: 'DISCOVER',
    desc: 'Understand your business, industry, customers, competitors and objectives.',
    icon: Search,
    color: 'text-[#00AED6]',
    borderTop: 'border-t-[#00AED6]',
    bg: 'bg-cyan-50/80',
    border: 'border-cyan-200/80',
    badge: 'bg-cyan-50 text-[#00AED6] border-cyan-200/80'
  },
  {
    step: '02',
    name: 'DESIGN',
    desc: 'Create a customized digital roadmap based on what your business actually requires.',
    icon: Layers,
    color: 'text-[#E6007A]',
    borderTop: 'border-t-[#E6007A]',
    bg: 'bg-pink-50/80',
    border: 'border-pink-200/80',
    badge: 'bg-pink-50 text-[#E6007A] border-pink-200/80'
  },
  {
    step: '03',
    name: 'DELIVER',
    desc: 'Execute through the right combination of strategy, creative, technology and marketing.',
    icon: Zap,
    color: 'text-[#F5A623]',
    borderTop: 'border-t-[#F5A623]',
    bg: 'bg-amber-50/80',
    border: 'border-amber-200/80',
    badge: 'bg-amber-50 text-[#F5A623] border-amber-200/80'
  },
  {
    step: '04',
    name: 'DEVELOP',
    desc: 'Analyze, optimize and continuously evolve your digital presence.',
    icon: TrendingUp,
    color: 'text-emerald-600',
    borderTop: 'border-t-emerald-500',
    bg: 'bg-emerald-50/80',
    border: 'border-emerald-200/80',
    badge: 'bg-emerald-50 text-emerald-600 border-emerald-200/80'
  }
];

const goalDirections = [
  {
    id: 'visibility',
    goal: 'I Need More Visibility',
    direction: 'SEO + AEO + GEO + Content + Social',
    pills: ['SEO', 'AEO', 'GEO', 'Content', 'Social'],
    accentColor: '#00AED6',
    tag: 'Discoverability'
  },
  {
    id: 'leads',
    goal: 'I Need More Leads',
    direction: 'Google Ads + Meta Ads + SEO + Landing Pages',
    pills: ['Google Ads', 'Meta Ads', 'SEO', 'Landing Pages'],
    accentColor: '#E6007A',
    tag: 'Lead Acquisition'
  },
  {
    id: 'sales',
    goal: 'I Need More Online Sales',
    direction: 'Paid Marketing + E-commerce + Creative + Conversion',
    pills: ['Paid Marketing', 'E-commerce', 'Creative', 'Conversion'],
    accentColor: '#F5A623',
    tag: 'E-commerce & ROAS'
  },
  {
    id: 'brand',
    goal: 'I Need To Build My Brand',
    direction: 'Branding + Website + Social + Content + Creative',
    pills: ['Branding', 'Website', 'Social', 'Content', 'Creative'],
    accentColor: '#E6007A',
    tag: 'Brand Identity'
  },
  {
    id: 'scratch',
    goal: 'I Need Everything From Scratch',
    direction: 'Complete 360° Digital Marketing',
    pills: ['Complete 360° Digital Marketing'],
    accentColor: '#00AED6',
    tag: 'Full 360° Foundation'
  },
  {
    id: 'custom',
    goal: "I Don't Know What I Need Yet",
    direction: "Let's Figure It Out Together.",
    pills: ["Let's Figure It Out Together."],
    accentColor: '#F5A623',
    tag: 'Free Discovery Session'
  }
];

const promiseItems = [
  {
    num: '01',
    title: 'Relevance',
    desc: 'The right service for your business.',
    icon: Target,
    accent: '#00AED6'
  },
  {
    num: '02',
    title: 'Clarity',
    desc: 'A strategy you can actually understand.',
    icon: Sparkles,
    accent: '#E6007A'
  },
  {
    num: '03',
    title: 'Flexibility',
    desc: 'A model that can adapt as you grow.',
    icon: Sliders,
    accent: '#F5A623'
  },
  {
    num: '04',
    title: 'Consistency',
    desc: 'One connected digital presence.',
    icon: Layers,
    accent: '#00AED6'
  },
  {
    num: '05',
    title: 'Growth',
    desc: 'Continuous improvement instead of one-time execution.',
    icon: TrendingUp,
    accent: '#00C48C'
  }
];

const Home = () => {
  const { openModal } = useContactModal();
  const navigate = useNavigate();
  const [activeEcosystemTab, setActiveEcosystemTab] = useState(0);
  const [selectedGoalIdx, setSelectedGoalIdx] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Complete 360° Digital Marketing',
    message: '',
    website: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', msg: '' });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    document.title = 'DMDY — 360° Digital Growth Partner & Performance Marketing Agency';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormStatus({ type: '', msg: '' });

    let normalizedWebsite = (formData.website || '').trim();
    if (normalizedWebsite && !/^https?:\/\//i.test(normalizedWebsite)) {
      normalizedWebsite = `https://${normalizedWebsite}`;
    }

    const payload = {
      ...formData,
      website: normalizedWebsite,
    };

    try {
      await api.post('/api/leads', payload);
      const submittedName = formData.name;
      const submittedEmail = formData.email;
      const submittedService = formData.service;

      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: 'Complete 360° Digital Marketing',
        message: '',
        website: ''
      });

      navigate('/thank-you', {
        state: {
          name: submittedName,
          email: submittedEmail,
          service: submittedService,
        },
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        msg: error.response?.data?.errors?.[0]?.msg ||
          error.response?.data?.message ||
          'Something went wrong. Please check your details and try again.'
      });
    } finally {
      setFormLoading(false);
    }
  };

  const servicePills = [
    { name: 'SEO', color: 'text-[#00AED6] bg-cyan-50/80 border-cyan-200/80' },
    { name: 'AEO', color: 'text-[#00AED6] bg-cyan-50/80 border-cyan-200/80' },
    { name: 'GEO', color: 'text-[#00AED6] bg-cyan-50/80 border-cyan-200/80' },
    { name: 'Social Media', color: 'text-[#E6007A] bg-pink-50/80 border-pink-200/80' },
    { name: 'Paid Marketing', color: 'text-[#00AED6] bg-cyan-50/80 border-cyan-200/80' },
    { name: 'Websites', color: 'text-[#F5A623] bg-amber-50/80 border-amber-200/80' },
    { name: 'Content', color: 'text-[#E6007A] bg-pink-50/80 border-pink-200/80' },
    { name: 'Creative', color: 'text-[#F5A623] bg-amber-50/80 border-amber-200/80' },
  ];

  return (
    <div className="bg-slate-50 font-sans min-h-screen">
      <SEO
        title="DMDY — 360° Digital Growth Partner & Performance Marketing Agency"
        description="DMDY builds custom digital growth engines for ambitious brands through data-backed SEO, high-ROAS performance ads, web development, and conversion rate optimization."
        url="https://dmdy.in/"
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white border-b border-slate-200/80 relative overflow-hidden">

        {/* Ambient Subtle Background Glows matching DMDY Brand Colors */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_25%,transparent_70%)] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>

        {/* Navbar Aligned Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (7 cols): User-Provided Hero Content */}
            <div className="lg:col-span-7">

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00AED6] animate-pulse"></span>
                <span>Digital Marketing. Designed Around You.</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                Your Business Isn't Generic.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Your Marketing Shouldn't Be Either.
                </span>
              </h1>

              {/* Subheading / Description Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                360° Digital Marketing Services tailored to your industry, audience, goals and budget — from strategy to execution, all under one roof.
              </p>

              {/* Scope Tags / Service Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {servicePills.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${tag.color} shadow-2xs`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* Key Stats / Trust Indicators Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-200/80 mb-8 max-w-2xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">10+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Years Experience</div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A] tracking-tight">
                    15+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Clients &amp; Projects</div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F5A623] tracking-tight">10+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Specialist Team Strength</div>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#00AED6] shrink-0" />
                    <span>Worldwide</span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">India &bull; Delhi NCR</div>
                </div>
              </div>

              {/* Action Buttons (CTAs) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-4">
                <button
                  type="button"
                  onClick={() => openModal('Build My Digital Growth Plan')}
                  className="btn-primary w-full sm:w-auto"
                >
                  <span>Build My Digital Growth Plan</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY Team, I would like to build my digital growth plan.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp DMDY</span>
                </a>
              </div>

              {/* Small Supporting Line */}
              <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Premium digital thinking. Pocket-friendly execution. Built around what your business actually needs.</span>
              </p>

            </div>

            {/* Right Column (5 cols): Interactive 360° Growth Matrix Showcase */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">

              {/* Floating Top Badge */}
              <div className="absolute -top-8 -left-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Proven Track Record</div>
                  <div className="text-xs font-extrabold text-slate-900">10+ Years Experience</div>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -right-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <div className="w-7 h-7 rounded-xl bg-cyan-100 text-[#00AED6] flex items-center justify-center font-bold text-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Presence</div>
                  <div className="text-xs font-extrabold text-slate-900">India &bull; Delhi NCR &bull; Worldwide</div>
                </div>
              </div>

              {/* Ambient Glow behind Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00AED6]/25 via-[#E6007A]/20 to-[#F5A623]/20 rounded-3xl blur-2xl opacity-75 pointer-events-none"></div>

              {/* Main Ecosystem Visual Card */}
              <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-7 overflow-hidden text-left">

                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AED6] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00AED6]"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      360° Digital Growth Engine
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/70">
                    All Under One Roof
                  </span>
                </div>

                {/* 8 Disciplines Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {servicePills.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Metric Summary Strip */}
                <div className="p-3.5 rounded-2xl bg-slate-950 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#00AED6]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Execution Standard</div>
                      <div className="text-xs font-bold text-white">Built Around You</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    10+ Specialists
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 2: THE DMDY DIFFERENCE                            */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">

        {/* Ambient subtle background decorative blurs */}
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">


            {/* Left Column (5 cols): That's our difference Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100/50 to-pink-100/40 rounded-bl-full pointer-events-none"></div>

                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Our Philosophy
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">
                  That's our difference.
                </h3>

                {/* 3 Not Items */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Not cookie-cutter packages.</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Not unnecessary services.</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Not marketing for the sake of marketing.</span>
                  </div>
                </div>

                {/* Positive Resolution Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 text-white shadow-md relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#00AED6]/20 rounded-full blur-xl pointer-events-none"></div>
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base font-bold text-white leading-snug">
                      Just the right digital efforts, built around your business.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column (7 cols): The DMDY Approach */}
            <div className="lg:col-span-7 space-y-6">

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-700 uppercase tracking-widest shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>THE DMDY DIFFERENCE</span>
              </div>

              {/* Section H2 */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                One Business. One Strategy.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  One Digital Ecosystem.
                </span>
              </h2>

              {/* Subheading / Punchline */}
              <p className="text-base sm:text-lg font-bold text-slate-900">
                Your business doesn't need more marketing.{' '}
                <span className="text-[#00AED6]">It needs the right marketing.</span>
              </p>

              {/* Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                At DMDY, we don't believe in pushing every available digital service into a package.
              </p>

              {/* Understanding Sequence */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <span>We first understand your:</span>
                </div>

                {/* 6 Essential Factors Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { label: 'Business', num: '01' },
                    { label: 'Industry', num: '02' },
                    { label: 'Audience', num: '03' },
                    { label: 'Competition', num: '04' },
                    { label: 'Goals', num: '05' },
                    { label: 'Budget', num: '06' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between group hover:border-[#00AED6]/40 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{item.label}</span>
                      <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">
                        {item.num}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Visual Flow Chain */}
                <div className="mt-3 py-2.5 px-4 rounded-xl bg-white/80 border border-slate-200/80 text-xs text-slate-600 flex flex-wrap items-center gap-1.5 sm:gap-2 font-medium">
                  <span className="font-bold text-slate-900">Business</span>
                  <ArrowRight className="w-3 h-3 text-[#00AED6] shrink-0" />
                  <span className="font-bold text-slate-900">Industry</span>
                  <ArrowRight className="w-3 h-3 text-[#00AED6] shrink-0" />
                  <span className="font-bold text-slate-900">Audience</span>
                  <ArrowRight className="w-3 h-3 text-[#00AED6] shrink-0" />
                  <span className="font-bold text-slate-900">Competition</span>
                  <ArrowRight className="w-3 h-3 text-[#00AED6] shrink-0" />
                  <span className="font-bold text-slate-900">Goals</span>
                  <ArrowRight className="w-3 h-3 text-[#00AED6] shrink-0" />
                  <span className="font-bold text-slate-900">Budget</span>
                </div>
              </div>

              {/* Ecosystem Callout */}
              <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200/70 text-sm font-semibold text-slate-800">
                Then we build the digital ecosystem around what actually makes sense for you.
              </div>

            </div>


          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 3: WHAT IS DMDY? & DIRECT STRATEGY FORM           */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">

        {/* Ambient subtle background decorative blurs */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -right-40 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Column (7 cols): What is DMDY? & Approach */}
            <div className="lg:col-span-7 space-y-6 text-left">

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-bold text-slate-700 uppercase tracking-widest shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>WHAT IS DMDY?</span>
                <span className="text-slate-300">•</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A] font-extrabold">Digi Me. Digi You.</span>
              </div>

              {/* Section H2 */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                A 360° Digital Marketing Initiative{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Built Around Your Growth.
                </span>
              </h2>

              {/* Core Philosophy Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  <strong className="text-slate-900 font-bold">DMDY is a full-service digital marketing initiative created around one simple idea:</strong>{' '}
                  Digital marketing should be accessible, strategic and customized — not complicated or unnecessarily expensive.
                </p>

                <p>
                  From building your digital identity to bringing people to your website, generating leads, nurturing customers and scaling what works — DMDY brings the right combination of digital expertise together.
                </p>
              </div>

              {/* Our Approach Section */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                  <span>Our approach</span>
                </div>

                {/* 4 Approach Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 border-l-4 border-l-[#00AED6] shadow-xs hover:bg-white hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-extrabold text-slate-900">Understand.</span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border text-[#00AED6] bg-cyan-50 border-cyan-200/80 font-mono">
                        01
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      We learn your business.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 border-l-4 border-l-[#E6007A] shadow-xs hover:bg-white hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-extrabold text-slate-900">Strategize.</span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border text-[#E6007A] bg-pink-50 border-pink-200/80 font-mono">
                        02
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      We identify what your business actually needs.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 border-l-4 border-l-[#F5A623] shadow-xs hover:bg-white hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-extrabold text-slate-900">Create.</span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border text-[#F5A623] bg-amber-50 border-amber-200/80 font-mono">
                        03
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      We build the assets, campaigns and experiences.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 border-l-4 border-l-emerald-500 shadow-xs hover:bg-white hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-extrabold text-slate-900">Grow.</span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border text-emerald-600 bg-emerald-50 border-emerald-200/80 font-mono">
                        04
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      We optimize, measure and evolve.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Strategy & Consultation Lead Form */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-white to-slate-50/90 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-7 relative overflow-hidden text-left">

                {/* Header of Form */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                      <span>Direct Strategy Inquiry</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Get Your Free Strategy Call
                    </h3>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700">
                    <Clock className="w-3 h-3" />
                    <span>&lt; 2h Response</span>
                  </div>
                </div>

                {/* Status Alert if error */}
                {formStatus.msg && (
                  <div className={`p-3.5 mb-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center ${formStatus.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}>
                    {formStatus.msg}
                  </div>
                )}

                {/* Form fields */}
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full bg-white border border-slate-200/90 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                        placeholder="e.g. Atul Rathaur"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Business / Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        className="w-full bg-white border border-slate-200/90 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                        placeholder="e.g. Acme Brands"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full bg-white border border-slate-200/90 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-white border border-slate-200/90 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Service / Need *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      className="w-full bg-white border border-slate-200/90 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Project Goals / Message
                    </label>
                    <textarea
                      rows="2"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all resize-none"
                      placeholder="Briefly describe what you're looking to achieve..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {formLoading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Get Free Strategy Call</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Trust indicator footer */}
                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-600" /> 100% Confidential
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#00AED6]" /> No Obligation
                    </span>
                  </div>
                </form>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 4: THE 360° ECOSYSTEM (COMPACT INTERACTIVE SPLIT) */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">

        {/* Ambient subtle background decorative blurs */}
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
            <span>THE 360° ECOSYSTEM</span>
          </div>

          {/* Section H2 */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 sm:mb-10">
            Everything Digital.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Connected.
            </span>
          </h2>

          {/* Interactive Split Showcase (Left: 6 Capability Tabs | Right: Dynamic Live Preview) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch text-left">


            {/* Left Column: Dynamic Live Preview Display Screen (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              {(() => {
                const active = ecosystemItems[activeEcosystemTab];
                const ActiveIcon = active.icon;
                return (
                  <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/40 p-5 sm:p-6 flex flex-col justify-between overflow-hidden h-full">
                    {/* Dynamic ambient corner blur */}
                    <div className={`absolute top-0 right-0 w-64 h-64 ${active.glowColor} rounded-bl-full blur-3xl opacity-50 pointer-events-none transition-all duration-300`}></div>

                    <div className="relative z-10">
                      {/* Top Bar of Active Showcase */}
                      <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100">
                        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200/80 text-[11px] font-bold text-slate-700 uppercase tracking-wider font-mono">
                          <span className={active.textColor}>{active.step}</span>
                          <span>—</span>
                          <span>{active.hook}</span>
                        </div>
                        <div className={`w-9 h-9 rounded-xl ${active.bgLight} ${active.textColor} flex items-center justify-center border ${active.borderLight} shadow-2xs`}>
                          <ActiveIcon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                        {active.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                        {active.desc}
                      </p>

                      {/* Interactive Preview Widget */}
                      {active.widget.type === 'search' && (
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 mb-4">
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-semibold mb-2">
                            <Search className="w-3 h-3 text-[#00AED6]" />
                            <span>Customer Search Discovery</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-800 shadow-2xs">
                              Google Search #1
                            </span>
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-cyan-100 text-[#00AED6] border border-cyan-200">
                              AI Overviews
                            </span>
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-800 shadow-2xs">
                              Perplexity & Maps
                            </span>
                          </div>
                        </div>
                      )}

                      {active.widget.type === 'social' && (
                        <div className="p-3 rounded-xl bg-pink-50/60 border border-pink-100 mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#E6007A] animate-ping"></div>
                            <span className="text-xs font-bold text-slate-800">Active Brand Presence & Community</span>
                          </div>
                          <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-white text-[#E6007A] border border-pink-200 shadow-2xs">
                            Multi-Platform Sync
                          </span>
                        </div>
                      )}

                      {active.widget.type === 'paid' && (
                        <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/80 mb-4">
                          <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                            High-Converting Channels
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {active.widget.channels.map((ch, i) => (
                              <span key={i} className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-white text-[#F5A623] border border-amber-200 shadow-2xs">
                                {ch}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {active.widget.type === 'web' && (
                        <div className="p-3 rounded-xl bg-slate-950 text-white border border-slate-800 shadow-md mb-4">
                          <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2 text-[11px]">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="font-mono text-slate-400 ml-1.5">yourbrand.com</span>
                            </div>
                            <span className="font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px]">
                              Built to Convert
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-slate-300">
                            <span>99% Core Web Vitals • Mobile-First</span>
                            <span className="font-bold text-[#00AED6]">Seamless UX</span>
                          </div>
                        </div>
                      )}

                      {active.widget.type === 'content' && (
                        <div className="p-3 rounded-xl bg-pink-50/60 border border-pink-100 mb-4 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Narrative Impact</div>
                            <div className="text-xs font-extrabold text-slate-900">Words, Stories & Strategic Campaigns</div>
                          </div>
                          <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-white text-[#E6007A] border border-pink-200 shadow-2xs">
                            High Retention
                          </span>
                        </div>
                      )}

                      {active.widget.type === 'creative' && (
                        <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100 mb-4 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Studio Craft</div>
                            <div className="text-xs font-extrabold text-slate-900">Visual Identities, Reels, Videos & Motion</div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#00AED6]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#E6007A]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#F5A623]"></div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-3 border-t border-slate-100 relative z-10 flex items-center justify-between mt-auto">
                      <Link
                        to={active.link}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-sm hover:shadow-md transition-all group"
                      >
                        <span>{active.cta}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                      <span className="text-[11px] text-slate-400 font-semibold hidden sm:inline">
                        Part of DMDY 360° Ecosystem
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>
            {/* Right Column: 6 Interactive Capability Tabs (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-1.5 sm:space-y-2">
              {ecosystemItems.map((item, idx) => {
                const isActive = activeEcosystemTab === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveEcosystemTab(idx)}
                    onMouseEnter={() => setActiveEcosystemTab(idx)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer border ${isActive
                      ? 'bg-white shadow-md shadow-slate-200/50 border-slate-200/90 border-l-4 ' + item.accentBorder
                      : 'bg-white/50 border-slate-200/60 hover:bg-white hover:border-slate-300'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className={`text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md transition-colors ${isActive
                        ? item.bgLight + ' ' + item.textColor + ' border ' + item.borderLight
                        : 'bg-slate-100 text-slate-500'
                        }`}>
                        {item.step}
                      </span>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                          {item.hook}
                        </div>
                        <div className={`text-xs sm:text-sm font-extrabold tracking-tight transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                          }`}>
                          {item.title}
                        </div>
                      </div>
                    </div>

                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${isActive
                      ? item.bgLight + ' ' + item.textColor
                      : 'text-slate-300 group-hover:text-slate-600'
                      }`}>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? 'translate-x-0.5' : ''
                        }`} />
                    </div>
                  </button>
                );
              })}
            </div>


          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 5: HOW WE WORK (DISCOVER • DESIGN • DELIVER...)   */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">

        {/* Ambient subtle background decorative blurs */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -right-40 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-bold text-slate-700 uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
            <span>HOW WE WORK</span>
          </div>

          {/* Section H2 */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            We Don't Start With a Service.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              We Start With Your Business.
            </span>
          </h2>

          {/* Flow Indicator Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 py-2 px-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-extrabold text-slate-700 mb-12 sm:mb-16">
            <span className="text-[#00AED6]">Discover</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#E6007A]">Design</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F5A623]">Deliver</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-emerald-600">Develop</span>
          </div>

          {/* 4 Process Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative text-left">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`group relative bg-slate-50/80 rounded-3xl border border-slate-200/90 border-t-4 ${step.borderTop} p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full border ${step.badge} font-mono`}>
                      STEP {step.step}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center border ${step.border} group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight mb-2.5">
                    {step.step} — {step.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-xs items-center justify-center text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5 text-[#00AED6]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Strategic Directive Banner */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-br from-[#00AED6]/20 via-[#E6007A]/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="flex items-start gap-3.5 pb-4 md:pb-0 md:pr-6">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#00AED6] shrink-0 border border-white/10 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Requirement First</div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-white leading-snug">
                    Your requirements determine the strategy.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:px-6">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#E6007A] shrink-0 border border-white/10 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Strategy First</div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-white leading-snug">
                    Your strategy determines the services.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-6">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#F5A623] shrink-0 border border-white/10 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Goal First</div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-white leading-snug">
                    Your goals determine the direction.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 6: WHY DMDY? (MINIMALIST EDITORIAL LIST)          */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">

        {/* Ambient subtle background decorative blurs */}
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
            <span>WHY DMDY?</span>
          </div>

          {/* Section H2 */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto mb-10 sm:mb-12">
            Because Digital Marketing Should Fit Your Business —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Not the Other Way Around.
            </span>
          </h2>

          {/* Minimalist Editorial List (Clean horizontal dividers, no card boxes) */}
          <div className="border-y border-slate-200/90 divide-y divide-slate-200/90 text-left">

            {/* ITEM 01: Requirement-First Marketing */}
            <div className="py-6 sm:py-7 group hover:bg-white/60 transition-colors duration-200 px-2 sm:px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                <div className="lg:col-span-4 flex items-start gap-3.5">
                  <span className="font-mono text-xs sm:text-sm font-black text-[#00AED6] px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200/80 shrink-0">
                    01
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Requirement-First Marketing
                    </h3>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Strategy Foundation
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-2">
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    We don't begin with <em>"Which package would you like?"</em>
                  </p>
                  <div className="inline-flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm font-bold text-slate-900">
                    <span className="text-slate-400 font-normal">We begin with:</span>
                    <span className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-[#00AED6]">
                      "What does your business actually need?"
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 02: 360° Capability */}
            <div className="py-6 sm:py-7 group hover:bg-white/60 transition-colors duration-200 px-2 sm:px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                <div className="lg:col-span-4 flex items-start gap-3.5">
                  <span className="font-mono text-xs sm:text-sm font-black text-[#E6007A] px-2.5 py-1 rounded-md bg-pink-50 border border-pink-200/80 shrink-0">
                    02
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      360° Capability
                    </h3>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Connected Ecosystem
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-2.5">
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    Strategy, SEO, social, paid marketing, websites, content, design and video — connected through one digital vision.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {['Strategy', 'SEO', 'Social', 'Paid Marketing', 'Websites', 'Content', 'Design', 'Video'].map((tag, i) => (
                      <span key={i} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 03: Pocket-Friendly by Philosophy */}
            <div className="py-6 sm:py-7 group hover:bg-white/60 transition-colors duration-200 px-2 sm:px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                <div className="lg:col-span-4 flex items-start gap-3.5">
                  <span className="font-mono text-xs sm:text-sm font-black text-[#F5A623] px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200/80 shrink-0">
                    03
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Pocket-Friendly by Philosophy
                    </h3>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Accessible Pricing
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-1.5">
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    DMDY was created with a simple premise:
                  </p>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-slate-900 leading-snug">
                    High-quality digital marketing shouldn't automatically mean unnecessarily high costs.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 04: Flexible Team Strength */}
            <div className="py-6 sm:py-7 group hover:bg-white/60 transition-colors duration-200 px-2 sm:px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                <div className="lg:col-span-4 flex items-start gap-3.5">
                  <span className="font-mono text-xs sm:text-sm font-black text-[#00AED6] px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200/80 shrink-0">
                    04
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Flexible Team Strength
                    </h3>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Dynamic Scaling
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-2">
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    Our specialist team can scale according to the requirements and complexity of the project.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-bold text-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>10+ freelancing team strength available according to project demand.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 05: Industry-Led Thinking */}
            <div className="py-6 sm:py-7 group hover:bg-white/60 transition-colors duration-200 px-2 sm:px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                <div className="lg:col-span-4 flex items-start gap-3.5">
                  <span className="font-mono text-xs sm:text-sm font-black text-[#E6007A] px-2.5 py-1 rounded-md bg-pink-50 border border-pink-200/80 shrink-0">
                    05
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Industry-Led Thinking
                    </h3>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Context Specific
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600 font-medium">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200/80">
                      • Real estate doesn't market like e-commerce.
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200/80">
                      • A clinic doesn't communicate like a startup.
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200/80">
                      • A B2B company doesn't acquire customers like a restaurant.
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold text-[#E6007A] pt-0.5">
                    Your industry changes the strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 06: Human + Digital */}
            <div className="py-6 sm:py-7 group hover:bg-white/60 transition-colors duration-200 px-2 sm:px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                <div className="lg:col-span-4 flex items-start gap-3.5">
                  <span className="font-mono text-xs sm:text-sm font-black text-[#F5A623] px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200/80 shrink-0">
                    06
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Human + Digital
                    </h3>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Balanced Approach
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-2">
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    Technology can amplify marketing. But understanding the business behind the technology is what makes the strategy meaningful.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 pt-0.5">
                    <span className="font-bold text-slate-800">Tech Efficiency</span>
                    <span>•</span>
                    <span className="font-bold text-slate-800">Human Strategy</span>
                    <span>•</span>
                    <span className="font-bold text-[#F5A623]">Best of Both</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 7: BUILT FROM EXPERIENCE. DESIGNED FOR WHAT NEXT. */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden">

        {/* Ambient subtle background decorative blurs */}
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -right-40 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
            <span>CREDIBILITY & SCALE</span>
          </div>

          {/* Section H2 */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto mb-8 sm:mb-10">
            Built From Experience.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Designed For What Comes Next.
            </span>
          </h2>

          {/* Minimalist 4-Metric Divider Strip (Zero card boxes, pure editorial typography) */}
          <div className="border-y border-slate-200/90 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/90 grid grid-cols-2 lg:grid-cols-4 my-6 sm:my-8 text-center">

            {/* Metric 1 */}
            <div className="py-6 sm:py-8 px-4 group hover:bg-slate-50/50 transition-colors">
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-1.5">
                10<span className="text-[#00AED6] font-bold">+</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                Years in the working field
              </div>
            </div>

            {/* Metric 2 */}
            <div className="py-6 sm:py-8 px-4 group hover:bg-slate-50/50 transition-colors">
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-1.5">
                15<span className="text-[#E6007A] font-bold">+</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                Clients & Projects
              </div>
            </div>

            {/* Metric 3 */}
            <div className="py-6 sm:py-8 px-4 group hover:bg-slate-50/50 transition-colors">
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-1.5">
                10<span className="text-[#F5A623] font-bold">+</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                Specialist Team Strength
              </div>
            </div>

            {/* Metric 4 */}
            <div className="py-6 sm:py-8 px-4 group hover:bg-slate-50/50 transition-colors">
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-1.5">
                360<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">°</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                Digital Marketing Capability
              </div>
            </div>

          </div>

          {/* Strategic Closing Subhead Banner (Sleek, integrated, compact) */}
          <div className="mt-8 sm:mt-10 max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-slate-950 text-white shadow-lg relative overflow-hidden text-center border border-slate-800/80">
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-to-br from-[#00AED6]/20 via-[#E6007A]/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-1.5">
              <p className="text-xs sm:text-sm font-semibold text-slate-400">
                From individual digital requirements to complete digital ecosystems —
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-relaxed">
                DMDY adapts according to the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  scale, stage and ambition
                </span>{' '}
                of your business.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 8: INDUSTRIES — YOUR INDUSTRY. OUR STRATEGY.       */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">

        {/* Ambient subtle background decorative blurs */}
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
            <span>INDUSTRIES</span>
          </div>

          {/* Section H2 */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 sm:mb-10">
            Your Industry.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Our Strategy.
            </span>
          </h2>

          {/* Minimalist 2-Column Editorial Grid (Divided rows, zero card boxes) */}
          <div className="border-y border-slate-200/90 divide-y divide-slate-200/90 text-left">

            {/* ROW 1: Real Estate & E-commerce */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/90 items-stretch">

              {/* Real Estate */}
              <div className="lg:col-span-6 p-4 sm:p-5 group hover:bg-white/60 transition-colors flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#00AED6] flex items-center justify-center border border-cyan-200/80 shrink-0 mt-0.5 shadow-2xs">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#00AED6] transition-colors mb-2">
                    Real Estate
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['Lead Generation', 'SEO', 'Paid Ads', 'Creative'].map((item, i) => (
                      <span key={i} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* E-commerce & D2C */}
              <div className="lg:col-span-6 p-4 sm:p-5 group hover:bg-white/60 transition-colors flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-pink-50 text-[#E6007A] flex items-center justify-center border border-pink-200/80 shrink-0 mt-0.5 shadow-2xs">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#E6007A] transition-colors mb-2">
                    E-commerce & D2C
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['Performance Marketing', 'Content', 'SEO', 'Conversion'].map((item, i) => (
                      <span key={i} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* ROW 2: Healthcare & Education */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/90 items-stretch">

              {/* Healthcare & Wellness */}
              <div className="lg:col-span-6 p-4 sm:p-5 group hover:bg-white/60 transition-colors flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/80 shrink-0 mt-0.5 shadow-2xs">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                    Healthcare & Wellness
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['Local SEO', 'Content', 'Reputation', 'Lead Generation'].map((item, i) => (
                      <span key={i} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education & EdTech */}
              <div className="lg:col-span-6 p-4 sm:p-5 group hover:bg-white/60 transition-colors flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#F5A623] flex items-center justify-center border border-amber-200/80 shrink-0 mt-0.5 shadow-2xs">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#F5A623] transition-colors mb-2">
                    Education & EdTech
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['Admissions', 'Paid Marketing', 'Content', 'Lead Nurturing'].map((item, i) => (
                      <span key={i} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* ROW 3: Hospitality & B2B */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/90 items-stretch">

              {/* Hospitality & Restaurants */}
              <div className="lg:col-span-6 p-4 sm:p-5 group hover:bg-white/60 transition-colors flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-pink-50 text-[#E6007A] flex items-center justify-center border border-pink-200/80 shrink-0 mt-0.5 shadow-2xs">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#E6007A] transition-colors mb-2">
                    Hospitality & Restaurants
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['Social', 'Local SEO', 'Creative', 'Campaigns'].map((item, i) => (
                      <span key={i} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* B2B & Professional Services */}
              <div className="lg:col-span-6 p-4 sm:p-5 group hover:bg-white/60 transition-colors flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#00AED6] flex items-center justify-center border border-cyan-200/80 shrink-0 mt-0.5 shadow-2xs">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#00AED6] transition-colors mb-2">
                    B2B & Professional Services
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['SEO', 'LinkedIn', 'Lead Generation', 'Websites'].map((item, i) => (
                      <span key={i} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* ROW 4: Startups & And Beyond */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/90 items-stretch">

              {/* Startups & SMEs */}
              <div className="lg:col-span-6 p-4 sm:p-5 group hover:bg-white/60 transition-colors flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#F5A623] flex items-center justify-center border border-amber-200/80 shrink-0 mt-0.5 shadow-2xs">
                  <Rocket className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#F5A623] transition-colors mb-2">
                    Startups & SMEs
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['Branding', 'Website', 'SEO', 'Growth Marketing'].map((item, i) => (
                      <span key={i} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* And beyond. */}
              <div className="lg:col-span-6 p-4 sm:p-5 bg-gradient-to-br from-cyan-50/40 via-white to-pink-50/40 hover:bg-white transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00AED6] via-[#E6007A] to-[#F5A623] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                      And beyond.
                    </h3>
                    <p className="text-xs font-bold text-slate-800">
                      Don't see your industry?
                    </p>
                    <p className="text-xs text-slate-500">
                      That's exactly why we don't use one-size-fits-all marketing.
                    </p>
                  </div>
                </div>

                <Link
                  to="/industries"
                  className="self-start sm:self-center inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-sm hover:shadow-md transition-all shrink-0 group/btn"
                >
                  <span>Explore Industries</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 9: YOUR GOAL → OUR DIGITAL DIRECTION (RADIAL GRADIENT) */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200/80 relative overflow-hidden">

        {/* User-specified radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_25%,transparent_70%)] opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-2.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
            <span>YOUR GOAL → OUR DIGITAL DIRECTION</span>
          </div>

          {/* Section H2 */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5 sm:mb-6">
            Tell Us Where You{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Want To Go.
            </span>
          </h2>

          {/* Interactive Matcher Grid (Left: 6 Goals | Right: Dynamic Direction Console) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch text-left">

            {/* Left Column: 6 Goal Selectors (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-1.5 sm:space-y-2">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                Select Your Goal:
              </div>

              {goalDirections.map((item, idx) => {
                const isActive = selectedGoalIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGoalIdx(idx)}
                    onMouseEnter={() => setSelectedGoalIdx(idx)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer border ${isActive
                      ? 'bg-white shadow-md shadow-slate-200/60 border-slate-300 border-l-4 border-l-[#00AED6] text-slate-900'
                      : 'bg-white/80 border-slate-200/80 text-slate-700 hover:bg-white hover:text-slate-900 hover:border-slate-300 shadow-2xs'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 transition-transform ${isActive
                          ? 'scale-125 bg-gradient-to-r from-[#00AED6] to-[#E6007A]'
                          : 'bg-slate-300 group-hover:bg-slate-400'
                          }`}
                      ></span>
                      <span className={`text-xs sm:text-sm tracking-tight ${isActive ? 'font-extrabold text-slate-900' : 'font-semibold text-slate-700'
                        }`}>
                        {item.goal}
                      </span>
                    </div>

                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive
                        ? 'translate-x-0.5 opacity-100 text-[#00AED6]'
                        : 'opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0 text-slate-400'
                        }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Direction Console (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              {(() => {
                const active = goalDirections[selectedGoalIdx];
                return (
                  <div className="relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between overflow-hidden h-full shadow-lg shadow-slate-200/40 text-slate-900">
                    {/* Inner Ambient Glow */}
                    <div
                      className="absolute top-0 right-0 w-72 h-72 rounded-bl-full blur-3xl opacity-15 pointer-events-none transition-all duration-500"
                      style={{ backgroundColor: active.accentColor }}
                    ></div>

                    <div className="relative z-10">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          Our Digital Direction
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs">
                          {active.tag}
                        </span>
                      </div>

                      {/* Goal Title */}
                      <div className="text-[11px] text-slate-400 font-semibold mb-1">
                        When your objective is:
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                        "{active.goal}"
                      </h3>

                      {/* Direction Header */}
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2.5 font-bold">
                        We build & connect:
                      </div>

                      {/* Direction Formula Display */}
                      {active.pills.length > 1 ? (
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5">
                          {active.pills.map((pill, pIdx) => (
                            <React.Fragment key={pIdx}>
                              <span className="text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 shadow-2xs">
                                {pill}
                              </span>
                              {pIdx < active.pills.length - 1 && (
                                <span className="text-sm font-black text-slate-400">+</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs mb-5">
                          <div className="text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                            → {active.direction}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Bottom CTA Bar: Talk to DMDY */}
                    <div className="pt-4 border-t border-slate-100 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-auto">
                      <button
                        type="button"
                        onClick={openModal}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                      >
                        <span>Talk to DMDY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 10: THE DMDY PROMISE                              */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-14 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">

        {/* Ambient subtle background decorative blurs */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#E6007A]" />
            <span>THE DMDY PROMISE</span>
          </div>

          {/* Section H2 */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            No Unnecessary Marketing.{' '}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              No One-Size-Fits-All Strategy.
            </span>
          </h2>

          {/* Lead Paragraph */}
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto mb-2">
            We believe your marketing budget should work toward your business objectives.
          </p>

          {/* Subtitle / Connector */}
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6 sm:mb-8">
            So every DMDY strategy is built around:
          </p>

          {/* 5-Pillar Unified Divided Runway (No isolated cards - single integrated frame) */}
          <div className="border border-slate-200/90 rounded-xl bg-white/90 backdrop-blur-xs shadow-2xs overflow-hidden text-left divide-y sm:divide-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 lg:divide-x divide-slate-200/90">
            {promiseItems.map((item, idx) => (
              <div
                key={idx}
                className="relative p-4 sm:p-5 flex flex-col justify-between group hover:bg-slate-50/60 transition-all duration-200"
              >
                {/* Top Accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: item.accent }}
                ></div>

                <div>
                  {/* Top Meta: Index & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                      {item.num}
                    </span>
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xs"
                      style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight mb-1.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom subtle indicator */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accent }}></span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Pillar
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 11: FINAL CTA - YOUR BUSINESS HAS A STORY        */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-14 bg-white relative overflow-hidden">

        {/* User's signature radial gradient backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_25%,transparent_70%)] opacity-5 pointer-events-none"></div>

        {/* Ambient subtle blurs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gradient-to-r from-cyan-100/30 via-pink-100/20 to-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#00AED6]" />
            <span>Your Business Has a Story.</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Let's Build Its{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Digital Presence.
            </span>
          </h2>

          {/* Body Paragraph */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto mb-4">
            Whether you're starting from zero, looking for more leads, building an online brand or ready to scale — DMDY can build the digital strategy around you.
          </p>

          {/* Callout Strip */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 py-2 px-4 sm:px-5 rounded-xl bg-slate-50 border border-slate-200/80 mb-6 max-w-lg mx-auto text-center sm:text-left shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6007A] shrink-0"></span>
            <p className="text-xs font-semibold text-slate-700">
              <span className="text-slate-900 font-bold">Tell us what you're trying to achieve.</span>{' '}
              <span>We'll help you figure out what it takes to get there.</span>
            </p>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={openModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY Team, I would like to start a conversation about our digital marketing growth.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 shadow-xs hover:shadow-sm transition-all"
            >
              <svg className="w-3.5 h-3.5 text-[#00C48C]" fill="currentColor" viewBox="0 0 24 24">
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

export default Home;
