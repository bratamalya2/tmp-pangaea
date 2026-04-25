"use client";

import dynamic from "next/dynamic";
import { SparklesPreviewDark } from "@/components/demo";
import { useTheme } from "@/context/ThemeContext";

const StatsSection = dynamic(
  () => import("@/components/landing-sections").then((mod) => mod.StatsSection),
  {
    ssr: false,
    loading: () => <StatsSectionSkeleton />,
  }
);

const FeaturesSection = dynamic(
  () => import("@/components/landing-sections").then((mod) => mod.FeaturesSection),
  {
    ssr: false,
    loading: () => <LandingSectionSkeleton />,
  }
);

const MarketsSection = dynamic(
  () => import("@/components/landing-sections").then((mod) => mod.MarketsSection),
  {
    ssr: false,
    loading: () => <LandingSectionSkeleton />,
  }
);

const AccountsSection = dynamic(
  () => import("@/components/landing-sections").then((mod) => mod.AccountsSection),
  {
    ssr: false,
    loading: () => <LandingSectionSkeleton />,
  }
);

const StepsSection = dynamic(
  () => import("@/components/landing-sections").then((mod) => mod.StepsSection),
  {
    ssr: false,
    loading: () => <LandingSectionSkeleton />,
  }
);

function StatsSectionSkeleton() {
  const { theme } = useTheme();

  return (
    <section
      className="border-y py-16"
      style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="px-4 text-center"
              aria-hidden="true"
            >
              <div className="mx-auto mb-3 h-10 w-24 animate-pulse rounded bg-indigo-500/20 md:h-14" />
              <div
                className="mx-auto h-3 w-28 animate-pulse rounded"
                style={{ backgroundColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LandingSectionSkeleton() {
  const { theme } = useTheme();

  return (
    <section
      className="py-24"
      style={{ backgroundColor: theme === "light" ? "#ffffff" : "#040404" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-hidden="true">
        <div className="mb-6 h-4 w-32 animate-pulse rounded-full bg-indigo-500/20" />
        <div className="mb-4 h-10 max-w-2xl animate-pulse rounded bg-indigo-500/15" />
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="h-44 animate-pulse rounded-2xl border bg-indigo-500/10"
              style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { colors } = useTheme();

  return (
    <>
      <main
        className="flex flex-col min-h-screen overflow-x-hidden transition-colors duration-300 pt-20"
        style={{ backgroundColor: colors.background, color: colors.text }}
      >
        <SparklesPreviewDark />
        <StatsSection />
        <FeaturesSection />
        <MarketsSection />
        <AccountsSection />
        <StepsSection />
      </main>
    </>
  );
}
