import React from 'react';
import Pricing from '../components/Pricing';

const PricingPage = () => {
  return (
    <div className="pt-24 bg-white relative overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(239,246,255,0.8)_0%,rgba(255,255,255,1)_50%)] pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-50/50 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10">
        <Pricing />
      </div>
    </div>
  );
};

export default PricingPage;
