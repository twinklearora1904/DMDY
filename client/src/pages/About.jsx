import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Target, Zap, ArrowRight, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

const values = [
  { 
    icon: <TrendingUp className="w-6 h-6 text-[#00AED6]" />, 
    title: 'Data Over Ego', 
    badge: 'ROI Focused',
    badgeColor: '#00AED6',
    desc: 'We rely exclusively on hard data to dictate strategy. If a channel or creative isn\'t driving profitable pipeline, we immediately optimize or pivot based on verified conversion metrics.' 
  },
  { 
    icon: <Users className="w-6 h-6 text-[#E6007A]" />, 
    title: 'True Growth Partners', 
    badge: 'Embedded Team',
    badgeColor: '#E6007A',
    desc: 'We don\'t operate as a detached external agency. We embed ourselves with your leadership to deeply understand your unit economics, customer lifetime value, and revenue targets.' 
  },
  { 
    icon: <Target className="w-6 h-6 text-[#F5A623]" />, 
    title: 'Radical Transparency', 
    badge: 'Zero Jargon',
    badgeColor: '#F5A623',
    desc: 'No hidden markups, no vanity metrics. You get real-time dashboard access into where every rupee of ad spend is allocated and the exact revenue it generates.' 
  },
  { 
    icon: <Zap className="w-6 h-6 text-[#00C48C]" />, 
    title: 'Relentless Execution', 
    badge: 'Agile & Fast',
    badgeColor: '#00C48C',
    desc: 'Agility is our core advantage. We test creatives rapidly, build custom high-converting funnels, and scale winning campaigns with precision.' 
  }
];

const About = () => {
  useEffect(() => {
    document.title = 'About DMDY — Digital Growth Architects & Performance Specialists';
  }, []);

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Clean Corporate Hero Section */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_30%,transparent_70%)] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00AED6] animate-pulse"></span>
              About DMDY — Digi Me Digi You
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
              Engineering predictable revenue for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">ambitious brands.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mb-8 font-normal leading-relaxed max-w-2xl">
              DMDY is a 360° performance marketing and digital engineering partner. We eliminate vanity metrics in favor of structured, profitable customer acquisition engines.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-500/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-[#00AED6] to-[#E6007A] hover:opacity-95 flex items-center justify-center gap-2"
              >
                Meet Our Strategists <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/portfolio" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 font-bold text-sm sm:text-base transition-all text-center"
              >
                View Client Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Stats Bar */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">50+</div>
              <div className="text-slate-500 font-semibold tracking-wide uppercase text-xs">High-Growth Clients</div>
            </div>
            <div className="text-center p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] to-[#E6007A] mb-1">₹10Cr+</div>
              <div className="text-slate-500 font-semibold tracking-wide uppercase text-xs">Ad Spend Managed</div>
            </div>
            <div className="text-center p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">4.2x</div>
              <div className="text-slate-500 font-semibold tracking-wide uppercase text-xs">Average Client ROAS</div>
            </div>
            <div className="text-center p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">98%</div>
              <div className="text-slate-500 font-semibold tracking-wide uppercase text-xs">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-slate-200/70 text-slate-700 mb-4">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 leading-tight">
              How We Drive Growth
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Our operating philosophy is built on technical precision, customer psychology, and relentless optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {v.icon}
                    </div>
                    <span 
                      className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{ backgroundColor: v.badgeColor + '15', color: v.badgeColor }}
                    >
                      {v.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us 3-Column Section */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <Award className="w-7 h-7 text-[#00AED6] mb-4" />
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Senior Expertise Only</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">You work directly with seasoned performance marketers and engineers, never junior account managers.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <ShieldCheck className="w-7 h-7 text-[#E6007A] mb-4" />
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">100% IP & Asset Ownership</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">All ad accounts, creative assets, codebases, and tracking setups belong 100% to your company from day one.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <CheckCircle2 className="w-7 h-7 text-[#00C48C] mb-4" />
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Results-Driven Retainers</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Our agreements are tied to verifiable milestones and revenue scaling, ensuring aligned incentives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">
              Ready to scale your company with a revenue-focused partner?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed max-w-2xl mx-auto">
              Book a 30-minute growth consultation with our leadership team. We'll analyze your current funnel and present a roadmap to scale.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00AED6] to-[#E6007A] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-xl hover:shadow-2xl text-sm sm:text-base hover:-translate-y-0.5"
            >
              Book Strategy Session <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
