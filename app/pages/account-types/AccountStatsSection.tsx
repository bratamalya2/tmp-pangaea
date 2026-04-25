"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const accountStats = [
  ["4", "Account paths"],
  ["0.0", "Spreads from"],
  ["1:1000", "Leverage up to"],
  ["24/5", "Market access"],
];

type ThemeMode = "light" | "dark";

type StatsImage = {
  src: string;
  alt: string;
  caption: string;
};

type AccountStatsSectionProps = {
  border: string;
  altSurface: string;
  muted: string;
  image: StatsImage;
  themeMode: ThemeMode;
};

export default function AccountStatsSection({
  border,
  altSurface,
  muted,
  themeMode,
}: AccountStatsSectionProps) {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });
  const valueParallaxY = useTransform(scrollYProgress, [0, 1], [22, -14]);
  const labelParallaxY = useTransform(scrollYProgress, [0, 1], [10, -7]);

  return (
    <section
      ref={sectionRef}
      className="border-y py-8"
      style={{ borderColor: border, backgroundColor: altSurface }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 place-items-center gap-6 text-center lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {accountStats.map(([value, label], idx) => (
            <motion.div
              key={label}
              className="relative isolate flex w-full flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 22, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.55,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <motion.div
                className="relative inline-block will-change-transform"
                style={{ y: valueParallaxY }}
              >
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-11 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/25 blur-xl"
                  variants={{
                    hidden: { opacity: 0, scale: 0.45 },
                    visible: {
                      opacity: [0, 0.85, 0.18],
                      scale: [0.55, 1.35, 1],
                      transition: {
                        duration: 0.75,
                        delay: 0.08,
                        ease: "easeOut",
                      },
                    },
                  }}
                />
                <motion.div
                  className="relative inline-block overflow-hidden text-3xl font-bold text-indigo-500 drop-shadow-[0_0_18px_rgba(99,102,241,0.35)] md:text-4xl"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 16,
                      scale: 0.9,
                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: [0.9, 1.08, 1],
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.72,
                        delay: 0.12,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {value}
                  <motion.span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-y-0 -left-16 w-12 skew-x-[-18deg] bg-gradient-to-r from-transparent to-transparent",
                      themeMode === "light" ? "via-white/90" : "via-indigo-100/90"
                    )}
                    variants={{
                      hidden: { x: "-120%", opacity: 0 },
                      visible: {
                        x: "430%",
                        opacity: [0, 1, 0],
                        transition: {
                          duration: 0.85,
                          delay: 0.2 + idx * 0.08,
                          ease: "easeOut",
                        },
                      },
                    }}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="will-change-transform"
                style={{ y: labelParallaxY }}
              >
                <motion.div
                  className={cn("mt-1 text-sm font-medium", muted)}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.45,
                        delay: 0.2,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {label}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
