import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { copy, type Ui } from "@/lib/copy";
import type { Lang, Localized } from "@/lib/types";

type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  c: Ui;
  L: <T>(v: Localized<T>) => T;
  num: (v: string | number) => string;
  numInt: (n: number) => string;
  date: (d: Date, short?: boolean) => string;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const faDigits = "۰۱۲۳۴۵۶۷۸۹";
const arDigits = "٠١٢٣٤٥٦٧٨٩";

export function toFaDigits(input: string | number) {
  return String(input).replace(/\d/g, (d) => faDigits[Number(d)]);
}

export function toEnDigits(input: string | number) {
  return String(input)
    .replace(/[۰-۹]/g, (d) => String(faDigits.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String(arDigits.indexOf(d)));
}

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "fa";
    const saved = window.localStorage.getItem("dg-lang");
    return saved === "en" || saved === "fa" ? saved : "fa";
  });

  const dir: "rtl" | "ltr" = lang === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    window.localStorage.setItem("dg-lang", lang);
  }, [lang, dir]);

  const value = useMemo<Ctx>(() => {
    const num = (v: string | number) =>
      lang === "fa" ? toFaDigits(toEnDigits(v)) : toEnDigits(v);

    return {
      lang,
      dir,
      c: copy[lang],
      L: (v) => v[lang],
      num,
      numInt: (n: number) =>
        lang === "fa"
          ? toFaDigits(new Intl.NumberFormat("en-US").format(n))
          : new Intl.NumberFormat("en-US").format(n),
      date: (d: Date, short = false) =>
        new Intl.DateTimeFormat(lang === "fa" ? "fa-IR" : "en-US", {
          weekday: short ? undefined : "long",
          month: short ? "short" : "long",
          day: "numeric",
        }).format(d),
      setLang,
      toggle: () => setLang((l) => (l === "fa" ? "en" : "fa")),
    };
  }, [lang, dir]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
