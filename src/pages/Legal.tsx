import { SEO } from "@/components/SEO";
import { SITE_EMAIL } from "@/data/site";

function LegalShell({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="container pt-36 pb-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: {updated}</p>
        <div className="space-y-6 text-muted-foreground leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:pt-4">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Privacy() {
  return (
    <>
      <SEO />
      <LegalShell title="Privacy Policy" updated="July 6, 2026">
        <p>
          Talk Is Cheap ("we," "us") respects your privacy. This policy describes what we collect on this website and
          how we use it.
        </p>
        <h2>Information we collect</h2>
        <p>
          When you contact us or request a demo, we collect the information you provide: name, company, email, phone
          number, and your message. We also collect standard analytics data (pages visited, referrer, approximate
          location, device type) to understand how the site is used.
        </p>
        <h2>How we use it</h2>
        <p>
          To respond to your inquiries, provide and improve our services, and — only if you ask — send you product
          updates. We do not sell your personal information. We do not share it with third parties except service
          providers who help us operate (hosting, analytics, email), bound by confidentiality.
        </p>
        <h2>Cookies</h2>
        <p>
          We use essential cookies for site functionality and lightweight analytics cookies to measure traffic. You can
          disable cookies in your browser; the marketing site will keep working.
        </p>
        <h2>Data retention & your rights</h2>
        <p>
          We keep inquiry data as long as needed to serve you and as required by law. You may request access,
          correction, or deletion of your personal data at any time by emailing{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="text-primary hover:underline">{SITE_EMAIL}</a>.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy: <a href={`mailto:${SITE_EMAIL}`} className="text-primary hover:underline">{SITE_EMAIL}</a>.
        </p>
      </LegalShell>
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEO />
      <LegalShell title="Terms of Service" updated="July 6, 2026">
        <p>
          These terms govern your use of the talkischeap.io website. Service subscriptions are governed by the service
          agreement provided at signup.
        </p>
        <h2>Use of this site</h2>
        <p>
          You may browse, link to, and share this site freely. You may not scrape it for spam purposes, attempt to
          disrupt it, or misrepresent affiliation with Talk Is Cheap.
        </p>
        <h2>Content</h2>
        <p>
          Site content is provided for general information. Pricing, features, and availability are subject to change;
          the current pricing page and your service agreement control. Blog content is opinion and general guidance,
          not professional advice for your specific situation.
        </p>
        <h2>Intellectual property</h2>
        <p>
          The Talk Is Cheap name, logo, and site content are our property or used with permission. Third-party product
          names mentioned on this site are trademarks of their respective owners; mention does not imply endorsement.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          This website is provided "as is." To the maximum extent permitted by law, we are not liable for damages
          arising from use of the website itself. Service-level commitments for the platform are defined in your
          service agreement.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms: <a href={`mailto:${SITE_EMAIL}`} className="text-primary hover:underline">{SITE_EMAIL}</a>.
        </p>
      </LegalShell>
    </>
  );
}
