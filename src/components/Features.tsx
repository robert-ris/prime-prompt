"use client";

import {motion} from "framer-motion";
import {Sparkles, Zap, History, Copy, Layers, Wand2} from "lucide-react";

const features = [
  {
    title: "Multi-Model Mastery",
    description: "Optimized for GPT-4, Claude 3.5, and Midjourney v6.",
    icon: Layers,
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Instant Polish",
    description: "One-click grammar and clarity enhancement.",
    icon: Sparkles,
    className: "col-span-1 row-span-1",
  },
  {
    title: "Version History",
    description: "Track changes and revert anytime.",
    icon: History,
    className: "col-span-1 row-span-1",
  },
  {
    title: "Smart Templates",
    description: "Pre-built structures for any use case.",
    icon: Copy,
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    title: "Magic Expand",
    description: "Turn a few words into a detailed paragraph.",
    icon: Wand2,
    className: "col-span-1 row-span-1",
  },
];

export function Features() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
        >
          Power at your fingertips.
        </motion.h2>
        <motion.p
          className="text-xl text-zinc-400 max-w-2xl mx-auto"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.2}}
        >
          Everything you need to craft the perfect prompt, packaged in a beautiful interface.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[800px]">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`glass-card rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300 ${feature.className}`}
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.5, delay: index * 0.1}}
            viewport={{once: true}}
          >
            <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
