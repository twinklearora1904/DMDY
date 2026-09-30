import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Search, Target, Code2, Share2, ArrowRight, Sparkles, PenTool, Palette } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import logo from '../assets/logo.png';

const servicesList = [
  {
    name: 'Search Engine Optimization (SEO)',
    desc: 'Technical audits, keyword authority & organic revenue scale',
    path: '/services/seo',
    icon: Search,
    color: '#00AED6'
  },
  {
    name: 'Website Design & Development',
    desc: 'High-speed, conversion-engineered modern web platforms',
    path: '/services/web-development',
    icon: Code2,
    color: '#F5A623'
  },
  {
    name: 'Social Media Marketing',
    desc: 'Brand storytelling, influencer outreach & viral growth',
    path: '/services/social-media',
    icon: Share2,
    color: '#E6007A'
  },
  {
    name: 'Google Ads & PPC Management',
    desc: 'High-intent search, Performance Max & maximum ROAS',
    path: '/services/google-ads',
    icon: Target,
    color: '#00AED6'
  },
  {
    name: 'Paid Marketing (360° Paid Media)',
    desc: 'Google, Meta, Email & YouTube multi-channel advertising',
    path: '/services/paid-marketing',
    icon: Target,
    color: '#00AED6'
  },
  {
    name: 'Content Creation & Marketing',
    desc: 'SEO blogs, storytelling, video scripts & high-converting copy',
    path: '/services/content-marketing',
    icon: PenTool,
    color: '#E6007A'
  },
  {
    name: 'Graphic Designing & Video Editing',
    desc: 'Brand visuals, Reels, YouTube edits & 360° motion graphics',
    path: '/services/graphic-designing-video-editing',
    icon: Palette,
    color: '#F5A623'
  }
];

const Navbar = () => {
  const { openModal } = useContactModal();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset mobile menu and dropdowns on route or hash change
  const [prevKey, setPrevKey] = useState(location.pathname + location.hash);
  if (prevKey !== location.pathname + location.hash) {
    setPrevKey(location.pathname + location.hash);
    setIsOpen(false);
    setServicesDropdown(false);
    setMobileServicesOpen(false);
  }

  // Scroll to anchor or top on route/hash change
  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 150);
  };

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' : 'bg-white/80 backdrop-blur-md border-b border-slate-100/80 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="DMDY Logo" className="h-9 w-auto transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Links (Centered) */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">

            <Link
              to="/"
              className={`text-[14.5px] px-3.5 py-1.5 rounded-lg transition-all font-medium ${location.pathname === '/'
                ? 'text-brandSecondary font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
            >
              Home
            </Link>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center">
                <Link
                  to="/services"
                  className={`text-[14.5px] pl-3.5 pr-1.5 py-1.5 rounded-l-lg transition-all font-medium inline-flex items-center gap-1 ${isServicesActive
                    ? 'text-brandSecondary font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  aria-label="Toggle Services menu"
                  className={`py-1.5 pr-2 pl-0.5 rounded-r-lg transition-all ${isServicesActive
                    ? 'text-brandSecondary'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-brandSecondary' : ''}`} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                      Capabilities
                    </span>
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdown(false)}
                      className="text-xs font-bold text-[#00AED6] hover:text-[#E6007A] transition-colors"
                    >
                      All Services &rarr;
                    </Link>
                  </div>

                  <div className="space-y-1">
                    {servicesList.map((service) => {
                      const Icon = service.icon;
                      const isCurrent = location.pathname === service.path;
                      return (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setServicesDropdown(false)}
                          className={`flex items-start gap-3.5 p-3 rounded-2xl transition-all group ${isCurrent ? 'bg-slate-50 border border-slate-200/80' : 'hover:bg-slate-50'
                            }`}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                            style={{ backgroundColor: `${service.color}15`, color: service.color }}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-slate-900 group-hover:text-brandPrimary transition-colors flex items-center justify-between">
                              <span>{service.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400" />
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-normal">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-[14.5px] px-3.5 py-1.5 rounded-lg transition-all font-medium ${location.pathname === '/about'
                ? 'text-brandSecondary font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
            >
              About
            </Link>

            <Link
              to="/industries"
              className={`text-[14.5px] px-3.5 py-1.5 rounded-lg transition-all font-medium ${location.pathname === '/industries'
                ? 'text-brandSecondary font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
            >
              Industries
            </Link>

            <Link
              to="/pricing"
              className={`text-[14.5px] px-3.5 py-1.5 rounded-lg transition-all font-medium ${location.pathname === '/pricing'
                ? 'text-brandSecondary font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
            >
              Pricing
            </Link>

            <Link
              to="/blog"
              className={`text-[14.5px] px-3.5 py-1.5 rounded-lg transition-all font-medium ${location.pathname === '/blog'
                ? 'text-brandSecondary font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`text-[14.5px] px-3.5 py-1.5 rounded-lg transition-all font-medium ${location.pathname === '/contact'
                ? 'text-brandSecondary font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
            >
              Contact Us
            </Link>

          </div>

          {/* Desktop CTAs (Right) */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              type="button"
              onClick={() => openModal()}
              className="btn-primary-sm"
            >
              Get Free Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-4 flex flex-col space-y-1 border border-slate-200/80 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            <Link
              to="/"
              className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${location.pathname === '/'
                ? 'bg-pink-50 text-brandSecondary font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
                }`}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <div className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50">
                <Link to="/services" className={isServicesActive ? 'text-brandSecondary font-semibold' : ''}>
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1 rounded-md text-slate-500 hover:bg-slate-200"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-brandSecondary' : ''}`} />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100">
                  {servicesList.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-brandSecondary hover:bg-white font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-xs font-bold text-[#00AED6] hover:underline"
                  >
                    View All Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${location.pathname === '/about'
                ? 'bg-pink-50 text-brandSecondary font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
                }`}
            >
              About
            </Link>

            <Link
              to="/industries"
              className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${location.pathname === '/industries'
                ? 'bg-pink-50 text-brandSecondary font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
                }`}
            >
              Industries
            </Link>

            <Link
              to="/pricing"
              className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${location.pathname === '/pricing'
                ? 'bg-pink-50 text-brandSecondary font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
                }`}
            >
              Pricing
            </Link>

            <Link
              to="/blog"
              className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${location.pathname === '/blog'
                ? 'bg-pink-50 text-brandSecondary font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
                }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${location.pathname === '/contact'
                ? 'bg-pink-50 text-brandSecondary font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
                }`}
            >
              Contact Us
            </Link>

            <div className="pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  openModal();
                }}
                className="w-full btn-primary"
              >
                Get Free Audit
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
