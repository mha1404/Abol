import { useState } from "react";
import { cn } from "@/utils/cn";
import { contact, topics } from "@/lib/data";
import { downloadSyllabus } from "@/lib/download";
import { fill } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { useLocalStorage } from "@/hooks/useSiteFx";
import { Field, inputClass, Reveal, Section, SectionHead } from "@/components/ui";
import { ArrowLeft, Check, Clock, Instagram, Mail, MapPin, Phone, Send } from "@/components/Icons";

type Msg = { id: number; name: string; topic: string; text: string; at: string };

export default function Contact() {
  const { c, L, lang, num } = useLang();
  const [form, setForm] = useState({ name: "", email: "", topic: L(topics)[0], text: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [log, setLog] = useLocalStorage<Msg[]>("dg-messages", []);
  const [ok, setOk] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (form.name.trim().length < 3) err.name = c.contactErrName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) err.email = c.contactErrEmail;
    if (form.text.trim().length < 10) err.text = c.contactErrText;
    setErrors(err);
    if (Object.keys(err).length) return;

    setLog([
      ...log,
      {
        id: Date.now(),
        name: form.name.trim(),
        topic: form.topic,
        text: form.text.trim(),
        at: new Date().toISOString(),
      },
    ]);
    setForm({ name: "", email: "", topic: L(topics)[0], text: "" });
    setOk(true);
  };

  const info = [
    { icon: Phone, label: c.contactInfoPhone, value: L(contact.phone), href: `tel:${contact.phoneRaw}` },
    { icon: Mail, label: c.contactInfoEmail, value: contact.email, href: `mailto:${contact.email}` },
    { icon: Instagram, label: c.contactInfoInsta, value: contact.instagram, href: "#" },
    { icon: Send, label: c.contactInfoTelegram, value: contact.telegram, href: "#" },
    { icon: MapPin, label: c.contactInfoAddress, value: L(contact.location) },
    { icon: Clock, label: c.contactInfoHours, value: L(contact.hours) },
  ];

  return (
    <Section id="contact" className="border-t border-line bg-surface/40">
      <Reveal className="card relative mb-14 overflow-hidden bg-ink p-8 text-paper sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.12]" />
        <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-[0.72rem] font-semibold text-copper">{c.contactKicker}</p>
            <h3 className="mt-3 text-xl font-bold leading-9 sm:text-2xl">{c.contactCtaTitle}</h3>
            <p className="mt-2.5 max-w-xl text-[0.8rem] leading-7 opacity-75">{c.contactCtaText}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href={`tel:${contact.phoneRaw}`} className="btn btn-copper">
              {c.contactCall}
              <ArrowLeft className="h-4 w-4 ltr:rotate-180" />
            </a>
            <button
              type="button"
              onClick={() => downloadSyllabus(c, lang)}
              className="btn border border-paper/30 text-paper hover:bg-paper/10"
            >
              {c.contactSyllabus}
            </button>
          </div>
        </div>
      </Reveal>

      <SectionHead eyebrow={c.contactEyebrow} title={c.contactTitle} desc={c.contactDesc} />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="card p-6 sm:p-8">
          {ok ? (
            <div className="popin space-y-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 text-teal">
                <Check className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-[1rem] font-bold">{c.contactOkTitle}</h3>
                <p className="mt-2 text-[0.78rem] leading-7 text-inksoft">
                  {fill(c.contactOkText, { n: num(log.length) })}
                </p>
              </div>
              <button type="button" onClick={() => setOk(false)} className="btn btn-outline">
                {c.contactAgain}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={c.contactFName} error={errors.name}>
                  <input
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder={c.contactFNamePh}
                  />
                </Field>
                <Field label={c.contactFEmail} error={errors.email}>
                  <input
                    className={cn(inputClass, "text-left")}
                    dir="ltr"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                  />
                </Field>
              </div>
              <Field label={c.contactFTopic}>
                <select
                  className={inputClass}
                  value={form.topic}
                  onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
                >
                  {L(topics).map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label={c.contactFText} error={errors.text}>
                <textarea
                  rows={5}
                  className={cn(inputClass, "resize-none")}
                  value={form.text}
                  onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))}
                  placeholder={c.contactFTextPh}
                />
              </Field>
              <button type="submit" className="btn btn-primary w-full">
                <Send className="h-4 w-4" />
                {c.contactSubmit}
              </button>
              <p className="text-center text-[0.66rem] text-inksoft">{c.contactNote}</p>
            </form>
          )}
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {info.map((item, i) => {
            const Inner = (
              <div className="card flex h-full items-start gap-4 p-5 transition hover:-translate-y-0.5 hover:border-ink/25">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coppersoft text-copper">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.72rem] text-inksoft">{item.label}</p>
                  <p
                    className="mt-1 text-[0.82rem] font-semibold leading-6"
                    dir={item.href?.startsWith("#") || item.href?.startsWith("mailto") ? "ltr" : undefined}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );
            return (
              <Reveal key={item.label} delay={i * 60}>
                {item.href ? (
                  <a href={item.href} className="block">
                    {Inner}
                  </a>
                ) : (
                  Inner
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
