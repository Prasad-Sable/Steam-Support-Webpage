import ParallaxSection from './ParallaxSection'

const steps = [
  { id: '01', name: 'Connect Account', desc: 'Link your streaming platform (Twitch, YouTube, Kick) in one click.' },
  { id: '02', name: 'Configure Setup', desc: 'Customize your alerts and overlays to match your brand identity.' },
  { id: '03', name: 'Share Link', desc: 'Post your unique support link to your socials and channel description.' },
  { id: '04', name: 'Go Live', desc: 'Start streaming and watch the support roll in real-time.' },
]

export default function HowItWorks() {  
  return (
    <ParallaxSection id="how-it-works" className="bg-[#0a0a0f] py-24 sm:py-32 border-t border-white/5 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Get Started Fast</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Up and running in minutes
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-full bg-slate-900 ring-1 ring-white/10 rounded-lg p-6">
                <span className="text-4xl font-bold text-indigo-500/20 absolute right-4 top-4">{step.id}</span>
                <h3 className="text-lg font-semibold text-white mb-2 pt-2">{step.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}
