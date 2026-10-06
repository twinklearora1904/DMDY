import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../../context/ContactModalContext';
import SEO from '../../components/SEO';
import SITE_CONFIG from '../../config/siteConfig';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Search,
  Target,
  Code2,
  Share2,
  Layers,
  Zap,
  CheckCircle2,
  Activity,
  Globe,
  Mail,
  PenTool,
  Palette,
  X,
  Building2,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  Rocket,
  Briefcase,
  Compass,
  MessageCircle,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import realEstateImg from '../../assets/social-media/industry-real-estate.webp';
import ecommerceImg from '../../assets/social-media/industry-ecommerce.webp';
import healthcareImg from '../../assets/social-media/industry-healthcare.webp';
import educationImg from '../../assets/google-ads/industry-education.webp';
import hospitalityImg from '../../assets/social-media/industry-hospitality.webp';
import startupsImg from '../../assets/social-media/industry-startups.webp';
import aboutHeroGrowthImg from '../../assets/about_hero_growth.webp';

const ECOSYSTEM_PILLARS = {
  seo: {
    id: 'seo',
    title: 'SEO & AI Search',
    tagline: 'Organic Authority & Answer Engines',
    stat: '3.4x',
    statLabel: 'Organic Traffic Lift',
    channels: ['Google Organic', 'ChatGPT & Perplexity', 'Local SEO', 'Technical Audits'],
    color: '#00AED6',
    gradient: 'from-[#00AED6] to-[#0082a6]'
  },
  paid: {
    id: 'paid',
    title: 'Paid Advertising',
    tagline: 'High-Intent Multi-Channel Acquisition',
    stat: '5.8x',
    statLabel: 'Average ROAS Delivered',
    channels: ['Google Search & PMax', 'Meta Ads (Insta & FB)', 'YouTube Video Ads', 'Smart Retargeting'],
    color: '#E6007A',
    gradient: 'from-[#E6007A] to-[#b3005f]'
  },
  web: {
    id: 'web',
    title: 'Websites & Funnels',
    tagline: 'Conversion-Engineered Platforms',
    stat: '99/100',
    statLabel: 'Core Web Vitals Score',
    channels: ['Custom Web Development', 'Landing Page Sprints', 'CRO Optimization', 'Lead Capture Systems'],
    color: '#F5A623',
    gradient: 'from-[#F5A623] to-[#c77e0b]'
  },
  content: {
    id: 'content',
    title: 'Branding & Content',
    tagline: 'Storytelling That Builds Trust & Closes Deals',
    stat: '4.2x',
    statLabel: 'Engagement Multiplier',
    channels: ['SEO Content Engines', 'High-Converting Copy', 'Motion Graphics', 'Short-form Video & Reels'],
    color: '#00AED6',
    gradient: 'from-[#00AED6] to-[#E6007A]'
  },
  automation: {
    id: 'automation',
    title: 'Automation & CRM',
    tagline: 'Full-Funnel Lead Nurture & Retention',
    stat: '100%',
    statLabel: 'Full-Funnel Attribution',
    channels: ['WhatsApp Automation', 'Email Drip Sequences', 'CRM Pipeline Sync', 'Real-time Analytics Hub'],
    color: '#00A37A',
    gradient: 'from-[#00C48C] to-[#00A37A]'
  }
};

const CORE_SERVICES = [
  {
    title: 'SEO Services',
    desc: 'Google rankings, AEO, GEO & organic visibility.',
    path: '/services/seo',
    icon: Search,
    tag: 'Search Dominance',
    color: '#00AED6',
    hoverBorder: 'hover:border-[#00AED6]/60',
    hoverText: 'group-hover:text-[#00AED6]',
    iconBg: 'bg-cyan-50 text-[#00AED6]'
  },
  {
    title: 'Social Media Marketing',
    desc: 'Organic growth, content & community building.',
    path: '/services/social-media',
    icon: Share2,
    tag: 'Community Growth',
    color: '#E6007A',
    hoverBorder: 'hover:border-[#E6007A]/60',
    hoverText: 'group-hover:text-[#E6007A]',
    iconBg: 'bg-pink-50 text-[#E6007A]'
  },
  {
    title: 'Paid Marketing',
    desc: 'Google Ads, Meta Ads, YouTube & remarketing.',
    path: '/services/paid-marketing',
    icon: Target,
    tag: 'Targeted ROAS',
    color: '#00AED6',
    hoverBorder: 'hover:border-[#00AED6]/60',
    hoverText: 'group-hover:text-[#00AED6]',
    iconBg: 'bg-cyan-50 text-[#00AED6]'
  },
  {
    title: 'Website Design & Development',
    desc: 'Premium responsive websites built for conversion.',
    path: '/services/web-development',
    icon: Code2,
    tag: 'Conversion Engine',
    color: '#F5A623',
    hoverBorder: 'hover:border-[#F5A623]/60',
    hoverText: 'group-hover:text-amber-600',
    iconBg: 'bg-amber-50 text-[#F5A623]'
  },
  {
    title: 'Content Creation & Marketing',
    desc: 'SEO content, social creatives & brand storytelling.',
    path: '/services/content-marketing',
    icon: PenTool,
    tag: 'Brand Storytelling',
    color: '#E6007A',
    hoverBorder: 'hover:border-[#E6007A]/60',
    hoverText: 'group-hover:text-[#E6007A]',
    iconBg: 'bg-pink-50 text-[#E6007A]'
  },
  {
    title: 'Graphic Design & Video Editing',
    desc: 'Reels, ad creatives, motion graphics & visual branding.',
    path: '/services/graphic-designing-video-editing',
    icon: Palette,
    tag: 'Visual Branding',
    color: '#8B5CF6',
    hoverBorder: 'hover:border-purple-400',
    hoverText: 'group-hover:text-purple-600',
    iconBg: 'bg-purple-50 text-[#8B5CF6]'
  }
];

const COMPARISON_POINTS = [
  {
    traditional: 'Different vendors',
    dmdy: 'One strategic digital partner'
  },
  {
    traditional: 'Separate reporting',
    dmdy: 'Unified growth insights'
  },
  {
    traditional: 'Disconnected campaigns',
    dmdy: 'Integrated customer journey'
  },
  {
    traditional: 'Inconsistent branding',
    dmdy: 'Consistent premium identity'
  },
  {
    traditional: 'Multiple communication channels',
    dmdy: 'Single dedicated strategy'
  }
];

const INDUSTRIES_DATA = [
  {
    title: 'Real Estate',
    desc: 'SEO + Lead Generation + Paid Ads',
    image: realEstateImg,
    icon: Building2,
    color: '#00AED6',
    hoverBorder: 'hover:border-[#00AED6]/50',
    hoverText: 'group-hover:text-[#00AED6]'
  },
  {
    title: 'E-commerce',
    desc: 'Shopping Ads + Content + Conversion',
    image: ecommerceImg,
    icon: ShoppingBag,
    color: '#F5A623',
    hoverBorder: 'hover:border-[#F5A623]/50',
    hoverText: 'group-hover:text-amber-600'
  },
  {
    title: 'Healthcare',
    desc: 'Trust, visibility & patient acquisition',
    image: healthcareImg,
    icon: HeartPulse,
    color: '#00AED6',
    hoverBorder: 'hover:border-[#00AED6]/50',
    hoverText: 'group-hover:text-[#00AED6]'
  },
  {
    title: 'Education',
    desc: 'Student enquiries & admissions',
    image: educationImg,
    icon: GraduationCap,
    color: '#00AED6',
    hoverBorder: 'hover:border-[#00AED6]/50',
    hoverText: 'group-hover:text-[#00AED6]'
  },
  {
    title: 'Hospitality',
    desc: 'Local visibility & experience marketing',
    image: hospitalityImg,
    icon: UtensilsCrossed,
    color: '#E6007A',
    hoverBorder: 'hover:border-[#E6007A]/50',
    hoverText: 'group-hover:text-[#E6007A]'
  },
  {
    title: 'Startups & SMEs',
    desc: 'Complete digital launch & scalable growth',
    image: startupsImg,
    icon: Rocket,
    color: '#F5A623',
    hoverBorder: 'hover:border-[#F5A623]/50',
    hoverText: 'group-hover:text-amber-600'
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Business Discovery',
    desc: 'Goals, audience, competitors, niche & digital audit.',
    color: '#00AED6',
    hoverText: 'group-hover:text-[#00AED6]',
    badgeBg: 'bg-[#00AED6]/10 text-[#00AED6]'
  },
  {
    step: '02',
    title: 'Strategy Blueprint',
    desc: 'Choose the right combination of SEO, Ads, Content, Website & Branding.',
    color: '#E6007A',
    hoverText: 'group-hover:text-[#E6007A]',
    badgeBg: 'bg-[#E6007A]/10 text-[#E6007A]'
  },
  {
    step: '03',
    title: 'Creative & Execution',
    desc: 'Design, content, campaigns, development & launch.',
    color: '#F5A623',
    hoverText: 'group-hover:text-amber-600',
    badgeBg: 'bg-[#F5A623]/10 text-[#F5A623]'
  },
  {
    step: '04',
    title: 'Optimize & Scale',
    desc: 'Analytics, automation, reporting & continuous business growth.',
    color: '#00C48C',
    hoverText: 'group-hover:text-[#00C48C]',
    badgeBg: 'bg-[#00C48C]/10 text-[#00C48C]'
  }
];

const BUSINESS_STAGES = [
  {
    id: 'starting',
    stageNumber: '01',
    badge: 'Launch & Build',
    title: "I'm Starting My Business",
    subtitle: 'From ground zero to market credibility and organic discovery.',
    icon: Rocket,
    color: '#00AED6',
    borderClass: 'border-[#00AED6]',
    items: [
      { name: 'Website', icon: Globe },
      { name: 'Branding', icon: Palette },
      { name: 'SEO Foundation', icon: Search },
      { name: 'Social Media Setup', icon: Share2 }
    ]
  },
  {
    id: 'leads',
    stageNumber: '02',
    badge: 'High Inbound Pipeline',
    isPopular: true,
    title: 'I Want More Leads',
    subtitle: 'Turn search and social traffic into consistent qualified enquiries.',
    icon: Target,
    color: '#E6007A',
    borderClass: 'border-[#E6007A]',
    items: [
      { name: 'SEO', icon: Search },
      { name: 'Google Ads', icon: Target },
      { name: 'Meta Ads', icon: Share2 },
      { name: 'Landing Pages', icon: Code2 },
      { name: 'WhatsApp', icon: MessageCircle }
    ]
  },
  {
    id: 'sales',
    stageNumber: '03',
    badge: 'Revenue Accelerator',
    title: 'I Want More Sales',
    subtitle: 'Full-funnel conversion, smart remarketing, and repeat transactions.',
    icon: TrendingUp,
    color: '#F5A623',
    borderClass: 'border-[#F5A623]',
    items: [
      { name: 'E-commerce', icon: ShoppingBag },
      { name: 'Performance Marketing', icon: TrendingUp },
      { name: 'Email Automation', icon: Mail },
      { name: 'Remarketing', icon: Zap }
    ]
  }
];

const FAQS = [
  {
    q: 'What are 360° Digital Marketing Services?',
    a: '360° Digital Marketing Services combine SEO, Social Media Marketing, Google Ads, Meta Ads, Website Development, Branding, Content Marketing, Email Marketing, and Lead Generation into one integrated business growth strategy.',
    color: '#00AED6'
  },
  {
    q: 'Why should I choose a full-service digital marketing agency?',
    a: 'A full-service digital marketing agency creates one connected strategy instead of managing disconnected channels. This improves consistency, customer experience, reporting, and overall marketing performance.',
    color: '#E6007A'
  },
  {
    q: 'Can I choose only the services I need?',
    a: 'Yes. DMDY follows a requirement-based approach. We don’t force fixed packages—we recommend the digital services that best fit your business goals, industry, and budget.',
    color: '#F5A623'
  },
  {
    q: 'Is 360° Digital Marketing suitable for small businesses?',
    a: 'Absolutely. Our pocket-friendly model allows startups and SMEs to begin with essential services and scale into a complete digital ecosystem as the business grows.',
    color: '#00AED6'
  },
  {
    q: 'Do you provide digital marketing services across India?',
    a: 'Yes. DMDY provides Digital Marketing Services for businesses in Delhi NCR, across India, and international markets through remote collaboration and digital project execution.',
    color: '#E6007A'
  },
  {
    q: 'How do I know which marketing channel is right for me?',
    a: 'We begin with a free business consultation and digital audit. Based on your objectives, we recommend the most effective combination of SEO, Paid Marketing, Social Media, Content, Website, and Branding services.',
    color: '#F5A623'
  }
];

const DigitalMarketing360Service = () => {
  const { openModal } = useContactModal();
  const [activePillar, setActivePillar] = useState('seo');
  const [selectedStage, setSelectedStage] = useState('leads');
  const [openFaq, setOpenFaq] = useState(0);
  const current = ECOSYSTEM_PILLARS[activePillar];

  useEffect(() => {
    document.title = '360° Digital Marketing Services — Complete Digital Growth | DMDY';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans min-h-screen">
      <SEO
        title="360° Digital Marketing Services — Full-Funnel Growth Solutions | DMDY"
        description="Scale your brand with DMDY's unified 360° digital marketing frameworks combining SEO, high-intent paid advertising, conversion web design, and brand storytelling."
        url="https://www.digimedigiyou.com/services/360-digital-marketing"
        type="service"
      />
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient Brand Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_25%,#F5A623_50%,transparent_75%)] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (7 cols): User Hero Content */}
            <div className="lg:col-span-7">

              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#E6F8F3] text-[#00A37A] border border-[#00C48C]/30 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#00A37A]" />
                  Flagship Service
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00AED6]"></span>
                  Complete Digital Growth
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  360° Digital Marketing Services
                </span>{' '}
                <br className="hidden sm:inline" />
                Designed Around Your Business
              </h1>

              {/* Subheading / Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                One strategy. Every digital channel. From SEO and paid advertising to branding, websites, content, and automation—DMDY builds complete digital ecosystems that generate measurable business growth.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 max-w-xl mb-8 pt-6 border-t border-slate-100">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">10+</span>
                    <span className="text-xs font-semibold text-slate-500">Years</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Years Experience</div>
                </div>

                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">15+</span>
                    <span className="text-xs font-semibold text-slate-500">Projects</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Clients &amp; Projects</div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">360°</span>
                    <span className="text-xs font-semibold text-slate-500">Solutions</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Integrated Digital Solutions</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal('Complete 360° Digital Marketing')}
                  className="w-full sm:w-auto btn-primary"
                >
                  <Sparkles className="w-4 h-4 text-[#F5A623] group-hover:rotate-12 transition-transform" />
                  Get Free Growth Strategy
                </button>
                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY, I would like to discuss 360° Digital Marketing Services.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-whatsapp"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  WhatsApp DMDY
                </a>
              </div>

            </div>

            {/* Right Column (5 cols): 360° Interactive Ecosystem Hub Live Card */}
            <div className="lg:col-span-5 w-full relative mt-8 lg:mt-0">

              {/* Floating Badge 1: 360° Sync Pulse */}
              <div className="absolute top-1/4 -right-4 z-20 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 flex items-center justify-center text-[#00AED6] shadow-sm">
                  <Activity className="w-4 h-4 text-[#00AED6] animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ecosystem Status</div>
                  <div className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                    5 Channels Synchronized
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Measurable ROI */}
              <div className="absolute -bottom-5 left-4 sm:left-8 z-20 bg-white px-3 sm:px-4 py-1.5 rounded-full shadow-lg border border-slate-100 hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-700">Measurable Growth &bull; 100% Attribution</span>
              </div>

              {/* Main Interactive 360° Live Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col">

                {/* Chrome Window Top Bar */}
                <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200/80">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></div>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold px-2.5 py-0.5 bg-white border border-slate-200 rounded-md shadow-sm flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-[#00AED6]" />
                    digimedigiyou.com/360-growth-engine
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-5 sm:p-6 bg-white flex flex-col space-y-4 text-left">

                  {/* Header / Engine Title */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Integrated Growth Matrix
                      </div>
                      <div className="text-base font-extrabold text-slate-900">
                        The DMDY 360° Loop
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      Live
                    </span>
                  </div>

                  {/* Pillar Selection Tabs */}
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100 overflow-x-auto text-xs no-scrollbar">
                    {Object.values(ECOSYSTEM_PILLARS).map((p) => {
                      const isActive = activePillar === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setActivePillar(p.id)}
                          className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 text-left cursor-pointer ${isActive
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                        >
                          {p.title}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Pillar Showcase Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/90 shadow-sm space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs font-extrabold text-slate-900">
                          {current.title}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {current.tagline}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                          {current.stat}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">
                          {current.statLabel}
                        </div>
                      </div>
                    </div>

                    {/* Integrated Channel Tags */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Active Ecosystem Modules:
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {current.channels.map((ch, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-2xs"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#00AED6] shrink-0" />
                            <span className="truncate">{ch}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Synchronized Output Bar */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00AED6] animate-ping"></div>
                      <span className="font-semibold text-slate-700">Unified Strategy Delivery</span>
                    </div>
                    <span className="font-bold text-[#E6007A]">Zero Silos</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: WHAT DOES 360° DIGITAL MARKETING ACTUALLY MEAN?*/}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">


            {/* Left Column (5 cols): Pure Floating Hub-and-Spoke Infographic (No Card Container) */}
            <div className="lg:col-span-5 w-full relative flex items-center justify-center">
              {/* Soft Ambient Radial Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/25 via-pink-200/15 to-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

              {/* Standalone SVG Infographic */}
              <div className="w-full relative flex flex-col items-center select-none py-2 sm:py-4">
                <svg
                  viewBox="0 0 600 380"
                  className="w-full h-auto max-w-[500px] overflow-visible"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Soft ambient drop shadows for nodes */}
                    <filter id="node-shadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.08" />
                    </filter>
                    <filter id="hub-shadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1D4ED8" floodOpacity="0.28" />
                    </filter>

                    {/* DMDY Center Hub Gradient */}
                    <linearGradient id="hubGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                  </defs>

                  {/* Faint Circular Orbit Arc (connects all 5 touchpoints) */}
                  <path
                    d="M 75 188 A 232 232 0 0 1 525 188"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                  />

                  {/* Radiating Dashed Connector Lines */}
                  <line x1="300" y1="298" x2="75" y2="188" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
                  <line x1="300" y1="298" x2="165" y2="88" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
                  <line x1="300" y1="298" x2="300" y2="52" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
                  <line x1="300" y1="298" x2="435" y2="88" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
                  <line x1="300" y1="298" x2="525" y2="188" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />

                  {/* 1. Social Node (Pastel Blue) */}
                  <g className="cursor-pointer transition-all duration-300 hover:scale-110" style={{ transformOrigin: '75px 188px' }} filter="url(#node-shadow)">
                    <circle cx="75" cy="188" r="46" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="2" />
                    <text x="75" y="194" textAnchor="middle" fill="#1E40AF" fontSize="16" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">Social</text>
                  </g>

                  {/* 2. SEO Node (Pastel Purple) */}
                  <g className="cursor-pointer transition-all duration-300 hover:scale-110" style={{ transformOrigin: '165px 88px' }} filter="url(#node-shadow)">
                    <circle cx="165" cy="88" r="46" fill="#EDE9FE" stroke="#DDD6FE" strokeWidth="2" />
                    <text x="165" y="94" textAnchor="middle" fill="#6B21A8" fontSize="16" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">SEO</text>
                  </g>

                  {/* 3. Ads Node (Pastel Yellow) */}
                  <g className="cursor-pointer transition-all duration-300 hover:scale-110" style={{ transformOrigin: '300px 52px' }} filter="url(#node-shadow)">
                    <circle cx="300" cy="52" r="46" fill="#FEF08A" stroke="#FDE047" strokeWidth="2" />
                    <text x="300" y="58" textAnchor="middle" fill="#854D0E" fontSize="16" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">Ads</text>
                  </g>

                  {/* 4. Website Node (Pastel Pink) */}
                  <g className="cursor-pointer transition-all duration-300 hover:scale-110" style={{ transformOrigin: '435px 88px' }} filter="url(#node-shadow)">
                    <circle cx="435" cy="88" r="46" fill="#FCE7F3" stroke="#FBCFE8" strokeWidth="2" />
                    <text x="435" y="94" textAnchor="middle" fill="#9D174D" fontSize="16" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">Website</text>
                  </g>

                  {/* 5. Email Node (Pastel Mint Green) */}
                  <g className="cursor-pointer transition-all duration-300 hover:scale-110" style={{ transformOrigin: '525px 188px' }} filter="url(#node-shadow)">
                    <circle cx="525" cy="188" r="46" fill="#DCFCE7" stroke="#BBF7D0" strokeWidth="2" />
                    <text x="525" y="194" textAnchor="middle" fill="#166534" fontSize="16" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">Email</text>
                  </g>

                  {/* Central DMDY 360° Hub */}
                  <g className="cursor-pointer transition-all duration-300 hover:scale-105" style={{ transformOrigin: '300px 298px' }} filter="url(#hub-shadow)">
                    {/* Animated Pulse Wave Ring */}
                    <circle cx="300" cy="298" r="66" fill="#2563EB" fillOpacity="0.12" />
                    <circle cx="300" cy="298" r="56" fill="url(#hubGradient)" stroke="#60A5FA" strokeWidth="2" />
                    <text x="300" y="293" textAnchor="middle" fill="#FFFFFF" fontSize="21" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.8">DMDY</text>
                    <text x="300" y="316" textAnchor="middle" fill="#93C5FD" fontSize="13" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">360°</text>
                  </g>
                </svg>
              </div>
            </div>
            {/* Right Column (7 cols): Narrative Content */}
            <div className="lg:col-span-7">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-50 text-[#00AED6] border border-cyan-200/80 shadow-xs mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                The Connected Strategy
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                What Does{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  360° Digital Marketing
                </span>{' '}
                Actually Mean?
              </h2>

              {/* Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Your Customer Doesn't Experience Your Business One Channel at a Time
              </h3>

              {/* Lead sentence */}
              <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed mb-3">
                Today's customer journey is connected.
              </p>

              {/* Connected Journey Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                A customer might discover your brand through{' '}
                <span className="font-semibold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-md border border-pink-200/70">Instagram</span>
                , search for you on{' '}
                <span className="font-semibold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-200/70">Google</span>
                , visit your{' '}
                <span className="font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/70">website</span>
                , click a{' '}
                <span className="font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/70">Google Ad</span>
                , read your{' '}
                <span className="font-semibold text-purple-800 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200/70">blog</span>
                , join your{' '}
                <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/70">email list</span>
                , and finally contact you on{' '}
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-300">WhatsApp</span>.
              </p>

              {/* Silo Callout Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 mb-5 flex items-center gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-[#F5A623]/20 flex items-center justify-center text-[#c77e0b] shrink-0 font-extrabold text-sm">
                  !
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-900">
                  That's why marketing shouldn't work in silos.
                </p>
              </div>

              {/* Final Synthesis Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                DMDY's 360° Digital Marketing Services connect every touchpoint into one intelligent growth strategy that improves visibility, builds trust, generates leads, and increases revenue.
              </p>

              {/* 4 Core Pillars of Impact */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#00AED6] shrink-0" />
                  <span>Improves Visibility</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#E6007A] shrink-0" />
                  <span>Builds Trust</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>Generates Leads</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#00A37A] shrink-0" />
                  <span>Increases Revenue</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE DMDY GROWTH ECOSYSTEM™                     */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Proprietary Methodology</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              The DMDY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Growth Ecosystem™
              </span>
            </h2>
          </div>

          {/* 4 Layers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Layer 1 — Discover */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <Search className="w-5 h-5 text-[#00AED6]" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Layer 01
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Layer 1 — Discover
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  We analyze your business, audience, competitors, industry, and growth opportunities.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#00AED6]"></span>
                <span>Audit &amp; Intelligence</span>
              </div>
            </div>

            {/* Layer 2 — Build */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <Code2 className="w-5 h-5 text-[#F5A623]" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80">
                    Layer 02
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors tracking-tight">
                  Layer 2 — Build
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  We develop your website, branding, SEO foundation, content, and marketing assets.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]"></span>
                <span>Assets &amp; Infrastructure</span>
              </div>
            </div>

            {/* Layer 3 — Grow */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <TrendingUp className="w-5 h-5 text-[#E6007A]" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Layer 03
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Layer 3 — Grow
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  We launch SEO, Social Media, Google Ads, Meta Ads, and lead generation campaigns.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#E6007A]"></span>
                <span>Multi-Channel Campaigns</span>
              </div>
            </div>

            {/* Layer 4 — Scale */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00A37A]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00A37A]/10 text-[#00A37A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <Zap className="w-5 h-5 text-[#00A37A]" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#00A37A] border border-emerald-200/80">
                    Layer 04
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00A37A] transition-colors tracking-tight">
                  Layer 4 — Scale
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Through analytics, automation, remarketing, email marketing, and optimization, we continuously improve performance.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#00A37A]"></span>
                <span>Automation &amp; Performance</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: OUR COMPLETE DIGITAL MARKETING SERVICES        */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-14 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Full-Spectrum Solutions</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Complete{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Digital Marketing Services
              </span>
            </h2>
          </div>

          {/* 6 Services Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {CORE_SERVICES.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.path}
                  className={`group relative bg-white hover:bg-slate-50/70 rounded-2xl p-5 sm:p-5.5 border border-slate-200/90 ${service.hoverBorder} shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer`}
                >
                  {/* Subtle top indicator bar on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: service.color }}
                  />

                  <div>
                    {/* Top Row: Icon + Arrow Circle Button */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className={`w-11 h-11 rounded-xl ${service.iconBg} border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xs`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="w-8 h-8 rounded-full bg-slate-100/80 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 shrink-0">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-base sm:text-lg font-extrabold text-slate-900 ${service.hoverText} transition-colors tracking-tight mb-1.5`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>

                  {/* Bottom micro-footer */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                      {service.tag}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-[11px] font-bold"
                      style={{ color: service.color }}
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: WHY BUSINESSES CHOOSE 360° MARKETING           */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 -right-40 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Section Header */}
          <div className="max-w-7xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Strategic Comparison</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Why Businesses Choose 360° Marketing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Instead of Individual Services
              </span>
            </h2>

            <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
              One Partner. Every Digital Requirement.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Hiring different agencies for SEO, social media, websites, ads, and content often creates disconnected strategies. DMDY brings every digital function together under one growth roadmap.
            </p>
          </div>

          {/* Side-by-Side Comparison Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">

            {/* Left Card: Traditional Approach */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between shadow-2xs">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/80">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-600 border border-slate-300/50">
                      Fragmented Execution
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-800 mt-2 tracking-tight">
                      Traditional Approach
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-200/70 text-slate-500 flex items-center justify-center shrink-0">
                    <X className="w-5 h-5 text-slate-500" />
                  </div>
                </div>

                {/* 5 Comparison Rows */}
                <div className="space-y-3">
                  {COMPARISON_POINTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-white/90 border border-slate-200/70 flex items-center gap-3 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-700 font-medium">
                        {item.traditional}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                <span>Higher friction, scattered data &amp; wasted budget</span>
              </div>
            </div>

            {/* Right Card: DMDY 360° Approach */}
            <div className="bg-gradient-to-b from-white via-white to-cyan-50/25 rounded-3xl p-6 sm:p-7 border-2 border-[#00AED6]/40 shadow-lg relative overflow-hidden flex flex-col justify-between">
              {/* Ambient soft corner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-cyan-100">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                      Unified Growth Ecosystem
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2 tracking-tight flex items-center gap-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#0082a6]">
                        DMDY 360° Approach
                      </span>
                      <Sparkles className="w-4 h-4 text-[#00AED6]" />
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center shrink-0 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-[#00AED6]" />
                  </div>
                </div>

                {/* 5 Comparison Rows */}
                <div className="space-y-3">
                  {COMPARISON_POINTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-white border border-cyan-100/90 shadow-2xs hover:border-[#00AED6]/50 hover:shadow-xs transition-all flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-cyan-50 border border-cyan-200 text-[#00AED6] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#00AED6]" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-900 font-bold">
                        {item.dmdy}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-100 flex items-center justify-between text-xs font-semibold text-[#00AED6]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00AED6] animate-pulse"></span>
                  Single dedicated growth roadmap
                </span>
                <span className="font-extrabold text-[#00AED6]">100% Channel Synergy</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: INDUSTRIES WE HELP GROW                        */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Industry Expertise</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Industries We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Help Grow
              </span>
            </h2>
          </div>

          {/* 6 Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {INDUSTRIES_DATA.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={industry.title}
                  className={`bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 ${industry.hoverBorder} shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                >
                  <div>
                    <div className="relative h-40 sm:h-44 w-full rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-slate-100">
                      <img
                        src={industry.image}
                        alt={`${industry.title} 360° Digital Marketing`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                      <div
                        className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center"
                        style={{ color: industry.color }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className={`text-lg sm:text-xl font-extrabold text-slate-900 mb-1.5 ${industry.hoverText} transition-colors tracking-tight`}>
                      {industry.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {industry.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: HOW DMDY BUILDS YOUR DIGITAL GROWTH ENGINE      */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

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
                How DMDY Builds{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Your Digital Growth Engine
                </span>
              </h2>

              {/* 4 Process Steps - Clean Unboxed Flow */}
              <div className="space-y-4">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={step.step} className="flex items-start gap-4 group">
                    <div className={`w-9 h-9 rounded-xl ${step.badgeBg} flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5 shadow-2xs`}>
                      {step.step}
                    </div>
                    <div className={`flex-1 ${idx !== PROCESS_STEPS.length - 1 ? 'pb-3.5 border-b border-slate-200/80' : ''}`}>
                      <h3 className={`text-base sm:text-lg font-extrabold text-slate-900 ${step.hoverText} transition-colors tracking-tight mb-0.5`}>
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (5 cols): 3D Visual & Growth Ecosystem Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C48C] animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">360° Integrated Engine</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src={aboutHeroGrowthImg}
                  alt="How DMDY Builds Your Digital Growth Engine"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Micro Pillar Badges Underneath Image */}
              <div className="grid grid-cols-3 gap-2.5 mt-4">
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#00AED6]">Discovery</div>
                  <div className="text-xs text-slate-500 font-medium">Bespoke Audit</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#E6007A]">Execution</div>
                  <div className="text-xs text-slate-500 font-medium">Multi-Channel</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#F5A623]">Scale</div>
                  <div className="text-xs text-slate-500 font-medium">Compound ROI</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: CHOOSE YOUR BUSINESS STAGE                     */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Tailored Growth Formula</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Business Stage
              </span>
            </h2>
          </div>

          {/* 3 Unique Stage Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {BUSINESS_STAGES.map((stage) => {
              const isSelected = selectedStage === stage.id;
              const StageIcon = stage.icon;

              return (
                <div
                  key={stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                  className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-pointer ${isSelected
                    ? `bg-white border-2 ${stage.borderClass} shadow-xl scale-[1.01] -translate-y-1`
                    : 'bg-white/90 hover:bg-white border border-slate-200/20 hover:border-slate-300 shadow-sm hover:shadow-lg'
                    }`}
                >

                  <div>
                    {/* Top Meta: Stage # and Badge */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black tracking-widest uppercase text-slate-400">
                          Stage {stage.stageNumber}
                        </span>
                        {stage.isPopular && (
                          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200">
                            Most Requested
                          </span>
                        )}
                      </div>

                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
                        style={{
                          backgroundColor: `${stage.color}15`,
                          color: stage.color
                        }}
                      >
                        <StageIcon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Stage Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                      {stage.title}
                    </h3>

                    {/* Stage Subtitle */}
                    <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-6">
                      {stage.subtitle}
                    </p>

                    {/* Visual Growth Formula Equation */}
                    <div className="pt-4 border-t border-slate-100 mb-6">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                        The 360° Growth Stack
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {stage.items.map((item, idx) => (
                          <React.Fragment key={item.name}>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-800 shadow-2xs hover:bg-slate-100 transition-colors">
                              <item.icon className="w-3.5 h-3.5" style={{ color: stage.color }} />
                              <span>{item.name}</span>
                            </span>
                            {idx !== stage.items.length - 1 && (
                              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-black select-none">
                                +
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-4 border-t border-slate-100 mt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal();
                      }}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${stage.isPopular
                        ? 'bg-gradient-to-r from-[#E6007A] to-[#00AED6] text-white hover:opacity-95 shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                    >
                      <span>Build This Roadmap</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS                     */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

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

              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-6">
                360° Strategy &bull; Channels &bull; Growth
              </p>

              {/* Direct Support Card (Desktop only) */}
              <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-xs hidden lg:block">
                <div className="w-10 h-10 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-[#00AED6]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Have a specific question?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Our growth strategists are available for custom audits and digital roadmap sessions.
                </p>
                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY, I have questions about 360° Digital Marketing Services.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                >
                  <span>WhatsApp DMDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right Column (8 cols): Accordion Items */}
            <div className="lg:col-span-8 space-y-3.5">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                      ? 'bg-slate-50/60 shadow-sm'
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                      }`}
                    style={isOpen ? { borderColor: `${faq.color}80` } : {}}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className="w-4 h-4 shrink-0 transition-transform duration-300"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          color: isOpen ? faq.color : '#94a3b8'
                        }}
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
      {/* SECTION 10: FINAL CTA                                     */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-12 bg-slate-50/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden p-6 sm:p-8 lg:p-9 text-left">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">

              {/* Left Column: Heading & Content */}
              <div className="max-w-2xl">

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-2.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                  <span>360 - Digital Growth</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
                  One Strategy.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Every Digital Possibility.
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Whether you're building a new brand, generating more leads, increasing online sales, or scaling an established business, DMDY creates customized 360° Digital Marketing strategies designed around your growth.
                </p>

              </div>

              {/* Right Column: Compact Action Buttons */}
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => openModal('SEO')}
                  className="btn-primary"
                >
                  <span>Get Your Free Digital Growth Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY, I would like to discuss an SEO audit.')}
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

export default DigitalMarketing360Service;
