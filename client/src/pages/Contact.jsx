import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { 
  Sparkles, 
  MessageSquare, 
  ArrowDown, 
  ArrowRight,
  Clock, 
  Target, 
  ShieldCheck,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | Start Your Digital Growth — DMDY';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION (2-Column Grid matching About & Services) */}
      {/* ========================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 bg-white border-b border-slate-200/80 overflow-hidden">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_30%,transparent_70%)] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

        {/* Navbar Aligned Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Main Narrative & CTAs */}
            <div className="lg:col-span-7">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00AED6] animate-pulse"></span>
                <span>Connect With DMDY — Digi Me Digi You</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                Let’s Build Something That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Grows.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight mb-4">
                Your next stage of growth could start with a conversation.
              </p>

              {/* Description Paragraph */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-2xl">
                Whether you’re launching a new business, building your brand, looking for more leads, or ready to scale your digital presence, DMDY is here to understand what you need and create a strategy around it.
              </p>

              {/* Highlight Callout Box (Matching About & Services) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 via-pink-50/40 to-amber-50/50 border border-slate-200/80 mb-8 max-w-2xl">
                <p className="font-semibold text-slate-900 text-sm sm:text-base leading-relaxed">
                  No complicated packages. No unnecessary services.{' '}
                  <span className="text-[#00AED6] font-bold">Just the right digital marketing</span> for your business.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4 mb-8">
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-500/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%20Team%2C%20I%20would%20like%20to%20start%20a%20conversation%20about%20our%20digital%20marketing%20growth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xs hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Trust Indicators Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-2xl">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 font-semibold">
                  <Clock className="w-4 h-4 text-[#00AED6] shrink-0" />
                  <span>&lt; 2-Hour Response</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 font-semibold">
                  <Target className="w-4 h-4 text-[#E6007A] shrink-0" />
                  <span>Tailored Strategy</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>Founder-Led Focus</span>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Growth Consultation Showcase Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              
              {/* Floating Top Badge */}
              <div className="absolute -top-3.5 -left-3.5 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-slate-200/80 hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">Strategy Desk Active</span>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-3.5 -right-3.5 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-slate-200/80 hidden sm:flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-bold text-[10px]">
                  360°
                </div>
                <span className="text-xs font-bold text-slate-800">Zero Vanity Metrics</span>
              </div>

              {/* Main Consultation Card */}
              <div className="bg-slate-950 text-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AED6]/15 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-5 border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                    <span>Direct Access</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight text-white leading-tight">
                    Growth Starts With a Free Audit
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                    Share your current challenges. We evaluate your SEO, paid search, and social media footprint to deliver high-converting recommendations.
                  </p>

                  <div className="space-y-4 pt-4 border-t border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[#00AED6]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Call / WhatsApp</div>
                        <a href="tel:+919876543210" className="text-sm sm:text-base font-bold text-white hover:text-[#00AED6] transition-colors">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[#E6007A]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Inquiries</div>
                        <a href="mailto:twinklearora1904@gmail.com" className="text-sm sm:text-base font-bold text-white hover:text-[#E6007A] transition-colors break-all">
                          twinklearora1904@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[#F5A623]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters</div>
                        <span className="text-sm sm:text-base font-medium text-slate-200">
                          New Delhi / NCR, India
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Micro Pillar Badges Underneath Card */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#00AED6]">01. Discovery</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Audit &amp; Baseline</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#E6007A]">02. Strategy</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Bespoke Blueprint</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#F5A623]">03. Scale</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Measurable ROI</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: TELL US WHAT YOU'RE LOOKING FOR (CONTACT FORM)  */}
      {/* ========================================================= */}
      <ContactForm />

      {/* ========================================================= */}
      {/* SECTION 3: PREFER A DIRECT CONVERSATION?                  */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        {/* Navbar Aligned Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Direct Communication</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14] mb-4">
              Prefer a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Direct Conversation?
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
              Sometimes, the best way to understand a business is simply to talk.
            </p>
          </div>

          {/* 3 Direct Conversation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. Call Us */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/80 hover:border-[#00AED6]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-2">
                  Voice Consultation
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#00AED6] transition-colors">
                  📞 Call Us
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                  Let’s discuss your business, goals, and growth opportunities.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00AED6] transition-colors"
                >
                  <span>+91 98765 43210</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">Mon - Sat • 10:00 AM - 7:00 PM IST</div>
              </div>
            </div>

            {/* 2. WhatsApp Us */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/80 hover:border-emerald-500/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div> 

                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                  Instant Messaging
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                  💬 WhatsApp Us
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                  Have a quick question or want to discuss your requirement?
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%20Team%2C%20I%20would%20like%20to%20discuss%20our%20digital%20marketing%20growth%20requirements."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">Direct discussion &amp; quick queries</div>
              </div>
            </div>

            {/* 3. Email Us */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/80 hover:border-[#E6007A]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#E6007A] mb-2">
                  Direct Inquiries
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#E6007A] transition-colors">
                  ✉️ Email Us
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                  For detailed requirements, collaborations, or business enquiries.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a
                  href="mailto:twinklearora1904@gmail.com"
                  className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#E6007A] transition-colors break-all"
                >
                  <span>twinklearora1904@gmail.com</span>
                  <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">Detailed brief &amp; RFP reviews</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHY START WITH DMDY?                          */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        {/* Navbar Aligned Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-700 uppercase tracking-widest mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>The DMDY Advantage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14] mb-3">
              Why Start With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                DMDY?
              </span>
            </h2>

            <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight mb-4">
              Your Business. Your Goals. Your Strategy.
            </p>

            <div className="space-y-3 text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              <p className="font-semibold text-slate-900 text-base sm:text-lg">
                We don’t believe in forcing every business into the same marketing package.
              </p>
              <p>
                At DMDY, we first understand where you are, where you want to go, and what your business actually needs. From there, we create a digital marketing approach designed around your industry, audience, objectives, and budget.
              </p>
            </div>
          </div>

          {/* 4 Value Pillar Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* 1. 10+ Years of Experience */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                

                <div className="text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-2">
                  Proven Expertise
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#00AED6] transition-colors">
                  10+ Years of Experience
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Industry experience supporting digital growth.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-[#00AED6] transition-colors">
                <span>Decade of Authority</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>

            {/* 2. 360° Digital Marketing */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#7C3AED]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] mb-2">
                  Complete Spectrum
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#7C3AED] transition-colors">
                  360° Digital Marketing
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Multiple digital capabilities under one roof.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-[#7C3AED] transition-colors">
                <span>Unified Ecosystem</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>

            {/* 3. Customized Strategies */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#E6007A] mb-2">
                  Bespoke Planning
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#E6007A] transition-colors">
                  Customized Strategies
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Solutions built around your business—not generic packages.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-[#E6007A] transition-colors">
                <span>Tailored Blueprints</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>

            {/* 4. Scalable Team */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-emerald-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>

                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                  Agile Execution
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                  Scalable Team
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Access to a flexible team based on your project requirements.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors">
                <span>Flexible Capacity</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: LET'S TALK GROWTH (FINAL CTA BANNER)          */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        {/* Navbar Aligned Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="w-full max-w-4xl mx-auto p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-white to-slate-50/90 border border-slate-200/90 shadow-sm relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Start Your Transformation</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-5">
              Let’s Talk{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Growth.
              </span>
            </h2>

            {/* Narrative Questions & Punchline */}
            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700 max-w-2xl mx-auto mb-4 leading-relaxed">
              Have an idea? A challenge? Or simply wondering what your business could do better online?
            </p>

            <p className="text-xl sm:text-2xl font-extrabold text-[#00AED6] mb-8">
              Let’s start there.
            </p>

            {/* Brand Signature Card / Pill */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-6 py-3.5 rounded-full bg-slate-950 text-white mb-8 shadow-md border border-slate-800">
              <span className="font-extrabold text-sm sm:text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                DMDY — Digi Me Digi You
              </span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                360° Digital Marketing. Designed Around You.
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-500/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919876543210?text=Hello%20DMDY%20Team%2C%20I%20would%20like%20to%20talk%20to%20your%20team%20about%20our%20digital%20marketing%20growth."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xs hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us Directly</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
