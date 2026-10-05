import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FileText, ArrowLeft, Mail, Sparkles } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions — DMDY';
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-12 sm:pb-20 bg-slate-50 min-h-screen font-sans">
      <SEO
        title="Terms of Service & Conditions — DMDY"
        description="Read DMDY's Terms of Service governing digital marketing services, payment terms, and intellectual property."
        url="https://dmdy.in/terms"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6 sm:mb-8 transition font-semibold text-xs sm:text-sm group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 shadow-sm border border-slate-200/80">
          
          {/* Header */}
          <div className="flex items-start gap-4 mb-8 pb-8 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00AED6] shrink-0 mt-1">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00AED6]/10 text-[#00AED6] border border-[#00AED6]/20 uppercase tracking-widest mb-3">
                <Sparkles className="w-3 h-3 text-[#00AED6]" /> Commercial Transparency & Governance
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Terms of Service
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
                Last Updated: September 2026 &bull; DMDY (Digi Me Digi You)
              </p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Welcome to <strong className="text-slate-900">DMDY (Digi Me Digi You)</strong>. By accessing our platform (<Link to="/" className="text-[#00AED6] font-semibold hover:underline">dmdy.in</Link>), retaining our strategic performance advisory, or executing commercial campaigns with our agency, you agree to comply with and be bound by the following Terms and Conditions.
            </p>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                1. Scope of Digital Services
              </h2>
              <p>
                DMDY delivers commercial digital growth solutions including Search Engine Optimization (SEO), Performance Marketing & Paid Acquisition (Google Ads, Meta Ads, LinkedIn Ads), Custom Web Application Development, Creative Funnel Production, and Conversion Rate Optimization (CRO). All bilateral engagements are formalized via custom Statements of Work (SOW) defining milestones, deliverables, and commercial terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                2. Ad Spend & Agency Retainers
              </h2>
              <p className="mb-3">
                Unless explicitly stipulated in a signed institutional addendum:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-600 font-normal">
                <li><strong className="text-slate-800">Agency Retainers:</strong> Remunerate strategic architecture, technical labor, multivariate testing, creative production, and analytics management.</li>
                <li><strong className="text-slate-800">Advertising Budgets:</strong> Are billed directly by advertising platforms (Google, Meta, LinkedIn) to the client's verified billing profiles. DMDY does not extend credit lines for client ad spend.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                3. Intellectual Property Rights & Asset Ownership
              </h2>
              <p>
                Upon settlement of all invoiced service fees, all custom creative deliverables, ad copy, customized landing pages, and proprietary client reporting become the exclusive property of the client. Pre-existing agency frameworks, proprietary algorithms, tracking libraries, and internal software retainers remain the intellectual property of DMDY.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                4. Client Access & Timely Approvals
              </h2>
              <p>
                Clients agree to grant necessary administrative and analytical access (Google Analytics 4, Search Console, Ad Accounts, CMS portals) and review campaign deliverables within reasonable timelines. DMDY bears no liability for delayed launch schedules caused by prolonged client approvals or credential locks.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                5. Performance Attribution & Market Disclaimer
              </h2>
              <p>
                While DMDY implements battle-tested, data-backed optimization protocols to maximize Return on Ad Spend (ROAS) and search authority, third-party algorithmic updates (e.g. Google core algorithmic volatility) and auction bid competition remain external market forces. Consequently, ethical industry standards preclude guaranteed absolute rank positions or speculative revenue projections.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted under statutory law, DMDY shall not be held liable for indirect, punitive, or consequential damages resulting from algorithmic policy shifts, third-party network outages, or unauthorized third-party access to client infrastructure.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                7. Cancellation & Contract Termination
              </h2>
              <p>
                Ongoing monthly retainers may be concluded by either contracting party upon providing a 30-day written notice, preserving complete handover of all creative assets, campaigns, and ad accounts.
              </p>
            </div>

            {/* Compliance Box */}
            <div className="mt-8 p-6 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200/90">
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00AED6]" /> Legal & Commercial Counsel
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-3 font-normal">
                For commercial agreements, legal notices, or terms clarification, contact our compliance counsel:
              </p>
              <a 
                href="mailto:legal@dmdy.in" 
                className="text-sm sm:text-base font-bold text-[#00AED6] hover:text-[#E6007A] transition-colors"
              >
                legal@dmdy.in &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
