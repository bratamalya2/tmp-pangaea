"use client";

import React, { Suspense } from "react";
import { cn } from "@/lib/utils";
import type { AnimatedStatsStripProps } from "@/components/AnimatedStatsStrip";

const AnimatedStatsStrip = React.lazy(() => import("@/components/AnimatedStatsStrip"));

function AnimatedStatsStripSkeleton({
  stats,
  border,
  backgroundColor,
  mutedClassName,
  align = "left",
  pyClassName = "py-8",
  containerClassName = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  gridClassName = "grid grid-cols-2 gap-6 lg:grid-cols-4",
}: AnimatedStatsStripProps) {
  return (
    <section
      className={cn("border-y", pyClassName)}
      style={{ borderColor: border, backgroundColor }}
    >
      <div className={containerClassName}>
        <div className={gridClassName} aria-hidden="true">
          {stats.map((stat) => (
            <div
              key={`${stat.value}-${stat.label}-skeleton`}
              className={cn(align === "center" ? "px-4 text-center" : stat.icon ? "flex items-start gap-4" : "")}
            >
              {stat.icon && <div className="mt-1 h-6 w-6 shrink-0 animate-pulse rounded-full bg-indigo-500/20" />}
              <div className={cn(align === "center" ? "mx-auto" : "min-w-0")}>
                <div className={cn("mb-3 h-9 w-24 animate-pulse rounded bg-indigo-500/20 md:h-10", align === "center" && "mx-auto")} />
                <div
                  className={cn("h-3 w-28 animate-pulse rounded", align === "center" && "mx-auto", mutedClassName)}
                  style={{ backgroundColor: border }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LazyAnimatedStatsStrip(props: AnimatedStatsStripProps) {
  return (
    <Suspense fallback={<AnimatedStatsStripSkeleton {...props} />}>
      <AnimatedStatsStrip {...props} />
    </Suspense>
  );
}
