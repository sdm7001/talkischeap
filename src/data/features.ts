import {
  Phone,
  MessageSquare,
  Video,
  Bot,
  Headset,
  Plug,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface FeatureSection {
  title: string;
  body: string;
}

export interface Feature {
  slug: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  /** Short card blurb */
  blurb: string;
  /** Hero paragraph on the detail page */
  intro: string;
  sections: FeatureSection[];
  stats: { value: string; label: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const FEATURES: Feature[] = [
  {
    slug: "cloud-voice",
    icon: Phone,
    name: "Cloud Voice",
    tagline: "A phone system that sounds expensive. It isn't.",
    blurb:
      "Carrier-grade VoIP with unlimited US/Canada calling, smart routing, visual voicemail, and apps for every device.",
    intro:
      "Talk Is Cheap runs on geo-redundant, carrier-grade voice infrastructure — the same class of network the big providers charge triple for. Unlimited calling across the US and Canada, HD voice on every call, and a 99.999% uptime target, from $14.99 per user.",
    sections: [
      {
        title: "Answer smarter with Screen Pop",
        body: "The moment a call rings, your team sees who's calling — name, company, upcoming appointments, outstanding balance, notes, and conversation history pulled live from your CRM or practice management system. No more \"can I get your account number?\" Every call starts three steps ahead.",
      },
      {
        title: "Routing that runs itself",
        body: "Build multi-level auto-attendants with a visual editor. Time-of-day and holiday routing, ring groups (simultaneous or cascading), call queues with custom hold music, call park retrievable from any device, and per-department numbers each with their own voicemail, hours, and missed-call rules.",
      },
      {
        title: "Voicemail you can read",
        body: "Every voicemail is transcribed by AI and delivered to your inbox and app in seconds. Shared departmental mailboxes, tagging, forwarding, and custom greetings per schedule — so nothing sits unheard until Monday.",
      },
      {
        title: "Never lose a missed call again",
        body: "Every missed call triggers an instant, customizable text back to the caller. Businesses miss 20–30% of inbound calls, and 75% of those callers never try again. With missed-call auto-text, they don't have to — the conversation just moves to SMS.",
      },
      {
        title: "Take it anywhere",
        body: "Desk phones (Yealink, pre-provisioned and drop-shipped), a desktop app for Windows and Mac, browser calling, and full-featured iOS/Android apps. Switch a live call between devices mid-conversation. Your office number goes wherever you do — your personal number stays private.",
      },
      {
        title: "Record, transcribe, comply",
        body: "Secure call recording with per-role permission controls, AI transcription and summaries, and encrypted storage. TLS/SRTP encryption on every call, SOC 2-aligned controls, and HIPAA-capable configurations with a BAA available.",
      },
    ],
    stats: [
      { value: "99.999%", label: "uptime target" },
      { value: "Unlimited", label: "US/Canada calling" },
      { value: "<40ms", label: "median network latency" },
    ],
    metaTitle: "Cloud Business Phone System | VoIP That Costs Less | Talk Is Cheap",
    metaDescription:
      "Carrier-grade cloud VoIP: unlimited US/Canada calling, auto-attendant, call queues, screen-pop caller info, AI voicemail transcription, missed-call auto-text. From $14.99/user.",
  },
  {
    slug: "messaging",
    icon: MessageSquare,
    name: "Messaging & Unified Inbox",
    tagline: "Every conversation. One inbox. Zero dropped threads.",
    blurb:
      "Two-way business SMS/MMS, webchat, and team chat in a single shared inbox with templates, tags, and automations.",
    intro:
      "Customers text businesses they like — and ignore businesses that make them call. Talk Is Cheap gives your whole team two-way SMS/MMS from your business number, a website text widget, and internal team chat, all flowing into one unified inbox anyone can pick up.",
    sections: [
      {
        title: "One inbox for everything",
        body: "SMS, MMS, webchat submissions, voicemail transcriptions, and faxes land in a single shared view. Tag conversations, filter by tag, pop threads into their own window, and hand off between teammates with full history intact. No customer ever has to repeat themselves.",
      },
      {
        title: "Templates with dynamic fields",
        body: "Canned responses that don't feel canned — templates auto-fill the customer's name, appointment time, office, and balance. Schedule-send composes now and delivers at the right moment. After-hours auto-replies keep expectations set while you sleep.",
      },
      {
        title: "Automated outreach that books revenue",
        body: "Appointment reminders on multi-touch cadences, natural-language confirmations (AI understands \"yep see u then\"), recall and reactivation campaigns for lapsed customers, birthday messages, review requests, and payment reminders — each with its own templates, timing rules, and a queue view showing sent/scheduled/failed status.",
      },
      {
        title: "Text from your website",
        body: "A lightweight webchat widget captures a visitor's name and mobile number, then continues the conversation as a normal SMS thread — no live-chat staffing required. New contacts save automatically. QR-code entry points bring print and signage into the same inbox.",
      },
      {
        title: "Bulk messaging with a brain",
        body: "Segment by status, tag, or last-visit date and send compliant bulk SMS campaigns for promotions and reactivation — with per-tier monthly allotments and automatic opt-out handling.",
      },
      {
        title: "Team chat built in",
        body: "1:1 and group channels for internal coordination — \"patient arrived,\" \"line 2 escalation\" — with desktop and mobile notifications. One less app to pay for.",
      },
    ],
    stats: [
      { value: "98%", label: "of texts read within 3 min" },
      { value: "10x", label: "response rate vs email" },
      { value: "1", label: "inbox for every channel" },
    ],
    metaTitle: "Business Texting & Unified Inbox | SMS for Teams | Talk Is Cheap",
    metaDescription:
      "Two-way business SMS/MMS, website text widget, automated reminders and review requests, team chat — all in one shared unified inbox. Talk Is Cheap UCaaS.",
  },
  {
    slug: "video-meetings",
    icon: Video,
    name: "Video Meetings",
    tagline: "HD meetings included. Cancel that other subscription.",
    blurb:
      "One-click HD video with screen share, recording, and dial-in — bundled into every plan, not sold as an add-on.",
    intro:
      "Most UCaaS vendors charge extra for video or cap it until you upgrade. Talk Is Cheap includes HD video meetings on every plan — because a meeting shouldn't cost more than the conversation is worth.",
    sections: [
      {
        title: "One click from anywhere",
        body: "Start or join meetings from the desktop app, browser, or mobile — no downloads for guests. Personal meeting rooms with custom links, calendar integration for Google and Microsoft 365, and PSTN dial-in for the one person who's always driving.",
      },
      {
        title: "Everything a meeting needs",
        body: "Screen sharing, presenter controls, virtual backgrounds, chat with file sharing, hand-raise, and host mute controls. Up to 100 participants on Real Talk and 250 on Big Talk.",
      },
      {
        title: "Record it, transcribe it, move on",
        body: "Cloud recording with AI transcription and searchable summaries. Share a recap link instead of scheduling a follow-up meeting about the meeting.",
      },
      {
        title: "Escalate a call to a meeting",
        body: "On a phone call and need to show your screen? Elevate any voice call to a video meeting in one tap without hanging up or sending a new link.",
      },
    ],
    stats: [
      { value: "250", label: "participants max" },
      { value: "$0", label: "extra per month" },
      { value: "1-click", label: "voice-to-video escalation" },
    ],
    metaTitle: "HD Video Meetings Included | No Add-On Fees | Talk Is Cheap",
    metaDescription:
      "HD video meetings with screen share, recording, AI transcription, and dial-in — included in every Talk Is Cheap plan. Replace your separate video subscription.",
  },
  {
    slug: "ai-receptionist",
    icon: Bot,
    name: "AI Receptionist",
    tagline: "Answers 24/7. Never sick. Never salty.",
    blurb:
      "An AI that answers calls and texts around the clock — books appointments, answers FAQs, and hands off to humans with full context.",
    intro:
      "Your best receptionist answers every call on the first ring, speaks multiple languages, books appointments straight into your calendar, and works nights, weekends, and holidays. Ours costs a fraction of a salary — and it never puts anyone on hold.",
    sections: [
      {
        title: "Voice that actually converses",
        body: "The AI Receptionist answers in natural conversational speech, handles FAQs (hours, directions, insurance, pricing), books and reschedules appointments against your live calendar, and takes structured messages for anything it can't resolve. Multilingual out of the box.",
      },
      {
        title: "Text follow-up on every missed call",
        body: "If a caller hangs up or you're closed, the AI engages them by SMS within seconds — full conversations, not canned autoresponders. It can complete a booking entirely over text.",
      },
      {
        title: "Human handoff with context",
        body: "When a conversation needs a person, the AI escalates with the entire transcript and caller record attached. Your team picks up mid-conversation, not from scratch. Every AI interaction lands in the unified inbox for review.",
      },
      {
        title: "Guardrails you control",
        body: "You define what the AI may answer, what it must escalate, and the exact tone of voice. Review dashboards show every conversation, resolution rates, and booked-appointment attribution so you can see precisely what it's earning you.",
      },
    ],
    stats: [
      { value: "24/7/365", label: "coverage" },
      { value: "<1s", label: "answer time" },
      { value: "30%+", label: "of calls arrive after hours" },
    ],
    metaTitle: "AI Receptionist for Business | 24/7 Call & Text Answering | Talk Is Cheap",
    metaDescription:
      "AI receptionist answers calls and texts 24/7, books appointments, answers FAQs, and escalates to staff with full context. Built into the Talk Is Cheap platform.",
  },
  {
    slug: "contact-center",
    icon: Headset,
    name: "Contact Center",
    tagline: "Big-league call center tools, small-business price tag.",
    blurb:
      "Skills-based queues, live supervisor dashboards, monitor/whisper/barge, and AI call intelligence.",
    intro:
      "When calls are your revenue, you need more than a phone system. Talk Is Cheap's contact center layer adds intelligent queuing, real-time visibility, and AI analysis of every conversation — without the six-figure contact-center contract.",
    sections: [
      {
        title: "Queues that respect people's time",
        body: "Skills-based routing sends callers to the right agent the first time. Position announcements, estimated wait, queue callback (\"press 1 and we'll call you back\"), and overflow rules to other teams, voicemail, or the AI Receptionist.",
      },
      {
        title: "See everything live",
        body: "Real-time wallboards show calls in queue, wait times, agent status, and service level. Supervisors can listen in silently, whisper coaching to the agent, or barge in when a save is needed.",
      },
      {
        title: "AI Call Intelligence",
        body: "Every recorded call is transcribed, summarized, and categorized automatically — by call type, appointment type, and outcome. Sentiment detection flags rough calls for review, and unbooked callers with revenue intent land on a follow-up list so opportunities stop leaking.",
      },
      {
        title: "Coach with data, not vibes",
        body: "Per-agent scorecards: answer rate, handle time, conversion, sentiment trends. Multi-location comparisons for franchises and groups. Export everything or push it to your BI stack.",
      },
    ],
    stats: [
      { value: "100%", label: "of calls transcribed & scored" },
      { value: "3", label: "supervisor modes: monitor / whisper / barge" },
      { value: "0", label: "per-minute surprise fees" },
    ],
    metaTitle: "Cloud Contact Center for SMBs | Queues, Dashboards, AI | Talk Is Cheap",
    metaDescription:
      "Skills-based routing, live supervisor dashboards, monitor/whisper/barge, queue callback, and AI call intelligence — contact center power at SMB pricing.",
  },
  {
    slug: "integrations",
    icon: Plug,
    name: "Integrations",
    tagline: "Plays nice with the software you already pay for.",
    blurb:
      "100+ integrations: CRMs, practice management systems, calendars, helpdesks — with two-way data sync.",
    intro:
      "A phone system that doesn't know your customers is just a phone. Talk Is Cheap syncs with the systems your business runs on, so every call, text, and payment is context-aware — and everything you do writes back.",
    sections: [
      {
        title: "CRM & sales",
        body: "Salesforce, HubSpot, Pipedrive, Zoho, and more. Calls log automatically with recordings and transcripts attached, texts appear on the contact timeline, and click-to-call works from any record.",
      },
      {
        title: "Healthcare & practice management",
        body: "Two-way sync with leading dental, medical, veterinary, and optometry PMS platforms: contacts, appointments, balances, and recall status flow in; confirmations, form data, and payments write back. Screen Pop shows the patient record before you say hello.",
      },
      {
        title: "Calendars, helpdesks & everything else",
        body: "Google Workspace and Microsoft 365 (SSO, calendar, contacts), Zendesk, Intercom, Slack notifications, and Zapier/webhooks/REST API for the long tail. If it has an API, we can talk to it.",
      },
      {
        title: "Built on open standards",
        body: "Full REST API, webhooks for every event (call started, missed, voicemail left, text received, payment completed), and SDK access on Big Talk. Your data is yours — export anytime.",
      },
    ],
    stats: [
      { value: "100+", label: "native integrations" },
      { value: "2-way", label: "data sync" },
      { value: "REST", label: "API + webhooks included" },
    ],
    metaTitle: "UCaaS Integrations | CRM, PMS, Calendar Sync | Talk Is Cheap",
    metaDescription:
      "100+ integrations with two-way sync: Salesforce, HubSpot, dental/medical PMS, Google, Microsoft 365, Zapier, and a full REST API. Talk Is Cheap UCaaS.",
  },
  {
    slug: "analytics",
    icon: BarChart3,
    name: "Analytics & Insights",
    tagline: "Know what every ring is worth.",
    blurb:
      "Phone, message, review, and revenue-opportunity analytics in dashboards a human can actually read.",
    intro:
      "Most communication data dies in a CSV nobody opens. Talk Is Cheap turns every call, text, and review into dashboards that answer the questions owners actually ask: Are we answering? Are we converting? Where is money leaking?",
    sections: [
      {
        title: "Phone analytics",
        body: "Inbound/outbound volume, answered vs missed vs abandoned, answer rate, average duration, hourly heatmaps, and per-number source tracking — see which marketing line actually rings.",
      },
      {
        title: "Message analytics",
        body: "Delivery rates, response times, per-user attribution, and automation outcomes: how many reminders converted to confirmations, how many recall texts became bookings.",
      },
      {
        title: "Missed-revenue radar",
        body: "AI flags callers who asked about services but didn't book, missed calls that never got a follow-up, and quotes that went quiet — compiled into a daily follow-up list your team can work through before lunch.",
      },
      {
        title: "Morning huddle view",
        body: "One screen for the daily standup: yesterday's call performance, today's schedule, outstanding follow-ups, and review activity. Multi-location filters for groups and franchises, with exportable reports for owners and investors.",
      },
    ],
    stats: [
      { value: "15+", label: "prebuilt dashboards" },
      { value: "Daily", label: "missed-revenue follow-up list" },
      { value: "CSV/API", label: "export everything" },
    ],
    metaTitle: "Communication Analytics & Call Reporting | Talk Is Cheap",
    metaDescription:
      "Phone, message, and review analytics plus AI missed-revenue detection. Dashboards that show answer rates, conversions, and where money leaks. Talk Is Cheap.",
  },
];

export const getFeature = (slug: string) => FEATURES.find((f) => f.slug === slug);
