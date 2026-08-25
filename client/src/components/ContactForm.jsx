import React, { useState } from 'react';
import api from '../utils/api';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const ContactForm = () => {
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
    
    try {
      await api.post('/api/leads', formData);
      setStatus({ type: 'success', msg: 'Your request has been sent! We will contact you shortly.' });
      setFormData({ name: '', email: '', phone: '', company: '', website: '', service: 'SEO', message: '' });
    } catch (error) {
      setStatus({ type: 'error', msg: error.response?.data?.errors?.[0]?.msg || error.response?.data?.message || 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandPrimary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brandSecondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          
          {/* Left Column: Contact Info */}
          <div className="w-full lg:w-5/12 bg-slate-900 text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.4)_0%,transparent_70%)] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Let's scale your brand.</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                We're ready to build your customized growth engine. Fill out the form, and our strategy team will be in touch within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <Mail className="w-6 h-6 text-brandSecondary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Us</div>
                    <a href="mailto:hello@dmdy.in" className="text-lg hover:text-brandSecondary transition-colors">hello@dmdy.in</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <Phone className="w-6 h-6 text-brandPrimary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Call Us</div>
                    <a href="tel:+919876543210" className="text-lg hover:text-brandPrimary transition-colors">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Visit Us</div>
                    <div className="text-lg text-slate-200">New Delhi, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-2 text-slate-400">
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm font-medium">Average response time: 2 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-7/12 p-10 md:p-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Request a Strategy Session</h3>
            
            {status.msg && (
              <div className={`p-4 mb-8 rounded-xl flex items-center ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {status.msg}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition-shadow" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Work Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition-shadow" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition-shadow" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Primary Goal *</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition-shadow">
                    <option value="SEO">Increase Organic Traffic (SEO)</option>
                    <option value="Performance Ads">Scale ROAS (Google/Meta Ads)</option>
                    <option value="Web Development">Build a New Website</option>
                    <option value="Social Media">Brand Awareness (Social Media)</option>
                    <option value="Full-Funnel">Full-Funnel Growth Strategy</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition-shadow" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Website URL</label>
                  <input type="url" name="website" value={formData.website} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition-shadow" placeholder="https://example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tell us about your current challenges</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition-shadow" placeholder="We are struggling to scale our ad spend without losing profitability..."></textarea>
              </div>
              
              <button disabled={loading} type="submit" className="w-full btn-primary py-4 rounded-xl text-lg mt-4 disabled:opacity-70 flex justify-center items-center">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : 'Submit Request'}
              </button>
              <p className="text-center text-xs text-slate-500 mt-4">We respect your privacy. No spam, ever.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
