import { marqueeItems } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { Sigma } from "@/components/Icons";

export default function Marquee() {
  const { L } = useLang();
  const base = L(marqueeItems);
  const items = [...base, ...base];

  return (
    <div className="marquee relative border-y border-line bg-surface/60 py-4">
      <div className="marquee-track items-center gap-8">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 text-[0.82rem] text-inksoft">
            <span className="whitespace-nowrap font-medium">{item}</span>
            <Sigma className="h-3.5 w-3.5 shrink-0 text-copper/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
