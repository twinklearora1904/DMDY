import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import SITE_CONFIG from '../config/siteConfig';
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
  MapPin,
  AlertCircle,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();

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

  // Quick Form State for Section 5
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Complete 360° Digital Marketing',
    message: ''
  });
  const [quickLoading, setQuickLoading] = useState(false);
  const [quickError, setQuickError] = useState('');

  const handleQuickChange = (e) => {
    setQuickForm({ ...quickForm, [e.target.name]: e.target.value });
  };

  const handleQuickSubmit = async (e) => {
    e.preventDefault();
    setQuickLoading(true);
    setQuickError('');

    try {
      await api.post('/api/leads', {
        name: quickForm.name.trim(),
        phone: quickForm.phone.trim(),
        email: quickForm.email.trim(),
        service: quickForm.service,
        message: quickForm.message.trim(),
      });

      const submittedName = quickForm.name;
      const submittedEmail = quickForm.email;
      const submittedService = quickForm.service;

      setQuickForm({
        name: '',
        phone: '',
        email: '',
        service: 'Complete 360° Digital Marketing',
        message: ''
      });

      navigate('/thank-you', {
        state: {
          name: submittedName,
          email: submittedEmail,
          service: submittedService,
        },
      });
    } catch (error) {
      setQuickError(
        error.response?.data?.errors?.[0]?.msg ||
        error.response?.data?.message ||
        'Something went wrong. Please check your details and try again.'
      );
    } finally {
      setQuickLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <SEO
        title="Contact DMDY — Let's Build Your Digital Growth Engine"
        description="Book a complimentary growth strategy session with DMDY's marketing architects. Get in touch via form, email, or direct WhatsApp call."
        url="https://www.digimedigiyou.com/contact"
      />

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.14]">
                Let’s Build Something That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Grows.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg font-bold text-slate-800 tracking-tight mb-3">
                Your next stage of growth could start with a conversation.
              </p>

              {/* Description Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-2xl">
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
                  className="w-full sm:w-auto btn-primary"
                >
                  <span>Start a Conversation</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY Team, I would like to start a conversation about our digital marketing growth.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-whatsapp"
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
                        <a href={SITE_CONFIG.contact.phoneTel} className="text-sm sm:text-base font-bold text-white hover:text-[#00AED6] transition-colors">
                          {SITE_CONFIG.contact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[#E6007A]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Inquiries</div>
                        <a href={SITE_CONFIG.contact.emailMailto} className="text-sm sm:text-base font-bold text-white hover:text-[#E6007A] transition-colors break-all">
                          {SITE_CONFIG.contact.email}
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
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80 relative overflow-hidden">

        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        {/* Navbar Aligned Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>Direct Communication</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Prefer a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                Direct Conversation?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Sometimes, the best way to understand a business is simply to talk.
            </p>
          </div>

          {/* 3 Direct Conversation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* 1. Call Us */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-2">
                  Voice Consultation
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[#00AED6] transition-colors">
                  📞 Call Us
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  Let’s discuss your business, goals, and growth opportunities.
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100">
                <a
                  href={SITE_CONFIG.contact.phoneTel}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#00AED6] transition-colors"
                >
                  <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-xs text-slate-500 mt-1.5 font-medium">{SITE_CONFIG.contact.officeHours}</div>
              </div>
            </div>

            {/* 2. WhatsApp Us */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-emerald-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>

                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                  Instant Messaging
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-emerald-600 transition-colors">
                  💬 WhatsApp Us
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  Have a quick question or want to discuss your requirement?
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100">
                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY Team, I would like to discuss our digital marketing growth requirements.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-xs text-slate-500 mt-1.5 font-medium">Direct discussion &amp; quick queries</div>
              </div>
            </div>

            {/* 3. Email Us */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#E6007A] mb-2">
                  Direct Inquiries
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[#E6007A] transition-colors">
                  ✉️ Email Us
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  For detailed requirements, collaborations, or business enquiries.
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100">
                <a
                  href="mailto:twinklearora1904@gmail.com"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#E6007A] transition-colors break-all"
                >
                  <span>twinklearora1904@gmail.com</span>
                  <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-xs text-slate-500 mt-1.5 font-medium">Detailed brief &amp; RFP reviews</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHY START WITH DMDY?                          */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">

        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        {/* Navbar Aligned Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

          {/* Section Header */}
          <div className="max-w-7xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>The DMDY Advantage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Why Start With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                DMDY?
              </span>
            </h2>

            <p className="text-base sm:text-lg font-bold text-slate-800 tracking-tight mb-3">
              Your Business. Your Goals. Your Strategy.
            </p>

            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-7xl">
              <p className="font-semibold text-slate-900 text-sm sm:text-base">
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
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-2">
                  Proven Expertise
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[#00AED6] transition-colors">
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
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E6007A]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#E6007A] mb-2">
                  Complete Spectrum
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[#E6007A] transition-colors">
                  360° Digital Marketing
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Multiple digital capabilities under one roof.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-[#E6007A] transition-colors">
                <span>Unified Ecosystem</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>

            {/* 3. Customized Strategies */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#F5A623]/50 shadow-sm hover:shadow-xl  transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2">
                  Bespoke Planning
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[#F5A623] transition-colors">
                  Customized Strategies
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Solutions built around your business—not generic packages.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-[#F5A623] transition-colors">
                <span>Tailored Blueprints</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>

            {/* 4. Scalable Team */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#00AED6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-2">
                  Agile Execution
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[#00AED6] transition-colors">
                  Scalable Team
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Access to a flexible team based on your project requirements.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-[#00AED6] transition-colors">
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
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80 relative overflow-hidden">

        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        {/* Navbar Aligned Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">

            {/* Left Column (7 cols): Narrative & Transformation */}
            <div className="lg:col-span-7">

              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>Start Your Transformation</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Let’s Talk{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Growth.
                </span>
              </h2>

              {/* Narrative Questions & Punchline */}
              <p className="text-base sm:text-lg font-medium text-slate-700 mb-3 leading-relaxed max-w-xl">
                Have an idea? A challenge? Or simply wondering what your business could do better online?
              </p>

              <p className="text-xl sm:text-2xl font-extrabold text-[#00AED6] mb-6">
                Let’s start there.
              </p>

              {/* Brand Signature Card / Pill */}
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-5 py-3 rounded-2xl bg-slate-950 text-white mb-6 shadow-md border border-slate-800">
                <span className="font-extrabold text-sm sm:text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  DMDY — Digi Me Digi You
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  360° Digital Marketing. Designed Around You.
                </span>
              </div>

              {/* Direct WhatsApp Option */}
              <div className="pt-1">
                <a
                  href={SITE_CONFIG.getWhatsAppUrl('Hello DMDY Team, I would like to talk to your team about our digital marketing growth.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Us Directly</span>
                </a>
              </div>

            </div>

            {/* Right Column (5 cols): Polished Contact Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                {/* Top Subtle Gradient Accent Line */}
                <div className="absolute"></div>

                <div className="mb-5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    Send Us a Quick Message
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    We typically respond in less than 2 hours.
                  </p>
                </div>

                <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={quickForm.name}
                      onChange={handleQuickChange}
                      placeholder="e.g. Twinkle Arora"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AED6] transition-all text-slate-800 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={quickForm.phone}
                        onChange={handleQuickChange}
                        placeholder="+91 98765..."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AED6] transition-all text-slate-800 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={quickForm.email}
                        onChange={handleQuickChange}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AED6] transition-all text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service Needed <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={quickForm.service}
                      onChange={handleQuickChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AED6] transition-all text-slate-800 cursor-pointer"
                    >
                      <option value="Complete 360° Digital Marketing">Complete 360° Digital Marketing</option>
                      <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                      <option value="Website Design & Development">Website Design & Development</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Google Ads & PPC Management">Google Ads & PPC Management</option>
                      <option value="Paid Marketing (360° Paid Media)">Paid Marketing (360° Paid Media)</option>
                      <option value="Content Creation & Marketing">Content Creation & Marketing</option>
                      <option value="Graphic Designing & Video Editing">Graphic Designing & Video Editing</option>
                      <option value="E-commerce & Lead Generation">E-commerce & Lead Generation</option>
                      <option value="General Growth Consultation">General Growth Consultation / Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Requirement <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={quickForm.message}
                      onChange={handleQuickChange}
                      placeholder="Brief note on your business or goal..."
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AED6] transition-all text-slate-800 placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Error Alert */}
                  {quickError && (
                    <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-600 font-medium flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{quickError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={quickLoading}
                    className="w-full btn-primary justify-center py-3 text-sm font-bold shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {quickLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Get in Touch</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
