"use client";

import {motion} from "framer-motion";

export function DemoBox() {
  return (
    <div className="w-full max-w-4xl mx-auto p-1 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-2xl shadow-2xl">
      <div className="bg-zinc-950 rounded-xl p-6 md:p-12 border border-zinc-800">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
              <p className="text-zinc-400 text-sm mb-2">Input Idea</p>
              <p className="text-white">"A cyberpunk city with neon lights"</p>
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-0.5 bg-gradient-to-b from-zinc-800 to-blue-500/50" />
            </div>
            <div className="bg-blue-950/20 p-4 rounded-lg border border-blue-900/30">
              <p className="text-blue-400 text-sm mb-2">Enhanced Prompt</p>
              <p className="text-blue-100">"A sprawling cyberpunk metropolis at night, illuminated by vibrant neon signage in pink and blue hues. Rain-slicked streets reflect the towering skyscrapers, flying cars weaving through the dense fog. Cinematic lighting, photorealistic 8k render, octane render."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
