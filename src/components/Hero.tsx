import portrait from "@/assets/portrait.jpg";
import { profile, stats } from "@/lib/data";
import { scrollToId } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/ui";
import { ArrowLeft, Award, Compass, MapPin, Sigma, Spark } from "@/components/Icons";

export default function Hero() {
  const { c, L, num, lang } = useLang();

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(70%_55%_at_50%_25%,#000,transparent)]" />
        <div className="glow-copper absolute -top-24 right-[-10%] h-[38rem] w-[38rem] rounded-full opacity-70 blur-2xl" />
        <div className="absolute -bottom-32 left-[-15%] h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="chip">
              <Spark className="h-3.5 w-3.5 text-copper" />
              {L(profile.role)}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.1rem] leading-[1.35] font-black sm:text-[3.1rem]">
              {c.heroGreet}{" "}
              <span className="text-gradient">{L(profile.name)}</span>
              {c.heroJoin && <span> {c.heroJoin}</span>}
              <br />
              <span className="text-copper">{L(profile.tagline)}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-[0.95rem] leading-8 text-inksoft">{L(profile.intro)}</p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {L(profile.badges).map((b) => (
                <li key={b} className="chip text-inksoft">
                  <Award className="h-3.5 w-3.5 text-copper" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => scrollToId("booking")} className="btn btn-copper">
                {c.heroCta1}
                <ArrowLeft className="h-4 w-4 rtl:rotate-0 ltr:rotate-180" />
              </button>
              <button type="button" onClick={() => scrollToId("courses")} className="btn btn-outline">
                {c.heroCta2}
              </button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div>
                <dt className="text-[0.7rem] text-inksoft">{c.heroAge}</dt>
                <dd className="num mt-1 text-lg font-bold">{L(profile.age)}</dd>
              </div>
              <div className="border-x border-line px-4">
                <dt className="text-[0.7rem] text-inksoft">{c.heroCity}</dt>
                <dd className="mt-1 flex items-center gap-1 text-lg font-bold">
                  <MapPin className="h-4 w-4 text-copper" />
                  {L(profile.cityShort)}
                </dd>
              </div>
              <div className="ps-1">
                <dt className="text-[0.7rem] text-inksoft">{c.heroStudents}</dt>
                <dd className="mt-1 flex items-center gap-1 text-lg font-bold">
                  <Compass className="h-4 w-4 text-teal" />
                  <span className="num">
                    {num(stats[0].value)}
                    {L(stats[0].suffix)}
                  </span>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={160} className="relative">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-[2.25rem] border border-line" />
            <div className="frame-photo aspect-4/5 w-full shadow-[0_40px_90px_-50px_rgba(0,0,0,0.55)]">
              <img src={portrait} alt={`${c.heroPhotoAlt} — ${L(profile.name)}`} loading="eager" />
            </div>

            <div
              className={`animate-float absolute -top-5 hidden rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-xl backdrop-blur sm:block ${
                lang === "fa" ? "left-[-1.5rem]" : "right-[-1.5rem]"
              }`}
            >
              <p className="flex items-center gap-2 text-[0.72rem] font-semibold">
                <Sigma className="h-4 w-4 text-copper" />
                {c.heroFloatDept}
              </p>
              <p className="mt-1 text-[0.65rem] text-inksoft">{c.heroFloatDeptSub}</p>
            </div>

            <div
              className={`animate-floatslow absolute -bottom-6 hidden rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-xl backdrop-blur sm:block ${
                lang === "fa" ? "right-[-1rem]" : "left-[-1rem]"
              }`}
            >
              <p className="text-[0.72rem] font-semibold">{c.heroFloatMember}</p>
              <p className="mt-1 text-[0.65rem] text-inksoft">{c.heroFloatMemberSub}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
