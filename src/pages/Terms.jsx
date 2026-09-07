import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      documentTitle="Stream Support | Terms & Conditions"
      badge="Legal Agreement"
      lastUpdated="September 2026"
      intro="Please read these Terms & Conditions carefully before using Stream Support or sending a SuperDrop. By accessing the platform, you agree to be bound by these terms."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-8">
        
        {/* Placeholder Alert Banner */}
        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-4 text-xs md:text-sm text-purple-200 flex items-start gap-3">
          <span className="text-lg">ℹ️</span>
          <div>
            <strong className="font-semibold text-white">Platform Scope & Notice:</strong> Stream Support operates at <code className="bg-black/40 px-2 py-0.5 rounded text-purple-300">[WEBSITE URL]</code> exclusively for financial support to <code className="bg-black/40 px-2 py-0.5 rounded text-purple-300">[STREAMER NAME]</code>, managed by <code className="bg-black/40 px-2 py-0.5 rounded text-purple-300">[LEGAL/OWNER NAME]</code>.
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">01.</span> Acceptance of Terms
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            By accessing or using <code className="text-cyan-300">[WEBSITE URL]</code> ("Stream Support"), sending a SuperDrop, or interacting with any part of this website, you confirm that you have read, understood, and agreed to these Terms & Conditions ("Terms"). If you do not agree to these Terms, you must not use or initiate transactions on this website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">02.</span> Platform Overview & Service Nature
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support is a dedicated single-streamer support platform designed to enable viewers and audience members to send voluntary monetary support ("SuperDrops") to <code className="text-cyan-300">[STREAMER NAME]</code> during live streams or offline.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li><strong>No Account Creation Required:</strong> Viewers are not required to register or create a user account to send a SuperDrop.</li>
            <li><strong>No Physical Products:</strong> Stream Support does not sell, ship, fulfill, or deliver any physical merchandise, e-commerce goods, or tangible items.</li>
            <li><strong>Voluntary Contributions:</strong> SuperDrops are strictly voluntary financial gifts/support provided by viewers to appreciate the content of <code className="text-cyan-300">[STREAMER NAME]</code>.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">03.</span> SuperDrops & Financial Contributions
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            When you send a SuperDrop, you acknowledge and agree that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li>SuperDrops are made out of personal goodwill to support live content creation.</li>
            <li>SuperDrops do <strong>NOT</strong> constitute charitable donations or non-profit contributions. Stream Support and <code className="text-cyan-300">[LEGAL/OWNER NAME]</code> are not registered charities, non-profit entities, or tax-exempt organizations. SuperDrops are not tax-deductible.</li>
            <li>Making a SuperDrop does not entitle you to equity, platform ownership, commercial rights, or influence over channel management or stream content.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">04.</span> Payment Processing & Gateways
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            All SuperDrop transactions are processed securely through licensed third-party payment gateways, including <strong>PayU</strong> and other authorized payment partners.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li>Supported payment channels may include UPI, Debit/Credit Cards, Net Banking, and digital wallets.</li>
            <li>A SuperDrop transaction is considered successful <strong>only after explicit payment status confirmation</strong> is received from the processing payment gateway.</li>
            <li>You warrant that you are the authorized holder of the payment account or card used to complete a SuperDrop.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">05.</span> User Conduct & Message Moderation
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Users may attach a short custom display name and message with their SuperDrop. You agree that messages submitted with a SuperDrop will not contain:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li>Hate speech, racism, harassment, threats, or explicit adult content.</li>
            <li>Promotional spam, unauthorized links, malware, or phishing schemes.</li>
            <li>Private personal information of third parties without consent.</li>
          </ul>
          <p className="text-white/70 leading-relaxed text-sm md:text-base mt-2">
            Stream Support reserves the right to censor, mute, or remove any message from live broadcast overlays that violates community standards without issuing a refund.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">06.</span> Refund & Cancellation Policy
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Because SuperDrops are voluntary digital contributions, completed payments are generally final. Detailed policies regarding failed transactions, pending payments, duplicate debits, and refund evaluation procedures are governed by our official <a href="/refund" className="text-cyan-400 underline hover:text-cyan-300">Refund & Cancellation Policy</a>.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">07.</span> Third-Party Services & Platform Availability
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support operates in conjunction with third-party web hosting, streaming software (e.g. OBS), and payment providers (e.g. PayU). We do not guarantee uninterrupted platform uptime, error-free operations, or instant alert delivery on live stream overlays. Technical downtime or stream latency does not invalidate a verified SuperDrop.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">08.</span> Limitation of Liability
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            To the maximum extent permitted by applicable law, Stream Support, <code className="text-cyan-300">[LEGAL/OWNER NAME]</code>, and <code className="text-cyan-300">[STREAMER NAME]</code> shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of this website, failed transactions, network delays, or third-party service outages.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">09.</span> Changes to Terms
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            We reserve the right to update these Terms at any time. Any changes will be posted on this page with an updated revision date. Continued use of <code className="text-cyan-300">[WEBSITE URL]</code> following posted updates constitutes your acceptance of the revised Terms.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">10.</span> Contact & Inquiries
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            For questions or legal inquiries regarding these Terms & Conditions, please contact our support team at:
          </p>
          <div className="mt-2 inline-block rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-cyan-300 font-mono text-sm">
            📧 <span className="text-white font-sans">Support Email:</span> <span className="text-cyan-300">[SUPPORT EMAIL]</span>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
