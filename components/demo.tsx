"use client";
import React, { useRef } from "react";
import { SparklesCore } from "@/components/ui/sparkles"
import { useTheme } from "@/context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";

export function SparklesPreview() {
  const { colors } = useTheme();
  return (
    <div
      className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.background }}
    >
      <h1
        className="md:text-7xl text-3xl lg:text-9xl font-bold text-center relative z-20 transition-colors duration-300"
        style={{ color: colors.text }}
      >
        Acme
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] transition-colors duration-300"
          style={{ backgroundColor: colors.background }}
        ></div>
      </div>
    </div>
  );
}

export function SparklesPreviewDark() {
  const { theme, colors } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const particleY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.45]);

  return (
    <div
      ref={heroRef}
      className="h-[60vh] relative w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div className="w-full absolute inset-0 h-screen" style={{ y: particleY }}>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor={theme === "light" ? "#000000" : "#FFFFFF"}
          speed={1}
        />
      </motion.div>
      <motion.div
        className="relative z-20 flex flex-col items-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <h1
          className="md:text-7xl text-3xl lg:text-9xl font-bold text-center transition-colors duration-300 text-[#030D1F]"
          style={{ color: colors.text }}
        >
          PANGAEA
        </h1>
        <p className={`text-2xl ${theme === "light" ? "text-[#030D1F]" : "text-white"}`}>One World. One Market.</p>
      </motion.div>
    </div>
  );
}

export function SparklesPreviewColorful() {
  const { theme, colors } = useTheme();
  return (
    <div
      className="h-[80vh] relative w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.background }}
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlescolorful"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor={theme === "light" ? "#000000" : "#00ff00"}
          speed={0.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-800 dark:from-neutral-50 dark:to-neutral-400 transition-all duration-300">
          The Future
        </h1>
        <p
          className="cursor-default text-center transition-colors duration-300"
          style={{ color: theme === "light" ? "#4b5563" : "#d1d5db" }}
        >
          is brighter than you think
        </p>
      </div>
    </div>
  );
}

import LoaderOne from "@/components/ui/loader-one";

export function LoaderDemo() {
  return (
    <div className="py-20 flex flex-col items-center justify-center border-t border-zinc-800">
      <h3 className="text-xl font-bold mb-8 opacity-70">Processing Transaction...</h3>
      <LoaderOne />
    </div>
  );
}
