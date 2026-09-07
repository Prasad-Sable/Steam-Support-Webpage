import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LegalLayout({ title, documentTitle, badge, lastUpdated, intro, children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (documentTitle) {
      document.title = documentTitle;
    }
  }, [documentTitle]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#070A12] overflow-x-hidden flex flex-col selection:bg-purple-500/30 selection:text-white">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A12] via-[#070A12]/90 to-[#070A12]" />
      </div>

      {/* Header / Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl bg-[#070A12]/80 border-b border-white/10 shadow-lg shadow-black/50' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 p-[1px] transition-transform group-hover:scale-105">
              <div className="h-full w-full rounded-[11px] bg-[#070A12] grid place-items-center">
                <span className="text-lg text-cyan-400 font-bold">▦</span>
              </div>
            </div>
            <span className="font-bold tracking-wider text-lg bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              STREAM SUPPORT
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/90 text-sm font-medium transition duration-200"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 mx-auto max-w-4xl w-full px-5 pt-32 pb-20">
        {/* Page Header */}
        <div className="mb-10 text-center md:text-left">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>⚖️</span>
              <span>{badge}</span>
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-white/95 to-white/70 bg-clip-text text-transparent">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed max-w-3xl">
              {intro}
            </p>
          )}
          {lastUpdated && (
            <div className="mt-4 text-xs font-mono text-white/40 flex items-center gap-2 justify-center md:justify-start">
              <span>📅</span>
              <span>Effective Date: {lastUpdated}</span>
            </div>
          )}
        </div>

        {/* Content Children */}
        <div className="space-y-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 mt-auto">
        <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-purple-600/30 border border-purple-500/40 grid place-items-center">
                <span className="text-xs text-cyan-400 font-bold">▦</span>
              </div>
              <span className="font-semibold text-white tracking-wide">STREAM SUPPORT</span>
            </div>
            <p className="text-white/60 text-sm mt-2 max-w-md">
              Digital platform for voluntary monetary support for participating content creators and streamers.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            <Link to="/terms" className="hover:text-white transition hover:underline">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition hover:underline">
              Privacy Policy
            </Link>
            <Link to="/refund" className="hover:text-white transition hover:underline">
              Refund & Cancellation
            </Link>
            <Link to="/shipping" className="hover:text-white transition hover:underline">
              Shipping Policy
            </Link>
            <Link to="/pricing" className="hover:text-white transition hover:underline">
              Pricing & SuperDrops
            </Link>
            <Link to="/contact" className="hover:text-white transition hover:underline">
              Contact Us
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition hover:underline">
              Disclaimer
            </Link>
          </div>
        </div>
        <div className="border-t border-white/5 py-4 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Stream Support. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
