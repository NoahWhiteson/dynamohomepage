import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { Code2, Database, Lock, Palette, Zap, Globe, Check } from 'lucide-react'
import Link from 'next/link'
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <div className="bg-gradient-to-r from-blue-500/10 via-blue-500/20 to-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-4">
          <Typography variant="p" className="text-blue-400">
            🎉 Dynamo has Officially Launched! Join our Discord <span className="font-bold">discord.gg/Eq4gmDm9p8</span>
          </Typography>
        </div>
        <Typography className="max-w-2xl bg-gradient-to-b from-gray-500 to-white text-transparent bg-clip-text" variant="h1">
          Build Better Roblox Games with Dynamo
        </Typography>
        <Typography className="max-w-2xl" variant="h4">
          Professional Lua modules and systems to accelerate your Roblox development
        </Typography>

        {/* Features Section with BentoGrid */}
        <div className="flex flex-col gap-12 items-center mt-24">
          <Typography className="max-w-2xl" variant="h1">
            Features that matter
          </Typography>
          <BentoGrid className="max-w-4xl mx-auto">
            <BentoGridItem
              title="Clean Code Architecture"
              description="Built with modern Lua practices and design patterns for maintainable, scalable games"
              icon={<Code2 className="h-6 w-6" />}
            />
            <BentoGridItem
              title="DataStore Ready"
              description="Robust data persistence systems with automatic backup and cache management"
              icon={<Database className="h-6 w-6" />}
            />
            <BentoGridItem
              title="Anti-Exploit"
              description="Secure networking and anti-exploit measures to protect your game"
              icon={<Lock className="h-6 w-6" />}
            />
            <BentoGridItem
              title="UI Systems"
              description="Beautiful, responsive UI components with smooth animations and effects"
              icon={<Palette className="h-6 w-6" />}
            />
            <BentoGridItem
              title="Networking"
              description="Optimized RemoteEvent systems with automatic request handling and rate limiting"
              icon={<Globe className="h-6 w-6" />}
            />
            <BentoGridItem
              title="Performance"
              description="Optimized for large games with efficient memory usage and frame time"
              icon={<Zap className="h-6 w-6" />}
            />
          </BentoGrid>
        </div>

        {/* Pricing section */}
        <div className="flex flex-col gap-12 items-center mt-24">
          <Typography className="max-w-2xl" variant="h1">
            Simple, transparent pricing
          </Typography>
          <Typography className="max-w-2xl text-zinc-600 dark:text-zinc-400">
            Choose the plan that&apos;s right for you
          </Typography>
          
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="flex flex-col p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Community</h3>
                <p className="text-zinc-600 dark:text-zinc-400">For hobby developers</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-zinc-600 dark:text-zinc-400">/forever</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Basic UI Components</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Simple DataStore System</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Community Support</span>
                </li>
              </ul>
              <Link href="https://discord.gg/Eq4gmDm9p8" className="mt-auto">
                <Button variant="outline" className="w-full">Join Discord</Button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col p-6 bg-zinc-900 dark:bg-zinc-800 rounded-xl border border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 rounded-full text-sm text-white">
                Popular
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Pro</h3>
                <p className="text-zinc-400">For serious developers</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-zinc-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Everything in Community</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Advanced UI Framework</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Anti-Exploit System</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Priority Support</span>
                </li>
              </ul>
              <Link href="https://discord.gg/Eq4gmDm9p8" className="mt-auto">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Get Pro</Button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <p className="text-zinc-600 dark:text-zinc-400">For game studios</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">Contact Sales</span>
                <span className="text-zinc-600 dark:text-zinc-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Custom Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">1-on-1 Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Source Code Access</span>
                </li>
              </ul>
              <Link href="https://discord.gg/Eq4gmDm9p8" className="mt-auto">
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
