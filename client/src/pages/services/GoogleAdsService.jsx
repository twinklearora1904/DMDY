import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  DollarSign, 
  Search, 
  MousePointerClick, 
  ShieldCheck, 
  Layers, 
  Award,
  Eye,
  ChevronRight,
  Filter,
  RefreshCw,
  Compass,
  ShoppingBag,
  Play,
  Monitor,
  Building2,
  HeartPulse,
  GraduationCap,
  Store,
  Briefcase,
  Users,
  HelpCircle,
  MessageCircle,
  ChevronDown
} from 'lucide-react';
import realEstateImg from '../../assets/social-media/industry-real-estate.jpg';
import ecommerceImg from '../../assets/social-media/industry-ecommerce.jpg';
import healthcareImg from '../../assets/social-media/industry-healthcare.jpg';
import educationImg from '../../assets/google-ads/industry-education.jpg';
import localBusinessImg from '../../assets/google-ads/industry-local-business.jpg';
import professionalServicesImg from '../../assets/social-media/industry-professional-services.jpg';
import ppcGrowthProcessImg from '../../assets/google-ads/ppc_growth_process.jpg';
import ppcBusinessGoalsImg from '../../assets/google-ads/ppc_business_goals.jpg';

const CAMPAIGN_MODES = {
  search: {
    label: 'Search Campaigns',
    tag: 'High-Intent Buyer Keywords',
    badge: '9.8/10 Quality Score',
    headline: 'Enterprise B2B Growth Agency | Guaranteed 5.8x ROAS',
    url: 'https://www.dmdy.co/services/google-ads',
    desc: 'Capture ready-to-buy prospects with intent-matched search ads, negative keyword shielding, and high-converting landing pages. Zero budget wasted on junk clicks.',
    sitelinks: ['Free PPC Audit', '5.8x ROAS Case Studies', 'Enterprise Pricing', 'Book Strategy Call'],
    roas: '5.8x',
    cpa: '$24.50',
    cpaChange: '-41% Lower CPA',
    cvr: '8.9%',
    impressions: '148,200',
    clicks: '13,190',
    spend: '$4,280',
    revenue: '$24,824'
  },
  pmax: {
    label: 'Performance Max (PMax)',
    tag: 'Multi-Channel AI Placements',
    badge: 'Google AI Smart Bidding',
    headline: 'Full-Funnel Omnichannel Scale | Google PMax Engine',
    url: 'https://www.dmdy.co/services/google-ads/pmax',
    desc: 'Unify Search, YouTube, Gmail, Maps & Display through algorithmically tuned creative asset groups, audience signals, and value-based bidding.',
    sitelinks: ['Asset Group Teardown', 'Audience Signals', 'Omnichannel Reach', 'Instant Scale'],
    roas: '6.4x',
    cpa: '$19.80',
    cpaChange: '-48% Lower CPA',
    cvr: '9.4%',
    impressions: '392,000',
    clicks: '24,800',
    spend: '$6,150',
    revenue: '$39,360'
  },
  shopping: {
    label: 'Shopping & E-Commerce',
    tag: 'High-Volume Product Feeds',
    badge: 'Merchant Center Optimized',
    headline: 'E-Commerce Google Shopping Scale | Maximize Cart Value',
    url: 'https://www.dmdy.co/services/google-ads/shopping',
    desc: 'Optimized product feeds, custom labels, segmented margin bidding, and dynamic retargeting that scale Shopify & WooCommerce stores profitably.',
    sitelinks: ['Feed Optimization', 'Margin-Based Bids', 'ROAS Calculator', 'Merchant Fixes'],
    roas: '7.2x',
    cpa: '$14.20',
    cpaChange: '-53% Lower CPA',
    cvr: '6.8%',
    impressions: '540,100',
    clicks: '36,450',
    spend: '$8,400',
    revenue: '$60,480'
  },
  display: {
    label: 'Remarketing & Display',
    tag: 'Precision Re-Engagement',
    badge: 'Zero Brand Waste',
    headline: 'High-Converting Retargeting Ads | Recapture Lost Buyers',
    url: 'https://www.dmdy.co/services/google-ads/retargeting',
    desc: 'Re-engage 97% of website drop-offs across Google Display Network and YouTube with compelling sequential offers and intent-based frequency capping.',
    sitelinks: ['Audience Lists', 'Sequential Retargeting', 'Offer Testing', 'Brand Safety'],
    roas: '4.9x',
    cpa: '$11.60',
    cpaChange: '-62% Lower CPA',
    cvr: '5.2%',
    impressions: '720,000',
    clicks: '18,200',
    spend: '$2,100',
    revenue: '$10,290'
  }
};

const GoogleAdsService = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [selectedGoal, setSelectedGoal] = useState('leads');
  const [openFaq, setOpenFaq] = useState(0);
  const currentCampaign = CAMPAIGN_MODES[activeTab];

  useEffect(() => {
    document.title = 'Google Ads & PPC Management Services That Drive High ROAS — DMDY';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4285F4_0%,#E6007A_25%,transparent_70%)] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (7 cols): User Hero Content */}
            <div className="lg:col-span-7">
              
              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#4285F4]" />
                  360° Digital Growth
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6007A]"></span>
                  Google Ads &bull; PPC &bull; ROAS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A]">
                  Google Ads Services
                </span>{' '}
                That Turn Every Click Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6007A] via-[#F5A623] to-[#00AED6]">
                  Business Growth.
                </span>
              </h1>

              {/* Subheading / Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                Drive high-intent traffic, generate qualified leads, and maximize your advertising ROI with strategic Google Ads campaigns managed by DMDY.
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
                    <span className="text-xs font-semibold text-slate-500">Strategy</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Google Ads Management</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg text-center text-sm sm:text-base hover:-translate-y-0.5 justify-center flex items-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-[#F5A623] group-hover:rotate-12 transition-transform" />
                  Get Free Google Ads Audit
                </Link>
                <a 
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20would%20like%20to%20discuss%20Google%20Ads%20%26%20PPC%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-full border border-slate-300 transition-all shadow-sm hover:shadow text-center text-sm sm:text-base flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp PPC Expert
                </a>
              </div>

            </div>

            {/* Right Column (5 cols): Google Ads Command Center Live Dashboard */}
            <div className="lg:col-span-5 w-full relative mt-8 lg:mt-0">
              
              {/* Floating Badge 1: Top 3% Google Premier Partner */}
              <div className="absolute -top-10 -left-4 z-20 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#4285F4] shadow-sm">
                  <Award className="w-4 h-4 text-[#4285F4]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Certified Experts</div>
                  <div className="text-xs font-extrabold text-slate-900 flex items-center gap-1">
                    Google Partner Certified
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Proven ROAS Scale */}
              <div className="absolute top-1/3 -right-4 z-20 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Campaign ROAS</div>
                  <div className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-[#00AED6]">
                    5.8x - 7.2x Return
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Zero Waste Negative Shield */}
              <div className="absolute -bottom-5 left-4 sm:left-8 z-20 bg-white px-3 sm:px-4 py-1.5 rounded-full shadow-lg border border-slate-100 hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-700">Shield Active: 4,800+ Negative Keywords (0% Waste)</span>
              </div>

              {/* Main Google Ads Interactive Dashboard Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col">
                
                {/* Header Window Bar */}
                <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200/80">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></div>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold px-2.5 py-0.5 bg-white border border-slate-200 rounded-md shadow-sm flex items-center gap-1.5">
                    <Target className="w-3 h-3 text-[#4285F4]" />
                    ads.google.com/dmdy-ppc-engine
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-5 sm:p-6 bg-white flex flex-col space-y-4">
                  
                  {/* Channel Switcher Tabs */}
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100 overflow-x-auto text-xs no-scrollbar">
                    {Object.entries(CAMPAIGN_MODES).map(([key, mode]) => (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 text-left flex items-center gap-1.5 ${
                          activeTab === key
                            ? 'bg-blue-50 text-[#4285F4] border border-blue-200/80 shadow-xs'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>

                  {/* Real-time Performance Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">Avg ROAS</div>
                      <div className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#E6007A]">
                        {currentCampaign.roas}
                      </div>
                      <div className="text-[9px] font-bold text-emerald-600">+42% vs Bench</div>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">Target CPA</div>
                      <div className="text-lg sm:text-xl font-black text-slate-900">
                        {currentCampaign.cpa}
                      </div>
                      <div className="text-[9px] font-bold text-blue-600">{currentCampaign.cpaChange}</div>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">Conv. Rate</div>
                      <div className="text-lg sm:text-xl font-black text-emerald-600">
                        {currentCampaign.cvr}
                      </div>
                      <div className="text-[9px] font-bold text-slate-500">High-Intent</div>
                    </div>
                  </div>

                  {/* Live Google Search Ad Preview Box */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/40 via-white to-slate-50 border border-blue-100/80 shadow-xs text-left">
                    
                    {/* Search Bar Representation */}
                    <div className="bg-white rounded-xl px-3 py-1.5 border border-slate-200 shadow-inner flex items-center gap-2 mb-3">
                      <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-xs text-slate-700 font-medium truncate">
                        top performance google ads agency for scale
                      </span>
                      <span className="ml-auto text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        Exact Match
                      </span>
                    </div>

                    {/* Google Ad Meta */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                        Sponsored
                      </span>
                      <span className="text-[11px] text-slate-500 truncate">
                        {currentCampaign.url}
                      </span>
                    </div>

                    {/* Ad Title */}
                    <h4 className="text-xs sm:text-sm font-bold text-[#1a0dab] hover:underline cursor-pointer leading-snug mb-1.5">
                      {currentCampaign.headline}
                    </h4>

                    {/* Ad Description */}
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mb-3">
                      {currentCampaign.desc}
                    </p>

                    {/* Sitelinks Extensions */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      {currentCampaign.sitelinks.map((link, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-[11px] font-bold text-[#1a0dab] hover:text-[#E6007A] transition-colors cursor-pointer">
                          <ChevronRight className="w-3 h-3 text-[#1a0dab]" />
                          <span>{link}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Campaign Optimization Telemetry Strip */}
                  <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#4285F4]">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">
                          Smart Bid Strategy
                        </div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          tROAS Algorithm Active
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[9px] text-slate-400 font-medium">Monthly Spend &rarr; Return</div>
                      <div className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#F5A623] to-emerald-400">
                        {currentCampaign.spend} &rarr; {currentCampaign.revenue}
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
      {/* SECTION 2: THE WAY CUSTOMERS CLICK & PAID SEARCH HAS CHANGED */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4285F4]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Top 2-Column Row: Left Graphic + Right Narrative Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (5 cols): PPC Intent Auction & Conversion Engine Graphic */}
            <div className="lg:col-span-5 w-full relative order-2 lg:order-1">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#4285F4]/20 via-[#E6007A]/20 to-[#00AED6]/20 rounded-3xl blur-lg opacity-70 -z-10"></div>

              {/* Floating Badge: Intent Signal */}
              <div className="absolute -top-4 -right-2 z-20 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-ping"></span>
                <span className="text-[11px] font-bold text-slate-800">94%+ High-Intent Buyer Traffic</span>
              </div>

              {/* Main Simulated Paid Search Engine Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xl relative overflow-hidden">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4285F4] animate-pulse"></div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                      Paid Search Auction Engine
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-[#4285F4]">
                    <Sparkles className="w-3 h-3 text-[#4285F4]" />
                    <span>Real-Time AI Bidding</span>
                  </div>
                </div>

                {/* Simulated Buyer Search Query Box */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 mb-4">
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center justify-between">
                    <span>High Commercial Intent Query</span>
                    <span className="text-[#34A853] font-semibold text-[10px]">Ready to Buy</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
                    <span className="truncate">"enterprise b2b cloud solution pricing &amp; demo"</span>
                  </div>
                </div>

                {/* 4 Paid Search Shift Pillars Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {/* Audience AI */}
                  <div className="p-2 rounded-xl bg-blue-50/60 border border-blue-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Audience AI</div>
                    <div className="text-[9px] font-bold text-[#4285F4] flex items-center justify-center gap-1 mt-0.5">
                      <span>In-Market</span>
                    </div>
                  </div>

                  {/* Negative Shield */}
                  <div className="p-2 rounded-xl bg-pink-50/60 border border-pink-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Negative Shield</div>
                    <div className="text-[9px] font-bold text-[#E6007A] flex items-center justify-center gap-1 mt-0.5">
                      <span>0% Waste</span>
                    </div>
                  </div>

                  {/* Smart Bidding */}
                  <div className="p-2 rounded-xl bg-amber-50/60 border border-amber-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">tROAS Target</div>
                    <div className="text-[9px] font-bold text-[#F5A623] flex items-center justify-center gap-1 mt-0.5">
                      <span>Max Value</span>
                    </div>
                  </div>

                  {/* CRO Landing Page */}
                  <div className="p-2 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">CRO Match</div>
                    <div className="text-[9px] font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                      <span>High CvR</span>
                    </div>
                  </div>
                </div>

                {/* Simulated High-Performing Auction Teardown Box */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white relative shadow-lg overflow-hidden">
                  
                  {/* Top Logo Gradient Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#E6007A] to-[#00AED6]"></div>
                  
                  <div className="flex items-center justify-between mb-2 pt-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-200">
                      <Zap className="w-3.5 h-3.5 text-[#F5A623]" />
                      <span>DMDY Intent Bidding Engine</span>
                    </div>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      5.8x ROAS Locked
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    "Modern PPC advertising is no longer about blind bidding. Every click is dynamically screened for <strong className="text-white font-bold">buying intent</strong>, <strong className="text-[#00AED6]">audience qualification</strong>, and <strong className="text-emerald-400">conversion value</strong>."
                  </p>

                  {/* Optimization Parameters Strip */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-slate-800">
                    <span className="text-[10px] font-semibold text-slate-400">Signals:</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-blue-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
                      Exact &amp; Phrase Match
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-pink-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E6007A]"></span>
                      Automated Negative Exclusion
                    </span>
                  </div>

                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Customer Acquisition Efficiency</span>
                  </div>
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#E6007A]">
                    -41% Lower Cost Per Lead
                  </span>
                </div>

              </div>

            </div>

            {/* Right Column (7 cols): User Narrative Content */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2">
              
              {/* Category Pill with Brand Colors */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-50 via-pink-50 to-cyan-50 text-slate-800 border border-[#4285F4]/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4285F4] to-[#E6007A] animate-pulse"></span>
                  The New Era of Paid Search
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
                  Intent &bull; AI Bidding &bull; Precision ROAS
                </span>
              </div>

              {/* Title with Target Icon & Gradient */}
              <div className="flex items-start sm:items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#4285F4]/15 via-[#E6007A]/10 to-[#F5A623]/10 border border-[#4285F4]/30 flex items-center justify-center text-[#4285F4] shrink-0 shadow-sm">
                  <Target className="w-6 h-6 text-[#4285F4]" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  The Way Customers Click &amp; Paid Search{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A]">
                    Has Changed
                  </span>
                </h2>
              </div>

              {/* Sub-headline / Narrative */}
              <p className="text-base sm:text-lg font-bold text-slate-900 mb-3 tracking-tight">
                Every day, millions of people search Google with a clear intention—
              </p>

              {/* Intent Actions styled tags */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                they're looking to{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-blue-50 text-[#4285F4] font-bold border border-blue-200/80 text-xs sm:text-sm">
                  buy
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-purple-50 text-[#7C3AED] font-bold border border-purple-200/80 text-xs sm:text-sm">
                  compare
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-pink-50 text-[#E6007A] font-bold border border-pink-200/80 text-xs sm:text-sm">
                  book
                </span>
                , or{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/80 text-xs sm:text-sm">
                  contact a business
                </span>
                .
              </p>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-pink-50/50 border border-blue-100 mb-5">
                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                  Google Ads puts your brand in front of those <strong className="text-[#4285F4]">high-intent customers</strong> at the exact moment they're ready to act.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Modern PPC Advertising is no longer about spending more. It's about spending smarter through audience targeting, conversion tracking, AI bidding, and continuous optimization.
              </p>

              {/* Transition Question with Brand Gradient */}
              <div className="pt-5 border-t border-slate-200/80 mb-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Successful Google Ads has{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#E6007A] to-[#F5A623]">
                    four responsibilities:
                  </span>
                </h3>
              </div>

              {/* Four Responsibilities 2-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                
                {/* 1. Target Intent */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#4285F4]/10 flex items-center justify-center text-[#4285F4] group-hover:scale-105 transition-transform">
                      <Target className="w-4 h-4 text-[#4285F4]" />
                    </div>
                    <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      In-Market
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Target Intent
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Reach customers actively searching for your services.
                  </p>
                </div>

                {/* 2. Increase Quality Clicks */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-pink-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] group-hover:scale-105 transition-transform">
                      <MousePointerClick className="w-4 h-4 text-[#E6007A]" />
                    </div>
                    <span className="text-[10px] font-semibold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                      Buyer Potential
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Increase Quality Clicks
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Attract visitors with genuine buying potential.
                  </p>
                </div>

                {/* 3. Optimize Budget */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
                    </div>
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                      0% Waste
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Optimize Budget
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Reduce wasted spend through smarter campaign management.
                  </p>
                </div>

                {/* 4. Maximize ROAS */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100/70 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      Measurable ROI
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Maximize ROAS
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Turn advertising investment into measurable revenue.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE DMDY PPC GROWTH FRAMEWORK™                 */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-[#4285F4]" />
              <span>Proprietary Methodology</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              The DMDY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A]">
                PPC Growth Framework™
              </span>
            </h2>

            {/* Intent → Click → Convert → Scale Flow Pipeline */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-50 text-[#4285F4] font-bold text-xs sm:text-sm border border-blue-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
                Intent
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-pink-50 text-[#E6007A] font-bold text-xs sm:text-sm border border-pink-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#E6007A]"></span>
                Click
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 text-[#F5A623] font-bold text-xs sm:text-sm border border-amber-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]"></span>
                Convert
              </span>
              <span className="text-slate-300 font-bold text-sm sm:text-base">&rarr;</span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-xs sm:text-sm border border-emerald-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Scale
              </span>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              Our signature Google Ads methodology focuses on profitable growth—not vanity metrics.
            </p>
          </div>

          {/* 4 Framework Layer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Layer 1 — Intent */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AED6] to-[#4285F4] opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Compass className="w-6 h-6 text-[#00AED6]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Layer 01
                  </span>
                </div>

                <div className="text-xs font-bold text-[#00AED6] uppercase tracking-wider mb-1">
                  Discovery &amp; Targeting
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Intent
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  We identify high-converting keywords, audience segments, locations, and customer search behavior.
                </p>
              </div>
            </div>

            {/* Layer 2 — Click */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6007A] to-pink-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <MousePointerClick className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Layer 02
                  </span>
                </div>

                <div className="text-xs font-bold text-[#E6007A] uppercase tracking-wider mb-1">
                  Creative &amp; Bidding
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Click
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  We build compelling ad copy, extensions, bidding strategies, and campaign structures that improve click quality.
                </p>
              </div>
            </div>

            {/* Layer 3 — Convert */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A623] to-amber-300 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Zap className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F5A623] border border-amber-200/80">
                    Layer 03
                  </span>
                </div>

                <div className="text-xs font-bold text-[#F5A623] uppercase tracking-wider mb-1">
                  Funnels &amp; Attribution
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#F5A623] transition-colors tracking-tight">
                  Convert
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  Landing pages, conversion tracking, remarketing, and lead forms transform visitors into customers.
                </p>
              </div>
            </div>

            {/* Layer 4 — Scale */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-300 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    Layer 04
                  </span>
                </div>

                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                  Profitable Expansion
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors tracking-tight">
                  Scale
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  Continuous optimization, ROAS analysis, audience refinement, and budget allocation help profitable campaigns grow.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHAT'S INCLUDED IN OUR GOOGLE ADS SERVICES    */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Section Header - Center Aligned */}
          <div className="mb-10 sm:mb-12 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Target className="w-3 h-3 text-[#4285F4]" />
              <span>Full-Spectrum Capabilities</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What's Included in Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A]">
                Google Ads Services
              </span>
            </h2>
          </div>

          {/* 3-Column Clean, Compact & Centered Layout (3-3 Pair) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10 w-full">
            
            {/* 1. Search Ads */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#4285F4] border border-blue-100/80 flex items-center justify-center shadow-xs">
                  <Search className="w-5 h-5 text-[#4285F4]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#4285F4] transition-colors">
                Search Ads
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Capture high-intent customers searching on Google.
              </p>
            </div>

            {/* 2. Display Ads */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#00AED6] border border-cyan-100/80 flex items-center justify-center shadow-xs">
                  <Monitor className="w-5 h-5 text-[#00AED6]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#00AED6] transition-colors">
                Display Ads
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Build brand awareness across Google's Display Network.
              </p>
            </div>

            {/* 3. YouTube Ads */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#EA4335] border border-red-100/80 flex items-center justify-center shadow-xs">
                  <Play className="w-5 h-5 text-[#EA4335] fill-[#EA4335]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#EA4335] transition-colors">
                YouTube Ads
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Reach audiences through engaging video campaigns.
              </p>
            </div>

            {/* 4. Shopping Ads */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#34A853] border border-emerald-100/80 flex items-center justify-center shadow-xs">
                  <ShoppingBag className="w-5 h-5 text-[#34A853]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#34A853] transition-colors">
                Shopping Ads
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Promote products directly in Google Shopping results.
              </p>
            </div>

            {/* 5. Remarketing */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#F5A623] border border-amber-100/80 flex items-center justify-center shadow-xs">
                  <RefreshCw className="w-5 h-5 text-[#F5A623]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#F5A623] transition-colors">
                Remarketing
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Re-engage visitors who didn't convert the first time.
              </p>
            </div>

            {/* 6. Conversion Tracking */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#7C3AED] border border-purple-100/80 flex items-center justify-center shadow-xs">
                  <BarChart3 className="w-5 h-5 text-[#7C3AED]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#7C3AED] transition-colors">
                Conversion Tracking
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Measure every enquiry, call, WhatsApp lead, and sale accurately.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: GOOGLE ADS STRATEGIES TAILORED TO YOUR INDUSTRY */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#4285F4]" />
              <span>Industry-Specific PPC</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Google Ads Strategies Tailored to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A]">
                Your Industry
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl font-normal">
              Every vertical demands distinct bidding algorithms, keyword match types, and negative barriers to guarantee profitable returns.
            </p>
          </div>

          {/* 6 Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. Real Estate */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AED6] to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={realEstateImg} 
                    alt="Real Estate Google Ads Strategy" 
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
                  Generate qualified property enquiries through location-based search campaigns.
                </p>
              </div>
            </div>

            {/* 2. E-commerce */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A623] to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={ecommerceImg} 
                    alt="E-commerce Google Ads Strategy" 
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
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Increase product visibility with Shopping Ads and performance campaigns.
                </p>
              </div>
            </div>

            {/* 3. Healthcare */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C48C] to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={healthcareImg} 
                    alt="Healthcare Google Ads Strategy" 
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
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Reach patients searching for trusted healthcare services.
                </p>
              </div>
            </div>

            {/* 4. Education */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6007A] to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={educationImg} 
                    alt="Education Google Ads Strategy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#E6007A]">
                    <GraduationCap className="w-4 h-4 text-[#E6007A]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#E6007A] transition-colors">
                  Education
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Attract students through high-intent search and lead campaigns.
                </p>
              </div>
            </div>

            {/* 5. Local Businesses */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C48C] via-[#F5A623] to-[#E6007A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={localBusinessImg} 
                    alt="Local Businesses Google Ads Strategy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#00C48C]">
                    <Store className="w-4 h-4 text-[#00C48C]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#00C48C] transition-colors">
                  Local Businesses
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Dominate location-based searches with Google Search &amp; Maps campaigns.
                </p>
              </div>
            </div>

            {/* 6. B2B & Professional Services */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#4285F4]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AED6] to-[#E6007A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={professionalServicesImg} 
                    alt="B2B & Professional Services Google Ads Strategy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#4285F4]">
                    <Briefcase className="w-4 h-4 text-[#4285F4]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                  B2B &amp; Professional Services
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Generate high-quality business leads with strategic PPC management.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: HOW DMDY BUILDS PROFITABLE PPC CAMPAIGNS       */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column (7 cols): Section Header & 4 Process Steps */}
            <div className="lg:col-span-7">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
                <TrendingUp className="w-3.5 h-3.5 text-[#4285F4]" />
                <span>Execution Blueprint</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                How DMDY Builds{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A]">
                  Profitable PPC Campaigns
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-xl">
                A battle-tested 4-stage process engineered for maximum ROAS, intent-qualified traffic, and scalable revenue growth.
              </p>

              {/* 4 Process Steps - Clean Unboxed Flow */}
              <div className="space-y-4">
                
                {/* 01 Audit & Research */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    01
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#4285F4] transition-colors mb-0.5">
                      Audit &amp; Research
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Analyze competitors, keywords, CPC, audience behavior, and account performance.
                    </p>
                  </div>
                </div>

                {/* 02 Campaign Strategy */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    02
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00AED6] transition-colors mb-0.5">
                      Campaign Strategy
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Build Search, Display, Shopping, or YouTube campaigns around business objectives.
                    </p>
                  </div>
                </div>

                {/* 03 Launch & Optimize */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    03
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#E6007A] transition-colors mb-0.5">
                      Launch &amp; Optimize
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Improve CTR, Quality Score, bidding, and ad relevance while reducing wasted spend.
                    </p>
                  </div>
                </div>

                {/* 04 Scale Results */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#00C48C]/10 text-[#00C48C] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00C48C] transition-colors mb-0.5">
                      Scale Results
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Grow profitable campaigns using ROAS, conversion data, and continuous optimization.
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
                <div className="w-6 h-6 rounded-lg bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center font-bold text-xs">
                  AI
                </div>
                <span className="text-xs font-bold text-slate-800">Smart Bidding Flywheel</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img 
                  src={ppcGrowthProcessImg} 
                  alt="How DMDY Builds Profitable PPC Campaigns" 
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
      {/* SECTION 7: CHOOSE YOUR BUSINESS GOAL                     */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
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
                <div className="w-6 h-6 rounded-lg bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center font-bold text-xs">
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
                <Target className="w-3.5 h-3.5 text-[#4285F4]" />
                <span>Strategy Matcher</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Choose Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A]">
                  Business Goal
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-7 max-w-xl">
                Every business has distinct conversion targets. Select what matters most right now to see the exact paid search architecture we deploy.
              </p>

              {/* Interactive Tabs Header */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-slate-100/90 rounded-2xl w-fit mb-6 border border-slate-200/70">
                {[
                  { id: 'leads', label: 'Generate More Leads' },
                  { id: 'sales', label: 'Increase Online Sales' },
                  { id: 'visibility', label: 'Build Brand Visibility' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedGoal(tab.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      selectedGoal === tab.id
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
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  selectedGoal === 'leads'
                    ? 'from-[#00AED6] to-[#4285F4]'
                    : selectedGoal === 'sales'
                    ? 'from-[#E6007A] via-[#F5A623] to-[#00C48C]'
                    : 'from-[#4285F4] to-cyan-300'
                }`}></div>

                {/* 1. Generate More Leads */}
                {selectedGoal === 'leads' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-[#00AED6]" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Generate More Leads
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">B2B, Professional Services &amp; Consultancies</p>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-0 sm:pl-13">
                      <span className="font-semibold text-slate-900">Recommended Strategy:</span> Search Ads, Call Ads, WhatsApp Extensions, Landing Pages &amp; Lead Form Campaigns.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80 pl-0 sm:pl-13">
                      {['Search Ads', 'Call Ads', 'WhatsApp Extensions', 'Landing Pages', 'Lead Form Campaigns'].map((tactic, idx) => (
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
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Increase Online Sales
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">E-commerce, D2C &amp; Retail Stores</p>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-0 sm:pl-13">
                      <span className="font-semibold text-slate-900">Recommended Strategy:</span> Shopping Ads, Dynamic Remarketing, Product Campaigns &amp; Conversion Tracking.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80 pl-0 sm:pl-13">
                      {['Shopping Ads', 'Dynamic Remarketing', 'Product Campaigns', 'Conversion Tracking'].map((tactic, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-pink-50 border border-pink-200/80 text-[11px] font-semibold text-[#E6007A]">
                          <CheckCircle2 className="w-3 h-3 text-[#E6007A]" />
                          <span>{tactic}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Build Brand Visibility */}
                {selectedGoal === 'visibility' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center shrink-0">
                        <Eye className="w-5 h-5 text-[#4285F4]" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Build Brand Visibility
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">Top-of-Mind Awareness &amp; Market Penetration</p>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-0 sm:pl-13">
                      <span className="font-semibold text-slate-900">Recommended Strategy:</span> Display Ads, YouTube Ads, Audience Targeting &amp; Awareness Campaigns.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80 pl-0 sm:pl-13">
                      {['Display Ads', 'YouTube Ads', 'Audience Targeting', 'Awareness Campaigns'].map((tactic, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200/80 text-[11px] font-semibold text-[#4285F4]">
                          <CheckCircle2 className="w-3 h-3 text-[#4285F4]" />
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
      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS                     */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column (4 cols): Sticky Section Header & Direct Support Box */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-[#4285F4]" />
                <span>Knowledge Base</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                Frequently Asked <br className="hidden lg:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A]">
                  Questions
                </span>
              </h2>

              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">
                PPC &bull; ROAS &bull; Strategy
              </p>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
                Clear answers to common questions about Google Ads management, PPC bidding strategies, campaign budgets, and scalable ROI.
              </p>

              {/* Direct Support Card (Desktop only) */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hidden lg:block">
                <div className="w-10 h-10 rounded-2xl bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-[#4285F4]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Have a specific question?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Our PPC strategists are available for custom audits and account optimization teardowns.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20have%20questions%20about%20Google%20Ads%20%26%20PPC%20Services."
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
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openFaq === 0 
                  ? 'bg-white border-[#4285F4]/50 shadow-sm' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    What are Google Ads Services?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 0 ? 'rotate-180 text-[#4285F4]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 0 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Google Ads Services help businesses advertise on Google through Search Ads, Display Ads, YouTube Ads, Shopping Ads, and remarketing campaigns to generate leads, sales, and website traffic.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openFaq === 1 
                  ? 'bg-white border-[#00AED6]/50 shadow-sm' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    What's the difference between Google Ads and PPC?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 1 ? 'rotate-180 text-[#00AED6]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 1 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      PPC (Pay Per Click) is the advertising model, while Google Ads is Google's platform for running PPC campaigns. Google Ads includes Search, Display, Shopping, Video, and App advertising.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openFaq === 2 
                  ? 'bg-white border-[#E6007A]/50 shadow-sm' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    How quickly can Google Ads generate leads?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 2 ? 'rotate-180 text-[#E6007A]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 2 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Unlike SEO, Google Ads can begin generating traffic and enquiries almost immediately after campaign launch. However, campaign optimization and better ROAS typically improve over the first few weeks.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openFaq === 3 
                  ? 'bg-white border-[#F5A623]/50 shadow-sm' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 3 ? -1 : 3)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    Is Google Ads better than SEO?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 3 ? 'rotate-180 text-[#F5A623]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 3 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      They serve different purposes. SEO builds long-term organic visibility, while Google Ads provides immediate exposure for high-intent searches. The strongest digital strategy often combines both.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openFaq === 4 
                  ? 'bg-white border-[#00C48C]/50 shadow-sm' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 4 ? -1 : 4)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    How much should I spend on Google Ads?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 4 ? 'rotate-180 text-[#00C48C]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 4 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Your budget depends on your industry, competition, keywords, and business goals. DMDY creates customized PPC strategies rather than fixed advertising packages.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openFaq === 5 
                  ? 'bg-white border-[#4285F4]/50 shadow-sm' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 5 ? -1 : 5)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    Do you provide Google Ads Services in Delhi and across India?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 5 ? 'rotate-180 text-[#4285F4]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 5 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Yes. DMDY manages Google Ads campaigns for businesses in Delhi NCR, across India, and international markets, with strategies tailored to local and national audiences.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: FINAL CTA - READY TO TURN SEARCHES INTO CUSTOMERS */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-9 text-left">
            
            {/* Top Brand Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A]"></div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              
              {/* Left Column: Heading & Content */}
              <div className="max-w-2xl">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-2.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#4285F4]" />
                  <span>Next-Generation Paid Search</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
                  Ready to Turn Google Searches Into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A]">
                    Customers?
                  </span>
                </h2>

                {/* Callout Statement */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E6007A]"></span>
                    Stop paying for clicks that don't convert.
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Build smarter Google Ads campaigns with strategic targeting, conversion tracking, and continuous optimization from DMDY.
                </p>

              </div>

              {/* Right Column: Compact Action Buttons */}
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-[#00AED6] via-[#4285F4] to-[#E6007A] hover:opacity-95 text-white font-bold rounded-full transition-all shadow-sm hover:shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 group"
                >
                  <span>Get Your Free Google Ads Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20would%20like%20to%20connect%20with%20a%20Google%20Ads%20PPC%20Expert."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-bold rounded-full border border-slate-300 hover:border-slate-400 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs"
                >
                  <svg className="w-4 h-4 text-[#00C48C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp PPC Expert</span>
                </a>
              </div>

            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 mt-5 border-t border-slate-200/80 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C48C]" />
                <span>Zero-risk Google Ads audit</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4285F4]" />
                <span>Negative keyword &amp; wasted spend check</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E6007A]" />
                <span>100% confidential strategy</span>
              </span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default GoogleAdsService;
