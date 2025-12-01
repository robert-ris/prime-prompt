"use client";

import {motion} from "framer-motion";
import {Wand2, ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";

export function DemoBox() {
  return (
    <section className="w-full flex items-center justify-center py-20 px-4">
      <motion.div
        className="relative w-full max-w-5xl mx-auto"
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
      >
        {/* Camera Plateau Container */}
        <div className="relative bg-[#1c1c1e] rounded-[2.5rem] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">

          {/* "Lens" / Input Area */}
          <div className="bg-[#121212] rounded-[2rem] p-8 md:p-12 relative z-10">
            <div className="flex flex-col gap-8">

              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-zinc-500 text-sm font-medium tracking-wider uppercase">AI Prompt Engine</span>
              </div>

              {/* Input Simulation */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 font-medium ml-1">Your Idea</label>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-zinc-300 font-light text-lg">
                    "A cyberpunk city with neon lights"
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-gradient-orange p-3 rounded-full shadow-lg shadow-orange-500/20">
                    <Wand2 className="w-6 h-6 text-black" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 font-medium ml-1">Optimized Prompt</label>
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 text-white text-lg leading-relaxed shadow-inner">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                      "A sprawling cyberpunk metropolis at night, illuminated by vibrant neon signage in pink and blue hues. Rain-slicked streets reflect the towering skyscrapers, flying cars weaving through the dense fog. Cinematic lighting, photorealistic 8k render, octane render."
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="flex justify-end mt-4">
                <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-6 text-lg font-medium">
                  Try it yourself <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

            </div>
          </div>

          {/* Background Glow/Reflection for "Glass" feel */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
