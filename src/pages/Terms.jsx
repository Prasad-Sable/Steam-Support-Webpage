import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      documentTitle="Stream Support | Terms & Conditions"
      badge="Legal Agreement"
      lastUpdated="7 September 2026"
      intro="Please read these Terms & Conditions carefully before using Stream Support or initiating a SuperDrop. By accessing the platform, you agree to be bound by these terms."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-8">
        
        {/* Scope Banner */}
        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-4 text-xs md:text-sm text-purple-200 flex items-start gap-3">
          <span className="text-lg">ℹ️</span>
          <div>
            <strong className="font-semibold text-white">Platform Scope & Identification:</strong> Stream Support operates at <code className="bg-black/40 px-2 py-0.5 rounded text-purple-300">[WEBSITE URL]</code> and is operated by <code className="bg-black/40 px-2 py-0.5 rounded text-purple-300">[LEGAL/OWNER NAME]</code>.
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">01.</span> Acceptance of Terms
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            By accessing or using <code className="text-cyan-300">[WEBSITE URL]</code> ("Stream Support"), initiating a SuperDrop, or interacting with any service offered on this website, you confirm that you have read, understood, and agreed to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, you must not access or use Stream Support.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">02.</span> About Stream Support
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support is a digital platform that enables viewers, supporters, fans, and other users to voluntarily provide monetary support to participating content creators and streamers.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li><strong>Digital Platform:</strong> Stream Support provides software tools and web infrastructure to facilitate digital support interactions.</li>
            <li><strong>No Physical Products:</strong> Stream Support does not sell, deliver, ship, or fulfill physical merchandise, tangible goods, or e-commerce products through the platform.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">03.</span> Nature of SuperDrops
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            A "SuperDrop" is a voluntary monetary support transaction completed through Stream Support to express appreciation for participating content creators and streamers.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li><strong>Voluntary Support:</strong> SuperDrops are strictly voluntary monetary support transactions.</li>
            <li><strong>Not Investments or Returns:</strong> SuperDrops are not investments, loans, equity purchases, or guaranteed financial returns. Initiating a SuperDrop does not grant any commercial equity, profit-sharing, or ownership stake.</li>
            <li><strong>Not Tax-Deductible:</strong> SuperDrops are not tax-deductible donations or charitable contributions. Stream Support and <code className="text-cyan-300">[LEGAL/OWNER NAME]</code> are not charities, non-profit organizations, or tax-exempt trusts.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">04.</span> Payment Processing & Credentials
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            All SuperDrop transactions are processed through authorized third-party payment providers such as <strong>Razorpay</strong> and authorized banking partners.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li><strong>No Credential Storage:</strong> Stream Support does not intentionally collect or store complete card numbers, CVV, UPI PINs, banking passwords, or similar sensitive payment authentication credentials. All sensitive payment details are handled directly by the payment provider.</li>
            <li><strong>Explicit Payment Confirmation:</strong> A SuperDrop is considered complete only after explicit status confirmation is received from the third-party payment provider. Completing a checkout flow or payment page redirect does not automatically mean payment is successfully confirmed.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">05.</span> Supporter Information & Message Rules
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            When completing a SuperDrop, users may provide a supporter display name, choose an anonymous option, select a support amount, and attach an optional message.
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Supporter messages must not contain:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/70 text-sm md:text-base pl-2">
            <li>Hate speech, harassment, threats, discrimination, or explicit content.</li>
            <li>Unlawful material, malicious links, phishing schemes, or spam.</li>
            <li>Unauthorized private personal data of third parties.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">06.</span> Prohibited Activities
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Users are strictly prohibited from engaging in:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/70 text-sm md:text-base pl-2">
            <li>Fraudulent transactions, unauthorized account usage, or stolen payment methods.</li>
            <li>Impersonation of any individual, business, or entity.</li>
            <li>Money laundering, illegal financial schemes, or unauthorized commercial activities.</li>
            <li>Attempting to bypass security controls, reverse-engineer, or disrupt platform infrastructure.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">07.</span> Refunds & Cancellations
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            All refund queries, failed transaction reversals, and cancellation rules are governed exclusively by our <a href="/refund" className="text-cyan-400 underline hover:text-cyan-300">Refund & Cancellation Policy</a>.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">08.</span> Third-Party Services & Availability Disclaimer
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support relies on third-party service providers for payment processing (e.g. Razorpay), cloud hosting, and data transmission. We do not guarantee uninterrupted, fault-free, or continuous platform availability. Third-party outages or network delays do not invalidate verified transactions.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">09.</span> Intellectual Property & Content Responsibility
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            All platform branding, software code, design elements, and logos are the property of <code className="text-cyan-300">[LEGAL/OWNER NAME]</code>. Users retain responsibility for any text content or messages they submit.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">10.</span> Limitation of Liability
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            To the maximum extent permitted by applicable law, Stream Support and <code className="text-cyan-300">[LEGAL/OWNER NAME]</code> shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from the use of or inability to use the platform.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">11.</span> Governing Law
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.
          </p>
        </section>

        {/* Section 12 */}
        <section className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">12.</span> Contact Information
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            For questions regarding these Terms & Conditions, please contact us:
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
