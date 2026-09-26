import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  useEffect(() => {
    document.title = 'Get In Touch | Schedule a Growth Strategy Session — DMDY';
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-12 sm:pb-20 bg-slate-50 min-h-screen font-sans">
      <ContactForm />
    </div>
  );
};

export default Contact;
