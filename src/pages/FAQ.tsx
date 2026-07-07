import { SEO, breadcrumbLd } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { FAQS } from "@/data/faqs";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQ() {
  return (
    <>
      <SEO jsonLd={[faqLd, breadcrumbLd([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])]} />
      <section className="container pt-36 pb-16">
        <SectionHeading
          as="h1"
          eyebrow="FAQ"
          title="Straight answers. It's kind of our thing."
          subtitle="Everything people ask before switching — pricing, porting, reliability, compliance, and what the AI actually does."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={faq.question} delay={(i % 4) * 60}>
              <details className="glass rounded-xl group" open={i === 0}>
                <summary className="cursor-pointer p-6 font-medium list-none flex justify-between items-center gap-4 font-display">
                  {faq.question}
                  <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <CTASection
        title="Still have a question?"
        subtitle="Call, text, or email us — a US-based human answers. We practice what we sell."
      />
    </>
  );
}
