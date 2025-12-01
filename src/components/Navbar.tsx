"use client"

import Link from 'next/link'
import {Button} from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white tracking-tighter">
            Prime Prompt
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/pricing">
              <Button variant="ghost" className="text-zinc-400 hover:text-white">
                Pricing
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="text-zinc-400 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-white text-black hover:bg-zinc-200">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
