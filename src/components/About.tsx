import teaching from "@/assets/teaching.jpg";
import { pillars, profile } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { Reveal, Section, SectionHead } from "@/components/ui";
import { Bulb, Chart, Check, Compass, Layers, Spark, Target } from "@/components/Icons";

const pillarIcons = { spark: Spark, chart: Chart, target: Target };

export default function About() {
  const { c, L } = useLang();

  const facts = [
    { icon: Bulb, title: c.aboutFact1, text: c.aboutFact1T },
    { icon: Layers, title: c.aboutFact2, text: c.aboutFact2T },
    { icon: Compass, title: c.aboutFact3, text: c.aboutFact3T },
  ];
  const chips = [c.aboutChip1, c.aboutChip2, c.aboutChip3, c.aboutChip4];

  return (
    <Section id="about">
      <SectionHead eyebrow={c.aboutEyebrow} title={c.aboutTitle} desc={c.aboutDesc} />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="space-y-8">
          <Reveal className="space-y-5 text-[0.92rem] leading-8 text-inksoft">
            {L(profile.about).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {facts.map((f, i) => (
              <Reveal key={f.title} delay={i * 90} className="card p-5">
                <f.icon className="h-5 w-5 text-copper" />
                <p className="mt-3 text-[0.82rem] font-bold">{f.title}</p>
                <p className="mt-1.5 text-[0.72rem] leading-6 text-inksoft">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="scale" className="space-y-6">
          <div className="frame-photo aspect-16/11 w-full">
            <img src={teaching} alt={c.aboutImgAlt} loading="lazy" />
          </div>
          <div className="space-y-3">
            {pillars.map((p) => {
              const Icon = pillarIcons[p.icon as keyof typeof pillarIcons] ?? Spark;
              return (
                <div
                  key={L(p.title)}
                  className="card flex items-start gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-40px_rgba(0,0,0,0.6)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coppersoft text-copper">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.86rem] font-bold">{L(p.title)}</p>
                    <p className="mt-1 text-[0.75rem] leading-6 text-inksoft">{L(p.text)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2">
            {chips.map((t) => (
              <span key={t} className="chip text-inksoft">
                <Check className="h-3.5 w-3.5 text-teal" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
