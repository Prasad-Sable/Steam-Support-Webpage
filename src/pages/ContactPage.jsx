import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function ContactPage() {
  return (
    <LegalLayout
      title="Contact Us"
      documentTitle="Stream Support | Contact Us"
      badge="Customer Support"
      lastUpdated="7 September 2026"
      intro="Have questions about a SuperDrop transaction, payment status, or platform support? Get in touch with our team via email."
    >
      <div className="space-y-8">
        
        {/* Support Categories */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Category 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
            <div className="h-10 w-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 grid place-items-center text-xl text-purple-400">
              💳
            </div>
            <h3 className="text-lg font-bold text-white">Payment Support</h3>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
              Assistance with payment processing, pending transactions, or payment gateway redirections.
            </p>
            <div className="text-xs font-mono text-cyan-300 pt-2">
              Email: <span className="text-white">[SUPPORT EMAIL]</span>
            </div>
          </div>

          {/* Category 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
            <div className="h-10 w-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 grid place-items-center text-xl text-amber-400">
              🔄
            </div>
            <h3 className="text-lg font-bold text-white">Refund Requests</h3>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
              Inquiries regarding duplicate transactions or unauthorized debits under our Refund Policy.
            </p>
            <div className="text-xs font-mono text-cyan-300 pt-2">
              Email: <span className="text-white">[SUPPORT EMAIL]</span>
            </div>
          </div>

          {/* Category 3 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
            <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 grid place-items-center text-xl text-cyan-400">
              🛠️
            </div>
            <h3 className="text-lg font-bold text-white">Technical Support</h3>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
              Guidance for webpage navigation, platform accessibility, or technical software queries.
            </p>
            <div className="text-xs font-mono text-cyan-300 pt-2">
              Email: <span className="text-white">[SUPPORT EMAIL]</span>
            </div>
          </div>
        </div>

        {/* Main Official Contact Information Box */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 space-y-6">
          <h2 className="text-2xl font-bold text-white">Official Support Information</h2>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
            For all support inquiries, please send an email directly to our support desk. Be sure to include relevant transaction reference numbers and payment details for faster assistance.
          </p>

          <div className="grid md:grid-cols-3 gap-4 font-mono text-xs md:text-sm">
            <div className="rounded-2xl bg-black/40 border border-white/10 p-4 space-y-1">
              <div className="text-white/50 text-xs uppercase font-sans">Business / Legal Name</div>
              <div className="text-cyan-300 font-semibold break-all">[LEGAL/OWNER NAME]</div>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-4 space-y-1">
              <div className="text-white/50 text-xs uppercase font-sans">Website URL</div>
              <div className="text-cyan-300 font-semibold break-all">[WEBSITE URL]</div>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-4 space-y-1">
              <div className="text-white/50 text-xs uppercase font-sans">Support Email</div>
              <div className="text-cyan-300 font-semibold break-all">[SUPPORT EMAIL]</div>
            </div>
          </div>

          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-5 text-xs md:text-sm text-rose-200 space-y-2">
            <div className="font-semibold text-white flex items-center gap-2">
              <span>⚠️</span> Security Precaution Notice
            </div>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed">
              When contacting support, please do <strong>NOT</strong> share sensitive payment authentication credentials, including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80 text-xs md:text-sm pl-2">
              <li>Full credit or debit card numbers</li>
              <li>Card CVV / CVC numbers</li>
              <li>UPI PINs</li>
              <li>Banking passwords or OTPs</li>
            </ul>
          </div>
        </div>

      </div>
    </LegalLayout>
  );
}
