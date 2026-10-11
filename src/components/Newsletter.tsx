import { useState } from "react";
import { cn } from "@/utils/cn";
import { useLocalStorage } from "@/hooks/useSiteFx";
import { fill } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { Reveal, inputClass } from "@/components/ui";
import { Check, Mail, Send } from "@/components/Icons";

export default function Newsletter() {
  const { c, num } = useLang();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const [subs, setSubs] = useLocalStorage<string[]>("dg-newsletter", []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError(c.newsErrEmail);
      return;
    }
    if (subs.includes(value)) {
      setError(c.newsErrDup);
      return;
    }
    setError("");
    setSubs([...subs, value]);
    setEmail("");
    setOk(true);
  };

  return (
    <section className="py-14 sm:py-20">
      <div className="shell">
        <Reveal className="card relative overflow-hidden p-8 sm:p-10">
          <div className="glow-copper pointer-events-none absolute -top-24 left-[-6rem] h-64 w-64 rounded-full blur-2xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="chip text-inksoft">
                <Mail className="h-3.5 w-3.5 text-copper" />
                {c.newsChip}
              </span>
              <h3 className="mt-5 text-lg font-bold leading-8 sm:text-xl">{c.newsTitle}</h3>
              <p className="mt-3 max-w-xl text-[0.8rem] leading-7 text-inksoft">{c.newsDesc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[c.newsS1, c.newsS2, c.newsS3].map((s) => (
                  <span key={s} className="chip text-inksoft">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {ok ? (
                <div className="popin rounded-2xl border border-teal/30 bg-teal/10 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/15 text-teal">
                    <Check className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-[0.85rem] font-bold">{c.newsOkTitle} 🎉</p>
                  <p className="mt-2 text-[0.75rem] leading-6 text-inksoft">
                    {fill(c.newsOkText, { n: num(subs.length) })}
                  </p>
                  <button type="button" onClick={() => setOk(false)} className="btn btn-outline mt-4">
                    {c.newsAgain}
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-3" noValidate>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      dir="ltr"
                      className={cn(inputClass, "text-left")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={c.newsPh}
                      aria-label={c.newsChip}
                    />
                    <button type="submit" className="btn btn-copper shrink-0">
                      <Send className="h-4 w-4" />
                      {c.newsJoin}
                    </button>
                  </div>
                  {error && <p className="text-[0.7rem] text-copper">{error}</p>}
                  <p className="text-[0.66rem] text-inksoft">{c.newsConsent}</p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
