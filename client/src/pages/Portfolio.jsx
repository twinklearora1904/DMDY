import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BarChart3, TrendingUp, Users } from 'lucide-react';

const caseStudies = [
  {
    client: 'Elevate Retail Group',
    industry: 'E-Commerce',
    metric: '+340%',
    metricLabel: 'Return on Ad Spend (ROAS)',
    description: 'Reconstructed the Meta Ads architecture and implemented rigorous conversion rate optimization, resulting in a 5x revenue multiple within 90 days.',
    icon: <BarChart3 className="w-8 h-8 text-brandPrimary" />
  },
  {
    client: 'TechFlow Solutions',
    industry: 'B2B SaaS',
    metric: '3x',
    metricLabel: 'Qualified Pipeline Growth',
    description: 'Executed an Account-Based Marketing (ABM) strategy combined with high-intent Google Search campaigns to triple enterprise demo requests.',
    icon: <TrendingUp className="w-8 h-8 text-brandSecondary" />
  },
  {
    client: 'National Home Services',
    industry: 'Service Logistics',
    metric: '+150%',
    metricLabel: 'Organic Search Traffic',
    description: 'Conducted a comprehensive technical SEO overhaul and deployed a localized content matrix, dramatically increasing inbound organic lead volume.',
    icon: <Users className="w-8 h-8 text-slate-700" />
  }
];

const Portfolio = () => {
  return (
    <div className="bg-slate-50 pt-24 font-sans min-h-screen">
      
      {/* Clean Corporate Header */}
      <div className="container mx-auto px-6 max-w-4xl text-center mb-20 border-b border-slate-200 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Client Success Stories
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-light">
          We operate on a foundation of measurable results. Explore how our strategic frameworks have driven exceptional growth for our partners.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 p-10 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center">
                  {study.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  {study.industry}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.client}</h3>
                <div className="text-4xl font-black text-brandPrimary mb-1 tracking-tight">{study.metric}</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{study.metricLabel}</div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                {study.description}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-100">
                <button className="flex items-center font-bold text-slate-900 hover:text-brandPrimary transition-colors">
                  View Full Report <ArrowUpRight className="w-4 h-4 ml-2" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Clean Corporate CTA */}
      <div className="bg-white py-24 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Seeking similar results?</h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            We partner exclusively with organizations that have achieved product-market fit and are prepared for rapid scaling.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-brandPrimary text-white hover:bg-indigo-700 font-bold py-4 px-10 rounded-lg transition-colors">
            Apply for Partnership <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
