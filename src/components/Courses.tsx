import { useState } from "react";
import { courseFilters, courses, type CourseCat } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { Reveal, Pill, Section, SectionHead } from "@/components/ui";
import { ArrowLeft, Calendar, Check, Clock, Users } from "@/components/Icons";

export default function Courses({ onPick }: { onPick: (title: { fa: string; en: string }) => void }) {
  const { c, L, num } = useLang();
  const [filter, setFilter] = useState<"all" | CourseCat>("all");
  const shown = filter === "all" ? courses : courses.filter((x) => x.cat === filter);

  return (
    <Section id="courses">
      <SectionHead eyebrow={c.coursesEyebrow} title={c.coursesTitle} desc={c.coursesDesc} />

      <Reveal className="mb-8 flex flex-wrap gap-2">
        {courseFilters.map((f) => (
          <Pill key={f.id} active={filter === f.id} onClick={() => setFilter(f.id)}>
            {L(f.label)}
            <span className="num ms-1.5 text-[0.65rem] opacity-70">
              ({num(f.id === "all" ? courses.length : courses.filter((x) => x.cat === f.id).length)})
            </span>
          </Pill>
        ))}
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((course, i) => (
          <Reveal
            key={course.id}
            as="article"
            delay={(i % 3) * 90}
            className="card group flex flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_70px_-50px_rgba(0,0,0,0.65)]"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="chip text-inksoft">
                {L(courseFilters.find((f) => f.id === course.cat)!.label)}
              </span>
              {course.badge && (
                <span className="rounded-full bg-coppersoft px-3 py-1 text-[0.66rem] font-bold text-copper">
                  {L(course.badge)}
                </span>
              )}
            </div>

            <h3 className="mt-4 text-[0.98rem] font-bold leading-7">{L(course.title)}</h3>
            <p className="mt-2.5 text-[0.76rem] leading-6 text-inksoft">{L(course.summary)}</p>

            <ul className="mt-5 space-y-2 border-y border-line py-4">
              {L(course.features).map((f) => (
                <li key={f} className="flex items-start gap-2 text-[0.74rem] text-inksoft">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" />
                  {f}
                </li>
              ))}
            </ul>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-[0.7rem] text-inksoft">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-copper" />
                {L(course.meta.sessions)}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-copper" />
                {L(course.meta.duration)}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-copper" />
                {c.coursesSeats}: {L(course.meta.capacity)}
              </div>
              <div className="flex items-center gap-1.5">{L(course.meta.format)}</div>
            </dl>

            <button
              type="button"
              onClick={() => onPick(course.title)}
              className="mt-6 flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-line px-4 py-3 text-start text-[0.78rem] font-semibold transition group-hover:border-ink/30 group-hover:bg-surface2"
            >
              {c.coursesCta}
              <ArrowLeft className="h-4 w-4 shrink-0 text-copper transition group-hover:-translate-x-1 ltr:rotate-180" />
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-8 flex flex-wrap items-center gap-3">
        {[c.coursesNote1, c.coursesNote2, c.coursesNote3].map((t) => (
          <span key={t} className="chip text-inksoft">
            {t}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
