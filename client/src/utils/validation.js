/**
 * Real-Time Lead Form Validation Engine
 * Validates lead generation inquiries on the fly with friendly, conversion-focused feedback.
 */

export const validateLeadForm = (formData) => {
  const errors = {};

  // 1. Full Name
  const trimmedName = (formData.name || '').trim();
  if (!trimmedName) {
    errors.name = 'Full Name is required.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Full Name must be at least 2 characters.';
  }

  // 2. Email Address
  const trimmedEmail = (formData.email || '').trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!trimmedEmail) {
    errors.email = 'Business email address is required.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid business email (e.g. name@company.com).';
  }

  // 3. Phone Number
  const rawPhone = (formData.phone || '').trim();
  const digitsOnly = rawPhone.replace(/\D/g, '');
  if (!rawPhone) {
    errors.phone = 'Phone number is required.';
  } else if (digitsOnly.length < 10) {
    errors.phone = 'Please enter a valid 10-digit phone number.';
  }

  // 4. Service Selection
  if (!formData.service || !formData.service.trim()) {
    errors.service = 'Please select a primary capability.';
  }

  // 5. Message / Project Brief (optional, but if typed, enforce >= 10 chars)
  const trimmedMessage = (formData.message || '').trim();
  if (trimmedMessage && trimmedMessage.length < 10) {
    errors.message = 'Please share at least 10 characters so we can understand your objectives.';
  }

  // 6. Website URL (optional, but validate format if entered)
  const trimmedWebsite = (formData.website || '').trim();
  if (trimmedWebsite) {
    const cleanUrl = trimmedWebsite.replace(/^https?:\/\//i, '');
    if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i.test(cleanUrl)) {
      errors.website = 'Please enter a valid website address (e.g. company.com).';
    }
  }

  return errors;
};
