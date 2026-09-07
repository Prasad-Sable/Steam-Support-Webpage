import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      documentTitle="Stream Support | Privacy Policy"
      badge="Data Protection"
      lastUpdated="September 2026"
      intro="Stream Support respects your privacy. This policy outlines how information is collected, used, and protected when you visit or make a payment on our platform."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-8">
        
        {/* Placeholder Alert Banner */}
        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-4 text-xs md:text-sm text-purple-200 flex items-start gap-3">
          <span className="text-lg">🔒</span>
          <div>
            <strong className="font-semibold text-white">Privacy Commitment:</strong> This policy applies to supporters using <code className="bg-black/40 px-2 py-0.5 rounded text-purple-300">[WEBSITE URL]</code> to send SuperDrops to <code className="bg-black/40 px-2 py-0.5 rounded text-purple-300">[STREAMER NAME]</code>, operated by <code className="bg-black/40 px-2 py-0.5 rounded text-purple-300">[LEGAL/OWNER NAME]</code>.
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">01.</span> Information We Collect
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support minimizes data collection to only what is necessary to process transactions, display stream alerts, and ensure platform security:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li><strong>Voluntary Supporter Information:</strong> When making a SuperDrop, you may optionally provide a supporter display name or alias and an accompanying message. You may also choose to send SuperDrops completely anonymously.</li>
            <li><strong>Transaction Metadata:</strong> When a payment is initiated, our payment provider shares basic confirmation data with us, including transaction reference ID, date, time, contribution amount, and transaction status (Success/Pending/Failed).</li>
            <li><strong>Technical Data:</strong> We may collect standard web server diagnostic log data, including IP address, browser type, operating system, and timestamp for network security and anti-fraud monitoring.</li>
          </ul>
        </section>

        {/* Important Financial Credentials Notice */}
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5 text-sm text-cyan-200 space-y-2">
          <div className="font-semibold text-white text-base flex items-center gap-2">
            <span>🛡️</span> Sensitive Financial Credentials Are Never Stored
          </div>
          <p className="text-white/80 leading-relaxed text-xs md:text-sm">
            Stream Support does <strong>NOT</strong> store or have access to your credit card numbers, debit card details, CVVs, banking passwords, or UPI PINs. All payment credential verification and processing are handled directly by PCI-DSS compliant payment gateways (such as <strong>PayU</strong>).
          </p>
        </div>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">02.</span> How Information is Used
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            The information collected is used solely for legitimate operational purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li>To verify and confirm SuperDrop transactions.</li>
            <li>To render optional supporter display names and messages on live broadcast overlays.</li>
            <li>To assist you with payment-related inquiries, duplicate charges, or refund requests.</li>
            <li>To prevent fraudulent payments, abuse, or security breaches on the platform.</li>
            <li>To satisfy basic accounting, tax, and legal requirements.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">03.</span> Sharing Information with Third Parties
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            We do not sell, rent, or trade personal data to third parties. We share data only in the following necessary contexts:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li><strong>Third-Party Payment Processors:</strong> Necessary payment parameters are transmitted securely to authorized payment partners (such as <strong>PayU</strong>) to execute transactions.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law, subpoena, court order, or regulatory authority to prevent unlawful activity or protect legal rights.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">04.</span> Data Security & Storage
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            We employ modern encryption protocols (HTTPS/TLS) and secure infrastructure to protect data in transit and at rest. Access to transaction metadata is restricted exclusively to authorized personnel responsible for platform support.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">05.</span> Data Retention
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Transaction records and associated metadata are retained for as long as necessary to satisfy accounting obligations, fulfill customer support inquiries, or defend against legal claims.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">06.</span> Cookies & Local Storage
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support uses minimal essential technical cookies and browser local storage strictly required for website navigation, user session state, and security defense. We do not use third-party cross-site advertising cookies.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">07.</span> User Rights & Privacy Contact
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            If you have questions, concerns, or requests regarding your data privacy, please contact us at:
          </p>
          <div className="mt-2 inline-block rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-cyan-300 font-mono text-sm">
            📧 <span className="text-white font-sans">Support Email:</span> <span className="text-cyan-300">[SUPPORT EMAIL]</span>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
