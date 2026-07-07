const INTEGRATIONS = [
  "Salesforce", "HubSpot", "Microsoft 365", "Google Workspace", "Zapier", "Zendesk",
  "Pipedrive", "Zoho CRM", "Clio", "Slack", "Dentrix", "Open Dental",
  "Eaglesoft", "Intercom", "Calendly", "QuickBooks", "Stripe", "ServiceTitan",
];

export function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-8" aria-label="Integration partners">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-4">
        {[...INTEGRATIONS, ...INTEGRATIONS].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="glass rounded-full px-6 py-2.5 text-sm font-medium text-muted-foreground whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
