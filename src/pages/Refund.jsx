import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Refund() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      documentTitle="Stream Support | Refund & Cancellation Policy"
      badge="Payment Verification"
      lastUpdated="7 September 2026"
      intro="This Refund & Cancellation Policy outlines guidelines regarding failed transactions, pending payments, duplicate charges, and refund evaluation for SuperDrops on Stream Support."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-8">
        
        {/* Banner */}
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm text-amber-200 space-y-2">
          <div className="font-semibold text-white text-base flex items-center gap-2">
            <span>💳</span> Service Nature & Transaction Overview
          </div>
          <p className="text-white/80 leading-relaxed text-xs md:text-sm">
            Stream Support operating at <code className="bg-black/40 px-2 py-0.5 rounded text-amber-300">[WEBSITE URL]</code> is a digital platform that enables voluntary monetary support ("SuperDrops") for participating content creators and streamers, operated by <code className="bg-black/40 px-2 py-0.5 rounded text-amber-300">[LEGAL/OWNER NAME]</code>. <strong>Stream Support does not sell or ship physical products.</strong>
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">01.</span> Voluntary Support & Non-Refundability
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            SuperDrops are voluntary monetary support transactions provided by users to support participating content creators and streamers. They are digital monetary contributions and not purchases of physical goods or e-commerce products.
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Generally, completed and confirmed SuperDrops are non-cancellable and non-refundable once successfully processed by the third-party payment provider.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">02.</span> Failed & Pending Transactions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 space-y-2">
              <h3 className="font-semibold text-white text-base flex items-center gap-2">
                <span>❌</span> Failed Transactions
              </h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                If funds are debited from your bank account or card but the transaction shows as failed on Stream Support, the payment was not received by us.
              </p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                In such cases, payment processors (e.g. Razorpay) and your bank will automatically process an auto-reversal back to your account.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 space-y-2">
              <h3 className="font-semibold text-white text-base flex items-center gap-2">
                <span>⏳</span> Pending Transactions
              </h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                Pending transactions occur when payment verification is delayed by the payment network or bank.
              </p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                If a pending payment fails to confirm, funds are automatically released back to your payment source by your issuing bank.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">03.</span> Duplicate & Unauthorized Transactions
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            In rare cases where a technical glitch causes duplicate debits for a single intended SuperDrop, or if an unauthorized payment occurs, users may request a refund evaluation.
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            All refund requests undergo technical verification against transaction logs and payment provider confirmation records.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">04.</span> Eligible Refund Requests & Process
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            To submit an eligible refund inquiry, email support at <code className="text-cyan-300">[SUPPORT EMAIL]</code> with:
          </p>
          
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-2 text-xs md:text-sm font-mono text-white/70">
            <div>• Transaction / Order Reference ID</div>
            <div>• Date and Time of transaction</div>
            <div>• Transaction Amount</div>
            <div>• Payment Method used (UPI, Card, Net Banking)</div>
            <div>• Clear description of the duplicate or unauthorized debit</div>
          </div>

          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs md:text-sm text-rose-200">
            <strong>Important Security Warning:</strong> Do <strong>NOT</strong> include full credit/debit card numbers, CVV, UPI PINs, or banking passwords in your support email. Stream Support will never ask for payment authentication credentials.
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">05.</span> Refund Method & Reversal Timing
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Approved refunds are normally initiated through the payment provider used for the original transaction and return to the original payment method.
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            <strong>Reversal Timing Notice:</strong> Refund or reversal processing timing depends on the payment method, bank, payment network, and third-party payment provider processing cycles.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">06.</span> Contact Support
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            For questions regarding refunds or payment status, reach out to:
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
