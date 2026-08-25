import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Growth Engine',
    description: 'Perfect for startups ready to build their initial digital presence and drive organic traffic.',
    price: '19,999',
    features: [
      'Comprehensive SEO Strategy',
      'Local & Technical SEO Optimization',
      'Basic Social Media Management',
      '2 SEO-Optimized Blog Posts/month',
      'Monthly Performance Report'
    ],
    highlighted: false,
    ctaText: 'Start Growing'
  },
  {
    name: 'Market Dominator',
    description: 'Our most popular plan for businesses aiming for rapid scaling and omnichannel dominance.',
    price: '49,999',
    features: [
      'Advanced Omnichannel Strategy',
      'Google Ads & Meta Ads Management',
      'Full SEO & Content Marketing',
      'Conversion Rate Optimization (CRO)',
      'Dedicated Account Manager',
      'Bi-weekly Strategy Consultations'
    ],
    highlighted: true,
    ctaText: 'Scale Now'
  },
  {
    name: 'Enterprise Custom',
    description: 'Tailored solutions for established brands requiring massive scale and custom integrations.',
    price: 'Custom',
    features: [
      'Everything in Market Dominator',
      'Custom CRM & Marketing Automation',
      'Advanced Data Analytics & Tracking',
      'Full-Funnel Content Production',
      'PR & Influencer Outreach',
      'Direct Access to Leadership Team'
    ],
    highlighted: false,
    ctaText: 'Contact Sales'
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 relative bg-transparent">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-wider text-brandPrimary uppercase mb-3">Investment Plans</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
            Transparent pricing for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandSecondary">
              exponential growth
            </span>
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            Ad spend is billed separately from management fees. No hidden costs. 
            Cancel anytime with a 30-day notice.
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:ring-offset-2"
            >
              <span 
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${isAnnual ? 'translate-x-8 bg-brandPrimary' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Annually <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-white shadow-2xl ring-2 ring-brandPrimary lg:-translate-y-4' 
                  : 'bg-white shadow-lg ring-1 ring-slate-200 hover:shadow-xl hover:-translate-y-2'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-brandPrimary to-brandSecondary text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed min-h-[60px]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline text-slate-900">
                  {plan.price !== 'Custom' && <span className="text-2xl font-semibold mr-1">₹</span>}
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.price === 'Custom' ? 'Custom' : isAnnual ? (parseInt(plan.price.replace(/,/g, '')) * 0.8).toLocaleString() : plan.price}
                  </span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 ml-2 font-medium">/month</span>}
                </div>
                {plan.price !== 'Custom' && isAnnual && (
                  <p className="text-sm text-green-600 font-medium mt-2">Billed annually</p>
                )}
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-brandPrimary mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact" 
                className={`w-full flex items-center justify-center py-3.5 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  plan.highlighted 
                    ? 'bg-brandPrimary hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                {plan.ctaText}
                {plan.highlighted && <ArrowRight className="w-4 h-4 ml-2" />}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
