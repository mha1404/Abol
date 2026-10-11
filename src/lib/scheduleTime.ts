import { schedule } from "@/lib/data";
import { normalizeDigits } from "@/lib/utils";

/** آیدی روز هفته → شماره‌ی جاوااسکریپت (یکشنبه = ۰) */
const weekdayIndex: Record<string, number> = {
  sat: 6,
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
};

export type Upcoming = {
  dayId: string;
  time: string;
  label: { fa: string; en: string };
  note: { fa: string; en: string };
  date: Date;
};

function parseTime(t: string) {
  const [h, m] = normalizeDigits(t).split(":").map((n) => Number(n));
  return { h: Number.isFinite(h) ? h : 0, m: Number.isFinite(m) ? m : 0 };
}

/** کلاس‌های پیش‌رو بر اساس برنامه‌ی هفتگی */
export function getUpcomingSessions(from: Date = new Date(), count = 3): Upcoming[] {
  const out: Upcoming[] = [];

  for (let d = 0; d < 14 && out.length < count; d += 1) {
    const date = new Date(from.getFullYear(), from.getMonth(), from.getDate() + d);
    const weekday = date.getDay();

    schedule
      .filter((s) => weekdayIndex[s.id] === weekday)
      .forEach((s) => {
        s.slots
          .filter((slot) => !slot.off)
          .forEach((slot) => {
            const { h, m } = parseTime(slot.time);
            const at = new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m);
            if (at.getTime() > from.getTime()) {
              out.push({
                dayId: s.id,
                time: slot.time,
                label: slot.label,
                note: s.note,
                date: at,
              });
            }
          });
      });
  }

  return out.sort((a, b) => a.date.getTime() - b.date.getTime()).slice(0, count);
}

/** تاریخ آزمون سراسری ۱۴۰۵ — ۵ تیر ۱۴۰۵ (۲۵ ژوئن ۲۰۲۶) */
export const examDate = new Date(2026, 5, 25, 8, 0, 0);
/** آغاز سال تحصیلی ۱۴۰۴ (مهر) برای محاسبه‌ی درصد پیشرفت */
export const termStart = new Date(2025, 8, 22, 0, 0, 0);

export function diffParts(target: Date, now: Date) {
  const ms = Math.max(0, target.getTime() - now.getTime());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor(ms / 3_600_000) % 24,
    minutes: Math.floor(ms / 60_000) % 60,
    seconds: Math.floor(ms / 1_000) % 60,
    done: ms === 0,
  };
}

export function examProgress(now: Date) {
  const total = examDate.getTime() - termStart.getTime();
  const passed = now.getTime() - termStart.getTime();
  return Math.min(100, Math.max(0, (passed / total) * 100));
}
