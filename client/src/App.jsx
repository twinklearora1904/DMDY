import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContactModalProvider } from './context/ContactModalContext'
import ContactModal from './components/ContactModal'
import PageLoader from './components/PageLoader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import SeoService from './pages/services/SeoService'
import SocialMediaService from './pages/services/SocialMediaService'
import GoogleAdsService from './pages/services/GoogleAdsService'
import WebDevelopmentService from './pages/services/WebDevelopmentService'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import PricingPage from './pages/PricingPage'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Admin from './pages/Admin'
import Login from './pages/Login'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ContactModalProvider>
      <Router>
        <PageLoader />
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
          <Navbar />
          <ContactModal />
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/seo" element={<SeoService />} />
            <Route path="/services/web-development" element={<WebDevelopmentService />} />
            <Route path="/services/website-design-development" element={<WebDevelopmentService />} />
            <Route path="/services/social-media" element={<SocialMediaService />} />
            <Route path="/services/google-ads" element={<GoogleAdsService />} />
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
        </main>
        <Footer />
      </div>
    </Router>
  </ContactModalProvider>
  )
}

export default App
