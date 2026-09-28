import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Home as HomeIcon, 
  Clock, 
  PhoneCall, 
  MessageSquare, 
  Calendar, 
  Layers, 
  Sparkles, 
  Compass, 
  BookOpen, 
  TrendingUp, 
  Mail, 
  ArrowUpRight 
} from 'lucide-react';

const ThankYou = () => {
  const location = useLocation();
  const leadData = location.state || {};
  const { name, email, service } = leadData;

  useEffect(() => {
    document.title = 'Thank You | DMDY - Digi Me Digi You';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-20 relative z-10">
        
        {/* Main Confirmation Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center relative overflow-hidden mb-10">
          
          {/* Animated Success Icon */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center animate-pulse">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Submission Received • Under Review</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Thank You{name ? `, ${name}` : ''}! <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Your Growth Strategy is in Motion.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            We have received your project details{service ? ` for ${service}` : ''}. Our senior growth architects are analyzing your digital footprint and will connect with you within <strong className="text-slate-900 font-bold">2 business hours</strong>.
          </p>

          {/* Lead Summary Pills (if data present) */}
          {(name || email || service) && (
            <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 max-w-xl mx-auto text-xs sm:text-sm text-slate-600">
              {name && (
                <span className="font-semibold text-slate-900">
                  Client: <span className="font-normal text-slate-600">{name}</span>
                </span>
              )}
              {name && (email || service) && <span className="text-slate-300">•</span>}
              {email && (
                <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#00AED6]" />
                  <span className="font-normal text-slate-600">{email}</span>
                </span>
              )}
              {service && email && <span className="text-slate-300">•</span>}
              {service && (
                <span className="font-semibold text-slate-900">
                  Service: <span className="font-bold text-[#E6007A]">{service}</span>
                </span>
              )}
            </div>
          )}

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-all text-sm flex items-center justify-center gap-2 border border-slate-200/80"
            >
              <HomeIcon className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white text-sm shadow-lg shadow-cyan-500/20 bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Section 2: What Happens Next? (3-Step Roadmap) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-1.5">
              Transparent Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What Happens Next?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal mt-2">
              Here is how we turn your initial inquiry into a measurable revenue engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center font-extrabold text-lg">
                    01
                  </div>
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#00AED6] border border-cyan-200">
                    Within 2 Hours
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                  Discovery &amp; Market Audit
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our growth team audits your website, competitors, and organic/paid baseline to uncover high-impact opportunities.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center font-extrabold text-lg">
                    02
                  </div>
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-pink-50 text-[#E6007A] border border-pink-200">
                    20-Min Call
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                  Strategy Briefing Session
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We schedule a no-obligation briefing call with senior leadership to align on business goals, budget, and targets.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center font-extrabold text-lg">
                    03
                  </div>
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-50 text-[#F5A623] border border-amber-200">
                    Execution
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                  Custom Growth Blueprint
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  You receive a tailor-made roadmap with clear deliverables, projected KPIs, timeline milestones, and transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Need Fast-Track Help? & Helpful Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Urgent Support / Direct Contact Card */}
          <div className="bg-slate-950 text-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AED6]/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-4">
                <Clock className="w-3.5 h-3.5" /> Fast-Track Response
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold mb-2.5">
                Need an immediate answer?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                If your project is urgent or time-sensitive, feel free to call our executive desk or reach out via WhatsApp directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 relative z-10">
              <a
                href="https://wa.me/919876543210?text=Hello%20DMDY%20Team%2C%20I%20just%20submitted%20a%20project%20inquiry%20and%20would%20like%20to%20fast-track%20my%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919876543210"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border border-white/15"
              >
                <PhoneCall className="w-4 h-4 text-[#00AED6]" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Explore More While You Wait */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-600 mb-4">
                <BookOpen className="w-3.5 h-3.5 text-[#E6007A]" /> Knowledge Hub
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5">
                Explore While You Wait
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                Discover our proven track record, read in-depth performance marketing case studies, or learn our methodology.
              </p>

              <div className="space-y-2.5">
                <Link
                  to="/portfolio"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-cyan-50/50 border border-slate-200/70 hover:border-[#00AED6]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#00AED6]/10 text-[#00AED6] flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#00AED6]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#00AED6] transition-colors">
                        Client Case Studies
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">
                        Real revenue growth, ROAS &amp; traffic results
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#00AED6] transition-colors" />
                </Link>

                <Link
                  to="/blog"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-pink-50/50 border border-slate-200/70 hover:border-[#E6007A]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-[#E6007A]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#E6007A] transition-colors">
                        Growth Insights &amp; Articles
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">
                        Expert breakdowns on modern SEO, Meta &amp; Google Ads
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#E6007A] transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThankYou;
