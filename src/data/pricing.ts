export interface Plan {
  name: string;
  monthly: number;
  annual: number;
  tagline: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export const PLANS: Plan[] = [
  {
    name: "Straight Talk",
    monthly: 18.99,
    annual: 14.99,
    tagline: "Everything a real phone system needs. Nothing it doesn't.",
    features: [
      "Unlimited US/Canada calling",
      "Auto-attendant & ring groups",
      "Visual voicemail + AI transcription",
      "Two-way business SMS/MMS",
      "Missed-call auto-text",
      "Desktop, mobile & browser apps",
      "HD video meetings (25 participants)",
      "Unified inbox",
      "Standard analytics",
      "US-based human support",
    ],
    cta: "Start talking",
  },
  {
    name: "Real Talk",
    monthly: 36.99,
    annual: 29.99,
    tagline: "The whole platform. The plan most teams pick.",
    popular: true,
    features: [
      "Everything in Straight Talk, plus:",
      "CRM & PMS integrations with Screen Pop",
      "Automated reminders & confirmations",
      "Review requests & reputation monitoring",
      "Text-to-pay & online bill pay",
      "Call recording & 1,500 bulk texts/mo",
      "HD video meetings (100 participants)",
      "Webchat (Text Connect) widget",
      "HIPAA-capable config + BAA",
      "Advanced analytics & heatmaps",
    ],
    cta: "Get Real Talk",
  },
  {
    name: "Big Talk",
    monthly: 54.99,
    annual: 44.99,
    tagline: "AI receptionist, contact center, and every dial turned to 11.",
    features: [
      "Everything in Real Talk, plus:",
      "AI Receptionist — voice & text, 24/7",
      "Contact center: queues, wallboards, monitor/whisper/barge",
      "AI Call Intelligence on every call",
      "Missed-revenue follow-up lists",
      "15,000 bulk texts/mo",
      "HD video meetings (250 participants)",
      "Multi-location management & SSO",
      "REST API, webhooks & SDK",
      "Dedicated success manager",
    ],
    cta: "Go big",
  },
];

export const PRICING_NOTES = [
  "Prices are per user per month, billed annually. Monthly billing available — no long-term contract required.",
  "Free number porting, free onboarding, and free desk-phone provisioning on every plan.",
  "Taxes and regulatory fees not included (we itemize them honestly — no mystery \"service fees\").",
];
