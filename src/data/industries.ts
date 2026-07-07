import { Stethoscope, Scale, Home, Wrench, type LucideIcon } from "lucide-react";

export interface Industry {
  slug: string;
  icon: LucideIcon;
  name: string;
  headline: string;
  blurb: string;
  intro: string;
  painPoints: string[];
  solutions: { title: string; body: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    icon: Stethoscope,
    name: "Healthcare & Dental",
    headline: "The front desk, finally off the phones",
    blurb:
      "PMS-synced calls, appointment reminders that confirm themselves, and HIPAA-capable messaging for dental, medical, veterinary, and optometry practices.",
    intro:
      "Practices live and die by the front desk phone — and every missed call is a missed patient. Talk Is Cheap syncs with your practice management system so every call arrives with the patient's chart context, every no-show risk gets a reminder, and every missed call gets an instant text back.",
    painPoints: [
      "Front desk staff juggling ringing phones and in-person patients",
      "No-shows costing $200+ per empty chair",
      "Recall lists nobody has time to call",
      "Compliance anxiety around texting patients",
    ],
    solutions: [
      {
        title: "Screen Pop with chart context",
        body: "Inbound calls show the patient's name, upcoming appointments, recall status, and balance — synced from your PMS — before anyone picks up.",
      },
      {
        title: "Reminders that fill the schedule",
        body: "Multi-touch appointment reminders with natural-language confirmation that writes back to the PMS. Cancellation? The waitlist gets texted automatically with open slots.",
      },
      {
        title: "HIPAA-capable messaging",
        body: "Encrypted channels, access controls, audit logs, and a BAA on Real Talk and above. Text patients without the compliance cold sweat.",
      },
      {
        title: "AI Receptionist for after-hours",
        body: "30% of patient calls arrive when you're closed. The AI answers, books, and escalates emergencies — so Monday doesn't start with 40 voicemails.",
      },
    ],
    metaTitle: "Phone & Patient Communication for Healthcare Practices | Talk Is Cheap",
    metaDescription:
      "PMS-synced VoIP, automated appointment reminders, HIPAA-capable texting, and a 24/7 AI receptionist for dental, medical, veterinary, and optometry practices.",
  },
  {
    slug: "legal",
    icon: Scale,
    name: "Legal",
    headline: "Every call is billable. Treat it that way.",
    blurb:
      "Call recording, matter-aware caller context, and after-hours intake for law firms that can't afford to miss a client.",
    intro:
      "A missed call at a law firm isn't an inconvenience — it's a client hiring the next firm on the search results. Talk Is Cheap gives firms full call recording, CRM-synced caller context, and an AI intake layer that captures potential clients at 2 AM.",
    painPoints: [
      "Potential clients calling competitors when the line is busy",
      "No record of verbal commitments and phone consultations",
      "Intake details scattered across sticky notes",
      "Partners' personal cells leaking to clients",
    ],
    solutions: [
      {
        title: "Recording & transcription on every line",
        body: "Compliant call recording with role-based access, AI transcripts, and summaries filed against the contact — searchable when the dispute over who-said-what arrives.",
      },
      {
        title: "AI intake, 24/7",
        body: "The AI Receptionist runs your intake script: matter type, urgency, conflict-check basics, callback details — then routes hot leads to the on-call attorney by text.",
      },
      {
        title: "Business number on every device",
        body: "Attorneys call and text from the firm's number on their personal phones. Client sees the firm; attorney keeps their privacy; the firm keeps the thread when anyone leaves.",
      },
      {
        title: "CRM sync",
        body: "Clio, Salesforce, HubSpot and more — every call and message logged to the matter automatically.",
      },
    ],
    metaTitle: "Business Phone System for Law Firms | Call Recording & AI Intake | Talk Is Cheap",
    metaDescription:
      "Law-firm communications: compliant call recording, AI-powered 24/7 client intake, business texting from personal devices, and CRM sync. Talk Is Cheap.",
  },
  {
    slug: "real-estate",
    icon: Home,
    name: "Real Estate",
    headline: "Speed to lead, weaponized",
    blurb:
      "Instant missed-call text-back, listing-line tracking, and mobile-first calling for agents who live in their cars.",
    intro:
      "In real estate, the first agent to respond wins the listing. Talk Is Cheap texts every missed caller back instantly, tracks which listing made the phone ring, and puts your business line on the phone already in your pocket.",
    painPoints: [
      "Leads going cold in the 4 hours between showings",
      "No idea which listing or ad generated the call",
      "Personal cell numbers on yard signs forever",
      "Team leads with zero visibility into agent follow-up",
    ],
    solutions: [
      {
        title: "Missed-call text-back",
        body: "Showing a house at 2 PM? Your missed calls each get an instant text with your booking link. The lead stays warm without you touching the phone.",
      },
      {
        title: "Number-per-listing tracking",
        body: "Spin up tracking numbers per listing, sign, or ad campaign. Analytics show exactly what makes the phone ring — before you renew that ad spend.",
      },
      {
        title: "A real business line in your pocket",
        body: "Full-featured mobile apps mean the brokerage number rides along. Leave the team? The number and every conversation thread stays with the brokerage.",
      },
      {
        title: "AI answering during showings",
        body: "The AI Receptionist answers property questions, captures buyer details, and books showings straight to your calendar while you're mid-tour.",
      },
    ],
    metaTitle: "Phone & Texting Platform for Real Estate Teams | Talk Is Cheap",
    metaDescription:
      "Missed-call text-back, per-listing call tracking, mobile business lines, and AI answering for real-estate agents and teams. Talk Is Cheap UCaaS.",
  },
  {
    slug: "home-services",
    icon: Wrench,
    name: "Home Services",
    headline: "Book the job while your hands are full",
    blurb:
      "Missed-call rescue, text-to-pay, and review automation for HVAC, plumbing, electrical, and every trade that answers phones from a ladder.",
    intro:
      "When you're elbow-deep in a repair, the next customer is calling someone else. Talk Is Cheap catches the call, texts the caller back, books the job, takes the deposit by text, and asks for the five-star review after — automatically.",
    painPoints: [
      "Calls missed on the job = jobs lost to competitors",
      "Chasing checks and card numbers over the phone",
      "Great work, no Google reviews to show for it",
      "Office manager drowning in scheduling calls",
    ],
    solutions: [
      {
        title: "Missed-call rescue",
        body: "Every missed call gets an instant text: \"On a job — what do you need?\" The AI Receptionist can quote hours, capture the address, and book the visit.",
      },
      {
        title: "Text-to-pay",
        body: "Send an invoice link by text from the job site. Customer pays on their phone; deposits for big jobs collected at booking, slashing no-shows.",
      },
      {
        title: "Reviews on autopilot",
        body: "Job done → automatic review request with your Google link, timed while the gratitude is fresh. Watch your map ranking climb.",
      },
      {
        title: "Dispatch-friendly routing",
        body: "Ring the office, overflow to techs by skill and zone, after-hours to the emergency line — configured in a visual editor, changed in seconds.",
      },
    ],
    metaTitle: "Business Phone for HVAC, Plumbing & Home Services | Talk Is Cheap",
    metaDescription:
      "Missed-call text-back, AI booking, text-to-pay, and automated review requests for home service businesses. Never lose a job to a missed call again.",
  },
];

export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);
