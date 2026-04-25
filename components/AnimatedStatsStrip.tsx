"use client";

import React from "react";
import type { LucideIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export type AnimatedStat = {
  value: string;
  label: string;
  icon?: LucideIcon;
};

export type AnimatedStatsStripProps = {
  stats: AnimatedStat[];
  border: string;
  backgroundColor: string;
  themeMode: "light" | "dark";
  mutedClassName?: string;
  align?: "left" | "center";
  pyClassName?: string;
  containerClassName?: string;
  gridClassName?: string;
  statClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
};

export default function AnimatedStatsStrip({
  stats,
  border,
  backgroundColor,
  themeMode,
  mutedClassName,
  align = "left",
  pyClassName = "py-8",
  containerClassName = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  gridClassName = "grid grid-cols-2 gap-6 lg:grid-cols-4",
  statClassName,
  valueClassName,
  labelClassName,
}: AnimatedStatsStripProps) {
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
      className={cn("border-y", pyClassName)}
      style={{ borderColor: border, backgroundColor }}
    >
      <div className={containerClassName}>
        <motion.div
          className={gridClassName}
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
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={`${stat.value}-${stat.label}`}
                className={cn(
                  "relative isolate",
                  align === "center" ? "px-4 text-center" : Icon ? "flex items-start gap-4" : "",
                  statClassName
                )}
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
                {Icon && (
                  <motion.div
                    className="mt-1 shrink-0 text-indigo-500"
                    variants={{
                      hidden: { opacity: 0, rotate: -8, scale: 0.82 },
                      visible: {
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                        transition: {
                          duration: 0.45,
                          delay: 0.08,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    <Icon size={24} />
                  </motion.div>
                )}

                <div className={cn(align === "center" ? "mx-auto" : "min-w-0")}>
                  <motion.div
                    className={cn("relative isolate inline-block will-change-transform", align === "center" && "mx-auto")}
                    style={{ y: valueParallaxY }}
                  >
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-11 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/25 blur-xl md:h-14 md:w-28"
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
                      className={cn(
                        "relative inline-block overflow-hidden text-3xl font-bold text-indigo-500 drop-shadow-[0_0_18px_rgba(99,102,241,0.35)] md:text-4xl",
                        valueClassName
                      )}
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
                      {stat.value}
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
                      className={cn("mt-1 text-sm font-medium", mutedClassName, labelClassName)}
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
                      {stat.label}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
