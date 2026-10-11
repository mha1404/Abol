import { contact, courses, profile } from "@/lib/data";
import type { Ui } from "@/lib/copy";
import type { Lang, Localized } from "@/lib/types";

const L = <T,>(v: Localized<T>, lang: Lang) => v[lang];

/** ساخت و دانلود فایل سرفصل دوره‌ها به‌صورت متن */
export function downloadSyllabus(c: Ui, lang: Lang) {
  const lines: string[] = [
    c.syllabusTitle,
    `${L(profile.name, lang)} — ${L(profile.role, lang)}`,
    lang === "fa"
      ? "عضو انجمن ریاضیدانان جوان ایران | مسئول دپارتمان ریاضی مؤسسه آموزشی ۷+۱"
      : "Member, Iranian Young Mathematicians Society | Head of Mathematics, 7+1 Institute",
    `${c.contactInfoPhone}: ${L(contact.phone, lang)}  |  ${c.contactInfoEmail}: ${contact.email}`,
    `${c.contactInfoAddress}: ${L(contact.location, lang)}`,
    "".padEnd(48, "—"),
    "",
  ];

  courses.forEach((course, i) => {
    lines.push(`${i + 1}) ${L(course.title, lang)}`);
    lines.push(`   ${L(course.summary, lang)}`);
    lines.push(`   ${c.syllabusSessions}: ${L(course.meta.sessions, lang)}`);
    lines.push(`   ${c.syllabusDuration}: ${L(course.meta.duration, lang)}`);
    lines.push(`   ${c.syllabusFormat}: ${L(course.meta.format, lang)}`);
    lines.push(`   ${c.syllabusCapacity}: ${L(course.meta.capacity, lang)}`);
    lines.push(`   ${c.syllabusTopics}:`);
    L(course.features, lang).forEach((f) => lines.push(`     • ${f}`));
    lines.push("");
  });

  lines.push("".padEnd(48, "—"));
  lines.push(c.syllabusFree);
  lines.push(`${c.syllabusHours}: ${L(contact.hours, lang)}`);

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `daghighifar-course-outlines-${lang}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function icsStamp(d: Date) {
  return `${d.toISOString().replace(/[-:]/g, "").split(".")[0]}Z`;
}

/** خروجی فایل تقویمی (ics) برای جلسه‌ی انتخاب‌شده */
export function addSessionToCalendar(
  session: { time: string; label: Localized; date: Date },
  c: Ui,
  lang: Lang,
) {
  const start = session.date;
  const end = new Date(start.getTime() + 90 * 60_000);
  const label = L(session.label, lang);

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${profile.nameEn}//Math Classes//${lang.toUpperCase()}`,
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@daghighifar.ir`,
    `DTSTAMP:${icsStamp(new Date())}`,
    `DTSTART:${icsStamp(start)}`,
    `DTEND:${icsStamp(end)}`,
    `SUMMARY:${c.calSummary.split("{label}").join(label)}`,
    `DESCRIPTION:${c.calTeacher}: ${L(profile.name, lang)}\\n${c.contactInfoPhone}: ${L(contact.phone, lang)}`,
    `LOCATION:${L(contact.location, lang)}`,
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    `DESCRIPTION:${c.calReminder}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "math-class.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
