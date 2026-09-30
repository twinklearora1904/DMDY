import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ContactModalProvider } from './context/ContactModalContext'
import ContactModal from './components/ContactModal'
import PageLoader from './components/PageLoader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy loaded page components for optimal performance and chunk splitting
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const SeoService = lazy(() => import('./pages/services/SeoService'))
const SocialMediaService = lazy(() => import('./pages/services/SocialMediaService'))
const GoogleAdsService = lazy(() => import('./pages/services/GoogleAdsService'))
const PaidMarketingService = lazy(() => import('./pages/services/PaidMarketingService'))
const WebDevelopmentService = lazy(() => import('./pages/services/WebDevelopmentService'))
const ContentMarketingService = lazy(() => import('./pages/services/ContentMarketingService'))
const GraphicDesignVideoService = lazy(() => import('./pages/services/GraphicDesignVideoService'))
const About = lazy(() => import('./pages/About'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const Contact = lazy(() => import('./pages/Contact'))
const ThankYou = lazy(() => import('./pages/ThankYou'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Admin = lazy(() => import('./pages/Admin'))
const Login = lazy(() => import('./pages/Login'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <ContactModalProvider>
      <Router>
        <PageLoader />
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
          <Navbar />
          <ContactModal />
          <main className="flex-grow">
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex flex-col items-center justify-center py-16">
                  <div className="w-9 h-9 border-3 border-slate-200 border-t-[#00AED6] rounded-full animate-spin"></div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/seo" element={<SeoService />} />
                <Route path="/services/web-development" element={<WebDevelopmentService />} />
                <Route path="/services/website-design-development" element={<WebDevelopmentService />} />
                <Route path="/services/social-media" element={<SocialMediaService />} />
                <Route path="/services/google-ads" element={<GoogleAdsService />} />
                <Route path="/services/paid-marketing" element={<PaidMarketingService />} />
                <Route path="/services/paid-media" element={<PaidMarketingService />} />
                <Route path="/services/content-marketing" element={<ContentMarketingService />} />
                <Route path="/services/content-creation-marketing" element={<ContentMarketingService />} />
                <Route path="/services/graphic-designing-video-editing" element={<GraphicDesignVideoService />} />
                <Route path="/services/graphic-design-video-editing" element={<GraphicDesignVideoService />} />
                <Route path="/services/graphic-design" element={<GraphicDesignVideoService />} />
                <Route path="/services/video-editing" element={<GraphicDesignVideoService />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/login" element={<Login />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  </ContactModalProvider>
  )
}

export default App
