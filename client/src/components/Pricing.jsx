import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import { Check, ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Growth Engine',
    description: 'Perfect for startups and emerging brands ready to build organic search authority and inbound traffic.',
    price: '19,999',
    features: [
      'Comprehensive Technical SEO Architecture',
      'Local & National Keyword Targeting',
      'On-Page Optimization & Schema Markup',
      '2 High-Authority SEO Growth Articles/mo',
      'Monthly Forensic Performance Reporting'
    ],
    highlighted: false,
    ctaText: 'Start Growing'
  },
  {
    name: 'Market Dominator',
    description: 'Our flagship full-funnel plan for companies aiming for rapid customer acquisition and category dominance.',
    price: '49,999',
    features: [
      'Advanced Omnichannel Acquisition Matrix',
      'High-Intent Google Ads & Meta Performance Scaling',
      'End-to-End Technical & Editorial SEO',
      'Conversion Rate Optimization (CRO) Teardowns',
      'Dedicated Senior Growth Strategist',
      'Bi-Weekly Strategic Revenue Consultations'
    ],
    highlighted: true,
    ctaText: 'Scale Now'
  },
  {
    name: 'Enterprise Custom',
    description: 'Bespoke growth infrastructure for established brands requiring enterprise compliance and high scale.',
    price: 'Custom',
    features: [
      'Everything in Market Dominator',
      'Custom CRM & Inbound Marketing Automation',
      'Advanced Multi-Touch Attribution Modeling',
      'Full-Funnel Creative Production & Testing',
      'Digital PR & High-Domain Authority Outreach',
      'Direct Weekly Access to Leadership Team'
    ],
    highlighted: false,
    ctaText: 'Contact Sales'
  }
];

const Pricing = () => {
  const { openModal } = useContactModal();
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-8 sm:py-12 relative bg-transparent font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="mb-14 text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
              Investment Plans & ROI Scaling
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight leading-[1.12]">
              Transparent pricing for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                exponential growth
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              Ad capital is billed directly from your verified ad accounts. Zero hidden markups. Scalable terms with a simple 30-day notice.
            </p>
          </div>
          
          {/* Modern Segmented Billing Control */}
          <div className="flex w-full sm:w-auto items-center p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm shrink-0 self-start sm:self-center lg:self-end justify-center">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`flex-1 sm:flex-initial text-center px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                !isAnnual
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex-1 sm:flex-initial text-center px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                isAnnual
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span>Annual</span>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide transition-colors ${
                isAnnual
                  ? 'bg-emerald-400/20 text-emerald-300'
                  : 'bg-emerald-100 text-emerald-700'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>
        
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-7 sm:p-8 lg:p-9 transition-all duration-300 flex flex-col justify-between ${
                plan.highlighted 
                  ? 'bg-white shadow-2xl ring-2 ring-[#E6007A] lg:-translate-y-2' 
                  : 'bg-white shadow-md ring-1 ring-slate-200/80 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div>
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal min-h-[48px]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline text-slate-900">
                    {plan.price !== 'Custom' && <span className="text-xl sm:text-2xl font-bold mr-1">₹</span>}
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {plan.price === 'Custom' ? 'Custom' : isAnnual ? (parseInt(plan.price.replace(/,/g, '')) * 0.8).toLocaleString() : plan.price}
                    </span>
                    {plan.price !== 'Custom' && <span className="text-slate-500 ml-2 text-xs sm:text-sm font-medium">/month</span>}
                  </div>
                  {plan.price !== 'Custom' && isAnnual && (
                    <p className="text-xs text-emerald-600 font-bold mt-1.5 uppercase tracking-wide">
                      Billed annually (20% Off)
                    </p>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start text-sm sm:text-base">
                      <Check className="w-4 h-4 text-[#00AED6] mr-2.5 shrink-0 mt-1" />
                      <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                type="button"
                onClick={() => openModal(plan.name === 'Growth Engine' ? 'SEO' : 'Complete 360° Digital Marketing')}
                className={`w-full flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] text-white shadow-lg hover:opacity-95' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200/80'
                }`}
              >
                {plan.ctaText}
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Guarantees and Trust Row */}
        <div className="rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 text-[#00AED6]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">100% Direct Account Billing</h4>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Ad budgets are paid straight to Google and Meta. Zero management markups.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#E6007A]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">No Hostage Contracts</h4>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  You own all accounts, ad creatives, copy, code, and keyword analytics. Always.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-[#F5A623]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">Performance Guarantee</h4>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  We establish clear quarterly revenue and ranking KPIs prior to kickoff.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
