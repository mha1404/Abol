import { contact, navLinks, profile, topics } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { fill, scrollToId } from "@/lib/utils";
import { Instagram, Mail, Phone, Send, Sigma } from "@/components/Icons";

export default function Footer() {
  const { c, L } = useLang();

  return (
    <footer className="border-t border-line bg-paper pt-14 pb-8">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-paper">
                <Sigma className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[0.85rem] font-bold">{L(profile.name)}</p>
                <p className="text-[0.65rem] text-inksoft" dir="ltr">
                  {profile.nameEn}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-[0.76rem] leading-7 text-inksoft">{L(profile.intro)}</p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Send, Mail, Phone].map((Icon, i) => (
                <a
                  key={i}
                  href={i === 2 ? `mailto:${contact.email}` : i === 3 ? `tel:${contact.phoneRaw}` : "#"}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-line text-inksoft transition hover:border-ink/30 hover:text-ink"
                  aria-label={c.footAria}
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.8rem] font-bold">{c.footSections}</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(l.id)}
                    className="cursor-pointer text-[0.74rem] text-inksoft transition hover:text-ink"
                  >
                    {L(l.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.8rem] font-bold">{c.footServices}</p>
            <ul className="mt-4 space-y-2.5">
              {L(topics).map((t) => (
                <li key={t} className="text-[0.74rem] text-inksoft">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <p className="text-[0.8rem] font-bold">{c.footQuoteTitle}</p>
            <p className="mt-3 text-[0.78rem] leading-7 text-inksoft">{c.footQuoteText}</p>
            <div className="hairline my-4" />
            <p className="num text-[0.72rem] text-inksoft">{L(contact.hours)}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-[0.68rem] text-inksoft sm:flex-row">
          <p>{fill(c.footCopy, { name: L(profile.name) })}</p>
          <p>{c.footCredit}</p>
        </div>
      </div>
    </footer>
  );
}
