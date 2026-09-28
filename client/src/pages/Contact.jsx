import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { 
  Sparkles, 
  MessageSquare, 
  ArrowDown, 
  Clock, 
  Target, 
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Zap,
  CheckCircle2
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
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-white border-b border-slate-200/80 overflow-hidden">
        
        {/* Subtle Ambient Glow Accents */}
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

        {/* Navbar Aligned Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Main Narrative & CTAs */}
            <div className="lg:col-span-7">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00AED6] animate-pulse"></span>
                <span>Connect With DMDY — Digi Me Digi You</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.14]">
                Let’s Build Something That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Grows.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg md:text-xl font-bold text-slate-800 tracking-tight mb-4">
                Your next stage of growth could start with a conversation.
              </p>

              {/* Description Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6 max-w-2xl">
                Whether you’re launching a new business, building your brand, looking for more leads, or ready to scale your digital presence, DMDY is here to understand what you need and create a strategy around it.
              </p>

              {/* Highlight Callout Box (Matching About & Services) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/70 via-pink-50/40 to-amber-50/50 border border-slate-200/80 mb-8 max-w-2xl">
                <p className="font-semibold text-slate-900 text-sm sm:text-base">
                  No complicated packages. No unnecessary services.{' '}
                  <span className="text-[#00AED6] font-bold">Just the right digital marketing</span> for your business.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4 mb-8">
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-500/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 flex items-center justify-center gap-2"
                >
                  <span>Start a Conversation</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hello%20DMDY%20Team%2C%20I%20would%20like%20to%20start%20a%20conversation%20about%20our%20digital%20marketing%20growth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Trust Indicators Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 max-w-2xl">
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <Clock className="w-4 h-4 text-[#00AED6] shrink-0" />
                  <span>&lt; 2-Hour Response</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <Target className="w-4 h-4 text-[#E6007A] shrink-0" />
                  <span>Tailored Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
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

                  <h3 className="text-2xl font-extrabold mb-2 tracking-tight text-white">
                    Growth Starts With a Free Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    Share your current challenges. We evaluate your SEO, paid search, and social media footprint to deliver high-converting recommendations.
                  </p>

                  <div className="space-y-4 pt-4 border-t border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[#00AED6]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Call / WhatsApp</div>
                        <a href="tel:+919876543210" className="text-xs sm:text-sm font-bold text-white hover:text-[#00AED6] transition-colors">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[#E6007A]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Inquiries</div>
                        <a href="mailto:hello@dmdy.in" className="text-xs sm:text-sm font-bold text-white hover:text-[#E6007A] transition-colors">
                          hello@dmdy.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[#F5A623]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Headquarters</div>
                        <span className="text-xs sm:text-sm font-bold text-slate-200">
                          New Delhi / NCR, India
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Micro Pillar Badges Underneath Card */}
              <div className="grid grid-cols-3 gap-2.5 mt-3.5">
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#00AED6]">01. Discovery</div>
                  <div className="text-[11px] text-slate-500 font-medium">Audit &amp; Baseline</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#E6007A]">02. Strategy</div>
                  <div className="text-[11px] text-slate-500 font-medium">Bespoke Blueprint</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#F5A623]">03. Scale</div>
                  <div className="text-[11px] text-slate-500 font-medium">Measurable ROI</div>
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

    </div>
  );
};

export default Contact;
