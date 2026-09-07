import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Pricing() {
  return (
    <LegalLayout
      title="Pricing & SuperDrops"
      documentTitle="Stream Support | Pricing & SuperDrops"
      badge="Transaction Information"
      lastUpdated="7 September 2026"
      intro="This page provides information on how support amounts are selected, displayed, and processed for SuperDrops on Stream Support."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-8">
        
        {/* Banner */}
        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-5 text-sm text-purple-200 space-y-2">
          <div className="font-semibold text-white text-base flex items-center gap-2">
            <span>⚡</span> Voluntary Support Platform
          </div>
          <p className="text-white/80 leading-relaxed text-xs md:text-sm">
            Stream Support enables supporters and fans to voluntarily support participating content creators and streamers through digital monetary contributions called SuperDrops.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">01.</span> Support Amount Selection
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Users may select from preset voluntary support amounts displayed on the platform or enter a custom monetary support amount where custom inputs are supported.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li><strong>Clear Display:</strong> The selected support amount is clearly displayed on the checkout screen prior to payment confirmation.</li>
            <li><strong>Applicable Taxes & Charges:</strong> Any applicable payment gateway processing charges, taxes, or statutory amounts (where applicable) are displayed prior to transaction completion.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">02.</span> Service Nature & Payment Processing
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            SuperDrops represent voluntary digital support transactions. They do <strong>not</strong> represent purchases of physical goods, commercial items, or e-commerce products.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70 text-sm md:text-base pl-2">
            <li><strong>Payment Gateways:</strong> Payment processing is handled by third-party payment providers such as <strong>Razorpay</strong>.</li>
            <li><strong>Confirmation Requirement:</strong> Final payment confirmation is subject to successful verification and status confirmation by the payment provider.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">03.</span> Refunds & Policies
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Completed SuperDrops are generally final and non-refundable. All refund queries, duplicate debits, and failed payment reversals are governed by our <a href="/refund" className="text-cyan-400 underline hover:text-cyan-300">Refund & Cancellation Policy</a>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-mono text-base">04.</span> Support Contact
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            For questions regarding support transaction amounts or checkout details, please contact:
          </p>
          <div className="mt-2 space-y-1 text-sm font-mono text-white/80">
            <div>Support Email: <span className="text-cyan-300">[SUPPORT EMAIL]</span></div>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
