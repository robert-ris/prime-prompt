"use client"

import {Check} from "lucide-react";
import Link from 'next/link';

export function Pricing() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-5xl mx-auto">
      {/* Free Plan */}
      <div className="flex-1 w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
        <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
        <p className="text-zinc-400 mb-6">Perfect for getting started</p>
        <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-3 text-zinc-300">
            <Check className="w-5 h-5 text-green-500" /> 3 Prompts per day
          </li>
          <li className="flex items-center gap-3 text-zinc-300">
            <Check className="w-5 h-5 text-green-500" /> Last 10 prompts history
          </li>
          <li className="flex items-center gap-3 text-zinc-300">
            <Check className="w-5 h-5 text-green-500" /> All platforms
          </li>
        </ul>
        <Link href="/signup">
          <button className="w-full py-3 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors">
            Get Started
          </button>
        </Link>
      </div>

      {/* Pro Plan */}
      <div className="flex-1 w-full bg-zinc-900 border border-blue-900/30 rounded-2xl p-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
        <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
        <p className="text-blue-200/70 mb-6">For power users</p>
        <div className="text-4xl font-bold text-white mb-6">$9<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-3 text-white">
            <Check className="w-5 h-5 text-blue-400" /> Unlimited Prompts
          </li>
          <li className="flex items-center gap-3 text-white">
            <Check className="w-5 h-5 text-blue-400" /> Unlimited history
          </li>
          <li className="flex items-center gap-3 text-white">
            <Check className="w-5 h-5 text-blue-400" /> Unlimited templates
          </li>
          <li className="flex items-center gap-3 text-white">
            <Check className="w-5 h-5 text-blue-400" /> Priority support
          </li>
        </ul>
        <Link href="/pricing">
          <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
            Upgrade to Pro
          </button>
        </Link>
      </div>
    </div>
  );
}
