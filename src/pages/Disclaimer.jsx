import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Disclaimer() {
  return (
    <LegalLayout
      title="Disclaimer"
      documentTitle="Stream Support | Disclaimer"
      badge="Important Notice"
      lastUpdated="September 2026"
      intro="Please read this Disclaimer carefully before using Stream Support or sending a SuperDrop. It outlines the nature of financial contributions, payment processing, and platform limitations."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-8">
        
        {/* Banner */}
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5 text-sm text-cyan-200 space-y-2">
          <div className="font-semibold text-white text-base flex items-center gap-2">
            <span>📢</span> Platform Notice & Scope
          </div>
          <p className="text-white/80 leading-relaxed text-xs md:text-sm">
            Stream Support at <code className="bg-black/40 px-2 py-0.5 rounded text-cyan-300">[WEBSITE URL]</code> is a single-streamer support platform operated by <code className="bg-black/40 px-2 py-0.5 rounded text-cyan-300">[LEGAL/OWNER NAME]</code> for voluntary audience support to <code className="bg-black/40 px-2 py-0.5 rounded text-cyan-300">[STREAMER NAME]</code>.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">01.</span> Voluntary Financial Support (Not a Charity)
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support provides tools for viewers to send voluntary financial support ("SuperDrops") to <code className="text-cyan-300">[STREAMER NAME]</code>.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li>Stream Support, <code className="text-cyan-300">[LEGAL/OWNER NAME]</code>, and <code className="text-cyan-300">[STREAMER NAME]</code> are <strong>NOT</strong> registered charities, public trusts, or non-profit organizations unless explicitly stated under applicable laws.</li>
            <li>SuperDrops are personal voluntary monetary contributions and must <strong>NOT</strong> be represented as charitable donations or tax-deductible gifts.</li>
            <li>No physical items, merchandise, services, commercial equity, or contractual rights are sold or shipped in exchange for SuperDrops.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">02.</span> Third-Party Payment Gateway Disclaimer
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Financial transactions on <code className="text-cyan-300">[WEBSITE URL]</code> are processed by authorized third-party payment gateways (such as <strong>PayU</strong>). Stream Support does not store sensitive card data, CVVs, or UPI PINs.
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support is not liable for errors, unauthorized charge declines, banking network failures, or processing delays occurring within third-party payment gateway or banking infrastructure.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">03.</span> Service Availability & Technical Limitations
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support services, website pages, and streaming overlay alert integrations are provided on an "AS IS" and "AS AVAILABLE" basis.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li>We do not warrant or guarantee 100% uninterrupted website uptime, instant payment notification rendering, or zero latency on live broadcast overlays.</li>
            <li>Temporary server maintenance, internet disruptions, software updates, or broadcast delays do not invalidate completed SuperDrop transactions.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">04.</span> User-Submitted Content & Messages
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Supporters are solely responsible for the text messages, aliases, or display names submitted alongside SuperDrops. Stream Support does not endorse, verify, or assume responsibility for user-submitted comments or opinions expressed through live stream alerts.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">05.</span> Contact Information
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            If you have questions regarding this Disclaimer or platform operational policies, please reach out to us:
          </p>
          <div className="mt-2 inline-block rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-cyan-300 font-mono text-sm">
            📧 <span className="text-white font-sans">Support Email:</span> <span className="text-cyan-300">[SUPPORT EMAIL]</span>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
