import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Disclaimer() {
  return (
    <LegalLayout
      title="Disclaimer"
      documentTitle="Stream Support | Disclaimer"
      badge="Important Notice"
      lastUpdated="7 September 2026"
      intro="Please read this Disclaimer carefully before using Stream Support or completing a SuperDrop transaction."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-8">
        
        {/* Banner */}
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5 text-sm text-cyan-200 space-y-2">
          <div className="font-semibold text-white text-base flex items-center gap-2">
            <span>📢</span> Platform Notice & Scope
          </div>
          <p className="text-white/80 leading-relaxed text-xs md:text-sm">
            Stream Support at <code className="bg-black/40 px-2 py-0.5 rounded text-cyan-300">[WEBSITE URL]</code> is a digital platform operated by <code className="bg-black/40 px-2 py-0.5 rounded text-cyan-300">[LEGAL/OWNER NAME]</code> to facilitate voluntary monetary support for participating content creators and streamers.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">01.</span> Voluntary Support & Non-Tax-Deductible Nature
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            SuperDrops are voluntary monetary support transactions initiated by users to express appreciation for participating content creators and streamers.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li><strong>Not Investments or Loans:</strong> SuperDrops are not investments, loans, equity purchases, or guaranteed financial returns.</li>
            <li><strong>Not Charitable Contributions:</strong> Unless expressly stated otherwise, SuperDrops are not charitable contributions or non-profit donations, and must not be represented as tax-deductible gifts.</li>
            <li><strong>No Physical Goods:</strong> No physical products or merchandise are delivered in exchange for SuperDrops.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">02.</span> Payment Gateways & Credential Protection
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Transactions are processed through authorized third-party payment providers (such as <strong>Razorpay</strong>). Stream Support does not intentionally store complete card numbers, CVV, UPI PINs, or banking passwords.
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support is not responsible for errors, bank authorization declines, or delays occurring within third-party payment gateway or banking network infrastructure.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">03.</span> Availability & Technical Disclaimer
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Platform, payment processing, or alert notification availability is provided on an "AS IS" and "AS AVAILABLE" basis without uptime guarantees.
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Third-party outages, banking system issues, payment-network disruptions, internet failures, and technical problems may occasionally affect transactions or notifications.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">04.</span> User-Submitted Content & Moderation
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            User-submitted messages attached to SuperDrops are the sole responsibility of the submitting user. Stream Support reserves the right to moderate or restrict content that violates platform Terms or applicable law.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">05.</span> No Professional Advice
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Content and information displayed on Stream Support do not constitute financial, legal, tax, investment, or professional advice.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">06.</span> Contact Information
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            If you have questions regarding this Disclaimer, please contact us:
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
