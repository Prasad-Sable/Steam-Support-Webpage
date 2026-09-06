import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-14 min-h-screen flex flex-col justify-center">
      {/* Background Effects */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              New features released. <a href="#roadmap" className="font-semibold text-indigo-400"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Empower Your Streaming Journey
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Professional tools for content creators. Live alerts, customizable overlays, and real-time analytics — all in one powerful platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#features" className="text-sm font-semibold leading-6 text-white hover:text-indigo-300 transition-colors">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
        {/* Mock Dashboard UI */}
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="rounded-md bg-slate-900 shadow-2xl ring-1 ring-white/10 overflow-hidden relative aspect-[16/9]">
                {/* Dashboard Header */}
                <div className="h-12 border-b border-white/10 bg-slate-800/50 flex items-center px-4 gap-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="h-6 w-64 bg-slate-700/50 rounded-md"></div>
                </div>
                {/* Dashboard Content */}
                <div className="p-6 grid grid-cols-12 gap-6 h-full">
                    {/* Sidebar */}
                    <div className="col-span-2 hidden md:block space-y-4">
                         <div className="h-8 w-full bg-indigo-500/20 rounded-md"></div>
                         <div className="h-4 w-3/4 bg-slate-700/50 rounded-md"></div>
                         <div className="h-4 w-5/6 bg-slate-700/50 rounded-md"></div>
                         <div className="h-4 w-4/5 bg-slate-700/50 rounded-md"></div>
                    </div>
                    {/* Main Area */}
                    <div className="col-span-12 md:col-span-10 grid grid-cols-3 gap-6">
                        {/* Stats Cards */}
                        <div className="col-span-3 grid grid-cols-3 gap-6">
                            <div className="h-32 rounded-xl bg-slate-800/50 border border-white/5 p-4">
                                <div className="h-8 w-8 rounded-lg bg-blue-500/20 mb-4"></div>
                                <div className="h-6 w-16 bg-slate-700/50 rounded-md mb-2"></div>
                                <div className="h-4 w-24 bg-slate-700/30 rounded-md"></div>
                            </div>
                            <div className="h-32 rounded-xl bg-slate-800/50 border border-white/5 p-4">
                                <div className="h-8 w-8 rounded-lg bg-green-500/20 mb-4"></div>
                                <div className="h-6 w-16 bg-slate-700/50 rounded-md mb-2"></div>
                                <div className="h-4 w-24 bg-slate-700/30 rounded-md"></div>
                            </div>
                            <div className="h-32 rounded-xl bg-slate-800/50 border border-white/5 p-4 hidden sm:block">
                                <div className="h-8 w-8 rounded-lg bg-purple-500/20 mb-4"></div>
                                <div className="h-6 w-16 bg-slate-700/50 rounded-md mb-2"></div>
                                <div className="h-4 w-24 bg-slate-700/30 rounded-md"></div>
                            </div>
                        </div>
                        {/* Chart Area */}
                        <div className="col-span-3 h-64 rounded-xl bg-slate-800/50 border border-white/5 p-6 relative overflow-hidden">
                             <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
                             <div className="h-full flex items-end justify-between gap-2 px-4 pb-4">
                                 {[40, 60, 45, 70, 50, 80, 65, 90, 75, 55, 60, 70, 50, 80].map((h, i) => (
                                     <div key={i} className="w-full bg-indigo-500/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Bottom Blur */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
