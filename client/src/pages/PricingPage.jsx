import React, { useEffect } from 'react';
import Pricing from '../components/Pricing';
import SEO from '../components/SEO';

const PricingPage = () => {
  useEffect(() => {
    document.title = 'Transparent Growth Plans & Pricing Models — DMDY';
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-12 sm:pb-20 bg-slate-50 relative overflow-hidden min-h-screen font-sans">
      <SEO
        title="Transparent Growth Plans & Pricing Models — DMDY"
        description="Transparent, flexible, and value-focused growth packages customized for your stage: Seed, Scale, or Enterprise."
        url="https://dmdy.in/pricing"
      />
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="relative z-10">
        <Pricing />
      </div>
    </div>
  );
};

export default PricingPage;
