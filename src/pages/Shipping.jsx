import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Shipping() {
  return (
    <LegalLayout
      title="Shipping Policy"
      documentTitle="Stream Support | Shipping Policy"
      badge="Digital Service"
      lastUpdated="7 September 2026"
      intro="This Shipping Policy provides information regarding product fulfillment and digital service delivery on Stream Support."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-8">
        
        {/* Banner */}
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5 text-sm text-blue-200 space-y-2">
          <div className="font-semibold text-white text-base flex items-center gap-2">
            <span>📦</span> Digital Platform Notice
          </div>
          <p className="text-white/80 leading-relaxed text-xs md:text-sm">
            Stream Support is a digital platform facilitating voluntary monetary support ("SuperDrops") for participating content creators and streamers. <strong>Stream Support does not sell or ship physical goods.</strong>
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">01.</span> Digital Delivery Only
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Stream Support is exclusively a digital software and web platform. SuperDrops are voluntary digital monetary support transactions completed online.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li><strong>No Physical Products:</strong> No physical products, merchandise, or tangible goods are sold, fulfilled, or delivered through the platform.</li>
            <li><strong>No Shipping Fees:</strong> No physical shipping, handling, freight, or delivery fees apply to SuperDrop transactions.</li>
            <li><strong>No Tracking Information:</strong> Because physical shipments do not exist, courier tracking numbers, shipping labels, or dispatch details are not applicable.</li>
            <li><strong>No Delivery Timelines:</strong> Physical shipping timelines do not apply.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">02.</span> Digital Confirmation
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Once a SuperDrop is successfully confirmed by the relevant payment provider, the transaction may be reflected digitally on the Platform.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-base">03.</span> Contact Information
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            If you have questions regarding digital platform delivery, please reach out to us:
          </p>
          <div className="mt-2 space-y-1 text-sm font-mono text-white/80">
            <div>Support Email: <span className="text-cyan-300">[SUPPORT EMAIL]</span></div>
            <div>Website: <span className="text-cyan-300">[WEBSITE URL]</span></div>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
