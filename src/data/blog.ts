export interface BlogBlock {
  type: "h2" | "p" | "ul";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  category: string;
  blocks: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-ucaas-complete-guide-2026",
    title: "What Is UCaaS? The Complete 2026 Guide for Business Buyers",
    description:
      "UCaaS explained in plain English: what unified communications as a service includes, what it costs in 2026, how it differs from VoIP, and how to choose a provider.",
    date: "2026-07-01",
    readMinutes: 9,
    category: "Guides",
    blocks: [
      {
        type: "p",
        text: "UCaaS — Unified Communications as a Service — is the industry's acronym for a simple idea: every way your business talks (phone calls, text messages, video meetings, team chat, fax) delivered as one cloud platform with one app, one admin panel, and one bill. Instead of a phone closet, a texting tool, a video subscription, and a fax line from 1996, you get a single system that runs on the devices you already own.",
      },
      { type: "h2", text: "What's actually included in a UCaaS platform?" },
      {
        type: "ul",
        items: [
          "Cloud phone system (VoIP): unlimited calling, auto-attendants, call queues, voicemail with transcription, call recording",
          "Business SMS/MMS: two-way texting from your business number, shared team inbox, automations",
          "Video meetings: HD conferencing with screen share and recording",
          "Team chat: internal channels so coordination stays out of customer threads",
          "Integrations: CRM and calendar sync so conversations carry context",
          "Analytics: answer rates, response times, and conversion reporting",
          "Increasingly in 2026: AI — receptionists that answer calls, transcription, sentiment analysis, and automated follow-up",
        ],
      },
      { type: "h2", text: "UCaaS vs. VoIP: the difference that matters" },
      {
        type: "p",
        text: "VoIP (Voice over IP) is a transport technology — phone calls over the internet. Every UCaaS platform uses VoIP, but a bare VoIP service only replaces your dial tone. UCaaS replaces your dial tone, your texting app, your video subscription, your fax machine, and the sticky notes where call messages used to die. If a vendor quotes you 'VoIP,' ask what happens to a missed call. If the answer is 'voicemail,' you're buying 2015.",
      },
      { type: "h2", text: "What does UCaaS cost in 2026?" },
      {
        type: "p",
        text: "Market pricing runs $15–$60 per user per month depending on tier. Entry tiers cover calling, texting, and basic video. Mid tiers add integrations, automations, and compliance features like HIPAA BAAs. Top tiers add AI receptionists and contact-center tooling. Watch for the classic traps: per-minute overages, paid 'implementation packages,' charging extra for video, and 36-month contracts with auto-renewal. (Talk Is Cheap runs $14.99–$44.99 with none of those — the name is the business model.)",
      },
      { type: "h2", text: "How to choose a UCaaS provider" },
      {
        type: "ul",
        items: [
          "Reliability: look for geo-redundant infrastructure and a 99.999% uptime commitment",
          "Real telephony depth: call queues, park, transfer types, and visual routing config — demo these, don't take the datasheet's word",
          "Texting as a first-class feature: shared inbox, automations, compliance handling",
          "Integrations with two-way sync into the systems you already run",
          "Honest pricing: per-user, all-in, with taxes itemized rather than hidden",
          "Support by humans in your time zone — test it presales at 6 PM on a Friday",
        ],
      },
      { type: "h2", text: "The bottom line" },
      {
        type: "p",
        text: "UCaaS is no longer an enterprise luxury. A five-person office can run the same communications stack as a Fortune 500 front office for less than the cost of one business lunch per employee per month. The only remaining question is whether your provider prices it that way.",
      },
    ],
  },
  {
    slug: "ucaas-vs-voip-whats-the-difference",
    title: "UCaaS vs. VoIP: What's the Difference (and Which Do You Need)?",
    description:
      "VoIP moves your calls to the internet. UCaaS moves your entire communication stack to one platform. Here's how to tell which one your business actually needs.",
    date: "2026-06-24",
    readMinutes: 6,
    category: "Guides",
    blocks: [
      {
        type: "p",
        text: "Shopping for a business phone system in 2026 means wading through two acronyms that vendors use almost interchangeably: VoIP and UCaaS. They are not the same thing, and knowing the difference will save you from buying twice.",
      },
      { type: "h2", text: "VoIP: the technology" },
      {
        type: "p",
        text: "Voice over Internet Protocol is exactly what it says — voice calls carried over the internet instead of copper phone lines. It's the plumbing. A pure VoIP service gives you dial tone, extensions, and voicemail at a lower price than the phone company. That's genuinely valuable, and for a business whose customers only ever call, it may be enough.",
      },
      { type: "h2", text: "UCaaS: the platform" },
      {
        type: "p",
        text: "Unified Communications as a Service is built on VoIP but treats the phone call as one channel among many. The same platform handles business texting, video meetings, team chat, e-fax, and — critically — the connective tissue: a shared inbox, CRM integrations, automations, and analytics. The question UCaaS answers isn't 'how do we make calls cheaper' but 'how do we stop losing customers between channels.'",
      },
      { type: "h2", text: "The test: follow one missed call" },
      {
        type: "ul",
        items: [
          "VoIP: missed call → voicemail → maybe someone checks it → sticky note → hopefully a callback tomorrow",
          "UCaaS: missed call → instant text-back to the caller → conversation continues in the shared inbox → booked appointment logged to the CRM → analytics count it",
        ],
      },
      {
        type: "p",
        text: "Industry research consistently shows businesses miss 20–30% of inbound calls, and roughly 75% of callers who hit voicemail never call back. That single statistic is why UCaaS exists.",
      },
      { type: "h2", text: "Which should you buy?" },
      {
        type: "p",
        text: "If customers text you, book appointments, or compare you against competitors on response time — you need UCaaS, not VoIP. The good news: the price gap has collapsed. Talk Is Cheap's entry plan is a full UCaaS platform (calling, texting, video, unified inbox, missed-call auto-text) at $14.99/user/month — less than most bare VoIP carriers charge for dial tone.",
      },
    ],
  },
  {
    slug: "business-phone-system-cost-2026",
    title: "How Much Does a Business Phone System Cost in 2026? (Real Numbers)",
    description:
      "A transparent breakdown of business phone system pricing in 2026: per-user costs, hardware, hidden fees, and what a 10-person office should actually budget.",
    date: "2026-06-12",
    readMinutes: 7,
    category: "Buyer Guides",
    blocks: [
      {
        type: "p",
        text: "Ask five vendors what a business phone system costs and you'll get five quotes that can't be compared — different units, different bundled 'value,' different fine print. Here are the real numbers for 2026, in one place.",
      },
      { type: "h2", text: "The per-user price bands" },
      {
        type: "ul",
        items: [
          "Budget VoIP (calls only): $10–$20/user/month — dial tone, voicemail, an auto-attendant if you're lucky",
          "Full UCaaS platforms: $15–$45/user/month — adds texting, video, integrations, automations",
          "UCaaS with AI + contact center: $40–$90/user/month at legacy vendors; $45 at disruptors",
          "Vertical platforms (e.g., healthcare-specific): often $150–$400/location/month regardless of seat count",
        ],
      },
      { type: "h2", text: "The costs vendors don't put on the pricing page" },
      {
        type: "ul",
        items: [
          "Implementation/onboarding packages: $0–$2,500 one-time — always negotiable, often waivable",
          "Number porting fees: $0–$25 per number (should be free; walk if it isn't)",
          "Desk phones: $60–$300 each — but ask whether you need them at all; most teams live in the apps",
          "Taxes & regulatory fees: 20–30% on top of the sticker in most US states — legitimate, but honest vendors itemize them",
          "'Premium' support tiers, video add-ons, recording storage, API access: the death-by-add-on pattern",
        ],
      },
      { type: "h2", text: "What a 10-person office should budget" },
      {
        type: "p",
        text: "A realistic 2026 all-in budget for a 10-seat office on a full UCaaS platform: $150–$450/month depending on tier, plus taxes/fees. On Talk Is Cheap that's $149.90/month on Straight Talk or $299.90 on Real Talk (annual billing), with $0 setup, $0 porting, and video included. The same seats on a legacy enterprise vendor commonly land at $550–$800 once the add-ons are counted.",
      },
      { type: "h2", text: "The ROI math that actually matters" },
      {
        type: "p",
        text: "Price is only half the equation. One recovered missed call per week — a $200 service job, a $150 patient visit, a single retained client — pays for several seats by itself. That's why features like missed-call auto-text and AI answering aren't luxuries; they're the fastest payback in the stack. Buy the platform that stops the leak, then enjoy that it also happens to cost less.",
      },
    ],
  },
  {
    slug: "ai-receptionist-small-business-guide",
    title: "AI Receptionists for Small Business: What They Do, What They Cost, What to Watch",
    description:
      "AI receptionists answer calls 24/7, book appointments, and text back missed callers. Here's how they work in 2026, what they cost, and how to deploy one without annoying your customers.",
    date: "2026-05-28",
    readMinutes: 8,
    category: "AI",
    blocks: [
      {
        type: "p",
        text: "Two years ago, 'AI answering' meant a robotic phone tree that made callers stab zero. In 2026, AI receptionists hold natural conversations, book real appointments against live calendars, and hand off to humans with full context. Over half of small businesses on modern communication platforms now use at least one AI feature. Here's what the technology actually does — and where to be careful.",
      },
      { type: "h2", text: "What a modern AI receptionist handles" },
      {
        type: "ul",
        items: [
          "Answering every call on the first ring, 24/7, in multiple languages",
          "FAQs: hours, location, pricing, insurance, service availability",
          "Booking, rescheduling, and canceling appointments against your real calendar",
          "Texting back every missed caller within seconds and completing bookings over SMS",
          "Structured message-taking with urgency detection and escalation rules",
          "Warm handoff to staff with the entire transcript and caller record attached",
        ],
      },
      { type: "h2", text: "The economics" },
      {
        type: "p",
        text: "A human receptionist costs $35,000–$50,000/year and works 40 of the week's 168 hours. AI answering as a platform feature runs $10–$30/user/month (it's included in Talk Is Cheap's Big Talk tier). The AI doesn't replace your best front-desk person — it replaces the voicemail box that was silently losing you the 30%+ of calls that arrive when nobody can answer.",
      },
      { type: "h2", text: "How to deploy one without annoying people" },
      {
        type: "ul",
        items: [
          "Start after-hours only, then expand to overflow once you trust the transcripts",
          "Give it narrow authority: FAQs and booking yes, refunds and emergencies always escalate",
          "Review conversation logs weekly for the first month and tune the guardrails",
          "Keep the human escape hatch instant — 'let me get you to a person' should never take more than one request",
          "Measure it: resolution rate, booked appointments, and after-hours captures should all be on a dashboard",
        ],
      },
      { type: "h2", text: "The bottom line" },
      {
        type: "p",
        text: "The question has flipped from 'is AI answering good enough?' to 'what is every unanswered ring costing you?' If your call log shows missed calls after 5 PM — and it does — an AI receptionist is the highest-ROI line item in modern business communications.",
      },
    ],
  },
  {
    slug: "business-phone-number-porting-guide",
    title: "How to Port Your Business Phone Number Without Downtime (2026 Guide)",
    description:
      "Porting your business number to a new provider is free, federally protected, and less scary than vendors make it sound. The exact process, timeline, and the three mistakes that cause delays.",
    date: "2026-07-05",
    readMinutes: 7,
    category: "How-To",
    blocks: [
      {
        type: "p",
        text: "The single biggest fear keeping businesses on overpriced phone service is losing the number that's on the sign, the trucks, and ten years of invoices. Here's the reassuring truth: your number belongs to you, not your carrier. FCC rules require your old provider to release it, and a competent new provider handles the entire transfer. Done right, there is zero downtime — calls keep ringing through the whole process.",
      },
      { type: "h2", text: "How porting actually works" },
      {
        type: "p",
        text: "Number porting is a carrier-to-carrier handoff called an LNP (Local Number Portability) transfer. Your new provider submits a port request to your old one, the old carrier validates that the account details match, a Firm Order Commitment (FOC) date is scheduled, and on that date the number's routing flips to the new network. Your phones ring on the new system the moment it flips — the industry has done this millions of times.",
      },
      { type: "h2", text: "The realistic timeline" },
      {
        type: "ul",
        items: [
          "Simple ports (one number, standard local carrier): 3–10 business days",
          "Multi-number or toll-free ports: 1–3 weeks",
          "Ports from cable bundles or resellers: add a few days — the losing carrier's paperwork is slower",
          "During the wait: you're already live on temporary numbers, and your old number keeps working normally until the flip",
        ],
      },
      { type: "h2", text: "The three mistakes that cause rejections" },
      {
        type: "ul",
        items: [
          "Mismatched account info: the port request must exactly match the name, address, and account number on the losing carrier's record. Pull a copy of your latest bill first — that's the source of truth.",
          "Cancelling old service too early: never cancel before the port completes. A cancelled number can be released back to the pool and is much harder to recover.",
          "Ignoring the CSR: request a Customer Service Record from your current carrier if anything is uncertain. It shows the exact data the port must match.",
        ],
      },
      { type: "h2", text: "What it should cost" },
      {
        type: "p",
        text: "Nothing. Some providers still charge $15–$25 per ported number; treat that as a red flag for how the rest of the relationship will go. Talk Is Cheap ports every number free, manages the FOC dates, and keeps you live on temporary numbers so the transition is invisible to your customers.",
      },
      { type: "h2", text: "Your porting checklist" },
      {
        type: "ul",
        items: [
          "Grab a recent bill (account number, authorized name, service address)",
          "List every number you own — main lines, fax, toll-free, tracking numbers",
          "Sign the new provider's Letter of Authorization (LOA)",
          "Keep old service active until the confirmed port date",
          "Test inbound and outbound on port day, then cancel the old account",
        ],
      },
    ],
  },
  {
    slug: "cost-of-missed-calls-small-business",
    title: "The Real Cost of Missed Calls: Numbers That Should Scare You",
    description:
      "Small businesses miss 20–30% of inbound calls, 75% of callers won't leave a voicemail, and 85% who don't reach you never call back. Here's the revenue math — and the fixes, ranked by ROI.",
    date: "2026-06-30",
    readMinutes: 6,
    category: "Guides",
    blocks: [
      {
        type: "p",
        text: "Every business owner knows they miss calls. Almost none have done the math on what those calls cost — because the number is uncomfortable. Let's do it anyway.",
      },
      { type: "h2", text: "The statistics, stacked" },
      {
        type: "ul",
        items: [
          "Small businesses miss roughly 20–30% of inbound calls (industry studies range 22–38% depending on vertical)",
          "About 75–80% of callers who hit voicemail hang up without leaving a message",
          "A large majority of callers who can't reach a business simply call the next result — they don't retry",
          "30%+ of calls to appointment-based businesses arrive outside business hours",
          "Median response time matters too: leads contacted within 5 minutes convert dramatically better than leads contacted after 30",
        ],
      },
      { type: "h2", text: "The math for a real business" },
      {
        type: "p",
        text: "Take a plumbing company getting 200 inbound calls a month with a $350 average ticket. Miss 25% — that's 50 calls. Even assuming only half were bookable jobs and you'd have won half of those, that's 12–13 lost jobs: $4,300+ a month, over $50,000 a year, leaking through a phone system that shrugs and says 'leave a message.' Run the same math on a dental practice ($200+ per visit, higher lifetime value) or a law firm (four-figure matters) and it gets worse.",
      },
      { type: "h2", text: "The fixes, ranked by ROI" },
      {
        type: "ul",
        items: [
          "1. Missed-call auto-text — near-zero cost, instant deployment, catches the 75% who won't leave voicemail by moving the conversation to SMS. This is the single highest-ROI feature in business communications.",
          "2. AI receptionist — answers the 30%+ of after-hours calls, books directly into your calendar, escalates emergencies. Pays for itself with a handful of captured bookings a month.",
          "3. Smarter routing — ring groups and overflow rules so calls cascade to mobile apps instead of dying at an unmanned desk.",
          "4. Queue callback — for busy periods, 'press 1 and we'll call you back' beats hold-music abandonment.",
          "5. Analytics — you can't fix what you don't measure. Answer-rate dashboards and missed-call reports make the leak visible weekly.",
        ],
      },
      { type: "h2", text: "The takeaway" },
      {
        type: "p",
        text: "You don't have a marketing problem; you have an answering problem. Before spending another dollar making the phone ring, spend $14.99 a seat making sure someone — or something — answers it. Every feature on the list above is built into Talk Is Cheap.",
      },
    ],
  },
  {
    slug: "hipaa-compliant-texting-guide",
    title: "HIPAA-Compliant Texting for Medical and Dental Practices: What Actually Matters",
    description:
      "Yes, your practice can text patients legally. What HIPAA actually requires for SMS, what a BAA covers, the difference between appointment reminders and PHI, and a compliance checklist.",
    date: "2026-06-18",
    readMinutes: 8,
    category: "Compliance",
    blocks: [
      {
        type: "p",
        text: "Patients overwhelmingly prefer texting their healthcare providers — and most front desks are terrified to do it. The fear is understandable but mostly misplaced: HIPAA does not ban texting. It bans being careless with protected health information (PHI). With the right platform configuration and a signed BAA, texting is not just legal — it's become standard of care for patient communication.",
      },
      { type: "h2", text: "What HIPAA actually requires" },
      {
        type: "ul",
        items: [
          "A Business Associate Agreement (BAA) with any vendor that transmits or stores PHI on your behalf — including your communications platform",
          "Access controls: only authorized staff can view patient conversations, with unique logins (no shared 'frontdesk' account)",
          "Audit logging: a record of who accessed what, when",
          "Encryption in transit for messages moving through the platform",
          "Reasonable safeguards against misdirected messages (verified numbers, contact matching)",
        ],
      },
      { type: "h2", text: "Reminders vs. PHI: the line that matters" },
      {
        type: "p",
        text: "Appointment reminders with limited information — name, date, time, provider — are broadly permissible under HIPAA's treatment-communication provisions, and patients can consent to more. The danger zone is clinical detail: diagnoses, test results, medications in an unencrypted SMS body. The practical pattern: use texts for logistics (confirmations, reschedules, balance notices, form links) and pull anything clinical behind a secure link or a phone call.",
      },
      { type: "h2", text: "Patient consent, simply" },
      {
        type: "p",
        text: "Get texting consent at intake (a checkbox on your digital forms), honor opt-outs automatically, and document both. Standard SMS is technically unencrypted on the carrier leg — which is why consent plus minimum-necessary content is the compliant pattern the industry has settled on, and why regulators have focused enforcement on breaches and carelessness, not on reminder texts.",
      },
      { type: "h2", text: "Your compliance checklist" },
      {
        type: "ul",
        items: [
          "Signed BAA with your communications vendor (Talk Is Cheap includes one on Real Talk and above)",
          "Individual staff logins with role-based access to conversations and recordings",
          "Texting consent captured at intake and stored",
          "Templates reviewed so automated messages carry logistics, not clinical detail",
          "Audit logs enabled; a named person reviews access quarterly",
          "Staff trained: clinical content goes to secure channels, not SMS bodies",
        ],
      },
      { type: "h2", text: "The bottom line" },
      {
        type: "p",
        text: "If your current vendor waves at 'HIPAA-friendly' but won't sign a BAA, that's your answer about them. Compliance is a configuration and a contract, not a premium SKU — and refusing to text patients in 2026 doesn't protect them, it just sends them to a practice that will.",
      },
    ],
  },
  {
    slug: "a2p-10dlc-business-texting-rules",
    title: "A2P 10DLC Explained: The Business Texting Rules Nobody Told You About",
    description:
      "If your business texts customers from a regular phone number, US carriers require A2P 10DLC registration. What it is, what it costs, why unregistered texts get filtered, and how to get compliant.",
    date: "2026-06-05",
    readMinutes: 7,
    category: "Compliance",
    blocks: [
      {
        type: "p",
        text: "Somewhere around 2021, US mobile carriers quietly changed the rules of business texting: any application-to-person (A2P) message sent from a standard 10-digit long code (10DLC) number must come from a registered brand and campaign. Unregistered traffic gets throttled, filtered, or silently dropped — which is why some businesses swear 'our texts stopped arriving' and never find out why.",
      },
      { type: "h2", text: "The vocabulary, decoded" },
      {
        type: "ul",
        items: [
          "A2P (application-to-person): any text sent through software — reminders, confirmations, marketing, missed-call auto-texts. Basically everything a business platform sends.",
          "10DLC: a normal local phone number used for that A2P traffic (as opposed to short codes or toll-free)",
          "Brand registration: your legal business identity (EIN, name, address) registered with The Campaign Registry (TCR)",
          "Campaign registration: a declaration of what you send — customer care, appointment reminders, marketing — with sample messages",
        ],
      },
      { type: "h2", text: "What happens if you skip it" },
      {
        type: "p",
        text: "Carriers score and filter unregistered A2P traffic aggressively. Symptoms: messages delivered to some carriers but not others, sudden delivery drops after volume increases, and per-message carrier surcharges at punitive unregistered rates. There's no error message — your reminder simply never arrives, and your no-show rate quietly climbs.",
      },
      { type: "h2", text: "What it costs and how long it takes" },
      {
        type: "ul",
        items: [
          "Brand registration: one-time fee, typically $4–$50 depending on vetting level",
          "Campaign fees: usually $2–$15 per month per campaign, passed through from TCR/carriers",
          "Timeline: days to a couple of weeks for standard brands; low-volume 'sole proprietor' paths exist for very small senders",
          "The right answer: your provider should file and manage all of this for you during onboarding — it's paperwork, not rocket science",
        ],
      },
      { type: "h2", text: "Staying compliant after registration" },
      {
        type: "p",
        text: "Registration is table stakes; behavior keeps you deliverable. Honor STOP/opt-out instantly (good platforms automate it), get consent before marketing blasts, keep message content consistent with your registered campaign, and don't buy number lists — ever. Talk Is Cheap handles brand and campaign registration during onboarding and automates opt-out handling, so your reminders keep landing while the competition wonders where their texts went.",
      },
    ],
  },
  {
    slug: "ucaas-feature-checklist-small-business",
    title: "The 15-Point UCaaS Feature Checklist (Print This Before You Buy)",
    description:
      "A practical, demo-ready checklist for evaluating business phone platforms in 2026 — the features that matter, the questions that expose weak vendors, and the traps hiding in the contract.",
    date: "2026-05-15",
    readMinutes: 8,
    category: "Buyer Guides",
    blocks: [
      {
        type: "p",
        text: "Every UCaaS datasheet claims the same forty features. The difference between platforms shows up in the demo — and in the contract. Here's the checklist we'd use to shop our own category, including the questions that make weak vendors sweat.",
      },
      { type: "h2", text: "Core telephony (make them demo, not describe)" },
      {
        type: "ul",
        items: [
          "1. Visual auto-attendant editor — can YOU change the phone tree at 5 PM on a Friday, or does it take a support ticket?",
          "2. Ring groups and queues with overflow — where does a call go when nobody answers? Make them trace it live.",
          "3. Call park and warm transfer — front-desk basics; clunky here means clunky everywhere",
          "4. Voicemail transcription delivered to email/app — reading beats dialing into a mailbox",
          "5. Mobile app parity — place, receive, transfer, and text from the business number on a personal phone",
        ],
      },
      { type: "h2", text: "The revenue features (where platforms separate)" },
      {
        type: "ul",
        items: [
          "6. Missed-call auto-text — automatic, per-line configurable, with templates",
          "7. Shared SMS inbox — the whole team sees and answers business texts with full history",
          "8. Automated appointment reminders with natural-language confirmation handling",
          "9. Screen pop with CRM/PMS context on inbound calls — demo it against YOUR system, not their demo CRM",
          "10. Review requests and reputation monitoring built in",
        ],
      },
      { type: "h2", text: "Platform and trust" },
      {
        type: "ul",
        items: [
          "11. Uptime: geo-redundant infrastructure and a written 99.999% target, plus automatic failover to mobile when office internet dies",
          "12. Compliance: BAA available? Call recording permissions? Audit logs? (Even if you don't need HIPAA, the answer reveals engineering maturity)",
          "13. Analytics: answer rate, missed calls, response times — per user and per line, exportable",
          "14. Integrations: two-way sync with your actual CRM/PMS, plus API/webhooks for the future",
          "15. AI: receptionist, transcription, and call intelligence — included in a tier, or a per-seat ransom?",
        ],
      },
      { type: "h2", text: "The contract traps" },
      {
        type: "p",
        text: "Ask these four questions in writing: What are the one-time fees, itemized? What does porting cost? What's the term and what happens at renewal? What exactly requires an upgrade tier? A vendor that answers crisply is safe. A vendor that says 'your account executive will put together a custom quote' is telling you the price is whatever they think you'll tolerate. (Talk Is Cheap's answers: $0, $0, month-to-month available, and the pricing page is the whole truth.)",
      },
    ],
  },
  {
    slug: "voip-call-quality-guide",
    title: "VoIP Call Quality: Why Calls Sound Bad and How to Fix It",
    description:
      "Choppy audio, robot voice, one-way sound — VoIP problems are almost always network problems. A plain-English guide to bandwidth, jitter, latency, and the router settings that fix 90% of issues.",
    date: "2026-04-22",
    readMinutes: 7,
    category: "How-To",
    blocks: [
      {
        type: "p",
        text: "Here's an industry secret: when cloud phone calls sound bad, the phone provider is rarely the culprit. HD voice codecs are excellent and carrier networks are solid. The problem lives in the last hundred feet — your internet connection, your router, your Wi-Fi. The good news: that means you can fix it.",
      },
      { type: "h2", text: "The three numbers that decide call quality" },
      {
        type: "ul",
        items: [
          "Bandwidth: each HD call needs only ~100 Kbps each way. Twenty simultaneous calls fit in 2 Mbps — bandwidth is almost never the real issue on business internet.",
          "Latency: the round-trip delay. Under 150ms one-way is fine; past 300ms conversations start talking over each other.",
          "Jitter: variation in packet arrival timing — the real villain. Jitter above ~30ms causes the choppy, underwater, robot-voice artifacts people blame on 'bad VoIP.'",
        ],
      },
      { type: "h2", text: "Symptom → cause, quickly" },
      {
        type: "ul",
        items: [
          "Choppy/robotic audio: jitter or packet loss — usually Wi-Fi interference or a saturated upload link",
          "One-way audio: firewall/NAT issue — SIP ALG is the usual suspect (see below)",
          "Echo: usually a headset/speakerphone acoustics problem, not the network",
          "Calls dropping at exactly N minutes: router session timeout settings",
          "Bad quality every day at the same time: something on your network (backups, cloud sync, the lunch-hour streamers) is flooding the upload",
        ],
      },
      { type: "h2", text: "The five fixes that solve 90% of problems" },
      {
        type: "ul",
        items: [
          "1. Disable SIP ALG on your router. It's enabled by default on many routers and mangles VoIP traffic. This single setting causes more one-way-audio tickets than everything else combined.",
          "2. Turn on QoS and prioritize voice traffic so a big file upload can't starve your calls",
          "3. Wire the desk phones. Ethernet doesn't have interference; Wi-Fi does. Save wireless for the mobile apps.",
          "4. Check your upload, not your download. Business cable plans with 300 down / 10 up fail on the 10.",
          "5. Replace the ISP's combo modem/router if it's more than a few years old — aging consumer gear is a jitter factory.",
        ],
      },
      { type: "h2", text: "What your provider owes you" },
      {
        type: "p",
        text: "A serious platform monitors call quality metrics (MOS scores, jitter, packet loss) per call and will show you the data instead of guessing. Talk Is Cheap support reads those graphs with you, ships pre-provisioned phones with sane QoS defaults, and fails calls over to mobile apps automatically when your office internet has a bad day — because 'sounds great' is the whole product.",
      },
    ],
  },
  {
    slug: "switching-business-phone-providers-checklist",
    title: "Switching Business Phone Providers: The Zero-Drama Checklist",
    description:
      "A step-by-step migration plan for moving your business to a new phone platform — what to do in each of the three weeks, who to notify, and how to switch without missing a single call.",
    date: "2026-04-08",
    readMinutes: 6,
    category: "How-To",
    blocks: [
      {
        type: "p",
        text: "Businesses stay in bad phone relationships for the same reason people keep bad gyms: switching feels like a project. It isn't, really — a well-run migration takes about three weeks of elapsed time and a few hours of your attention, and your customers never notice it happened. Here's the whole plan.",
      },
      { type: "h2", text: "Week 1: Inventory and sign-up" },
      {
        type: "ul",
        items: [
          "List every number you own (main, fax, toll-free, tracking lines) and every user who needs a seat",
          "Sketch your call flow on one page: what greets callers, where calls route during/after hours, who's in which ring group",
          "Pull a current bill from the old provider — it's the source of truth porting will be validated against",
          "Sign up with the new provider and submit the port request (with the Letter of Authorization) on day one; porting runs in the background the whole time",
          "Do NOT cancel or even warn the old provider yet — some retaliate with 'retention' friction",
        ],
      },
      { type: "h2", text: "Week 2: Build and test in parallel" },
      {
        type: "ul",
        items: [
          "Configure the new system on temporary numbers: auto-attendant, hours, ring groups, voicemail greetings, missed-call text templates",
          "Install desktop/mobile apps for every user; plug in desk phones if you ordered them",
          "Connect integrations (CRM/PMS, calendars) and verify screen pop with a test contact",
          "Test the full journey: call the temp number, ride the phone tree, miss a call on purpose, confirm the auto-text fires, leave a voicemail, read the transcription",
          "Train the team — 30 minutes covers transfer, park, and the shared inbox",
        ],
      },
      { type: "h2", text: "Week 3: The flip" },
      {
        type: "ul",
        items: [
          "Confirm the port date (FOC) with the new provider",
          "On port day: make a test inbound and outbound call on every main number after the flip",
          "Update the numbers nowhere — that's the point of porting; your number came with you",
          "Watch analytics for a week: answer rate, missed-call texts sent, voicemail volume",
          "Now cancel the old account — in writing, effective after the port — and check the final bill for fictional fees",
        ],
      },
      { type: "h2", text: "The one thing to get in writing" },
      {
        type: "p",
        text: "Before you start, ask the new provider: 'Who does the porting paperwork, and what happens if the port is delayed?' The right answer is 'we do, and you stay live on temporary forwarding either way.' At Talk Is Cheap, onboarding runs this entire checklist with you, porting is free, and most teams are making calls on the new system the same day they sign up.",
      },
    ],
  },
  {
    slug: "phone-system-vs-contact-center",
    title: "Phone System vs. Contact Center: When Is It Time to Upgrade?",
    description:
      "Queues, wallboards, monitor/whisper/barge, call intelligence — contact center tools used to cost six figures. Here are the five signals your business has outgrown a plain phone system.",
    date: "2026-03-20",
    readMinutes: 6,
    category: "Guides",
    blocks: [
      {
        type: "p",
        text: "A phone system connects calls. A contact center manages demand: it queues callers intelligently, shows supervisors what's happening in real time, and measures every conversation. The line between the two used to be a six-figure contract; in 2026 it's a plan tier. The question is whether you need it — and there are five reliable signals.",
      },
      { type: "h2", text: "The five signals you've outgrown a phone system" },
      {
        type: "ul",
        items: [
          "1. Callers complain about busy signals or endless ringing at peak times — you need queues with hold positions and callback, not a bigger ring group",
          "2. You have 3+ people whose main job is answering calls — once phone work is a team, someone needs to see the team: live status, calls waiting, service level",
          "3. You're coaching blind — if the only quality feedback is 'a customer complained,' you need recording, transcripts, and monitor/whisper/barge",
          "4. Revenue leaks between calls — callers who asked about services but didn't book vanish; call intelligence flags them into follow-up lists automatically",
          "5. You manage multiple locations or teams and can't compare them — per-queue and per-location analytics end the anecdote wars",
        ],
      },
      { type: "h2", text: "What you get at the contact-center tier" },
      {
        type: "ul",
        items: [
          "Skills-based routing: callers reach the right person first, not just the next person",
          "Queue mechanics: position announcements, estimated wait, callback instead of hold",
          "Live wallboards: calls in queue, agent status, answer rate — visible to the people who can act on it",
          "Supervisor tools: listen silently, whisper coaching to the agent, or barge in to save a call",
          "AI call intelligence: every call transcribed, summarized, sentiment-scored, and mined for missed bookings",
        ],
      },
      { type: "h2", text: "What it should cost" },
      {
        type: "p",
        text: "Legacy contact center as a service (CCaaS) runs $75–$150 per agent per month, on top of your phone system, with per-minute usage fees lurking in the appendix. That pricing made sense when the software was exotic; it isn't anymore. Talk Is Cheap includes the full contact center layer — queues, wallboards, supervisor modes, call intelligence — in the Big Talk tier at $44.99, on the same platform as everything else. If your call volume is a team sport, stop running it without a scoreboard.",
      },
    ],
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
