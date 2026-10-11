/** تبدیل ارقام فارسی/عربی به لاتین (برای اعتبارسنجی فرم‌ها و محاسبات) */
export function normalizeDigits(input: string): string {
  return input
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** جایگزینی ساده‌ی متغیرها در متن: fill("{n} روز", { n: 5 }) */
export function fill(template: string, vars: Record<string, string | number>) {
  return Object.entries(vars).reduce(
    (out, [key, value]) => out.split(`{${key}}`).join(String(value)),
    template,
  );
}
