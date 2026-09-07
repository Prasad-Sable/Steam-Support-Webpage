import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function Refund() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      documentTitle="Stream Support | Refund & Cancellation Policy"
      badge="Payment Verification"
      lastUpdated="September 2026"
      intro="This Refund & Cancellation Policy governs all SuperDrop transactions made on Stream Support. Please review our guidelines regarding failed payments, duplicate charges, and refund eligibility."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-8">
        
        {/* Verification Highlight Banner */}
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm text-amber-200 space-y-2">
          <div className="font-semibold text-white text-base flex items-center gap-2">
            <span>💳</span> Payment Gateway Verification & Service Overview
          </div>
          <p className="text-white/80 leading-relaxed text-xs md:text-sm">
            Stream Support operating at <code className="bg-black/40 px-2 py-0.5 rounded text-amber-300">[WEBSITE URL]</code> facilitates voluntary digital financial support ("SuperDrops") for <code className="bg-black/40 px-2 py-0.5 rounded text-amber-300">[STREAMER NAME]</code>, operated by <code className="bg-black/40 px-2 py-0.5 rounded text-amber-300">[LEGAL/OWNER NAME]</code>. <strong>Stream Support does NOT sell physical products, merchandise, or deliver shipped e-commerce goods.</strong>
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">01.</span> Nature of SuperDrop Transactions
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            SuperDrops are voluntary digital monetary contributions initiated by viewers to financially support <code className="text-cyan-300">[STREAMER NAME]</code>'s content creation. Because SuperDrops are intangible digital gifts processed instantly during live broadcasts, completed transactions are generally non-cancellable and non-refundable once confirmed.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">02.</span> Successful Transactions
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            A SuperDrop is marked as "Successful" when payment confirmation is returned by our authorized payment processing gateway (such as <strong>PayU</strong>). Verified successful SuperDrops are immediately credited toward streamer support and may display on live broadcast overlays. Successful SuperDrops are non-refundable except under specific technical duplicate charge scenarios outlined below.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">03.</span> Failed & Pending Transactions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 space-y-2">
              <h3 className="font-semibold text-white text-base flex items-center gap-2">
                <span>❌</span> Failed Transactions
              </h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                If your bank account, card, or UPI wallet is debited but the transaction on Stream Support displays a status of "Failed", the funds were not received by Stream Support.
              </p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                In such cases, payment processors (e.g., PayU) and your issuing bank automatically trigger an auto-reversal back to your account within <strong>5 to 7 business days</strong>.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 space-y-2">
              <h3 className="font-semibold text-white text-base flex items-center gap-2">
                <span>⏳</span> Pending Transactions
              </h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                Pending transactions occur when payment verification is delayed by your bank or the UPI network.
              </p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                If the payment processor fails to confirm a pending transaction, the funds will be automatically released back to your original payment source by your bank.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">04.</span> Duplicate Charges & Technical Errors
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            In the event that a network failure or technical glitch results in multiple debits for a single intended SuperDrop, Stream Support will gladly issue a full refund for the duplicate transaction(s).
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            To report a duplicate payment, email <code className="text-cyan-300">[SUPPORT EMAIL]</code> with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/70 text-sm md:text-base pl-2">
            <li>The payment transaction ID(s) or reference numbers</li>
            <li>Date and time of the transactions</li>
            <li>Bank statement excerpt / screenshot showing the duplicate debits</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">05.</span> Accidental Payments & Unauthorized Activity
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            If a payment was initiated accidentally or without the authorization of the primary cardholder or account holder (e.g., unauthorized access by a minor), please contact us at <code className="text-cyan-300">[SUPPORT EMAIL]</code> immediately.
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Refund claims for accidental or unauthorized payments will be thoroughly verified against transaction logs, payment gateway timestamps, and user IP activity before resolution.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">06.</span> Refund Request Process & Gateway Delays
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            To submit an eligible refund request, please follow these steps:
          </p>
          
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-3 text-sm">
            <div className="font-semibold text-white">Email Requirements for Refund Requests:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/70 font-mono text-xs">
              <div>• Send email to: <span className="text-cyan-300">[SUPPORT EMAIL]</span></div>
              <div>• Subject: Refund Request - [Transaction ID]</div>
              <div>• Date & Time of Transaction</div>
              <div>• Payment Amount (e.g. ₹500)</div>
              <div>• Payment Method (UPI / Card / Net Banking)</div>
              <div>• Reason for Refund Request</div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-white text-base">Processing Timelines & Payment Method Return</h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              Once an eligible refund request is approved by Stream Support, the refund will be initiated through our payment gateway (e.g. <strong>PayU</strong>) directly back to your <strong>original payment method</strong> (e.g. original UPI ID, credit card, or bank account).
            </p>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              <strong>Processing Duration:</strong> While Stream Support initiates approved refunds within 48 to 72 business hours, the actual reflection of funds in your account depends on third-party payment gateway and banking institution processing speeds (typically taking <strong>5 to 10 business days</strong>). Stream Support does not provide guaranteed instant bank reflections due to external banking system operational factors.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400 font-mono text-base">07.</span> Contacting Support
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            For assistance with any transaction, pending payment, or refund query, please reach out to our dedicated support desk:
          </p>
          <div className="mt-2 inline-block rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-cyan-300 font-mono text-sm">
            📧 <span className="text-white font-sans">Support Email:</span> <span className="text-cyan-300">[SUPPORT EMAIL]</span>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
