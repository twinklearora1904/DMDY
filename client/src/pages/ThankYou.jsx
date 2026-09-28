import React, { useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Home as HomeIcon, 
  Sparkles, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Mail, 
  Briefcase 
} from 'lucide-react';

const ThankYou = () => {
  const location = useLocation();
  const leadData = location.state || {};
  const { name, email, service } = leadData;

  // Generate an official looking session reference ID
  const referenceId = useMemo(() => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    return `DMDY-${randomNum}`;
  }, []);

  useEffect(() => {
    document.title = 'Thank You | DMDY - Digi Me Digi You';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-50 font-sans relative overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-10">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Aligned with Navbar Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex justify-center">
        
        {/* Single-Window Compact Confirmation Card */}
        <div className="w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-9 md:p-11 border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center relative overflow-hidden">
          
          {/* Animated Success Badge */}
          <div className="relative inline-flex items-center justify-center mb-4">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center animate-pulse">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-500/30">
                <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
          </div>

          {/* Status & Reference ID Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Inquiry Received &amp; Queued</span>
            </span>
            <span className="text-[11px] font-mono font-bold text-slate-500 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200/80">
              Ref: {referenceId}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-2.5">
            Thank You{name ? `, ${name}` : ''}! <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Your Growth Strategy is in Motion.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto mb-5">
            We have received your strategy brief{service ? ` for ${service}` : ''}. Our senior growth architects are analyzing your digital footprint and will reach out within <strong className="text-slate-900 font-bold">2 business hours</strong>.
          </p>

          {/* Three Compact Process Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-xl mx-auto mb-5">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center gap-2 text-center">
              <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-100 text-[#00AED6] flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 text-[#00AED6]" />
              </div>
              <div className="text-left">
                <div className="text-xs font-extrabold text-slate-900">Under 2 Hours</div>
                <div className="text-[10px] text-slate-500">Guaranteed Callback</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center gap-2 text-center">
              <div className="w-7 h-7 rounded-lg bg-pink-50 border border-pink-100 text-[#E6007A] flex items-center justify-center shrink-0">
                <TrendingUp className="w-3.5 h-3.5 text-[#E6007A]" />
              </div>
              <div className="text-left">
                <div className="text-xs font-extrabold text-slate-900">Digital Audit</div>
                <div className="text-[10px] text-slate-500">Competitor Scan</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center gap-2 text-center">
              <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-100 text-[#F5A623] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5A623]" />
              </div>
              <div className="text-left">
                <div className="text-xs font-extrabold text-slate-900">Senior Team</div>
                <div className="text-[10px] text-slate-500">Human-Led Analysis</div>
              </div>
            </div>
          </div>

          {/* Lead Details Confirmation Snapshot (if submitted) */}
          {(name || email || service) && (
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 p-2.5 px-4 rounded-xl bg-slate-50/90 border border-slate-200/80 mb-6 text-xs text-slate-600">
              {name && (
                <div>
                  <span className="text-slate-400">Client:</span> <strong className="text-slate-900 font-semibold">{name}</strong>
                </div>
              )}
              {name && (email || service) && <span className="text-slate-300">•</span>}
              {email && (
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-[#00AED6]" />
                  <strong className="text-slate-900 font-semibold">{email}</strong>
                </div>
              )}
              {service && email && <span className="text-slate-300">•</span>}
              {service && (
                <div>
                  <span className="text-slate-400">Service:</span> <strong className="text-[#00AED6] font-bold">{service}</strong>
                </div>
              )}
            </div>
          )}

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-200/80"
            >
              <HomeIcon className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-white text-xs sm:text-sm shadow-lg shadow-cyan-500/20 bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Growth Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ThankYou;
