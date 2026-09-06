import ParallaxSection from './ParallaxSection'

const timeline = [
  {
    name: 'Platform Launch',
    description: 'Released the initial beta with core overlay functionality and Twitch integration.',
    date: 'Dec 2025',
    dateTime: '2025-12',
  },
  {
    name: 'Multi-Platform Support',
    description: 'Added support for YouTube Live and Kick, allowing multi-stream alerts.',
    date: 'Feb 2026',
    dateTime: '2026-02',
  },
  {
    name: 'Mobile App',
    description: 'Launch of the iOS and Android companion app for on-the-go management.',
    date: 'Aug 2026',
    dateTime: '2026-08',
  },
  {
    name: 'AI Moderation',
    description: 'Implementing smart chat moderation powered by advanced LLMs.',
    date: 'Dec 2026',
    dateTime: '2026-12',
  },
]

export default function Roadmap() {
  return (
    <ParallaxSection id="roadmap" className="bg-[#0a0a0f] py-24 sm:py-32 border-t border-white/5 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Product Roadmap</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            We're just getting started. Here's what we've shipped and what's coming next.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time dateTime={item.dateTime} className="flex items-center text-sm font-semibold leading-6 text-indigo-400">
                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{item.name}</p>
              <p className="mt-1 text-base leading-7 text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}
