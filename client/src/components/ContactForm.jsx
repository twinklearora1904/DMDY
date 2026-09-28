import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';

const serviceOptions = [
  'Digital Marketing',
  'SEO',
  'Social Media Marketing',
  'Performance Marketing',
  'Website Development',
  'Branding',
  'Lead Generation',
  'E-commerce Marketing',
  'Complete 360° Digital Marketing',
  'Other'
];

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Digital Marketing',
    message: '',
    website: ''
  });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    // Normalize website URL if present
    let normalizedWebsite = (formData.website || '').trim();
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

      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: 'Digital Marketing',
        message: '',
        website: ''
      });

      // Redirect smoothly to Thank You page
      navigate('/thank-you', {
        state: {
          name: submittedName,
          email: submittedEmail,
          service: submittedService,
        },
      });
    } catch (error) {
      setStatus({
        type: 'error',
        msg: error.response?.data?.errors?.[0]?.msg || 
             error.response?.data?.message || 
             'Something went wrong. Please check your details and try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-slate-50 relative overflow-hidden font-sans border-t border-slate-200/80">
      
      {/* Background Glow Highlights */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 2 Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-700 uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
            <span>Direct Strategy Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14] mb-4">
            Tell Us What You’re{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Looking For
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Every business has a different challenge. Tell us a little about yours, and our team will get back to you with the right direction.
          </p>
        </div>

        {/* 2-Column Contact Card */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200/90">
          
          {/* Left Column: Contact Channels & Consultation Details */}
          <div className="w-full lg:w-5/12 bg-slate-950 text-white p-7 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,174,214,0.2)_0%,transparent_70%)] pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#00AED6] mb-6 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                <span>Executive Desk</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight text-white leading-tight">
                Let's engineer your next growth phase.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8">
                Submit your brief and our senior leadership will evaluate your digital touchpoints to outline where high-converting revenue lies.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-white/10 text-[#00AED6]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone / WhatsApp</div>
                    <a href="tel:+919876543210" className="text-sm sm:text-base font-bold text-white hover:text-[#00AED6] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-white/10 text-[#E6007A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Support</div>
                    <a href="mailto:twinklearora1904@gmail.com" className="text-sm sm:text-base font-bold text-white hover:text-[#E6007A] transition-colors break-all">
                      twinklearora1904@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-white/10 text-[#F5A623]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Agency Location</div>
                    <div className="text-sm sm:text-base font-medium text-slate-200">New Delhi / NCR, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time SLA Guarantee */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-semibold">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Average response window: &lt; 2 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Contact Form */}
          <div className="w-full lg:w-7/12 p-7 sm:p-10 md:p-12 text-left">
            
            <div className="mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Contact Form
              </h3>
              <p className="text-sm text-slate-500 font-normal mt-1">
                Fill out the required information below to get connected with our strategy team.
              </p>
            </div>
            
            {status.msg && (
              <div className={`p-4 mb-6 rounded-xl text-sm font-semibold flex items-center ${
                status.type === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}>
                {status.msg}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Row 1: Full Name & Business / Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                    placeholder="e.g. Acme Retail / Your Startup"
                  />
                </div>
              </div>
              
              {/* Row 2: Phone Number & Email Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                    placeholder="rahul@company.com"
                  />
                </div>
              </div>
              
              {/* Row 3: What Do You Need Help With? (Dropdown) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  What Do You Need Help With? *
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all cursor-pointer appearance-none"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Row 4: Tell Us About Your Business (Textarea) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Tell Us About Your Business
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-3.5 text-slate-900 text-sm sm:text-base focus:outline-none focus:bg-white focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all resize-y"
                  placeholder="Tell us about your brand, current challenges, and goals..."
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button 
                disabled={loading} 
                type="submit" 
                className="w-full py-4 px-8 rounded-xl text-white font-bold text-sm sm:text-base shadow-xl shadow-pink-500/10 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 disabled:opacity-60 flex justify-center items-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Enquiry...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span>Send My Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </button>

              {/* Privacy Confidentiality Assurance */}
              <div className="flex items-center justify-center gap-2 text-center text-xs sm:text-sm text-slate-500 pt-2 font-medium">
                <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Your information is kept confidential and will only be used to respond to your enquiry.</span>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
