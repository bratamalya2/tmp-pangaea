import { LegalPage, type LegalPageConfig } from "../_components/LegalPage";

const config: LegalPageConfig = {
  id: "websitedisclaimer",
  title: "Website Disclaimer",
  subtitle:
    "Important limits on website content, market information, platform availability and third-party references.",
  eyebrow: "Website Information",
  image: "/images/forex_global_news.png",
  imageAlt: "Global market news and information screens",
  stats: [
    ["Info", "General content"],
    ["No", "Personal advice"],
    ["Live", "Values may vary"],
    ["Risk", "Review required"],
  ],
  highlights: [
    "Website content is general information",
    "Market examples are indicative",
    "Third-party services may apply terms",
    "Availability can vary by region",
  ],
  sections: [
    {
      title: "General Information Only",
      body:
        "Website content is provided for general information and product awareness. It should not be treated as personal financial advice, investment advice or a recommendation.",
    },
    {
      title: "Accuracy and Availability",
      body:
        "We aim to keep website information clear and current, but content may change, become outdated or differ from live platform conditions without notice.",
      points: ["Prices can move quickly", "Spreads and swaps may change", "Products can vary by account or region"],
    },
    {
      title: "No Investment Recommendation",
      body:
        "Examples, market descriptions, educational material and product pages are not instructions to buy, sell or hold any instrument.",
    },
    {
      title: "Third-Party Content",
      body:
        "Links, integrations, payment providers, platforms or third-party references may be governed by separate terms, privacy practices and service limitations.",
    },
    {
      title: "Technology and Access",
      body:
        "Website and platform access may be affected by maintenance, network conditions, browser behavior, device limitations or external provider availability.",
    },
    {
      title: "User Responsibility",
      body:
        "Visitors and clients remain responsible for reviewing account terms, product specifications, risk notices and suitability before using any service.",
    },
  ],
  finalTitle: "Need clarification on website content?",
  finalText:
    "Contact support before relying on any website information for account, funding or trading decisions.",
};

export default function WebsiteDisclaimerPage() {
  return <LegalPage config={config} />;
}
