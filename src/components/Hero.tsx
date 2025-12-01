"use client";

import {motion} from "framer-motion";
import Link from 'next/link';
import {Button} from "@/components/ui/button";

const TRUSTED_BY = [
  "Acme Corp",
  "Global Tech",
  "Nebula AI",
  "Quantum Soft",
  "Hyperion",
];

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-[#121212]">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-[#121212] to-[#121212]" />
        {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video> */}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1
          className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6"
          initial={{opacity: 0, y: 30, scale: 0.95}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 1, ease: "easeOut"}}
        >
          Generate Perfect <br />
          <span className="text-zinc-500">AI Prompts.</span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-zinc-400 max-w-3xl mb-10 leading-relaxed"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.3}}
        >
          Unlock the full potential of LLMs with prompts engineered for precision, creativity, and impact.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.5}}
        >
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-gradient-orange text-black hover:opacity-90 text-xl px-10 py-8 rounded-full font-medium transition-all hover:scale-105"
            >
              Generate Now
            </Button>
          </Link>
          <Link href="/login">
            <Button
              size="lg"
              variant="outline"
              className="glass text-white hover:bg-white/10 text-xl px-10 py-8 rounded-full border-white/10 transition-all hover:scale-105"
            >
              Sign In
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Social Proof Ticker */}
      <motion.div
        className="absolute bottom-10 w-full overflow-hidden border-t border-white/5 bg-black/20 backdrop-blur-sm py-6"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1, duration: 1}}
      >
        <div className="flex w-full max-w-7xl mx-auto items-center gap-8 px-4">
          <span className="text-sm text-zinc-600 uppercase tracking-widest whitespace-nowrap">Trusted by</span>
          <div className="flex-1 flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {TRUSTED_BY.map((company) => (
              <span key={company} className="text-lg font-semibold text-zinc-500">{company}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
