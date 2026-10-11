import booksImg from "@/assets/books.jpg";
import { books } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { Reveal, Section, SectionHead } from "@/components/ui";
import { Book, Layers, Star } from "@/components/Icons";

export default function Books() {
  const { c, L } = useLang();

  return (
    <Section id="books" className="border-y border-line bg-surface/40">
      <SectionHead
        eyebrow={c.booksEyebrow}
        title={c.booksTitle}
        desc={c.booksDesc}
        action={
          <Reveal delay={100} className="hidden lg:block">
            <div className="chip text-inksoft">
              <Layers className="h-3.5 w-3.5 text-copper" />
              {c.booksStat}
            </div>
          </Reveal>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal variant="scale" className="frame-photo aspect-4/3 w-full lg:aspect-auto lg:h-full">
          <img src={booksImg} alt={c.booksImgAlt} loading="lazy" />
        </Reveal>

        <div className="space-y-4">
          {books.map((b, i) => (
            <Reveal key={L(b.title)} delay={i * 100} className="card p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-[0.7rem] text-inksoft">
                  <Book className="h-4 w-4 text-copper" />
                  {L(b.year)} — {L(b.pages)}
                </span>
                <span className="rounded-full border border-line px-3 py-1 text-[0.65rem] text-inksoft">
                  {L(b.edition)}
                </span>
              </div>
              <h3 className="mt-3 text-[1rem] font-bold">{L(b.title)}</h3>
              <p className="mt-2 text-[0.78rem] leading-7 text-inksoft">{L(b.text)}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {L(b.tags).map((t) => (
                  <span key={t} className="chip text-inksoft">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal delay={300} className="card flex flex-wrap items-center justify-between gap-4 bg-dots p-6">
            <div>
              <p className="flex items-center gap-2 text-[0.85rem] font-bold">
                <Star className="h-4 w-4 text-copper" />
                {c.booksNext}
              </p>
              <p className="mt-1.5 text-[0.74rem] text-inksoft">{c.booksNextText}</p>
            </div>
            <span className="chip text-copper">{c.booksNextChip}</span>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
