import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      documentTitle="Stream Support | Privacy Policy"
      badge="Data Protection"
      lastUpdated="7 September 2026"
      intro="Stream Support respects your privacy. This policy outlines how information is collected, used, and protected when you visit or interact with our platform."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-8">
        
        {/* Scope Banner */}
        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-4 text-xs md:text-sm text-purple-200 flex items-start gap-3">
          <span className="text-lg">🔒</span>
          <div>
            <strong className="font-semibold text-white">Privacy Commitment:</strong> This policy applies to users accessing <code className="bg-black/40 px-2 py-0.5 rounded text-purple-300">[WEBSITE URL]</code>, operated by <code className="bg-black/40 px-2 py-0.5 rounded text-purple-300">[LEGAL/OWNER NAME]</code>.
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">01.</span> Information We Collect
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support collects information necessary to provide services, process support transactions, and ensure platform security:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-white/70 text-sm md:text-base pl-2">
            <li><strong>Supporter Information:</strong> Name or display name, email address (when provided), supporter messages, and anonymous display preferences.</li>
            <li><strong>Transaction Metadata:</strong> Transaction ID, payment/order reference numbers, contribution amount, currency, payment status, payment method category, and transaction timestamps.</li>
            <li><strong>Technical & Diagnostics Data:</strong> IP address, browser type, operating system, device information, and technical/security access logs.</li>
            <li><strong>Support Communications:</strong> Information and correspondence submitted when reaching out to customer support.</li>
          </ul>
        </section>

        {/* Payment Credentials Notice */}
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5 text-sm text-cyan-200 space-y-2">
          <div className="font-semibold text-white text-base flex items-center gap-2">
            <span>🛡️</span> Payment Credential Safety
          </div>
          <p className="text-white/80 leading-relaxed text-xs md:text-sm">
            Stream Support does <strong>NOT</strong> intentionally collect or store complete card numbers, CVV, UPI PINs, banking passwords, or similar payment authentication credentials. All payment authentication credentials are processed securely by relevant third-party payment providers (such as <strong>Razorpay</strong>).
          </p>
        </div>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">02.</span> Purposes of Data Processing
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            We process collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-white/70 text-sm md:text-base pl-2">
            <li>Payment processing, verification, and transaction status confirmation.</li>
            <li>Displaying supporter display names and optional messages where applicable.</li>
            <li>Dashboard functionality and maintaining historical transaction records.</li>
            <li>Responding to customer support inquiries and managing refund-related requests.</li>
            <li>Preventing fraud, abuse, unauthorized access, and security incidents.</li>
            <li>Improving platform performance, reliability, and functionality.</li>
            <li>Maintaining accounting records and fulfilling legal or regulatory compliance requirements.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">03.</span> Sharing with Third-Party Service Providers
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            We share information with trusted third-party providers solely as necessary to operate the platform:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-white/70 text-sm md:text-base pl-2">
            <li><strong>Payment Processors:</strong> Third-party payment gateways (such as Razorpay) to process payments.</li>
            <li><strong>Infrastructure & Hosting:</strong> Secure cloud web hosting and infrastructure partners.</li>
            <li><strong>Security & Communication:</strong> Technical diagnostic tools and email communication providers.</li>
            <li><strong>Legal & Professional Advisors:</strong> Legal counselors or auditors when required, or as mandated by legally required disclosures.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">04.</span> Data Security
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            We use reasonable technical and organizational measures appropriate to the nature of the information we process to protect against unauthorized access, loss, or alteration.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">05.</span> Data Retention & Anonymous Display
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Transaction metadata is retained for as long as necessary for business accounting, support tracking, and legal compliance. Users selecting anonymous options will have their display names withheld from public view.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">06.</span> Cookies & Technical Storage
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support uses essential technical cookies and browser local storage strictly required for website navigation, user session integrity, and security defense.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">07.</span> Children's Privacy
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support is not directed to minors under the age of 18 without parental or legal guardian consent. We do not knowingly collect personal data from minors.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">08.</span> Policy Updates & Privacy Contact
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            We may update this Privacy Policy periodically. For privacy-related questions or data requests, please contact us:
          </p>
          <div className="mt-2 space-y-1 text-sm font-mono text-white/80">
            <div>Support Email: <span className="text-cyan-300">[SUPPORT EMAIL]</span></div>
            <div>Website: <span className="text-cyan-300">[WEBSITE URL]</span></div>
            <div>Legal / Business Name: <span className="text-cyan-300">[LEGAL/OWNER NAME]</span></div>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
