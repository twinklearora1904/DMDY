import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Home as HomeIcon, 
  Sparkles, 
  Mail 
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
    <div className="min-h-[85vh] flex items-center justify-center bg-slate-50 font-sans relative overflow-hidden py-12 sm:py-16">
      {/* Ambient background glow accents */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Confirmation Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center relative overflow-hidden">
          
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

      </div>
    </div>
  );
};

export default ThankYou;
