"use client";

import {motion, useScroll, useTransform, MotionValue} from "framer-motion";
import React, {useRef} from "react";

interface DeepScrollLayoutProps {
  children: React.ReactNode[];
}

export function DeepScrollLayout({children}: DeepScrollLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenArray = React.Children.toArray(children);
  const totalSections = childrenArray.length;

  // Reduced height per section to make scrolling faster (70vh instead of 100vh)
  const totalHeight = `${totalSections * 200}vh`;

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} style={{height: totalHeight}} className="relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-1000">
        {childrenArray.map((child, index) => (
          <Section key={index} index={index} progress={scrollYProgress} total={totalSections}>
            {child}
          </Section>
        ))}
      </div>
    </div>
  );
}

function Section({
  children,
  index,
  progress,
  total,
}: {
  children: React.ReactNode;
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  // Calculate the start and end points for this section's visibility
  // We want a smooth transition where one section fades out as the next fades in
  // But strictly "deep" movement means they come from Z=far to Z=0 to Z=close (behind camera)

  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  // Opacity: Fade in from 0 to 1, then stay 1, then fade out
  const opacity = useTransform(
    progress,
    [start - step / 2, start, end - step / 2, end],
    [0, 1, 1, 0]
  );

  // Scale: Start small (distant), grow to 1 (focus), then grow huge (passed camera)
  const scale = useTransform(
    progress,
    [start - step, start, end],
    [0.5, 1, 1.5]
  );

  // Z-index: Ensure the current section is on top when focused
  // This is a bit tricky with transforms, but we can use visibility or pointer-events
  const pointerEvents = useTransform(
    progress,
    (val) => (val >= start && val < end ? "auto" : "none")
  );

  // Blur effect for depth
  const filter = useTransform(
    progress,
    [start - step, start, end],
    ["blur(10px)", "blur(0px)", "blur(10px)"]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        filter,
        pointerEvents,
        zIndex: index,
      }}
      className="absolute inset-0 flex items-center justify-center w-full h-full will-change-transform"
    >
      {children}
    </motion.div>
  );
}
