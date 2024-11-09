import React from 'react'
import Typography from '@/components/ui/typography'

interface FeatureProps {
  icon: React.ReactNode
  headline: string
  description: string
}

export default function Feature({ icon, headline, description }: FeatureProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900/50 border border-zinc-800">
        {icon}
      </div>
      <Typography variant="h3" className="mt-6 text-zinc-50">
        {headline}
      </Typography>
      <Typography variant="p" className="mt-2 text-zinc-400">
        {description}
      </Typography>
    </div>
  )
}
