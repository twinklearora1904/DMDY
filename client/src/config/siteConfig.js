/**
 * Global Site Configuration for DMDY
 * Central source of truth for business contact details, phone numbers, WhatsApp, email, and social profiles.
 * Updating contact details here updates them across the entire application.
 */

export const SITE_CONFIG = {
  brandName: 'DMDY',
  legalName: 'DMDY - Digi Me Digi You',
  tagline: '360° Digital Growth Partner & Performance Marketing Agency',
  domain: 'https://dmdy.in',

  // Contact Information
  contact: {
    phoneDisplay: '+91 98765 43210',
    phoneRaw: '+919876543210',
    phoneTel: 'tel:+919876543210',
    whatsappNumber: '919876543210',
    email: 'hello@dmdy.in',
    emailMailto: 'mailto:hello@dmdy.in',
    address: 'Delhi NCR, India',
    officeHours: 'Mon - Sat: 9:00 AM - 7:00 PM IST',
  },

  // Social Channels
  socials: {
    linkedin: 'https://linkedin.com/company/dmdy',
    instagram: 'https://instagram.com/dmdy.in',
    twitter: 'https://x.com/dmdydigital',
    facebook: 'https://facebook.com/dmdydigital',
  },

  /**
   * Helper function to build a pre-filled WhatsApp click-to-chat URL
   * @param {string} [message] - Pre-filled user message
   * @returns {string} Fully encoded WhatsApp URL
   */
  getWhatsAppUrl(message = 'Hello DMDY Team, I would like to discuss our digital marketing growth.') {
    const cleanNumber = this.contact.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  },
};

export default SITE_CONFIG;
