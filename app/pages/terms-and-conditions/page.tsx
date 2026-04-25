import { LegalPage, type LegalPageConfig } from "../_components/LegalPage";

const config: LegalPageConfig = {
  id: "termsandconditions",
  title: "Terms & Conditions",
  subtitle:
    "Core terms for using the Pangaea website, account workflows, platform access and related services.",
  eyebrow: "Service Terms",
  image: "/images/indices_trading.png",
  imageAlt: "Trading platform terms and account access screens",
  stats: [
    ["Account", "User duties"],
    ["Platform", "Access terms"],
    ["Legal", "Service limits"],
    ["Review", "Before use"],
  ],
  highlights: [
    "Use services lawfully and responsibly",
    "Keep account credentials secure",
    "Follow product and platform terms",
    "Review changes before continued use",
  ],
  sections: [
    {
      title: "Acceptance of Terms",
      body:
        "By using the website, opening an account or accessing platform services, you agree to the applicable terms, policies, risk notices and account documents.",
    },
    {
      title: "Account Responsibilities",
      body:
        "Clients must provide accurate information, keep login details secure, maintain current account records and notify support about suspicious activity.",
      points: ["Use true profile details", "Protect passwords and devices", "Update contact and verification information"],
    },
    {
      title: "Permitted Use",
      body:
        "The website and services must not be used for unlawful activity, abusive behavior, unauthorized access, misleading promotion or circumvention of compliance controls.",
    },
    {
      title: "Trading and Platform Access",
      body:
        "Platform availability, instruments, pricing, execution, leverage and account conditions can vary by product, account type, region and market conditions.",
    },
    {
      title: "Fees and Payments",
      body:
        "Deposits, withdrawals, conversions, commissions, swaps, spreads and provider charges may apply depending on account use, payment method and market conditions.",
    },
    {
      title: "Changes and Termination",
      body:
        "Terms, products, website content and account access rules may be updated. Access may be restricted where required for security, compliance or operational reasons.",
    },
  ],
  finalTitle: "Questions about service terms?",
  finalText:
    "Contact support if you need help understanding account, platform, funding or service conditions.",
};

export default function TermsAndConditionsPage() {
  return <LegalPage config={config} />;
}
