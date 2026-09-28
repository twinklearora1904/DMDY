import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  Heart, 
  MessageCircle, 
  TrendingUp, 
  Sparkles, 
  Users, 
  Play, 
  Flame, 
  Zap, 
  BarChart3, 
  Target, 
  Eye, 
  Send,
  Bookmark,
  Layers,
  Compass,
  Briefcase,
  Building2,
  ShoppingBag,
  HeartPulse,
  Utensils,
  Rocket,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import realEstateImg from '../../assets/social-media/industry-real-estate.jpg';
import ecommerceImg from '../../assets/social-media/industry-ecommerce.jpg';
import healthcareImg from '../../assets/social-media/industry-healthcare.jpg';
import hospitalityImg from '../../assets/social-media/industry-hospitality.jpg';
import startupsImg from '../../assets/social-media/industry-startups.jpg';
import professionalServicesImg from '../../assets/social-media/industry-professional-services.jpg';
import socialGrowthProcessImg from '../../assets/social-media/social_growth_process.jpg';
import socialBusinessGoalsImg from '../../assets/social-media/social_business_goals.jpg';

const SocialMediaService = () => {
  const [selectedGoal, setSelectedGoal] = React.useState('visibility');
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    document.title = 'Social Media Marketing Services That Drive Growth — DMDY';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7C3AED_0%,#E6007A_25%,transparent_70%)] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (7 cols): User Hero Content */}
            <div className="lg:col-span-7">
              
              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200/80 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                  360° Digital Growth
                </span>
                <span className="text-xs font-semibold text-slate-500 tracking-wider">
                  Organic &bull; Paid &bull; Content
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#00AED6]">
                  Social Media Marketing Services
                </span>{' '}
                That Build Brands &amp; <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6007A] via-[#F5A623] to-[#7C3AED]">
                  Drive Business Growth.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                Go beyond likes and followers. DMDY creates strategic social media ecosystems that increase visibility, build communities, generate leads, and convert audiences into customers.
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
                  <div className="text-xs text-slate-500 mt-1 font-medium">Proven Scale</div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#E6007A]">
                      360°
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">Social Strategy</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg text-center text-sm sm:text-base hover:-translate-y-0.5 justify-center flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#F5A623]" />
                  Get Free Social Audit
                </Link>
                <a 
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20would%20like%20to%20discuss%20Social%20Media%20Marketing%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-full border border-slate-300 transition-all shadow-sm hover:shadow text-center text-sm sm:text-base flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Expert
                </a>
              </div>

            </div>

            {/* Right Column (5 cols): Social Growth Command Center Mockup */}
            <div className="lg:col-span-5 w-full relative mt-8 lg:mt-0">
              
              {/* Floating Badge 1: Viral Community Growth */}
              <div className="absolute -top-6 -left-4 z-20 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-[#7C3AED] shadow-sm">
                  <Flame className="w-4 h-4 fill-[#7C3AED]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Viral Distribution</div>
                  <div className="text-xs font-extrabold text-slate-900">+480% Organic Reach</div>
                </div>
              </div>

              {/* Floating Badge 2: ROAS Multiplier */}
              <div className="absolute top-1/3 -right-4 z-20 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="w-8 h-8 rounded-xl bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] shadow-sm">
                  <Zap className="w-4 h-4 fill-[#E6007A]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Paid Social ROAS</div>
                  <div className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#E6007A]">
                    4.8x Meta &amp; LinkedIn
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Omnichannel Ecosystem */}
              <div className="absolute -bottom-5 left-4 sm:left-8 z-20 bg-white px-3 sm:px-4 py-1.5 rounded-full shadow-lg border border-slate-100 hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-700">Omnichannel: Instagram &bull; LinkedIn &bull; YouTube</span>
              </div>

              {/* Main Social Growth Dashboard Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col">
                
                {/* Header Window Bar */}
                <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200/80">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold px-2.5 py-0.5 bg-white border border-slate-200 rounded-md shadow-sm flex items-center gap-1.5">
                    <Share2 className="w-3 h-3 text-[#7C3AED]" />
                    dmdy.social/growth-engine
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-5 sm:p-6 bg-white flex flex-col space-y-4">
                  
                  {/* Channel Filter Chips */}
                  <div className="flex items-center justify-between gap-1.5 pb-2 border-b border-slate-100 overflow-x-auto text-xs">
                    <span className="px-2.5 py-1 bg-purple-50 text-[#7C3AED] font-bold rounded-lg shrink-0">
                      All Channels
                    </span>
                    <span className="px-2 py-1 text-slate-500 font-medium hover:text-slate-800 shrink-0">
                      Instagram
                    </span>
                    <span className="px-2 py-1 text-slate-500 font-medium hover:text-slate-800 shrink-0">
                      LinkedIn
                    </span>
                    <span className="px-2 py-1 text-slate-500 font-medium hover:text-slate-800 shrink-0">
                      YouTube
                    </span>
                  </div>

                  {/* Simulated High-Performing Content Piece Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50/60 via-white to-pink-50/40 border border-purple-100 shadow-sm text-left">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#E6007A] p-0.5">
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-[10px] text-slate-900">
                            D
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                            dmdy.official
                            <span className="w-3 h-3 rounded-full bg-[#00AED6] text-white flex items-center justify-center text-[8px] font-black">✓</span>
                          </div>
                          <div className="text-[10px] text-slate-400">Campaign: 360° Omnichannel Scale</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Viral Spike
                      </span>
                    </div>

                    {/* Creative Video Hook Mockup */}
                    <div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-4 my-2.5 border border-slate-800 shadow-inner">
                      <div className="text-[11px] font-mono text-purple-300 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Play className="w-3 h-3 fill-purple-400" />
                        Viral Reel &bull; Hook Analysis
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-100 leading-snug">
                        "How We Scaled B2B Pipeline to $1.2M with Founder Storytelling &amp; Short-Form Video"
                      </div>
                      <div className="flex items-center justify-between mt-3 text-[10px] text-slate-300">
                        <span className="flex items-center gap-1 font-semibold text-pink-400">
                          <Eye className="w-3 h-3" /> 2.4M Impressions
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-amber-400">
                          <TrendingUp className="w-3 h-3" /> 92.4% Retention
                        </span>
                      </div>
                    </div>

                    {/* Engagement Actions */}
                    <div className="flex items-center justify-between pt-1 text-slate-600 text-xs">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-[#E6007A] font-bold">
                          <Heart className="w-4 h-4 fill-[#E6007A]" /> 84.2k
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-slate-600">
                          <MessageCircle className="w-4 h-4" /> 1,420
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-slate-600">
                          <Send className="w-4 h-4" /> 5.8k
                        </span>
                      </div>
                      <Bookmark className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  {/* Growth Metrics Bar */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#7C3AED]" /> Qualified Inquiries
                      </div>
                      <div className="text-2xl font-extrabold text-slate-900">+3,480</div>
                      <div className="text-[11px] font-bold text-emerald-600 mt-0.5">
                        ↑ 34% Month-over-Month
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                        <BarChart3 className="w-3 h-3 text-[#E6007A]" /> Community Trust
                      </div>
                      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#E6007A]">
                        98.4%
                      </div>
                      <div className="text-[11px] font-bold text-[#7C3AED] mt-0.5">
                        Audience Retention
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
      {/* SECTION 2: THE WAY SOCIAL MEDIA HAS CHANGED */}
      {/* ========================================================= */}
      <section className="py-10 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6007A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Top 2-Column Row: Left Graphic + Right Narrative Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (5 cols): Social Attention & Discovery Engine Graphic */}
            <div className="lg:col-span-5 w-full relative order-2 lg:order-1">
              
              {/* Outer Logo Gradient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#7C3AED]/25 via-[#E6007A]/20 to-[#00AED6]/25 rounded-3xl blur-lg opacity-70 -z-10"></div>

              {/* Floating Badge: Algorithmic Shift */}
              <div className="absolute -top-4 -right-2 z-20 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-[#E6007A] animate-ping"></span>
                <span className="text-[11px] font-bold text-slate-800">85%+ Algorithmic Discovery</span>
              </div>

              {/* Main Simulated Social Discovery Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xl relative overflow-hidden">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] animate-pulse"></div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                      Social Attention Matrix
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-bold text-[#7C3AED]">
                    <Sparkles className="w-3 h-3 text-[#7C3AED]" />
                    <span>Real-Time Virality</span>
                  </div>
                </div>

                {/* Prompt / Feed Search Query Box */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 mb-4">
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center justify-between">
                    <span>Modern Consumer Discovery</span>
                    <span className="text-[#7C3AED] font-semibold text-[10px]">Omnichannel Sync</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5 text-[#E6007A] shrink-0" />
                    <span className="truncate">"Discovering brands through high-retention storytelling"</span>
                  </div>
                </div>

                {/* 4 Social Discovery Pillars Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {/* Reels */}
                  <div className="p-2 rounded-xl bg-pink-50/60 border border-pink-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Reels</div>
                    <div className="text-[9px] font-bold text-[#E6007A] flex items-center justify-center gap-1 mt-0.5">
                      <span>Viral Hook</span>
                    </div>
                  </div>

                  {/* Creators */}
                  <div className="p-2 rounded-xl bg-purple-50/60 border border-purple-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Creators</div>
                    <div className="text-[9px] font-bold text-[#7C3AED] flex items-center justify-center gap-1 mt-0.5">
                      <span>Social Proof</span>
                    </div>
                  </div>

                  {/* Community */}
                  <div className="p-2 rounded-xl bg-cyan-50/60 border border-cyan-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Community</div>
                    <div className="text-[9px] font-bold text-[#00AED6] flex items-center justify-center gap-1 mt-0.5">
                      <span>Loyalty</span>
                    </div>
                  </div>

                  {/* Commerce */}
                  <div className="p-2 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-center">
                    <div className="text-[11px] font-extrabold text-slate-900">Commerce</div>
                    <div className="text-[9px] font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                      <span>Inquiries</span>
                    </div>
                  </div>
                </div>

                {/* Simulated High-Value Reel Strategy Preview Box */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white relative shadow-lg overflow-hidden">
                  
                  {/* Top Logo Gradient Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#00AED6]"></div>
                  
                  <div className="flex items-center justify-between mb-2 pt-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-200">
                      <Zap className="w-3.5 h-3.5 text-[#F5A623]" />
                      <span>DMDY Attention Engine</span>
                    </div>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      98.4% Retention
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    "Modern social media has moved from passive broadcasts to <strong className="text-white font-bold">interactive ecosystems</strong> that combine <strong className="text-[#00AED6]">Be Seen</strong>, <strong className="text-[#7C3AED]">Be Remembered</strong>, <strong className="text-[#E6007A]">Build Community</strong>, and <strong className="text-emerald-400">Drive Conversion</strong>."
                  </p>

                  {/* Citation Channels Row */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-slate-800">
                    <span className="text-[10px] font-semibold text-slate-400">Channels:</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-pink-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E6007A]"></span>
                      Instagram Reels
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-purple-300 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span>
                      LinkedIn Thought Leadership
                    </span>
                  </div>

                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#00C48C]" />
                    <span>Audience Engagement Velocity</span>
                  </div>
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#E6007A]">
                    +480% Organic Reach Lift
                  </span>
                </div>

              </div>

            </div>

            {/* Right Column (7 cols): User Narrative Content with Logo Colors */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2">
              
              {/* Category Pill with Logo Colors */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-50 via-pink-50 to-cyan-50 text-slate-800 border border-[#7C3AED]/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#E6007A] animate-pulse"></span>
                  The New Era of Discovery
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
                  Reels &bull; Communities &bull; Commerce
                </span>
              </div>

              {/* Title with Share Icon & Logo Gradient */}
              <div className="flex items-start sm:items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#7C3AED]/15 via-[#E6007A]/10 to-[#F5A623]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] shrink-0 shadow-sm">
                  <Share2 className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  The Way Social Media{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#F5A623]">
                    Has Changed
                  </span>
                </h2>
              </div>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight">
                People don't open Instagram or LinkedIn just to follow brands anymore—
              </p>

              {/* Narrative paragraph with styled tags */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                they discover businesses through{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-pink-50 text-[#E6007A] font-bold border border-pink-200/80 text-xs sm:text-sm">
                  Reels
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-purple-50 text-[#7C3AED] font-bold border border-purple-200/80 text-xs sm:text-sm">
                  creator content
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-cyan-50 text-[#00AED6] font-bold border border-cyan-200/80 text-xs sm:text-sm">
                  community conversations
                </span>
                ,{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/80 text-xs sm:text-sm">
                  AI recommendations
                </span>
                , and{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-amber-50 text-amber-800 font-bold border border-amber-200/80 text-xs sm:text-sm">
                  social commerce
                </span>
                .
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                Today's Social Media Marketing is no longer about posting daily. It's about creating valuable content that reaches the right audience, earns attention, builds trust, and encourages meaningful action.
              </p>

              {/* Transition Question with Logo Accent */}
              <div className="pt-5 border-t border-slate-200/80 mb-5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Modern social media has{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#E6007A]">
                    four responsibilities:
                  </span>
                </h3>
              </div>

              {/* Four Responsibilities List - Consistent with SEO Service styling */}
              <div className="space-y-4">
                
                {/* 1. Be Seen */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00AED6]/10 flex items-center justify-center text-[#00AED6] shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 text-[#00AED6]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      Be Seen
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Increase brand visibility through organic and paid reach.
                    </p>
                  </div>
                </div>

                {/* 2. Be Remembered */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] shrink-0 mt-0.5">
                    <Bookmark className="w-4 h-4 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      Be Remembered
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Build a recognizable and consistent brand identity.
                    </p>
                  </div>
                </div>

                {/* 3. Build Community */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E6007A]/10 flex items-center justify-center text-[#E6007A] shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-[#E6007A]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      Build Community
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Create conversations, engagement, and customer loyalty.
                    </p>
                  </div>
                </div>

                {/* 4. Drive Conversion */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00C48C]/10 flex items-center justify-center text-[#00C48C] shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-[#00C48C]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      Drive Conversion
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Turn attention into enquiries, leads, and sales.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE DMDY SOCIAL GROWTH FRAMEWORK™ */}
      {/* ========================================================= */}
      <section className="py-14 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>Proprietary Methodology</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              The DMDY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#F5A623]">
                Social Growth Framework™
              </span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Our unique methodology for sustainable social media growth.
            </p>
          </div>

          {/* 4 Framework Layer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Layer 1 — Strategy */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AED6] to-cyan-300 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Compass className="w-6 h-6 text-[#00AED6]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200/80">
                    Layer 01
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#00AED6] transition-colors tracking-tight">
                  Strategy
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Every successful social media campaign begins with audience research, competitor analysis, content pillars, and platform selection.
                </p>
              </div>
            </div>

            {/* Layer 2 — Content */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#7C3AED]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] to-purple-300 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Play className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200/80">
                    Layer 02
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#7C3AED] transition-colors tracking-tight">
                  Content
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We create Reels, carousel posts, static creatives, captions, stories, and platform-native content designed for engagement.
                </p>
              </div>
            </div>

            {/* Layer 3 — Community */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6007A] to-pink-300 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <Users className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200/80">
                    Layer 03
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#E6007A] transition-colors tracking-tight">
                  Community
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Growth happens through conversations. We help brands increase engagement, build trust, and strengthen customer relationships.
                </p>
              </div>
            </div>

            {/* Layer 4 — Conversion */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00C48C]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C48C] to-emerald-300 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00C48C]/10 text-[#00C48C] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs p-2.5">
                    <TrendingUp className="w-6 h-6 text-[#00C48C]" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#00C48C] border border-emerald-200/80">
                    Layer 04
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors tracking-tight">
                  Conversion
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Social media should support business objectives through lead generation, website traffic, WhatsApp enquiries, and social commerce.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHAT'S INCLUDED IN OUR SOCIAL MEDIA SERVICES */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Section Header - Center Aligned */}
          <div className="mb-10 sm:mb-12 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Share2 className="w-3 h-3 text-[#7C3AED]" />
              <span>Full-Spectrum Capabilities</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What's Included in Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#F5A623]">
                Social Media Marketing Services
              </span>
            </h2>
          </div>

          {/* 3-Column Clean, Compact & Centered Layout (3-3 Pair) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10 w-full">
            
            {/* 1. Instagram Marketing (Row 1 Left) */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 tracking-tight group-hover:text-[#E1306C] transition-colors">
                Instagram Marketing
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xs">
                Reels, carousel content, stories, engagement &amp; profile growth.
              </p>
            </div>

            {/* 2. Facebook Marketing (Row 1 Right) */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 tracking-tight group-hover:text-[#1877F2] transition-colors">
                Facebook Marketing
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xs">
                Community management, campaigns &amp; lead generation.
              </p>
            </div>

            {/* 3. LinkedIn Marketing (Row 2 Left) */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.65 1.66 1.66 0 0 0-3.32 0 1.65 1.65 0 0 0 1.66 1.65m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 tracking-tight group-hover:text-[#0A66C2] transition-colors">
                LinkedIn Marketing
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xs">
                Personal branding, B2B visibility &amp; thought leadership.
              </p>
            </div>

            {/* 4. Short-Form Video (Row 2 Right) */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-xs">
                  <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 tracking-tight group-hover:text-[#E6007A] transition-colors">
                Short-Form Video
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xs">
                Reels, Shorts &amp; vertical video strategy.
              </p>
            </div>

            {/* 5. Creative Content Design (Row 3 Left) */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#8A3FFC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 tracking-tight group-hover:text-[#8A3FFC] transition-colors">
                Creative Content Design
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xs">
                Brand visuals, templates &amp; campaign creatives.
              </p>
            </div>

            {/* 6. Social Media Ads (Row 3 Right) */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FF5722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 11 18-5v12L3 14v-3z"></path>
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 tracking-tight group-hover:text-[#FF5722] transition-colors">
                Social Media Ads
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xs">
                Meta Ads, audience targeting &amp; conversion campaigns.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: SOCIAL MEDIA STRATEGIES TAILORED TO YOUR INDUSTRY */}
      {/* ========================================================= */}
      <section className="py-14 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>Industry-Specific Social</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Social Media Strategies Tailored to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#F5A623]">
                Your Industry
              </span>
            </h2>
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
                    alt="Real Estate Social Media Strategy" 
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
                  Property reels, locality storytelling &amp; lead generation.
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
                    alt="E-commerce Social Media Strategy" 
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
                  Product launches, UGC &amp; social commerce.
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
                    alt="Healthcare Social Media Strategy" 
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
                  Educational content &amp; patient trust building.
                </p>
              </div>
            </div>

            {/* 4. Hospitality */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6007A] to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={hospitalityImg} 
                    alt="Hospitality Social Media Strategy" 
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
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Food storytelling, experiences &amp; booking campaigns.
                </p>
              </div>
            </div>

            {/* 5. Startups */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#7C3AED]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={startupsImg} 
                    alt="Startups Social Media Strategy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#7C3AED]">
                    <Rocket className="w-4 h-4 text-[#7C3AED]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#7C3AED] transition-colors">
                  Startups
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Brand awareness &amp; founder-led content.
                </p>
              </div>
            </div>

            {/* 6. Professional Services */}
            <div className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#0A66C2]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A66C2] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={professionalServicesImg} 
                    alt="Professional Services Social Media Strategy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center text-[#0A66C2]">
                    <Briefcase className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#0A66C2] transition-colors">
                  Professional Services
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Authority building &amp; high-intent lead generation.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: HOW DMDY BUILDS SOCIAL MEDIA GROWTH */}
      {/* ========================================================= */}
      <section className="py-14 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column (7 cols): Section Header & 4 Process Steps */}
            <div className="lg:col-span-7">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
                <TrendingUp className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Execution Blueprint</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
                How DMDY Builds{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#F5A623]">
                  Social Media Growth
                </span>
              </h2>

              {/* 4 Process Steps - Clean Unboxed Flow */}
              <div className="space-y-4">
                
                {/* 01 Research */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    01
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors mb-0.5">
                      Research
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Brand audit, competitors, audience &amp; platform analysis.
                    </p>
                  </div>
                </div>

                {/* 02 Plan */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    02
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00AED6] transition-colors mb-0.5">
                      Plan
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Monthly content calendar, content pillars &amp; campaign roadmap.
                    </p>
                  </div>
                </div>

                {/* 03 Create */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    03
                  </div>
                  <div className="flex-1 pb-3.5 border-b border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#E6007A] transition-colors mb-0.5">
                      Create
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Reels, creatives, captions, stories &amp; platform-native content.
                    </p>
                  </div>
                </div>

                {/* 04 Optimize */}
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#00C48C]/10 text-[#00C48C] flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00C48C] transition-colors mb-0.5">
                      Optimize
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      Analytics, engagement insights, ad optimization &amp; continuous improvement.
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
                <span className="text-xs font-bold text-slate-800">Viral Growth Flywheel</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center font-bold text-xs">
                  AI
                </div>
                <span className="text-xs font-bold text-slate-800">Omni-Platform Ready</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img 
                  src={socialGrowthProcessImg} 
                  alt="How DMDY Builds Social Media Growth" 
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
      {/* SECTION 7: CHOOSE YOUR BUSINESS GOAL */}
      {/* ========================================================= */}
      <section className="py-14 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column (5 cols): 3D Visual Showcase */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              
              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">Precision Targeting</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-bold text-xs">
                  ROI
                </div>
                <span className="text-xs font-bold text-slate-800">Goal-Oriented Outcomes</span>
              </div>

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img 
                  src={socialBusinessGoalsImg} 
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
                <Target className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Strategy Matcher</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Choose Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#F5A623]">
                  Business Goal
                </span>
              </h2>

              {/* Interactive Tabs Header */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-slate-100/90 rounded-2xl w-fit mb-6 border border-slate-200/70">
                {[
                  { id: 'visibility', label: 'Brand Visibility' },
                  { id: 'leads', label: 'More Leads' },
                  { id: 'sales', label: 'More Sales' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedGoal(tab.id)}
                    className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
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
                  selectedGoal === 'visibility'
                    ? 'from-[#7C3AED] to-purple-300'
                    : selectedGoal === 'leads'
                    ? 'from-[#00AED6] to-cyan-300'
                    : 'from-[#E6007A] via-[#F5A623] to-[#00C48C]'
                }`}></div>

                {selectedGoal === 'visibility' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center shrink-0">
                        <Eye className="w-4.5 h-4.5 text-[#7C3AED]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Brand Visibility
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-12">
                      <span className="font-semibold text-slate-900">Recommended Focus:</span> Instagram Reels, Facebook reach campaigns, brand storytelling, content consistency &amp; audience growth.
                    </p>
                  </div>
                )}

                {selectedGoal === 'leads' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center shrink-0">
                        <Users className="w-4.5 h-4.5 text-[#00AED6]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        More Leads
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-12">
                      <span className="font-semibold text-slate-900">Recommended Focus:</span> Meta Lead Ads, WhatsApp campaigns, landing pages, remarketing &amp; conversion creatives.
                    </p>
                  </div>
                )}

                {selectedGoal === 'sales' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-4.5 h-4.5 text-[#E6007A]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        More Sales
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-12">
                      <span className="font-semibold text-slate-900">Recommended Focus:</span> Social commerce, product reels, UGC content, creator collaborations &amp; performance advertising.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================= */}
      <section className="py-14 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column (4 cols): Sticky Section Header & Direct Support Box */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Knowledge Base</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                Frequently Asked <br className="hidden lg:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#F5A623]">
                  Questions
                </span>
              </h2>

              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">
                Organic &bull; Paid &bull; Strategy
              </p>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
                Clear answers to common questions about social media marketing, content creation, platform algorithms, and business growth.
              </p>

              {/* Direct Support Card (Desktop only) */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hidden lg:block">
                <div className="w-10 h-10 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Have a specific question?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Our social media strategists are available for custom audits and campaign roadmap sessions.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20have%20questions%20about%20Social%20Media%20Marketing%20Services."
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
                  ? 'bg-white border-[#7C3AED]/50 shadow-sm' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    What are Social Media Marketing Services?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 0 ? 'rotate-180 text-[#7C3AED]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 0 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Social Media Marketing Services help businesses grow their brand through platforms like Instagram, Facebook, LinkedIn, and other social channels using content creation, community management, paid advertising, Reels, and strategic audience engagement.
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
                    Which social media platform is best for my business?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 1 ? 'rotate-180 text-[#00AED6]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 1 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      It depends on your industry, audience, and business goals. Instagram works well for visual brands, LinkedIn supports B2B growth, Facebook remains powerful for community and lead generation, and short-form video performs strongly across multiple platforms.
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
                    How often should my business post on social media?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 2 ? 'rotate-180 text-[#E6007A]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 2 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Consistency matters more than volume. A strategic content calendar with quality Reels, carousel posts, stories, and educational content generally performs better than posting every day without a clear strategy.
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
                    Can Social Media Marketing generate leads and sales?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 3 ? 'rotate-180 text-[#F5A623]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 3 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Yes. When combined with Meta Ads, landing pages, WhatsApp integration, remarketing, and strong content strategy, social media becomes an effective lead generation and customer acquisition channel—not just a branding platform.
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
                    What's included in DMDY's Social Media Management?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 4 ? 'rotate-180 text-[#00C48C]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 4 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Our Social Media Marketing Agency provides strategy, content planning, graphic design, Reels, captions, community management, paid campaigns, monthly reporting, and ongoing optimization based on your business requirements.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openFaq === 5 
                  ? 'bg-white border-[#7C3AED]/50 shadow-sm' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === 5 ? -1 : 5)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    Do I need both organic content and paid ads?
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                    openFaq === 5 ? 'rotate-180 text-[#7C3AED]' : 'text-slate-400'
                  }`} />
                </button>
                {openFaq === 5 && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                      Yes. Organic content builds trust and brand authority, while paid social media advertising accelerates reach, lead generation, and conversions. Together they create a balanced and sustainable social media growth strategy.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: FINAL CTA - READY TO TURN FOLLOWERS INTO CUSTOMERS */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-9 text-left">
            
            {/* Top Brand Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#F5A623]"></div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              
              {/* Left Column: Heading & Content */}
              <div className="max-w-2xl">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest mb-2.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Next-Generation Social Growth</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
                  Ready to Turn Followers Into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#F5A623]">
                    Customers?
                  </span>
                </h2>

                {/* Subtitle (Exact User Copy) */}
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Build a social media presence that attracts attention, creates conversations, and drives measurable business growth with DMDY's Social Media Marketing Services.
                </p>

              </div>

              {/* Right Column: Compact Action Buttons */}
              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-[#7C3AED] via-[#E6007A] to-[#F5A623] hover:opacity-95 text-white font-bold rounded-full transition-all shadow-sm hover:shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 group"
                >
                  <span>Get My Free Social Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%2C%20I%20would%20like%20to%20discuss%20a%20social%20media%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-bold rounded-full border border-slate-300 hover:border-slate-400 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs"
                >
                  <svg className="w-4 h-4 text-[#00C48C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp DMDY</span>
                </a>
              </div>

            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 mt-5 border-t border-slate-200/80 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C48C]" />
                <span>No obligation social audit</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>Organic + Paid growth roadmap</span>
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

export default SocialMediaService;
