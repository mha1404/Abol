import { useState } from "react";
import { faqs } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { scrollToId } from "@/lib/utils";
import { Reveal, Section, SectionHead } from "@/components/ui";
import { ChevronDown, Phone } from "@/components/Icons";

export default function FAQ() {
  const { c, L } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHead eyebrow={c.faqEyebrow} title={c.faqTitle} desc={c.faqDesc} />

      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={L(f.q)} delay={i * 60} className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-start"
                >
                  <span className="text-[0.85rem] font-semibold leading-7">{L(f.q)}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition duration-300 ${
                      isOpen ? "rotate-180 border-copper/40 bg-coppersoft text-copper" : "text-inksoft"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div className="accordion-body" data-open={isOpen}>
                  <div>
                    <p className="px-5 pb-5 text-[0.78rem] leading-8 text-inksoft">{L(f.a)}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="scale" delay={120} className="card bg-dots p-7">
          <h3 className="text-[1rem] font-bold">{c.faqCardTitle}</h3>
          <p className="mt-2.5 text-[0.78rem] leading-7 text-inksoft">{c.faqCardText}</p>
          <div className="mt-6 space-y-3">
            <button type="button" onClick={() => scrollToId("booking")} className="btn btn-primary w-full">
              {c.faqCta}
            </button>
            <button type="button" onClick={() => scrollToId("contact")} className="btn btn-outline w-full">
              <Phone className="h-4 w-4" />
              {c.faqContact}
            </button>
          </div>
          <div className="hairline my-6" />
          <ul className="space-y-3 text-[0.74rem] text-inksoft">
            {[c.faqB1, c.faqB2, c.faqB3].map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-copper">•</span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
