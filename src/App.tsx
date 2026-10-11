import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import LiveSchedule from "@/components/LiveSchedule";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Courses from "@/components/Courses";
import Books from "@/components/Books";
import Tips from "@/components/Tips";
import Results from "@/components/Results";
import Challenge from "@/components/Challenge";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ArrowUp } from "@/components/Icons";
import { useRevealOnScroll, useTheme } from "@/hooks/useSiteFx";
import { LanguageProvider, useLang } from "@/lib/i18n";
import type { Localized } from "@/lib/types";
import { scrollToId } from "@/lib/utils";

const titles: Record<"fa" | "en", string> = {
  fa: "ابوالفضل دقتی‌فر | مدرس و مؤلف ریاضیات تیزهوشان و کنکور",
  en: "Abolfazl Daghighifar | Mathematics Teacher & Author",
};

function BackToTop({ label }: { label: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 left-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-lg backdrop-blur transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function Site() {
  const { dark, toggle } = useTheme();
  const { c, lang } = useLang();
  const [pickedCourse, setPickedCourse] = useState<Localized | null>(null);
  useRevealOnScroll();

  useEffect(() => {
    document.title = titles[lang];
  }, [lang]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar dark={dark} toggleTheme={toggle} />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <LiveSchedule />
        <About />
        <Journey />
        <Courses
          onPick={(title) => {
            setPickedCourse(title);
            scrollToId("booking");
          }}
        />
        <Books />
        <Tips />
        <Results />
        <Challenge />
        <Booking pickedCourse={pickedCourse} />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <BackToTop label={c.backTop} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
