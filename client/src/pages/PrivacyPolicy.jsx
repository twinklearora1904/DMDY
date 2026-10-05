import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ShieldCheck, ArrowLeft, Mail, Sparkles } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — DMDY';
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-12 sm:pb-20 bg-slate-50 min-h-screen font-sans">
      <SEO
        title="Privacy Policy — DMDY"
        description="Read DMDY's privacy policy to understand how we collect, store, and protect your information with enterprise transparency."
        url="https://dmdy.in/privacy-policy"
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
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00AED6]/10 text-[#00AED6] border border-[#00AED6]/20 uppercase tracking-widest mb-3">
                <Sparkles className="w-3 h-3 text-[#00AED6]" /> Governance & Transparency
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
                Last Updated: September 2026 &bull; DMDY (Digi Me Digi You)
              </p>
            </div>
          </div>

          {/* Policy Content */}
          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              At <strong className="text-slate-900">DMDY (Digi Me Digi You)</strong>, accessible from <Link to="/" className="text-[#00AED6] font-semibold hover:underline">dmdy.in</Link>, your personal and enterprise data privacy is a foundational operating standard. This Privacy Policy details the categories of information gathered, processed, and secured when you engage with our agency consultancy, strategy forms, and digital platforms.
            </p>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                When you visit our website, schedule a performance marketing audit, or contract our services, we may collect the following data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-600 font-normal">
                <li><strong className="text-slate-800">Contact Information:</strong> Full name, verified corporate email address, and direct phone number.</li>
                <li><strong className="text-slate-800">Business Information:</strong> Company name, verified domain URL, industry niche, monthly marketing budget, and growth KPIs.</li>
                <li><strong className="text-slate-800">Technical & Analytical Data:</strong> Anonymized IP addresses, browser specifications, device identifiers, and on-site behavioral metrics collected via privacy-first telemetry.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                2. How We Deploy Your Information
              </h2>
              <p className="mb-3">
                The gathered intelligence is utilized strictly to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-600 font-normal">
                <li>Engineer forensic growth roadmaps, SEO audit deliverables, and paid advertising projections.</li>
                <li>Facilitate direct executive communications regarding strategy sessions and contract milestones.</li>
                <li>Safeguard digital infrastructure against fraudulent activity, brute force attacks, and automated spam.</li>
                <li>Deliver authoritative market playbooks and research teardowns (with 1-click opt-out mechanisms).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                3. Non-Disclosure & Third-Party Protections
              </h2>
              <p>
                <strong className="text-slate-900">We do not sell, rent, monetize, or trade your personal or business data under any circumstances.</strong> Information is routed exclusively through enterprise-tier cloud infrastructure providers (e.g., encrypted hosting, encrypted database clusters, secure transmission APIs) solely to execute contractual obligations under strict non-disclosure terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                4. Cookies and Analytical Tracking
              </h2>
              <p>
                DMDY deploys standard cookies to optimize loading speed, preserve session state, and evaluate channel effectiveness. You can modify your browser preferences to disable non-essential cookies at any time without impacting core site accessibility.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                5. Data Retention & Cryptographic Security
              </h2>
              <p>
                All transmitted information is guarded by TLS 1.3 / SSL encryption in transit and AES-256 encryption at rest. Inactive client inquiries and lead submissions are systematically purged according to statutory data retention protocols.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 pt-6 border-t border-slate-100 tracking-tight mb-3">
                6. Your Statutory Rights
              </h2>
              <p>
                You retain statutory rights to request comprehensive access to, corrections of, or irrevocable deletion of your stored records. Formal requests can be initiated directly with our data compliance officer.
              </p>
            </div>

            {/* Compliance Box */}
            <div className="mt-8 p-6 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200/90">
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00AED6]" /> Privacy & Compliance Officer
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-3 font-normal">
                For legal inquiries, data deletion requests, or compliance documentation, contact our regulatory team:
              </p>
              <a 
                href="mailto:privacy@dmdy.in" 
                className="text-sm sm:text-base font-bold text-[#00AED6] hover:text-[#E6007A] transition-colors"
              >
                privacy@dmdy.in &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
