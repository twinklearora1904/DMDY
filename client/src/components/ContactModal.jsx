import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import api from '../utils/api';
import SITE_CONFIG from '../config/siteConfig';
import {
  X,
  Sparkles,
  Phone,
  MessageSquare,
  Lock,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { contactSchema } from '../utils/validation';

const serviceOptions = [
  'Complete 360° Digital Marketing',
  'Search Engine Optimization (SEO)',
  'Website Design & Development',
  'Social Media Marketing',
  'Google Ads & PPC Management',
  'Paid Marketing (360° Paid Media)',
  'Content Creation & Marketing',
  'Graphic Designing & Video Editing',
  'E-commerce & Lead Generation',
  'Other / Custom Consultation'
];

const ContactModal = () => {
  const { isOpen, closeModal, initialService } = useContactModal();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Complete 360° Digital Marketing',
    message: '',
    website: ''
  });
  const [touched, setTouched] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  // Zod-based real-time validation
  const validation = contactSchema.safeParse(formData);
  const errors = !validation.success ? validation.error.flatten().fieldErrors : {};

  // Sync initialService when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        service: initialService || 'Complete 360° Digital Marketing'
      }));
      setTouched({});
      setHasSubmitted(false);
      setStatus({ type: '', msg: '' });
    }
  }, [isOpen, initialService]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type === 'error') {
      setStatus({ type: '', msg: '' });
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    setStatus({ type: '', msg: '' });

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      setTouched({
        name: true,
        company: true,
        phone: true,
        email: true,
        service: true,
        message: true,
        website: true,
      });
      setStatus({
        type: 'error',
        msg: 'Please correct the highlighted fields before submitting.'
      });
      return;
    }

    setLoading(true);

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
        service: 'Complete 360° Digital Marketing',
        message: '',
        website: ''
      });
      setTouched({});
      setHasSubmitted(false);

      closeModal();

      // Redirect to Thank You page
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

  const getFieldFeedback = (fieldName) => {
    const isTouched = touched[fieldName] || hasSubmitted;
    const error = errors[fieldName]?.[0];
    const value = formData[fieldName];

    if (!isTouched) {
      return {
        className: 'border-slate-200/90 focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 bg-slate-50/80 focus:bg-white',
        icon: null,
        error: null,
      };
    }

    if (error) {
      return {
        className: 'border-rose-400 bg-rose-50/30 text-slate-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 pr-10',
        icon: <AlertCircle className="w-4 h-4 text-rose-500" />,
        error,
      };
    }

    if (value && value.toString().trim()) {
      return {
        className: 'border-emerald-400 bg-emerald-50/20 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 pr-10',
        icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
        error: null,
      };
    }

    return {
      className: 'border-slate-200/90 focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 bg-slate-50/80 focus:bg-white',
      icon: null,
      error: null,
    };
  };

  const nameFeedback = getFieldFeedback('name');
  const phoneFeedback = getFieldFeedback('phone');
  const emailFeedback = getFieldFeedback('email');
  const serviceFeedback = getFieldFeedback('service');
  const messageFeedback = getFieldFeedback('message');

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer z-20 shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 sm:pb-5 border-b border-slate-100 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
            <span>Connect With DMDY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            Let’s Build Something That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              Grows.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-lg">
            Share what your business needs. Our senior strategy team will get back to you with the right roadmap within 2 business hours.
          </p>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-4 mt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
            <a
              href={SITE_CONFIG.contact.phoneTel}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>

            <a
              href={SITE_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-slate-400 text-xs ml-auto">
              <Clock className="w-3.5 h-3.5 text-[#00AED6]" />
              <span>&lt; 2h Response</span>
            </div>
          </div>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 sm:p-8 pt-5 sm:pt-6 max-h-[72vh] overflow-y-auto relative z-10 text-left">

          {status.msg && (
            <div className={`p-4 mb-5 rounded-xl text-sm font-semibold flex items-center ${
              status.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-rose-50 text-rose-800 border border-rose-200'
            }`}>
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">

            {/* Row 1: Full Name & Business / Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    className={`w-full rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none transition-all border ${nameFeedback.className}`}
                    placeholder="e.g. Atul Rathaur"
                  />
                  {nameFeedback.icon && (
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      {nameFeedback.icon}
                    </div>
                  )}
                </div>
                {nameFeedback.error && (
                  <p className="text-[11px] text-rose-600 font-semibold mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{nameFeedback.error}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all"
                  placeholder="e.g. Acme Retail / Your Startup"
                />
              </div>
            </div>

            {/* Row 2: Phone Number & Email Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur('phone')}
                    className={`w-full rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none transition-all border ${phoneFeedback.className}`}
                    placeholder="+91 98765 43210"
                  />
                  {phoneFeedback.icon && (
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      {phoneFeedback.icon}
                    </div>
                  )}
                </div>
                {phoneFeedback.error && (
                  <p className="text-[11px] text-rose-600 font-semibold mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{phoneFeedback.error}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    className={`w-full rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none transition-all border ${emailFeedback.className}`}
                    placeholder="atul@company.com"
                  />
                  {emailFeedback.icon && (
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      {emailFeedback.icon}
                    </div>
                  )}
                </div>
                {emailFeedback.error && (
                  <p className="text-[11px] text-rose-600 font-semibold mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{emailFeedback.error}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: What Do You Need Help With? */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                What Do You Need Help With? *
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={() => handleBlur('service')}
                  className={`w-full rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none transition-all cursor-pointer appearance-none border ${serviceFeedback.className}`}
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
              {serviceFeedback.error && (
                <p className="text-[11px] text-rose-600 font-semibold mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{serviceFeedback.error}</span>
                </p>
              )}
            </div>

            {/* Row 4: Tell Us About Your Business */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Tell Us About Your Business
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  rows="3"
                  className={`w-full rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none transition-all resize-y border ${messageFeedback.className}`}
                  placeholder="Tell us about your brand, current challenges, and goals..."
                ></textarea>
                {messageFeedback.icon && (
                  <div className="absolute right-3.5 top-4 pointer-events-none">
                    {messageFeedback.icon}
                  </div>
                )}
              </div>
              {messageFeedback.error && (
                <p className="text-[11px] text-rose-600 font-semibold mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{messageFeedback.error}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              disabled={loading}
              type="submit"
              className="w-full btn-primary"
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
            <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-500 pt-1 font-medium">
              <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Your information is kept confidential and will only be used to respond to your enquiry.</span>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
