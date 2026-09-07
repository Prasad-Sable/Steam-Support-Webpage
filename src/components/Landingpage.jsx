import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    title: "Creator-Friendly Fees",
    desc: "Minimal charges and smooth payouts for creators and communities.",
    icon: "💰",
  },
  {
    title: "UPI Support",
    desc: "Accept UPI, Cards, Net Banking, and Wallets for Indian audiences.",
    icon: "🇮🇳",
  },
  {
    title: "Real-time Alerts",
    desc: "Beautiful alerts for streaming tools like OBS and more.",
    icon: "⚡",
  },
  {
    title: "Analytics Dashboard",
    desc: "Track support, activity, and performance in real-time.",
    icon: "📊",
  },
  {
    title: "Secure Payments",
    desc: "Payments are encrypted and handled via trusted providers.",
    icon: "🔒",
  },
  {
    title: "Easy Integration",
    desc: "Quick setup. Works smoothly across streaming platforms.",
    icon: "🎨",
  },
];

const steps = [
  {
    title: "Create Your Page",
    desc: "Set up your public page and creator profile in minutes.",
    number: "01",
  },
  {
    title: "Connect Payments",
    desc: "Enable UPI & other payment methods safely and securely.",
    number: "02",
  },
  {
    title: "Customize Alerts",
    desc: "Choose styles, sounds, and overlay designs that match your stream.",
    number: "03",
  },
  {
    title: "Go Live & Grow",
    desc: "Start receiving support and show live alerts instantly on stream.",
    number: "04",
  },
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = "Stream Support | Empower Your Streaming Journey";
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#070A12] overflow-x-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-purple-600/40 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A12] via-[#070A12]/80 to-[#070A12]" />
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled ? "backdrop-blur-xl bg-white/5 border-b border-white/10" : ""
        }`}
      >
        <nav className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 grid place-items-center">
              <span className="text-lg">▦</span>
            </div>
            <span className="font-semibold tracking-wide">STREAM SUPPORT</span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-white/70">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition"
            >
              Contact
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center mx-auto max-w-6xl px-5"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80">
            <span className="text-sm">⚡</span>
            <span className="text-sm">Built for creators & streamers</span>
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
            Empower Your{" "}
            <span className="text-white/70">Streaming Journey</span>
          </h1>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Professional tools for content creators — live alerts, customizable
            overlays, and real-time tracking in one platform.
          </p>



          {/* Social Proof */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-white/60">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              ✅ Works with OBS
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              ✅ Fast Setup
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              ✅ Secure Payments
            </span>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-14 mx-auto max-w-6xl px-5">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Built to help creators grow faster
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              This platform helps creators engage their audience with live alerts,
              clean overlays, and simple creator tools. Everything is designed to
              be smooth, reliable, and easy to integrate into your stream.
            </p>
            <p className="mt-3 text-white/70 leading-relaxed">
              Whether you're just starting or scaling up, you can set up in
              minutes and stay focused on content.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6">
              <p className="text-white/60 text-sm">Live Preview</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                  ⚡ <span className="text-white/80">New Support Received</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                  💬 <span className="text-white/80">New Message Alert</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                  🎉 <span className="text-white/80">Milestone Celebration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 mx-auto max-w-6xl px-5">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-bold"
        >
          Everything You Need to Grow
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition relative overflow-hidden"
            >
              {/* glow */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100" />

              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-bold">How It Works</h2>
          <p className="text-white/70 max-w-xl">
            A simple 4-step setup designed to get you live quickly — without
            complicated integrations.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-white/40 font-mono">{s.number}</span>
                <span className="text-white/60 text-sm">Step</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 mx-auto max-w-6xl px-5">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Need help or want early access?
              </h2>
              <p className="mt-2 text-white/70">
                Send a message and we’ll get back to you.
              </p>
            </div>
            <a
              href="mailto:support@example.com"
              className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition w-fit"
            >
              Email Support
            </a>
          </div>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input
              className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
              placeholder="Your name"
            />
            <input
              className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
              placeholder="Your email"
            />
            <textarea
              className="md:col-span-2 rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30 min-h-[120px]"
              placeholder="Your message"
            />
            <button
              type="button"
              className="md:col-span-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-semibold text-white">STREAM SUPPORT</div>
            <p className="text-white/60 text-sm mt-2">
              Tools & services for creators. Built for speed and simplicity.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <Link to="/terms" className="hover:text-white transition hover:underline">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition hover:underline">
              Privacy Policy
            </Link>
            <Link to="/refund" className="hover:text-white transition hover:underline">
              Refund & Cancellation
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition hover:underline">
              Disclaimer
            </Link>
            <Link to="/contact" className="hover:text-white transition hover:underline">
              Contact / Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
