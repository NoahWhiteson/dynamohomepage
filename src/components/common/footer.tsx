'use client'
import Typography from '@/components/ui/typography'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12">
        <nav className="flex justify-center space-x-12" aria-label="Footer">
          <Link href="/privacy-policy">
            <Typography variant="minor" className="hover:text-zinc-300">
              Privacy Policy
            </Typography>
          </Link>
          <Link href="/terms-of-service">
            <Typography variant="minor" className="hover:text-zinc-300">
              Terms of Service
            </Typography>
          </Link>
        </nav>
        <Typography variant="minor" className="mt-8 text-center">
          &copy; {new Date().getFullYear()} Dynamo. All rights reserved.
        </Typography>
      </div>
    </footer>
  )
}
