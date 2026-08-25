import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Target, Zap, CheckCircle2 } from 'lucide-react';

const values = [
  { icon: <TrendingUp className="w-6 h-6 text-brandPrimary" />, title: 'Data Over Ego', desc: 'We rely exclusively on data to dictate our strategy. If a campaign isn\'t generating ROI, we quickly pivot and optimize based on concrete metrics.' },
  { icon: <Users className="w-6 h-6 text-brandPrimary" />, title: 'True Partnerships', desc: 'We don\'t operate as an external vendor. We embed ourselves into your organization to deeply understand your unit economics and growth objectives.' },
  { icon: <Target className="w-6 h-6 text-brandPrimary" />, title: 'Radical Transparency', desc: 'No hidden fees, no vanity metrics. You receive complete transparency into where your budget is allocated and the exact pipeline it produces.' },
  { icon: <Zap className="w-6 h-6 text-brandPrimary" />, title: 'Relentless Execution', desc: 'Agility is our competitive advantage. We deploy rapidly, test continuously, and scale aggressively when we identify winning channels.' }
];

const About = () => {
  return (
    <div className="bg-white font-sans">
      
      {/* Clean Corporate Hero Section */}
      <section className="pt-32 pb-20 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Engineering predictable revenue for ambitious brands.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            DMDY is a performance-focused digital marketing consultancy. We reject the traditional agency model of vanity metrics in favor of structured, profitable growth engines.
          </p>
        </div>
      </section>

      {/* Clean Stats Bar */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">50+</div>
              <div className="text-slate-500 font-medium tracking-wide uppercase text-xs">Enterprise Partners</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">$10M+</div>
              <div className="text-slate-500 font-medium tracking-wide uppercase text-xs">Ad Spend Managed</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">300%</div>
              <div className="text-slate-500 font-medium tracking-wide uppercase text-xs">Average ROAS</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-500 font-medium tracking-wide uppercase text-xs">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Our Principles</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">How we operate</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-10 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mr-4">
                    {v.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{v.title}</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Ready to partner with a team focused on revenue?</h2>
          <Link to="/contact" className="inline-flex items-center bg-brandPrimary text-white hover:bg-indigo-700 font-bold py-4 px-10 rounded-lg transition-colors">
            Contact Our Team
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
