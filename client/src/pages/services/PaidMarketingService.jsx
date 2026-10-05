import React, { useState, useEffect } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import SEO from '../../components/SEO';
import SITE_CONFIG from '../../config/siteConfig';
import {
  Sparkles,
  TrendingUp,
  Target,
  Share2,
  Mail,
  Video,
  CheckCircle2,
  ArrowRight,
  Layers,
  Eye,
  RefreshCw,
  Zap,
  Compass,
  Building2,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  Briefcase,
  Users,
  HelpCircle,
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import realEstateImg from '../../assets/social-media/industry-real-estate.webp';
import ecommerceImg from '../../assets/social-media/industry-ecommerce.webp';
import healthcareImg from '../../assets/social-media/industry-healthcare.webp';
import educationImg from '../../assets/google-ads/industry-education.webp';
import hospitalityImg from '../../assets/social-media/industry-hospitality.webp';
import professionalServicesImg from '../../assets/social-media/industry-professional-services.webp';
import ppcGrowthProcessImg from '../../assets/google-ads/ppc_growth_process.webp';
import ppcBusinessGoalsImg from '../../assets/google-ads/ppc_business_goals.webp';

const CHANNELS = {
  google: {
    label: 'Google Ads',
    icon: Target,
    badge: 'Search & PMax Engine',
    headline: 'High-Intent Search, Display & Performance Max',
    desc: 'Capture in-market buyers searching for your solution with precision keyword bidding, negative shielding, and intent-matched landing pages.',
    roas: '6.4x',
    metricLabel: 'Target ROAS',
    growth: '+44% vs Bench',
    leads: '1,420+',
    status: 'High Intent'
  },
  meta: {
    label: 'Meta Ads',
    icon: Share2,
    badge: 'FB & Instagram Scale',
    headline: 'Full-Funnel Social Acquisition & Retargeting',
    desc: 'Scale customer acquisition with high-converting creative hooks, algorithmic lookalike audiences, and dynamic catalog retargeting.',
    roas: '5.8x',
    metricLabel: 'Target ROAS',
    growth: '+52% Conversion Lift',
    leads: '2,890+',
    status: 'Direct Response'
  },
  email: {
    label: 'Email Marketing',
    icon: Mail,
    badge: 'Automated Lifecycle Flows',
    headline: 'High-LTV Retention & Inbound Lead Nurturing',
    desc: 'Turn paid clicks into repeat customers with personalized welcome sequences, abandoned cart flows, and high-converting broadcast campaigns.',
    roas: '8.2x',
    metricLabel: 'Flow Revenue',
    growth: '+38% Repeat Sales',
    leads: '34.5%',
    status: 'Zero Ad Waste'
  },
  youtube: {
    label: 'YouTube Ads',
    icon: Video,
    badge: 'Video Action Scale',
    headline: 'High-Impact Brand Authority & Direct Action',
    desc: 'Engage qualified prospects across YouTube In-Stream and Shorts with compelling video storytelling that drives direct pipeline revenue.',
    roas: '5.2x',
    metricLabel: 'Target ROAS',
    growth: '+65% View Rate',
    leads: '980+',
    status: 'Brand & Performance'
  }
};

const FAQS = [
  {
    q: 'What are Paid Marketing Services?',
    a: 'Paid Marketing Services use advertising platforms like Google Ads, Meta Ads, YouTube, Display Networks, and Email Marketing to help businesses generate leads, increase sales, and grow their online visibility through measurable campaigns.',
    color: '#00AED6'
  },
  {
    q: "What's the difference between Google Ads and Meta Ads?",
    a: 'Google Ads targets users actively searching for products or services, making it ideal for high-intent lead generation. Meta Ads (Facebook & Instagram) target audiences based on interests, behavior, and demographics, making them powerful for brand awareness and customer acquisition.',
    color: '#E6007A'
  },
  {
    q: 'Which platform is better for my business?',
    a: 'It depends on your goals. Service businesses often benefit from Google Search Ads, while e-commerce brands usually perform well with Meta Ads + Shopping Ads. DMDY creates customized paid marketing strategies rather than recommending a single platform for everyone.',
    color: '#F5A623'
  },
  {
    q: 'Does Email Marketing still work?',
    a: 'Yes. Email Marketing remains one of the highest ROI digital channels for nurturing leads, recovering abandoned carts, promoting offers, and increasing repeat customer purchases through automation.',
    color: '#00AED6'
  },
  {
    q: 'What is Remarketing?',
    a: 'Remarketing is a paid advertising strategy that shows ads to people who previously visited your website or interacted with your brand, helping recover lost opportunities and improve conversion rates.',
    color: '#E6007A'
  },
  {
    q: 'How do you measure campaign success?',
    a: 'We track ROAS (Return on Ad Spend), conversions, leads, sales, cost per acquisition (CPA), click-through rate (CTR), and customer lifetime value, ensuring every campaign is optimized around business growth rather than vanity metrics.',
    color: '#F5A623'
  }
];

const PaidMarketingService = () => {
  const { openModal } = useContactModal();
  const [activeChannel, setActiveChannel] = useState('google');
  const [selectedGoal, setSelectedGoal] = useState('enquiries');
  const [openFaq, setOpenFaq] = useState(0);
  const current = CHANNELS[activeChannel];

  useEffect(() => {
    document.title = 'Paid Marketing Services — 360° Paid Growth | DMDY';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans min-h-screen">
      <SEO
        title="Performance Paid Marketing Services — Multi-Channel Paid Ads | DMDY"
        description="Acquire high-value customers at scale through profitable multi-channel paid acquisition across Meta Ads, LinkedIn Ads, programmatic networks, and retargeting funnels."
        url="https://www.digimedigiyou.com/services/paid-marketing"
        type="service"
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_25%,transparent_70%)] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (7 cols): User Hero Content */}
            <div className="lg:col-span-7">

              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-50 text-cyan-700 border border-cyan-200/80 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                  360° Paid Growth
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6007A]"></span>
                  Google &bull; Meta &bull; Email &bull; YouTube
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Paid Marketing Services
                </span>{' '}
                That Turn Advertising Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6007A] via-[#F5A623] to-[#00AED6]">
                  Revenue.
                </span>
              </h1>

              {/* Subheading / Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                From Google Search and Meta Ads to YouTube, Display, Remarketing, and Email Marketing—DMDY builds data-driven campaigns that generate qualified leads, increase sales, and maximize your ROAS.
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
                    <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                      360°
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Paid Media</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Multi-Channel Advertising</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal('Paid Marketing')}
                  className="w-full sm:w-auto btn-primary"
                >
                  <Sparkles className="w-4 h-4 text-[#F5A623] group-hover:rotate-12 transition-transform" />
                  Get Free Paid Marketing Audit
                </button>
                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY, I would like to discuss Paid Marketing Services.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-whatsapp"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  WhatsApp Growth Expert
                </a>
              </div>

            </div>

            {/* Right Column (5 cols): 360° Multi-Channel Paid Hub Live Card */}
            <div className="lg:col-span-5 w-full relative mt-8 lg:mt-0">

              {/* Floating Badge 1: ROAS */}
              <div className="absolute top-1/3 -right-4 z-20 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Multi-Channel ROAS</div>
                  <div className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-[#00AED6]">
                    5.8x - 8.2x Return
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Channel Active Badge */}
              <div className="absolute -bottom-5 left-4 sm:left-8 z-20 bg-white px-3 sm:px-4 py-1.5 rounded-full shadow-lg border border-slate-100 hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-700">Multi-Channel Sync: Google &bull; Meta &bull; Email &bull; YouTube</span>
              </div>

              {/* Main Interactive Multi-Channel Hub Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col">

                {/* Header Window Bar */}
                <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200/80">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></div>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold px-2.5 py-0.5 bg-white border border-slate-200 rounded-md shadow-sm flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-[#00AED6]" />
                    digimedigiyou.com/360-paid-growth
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-5 sm:p-6 bg-white flex flex-col space-y-4">

                  {/* Channel Switcher Tabs */}
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100 overflow-x-auto text-xs no-scrollbar">
                    {Object.entries(CHANNELS).map(([key, ch]) => {
                      const Icon = ch.icon;
                      const isActive = activeChannel === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setActiveChannel(key)}
                          className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 text-left flex items-center gap-1.5 cursor-pointer ${isActive
                            ? 'bg-cyan-50 text-[#00AED6] border border-cyan-200/80 shadow-xs'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {ch.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Channel Metrics Row */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">{current.metricLabel}</div>
                      <div className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                        {current.roas}
                      </div>
                      <div className="text-[9px] font-bold text-emerald-600">{current.growth}</div>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">Total Leads</div>
                      <div className="text-lg sm:text-xl font-black text-slate-900">
                        {current.leads}
                      </div>
                      <div className="text-[9px] font-bold text-cyan-600">Qualified Scale</div>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">Strategy</div>
                      <div className="text-xs font-bold text-slate-800 truncate mt-1">
                        {current.status}
                      </div>
                      <div className="text-[9px] font-bold text-emerald-600 mt-1">Active</div>
                    </div>
                  </div>

                  {/* Channel Highlights Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-900">{current.headline}</span>
                      <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-100">
                        {current.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {current.desc}
                    </p>
                  </div>

                  {/* Bottom Assurance */}
                  <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Attribution & Audit Verified
                    </span>
                    <button
                      type="button"
                      onClick={() => openModal(`Paid Marketing - ${current.label}`)}
                      className="text-[#00AED6] hover:text-[#0092b3] font-bold inline-flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      Audit This Channel <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: THE NEW REALITY OF PAID MARKETING              */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">

            {/* Left Column (5 cols): Authentic iPhone Mockup */}
            <div className="lg:col-span-5 w-full relative order-2 lg:order-1 flex flex-col items-center justify-center">

              {/* Ambient Glow behind iPhone */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#00AED6]/25 via-[#E6007A]/25 to-[#F5A623]/25 rounded-[3.8rem] blur-2xl opacity-60 -z-10 pointer-events-none"></div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-3 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200/80 flex items-center gap-2 hidden sm:flex">
                <img src="/favicon.svg" alt="DMDY" className="w-3.5 h-3.5 object-contain" />
                <span className="text-[11px] font-bold text-slate-800">Connected Ecosystem Active</span>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200/80 flex items-center gap-2 hidden sm:flex">
                <div className="w-5 h-5 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                </div>
                <span className="text-[11px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-[#00AED6]">
                  ROAS Multiplier
                </span>
              </div>

              {/* Authentic iPhone Chassis Frame */}
              <div className="relative w-full max-w-[325px] sm:max-w-[345px] h-full min-h-[580px] lg:min-h-[630px] rounded-[3.3rem] p-3 sm:p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-[5px] border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 flex flex-col justify-between">

                {/* iPhone Physical Side Buttons */}
                {/* Left: Action Button */}
                <div className="absolute -left-[7px] top-20 w-[3px] h-4 bg-slate-600 rounded-l-sm shadow-sm"></div>
                {/* Left: Volume Up */}
                <div className="absolute -left-[7px] top-28 w-[3px] h-10 bg-slate-600 rounded-l-sm shadow-sm"></div>
                {/* Left: Volume Down */}
                <div className="absolute -left-[7px] top-12 w-[3px] h-10 bg-slate-600 rounded-l-sm shadow-sm"></div>
                {/* Right: Power / Siri Button */}
                <div className="absolute -right-[7px] top-32 w-[3px] h-14 bg-slate-600 rounded-r-sm shadow-sm"></div>

                {/* Inner iPhone Screen */}
                <div className="relative rounded-[2.7rem] bg-white overflow-hidden flex flex-col flex-1 border border-slate-900/40 shadow-inner justify-between">

                  {/* iOS Status Bar + Dynamic Island */}
                  <div className="pt-2.5 px-5 pb-2 bg-slate-950 text-white flex items-center justify-between text-[11px] font-semibold">
                    <span className="tracking-tight font-medium">9:41</span>

                    {/* Dynamic Island Notch */}
                    <div className="w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner">
                      <div className="w-2 h-2 rounded-full bg-slate-800/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0a1424] ring-1 ring-cyan-900/60 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-cyan-400/40"></div>
                      </div>
                    </div>

                    {/* iOS Signal & Battery */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.28 19.59 10.59 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9z" /></svg>
                      <span className="text-[9px] font-bold">5G</span>
                      <div className="w-4 h-2 border border-white/70 rounded-xs p-0.5 flex items-center">
                        <div className="w-full h-full bg-emerald-400 rounded-2xs"></div>
                      </div>
                    </div>
                  </div>

                  {/* iPhone DMDY App Header featuring Original Favicon */}
                  <div className="px-4 py-3 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800/90 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img src="/favicon.svg" alt="DMDY Logo" className="w-6 h-6 object-contain rounded-md shadow-sm bg-white/5 p-0.5" />
                      <div>
                        <div className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
                          DMDY Growth Hub
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        </div>
                        <div className="text-[9px] text-slate-400 font-medium">360° Connected Ecosystem</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      LIVE
                    </span>
                  </div>

                  {/* iPhone Screen Feed - Spaced to match Right Column Height */}
                  <div className="p-3 sm:p-3.5 bg-slate-50 flex-1 flex flex-col justify-between space-y-2.5 text-left">

                    {/* Touchpoint 1: Google Search (Reach Intent) */}
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-cyan-200 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-cyan-50 flex items-center justify-center text-[#00AED6]">
                            <Target className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-bold text-slate-900">Google Search Ads</span>
                        </div>
                        <span className="text-[9px] font-bold text-[#00AED6] bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-100">
                          Reach Intent
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        Customer searches high-intent keywords &bull; <strong className="text-slate-800">Ready to buy</strong>
                      </p>
                    </div>

                    {/* Touchpoint 2: Instagram & Facebook (Build Awareness) */}
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-pink-200 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-pink-50 flex items-center justify-center text-[#E6007A]">
                            <Eye className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-bold text-slate-900">Instagram & Meta</span>
                        </div>
                        <span className="text-[9px] font-bold text-[#E6007A] bg-pink-50 px-2 py-0.5 rounded-md border border-pink-100">
                          Build Awareness
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        Engages with visual creative hooks & social proof
                      </p>
                    </div>

                    {/* Touchpoint 3: YouTube Video (Influence) */}
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-red-200 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                            <Video className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-bold text-slate-900">YouTube Ads</span>
                        </div>
                        <span className="text-[9px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                          Influence
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        Builds brand trust & in-depth product consideration
                      </p>
                    </div>

                    {/* Touchpoint 4: Display & Email (Re-engage Visitors) */}
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-amber-200 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-amber-50 flex items-center justify-center text-[#F5A623]">
                            <RefreshCw className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-bold text-slate-900">Display & Email</span>
                        </div>
                        <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                          Re-engage
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        Recaptures drop-offs through automated lifecycle flows
                      </p>
                    </div>

                    {/* Final Outcome Card inside Phone (Generate Revenue) */}
                    <div className="p-3 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 text-white shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Campaign Goal</div>
                          <div className="text-xs font-extrabold text-white">Generate Revenue</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                        ROAS Scaled
                      </span>
                    </div>

                  </div>

                  {/* iPhone Bottom Home Indicator Bar */}
                  <div className="py-2.5 bg-white flex justify-center border-t border-slate-100">
                    <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Column (7 cols): User Provided Narrative & 4 Pillars */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2">

              {/* Badge: The New Reality of Paid Marketing */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-50 via-pink-50 to-amber-50 text-slate-800 border border-[#00AED6]/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00AED6] to-[#E6007A] animate-pulse"></span>
                  The New Reality of Paid Marketing
                </span>
              </div>

              {/* Title: People Don't Buy Where You Advertise. They Buy Where You Influence. */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                People Don't Buy Where You Advertise.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  They Buy Where You Influence.
                </span>
              </h2>

              {/* Narrative Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                Modern paid marketing isn't about running ads on one platform. Your customer discovers brands across{' '}
                <span className="font-semibold text-slate-900">Google</span>,{' '}
                <span className="font-semibold text-slate-900">Instagram</span>,{' '}
                <span className="font-semibold text-slate-900">Facebook</span>,{' '}
                <span className="font-semibold text-slate-900">YouTube</span>,{' '}
                <span className="font-semibold text-slate-900">Display Networks</span>, and{' '}
                <span className="font-semibold text-slate-900">Email</span> before making a decision.
              </p>

              {/* Strategy Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-50/80 via-pink-50/50 to-amber-50/50 border border-cyan-100/90 shadow-xs mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00AED6] to-[#E6007A] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      The winning strategy is creating one connected advertising ecosystem—not isolated campaigns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transition Header */}
              <div className="pt-2 mb-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Every successful paid campaign should:
                </h3>
              </div>

              {/* 4 Pillars Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                {/* 1. Reach Intent */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-cyan-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#00AED6]/10 flex items-center justify-center text-[#00AED6] group-hover:scale-105 transition-transform">
                      <Target className="w-4 h-4 text-[#00AED6]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#00AED6] bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-100">
                      High Intent
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Reach Intent
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Show up when customers are ready to search or buy.
                  </p>
                </div>

                {/* 2. Build Awareness */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-pink-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] group-hover:scale-105 transition-transform">
                      <Eye className="w-4 h-4 text-[#E6007A]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#E6007A] bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                      Visibility
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Build Awareness
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Create visibility before competitors do.
                  </p>
                </div>

                {/* 3. Re-engage Visitors */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] group-hover:scale-105 transition-transform">
                      <RefreshCw className="w-4 h-4 text-[#F5A623]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#F5A623] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                      Remarketing
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Re-engage Visitors
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Bring potential customers back through remarketing.
                  </p>
                </div>

                {/* 4. Generate Revenue */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      Growth
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Generate Revenue
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Optimize every campaign around measurable business growth.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE DMDY PAID GROWTH FRAMEWORK™                */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
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
                Paid Growth Framework™
              </span>
            </h2>
          </div>

          {/* 4 Framework Layer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            {/* Layer 1 — Attract */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Target className="w-6 h-6 text-[#00AED6]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Layer 01
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Layer 1 — Attract
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Google Ads, Meta Ads, YouTube, and Display campaigns bring qualified audiences to your business.
                </p>
              </div>
            </div>

            {/* Layer 2 — Engage */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Sparkles className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Layer 02
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Layer 2 — Engage
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Creative ads, compelling copy, landing pages, and audience segmentation increase engagement.
                </p>
              </div>
            </div>

            {/* Layer 3 — Convert */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Zap className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F5A623] border border-amber-200/80">
                    Layer 03
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#F5A623] transition-colors tracking-tight">
                  Layer 3 — Convert
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Lead forms, WhatsApp, e-commerce optimization, and conversion tracking turn clicks into customers.
                </p>
              </div>
            </div>

            {/* Layer 4 — Scale */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80">
                    Layer 04
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors tracking-tight">
                  Layer 4 — Scale
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  ROAS optimization, remarketing, email automation, and performance analytics help profitable campaigns grow sustainably.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHAT'S INCLUDED IN OUR PAID MARKETING SERVICES */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Section Header - Center Aligned */}
          <div className="mb-10 sm:mb-12 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Target className="w-3 h-3 text-[#00AED6]" />
              <span>Full-Spectrum Capabilities</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What's Included in Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Paid Marketing Services
              </span>
            </h2>
          </div>

          {/* 3-Column Clean, Compact & Centered Layout (3-3 Pair) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10 w-full">

            {/* 1. Google Ads */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100/80 flex items-center justify-center shadow-xs">
                  <Target className="w-5 h-5 text-[#00AED6]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#00AED6] transition-colors">
                Google Ads
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Search, Shopping, Display &amp; Performance Max campaigns.
              </p>
            </div>

            {/* 2. Meta Ads */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#E6007A] border border-pink-100/80 flex items-center justify-center shadow-xs">
                  <Share2 className="w-5 h-5 text-[#E6007A]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#E6007A] transition-colors">
                Meta Ads
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Facebook &amp; Instagram advertising for leads and sales.
              </p>
            </div>

            {/* 3. YouTube Advertising */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#F5A623] border border-amber-100/80 flex items-center justify-center shadow-xs">
                  <Video className="w-5 h-5 text-[#F5A623]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#F5A623] transition-colors">
                YouTube Advertising
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Video campaigns that build awareness and demand.
              </p>
            </div>

            {/* 4. Display Advertising */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100/80 flex items-center justify-center shadow-xs">
                  <Layers className="w-5 h-5 text-[#00AED6]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#00AED6] transition-colors">
                Display Advertising
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Banner campaigns across Google's Display Network.
              </p>
            </div>

            {/* 5. Remarketing */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#E6007A] border border-pink-100/80 flex items-center justify-center shadow-xs">
                  <RefreshCw className="w-5 h-5 text-[#E6007A]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#E6007A] transition-colors">
                Remarketing
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Reconnect with visitors who didn't convert the first time.
              </p>
            </div>

            {/* 6. Email Marketing */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#F5A623] border border-amber-100/80 flex items-center justify-center shadow-xs">
                  <Mail className="w-5 h-5 text-[#F5A623]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#F5A623] transition-colors">
                Email Marketing
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Automated nurture campaigns, newsletters &amp; customer retention.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: WHICH PAID CHANNEL IS RIGHT FOR YOU?           */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Channel Strategy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Which Paid Channel{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Is Right for You?
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
              One Goal. Different Advertising Channels.
            </p>
          </div>

          {/* 4 Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            {/* 1. Google Ads */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-[#00AED6]" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Google Ads
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Best for high-intent searches, local services, and immediate lead generation.
                </p>
              </div>
            </div>

            {/* 2. Meta Ads */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6 text-[#E6007A]" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Meta Ads
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Perfect for brand awareness, e-commerce, and visual customer acquisition.
                </p>
              </div>
            </div>

            {/* 3. YouTube Ads */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#F5A623] transition-colors tracking-tight">
                  YouTube Ads
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Ideal for storytelling, product launches, and brand education.
                </p>
              </div>
            </div>

            {/* 4. Email Marketing */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors tracking-tight">
                  Email Marketing
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Best for nurturing leads, repeat sales, and customer retention.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: INDUSTRIES WE SCALE WITH PAID MEDIA             */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
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
              Industries We Scale With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Paid Media
              </span>
            </h2>
          </div>

          {/* 6 Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* 1. Real Estate */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={realEstateImg}
                    alt="Real Estate Paid Marketing"
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
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Location targeting + lead generation campaigns
                </p>
              </div>
            </div>

            {/* 2. E-commerce */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={ecommerceImg}
                    alt="E-commerce Paid Marketing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#E6007A]">
                    <ShoppingBag className="w-4 h-4 text-[#E6007A]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors">
                  E-commerce
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Shopping Ads + Meta conversion campaigns
                </p>
              </div>
            </div>

            {/* 3. Healthcare */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={healthcareImg}
                    alt="Healthcare Paid Marketing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#F5A623]">
                    <HeartPulse className="w-4 h-4 text-[#F5A623]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F5A623] transition-colors">
                  Healthcare
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Patient acquisition through compliant advertising
                </p>
              </div>
            </div>

            {/* 4. Education */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={educationImg}
                    alt="Education Paid Marketing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#00AED6]">
                    <GraduationCap className="w-4 h-4 text-[#00AED6]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors">
                  Education
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Admission &amp; enquiry generation campaigns
                </p>
              </div>
            </div>

            {/* 5. Hospitality */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={hospitalityImg}
                    alt="Hospitality Paid Marketing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#E6007A]">
                    <UtensilsCrossed className="w-4 h-4 text-[#E6007A]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors">
                  Hospitality
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Bookings, offers &amp; local visibility
                </p>
              </div>
            </div>

            {/* 6. B2B Services */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={professionalServicesImg}
                    alt="B2B Services Paid Marketing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#F5A623]">
                    <Briefcase className="w-4 h-4 text-[#F5A623]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F5A623] transition-colors">
                  B2B Services
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  LinkedIn &amp; Google lead generation strategy
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: HOW DMDY BUILDS HIGH-ROI CAMPAIGNS             */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

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
                  High-ROI Campaigns
                </span>
              </h2>

              {/* 4 Process Steps - Clean Unboxed Flow */}
              <div className="space-y-4">

                {/* 01 Research & Audit */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    01
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00AED6] transition-colors mb-0.5">
                      Research &amp; Audit
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Audience analysis, competitor research, keyword planning &amp; account review.
                    </p>
                  </div>
                </div>

                {/* 02 Campaign Strategy */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    02
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#E6007A] transition-colors mb-0.5">
                      Campaign Strategy
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Select the right mix of Google, Meta, YouTube &amp; Email channels.
                    </p>
                  </div>
                </div>

                {/* 03 Launch & Optimize */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    03
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#F5A623] transition-colors mb-0.5">
                      Launch &amp; Optimize
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Creative testing, audience refinement, bid optimization &amp; conversion tracking.
                    </p>
                  </div>
                </div>

                {/* 04 Scale Performance */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-0.5">
                      Scale Performance
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      ROAS reporting, remarketing, automation &amp; continuous campaign growth.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column (5 cols): Visual Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">Target ROAS Optimized</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-bold text-xs">
                  ROI
                </div>
                <span className="text-xs font-bold text-slate-800">High-ROI Paid Engine</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src={ppcGrowthProcessImg}
                  alt="How DMDY Builds High-ROI Campaigns"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: CHOOSE YOUR BUSINESS GOAL                      */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

            {/* Left Column (5 cols): 3D Visual Showcase */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00AED6] animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">Precision Intent Bidding</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-bold text-xs">
                  ROAS
                </div>
                <span className="text-xs font-bold text-slate-800">Goal-Driven PPC</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src={ppcBusinessGoalsImg}
                  alt="Choose Your Business Goal"
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
                  Business Goal
                </span>
              </h2>

              {/* Interactive Tabs Header */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-slate-100/90 rounded-2xl w-fit mb-6 border border-slate-200/70">
                {[
                  { id: 'enquiries', label: 'Generate More Enquiries' },
                  { id: 'sales', label: 'Increase Online Sales' },
                  { id: 'awareness', label: 'Build Brand Awareness' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedGoal(tab.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${selectedGoal === tab.id
                      ? 'bg-white text-slate-950 shadow-sm border border-slate-200/80 scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Strategy Card according to Selected Tab */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 relative overflow-hidden">

                {/* 1. Generate More Enquiries */}
                {selectedGoal === 'enquiries' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-[#00AED6]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Generate More Enquiries
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-0 sm:pl-13">
                      <span className="font-semibold text-slate-900">Best Channels:</span> Google Search Ads + Call Ads + WhatsApp + Landing Pages
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80 pl-0 sm:pl-13">
                      {['Google Search Ads', 'Call Ads', 'WhatsApp', 'Landing Pages'].map((tactic, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-200/80 text-[11px] font-semibold text-[#00AED6]">
                          <CheckCircle2 className="w-3 h-3 text-[#00AED6]" />
                          <span>{tactic}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Increase Online Sales */}
                {selectedGoal === 'sales' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-5 h-5 text-[#E6007A]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Increase Online Sales
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-0 sm:pl-13">
                      <span className="font-semibold text-slate-900">Best Channels:</span> Shopping Ads + Meta Ads + Remarketing + Email Automation
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80 pl-0 sm:pl-13">
                      {['Shopping Ads', 'Meta Ads', 'Remarketing', 'Email Automation'].map((tactic, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-pink-50 border border-pink-200/80 text-[11px] font-semibold text-[#E6007A]">
                          <CheckCircle2 className="w-3 h-3 text-[#E6007A]" />
                          <span>{tactic}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Build Brand Awareness */}
                {selectedGoal === 'awareness' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center shrink-0">
                        <Eye className="w-5 h-5 text-[#F5A623]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Build Brand Awareness
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-0 sm:pl-13">
                      <span className="font-semibold text-slate-900">Best Channels:</span> YouTube Ads + Display Advertising + Instagram Campaigns
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80 pl-0 sm:pl-13">
                      {['YouTube Ads', 'Display Advertising', 'Instagram Campaigns'].map((tactic, idx) => (
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
      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS                     */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
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
                Paid Media &bull; ROAS &bull; Strategy
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
                  Our paid media strategists are available for custom audits and campaign roadmap sessions.
                </p>
                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY, I have questions about Paid Marketing Services.')}
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
      {/* SECTION 10: FINAL CTA - READY TO BECOME VISIBLE */}
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
                  Ready to Turn Your Ad Budget Into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Business Growth?
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Whether you need Google Ads, Meta Ads, YouTube campaigns, Email Marketing, or a complete paid media strategy, DMDY builds advertising systems designed to generate measurable results.
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

export default PaidMarketingService;
