import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Target, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';

const process = [
  { step: '01', title: 'Discovery & Audit', desc: 'We conduct a comprehensive teardown of your current digital footprint to identify bottlenecks and immediate opportunities.' },
  { step: '02', title: 'Strategic Architecture', desc: 'Our analysts formulate a bespoke 90-day roadmap aligned closely with your unit economics and growth targets.' },
  { step: '03', title: 'Rapid Execution', desc: 'Specialized teams deploy campaigns, resolve technical debt, and establish measurement frameworks.' },
  { step: '04', title: 'Scale & Optimize', desc: 'Continuous data analysis allows us to double down on winning channels and scale your return on investment.' }
];

const Services = () => {
  return (
    <div className="bg-white pt-24 font-sans">
      
      {/* Clean Header */}
      <div className="container mx-auto px-6 max-w-4xl text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Specialized Digital Services
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-light">
          We provide structured, data-driven marketing frameworks engineered to scale enterprise and mid-market organizations.
        </p>
      </div>

      {/* Services List (Hardcoded for custom logo colors) */}
      <div className="container mx-auto px-6 max-w-6xl mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-10 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-brandCyan/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <LineChart className="w-8 h-8 text-brandCyan" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-brandCyan transition-colors">Search Engine Optimization</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              We engineer your web presence to dominate search engine results. Using advanced technical SEO and authoritative link acquisition, we drive high-intent organic traffic that converts into revenue.
            </p>
            <ul className="space-y-4">
              {['Technical Audits & Fixes', 'Keyword Gap Analysis', 'High-Authority Link Building', 'Local SEO & Maps Optimization'].map((feature, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brandCyan mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-10 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-brandOrange" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-brandOrange transition-colors">Performance Marketing</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Precision-targeted paid campaigns across major networks. We focus ruthlessly on maximizing your Return on Ad Spend (ROAS) and driving scalable, predictable lead generation.
            </p>
            <ul className="space-y-4">
              {['Google Search & Display Ads', 'Meta (Facebook/Instagram) Ads', 'LinkedIn B2B Lead Gen', 'Dynamic Retargeting & Lookalikes'].map((feature, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brandOrange mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-10 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-brandPink/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-8 h-8 text-brandPink" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-brandPink transition-colors">Web Development</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              High-performance, secure, and conversion-optimized web properties. We build robust React and Node.js applications tailored to your specific business operations.
            </p>
            <ul className="space-y-4">
              {['Custom React Applications', 'E-Commerce Solutions', 'API Development & Integrations', 'Headless CMS Architecture'].map((feature, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brandPink mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-10 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-brandGreen/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-8 h-8 text-brandGreen transform -rotate-45" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-brandGreen transition-colors">Conversion Optimization</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Data-backed UI/UX improvements designed to turn more of your existing traffic into paying customers. We employ rigorous A/B testing and user behavior analysis.
            </p>
            <ul className="space-y-4">
              {['A/B & Multivariate Testing', 'Heatmapping & Behavior Analysis', 'Landing Page Optimization', 'Funnel Friction Reduction'].map((feature, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brandGreen mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>

      {/* Clean Corporate Process Timeline */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Our Methodology</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Structured for Predictable Growth</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-black text-slate-200 mb-4">{p.step}</div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{p.title}</h4>
                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Final CTA */}
      <section className="py-24 text-center bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Ready to discuss your strategy?</h2>
          <Link to="/contact" className="inline-flex items-center bg-brandPrimary text-white hover:bg-opacity-90 font-bold py-4 px-10 rounded-lg transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
