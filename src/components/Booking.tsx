import { useEffect, useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { schedule, topics } from "@/lib/data";
import type { Localized } from "@/lib/types";
import { fill, normalizeDigits } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { Field, inputClass, Reveal, Section, SectionHead } from "@/components/ui";
import { Calendar, Check, Clock, Send } from "@/components/Icons";

type Form = { name: string; phone: string; topic: string; note: string };

export default function Booking({ pickedCourse }: { pickedCourse: Localized | null }) {
  const { c, L, num } = useLang();
  const topicList = L(topics);
  const [dayIndex, setDayIndex] = useState(0);
  const [slot, setSlot] = useState<{ day: Localized; time: string } | null>(null);
  const [form, setForm] = useState<Form>({ name: "", phone: "", topic: topicList[0], note: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sent, setSent] = useState<Form | null>(null);

  useEffect(() => {
    if (pickedCourse) {
      setForm((f) => ({
        ...f,
        note: `${L(pickedCourse)} — ${f.note}`.trim(),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickedCourse?.fa, pickedCourse?.en]);

  const day = schedule[dayIndex];
  const openCount = useMemo(
    () => schedule.reduce((acc, d) => acc + d.slots.filter((s) => !s.off).length, 0),
    [],
  );

  const validate = () => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (form.name.trim().length < 3) e.name = c.bookingErrName;
    const phone = normalizeDigits(form.phone).replace(/[\s-]/g, "");
    if (!/^0?9\d{9}$/.test(phone)) e.phone = c.bookingErrPhone;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent({ ...form });
  };

  return (
    <Section id="booking">
      <SectionHead eyebrow={c.bookingEyebrow} title={c.bookingTitle} desc={c.bookingDesc} />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="card p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2 text-[0.88rem] font-bold">
              <Calendar className="h-4.5 w-4.5 text-copper" />
              {c.bookingWeekly}
            </p>
            <span className="chip text-inksoft">
              <Clock className="h-3.5 w-3.5 text-teal" />
              {fill(c.bookingFreeSlots, { n: num(openCount) })}
            </span>
          </div>

          <div className="hide-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
            {schedule.map((d, i) => (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  setDayIndex(i);
                  setSlot(null);
                }}
                className={cn(
                  "slot chip shrink-0 cursor-pointer px-4 py-2 text-[0.78rem] font-semibold",
                  i === dayIndex
                    ? "border-transparent bg-ink text-paper"
                    : "text-inksoft hover:border-ink/30 hover:text-ink",
                )}
              >
                {L(d.day)}
              </button>
            ))}
          </div>

          <p className="mt-4 text-[0.72rem] text-inksoft">{L(day.note)}</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {day.slots.map((s) => {
              const isSelected = slot?.time === s.time && slot?.day === day.day;
              return (
                <button
                  key={`${day.id}-${s.time}-${L(s.label)}`}
                  type="button"
                  disabled={s.off}
                  onClick={() => setSlot({ day: day.day, time: s.time })}
                  className={cn(
                    "slot rounded-2xl border p-4 text-start",
                    s.off ? "slot-off border-line bg-surface2/50" : "cursor-pointer border-line",
                    isSelected && !s.off
                      ? "border-copper bg-coppersoft/70 text-ink"
                      : "hover:border-ink/30",
                  )}
                >
                  <span className="num block text-[0.95rem] font-bold">{num(s.time)}</span>
                  <span className="mt-1 block text-[0.7rem] text-inksoft">{L(s.label)}</span>
                </button>
              );
            })}
          </div>

          {slot ? (
            <p className="popin mt-5 flex items-center gap-2 rounded-2xl border border-teal/30 bg-teal/10 px-4 py-3 text-[0.75rem]">
              <Check className="h-4 w-4 text-teal" />
              {c.bookingSelected} {L(slot.day)} — <span className="num">{num(slot.time)}</span>
            </p>
          ) : (
            <p className="mt-5 rounded-2xl border border-dashed border-line px-4 py-3 text-[0.75rem] text-inksoft">
              {c.bookingNotSelected}
            </p>
          )}
        </Reveal>

        <Reveal variant="scale" delay={120} className="card p-6 sm:p-7">
          {sent ? (
            <div className="popin space-y-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 text-teal">
                <Check className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-[1rem] font-bold">{c.bookingOkTitle} ✅</h3>
                <p className="mt-2 text-[0.78rem] leading-7 text-inksoft">
                  {fill(c.bookingOkText, {
                    name: sent.name,
                    topic: sent.topic,
                    phone: num(sent.phone),
                    slot: slot
                      ? fill(c.bookingOkSlot, {
                          day: L(slot.day),
                          time: num(slot.time),
                        })
                      : "",
                  })}
                </p>
              </div>
              <div className="hairline" />
              <button
                type="button"
                onClick={() => {
                  setSent(null);
                  setErrors({});
                }}
                className="btn btn-outline w-full"
              >
                {c.bookingAgain}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4" noValidate>
              <div>
                <h3 className="text-[1rem] font-bold">{c.bookingFormTitle}</h3>
                <p className="mt-1.5 text-[0.73rem] text-inksoft">{c.bookingFormNote}</p>
              </div>

              <Field label={c.bookingName} error={errors.name}>
                <input
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder={c.bookingNamePh}
                />
              </Field>

              <Field label={c.bookingPhone} error={errors.phone}>
                <input
                  className={cn(inputClass, "num", "text-start")}
                  dir="ltr"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder={c.bookingPhonePh}
                  inputMode="tel"
                />
              </Field>

              <Field label={c.bookingTopic}>
                <select
                  className={inputClass}
                  value={form.topic}
                  onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
                >
                  {topicList.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label={c.bookingNoteL}>
                <textarea
                  rows={3}
                  className={cn(inputClass, "resize-none")}
                  value={form.note}
                  onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                  placeholder={c.bookingNotePh}
                />
              </Field>

              <button type="submit" className="btn btn-copper w-full">
                <Send className="h-4 w-4" />
                {c.bookingSubmit}
              </button>
              <p className="text-center text-[0.68rem] text-inksoft">{c.bookingFree}</p>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
