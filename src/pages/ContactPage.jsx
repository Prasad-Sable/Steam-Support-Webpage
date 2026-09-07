import React, { useState } from 'react';
import LegalLayout from '../components/LegalLayout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Payment Support',
    txnId: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <LegalLayout
      title="Contact & Support"
      documentTitle="Stream Support | Contact Support"
      badge="Support Desk"
      lastUpdated="September 2026"
      intro="Need assistance with a SuperDrop, payment issue, or general platform query? The Stream Support team is here to assist supporters and viewers."
    >
      <div className="space-y-8">
        
        {/* Support Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Card 1: Payment Support */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3 hover:border-purple-500/30 transition">
            <div className="h-10 w-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 grid place-items-center text-xl text-purple-400">
              💳
            </div>
            <h3 className="text-lg font-bold text-white">Payment Support</h3>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
              Assistance with failed transactions, pending charges, payment gateway (PayU) redirections, or duplicate debits.
            </p>
          </div>

          {/* Card 2: Refund Queries */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3 hover:border-amber-500/30 transition">
            <div className="h-10 w-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 grid place-items-center text-xl text-amber-400">
              🔄
            </div>
            <h3 className="text-lg font-bold text-white">Refund Requests</h3>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
              Submitting or tracking refund claims for duplicate charges or unauthorized payments under our Refund Policy.
            </p>
          </div>

          {/* Card 3: Technical Help */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3 hover:border-cyan-500/30 transition">
            <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 grid place-items-center text-xl text-cyan-400">
              🛠️
            </div>
            <h3 className="text-lg font-bold text-white">Technical Support</h3>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
              Guidance for stream alert overlays, webpage load issues, or platform accessibility questions.
            </p>
          </div>
        </div>

        {/* Main Support Info & Form Box */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 grid lg:grid-cols-5 gap-8">
          
          {/* Left Column: Direct Info & Guidance */}
          <div className="lg:col-span-2 space-y-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Stream Support Desk</h2>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                Direct email support is available for all supporters of <code className="text-cyan-300">[STREAMER NAME]</code>.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-4 space-y-2">
              <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Direct Email Contact</div>
              <div className="font-mono text-cyan-300 font-semibold text-sm break-all">
                [SUPPORT EMAIL]
              </div>
            </div>

            <div className="space-y-3">
              <div className="font-semibold text-white text-sm">Guidelines for Faster Support Resolution:</div>
              <ul className="text-xs text-white/70 space-y-2 list-disc list-inside">
                <li>Include your Payment Transaction Reference ID.</li>
                <li>State the Date & Time of the SuperDrop attempt.</li>
                <li>Specify Payment Method used (UPI / Card / Net Banking via PayU).</li>
                <li>Describe the issue clearly (e.g., duplicate debit, failed alert).</li>
              </ul>
            </div>

            <div className="text-xs text-white/40 pt-2 border-t border-white/5 font-mono">
              Platform URL: <span className="text-white/70">[WEBSITE URL]</span><br />
              Operator: <span className="text-white/70">[LEGAL/OWNER NAME]</span>
            </div>
          </div>

          {/* Right Column: Interactive Support Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-white mb-2">Send Support Message</h2>
            <p className="text-white/70 text-sm mb-6">
              Fill out the details below to reach out directly to our support team.
            </p>

            {submitted ? (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6 text-center space-y-3">
                <div className="text-3xl">✅</div>
                <h3 className="text-xl font-bold text-white">Support Request Received</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out. Your request has been logged. Our support team will respond to <strong className="text-white">{formData.email || 'your email'}</strong> promptly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', category: 'Payment Support', txnId: '', message: '' }); }}
                  className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex"
                      className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-purple-500/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-purple-500/50 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">Support Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-purple-500/50 transition"
                    >
                      <option value="Payment Support" className="bg-[#070A12]">Payment & Transaction Support</option>
                      <option value="Refund Query" className="bg-[#070A12]">Refund Request / Inquiry</option>
                      <option value="Technical Help" className="bg-[#070A12]">Technical & Overlay Help</option>
                      <option value="General Inquiry" className="bg-[#070A12]">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">Transaction Ref ID (Optional)</label>
                    <input
                      type="text"
                      value={formData.txnId}
                      onChange={(e) => setFormData({ ...formData, txnId: e.target.value })}
                      placeholder="e.g. TXN123456789"
                      className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-purple-500/50 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5">Message / Issue Details</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your question or issue in detail..."
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-purple-500/50 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold text-sm transition shadow-lg shadow-purple-600/20"
                >
                  Submit Support Message
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </LegalLayout>
  );
}
