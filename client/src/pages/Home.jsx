import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { LineChart, Target, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-slate-50 font-sans">
      <Hero />
      
      

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              We are a Digital Marketing Agency with a <span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(90deg, #00AED6, #E6007A)'}}>Creative Strong-arm</span>
            </h2>
            <p className="text-slate-500 text-base max-w-3xl mx-auto leading-relaxed">
              When the creativity and productivity of other agencies end, it is from where we start. We are DMDY, a digital marketing agency with a creative edge based in India. Adopting a 360-degree approach, we provide services that include Creative designs, Communication, Content, Web Design, SEO services, Social Media Marketing, Content Marketing, Pay-Per-Click Advertising, and Application Development.
            </p>
          </div>

          {/* 8 Service Cards — 4 col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '💡', color: '#00AED6',
                title: 'Creative & Communication',
                desc: 'Brand strategy, identity and creative communication that lifts your brand and how people experience it.',
              },
              {
                icon: '🔍', color: '#F5A623',
                title: 'Search Engine Marketing',
                desc: 'SEM strategy, paid search and SEO that put your brand in front of high-intent customers ready to convert.',
              },
              {
                icon: '📈', color: '#E6007A',
                title: 'Digital Marketing',
                desc: 'Full-funnel growth campaigns — from awareness to conversion — built on data and creative that performs.',
              },
              {
                icon: '🖥️', color: '#00C48C',
                title: 'Website Development',
                desc: 'Custom websites and web applications — engineered to look great, load fast and convert visitors into customers.',
              },
              {
                icon: '📣', color: '#E6007A',
                title: 'Ad Management',
                desc: 'Search, social, display and video ads — strategy, creative and optimisation that turn budget into measurable ROI.',
              },
              {
                icon: '🎬', color: '#F5A623',
                title: 'UGC Content Creation',
                desc: 'Performance-ready user-generated content from creators that scrolls, sells and feels real to your audience.',
              },
              {
                icon: '📱', color: '#00AED6',
                title: 'Social Media Marketing',
                desc: 'Always-on social strategy, content and community management that builds an audience and converts it.',
              },
              {
                icon: '🤝', color: '#A39BD6',
                title: 'Influencer Marketing',
                desc: 'Creator-led campaigns at scale — from casting and brief to execution, content rights and performance reporting.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                style={{ border: `1.5px solid ${service.color}40` }}
              >
                {/* Icon Box */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                  style={{ backgroundColor: service.color + '18' }}
                >
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[color:var(--c)] transition-colors" style={{'--c': service.color}}>
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
                  style={{ color: service.color }}
                >
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* See All Services CTA */}
          {/* <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{background: 'linear-gradient(135deg, #00AED6 0%, #E6007A 50%, #F5A623 100%)'}}
            >
              See All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div> */}

        </div>
      </section>

      {/* Our Expertise — Interactive 2-Column Section */}
      {(() => {
        const tabs = [
          {
            label: 'Performance Marketing & Paid Ads',
            color: '#E6007A',
            headline: 'Drive Maximum ROI with Precision Ads',
            desc: 'Laser-targeted paid campaigns across Google, Meta, and LinkedIn engineered to maximize your Return on Ad Spend (ROAS) and scale your pipeline.',
            points: ['Google Search & Shopping Ads', 'Meta & Instagram Campaigns', 'LinkedIn B2B Lead Generation', 'Advanced Retargeting & Lookalikes'],
            stat1: { label: 'Avg. ROAS', value: '420%' }, stat2: { label: 'Leads Generated', value: '50K+' },
            tags: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting'],
          },
          {
            label: 'SEO & Organic Growth',
            color: '#00AED6',
            headline: 'Rank Higher. Get Found. Grow Organically.',
            desc: 'Data-driven technical SEO, authoritative link building, and content strategy designed to secure top rankings and drive qualified organic traffic.',
            points: ['Technical SEO & Core Web Vitals', 'Enterprise Content Strategy', 'Authority Link Building', 'Local & E-commerce SEO'],
            stat1: { label: 'Organic Traffic ↑', value: '+145%' }, stat2: { label: 'Keywords Ranked', value: '10K+' },
            tags: ['On-Page SEO', 'Link Building', 'Content', 'Technical Audit'],
          },
          {
            label: 'Branding & Creative Design',
            color: '#F5A623',
            headline: 'Build a Brand People Remember',
            desc: 'From brand identity to visual design systems — we craft compelling brand stories and creative assets that differentiate your business in crowded markets.',
            points: ['Logo & Visual Identity', 'Brand Guidelines & Style Guide', 'Creative Ad Design', 'Pitch Decks & Presentations'],
            stat1: { label: 'Brands Built', value: '200+' }, stat2: { label: 'Design Assets', value: '5K+' },
            tags: ['Logo Design', 'UI/UX', 'Brand Identity', 'Creative'],
          },
          {
            label: 'Social Media Marketing',
            color: '#00C48C',
            headline: 'Always-On Social That Converts',
            desc: 'Strategic social content, community management, and engagement campaigns that build loyal audiences and drive real business results across all platforms.',
            points: ['Content Calendar & Strategy', 'Community Management', 'Influencer Partnerships', 'Social Analytics & Reporting'],
            stat1: { label: 'Followers Grown', value: '2M+' }, stat2: { label: 'Engagement Rate', value: '6.8%' },
            tags: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter/X'],
          },
          {
            label: 'Web & App Development',
            color: '#A39BD6',
            headline: 'High-Performance Digital Experiences',
            desc: 'Custom websites and web applications engineered for speed, conversion, and scale — from landing pages to full enterprise platforms.',
            points: ['React & Next.js Development', 'E-commerce & WooCommerce', 'Conversion Rate Optimization', 'Mobile-First & PWA'],
            stat1: { label: 'Sites Launched', value: '120+' }, stat2: { label: 'Avg. Load Time', value: '<1.5s' },
            tags: ['React', 'Next.js', 'Node.js', 'CRO'],
          },
        ];
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeIdx, setActiveIdx] = useState(0);
        const active = tabs[activeIdx];
        return (
          <section className="py-20 overflow-hidden" style={{backgroundColor: active.color + '08'}}>
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left: Heading + Tabs */}
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6" style={{color: active.color, backgroundColor: active.color + '18'}}>
                    Our Expertise
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                    Seamless <span style={{color: '#E6007A'}}>Digital Marketing</span> &amp; <span style={{color: '#00AED6'}}>Brand Building</span> solutions
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-lg">
                    With over a decade of experience, we have served 250+ brands across 10+ countries and delivered 350+ projects.
                  </p>

                  <div className="space-y-3">
                    {tabs.map((tab, idx) => (
                      <div
                        key={tab.label}
                        onClick={() => setActiveIdx(idx)}
                        className="flex items-center justify-between px-5 py-4 rounded-xl cursor-pointer transition-all duration-300"
                        style={activeIdx === idx
                          ? { backgroundColor: tab.color, color: '#fff', boxShadow: `0 4px 24px ${tab.color}40` }
                          : { backgroundColor: '#f8fafc', color: '#475569', border: `1.5px solid ${tab.color}30` }}
                      >
                        <span className="font-bold text-[15px]">{tab.label}</span>
                        <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                          style={{ backgroundColor: activeIdx === idx ? 'rgba(255,255,255,0.2)' : tab.color + '20' }}>
                          <ArrowRight className="w-4 h-4" style={{color: activeIdx === idx ? '#fff' : tab.color}} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Dynamic Content Card — aligned with tab list */}
                <div className="relative" style={{paddingTop: '140px'}}>
                  <div className="absolute -inset-2 rounded-3xl blur-2xl opacity-15" style={{background: active.color}}></div>
                  <div className="relative bg-white rounded-3xl border shadow-xl overflow-hidden" style={{borderColor: active.color + '30'}}>
                    {/* Card header */}
                    <div className="px-7 py-5 border-b" style={{borderColor: active.color + '20', backgroundColor: active.color + '08'}}>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-1">{active.headline}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{active.desc}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-px" style={{backgroundColor: active.color + '15'}}>
                      <div className="bg-white px-7 py-5 text-center">
                        <p className="text-3xl font-black" style={{color: active.color}}>{active.stat1.value}</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{active.stat1.label}</p>
                      </div>
                      <div className="bg-white px-7 py-5 text-center">
                        <p className="text-3xl font-black" style={{color: active.color}}>{active.stat2.value}</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{active.stat2.label}</p>
                      </div>
                    </div>

                    {/* Points */}
                    <div className="px-7 py-6">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">What We Do</p>
                      <ul className="space-y-3">
                        {active.points.map(pt => (
                          <li key={pt} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                            <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: active.color + '20'}}>
                              <span className="w-2 h-2 rounded-full" style={{backgroundColor: active.color}}></span>
                            </span>
                            {pt}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-6 pt-5" style={{borderTop: `1px solid ${active.color}20`}}>
                        {active.tags.map(tag => (
                          <span key={tag} className="text-[11px] font-bold px-3 py-1 rounded-full" style={{color: active.color, background: active.color + '18'}}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })()}

      {/* Trust Banner */}
      <div className="bg-white border-y border-slate-100 py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Trusted by leading brands across India</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {[
              { name: 'BrandOne',   color: '#00AED6' },
              { name: 'TechCorp',   color: '#F5A623' },
              { name: 'GrowthX',    color: '#E6007A' },
              { name: 'StudioAlpha',color: '#00C48C' },
              { name: 'ElevateHQ',  color: '#A39BD6' },
            ].map((brand) => (
              <div
                key={brand.name}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-100 bg-slate-50 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: brand.color }}></span>
                <span className="text-sm font-bold text-slate-700 tracking-wide">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clean Corporate CTA Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">
            Ready to elevate your digital presence?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Partner with DMDY for data-backed strategies and transparent reporting. Schedule a consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto bg-brandPrimary text-white hover:bg-indigo-700 font-bold py-4 px-10 rounded-lg transition-colors">
              Request a Consultation
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 font-bold py-4 px-10 rounded-lg transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
