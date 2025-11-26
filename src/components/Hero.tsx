"use client";

import {motion} from "framer-motion";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full text-center px-4">
      <motion.h1
        className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
      >
        Turn any idea into a <br /> perfect AI prompt
      </motion.h1>
      <motion.p
        className="mt-6 text-xl text-zinc-400 max-w-2xl"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.2}}
      >
        Unlock the full potential of AI with prompts engineered for precision and creativity.
      </motion.p>
    </section>
  );
}
