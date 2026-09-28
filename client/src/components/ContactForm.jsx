import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { Mail, MapPin, Phone, MessageSquare, Sparkles } from 'lucide-react';

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', website: '', service: 'SEO', message: ''
  });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    // Normalize website URL if user omitted http/https protocol
    let normalizedWebsite = formData.website.trim();
    if (normalizedWebsite && !/^https?:\/\//i.test(normalizedWebsite)) {
      normalizedWebsite = `https://${normalizedWebsite}`;
    }

    const payload = {
      ...formData,
      website: normalizedWebsite,
    };
    
    try {
      await api.post('/api/leads', payload);
      const submittedName = formData.name;
      const submittedEmail = formData.email;
      const submittedService = formData.service;

      setFormData({ name: '', email: '', phone: '', company: '', website: '', service: 'SEO', message: '' });
      navigate('/thank-you', {
        state: {
          name: submittedName,
          email: submittedEmail,
          service: submittedService,
        },
      });
    } catch (error) {
      setStatus({ type: 'error', msg: error.response?.data?.errors?.[0]?.msg || error.response?.data?.message || 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-6 sm:py-8 bg-slate-50 relative overflow-hidden font-sans">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200/80">
          
          {/* Left Column: Contact Info */}
          <div className="w-full lg:w-5/12 bg-slate-950 text-white p-6 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,174,214,0.25)_0%,transparent_70%)] pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#00AED6] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" /> Direct Growth Line
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-[1.12]">
                Let's scale your <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  revenue.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8 max-w-md">
                We're ready to engineer your custom growth roadmap. Submit your project brief, and our senior strategists will analyze your business within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-white/10">
                    <Mail className="w-4 h-4 text-[#E6007A]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email Inquiries</div>
                    <a href="mailto:hello@dmdy.in" className="text-sm sm:text-base font-bold text-white hover:text-[#E6007A] transition-colors">
                      hello@dmdy.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-white/10">
                    <Phone className="w-4 h-4 text-[#00AED6]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Call / WhatsApp</div>
                    <a href="tel:+919876543210" className="text-sm sm:text-base font-bold text-white hover:text-[#00AED6] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-white/10">
                    <MapPin className="w-4 h-4 text-[#F5A623]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Headquarters</div>
                    <div className="text-sm sm:text-base font-medium text-slate-200">New Delhi, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-2 text-slate-400 text-xs sm:text-sm">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-slate-300">Average response time: &lt; 2 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-7/12 p-6 sm:p-10 md:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-1.5 tracking-tight">
              Request a Strategy Session
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-8 font-normal">
              Tell us about your brand and growth goals.
            </p>
            
            {status.msg && (
              <div className={`p-4 mb-6 rounded-xl text-xs sm:text-sm font-semibold flex items-center ${
                status.type === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}>
                {status.msg}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                    placeholder="Ananya Sharma"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                    placeholder="ananya@company.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Primary Goal *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all cursor-pointer"
                  >
                    <option value="SEO">Increase Organic Traffic (SEO)</option>
                    <option value="Performance Ads">Scale ROAS (Google & Meta Ads)</option>
                    <option value="Web Development">Full-Stack Web Development</option>
                    <option value="Conversion Optimization">Conversion Rate Optimization (CRO)</option>
                    <option value="Full-Funnel">Comprehensive 360° Growth</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                    placeholder="Brand / Startup Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Website URL
                  </label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                    placeholder="yourbrand.com or https://..."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Project Scope / Challenge
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                  placeholder="Tell us about your current funnel, ad budget, or revenue targets..."
                ></textarea>
              </div>
              
              <button 
                disabled={loading} 
                type="submit" 
                className="w-full py-3.5 px-6 rounded-xl text-white font-bold text-xs sm:text-sm shadow-xl bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 disabled:opacity-60 flex justify-center items-center transition-all"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Brief...
                  </span>
                ) : 'Submit Strategy Request'}
              </button>
              <p className="text-center text-xs text-slate-400 mt-2 font-medium">100% confidential. No spam, ever.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
