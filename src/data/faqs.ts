export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "What is Talk Is Cheap?",
    answer:
      "Talk Is Cheap is an all-in-one UCaaS (Unified Communications as a Service) platform: a cloud business phone system, two-way SMS messaging, video meetings, AI receptionist, contact center, and analytics in a single app — priced from $14.99 per user per month. The name is the promise: enterprise-grade communications shouldn't cost enterprise money.",
  },
  {
    question: "How much does Talk Is Cheap cost?",
    answer:
      "Three plans: Straight Talk at $14.99/user/month, Real Talk at $29.99/user/month, and Big Talk at $44.99/user/month (billed annually; monthly billing is available at a slightly higher rate with no long-term contract). Every plan includes unlimited US/Canada calling, free number porting, and free onboarding.",
  },
  {
    question: "Can I keep my existing business phone number?",
    answer:
      "Yes. Number porting is free on every plan and we handle the entire process with your current carrier. Most ports complete in 1–2 weeks, and your service keeps working on temporary numbers in the meantime — you'll never miss a call during the transition.",
  },
  {
    question: "What is UCaaS and how is it different from regular VoIP?",
    answer:
      "VoIP is just phone calls over the internet. UCaaS (Unified Communications as a Service) bundles calling with messaging, video meetings, team chat, fax, and integrations into one cloud platform with one login and one bill. Talk Is Cheap is a full UCaaS platform — the phone system is the foundation, not the whole product.",
  },
  {
    question: "Do I need special hardware or desk phones?",
    answer:
      "No. Talk Is Cheap works on the computers and smartphones you already own via desktop, browser, and mobile apps. If you want physical desk phones, we drop-ship pre-provisioned Yealink phones that work the moment you plug them in — but they're optional.",
  },
  {
    question: "How reliable is the service?",
    answer:
      "Talk Is Cheap runs on geo-redundant, carrier-grade infrastructure with a 99.999% uptime target. If your office internet fails, calls automatically fail over to mobile apps or any forwarding number you choose, so a power outage doesn't take your business offline.",
  },
  {
    question: "Is Talk Is Cheap HIPAA compliant?",
    answer:
      "Talk Is Cheap offers HIPAA-capable configurations on Real Talk and Big Talk plans, including encrypted calls and messages (TLS/SRTP), role-based access controls, audit logging, and a signed Business Associate Agreement (BAA). Thousands of healthcare front desks run on platforms like ours — compliance is a configuration, not an upsell surprise.",
  },
  {
    question: "What does the AI Receptionist actually do?",
    answer:
      "It answers your calls and texts 24/7 in natural conversational language: booking and rescheduling appointments against your live calendar, answering FAQs like hours and pricing, taking structured messages, and texting back every missed caller. When a human is needed, it hands off with the full transcript attached. It's included in the Big Talk plan.",
  },
  {
    question: "Which CRMs and practice management systems do you integrate with?",
    answer:
      "100+ systems, including Salesforce, HubSpot, Pipedrive, Zoho, Clio, Zendesk, Google Workspace, Microsoft 365, and the leading dental, medical, veterinary, and optometry practice management systems — with two-way sync. There's also a full REST API, webhooks, and Zapier support for everything else.",
  },
  {
    question: "Can my team text from our main business number?",
    answer:
      "Yes — that's core to the product. Your whole team sends and receives SMS/MMS from your business number through a shared unified inbox, with templates, tags, scheduled sending, and automations. Staff personal numbers are never exposed.",
  },
  {
    question: "Is there a contract or setup fee?",
    answer:
      "No setup fees, no onboarding fees, no porting fees. Annual billing gets the best rate; monthly billing runs month-to-month and you can cancel anytime. We keep customers with the product, not the paperwork.",
  },
  {
    question: "How fast can we get set up?",
    answer:
      "Most teams are making calls the same day they sign up. Apps install in minutes, our onboarding team configures your routing and auto-attendant with you on a single call, and number porting runs in the background while you're already live on temporary numbers.",
  },
];
