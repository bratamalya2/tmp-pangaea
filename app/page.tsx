"use client";

import { SparklesPreviewDark } from "@/components/demo";
import { useTheme } from "@/context/ThemeContext";
import { 
  StatsSection, 
  FeaturesSection, 
  MarketsSection, 
  AccountsSection, 
  StepsSection 
} from "@/components/landing-sections";

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
