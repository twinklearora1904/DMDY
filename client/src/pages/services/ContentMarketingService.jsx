import React, { useEffect, useState } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import contentMarketingGoalsImg from '../../assets/content_marketing_goals.jpg';
import {
  Sparkles,
  PenTool,
  TrendingUp,
  CheckCircle2,
  Zap,
  Flame,
  Share2,
  Target,
  Layers,
  ArrowRight,
  BookOpen,
  Video,
  Award,
  Send,
  Compass,
  Check,
  Search,
  Globe,
  Users,
  ShieldCheck,
  Building2,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Utensils,
  Briefcase,
  ChevronDown,
  HelpCircle,
  MessageCircle
} from 'lucide-react';

const ContentMarketingService = () => {
  const { openModal } = useContactModal();
  const [activeTab, setActiveTab] = useState('seo-blogs');
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What is the difference between Content Creation and Content Marketing?",
      a: "Content Creation is the production of blogs, videos, graphics, website copy, and social media posts. Content Marketing is the strategy of planning, distributing, and optimizing that content to attract customers and generate business growth."
    },
    {
      q: "Do I need SEO content for my website?",
      a: "Yes. SEO Content Writing helps your website rank for relevant keywords, improve organic visibility, and attract high-intent visitors through Google Search and AI-powered search experiences."
    },
    {
      q: "What types of content does DMDY create?",
      a: "DMDY creates website content, SEO blogs, service pages, social media posts, Reels scripts, ad copy, email campaigns, product descriptions, landing pages, and brand storytelling content."
    },
    {
      q: "How often should my business publish content?",
      a: "Consistency is more important than volume. A strategic monthly content calendar with high-quality content typically performs better than posting daily without a clear objective."
    },
    {
      q: "Can content marketing generate leads?",
      a: "Absolutely. High-quality Content Marketing Services help businesses educate audiences, build trust, improve search visibility, and convert visitors into qualified enquiries and customers."
    },
    {
      q: "Do you provide content creation for social media and websites together?",
      a: "Yes. DMDY offers integrated Content Creation Services across websites, blogs, Instagram, Facebook, LinkedIn, email marketing, and paid advertising to maintain a consistent brand voice."
    }
  ];

  useEffect(() => {
    document.title = "Content Creation & Marketing Services — DMDY";
    window.scrollTo(0, 0);
  }, []);

  const contentSamples = {
    'seo-blogs': {
      format: 'SEO Long-Form Blog',
      title: 'How High-Growth Brands Drive 10x Inbound Pipeline via Organic Search',
      highlight: 'Ranked #1 for Target Commercial Keywords',
      metric1: { label: 'Organic Traffic', val: '+340%', note: 'Search Engine Surge' },
      metric2: { label: 'Avg. Dwell Time', val: '5m 12s', note: 'High Content Depth' },
      metric3: { label: 'Lead Conversion', val: '4.8%', note: 'MQL Inquiries' },
      tag: 'SEO & Inbound Authority'
    },
    'brand-story': {
      format: 'Brand Storytelling & Narrative',
      title: 'From Commodity to Cult Favorite: Building Irresistible Brand Affinity',
      highlight: 'Emotional Resonance & Community Trust',
      metric1: { label: 'Brand Recall', val: '89%', note: 'Survey Sentiment' },
      metric2: { label: 'Completion Rate', val: '94%', note: 'Long-Form Read' },
      metric3: { label: 'Social Echo', val: '3.4x', note: 'Organic Mentions' },
      tag: 'Brand Equity & Perception'
    },
    'social-video': {
      format: 'Social Media & Video Scripts',
      title: 'Stop The Scroll: 5 Psychology-Backed Hooks for Viral Engagement',
      highlight: 'Engineered for Organic Algorithm Reach',
      metric1: { label: 'Saves & Shares', val: '42.8K', note: 'Viral Distribution' },
      metric2: { label: 'Engagement Rate', val: '8.4%', note: 'Industry Top 1%' },
      metric3: { label: 'Profile Visits', val: '+210%', note: 'Audience Funnel' },
      tag: 'Social Reach & Virality'
    },
    'ad-creatives': {
      format: 'Ad Creatives & Copywriting',
      title: 'Direct-Response Ad Copy Framework: Trigger Immediate Buying Action',
      highlight: 'Optimized for Meta & Google Performance Max',
      metric1: { label: 'Blended ROAS', val: '4.6x', note: 'High Return On Ad Spend' },
      metric2: { label: 'Click-Through (CTR)', val: '3.9%', note: 'Strong Offer Clarity' },
      metric3: { label: 'Cost Per Lead', val: '-38%', note: 'Efficient Acquisition' },
      tag: 'Performance & Paid Growth'
    }
  };

  const currentSample = contentSamples[activeTab];

  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const processSteps = [
    {
      step: '01',
      title: 'Research',
      desc: 'Audience, keywords & competitors',
      color: '#00AED6',
      badgeBg: 'bg-cyan-50',
      badgeText: 'text-[#00AED6]',
      badgeBorder: 'border-cyan-200/80',
      tag: 'Discovery & Analytics',
      deliverables: [
        'Audience search intent & persona profiling',
        'Commercial & long-tail keyword cluster mapping',
        'Competitor gap analysis & content opportunity score'
      ],
      highlight: 'High-Intent Discovery',
      metric: { label: 'Keyword Scope', val: '50+ Clusters', note: 'Intent Classified' }
    },
    {
      step: '02',
      title: 'Strategy',
      desc: 'Content pillars & monthly calendar',
      color: '#F5A623',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-[#F5A623]',
      badgeBorder: 'border-amber-200/80',
      tag: 'Editorial Architecture',
      deliverables: [
        'Core TOFU, MOFU & BOFU content pillars',
        '30-day integrated cross-channel publishing calendar',
        'Clear topic angles, hooks & audience pain-point mapping'
      ],
      highlight: 'Editorial Blueprint',
      metric: { label: 'Pillars Locked', val: '4 Pillars', note: 'Full Buyer Journey' }
    },
    {
      step: '03',
      title: 'Create',
      desc: 'Design, writing, video & creative production',
      color: '#E6007A',
      badgeBg: 'bg-pink-50',
      badgeText: 'text-[#E6007A]',
      badgeBorder: 'border-pink-200/80',
      tag: 'Creative Production',
      deliverables: [
        'SEO-optimized articles & thought leadership blogs',
        'Short-form video scripting, reels & carousel designs',
        'High-converting ad copy, landing pages & email campaigns'
      ],
      highlight: 'Crafted In-House',
      metric: { label: 'Production Quality', val: '100% Original', note: 'Zero AI Fluff' }
    },
    {
      step: '04',
      title: 'Publish',
      desc: 'Website, social media & campaign distribution',
      color: '#00AED6',
      badgeBg: 'bg-cyan-50',
      badgeText: 'text-[#00AED6]',
      badgeBorder: 'border-cyan-200/80',
      tag: 'Omnichannel Distribution',
      deliverables: [
        'CMS publication with meta tags, schema markup & internal links',
        'Platform-native scheduling across Meta, LinkedIn & YouTube',
        'Email newsletter broadcasts & CRM nurture sequence sync'
      ],
      highlight: 'Multi-Channel Sync',
      metric: { label: 'Connected Channels', val: '7+ Platforms', note: 'Synchronized Launch' }
    },
    {
      step: '05',
      title: 'Optimize',
      desc: 'SEO, engagement & conversion improvements',
      color: '#F5A623',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-[#F5A623]',
      badgeBorder: 'border-amber-200/80',
      tag: 'Performance & Growth',
      deliverables: [
        'Real-time SERP rank tracking & organic traffic analysis',
        'Engagement rates, scroll depth & dwell-time review',
        'A/B headline, hook & CTA testing for conversion rate boost'
      ],
      highlight: 'Compounding ROI',
      metric: { label: 'Ongoing Growth', val: '+180% Avg.', note: 'Engagement Lift' }
    }
  ];

  const currentProcess = processSteps[activeProcessStep] || processSteps[0];

  const [selectedGoal, setSelectedGoal] = useState('traffic');

  const contentGoals = {
    'traffic': {
      id: 'traffic',
      title: 'More Website Traffic',
      focus: 'SEO blogs & pillar pages',
      desc: 'High-authority search content engineered to capture commercial intent, rank on page one of Google, and compound organic impressions month over month.',
      color: '#00AED6',
      badgeBg: 'bg-cyan-50',
      badgeBorder: 'border-cyan-200/80',
      icon: Search,
      deliverables: ['SEO Long-Form Blogs', 'Pillar Content Pages', 'Internal Link Silos', 'Search Intent Optimization'],
      kpi: '+340% Organic Traffic Lift'
    },
    'social': {
      id: 'social',
      title: 'Better Social Presence',
      focus: 'Reels & carousel content',
      desc: 'Platform-native short-form video and high-save carousel graphics designed to stop the scroll, engage audiences, and spark viral algorithmic distribution.',
      color: '#E6007A',
      badgeBg: 'bg-pink-50',
      badgeBorder: 'border-pink-200/80',
      icon: Share2,
      deliverables: ['Viral Reels Scripting', 'Multi-Slide Carousels', 'Engaging Captions', 'Community Interaction Hooks'],
      kpi: '8.4% Avg. Engagement Rate'
    },
    'leads': {
      id: 'leads',
      title: 'More Leads',
      focus: 'Landing pages & conversion copy',
      desc: 'Persuasive, psychology-backed copywriting and conversion landing pages engineered to transform curious visitors into qualified business inquiries.',
      color: '#00C48C',
      badgeBg: 'bg-emerald-50',
      badgeBorder: 'border-emerald-200/80',
      icon: Target,
      deliverables: ['High-Conversion Landing Pages', 'Ad Creative Copywriting', 'Lead Magnet Guides', 'WhatsApp & Form Triggers'],
      kpi: '4.8% Inquiry Conversion Rate'
    },
    'brand': {
      id: 'brand',
      title: 'Stronger Brand',
      focus: 'Brand storytelling & visual content',
      desc: 'Memorable brand messaging, founder thought leadership, and cinematic visual assets that cultivate emotional affinity and establish market authority.',
      color: '#F5A623',
      badgeBg: 'bg-amber-50',
      badgeBorder: 'border-amber-200/80',
      icon: Award,
      deliverables: ['Brand Storytelling Narratives', 'Executive Thought Leadership', 'Creative Brand Guidelines', 'Visual Identity Content'],
      kpi: '89% Positive Brand Recall'
    }
  };

  const activeGoalData = contentGoals[selectedGoal] || contentGoals['traffic'];
  const GoalIcon = activeGoalData.icon;

  return (
    <div className="bg-slate-50 font-sans min-h-screen">

      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient Brand Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_25%,#F5A623_50%,transparent_75%)] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (7 cols): User Hero Content */}
            <div className="lg:col-span-7">

              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-pink-50 text-pink-700 border border-pink-200/80 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6007A]" />
                  Content Creation &amp; Content Marketing Services
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00AED6]"></span>
                  Strategy &bull; Creativity &bull; Distribution
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                Content Doesn't Just Look Good. {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  It Performs.
                </span>
              </h1>

              {/* Subheading / Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                From brand storytelling and SEO blogs to social media content, videos, and campaign creatives—DMDY creates content designed to attract, engage, and convert your audience.
              </p>

              {/* Stats & Trust Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 max-w-xl mb-8 pt-6 border-t border-slate-100">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">10+</span>
                    <span className="text-xs font-semibold text-slate-500">Years</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Experience</div>
                </div>

                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A]">
                      Strategy
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">&bull; Creativity</div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#F5A623]">
                      Distribution
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Attract &bull; Engage &bull; Convert</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal('Content Creation & Marketing')}
                  className="w-full sm:w-auto btn-primary"
                >
                  <Sparkles className="w-4 h-4 text-[#F5A623] group-hover:rotate-12 transition-transform" />
                  Get a Free Content Audit
                </button>
                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20would%20like%20to%20discuss%20Content%20Creation%20%26%20Marketing%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-whatsapp"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  WhatsApp Expert
                </a>
              </div>

            </div>

            {/* Right Column (5 cols): Compact Content Performance Studio Card */}
            <div className="lg:col-span-5 w-full relative mt-6 lg:mt-0 max-w-[460px] mx-auto lg:ml-auto">

              {/* Floating Badge 1: Conversion Rate */}
              <div className="absolute -bottom-3 -right-2 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <Zap className="w-3.5 h-3.5 text-[#00AED6] fill-[#00AED6]" />
                <span className="text-[11px] font-bold text-slate-800">4.8% Conv. Rate</span>
              </div>

              {/* Main Content Studio Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 flex flex-col">

                {/* Header Window Bar */}
                <div className="bg-slate-50 px-3.5 py-2 flex items-center justify-between border-b border-slate-200/80">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-600 font-bold px-2 py-0.5 bg-white border border-slate-200 rounded-md shadow-xs flex items-center gap-1">
                    <PenTool className="w-2.5 h-2.5 text-[#E6007A]" />
                    dmdy.studio/content
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-3.5 sm:p-4 bg-white flex flex-col space-y-3">

                  {/* Interactive Content Type Tabs */}
                  <div className="flex items-center gap-1 pb-1.5 border-b border-slate-100 overflow-x-auto text-[11px]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('seo-blogs')}
                      className={`px-2.5 py-1 rounded-md font-bold transition-all shrink-0 ${activeTab === 'seo-blogs'
                        ? 'bg-pink-50 text-[#E6007A] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                      SEO Blogs
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('brand-story')}
                      className={`px-2.5 py-1 rounded-md font-bold transition-all shrink-0 ${activeTab === 'brand-story'
                        ? 'bg-cyan-50 text-[#00AED6] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                      Brand Story
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('social-video')}
                      className={`px-2.5 py-1 rounded-md font-bold transition-all shrink-0 ${activeTab === 'social-video'
                        ? 'bg-amber-50 text-[#F5A623] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                      Social &amp; Video
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('ad-creatives')}
                      className={`px-2.5 py-1 rounded-md font-bold transition-all shrink-0 ${activeTab === 'ad-creatives'
                        ? 'bg-cyan-50 text-[#00AED6] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                      Ad Creatives
                    </button>
                  </div>

                  {/* Active Content Showcase Box */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-left">

                    {/* Top Format & Status Pill */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E6007A] bg-pink-100/70 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-[#E6007A]" />
                        {currentSample.format}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active
                      </span>
                    </div>

                    {/* Content Headline */}
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-1.5">
                      "{currentSample.title}"
                    </h3>

                    {/* Tag / Highlight */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-[10px] text-slate-500 font-medium">Core Win:</span>
                      <span className="text-[10px] font-bold text-[#00AED6] bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-100 truncate">
                        {currentSample.highlight}
                      </span>
                    </div>

                    {/* 3 Live KPI Cards */}
                    <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-200/70">
                      <div className="bg-white p-1.5 rounded-lg border border-slate-100 shadow-xs">
                        <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider truncate">
                          {currentSample.metric1.label}
                        </div>
                        <div className="text-sm font-black text-slate-900 mt-0.5">
                          {currentSample.metric1.val}
                        </div>
                        <div className="text-[8px] text-slate-500 font-medium truncate">
                          {currentSample.metric1.note}
                        </div>
                      </div>

                      <div className="bg-white p-1.5 rounded-lg border border-slate-100 shadow-xs">
                        <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider truncate">
                          {currentSample.metric2.label}
                        </div>
                        <div className="text-sm font-black text-[#E6007A] mt-0.5">
                          {currentSample.metric2.val}
                        </div>
                        <div className="text-[8px] text-slate-500 font-medium truncate">
                          {currentSample.metric2.note}
                        </div>
                      </div>

                      <div className="bg-white p-1.5 rounded-lg border border-slate-100 shadow-xs">
                        <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider truncate">
                          {currentSample.metric3.label}
                        </div>
                        <div className="text-sm font-black text-emerald-600 mt-0.5">
                          {currentSample.metric3.val}
                        </div>
                        <div className="text-[8px] text-slate-500 font-medium truncate">
                          {currentSample.metric3.note}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* 3-Stage Content Pipeline Flow */}
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200/80 text-left">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1.5">
                      <span className="uppercase tracking-wider">Content Pipeline</span>
                      <span className="text-[#E6007A]">Attract &bull; Engage &bull; Convert</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="flex items-center gap-1 p-1 rounded-md bg-white border border-slate-200/80">
                        <div className="w-4 h-4 rounded bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-bold text-[9px] shrink-0">
                          1
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold text-slate-800 truncate">Strategy</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 p-1 rounded-md bg-white border border-slate-200/80">
                        <div className="w-4 h-4 rounded bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-bold text-[9px] shrink-0">
                          2
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold text-slate-800 truncate">Creativity</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 p-1 rounded-md bg-white border border-slate-200/80">
                        <div className="w-4 h-4 rounded bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center font-bold text-[9px] shrink-0">
                          3
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold text-slate-800 truncate">Distribution</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Quick Row */}
                  <div className="flex items-center justify-between text-[11px] px-1 pt-0.5">
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-600" />
                      Performance Focused
                    </span>
                    <button
                      type="button"
                      onClick={() => openModal('Content Creation & Marketing')}
                      className="text-[11px] font-bold text-[#E6007A] hover:text-[#00AED6] transition-colors cursor-pointer"
                    >
                      Audit Content &rarr;
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: THE WAY CONTENT HAS CHANGED        */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-14 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#00AED6]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Top 2-Column Row: Left Graphic + Right Narrative Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column (5 cols): Compact Content Matrix Card */}
            <div className="lg:col-span-5 w-full relative order-2 lg:order-1 max-w-[440px] mx-auto lg:mx-0">

              {/* Outer Logo Gradient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00AED6]/20 via-[#E6007A]/15 to-[#F5A623]/20 rounded-2xl blur-md opacity-60 -z-10"></div>

              {/* Floating Badge: Value > Frequency */}
              <div className="absolute -top-3 -right-2 z-20 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5 hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6007A] animate-ping"></span>
                <span className="text-[10px] font-bold text-slate-800">Value Over Posting Frequency</span>
              </div>

              {/* Main Simulated Content Ecosystem Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xl relative overflow-hidden">

                {/* Card Header */}
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#E6007A] animate-pulse"></div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700">
                      Modern Content Matrix
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-bold text-[#E6007A]">
                    <Sparkles className="w-2.5 h-2.5 text-[#E6007A]" />
                    <span>Multi-Platform Sync</span>
                  </div>
                </div>

                {/* Prompt / Buyer Psychology Query Box */}
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 mb-3 text-left">
                  <div className="text-[9px] uppercase font-bold text-slate-400 mb-0.5 flex items-center justify-between">
                    <span>Modern Buyer Psychology</span>
                    <span className="text-[#00AED6] font-semibold text-[9px]">High Intent Filter</span>
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 flex items-center gap-1.5 leading-snug">
                    <Flame className="w-3 h-3 text-[#E6007A] shrink-0" />
                    <span>"Does this content give me actionable value, answer my query, or inspire trust?"</span>
                  </div>
                </div>

                {/* 4 Core Responsibilities Mini Grid */}
                <div className="grid grid-cols-4 gap-1.5 mb-3">
                  <div className="p-1.5 rounded-lg bg-cyan-50/70 border border-cyan-200/80 text-center">
                    <div className="text-[10px] font-extrabold text-slate-900">Educate</div>
                    <div className="text-[8px] font-bold text-[#00AED6] flex items-center justify-center gap-0.5 mt-0.5">
                      <CheckCircle2 className="w-2 h-2" /> Authority
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-pink-50/70 border border-pink-200/80 text-center">
                    <div className="text-[10px] font-extrabold text-slate-900">Engage</div>
                    <div className="text-[8px] font-bold text-[#E6007A] flex items-center justify-center gap-0.5 mt-0.5">
                      <CheckCircle2 className="w-2 h-2" /> Attention
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-center">
                    <div className="text-[10px] font-extrabold text-slate-900">Convert</div>
                    <div className="text-[8px] font-bold text-[#F5A623] flex items-center justify-center gap-0.5 mt-0.5">
                      <CheckCircle2 className="w-2 h-2" /> Enquiries
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-cyan-50/70 border border-cyan-200/80 text-center">
                    <div className="text-[10px] font-extrabold text-slate-900">Retain</div>
                    <div className="text-[8px] font-bold text-[#00AED6] flex items-center justify-center gap-0.5 mt-0.5">
                      <CheckCircle2 className="w-2 h-2" /> Loyalty
                    </div>
                  </div>
                </div>

                {/* Evolution Comparison Strip */}
                <div className="p-3 rounded-xl bg-slate-900 text-white relative shadow-md overflow-hidden">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-200">
                      <ShieldCheck className="w-3 h-3 text-[#00AED6]" />
                      <span>Daily Noise vs. Performance Content</span>
                    </div>
                    <span className="text-[8px] font-mono text-emerald-400 font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded">
                      High Impact
                    </span>
                  </div>

                  <div className="space-y-1 text-[11px] text-slate-300">
                    <div className="flex items-center justify-between py-0.5 border-b border-slate-800">
                      <span className="text-slate-400">Old Way:</span>
                      <span className="font-semibold text-rose-400">Posting noise &bull; 0 Leads</span>
                    </div>
                    <div className="flex items-center justify-between py-0.5">
                      <span className="text-slate-400">DMDY System:</span>
                      <span className="font-bold text-emerald-400">Authority &bull; Leads &bull; Loyalty</span>
                    </div>
                  </div>

                  {/* Multi-Channel Distribution Tags */}
                  <div className="mt-2 pt-1.5 border-t border-slate-800 flex flex-wrap items-center gap-1">
                    <span className="text-[9px] text-slate-400 font-medium">Synced:</span>
                    <span className="text-[8px] font-bold bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded border border-slate-700">Google</span>
                    <span className="text-[8px] font-bold bg-slate-800 text-pink-300 px-1.5 py-0.5 rounded border border-slate-700">Meta</span>
                    <span className="text-[8px] font-bold bg-slate-800 text-blue-300 px-1.5 py-0.5 rounded border border-slate-700">LinkedIn</span>
                    <span className="text-[8px] font-bold bg-slate-800 text-amber-300 px-1.5 py-0.5 rounded border border-slate-700">AI Search</span>
                  </div>
                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    <span>Audience Trust &amp; Retention</span>
                  </div>
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    3.8x Higher Conversion
                  </span>
                </div>

              </div>

            </div>

            {/* Right Column (7 cols): User Narrative & Responsibilities */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2">

              {/* Category Pill with Logo Colors */}
              <div className="flex items-center gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-50 via-pink-50 to-amber-50 text-slate-800 border border-[#E6007A]/30 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00AED6] to-[#E6007A] animate-pulse"></span>
                  The New Paradigm
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
                  Quality &bull; Relevance &bull; Memorability
                </span>
              </div>

              {/* Title with BookOpen Icon & Logo Gradient */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00AED6]/15 via-[#E6007A]/10 to-[#F5A623]/10 border border-[#00AED6]/30 flex items-center justify-center text-[#00AED6] shrink-0 shadow-xs">
                  <BookOpen className="w-5 h-5 text-[#00AED6]" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  The Way Content{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Has Changed
                  </span>
                </h2>
              </div>

              {/* Sub-headline / Core Reality */}
              <p className="text-base sm:text-lg font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                People don't buy because brands post every day—they buy because brands consistently provide valuable, relevant, and memorable content.
              </p>

              {/* Today's content must perform across: */}
              <div className="mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6007A]"></span>
                  Today's content must perform across:
                </div>

                <div className="flex flex-wrap gap-2">

                  {/* Google Search */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-[#00AED6] transition-all">
                    <Search className="w-3.5 h-3.5 text-[#00AED6]" />
                    <span className="text-xs font-bold text-slate-800">Google Search</span>
                  </div>

                  {/* Instagram & Facebook */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-[#E6007A] transition-all">
                    <Share2 className="w-3.5 h-3.5 text-[#E6007A]" />
                    <span className="text-xs font-bold text-slate-800">Instagram &amp; Facebook</span>
                  </div>

                  {/* LinkedIn */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-[#F5A623] transition-all">
                    <Users className="w-3.5 h-3.5 text-[#F5A623]" />
                    <span className="text-xs font-bold text-slate-800">LinkedIn</span>
                  </div>

                  {/* YouTube */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-[#E6007A] transition-all">
                    <Video className="w-3.5 h-3.5 text-[#E6007A]" />
                    <span className="text-xs font-bold text-slate-800">YouTube</span>
                  </div>

                  {/* AI Search (ChatGPT & Gemini) */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-[#00AED6] transition-all">
                    <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                    <span className="text-xs font-bold text-slate-800">AI Search (ChatGPT &amp; Gemini)</span>
                  </div>

                  {/* Email & CRM */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-[#F5A623] transition-all">
                    <Send className="w-3.5 h-3.5 text-[#F5A623]" />
                    <span className="text-xs font-bold text-slate-800">Email &amp; CRM</span>
                  </div>

                  {/* Websites & Landing Pages */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-[#00AED6] transition-all">
                    <Globe className="w-3.5 h-3.5 text-[#00AED6]" />
                    <span className="text-xs font-bold text-slate-800">Websites &amp; Landing Pages</span>
                  </div>

                </div>
              </div>

              {/* Modern content has four responsibilities: */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    Modern content has{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                      four responsibilities:
                    </span>
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider hidden sm:inline">
                    Responsibility &bull; Outcome
                  </span>
                </div>

                {/* Structured Responsive Table (Compact) */}
                <div className="overflow-hidden rounded-xl border border-slate-200/90 shadow-xs bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/90 border-b border-slate-200/80">
                        <th className="py-2 px-3 sm:px-4 text-[11px] font-extrabold uppercase tracking-wider text-slate-700 w-1/2">
                          Responsibility
                        </th>
                        <th className="py-2 px-3 sm:px-4 text-[11px] font-extrabold uppercase tracking-wider text-slate-700 w-1/2">
                          Outcome
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {/* Row 1: Educate -> Build authority */}
                      <tr className="hover:bg-cyan-50/30 transition-colors">
                        <td className="py-2.5 px-3 sm:px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-cyan-50 text-[#00AED6] flex items-center justify-center shrink-0">
                              <BookOpen className="w-3 h-3" />
                            </div>
                            <span className="font-extrabold text-slate-900">Educate</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#00AED6] bg-cyan-50/80 px-2.5 py-0.5 rounded-full border border-cyan-200/60">
                            <CheckCircle2 className="w-3 h-3 text-[#00AED6]" />
                            Build authority
                          </span>
                        </td>
                      </tr>

                      {/* Row 2: Engage -> Capture attention */}
                      <tr className="hover:bg-pink-50/30 transition-colors">
                        <td className="py-2.5 px-3 sm:px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-pink-50 text-[#E6007A] flex items-center justify-center shrink-0">
                              <Flame className="w-3 h-3" />
                            </div>
                            <span className="font-extrabold text-slate-900">Engage</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#E6007A] bg-pink-50/80 px-2.5 py-0.5 rounded-full border border-pink-200/60">
                            <CheckCircle2 className="w-3 h-3 text-[#E6007A]" />
                            Capture attention
                          </span>
                        </td>
                      </tr>

                      {/* Row 3: Convert -> Generate enquiries */}
                      <tr className="hover:bg-amber-50/30 transition-colors">
                        <td className="py-2.5 px-3 sm:px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-amber-50 text-[#F5A623] flex items-center justify-center shrink-0">
                              <Target className="w-3 h-3" />
                            </div>
                            <span className="font-extrabold text-slate-900">Convert</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F5A623] bg-amber-50/80 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                            <CheckCircle2 className="w-3 h-3 text-[#F5A623]" />
                            Generate enquiries
                          </span>
                        </td>
                      </tr>

                      {/* Row 4: Retain -> Create loyal customers */}
                      <tr className="hover:bg-cyan-50/30 transition-colors">
                        <td className="py-2.5 px-3 sm:px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-cyan-50 text-[#00AED6] flex items-center justify-center shrink-0">
                              <Users className="w-3 h-3" />
                            </div>
                            <span className="font-extrabold text-slate-900">Retain</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#00AED6] bg-cyan-50/80 px-2.5 py-0.5 rounded-full border border-cyan-200/60">
                            <CheckCircle2 className="w-3 h-3 text-[#00AED6]" />
                            Create loyal customers
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE DMDY CONTENT ECOSYSTEM™                    */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Proprietary Methodology</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
              The DMDY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Content Ecosystem™
              </span>
            </h2>

            {/* Research → Create → Distribute → Grow Flow Pipeline */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-50 text-[#00AED6] font-bold text-xs sm:text-sm border border-cyan-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00AED6]"></span>
                Research
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-pink-50 text-[#E6007A] font-bold text-xs sm:text-sm border border-pink-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#E6007A]"></span>
                Create
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 text-[#F5A623] font-bold text-xs sm:text-sm border border-amber-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]"></span>
                Distribute
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-50 text-[#00AED6] font-bold text-xs sm:text-sm border border-cyan-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00AED6]"></span>
                Grow
              </span>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              This becomes your branded framework.
            </p>
          </div>

          {/* 4 Framework Layer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

            {/* Layer 1 — Research */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Compass className="w-5 h-5 text-[#00AED6]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Layer 01
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Research
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Audience research, keyword planning, competitor insights, content pillars.
                </p>
              </div>

              {/* Tag Badges */}
              <div className="pt-3 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Audience Intel</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Keyword Planning</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Content Pillars</span>
              </div>
            </div>

            {/* Layer 2 — Create */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <PenTool className="w-5 h-5 text-[#E6007A]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Layer 02
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Create
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Blogs, website copy, Reels, carousels, ad copy, email content, product descriptions.
                </p>
              </div>

              {/* Tag Badges */}
              <div className="pt-3 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Blogs &amp; Copy</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Reels &amp; Carousels</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Ad Creatives</span>
              </div>
            </div>

            {/* Layer 3 — Distribute */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Share2 className="w-5 h-5 text-[#F5A623]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F5A623] border border-amber-200/80">
                    Layer 03
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#F5A623] transition-colors tracking-tight">
                  Distribute
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  SEO, social media, email marketing, paid campaigns, website publishing.
                </p>
              </div>

              {/* Tag Badges */}
              <div className="pt-3 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">SEO Rank</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Social Media</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Paid Campaigns</span>
              </div>
            </div>

            {/* Layer 4 — Grow */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <TrendingUp className="w-5 h-5 text-[#00AED6]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Layer 04
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Grow
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Content performance, engagement, rankings, conversions, continuous optimization.
                </p>
              </div>

              {/* Tag Badges */}
              <div className="pt-3 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Rankings</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Conversions</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Continuous Opt</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHAT'S INCLUDED IN OUR CONTENT SERVICES        */}
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
                Content Creation &amp; Marketing Services
              </span>
            </h2>
          </div>

          {/* 3-Column Clean, Compact & Centered Layout (6 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10 w-full">

            {/* 1. SEO Content Writing */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100/80 flex items-center justify-center shadow-xs">
                  <Search className="w-5 h-5 text-[#00AED6]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#00AED6] transition-colors">
                SEO Content Writing
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Blogs, service pages &amp; pillar content
              </p>
            </div>

            {/* 2. Social Media Content */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#E6007A] border border-pink-100/80 flex items-center justify-center shadow-xs">
                  <Share2 className="w-5 h-5 text-[#E6007A]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#E6007A] transition-colors">
                Social Media Content
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Reels, captions, stories &amp; carousel posts
              </p>
            </div>

            {/* 3. Brand Copywriting */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#F5A623] border border-amber-100/80 flex items-center justify-center shadow-xs">
                  <PenTool className="w-5 h-5 text-[#F5A623]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#F5A623] transition-colors">
                Brand Copywriting
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Website copy, landing pages &amp; brand messaging
              </p>
            </div>

            {/* 4. Video Content Strategy */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100/80 flex items-center justify-center shadow-xs">
                  <Video className="w-5 h-5 text-[#00AED6]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#00AED6] transition-colors">
                Video Content Strategy
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Short-form video planning &amp; scripting
              </p>
            </div>

            {/* 5. Email Content */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#E6007A] border border-pink-100/80 flex items-center justify-center shadow-xs">
                  <Send className="w-5 h-5 text-[#E6007A]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#E6007A] transition-colors">
                Email Content
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Newsletters, campaigns &amp; nurture sequences
              </p>
            </div>

            {/* 6. Ad Creative Copy */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#F5A623] border border-amber-100/80 flex items-center justify-center shadow-xs">
                  <Target className="w-5 h-5 text-[#F5A623]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#F5A623] transition-colors">
                Ad Creative Copy
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Google Ads, Meta Ads &amp; campaign messaging
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: CONTENT BY INDUSTRY (NO IMAGES)                */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-50/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-pink-50/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Tailored Industry Expertise</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
              Content by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Industry
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Specialized content frameworks crafted for the specific demands of your target market.
            </p>
          </div>

          {/* 6 Industry Cards Grid (No Images — Clean Icon Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {/* 1. Real Estate */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <Building2 className="w-6 h-6 text-[#00AED6]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Real Estate
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Real Estate
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-4">
                  Property storytelling &amp; location content
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Property Stories</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Location Guides</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Buyer Intent</span>
              </div>
            </div>

            {/* 2. E-commerce */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#E6007A] border border-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <ShoppingBag className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    E-Commerce
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  E-commerce
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-4">
                  Product descriptions &amp; conversion copy
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Product Descriptions</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Conversion Copy</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">High CTR</span>
              </div>
            </div>

            {/* 3. Healthcare */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F5A623] border border-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <HeartPulse className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F5A623] border border-amber-200/80">
                    Healthcare
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F5A623] transition-colors tracking-tight">
                  Healthcare
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-4">
                  Educational &amp; trust-building content
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Patient Trust</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Educational Guides</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Medical Accuracy</span>
              </div>
            </div>

            {/* 4. Education */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <GraduationCap className="w-6 h-6 text-[#00AED6]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Education
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Education
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-4">
                  Student-focused content marketing
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Student Enrollment</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Course Guides</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Campus Culture</span>
              </div>
            </div>

            {/* 5. Hospitality */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#E6007A] border border-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <Utensils className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Hospitality
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Hospitality
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-4">
                  Experience-driven visual storytelling
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Visual Stories</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Experiences</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Booking Prompts</span>
              </div>
            </div>

            {/* 6. B2B */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F5A623] border border-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <Briefcase className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F5A623] border border-amber-200/80">
                    B2B Enterprise
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#F5A623] transition-colors tracking-tight">
                  B2B
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-4">
                  Thought leadership &amp; LinkedIn content
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/70 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Thought Leadership</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">LinkedIn Content</span>
                <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80">Decision Makers</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: OUR CONTENT PROCESS                            */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Brand Glows */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column (7 cols): Section Header & 5 Process Steps */}
            <div className="lg:col-span-7">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
                <TrendingUp className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>Execution Blueprint</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Our Content{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Process
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-7 max-w-xl">
                A disciplined 5-stage framework engineered to turn raw ideas into high-performing content assets that drive audience engagement and commercial revenue.
              </p>

              {/* 5 Process Steps - Clean Unboxed Flow */}
              <div className="space-y-3">
                {processSteps.map((step, idx) => {
                  const isSelected = activeProcessStep === idx;
                  return (
                    <div
                      key={step.step}
                      onClick={() => setActiveProcessStep(idx)}
                      className={`flex items-start gap-3.5 sm:gap-4 group cursor-pointer p-2.5 rounded-2xl transition-all duration-200 ${isSelected
                        ? 'bg-white shadow-md border border-slate-200/90'
                        : 'hover:bg-white/70 border border-transparent'
                        }`}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5 shadow-xs"
                        style={{
                          backgroundColor: `${step.color}15`,
                          color: step.color
                        }}
                      >
                        {step.step}
                      </div>

                      <div className="flex-1 pb-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-0.5">
                          <h3
                            className="text-base sm:text-lg font-bold text-slate-900 transition-colors"
                            style={{ color: isSelected ? step.color : undefined }}
                          >
                            {step.title}
                          </h3>
                          <span className="text-slate-300 font-bold text-sm hidden sm:inline">&rarr;</span>
                          <span className="text-xs sm:text-sm text-slate-600 font-normal">
                            {step.desc}
                          </span>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center text-slate-300 group-hover:text-slate-500 transition-colors pt-2">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Column (5 cols): Dynamic Interactive Workflow Inspector Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 max-w-[440px] mx-auto lg:mx-0 w-full">

              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00AED6]/20 via-[#E6007A]/15 to-[#F5A623]/20 rounded-2xl blur-md opacity-60 -z-10"></div>

              {/* Floating Top Badge */}
              <div className="absolute -top-3 -right-2 z-20 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5 hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-[10px] font-bold text-slate-800">Stage 0{activeProcessStep + 1} of 05 Active</span>
              </div>

              {/* Main Workflow Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xl relative overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full animate-pulse"
                      style={{ backgroundColor: currentProcess.color }}
                    ></div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                      Workflow Inspector
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border shadow-xs"
                    style={{
                      backgroundColor: `${currentProcess.color}15`,
                      color: currentProcess.color,
                      borderColor: `${currentProcess.color}30`
                    }}
                  >
                    {currentProcess.tag}
                  </span>
                </div>

                {/* Stage Navigation Pills */}
                <div className="grid grid-cols-5 gap-1 p-1 bg-slate-100/90 rounded-xl mb-3.5">
                  {processSteps.map((step, idx) => (
                    <button
                      key={step.step}
                      type="button"
                      onClick={() => setActiveProcessStep(idx)}
                      className={`py-1 rounded-lg text-[10px] font-extrabold transition-all cursor-pointer ${activeProcessStep === idx
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                      {step.step}
                    </button>
                  ))}
                </div>

                {/* Active Stage Highlight Box */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 mb-3.5 text-left">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded-lg flex items-center justify-center text-xs font-black shadow-2xs"
                        style={{
                          backgroundColor: `${currentProcess.color}20`,
                          color: currentProcess.color
                        }}
                      >
                        {currentProcess.step}
                      </div>
                      <span className="text-sm font-extrabold text-slate-900">
                        {currentProcess.title} Stage
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                      {currentProcess.highlight}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-medium mb-3">
                    {currentProcess.desc}
                  </p>

                  {/* Checklist of deliverables */}
                  <div className="space-y-1.5 pt-2.5 border-t border-slate-200/70">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                      Key Deliverables &amp; Milestones:
                    </div>
                    {currentProcess.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: currentProcess.color }}
                        />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metric Strip */}
                <div className="p-2.5 bg-white rounded-xl border border-slate-200/90 shadow-xs mb-3.5 flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-[9px] uppercase font-bold text-slate-400">
                      {currentProcess.metric.label}
                    </div>
                    <div
                      className="text-sm font-black"
                      style={{ color: currentProcess.color }}
                    >
                      {currentProcess.metric.val}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] uppercase font-bold text-slate-400">Standard</div>
                    <div className="text-[11px] font-bold text-slate-700">
                      {currentProcess.metric.note}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <button
                  type="button"
                  onClick={() => openModal('Content Creation & Marketing')}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-3 h-3 text-[#00AED6]" />
                  <span>Start Your Content Plan With DMDY</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: CHOOSE YOUR CONTENT GOAL                       */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-50/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-pink-50/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Target className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Strategy Matcher</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Content Goal
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              Every business has distinct growth targets. Select what matters most right now to see the exact content architecture and deliverables we deploy.
            </p>
          </div>

          {/* 2-Column Responsive Layout: Left Interactive Card + Right Table Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">


            {/* Left Column (5 cols): 3D Visual Showcase */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00AED6] animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">Precision Strategy</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src={contentMarketingGoalsImg}
                  alt="Choose Your Content Goal"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

            </div>

            {/* Right Column (7 cols): Interactive Goal Card */}
            <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">

              {/* Interactive Tabs Header - 4 Goals */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 bg-slate-100/90 rounded-2xl w-full mb-4 border border-slate-200/80">
                {[
                  { id: 'traffic', label: 'More Website Traffic' },
                  { id: 'social', label: 'Better Social Presence' },
                  { id: 'leads', label: 'More Leads' },
                  { id: 'brand', label: 'Stronger Brand' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedGoal(tab.id)}
                    className={`w-full px-2 py-2 rounded-xl text-xs font-bold text-center transition-all duration-200 cursor-pointer ${selectedGoal === tab.id
                      ? 'bg-white text-slate-950 shadow-sm border border-slate-200/80 scale-[1.01]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Goal Showcase Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm transition-all duration-300 relative overflow-hidden flex flex-col justify-between flex-1">
                <div>

                  {/* Top Row: Icon + Title + KPI Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                        style={{ backgroundColor: `${activeGoalData.color}15`, color: activeGoalData.color }}
                      >
                        <GoalIcon className="w-5 h-5" style={{ color: activeGoalData.color }} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                          {activeGoalData.title}
                        </h3>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          Target Outcome
                        </div>
                      </div>
                    </div>
                    <span
                      className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border shadow-2xs"
                      style={{
                        backgroundColor: `${activeGoalData.color}15`,
                        color: activeGoalData.color,
                        borderColor: `${activeGoalData.color}30`
                      }}
                    >
                      {activeGoalData.kpi}
                    </span>
                  </div>

                  {/* Recommended Focus Highlight Box */}
                  <div className="p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-xs mb-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Recommended Focus
                    </div>
                    <div className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 shrink-0" style={{ color: activeGoalData.color }} />
                      <span>{activeGoalData.focus}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {activeGoalData.desc}
                  </p>
                </div>

                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={() => openModal('Content Creation & Marketing')}
                  className="w-full py-3 px-4 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:opacity-95"
                  style={{ backgroundColor: activeGoalData.color }}
                >
                  <span>Plan For {activeGoalData.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS                     */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Brand Glows */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column (4 cols): Sticky Section Header & Direct Support Box */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>FAQs (AEO Optimized)</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                Frequently Asked <br className="hidden lg:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Questions
                </span>
              </h2>

              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">
                Strategy • Creation • Distribution
              </p>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
                Clear, transparent answers about our content creation methodology, SEO writing, formats, and lead generation frameworks.
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
                  Our content strategists are available for free editorial audits and content roadmap consultations.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20have%20questions%20about%20Content%20Creation%20%26%20Marketing%20Services."
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
            <div className="lg:col-span-8 space-y-3 sm:space-y-3.5">
              {faqs.map((faq, idx) => {
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
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                      ? `bg-white ${accentBorder} shadow-sm`
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? `rotate-180 ${accentText}` : 'text-slate-400'
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
      {/* SECTION 9: FINAL CTA                                      */}
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
                  <span>Performance Content Ecosystem</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
                  Create Content That Builds More Than{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                    Engagement.
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Build authority, improve visibility, and turn your content into a powerful growth engine with DMDY's Content Creation &amp; Content Marketing Services.
                </p>

              </div>

              {/* Right Column: Action Buttons */}
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => openModal('Content Creation & Marketing')}
                  className="btn-primary"
                >
                  <span>Get Your Free Content Strategy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20would%20like%20to%20discuss%20Content%20Creation%20%26%20Marketing%20Services."
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

export default ContentMarketingService;
