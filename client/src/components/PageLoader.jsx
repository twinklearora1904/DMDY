import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const PageLoader = () => {
  const location = useLocation();
  const [initialLoading, setInitialLoading] = useState(true);
  const [initialProgress, setInitialProgress] = useState(15);
  const [routeProgress, setRouteProgress] = useState(0);
  const [routeLoading, setRouteLoading] = useState(false);

  // 1. Initial Page Load Animation
  useEffect(() => {
    const p1 = setTimeout(() => setInitialProgress(45), 150);
    const p2 = setTimeout(() => setInitialProgress(75), 350);
    const p3 = setTimeout(() => setInitialProgress(100), 600);
    const pDone = setTimeout(() => {
      setInitialLoading(false);
    }, 850);

    return () => {
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(pDone);
    };
  }, []);

  // 2. Route Change Progress Bar
  useEffect(() => {
    // Skip route progress if initial loading is still active
    if (initialLoading) return;

    setRouteLoading(true);
    setRouteProgress(25);

    const step1 = setTimeout(() => setRouteProgress(65), 100);
    const step2 = setTimeout(() => setRouteProgress(100), 250);
    const step3 = setTimeout(() => {
      setRouteLoading(false);
      setRouteProgress(0);
    }, 450);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  }, [location.pathname, location.search]);

  return (
    <>
      {/* ========================================================= */}
      {/* A. ROUTE CHANGE TOP PROGRESS BAR (Stripe/GitHub style)    */}
      {/* ========================================================= */}
      {routeLoading && (
        <div className="fixed top-0 left-0 right-0 z-[999999] pointer-events-none">
          <div
            className="h-[3px] bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] transition-all duration-300 ease-out shadow-[0_0_12px_rgba(230,0,122,0.9),0_0_6px_rgba(0,174,214,0.9)]"
            style={{ width: `${routeProgress}%` }}
          />
          {/* Glowing head droplet */}
          <div 
            className="absolute top-0 right-0 w-8 h-3 bg-white/40 blur-xs rounded-full pointer-events-none -translate-y-[1px]"
            style={{ 
              left: `calc(${routeProgress}% - 30px)`, 
              display: routeProgress > 5 && routeProgress < 100 ? 'block' : 'none' 
            }}
          />
        </div>
      )}

      {/* ========================================================= */}
      {/* B. INITIAL SITE SPLASH PRELOADER                          */}
      {/* ========================================================= */}
      <div
        className={`fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-slate-950 transition-all duration-600 ease-in-out ${
          initialLoading 
            ? 'opacity-100 pointer-events-auto scale-100' 
            : 'opacity-0 pointer-events-none scale-105'
        }`}
      >
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm">
          
          {/* Logo with Animated Glowing Ring */}
          <div className="relative mb-6">
            {/* Spinning Gradient Ring */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-[2px] bg-gradient-to-tr from-[#00AED6] via-[#E6007A] to-[#F5A623] animate-spin shadow-lg shadow-pink-500/20" style={{ animationDuration: '3s' }}>
              <div className="w-full h-full bg-slate-950 rounded-2xl"></div>
            </div>

            {/* Centered Logo Image */}
            <div className="absolute inset-0 flex items-center justify-center p-3">
              <img 
                src={logo} 
                alt="DMDY Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain animate-in zoom-in-75 duration-500" 
              />
            </div>
          </div>

          {/* Agency Name */}
          <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
              DMDY
            </span>
            <span className="text-slate-300 font-semibold text-sm sm:text-base ml-2">
              Digi Me Digi You
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-slate-400 font-medium mb-6 tracking-wide">
            360° Digital Growth Partner
          </p>

          {/* Modern Slim Progress Bar */}
          <div className="w-48 sm:w-56 h-1.5 bg-slate-800 rounded-full overflow-hidden relative shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(230,0,122,0.8)]"
              style={{ width: `${initialProgress}%` }}
            />
          </div>

          {/* Mini pulse label */}
          <div className="flex items-center gap-2 mt-4 text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AED6] animate-ping"></span>
            <span>Loading Experience...</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default PageLoader;
