import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import ParallaxSection from './ParallaxSection'

const features = [
  {
    name: 'Real-time Alerts',
    description: 'Instant notification delivery for follows, subscriptions, and donations with sub-second latency.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure Payments',
    description: 'Bank-grade encryption for all transactions. We use industry-standard processors to ensure your safety.',
    icon: LockClosedIcon,
  },
  {
    name: 'Custom Overlays',
    description: 'Why use templates when you can build your own? Our drag-and-drop editor gives you full control.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Analytic Insights',
    description: 'Know your audience better. Track growth, revenue, and engagement metrics in one dashboard.',
    icon: ChartBarIcon,
  },
  {
    name: 'Creator Dashboard',
    description: 'Manage everything from one place. Streamlined interface for concentrating on what matters - streaming.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Low Fees',
    description: 'Keep more of what you earn. Our transparent pricing model ensures you get the maximum share.',
    icon: CurrencyDollarIcon,
  },
]

export default function Features() {
  return (
    <ParallaxSection id="features" className="bg-[#0a0a0f] py-24 sm:py-32 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tools built for modern creators
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We provide the infrastructure so you can focus on the content. Powerful, reliable, and easy to use.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </ParallaxSection>
  )
}
