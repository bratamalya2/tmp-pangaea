"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles"
import { useTheme } from "@/context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";

const heroTypewriterPhrases = [
  "forex",
  "stocks",
  "indices",
  "commodities",
  "crypto",
];

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
      className="relative flex min-h-[calc(100svh-5rem)] w-full flex-col items-center justify-center overflow-hidden px-4 py-10 transition-colors duration-300 sm:py-14"
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
        className="relative z-20 flex w-full max-w-4xl flex-col items-center text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="mb-5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-500 sm:text-sm">
          MetaTrader 5 access for modern traders
        </div>
        <div
          className={`mt-5 max-w-3xl text-center text-2xl min-[450px]:text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-6xl font-medium ${theme === "light" ? "text-[#030D1F]" : "text-white"
            }`}
        >
          Transact{" "}
          <Typewriter
            text={heroTypewriterPhrases}
            speed={70}
            className="font-bold text-indigo-500"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar="_"
          />{" "}
          from one account.
        </div>
        <p className={`mt-3 text-lg font-semibold hidden md:block ${theme === "light" ? "text-[#030D1F]" : "text-white"}`}>
          Founded on the principle of radical transparency, PANGAEA is a multi-asset brokerage built for the modern era. We provide a unified gateway to Forex, Commodities, Crypto, Indices, and Stocks.
        </p>
        <p className={`mt-4 max-w-3xl text-sm leading-7 md:text-lg ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>
          Experience institutional-grade technology, multi-asset market access
          and MetaTrader precision built for retail traders.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/pages/account-types"
            className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-700 sm:w-auto"
          >
            Start Trading Now
          </Link>
          <Link
            href="/pages/platforms"
            className="inline-flex w-full items-center justify-center rounded-full border px-8 py-4 text-sm font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 sm:w-auto"
            style={{ borderColor: theme === "light" ? "#d4d4d8" : "#374151" }}
          >
            Book a Demo
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export function Preview() {
  return (
    <div className="flex h-full w-full flex-row items-start justify-start overflow-hidden bg-background p-16 pt-48 text-2xl font-normal sm:text-3xl md:text-4xl lg:text-5xl">
      <p className="whitespace-pre-wrap">
        <span>{"We're born to "}</span>
        <Typewriter
          text={[
            "experience",
            "trade with clarity",
            "build confidence",
            "create better financial habits",
          ]}
          speed={70}
          className="text-indigo-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar="_"
        />
      </p>
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
