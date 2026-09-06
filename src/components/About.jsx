import ParallaxSection from './ParallaxSection'

export default function About() {
  return (
    <ParallaxSection id="about" className="bg-[#0a0a0f] px-6 py-24 sm:py-32 lg:px-0 border-t border-white/5 min-h-screen flex items-center">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-400">Our Mission</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better way to monetize</h1>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                StreamSupport was built with a single goal: to help creators earn detailed, reliable income without the technical headaches.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
           {/* Abstract Code Representation */}
          <div className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] p-6 font-mono text-sm leading-6 text-gray-300 overflow-hidden">
               <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="space-y-2">
                  <div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-blue-400 mr-2">Creator</span> <span className="mr-2">=</span> <span className="text-yellow-300">{"{"}</span></div>
                  <div className="pl-4"><span className="text-red-400 mr-1">platform:</span> <span className="text-green-400">'All-in-One'</span>,</div>
                  <div className="pl-4"><span className="text-red-400 mr-1">focus:</span> <span className="text-green-400">'Community'</span>,</div>
                  <div className="pl-4"><span className="text-red-400 mr-1">uptime:</span> <span className="text-blue-400">99.99</span>,</div>
                  <div className="pl-4"><span className="text-red-400 mr-1">fees:</span> <span className="text-blue-400">0.0</span>,</div>
                  <div className="pl-4"><span className="text-red-400 mr-1">growth:</span> <span className="text-purple-400">async</span> () <span className="text-purple-400">=&gt;</span> <span className="text-yellow-300">{"{"}</span></div>
                  <div className="pl-8"><span className="text-purple-400">await</span> <span className="text-blue-400">StreamSupport</span>.<span className="text-yellow-200">boost</span>();</div>
                  <div className="pl-4"><span className="text-yellow-300">{"}"}</span></div>
                  <div><span className="text-yellow-300">{"}"}</span></div>
               </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
              <p>
                We know that setting up complex OBS overlays and managing payment gateways can be a nightmare. We simplify the entire stack so you can just hit "Start Streaming".
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-400">
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-indigo-400 font-bold">✓</span>
                  <span><strong className="font-semibold text-white">No Bloatware.</strong> We don't install heavy agents on your PC. Everything runs in the cloud.</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-indigo-400 font-bold">✓</span>
                  <span><strong className="font-semibold text-white">Instant Payouts.</strong> Don't wait 30 days for your money. We process payments daily.</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-indigo-400 font-bold">✓</span>
                  <span><strong className="font-semibold text-white">Community First.</strong> We listen to our users and ship features they actually ask for.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
