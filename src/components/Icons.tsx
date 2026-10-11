type P = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const Sigma = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M17 4H7l6 8-6 8h10" />
  </svg>
);

export const Spark = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4" />
  </svg>
);

export const Chart = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 20h18M6 16V9M11 16V4M16 16v-5M21 16v-9" />
  </svg>
);

export const Target = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const Book = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5A2.5 2.5 0 0 1 4 20.5zM8 7h7M8 11h5" />
  </svg>
);

export const Users = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5M16 5.5a3 3 0 0 1 0 5.6M18 20c0-2-.6-3.4-1.8-4.4" />
  </svg>
);

export const Clock = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base} className={className} strokeWidth={2}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);

export const ArrowUp = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

export const ArrowLeft = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const ChevronDown = ({ className }: P) => (
  <svg {...base} className={className} strokeWidth={2}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ChevronLeft = ({ className }: P) => (
  <svg {...base} className={className} strokeWidth={2}>
    <path d="M14 6l-6 6 6 6" />
  </svg>
);

export const ChevronRight = ({ className }: P) => (
  <svg {...base} className={className} strokeWidth={2}>
    <path d="M10 6l6 6-6 6" />
  </svg>
);

export const Phone = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

export const Instagram = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);

export const Send = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M21 3L10.5 13.5M21 3l-7 18-3.5-7.5L3 10z" />
  </svg>
);

export const Sun = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" />
  </svg>
);

export const Moon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
  </svg>
);

export const Quote = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M9.6 5.5c-3 1.3-4.8 4-4.8 7.6v5.4h5.9v-6.2H7.6c.2-1.9 1.1-3.2 2.8-4.1zM19 5.5c-3 1.3-4.8 4-4.8 7.6v5.4h5.9v-6.2h-3.1c.2-1.9 1.1-3.2 2.8-4.1z" />
  </svg>
);

export const Globe = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5z" />
  </svg>
);

export const Menu = ({ className }: P) => (
  <svg {...base} className={className} strokeWidth={1.8}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg {...base} className={className} strokeWidth={1.8}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const MapPin = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s6.5-5.8 6.5-10.4A6.5 6.5 0 0 0 5.5 10.6C5.5 15.2 12 21 12 21z" />
    <circle cx="12" cy="10.5" r="2.4" />
  </svg>
);

export const Calendar = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="5" width="17" height="15" rx="3" />
    <path d="M3.5 10h17M8 3.5V6M16 3.5V6" />
  </svg>
);

export const Star = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 3.5l2.7 5.6 6.1.8-4.4 4.3 1.1 6.1L12 17.4l-5.5 2.9 1.1-6.1-4.4-4.3 6.1-.8z" />
  </svg>
);

export const Bulb = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M9.5 17.5h5M10.5 21h3M8.5 14.5A5.5 5.5 0 1 1 15.5 14.5c-.9.7-1.2 1.4-1.2 3H9.7c0-1.6-.3-2.3-1.2-3z" />
  </svg>
);

export const Compass = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M15.2 8.8l-2 4.4-4.4 2 2-4.4z" />
  </svg>
);

export const Layers = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3.5l8 4.5-8 4.5-8-4.5z" />
    <path d="M4 12l8 4.5 8-4.5M4 16l8 4.5 8-4.5" />
  </svg>
);

export const Infinity8 = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7.3 8.4c2.6 0 4.3 3.6 6.7 3.6 1.8 0 3-1.6 3-3.6s-1.2-3.6-3-3.6c-2.4 0-4.1 3.6-6.7 3.6-1.8 0-3 1.6-3 3.6s1.2 3.6 3 3.6c2.4 0 4.1-3.6 6.7-3.6" />
  </svg>
);

export const Award = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="9.5" r="5.5" />
    <path d="M9 14.6L7.5 21l4.5-2.6L16.5 21 15 14.6" />
  </svg>
);

export const iconMap: Record<string, (p: P) => React.ReactElement> = {
  spark: Spark,
  chart: Chart,
  target: Target,
  book: Book,
};
