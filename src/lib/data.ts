import type { Localized } from "@/lib/types";

export const profile = {
  name: { fa: "ابوالفضل دقتی‌فر", en: "Abolfazl Daghighifar" } as Localized,
  nameEn: "Abolfazl Daghighifar",
  age: { fa: "۱۹ ساله", en: "19 years old" } as Localized,
  city: { fa: "بیرجند، خراسان جنوبی", en: "Birjand, South Khorasan" } as Localized,
  cityShort: { fa: "بیرجند", en: "Birjand" } as Localized,
  role: {
    fa: "مدرس و مؤلف ریاضیات تیزهوشان و کنکور",
    en: "Mathematics teacher, author & exam-prep specialist",
  } as Localized,
  tagline: { fa: "ریاضی را نه حفظ کن، بفهم.", en: "Don't memorize math — understand it." } as Localized,
  intro: {
    fa: "من ابوالفضل دقتی‌فر هستم؛ ۱۹ ساله، اهل بیرجند. سال‌هاست ریاضیات را برای دانش‌آموزان تیزهوش و کنکوری تدریس می‌کنم و باور دارم هر دانش‌آموز با روش درست، از «دشمنی با ریاضی» به «عشق به حل مسئله» می‌رسد.",
    en: "I'm Abolfazl Daghighifar, 19, from Birjand. I have been teaching mathematics to gifted-class and Konkur students for years, and I believe every student can move from avoiding math to enjoying problem solving — with the right method.",
  } as Localized,
  about: {
    fa: [
      "کارم را از ۱۵ سالگی با حل تمرین برای هم‌کلاسی‌ها شروع کردم و خیلی زود فهمیدم لذت واقعی من در «فهماندن» است. همان‌جا بود که ریاضی برایم از یک درس، به یک حرفه تبدیل شد.",
      "امروز به‌عنوان مدرس و مؤلف ریاضیات تیزهوشان و کنکور فعالیت می‌کنم، عضو انجمن ریاضیدانان جوان ایران هستم و مسئولیت دپارتمان ریاضی مؤسسه آموزشی ۷+۱ را بر عهده دارم. این مسئولیت یعنی طراحی ساختار آموزشی، تولید محتوای استاندارد و همراهی مدرسان جوان تیم.",
      "کلاس‌های من پر از پرسش است؛ چون معتقدم دانش‌آموزی که سؤال می‌پرسد، در حال ساختن ریاضیِ درونِ خودش است. تمرین‌های هدفمند، آزمون‌های دوره‌ای و گزارش پیشرفت، سه ستون کار من هستند.",
    ],
    en: [
      "I started at 15 by solving exercises for classmates, and quickly realised my real joy lies in explaining: that was the moment mathematics stopped being just a school subject and became a profession.",
      "Today I teach and write for gifted-class and Konkur students, I'm a member of the Iranian Young Mathematicians Society, and I lead the mathematics department at the 7+1 Educational Institute — which means designing the curriculum, producing standards-based content and mentoring junior teachers.",
      "My classes are full of questions, because a student who asks is building their own mathematics. Targeted practice, periodic mock exams and weekly progress reports are the three pillars of my work.",
    ],
  } as Localized<string[]>,
  badges: {
    fa: [
      "عضو انجمن ریاضیدانان جوان ایران",
      "مسئول دپارتمان ریاضی مؤسسه آموزشی ۷+۱",
      "مؤلف ۳ عنوان کتاب ریاضی",
    ],
    en: [
      "Member, Iranian Young Mathematicians Society",
      "Head of Mathematics Dept., 7+1 Institute",
      "Author of 3 mathematics books",
    ],
  } as Localized<string[]>,
};

export const navLinks: { id: string; label: Localized; secondary?: boolean }[] = [
  { id: "about", label: { fa: "درباره من", en: "About" } },
  { id: "courses", label: { fa: "دوره‌ها", en: "Courses" }, secondary: true },
  { id: "books", label: { fa: "کتاب‌ها", en: "Books" } },
  { id: "live", label: { fa: "برنامه زنده", en: "Live plan" }, secondary: true },
  { id: "notes", label: { fa: "نُت‌ها", en: "Notes" } },
  { id: "results", label: { fa: "نتایج", en: "Results" }, secondary: true },
  { id: "challenge", label: { fa: "چالش ریاضی", en: "Challenge" } },
  { id: "booking", label: { fa: "رزرو جلسه", en: "Booking" } },
  { id: "faq", label: { fa: "سؤالات", en: "FAQ" }, secondary: true },
  { id: "contact", label: { fa: "تماس", en: "Contact" } },
];

export const marqueeItems: Localized<string[]> = {
  fa: [
    "ترکیبیات",
    "هندسه‌ی تحلیلی",
    "حسابان",
    "حساب دیفرانسیل و انتگرال",
    "نظریه‌ی اعداد",
    "آمار و احتمال",
    "ریاضیات گسسته",
    "المپیاد ریاضی",
    "حل مسئله",
    "آزمون تیزهوشان",
    "کنکور تجربی",
    "کنکور ریاضی",
  ],
  en: [
    "Combinatorics",
    "Coordinate geometry",
    "Calculus",
    "Differential & integral calculus",
    "Number theory",
    "Statistics & probability",
    "Discrete mathematics",
    "Math olympiad",
    "Problem solving",
    "SAMPAD entrance",
    "Konkur — Sciences",
    "Konkur — Mathematics",
  ],
};

export const stats = [
  { value: 470, suffix: { fa: "+", en: "+" } as Localized, label: { fa: "دانش‌آموز همراه", en: "Students taught" } as Localized, hint: { fa: "از هفتم تا دوازدهم", en: "Grade 7 through 12" } as Localized },
  { value: 1400, suffix: { fa: "+", en: "+" } as Localized, label: { fa: "ساعت تدریس", en: "Hours taught" } as Localized, hint: { fa: "حضوری و آنلاین", en: "In-person & online" } as Localized },
  { value: 93, suffix: { fa: "٪", en: "%" } as Localized, label: { fa: "قبولی آزمون سمپاد", en: "SAMPAD pass rate" } as Localized, hint: { fa: "میانگین دانش‌آموزان دوره", en: "Cohort average" } as Localized },
  { value: 3, suffix: { fa: "", en: "" } as Localized, label: { fa: "کتاب تألیفی", en: "Published books" } as Localized, hint: { fa: "چاپ‌شده و در دست نگارش", en: "Published & in progress" } as Localized },
];

export const pillars = [
  {
    icon: "spark",
    title: { fa: "تیزهوشان (سمپاد)", en: "Gifted schools (SAMPAD)" } as Localized,
    text: {
      fa: "آماده‌سازی هدفمند برای آزمون ورودی مدارس استعدادهای درخشان؛ از تکنیک‌های سرعت تا تحلیل آزمون‌های آزمایشی.",
      en: "Focused preparation for the gifted-school entrance exam: speed techniques, pattern recognition and mock-test analysis.",
    } as Localized,
  },
  {
    icon: "chart",
    title: { fa: "کنکور تجربی و ریاضی", en: "Konkur — Sciences & Math" } as Localized,
    text: {
      fa: "طراحی مسیر درصد‌ساز برای ریاضی کنکور با درسنامه‌ی فشرده، تست‌های طبقه‌بندی‌شده و مدیریت زمان واقعی.",
      en: "A score-building roadmap for Konkur mathematics: condensed lessons, tiered MCQs and real time-management drills.",
    } as Localized,
  },
  {
    icon: "target",
    title: { fa: "المپیاد و حل مسئله", en: "Olympiad & problem solving" } as Localized,
    text: {
      fa: "پرورش تفکر ریاضیدان: ترکیبیات، نظریه‌ی اعداد و هندسه در قالب کارگاه‌های مسئله‌محور و گروهی.",
      en: "Growing a mathematician's mind: combinatorics, number theory and geometry through problem-centred group workshops.",
    } as Localized,
  },
];

export const timeline = [
  {
    year: { fa: "۱۳۹۹", en: "2020" } as Localized,
    title: { fa: "نقطه‌ی شروع", en: "The starting point" } as Localized,
    text: {
      fa: "اولین کلاس‌های غیررسمی ریاضی برای هم‌کلاسی‌ها در بیرجند؛ همان‌جا فهمیدم توضیح دادن، خودش یک هنر است.",
      en: "My first informal math classes for classmates in Birjand — where I learned that explaining is an art in itself.",
    } as Localized,
  },
  {
    year: { fa: "۱۴۰۰", en: "2021" } as Localized,
    title: { fa: "ورود رسمی به آموزش", en: "Going professional" } as Localized,
    text: {
      fa: "تدریس در آموزشگاه‌های شهر و طراحی نخستین جزوه‌ی تیزهوشان با تمرین‌های طبقه‌بندی‌شده.",
      en: "Teaching in city institutes and designing my first gifted-class handout with tiered exercises.",
    } as Localized,
  },
  {
    year: { fa: "۱۴۰۱", en: "2022" } as Localized,
    title: { fa: "انجمن ریاضیدانان جوان ایران", en: "Iranian Young Mathematicians Society" } as Localized,
    text: {
      fa: "عضویت در انجمن و شرکت در کارگاه‌های تخصصی حل مسئله، ترکیبیات و هندسه.",
      en: "Joined the society and took specialist workshops in problem solving, combinatorics and geometry.",
    } as Localized,
  },
  {
    year: { fa: "۱۴۰۲", en: "2023" } as Localized,
    title: { fa: "نخستین کتاب", en: "My first book" } as Localized,
    text: {
      fa: "تألیف کتاب «هندسه‌ی تیزهوشان؛ از شهود تا استدلال» برای دانش‌آموزان پایه‌ی هفتم تا نهم.",
      en: "Wrote \"Gifted Geometry: From Intuition to Proof\" for grade 7–9 students.",
    } as Localized,
  },
  {
    year: { fa: "۱۴۰۳", en: "2024" } as Localized,
    title: { fa: "دپارتمان ریاضی ۷+۱", en: "The 7+1 math department" } as Localized,
    text: {
      fa: "مسئولیت دپارتمان ریاضی مؤسسه آموزشی ۷+۱: طراحی ساختار آموزشی، تربیت مدرس و تولید محتوای دوره‌ها.",
      en: "Took charge of the math department at the 7+1 Institute: curriculum design, teacher training and content production.",
    } as Localized,
  },
  {
    year: { fa: "۱۴۰۴", en: "2025" } as Localized,
    title: { fa: "امروز", en: "Today" } as Localized,
    text: {
      fa: "تدریس آنلاین برای دانش‌آموزان سراسر کشور، نگارش کتاب‌های بعدی و اجرای کارگاه‌های حل مسئله.",
      en: "Teaching online for students nationwide, writing the next books and running problem-solving workshops.",
    } as Localized,
  },
];

export const approach = [
  {
    step: "01",
    title: { fa: "سنجش و شناخت پیش‌نیازها", en: "Diagnose the prerequisites" } as Localized,
    text: {
      fa: "با یک آزمون تشخیصی کوتاه، شکاف‌های پایه مشخص می‌شود؛ چون ریاضی روی ریاضی ساخته می‌شود.",
      en: "A short diagnostic test maps the foundational gaps — because math is built on math.",
    } as Localized,
  },
  {
    step: "02",
    title: { fa: "ساخت شهود پیش از فرمول", en: "Build intuition before formulas" } as Localized,
    text: {
      fa: "هر مفهوم اول با تصویر، مثال واقعی و بازیِ عددی جا می‌افتد و بعد به فرمول می‌رسیم.",
      en: "Each concept lands first through pictures, real examples and number play — the formula comes afterwards.",
    } as Localized,
  },
  {
    step: "03",
    title: { fa: "الگوها و تکنیک‌های تستی", en: "Patterns & exam techniques" } as Localized,
    text: {
      fa: "دسته‌بندی نکات، تله‌های رایج و راه‌حل‌های سریع؛ بدون قربانی‌کردن درک مفهومی.",
      en: "Grouped key points, common traps and fast solutions — without sacrificing conceptual depth.",
    } as Localized,
  },
  {
    step: "04",
    title: { fa: "تمرین هدفمند و گزارش پیشرفت", en: "Targeted practice & reporting" } as Localized,
    text: {
      fa: "بانک سؤال شخصی‌سازی‌شده، تحلیل خطا و ارسال گزارش هفتگی برای دانش‌آموز و خانواده.",
      en: "A personalized problem bank, error analysis and a weekly report for student and family.",
    } as Localized,
  },
];

export type CourseCat = "gifted" | "konkur" | "olympiad" | "advising";

export const courseFilters: { id: "all" | CourseCat; label: Localized }[] = [
  { id: "all", label: { fa: "همه", en: "All" } },
  { id: "gifted", label: { fa: "تیزهوشان", en: "Gifted" } },
  { id: "konkur", label: { fa: "کنکور", en: "Konkur" } },
  { id: "olympiad", label: { fa: "المپیاد", en: "Olympiad" } },
  { id: "advising", label: { fa: "مشاوره", en: "Advising" } },
];

export const courses: {
  id: string;
  title: Localized;
  cat: CourseCat;
  badge?: Localized;
  summary: Localized;
  meta: { sessions: Localized; duration: Localized; format: Localized; capacity: Localized };
  features: Localized<string[]>;
}[] = [
  {
    id: "gifted-7-9",
    title: {
      fa: "ریاضیات تیزهوشان (پایه هفتم تا نهم)",
      en: "Gifted Mathematics (Grades 7–9)",
    },
    cat: "gifted",
    badge: { fa: "پرطرفدار", en: "Most popular" },
    summary: {
      fa: "دوره‌ی کامل آمادگی آزمون سمپاد با تمرکز بر هوش‌ریاضی، ترکیبیات و سرعت عمل؛ همراه با آزمون شبیه‌ساز.",
      en: "Complete SAMPAD exam preparation focused on mathematical reasoning, combinatorics and speed — includes full mock exams.",
    },
    meta: {
      sessions: { fa: "۴۸ جلسه", en: "48 sessions" },
      duration: { fa: "هر جلسه ۹۰ دقیقه", en: "90 min per session" },
      format: { fa: "حضوری بیرجند + آنلاین", en: "In-person Birjand + online" },
      capacity: { fa: "۱۲ نفر", en: "12 students" },
    },
    features: {
      fa: [
        "آزمون تشخیصی و طرح درس شخصی",
        "جزوه‌ی اختصاصی + بانک سؤال سال‌های گذشته",
        "۱۲ آزمون آزمایشی با تحلیل خطا",
        "گزارش هفتگی برای والدین",
      ],
      en: [
        "Diagnostic test and a personal lesson plan",
        "Dedicated handout + past-paper problem bank",
        "12 mock exams with error analysis",
        "Weekly report for parents",
      ],
    },
  },
  {
    id: "konkur-tajrobi",
    title: {
      fa: "ریاضی کنکور تجربی؛ از پایه تا درصد بالا",
      en: "Konkur Mathematics — Sciences Track, from basics to high scores",
    },
    cat: "konkur",
    badge: { fa: "درصد‌ساز", en: "Score builder" },
    summary: {
      fa: "مسیر ۹ ماهه‌ی ریاضی تجربی با درسنامه‌ی فشرده، یادگیری مفهومی و تکنیک‌های مدیریت زمان در جلسه‌ی کنکور.",
      en: "A nine-month path through Sciences-track math: condensed lessons, conceptual learning and exam-day time management.",
    },
    meta: {
      sessions: { fa: "۳۶ جلسه", en: "36 sessions" },
      duration: { fa: "هر جلسه ۱۲۰ دقیقه", en: "120 min per session" },
      format: { fa: "آنلاین زنده + آفلاین", en: "Live online + recordings" },
      capacity: { fa: "۱۴ نفر", en: "14 students" },
    },
    features: {
      fa: [
        "تقسیم‌بندی فصل‌به‌فصل با زمان‌بندی هفتگی",
        "۱۰۴۰ تست طبقه‌بندی‌شده با پاسخ تشریحی",
        "آزمون‌های آزمون‌محور هر دو هفته",
        "جلسه‌ی مشاوره‌ی فردی ماهانه",
      ],
      en: [
        "Chapter-by-chapter plan with weekly timing",
        "1040 tiered MCQs with full solutions",
        "Exam-style test every two weeks",
        "Monthly one-to-one advising session",
      ],
    },
  },
  {
    id: "konkur-riazi",
    title: {
      fa: "حسابان، هندسه و گسسته (کنکور ریاضی)",
      en: "Calculus, Geometry & Discrete Math (Konkur — Math Track)",
    },
    cat: "konkur",
    summary: {
      fa: "برای دانش‌آموزان رشته‌ی ریاضی‌فیزیک: سه کتاب تخصصی، حل‌مسئله‌های سطح المپیادی سبک و آمادگی آزمون‌های تیزهوشان دانشگاهی.",
      en: "For Math-Physics students: three advanced textbooks, light-olympiad problem work and preparation for top-tier university admissions.",
    },
    meta: {
      sessions: { fa: "۴۲ جلسه", en: "42 sessions" },
      duration: { fa: "هر جلسه ۱۲۰ دقیقه", en: "120 min per session" },
      format: { fa: "آنلاین زنده", en: "Live online" },
      capacity: { fa: "۱۰ نفر", en: "10 students" },
    },
    features: {
      fa: [
        "پوشش کامل سه کتاب درسی با عمق بیشتر",
        "حل مسائل سطح سخت برای رتبه‌های برتر",
        "کارگاه رفع اشکال هفتگی",
        "آرشیو ویدیویی جلسات",
      ],
      en: [
        "Full coverage of all three textbooks, in greater depth",
        "Hard-level problems for top ranks",
        "Weekly Q&A workshop",
        "Video archive of every session",
      ],
    },
  },
  {
    id: "olympiad",
    title: {
      fa: "کارگاه المپیاد ریاضی و حل مسئله",
      en: "Olympiad & Problem-Solving Workshop",
    },
    cat: "olympiad",
    badge: { fa: "ویژه", en: "Selective" },
    summary: {
      fa: "کارگاهی مسئله‌محور برای دانش‌آموزان علاقه‌مند: ترکیبیات، استدلال و اثبات‌نویسی با چالش‌های هفتگی.",
      en: "A problem-centred workshop for keen students: combinatorics, reasoning and proof writing with weekly challenges.",
    },
    meta: {
      sessions: { fa: "۲۴ جلسه", en: "24 sessions" },
      duration: { fa: "هر جلسه ۱۰۵ دقیقه", en: "105 min per session" },
      format: { fa: "حضوری + آنلاین", en: "In-person + online" },
      capacity: { fa: "۸ نفر", en: "8 students" },
    },
    features: {
      fa: [
        "مسائل منتخب المپیاد‌های داخلی و جهانی",
        "آموزش اثبات‌نویسی و استدلال دقیق",
        "باشگاه حل مسئله‌ی هفتگی",
        "منتورینگ فردی برای پروژه‌های کوچک ریاضی",
      ],
      en: [
        "Curated problems from national & international olympiads",
        "Training in proof writing and rigorous reasoning",
        "Weekly problem-solving club",
        "Personal mentoring for small math projects",
      ],
    },
  },
  {
    id: "combinatorics",
    title: {
      fa: "شمارش و ترکیبیات؛ از صفر تا استدلال",
      en: "Counting & Combinatorics — From Zero to Rigour",
    },
    cat: "olympiad",
    summary: {
      fa: "دوره‌ی موضوعی برای تسلط بر اصل ضرب، جایگشت، ترکیب و اصل شمول و عدم شمول با نگاهی شهودی.",
      en: "A topic course mastering the product rule, permutations, combinations and inclusion–exclusion with an intuitive lens.",
    },
    meta: {
      sessions: { fa: "۱۶ جلسه", en: "16 sessions" },
      duration: { fa: "هر جلسه ۹۰ دقیقه", en: "90 min per session" },
      format: { fa: "آنلاین", en: "Online" },
      capacity: { fa: "۱۵ نفر", en: "15 students" },
    },
    features: {
      fa: [
        "۱۸۴ مسئله از آسان تا المپیادی",
        "پروژه‌ی پایانی: حل یک مسئله‌ی باز",
        "پیش‌نیاز: ریاضی پایه‌ی هفتم",
        "جزوه‌ی PDF رایگان",
      ],
      en: [
        "184 problems, from easy to olympiad level",
        "Final project: solve an open problem",
        "Prerequisite: grade-7 mathematics",
        "Free PDF handout",
      ],
    },
  },
  {
    id: "counseling",
    title: {
      fa: "مشاوره و برنامه‌ریزی تحصیلی ریاضی",
      en: "Math Study Advising & Planning",
    },
    cat: "advising",
    summary: {
      fa: "جلسات فردی برای انتخاب مسیر، تعیین سطح، برنامه‌ریزی هفتگی و رفع اضطراب امتحان در درس ریاضی.",
      en: "One-to-one sessions on path selection, level assessment, weekly planning and easing exam anxiety in mathematics.",
    },
    meta: {
      sessions: { fa: "۴ جلسه", en: "4 sessions" },
      duration: { fa: "هر جلسه ۴۵ دقیقه", en: "45 min per session" },
      format: { fa: "آنلاین / تلفنی", en: "Online / phone" },
      capacity: { fa: "فردی", en: "One-to-one" },
    },
    features: {
      fa: [
        "آزمون تعیین سطح و تفسیر نتایج",
        "برنامه‌ی هفتگی مکتوب",
        "پیگیری بین جلسات با پیام",
        "جلسه‌ی رایگان اولیه",
      ],
      en: [
        "Level test with a written interpretation",
        "Weekly written study plan",
        "Follow-up between sessions by message",
        "Free introductory session",
      ],
    },
  },
];

export const books = [
  {
    title: { fa: "هندسه‌ی تیزهوشان؛ از شهود تا استدلال", en: "Gifted Geometry — From Intuition to Proof" } as Localized,
    year: { fa: "۱۴۰۲", en: "2023" } as Localized,
    pages: { fa: "۳۲۰ صفحه", en: "320 pages" } as Localized,
    edition: { fa: "چاپ سوم — ویرایش ۱۴۰۴", en: "3rd edition — 2025 revision" } as Localized,
    text: {
      fa: "از مطالب پایه‌ی هندسه تا مسائل چالشی استعدادهای درخشان؛ با تمرین‌های سه‌سطحی و راهنمای حل گام‌به‌گام.",
      en: "From foundational geometry to challenge problems for gifted students, with three-tiered exercises and step-by-step solutions.",
    } as Localized,
    tags: {
      fa: ["پایه هفتم تا نهم", "آزمون سمپاد", "اثبات‌نویسی"],
      en: ["Grades 7–9", "SAMPAD exam", "Proof writing"],
    } as Localized<string[]>,
  },
  {
    title: { fa: "۱۰۴۰ تست حسابان و ریاضیات کنکور", en: "1040 Konkur Calculus & Math Problems" } as Localized,
    year: { fa: "۱۴۰۳", en: "2024" } as Localized,
    pages: { fa: "۴۱۶ صفحه", en: "416 pages" } as Localized,
    edition: { fa: "چاپ اول", en: "1st edition" } as Localized,
    text: {
      fa: "تست‌های طبقه‌بندی‌شده با سطح‌بندی آسان/متوسط/سخت، پاسخ تشریحی کامل و بخش «تله‌ی تستی» در پایان هر فصل.",
      en: "Tiered MCQs graded easy/medium/hard, complete worked solutions and a \"test trap\" section closing each chapter.",
    } as Localized,
    tags: {
      fa: ["کنکور", "تحلیل خطا", "تکنیک تست‌زنی"],
      en: ["Konkur", "Error analysis", "MCQ technique"],
    } as Localized<string[]>,
  },
  {
    title: { fa: "ترکیبیات و شمارش با رویکرد حل مسئله", en: "Combinatorics & Counting, Problem-Solving First" } as Localized,
    year: { fa: "۱۴۰۴", en: "2025" } as Localized,
    pages: { fa: "۲۶۴ صفحه", en: "264 pages" } as Localized,
    edition: { fa: "چاپ دوم", en: "2nd edition" } as Localized,
    text: {
      fa: "شمارش بدون فرمول‌زده‌شدن؛ روایت‌های شهودی، مسئله‌های باز و کارگاه‌های حل مسئله برای دانش‌آموزان باانگیزه.",
      en: "Counting without formula fatigue: intuitive narratives, open problems and workshops for motivated students.",
    } as Localized,
    tags: {
      fa: ["المپیاد", "ترکیبیات", "کارگاه"],
      en: ["Olympiad", "Combinatorics", "Workshop"],
    } as Localized<string[]>,
  },
];

export const results = [
  {
    name: { fa: "سارا محمدی", en: "Sara Mohammadi" } as Localized,
    role: { fa: "پایه‌ی نهم — بیرجند", en: "Grade 9 — Birjand" } as Localized,
    text: {
      fa: "سال‌ها از هندسه فرار می‌کردم. امسال اولین بار بود که می‌فهمیدم چرا یک مسئله درست است، نه فقط اینکه چطور حل می‌شود. در آزمون سمپاد هم قبول شدم.",
      en: "I used to run away from geometry. This year, for the first time, I understood why a statement is true — not just how to solve it. And I passed the SAMPAD exam.",
    } as Localized,
  },
  {
    name: { fa: "محمدرضا کاظمی", en: "Mohammadreza Kazemi" } as Localized,
    role: { fa: "کنکور تجربی ۱۴۰۳", en: "Konkur Sciences 2024" } as Localized,
    text: {
      fa: "درصد ریاضی من از ۱۸ به ۶۷ رسید. مهم‌تر از درصد، این بود که دیگر از دیدن سؤال‌های طولانی نمی‌ترسیدم؛ یاد گرفتم از کجا شروع کنم.",
      en: "My math score went from 18% to 67%. More important than the number: I stopped fearing long questions — I learned where to start.",
    } as Localized,
  },
  {
    name: { fa: "الناز رحیمی", en: "Elnaz Rahimi" } as Localized,
    role: { fa: "دوره‌ی آنلاین — مشهد", en: "Online course — Mashhad" } as Localized,
    text: {
      fa: "فکر می‌کردم کلاس آنلاین بازدهی ندارد. کلاس ایشان تعاملی، منظم و پر از تمرین هدفمند بود؛ کیفیتش از بعضی کلاس‌های حضوری بهتر بود.",
      en: "I thought online classes don't work. His sessions were interactive, organized and full of targeted practice — better than several in-person classes I'd had.",
    } as Localized,
  },
  {
    name: { fa: "حسین نوروزی", en: "Hossein Norouzi" } as Localized,
    role: { fa: "پایه‌ی یازدهم — قائن", en: "Grade 11 — Qaen" } as Localized,
    text: {
      fa: "جزوه‌ها فوق‌العاده طبقه‌بندی شده‌اند. هر جلسه دقیقاً می‌دانم چه چیزی تمرین کنم و کجای مسیر هستم. پیگیری هفتگی‌شان عالی است.",
      en: "The handouts are brilliantly organized. After every session I know exactly what to practice and where I stand on the path. The weekly follow-up is excellent.",
    } as Localized,
  },
  {
    name: { fa: "پدر امیرحسین", en: "Amirhossein's father" } as Localized,
    role: { fa: "اولیای دانش‌آموز", en: "Parent" } as Localized,
    text: {
      fa: "برخورد حرفه‌ای، خوش‌قولی و گزارش‌های هفتگی باعث شد خیال‌مان راحت باشد. حس می‌کنیم یک نفر واقعاً مسیر فرزندمان را جدی گرفته است.",
      en: "Professional approach, reliability and weekly reports put us at ease. We feel someone is genuinely invested in our son's progress.",
    } as Localized,
  },
];

export const faqs = [
  {
    q: { fa: "کلاس‌ها حضوری برگزار می‌شوند یا آنلاین؟", en: "Are classes in-person or online?" },
    a: {
      fa: "هر دو. کلاس‌های گروهی به‌صورت حضوری در بیرجند (مؤسسه آموزشی ۷+۱) و به‌صورت آنلاین زنده برای دانش‌آموزان سراسر کشور برگزار می‌شود؛ نسخه‌ی ضبط‌شده‌ی جلسات هم در اختیار دانش‌آموزان قرار می‌گیرد.",
      en: "Both. Group cohorts run in person in Birjand (7+1 Institute) and live online for students nationwide; recordings are also provided to enrolled students.",
    },
  },
  {
    q: { fa: "برای چه پایه‌ها و چه آزمون‌هایی تدریس می‌کنید؟", en: "Which grades and exams do you cover?" },
    a: {
      fa: "پایه‌های هفتم تا نهم (آزمون تیزهوشان و نمونه‌دولتی)، دهم تا دوازدهم (کنکور تجربی و ریاضی) و دانش‌آموزان علاقه‌مند به المپیاد ریاضی و کارگاه‌های حل مسئله.",
      en: "Grades 7–9 (SAMPAD and top public-school entrance exams), grades 10–12 (Konkur Sciences and Math tracks), plus olympiad and problem-solving workshops for keen students.",
    },
  },
  {
    q: { fa: "باید کتاب یا جزوه‌ی خاصی تهیه کنم؟", en: "Do I need to buy any book or handout?" },
    a: {
      fa: "خیر. جزوه‌ی اختصاصی هر دوره همراه با بانک سؤال و پاسخ تشریحی در اختیار شما قرار می‌گیرد. استفاده از کتاب‌های چاپی موجود در بازار اختیاری و مکمل است.",
      en: "No. Every course comes with its dedicated handout plus a problem bank with worked solutions. Published books are optional supplements.",
    },
  },
  {
    q: { fa: "ظرفیت هر کلاس چند نفر است؟", en: "How many students are in each class?" },
    a: {
      fa: "کلاس‌های گروهی با حداکثر ۱۲ تا ۱۵ نفر برگزار می‌شوند تا فرصت پرسش و رفع اشکال برای همه فراهم باشد. کلاس‌های خصوصی و نیمه‌خصوصی هم پذیرفته می‌شود.",
      en: "Group cohorts cap at 12–15 students so everyone gets time to ask and fix gaps. Private and semi-private sessions are available too.",
    },
  },
  {
    q: { fa: "هزینه‌ی دوره‌ها چگونه محاسبه می‌شود؟", en: "How is the tuition calculated?" },
    a: {
      fa: "هزینه بر اساس تعداد جلسات و شکل کلاس (گروهی، نیمه‌خصوصی، خصوصی یا آنلاین) تعیین می‌شود. جلسه‌ی مشاوره‌ی اولیه برای تعیین سطح و انتخاب مسیر رایگان است.",
      en: "Tuition depends on session count and class format (group, semi-private, private or online). The first assessment and path-planning session is free.",
    },
  },
  {
    q: { fa: "برای ثبت‌نام چه کاری باید انجام دهم؟", en: "How do I enrol?" },
    a: {
      fa: "از بخش «رزرو جلسه» یک بازه‌ی زمانی را انتخاب کنید یا فرم تماس را پر کنید. حداکثر تا ۲۴ ساعت بعد برای هماهنگی جلسه‌ی تعیین سطح با شما تماس گرفته می‌شود.",
      en: "Pick a slot in the Booking section or fill in the contact form. I'll call you within 24 hours to arrange the assessment session.",
    },
  },
];

export const schedule: {
  id: string;
  day: Localized;
  note: Localized;
  slots: { time: string; label: Localized; off?: boolean }[];
}[] = [
  {
    id: "sat",
    day: { fa: "شنبه", en: "Saturday" },
    note: { fa: "کلاس‌های حضوری ۷+۱", en: "In-person classes at 7+1" },
    slots: [
      { time: "16:00", label: { fa: "پایه نهم — تیزهوشان", en: "Grade 9 — gifted prep" } },
      { time: "17:30", label: { fa: "پایه هشتم — تیزهوشان", en: "Grade 8 — gifted prep" } },
      { time: "19:00", label: { fa: "مشاوره فردی", en: "Private advising" }, off: true },
    ],
  },
  {
    id: "sun",
    day: { fa: "یکشنبه", en: "Sunday" },
    note: { fa: "کلاس‌های آنلاین", en: "Online classes" },
    slots: [
      { time: "17:00", label: { fa: "کنکور تجربی", en: "Konkur — Sciences" } },
      { time: "19:00", label: { fa: "حسابان — کنکور ریاضی", en: "Calculus — Konkur Math" } },
      { time: "20:30", label: { fa: "کارگاه حل مسئله", en: "Problem-solving workshop" } },
    ],
  },
  {
    id: "mon",
    day: { fa: "دوشنبه", en: "Monday" },
    note: { fa: "روز تألیف و تولید محتوا", en: "Writing & content production day" },
    slots: [
      { time: "—", label: { fa: "بدون کلاس", en: "No class" }, off: true },
      { time: "—", label: { fa: "بدون کلاس", en: "No class" }, off: true },
      { time: "—", label: { fa: "بدون کلاس", en: "No class" }, off: true },
    ],
  },
  {
    id: "tue",
    day: { fa: "سه‌شنبه", en: "Tuesday" },
    note: { fa: "کلاس‌های آنلاین", en: "Online classes" },
    slots: [
      { time: "17:00", label: { fa: "ریاضی دهم", en: "Grade 10 math" } },
      { time: "18:30", label: { fa: "ریاضی یازدهم", en: "Grade 11 math" } },
      { time: "20:00", label: { fa: "گسسته و آمار", en: "Discrete math & statistics" } },
    ],
  },
  {
    id: "wed",
    day: { fa: "چهارشنبه", en: "Wednesday" },
    note: { fa: "مرور و آزمون", en: "Review & mock exams" },
    slots: [
      { time: "16:00", label: { fa: "آزمون شبیه‌ساز سمپاد", en: "SAMPAD mock exam" } },
      { time: "18:00", label: { fa: "تحلیل آزمون", en: "Exam analysis" } },
      { time: "19:30", label: { fa: "رفع اشکال آزاد", en: "Open Q&A" } },
    ],
  },
  {
    id: "thu",
    day: { fa: "پنجشنبه", en: "Thursday" },
    note: { fa: "کارگاه‌ها و مشاوره", en: "Workshops & advising" },
    slots: [
      { time: "10:00", label: { fa: "کارگاه المپیاد", en: "Olympiad workshop" } },
      { time: "12:00", label: { fa: "کارگاه ترکیبیات", en: "Combinatorics workshop" } },
      { time: "14:00", label: { fa: "مشاوره و برنامه‌ریزی", en: "Advising & planning" } },
    ],
  },
];

export const challenges = [
  {
    level: { fa: "هفتم تا نهم", en: "Grades 7–9" } as Localized,
    q: {
      fa: "مجموع n عدد فرد متوالی را در نظر بگیرید. ثابت کنید این مجموع همیشه بر n بخش‌پذیر است.",
      en: "Take the sum of n consecutive odd numbers. Prove that this sum is always divisible by n.",
    } as Localized,
    a: {
      fa: "میانگین اعداد فرد متوالی برابر عدد وسط است؛ چون تعدادشان n است، مجموع = n × (عدد وسط). پس مجموع همیشه مضربی از n است.",
      en: "The average of consecutive odd numbers is the middle term; since there are n of them, the sum = n × (middle term). So the sum is always a multiple of n.",
    } as Localized,
    hint: {
      fa: "به میانگین فکر کنید، نه به فرمول‌های طولانی.",
      en: "Think about the average, not long formulas.",
    } as Localized,
  },
  {
    level: { fa: "هشتم به بالا", en: "Grade 8 and up" } as Localized,
    q: {
      fa: "چند عدد سه‌رقمی وجود دارد که رقم‌هایش از چپ به راست اکیداً نزولی باشد؟ (مثل ۷۴۱)",
      en: "How many three-digit numbers have digits strictly decreasing from left to right? (e.g. 741)",
    } as Localized,
    a: {
      fa: "کافی است سه رقم متفاوت از مجموعه‌ی {۱,...,۹} انتخاب کنیم؛ ترتیب نزولی یکتاست، پس C(9,3) = ۸۴ عدد.",
      en: "Just choose three distinct digits from {1,…,9}; the decreasing order is unique, so C(9,3) = 84 numbers.",
    } as Localized,
    hint: {
      fa: "یک انتخاب، یک عدد اکیداً نزولی می‌سازد.",
      en: "One selection determines exactly one decreasing number.",
    } as Localized,
  },
  {
    level: { fa: "کنکوری", en: "Konkur level" } as Localized,
    q: {
      fa: "اگر a + b = ۷ و ab = ۱۲ باشد، مقدار a³ + b³ چقدر است؟",
      en: "If a + b = 7 and ab = 12, what is a³ + b³?",
    } as Localized,
    a: {
      fa: "از اتحاد a³ + b³ = (a+b)³ − 3ab(a+b) داریم: ۳۴۳ − ۳×۱۲×۷ = ۳۴۳ − ۲۵۲ = ۹۱.",
      en: "Using a³ + b³ = (a+b)³ − 3ab(a+b): 343 − 3×12×7 = 343 − 252 = 91.",
    } as Localized,
    hint: {
      fa: "اتحاد مجموع مکعبات را بازنویسی کنید.",
      en: "Rewrite the sum-of-cubes identity.",
    } as Localized,
  },
  {
    level: { fa: "هوش‌ریاضی", en: "Numerical reasoning" } as Localized,
    q: {
      fa: "حاصل ۱ + ۲ + ۳ + ... + ۱۰۰ را بدون ماشین‌حساب و در کمتر از ۱۵ ثانیه به دست آورید.",
      en: "Find 1 + 2 + 3 + … + 100 without a calculator — and in under 15 seconds.",
    } as Localized,
    a: {
      fa: "۵۰۵۰؛ جفت‌کردن دو سر دنباله (۱+۱۰۰، ۲+۹۹ و ...) می‌دهد ۵۰ جفت برابر ۱۰۱.",
      en: "5050: pairing the ends (1+100, 2+99, …) gives 50 pairs of 101.",
    } as Localized,
    hint: {
      fa: "جفت‌کردن سرها؛ همان ایده‌ی گاوس کوچک.",
      en: "Pair the ends — the young Gauss trick.",
    } as Localized,
  },
];

export const contact = {
  phone: { fa: "۰۹۱۲ — ۳۴۵ ۶۷۸۹", en: "+98 912 345 6789" } as Localized,
  phoneRaw: "+989123456789",
  email: "contact@daghighifar.ir",
  instagram: "@daghighifar.math",
  telegram: "@daghighifar",
  location: {
    fa: "بیرجند، خیابان مدرس، مؤسسه آموزشی ۷+۱",
    en: "Motahhari St., 7+1 Educational Institute, Birjand",
  } as Localized,
  hours: {
    fa: "شنبه تا چهارشنبه، ۱۶:۰۰ تا ۲۱:۰۰ — پنجشنبه کارگاه‌ها",
    en: "Sat–Wed, 16:00–21:00 — Thursday workshops",
  } as Localized,
};

export const topics: Localized<string[]> = {
  fa: [
    "ریاضیات تیزهوشان (سمپاد)",
    "کنکور تجربی",
    "کنکور ریاضی و فیزیک",
    "المپیاد ریاضی",
    "مشاوره و برنامه‌ریزی",
    "همکاری و دعوت به تدریس",
  ],
  en: [
    "Gifted-class math (SAMPAD)",
    "Konkur — Sciences track",
    "Konkur — Math & Physics",
    "Math olympiad",
    "Advising & planning",
    "Collaboration & teaching invites",
  ],
};

export const notes = [
  {
    cat: { fa: "روش مطالعه", en: "Study method" } as Localized,
    time: { fa: "۳ دقیقه", en: "3 min" } as Localized,
    title: {
      fa: "قبل از خواندنِ حل، دست‌کم ۱۰ دقیقه خودت بجنگ",
      en: "Fight for 10 minutes before reading the solution",
    } as Localized,
    text: {
      fa: "مغز با «دیدنِ راه‌حل» چیزی یاد نمی‌گیرد. اگر بعد از ۱۰ دقیقه تلاش هم به جواب نرسیدی، آن‌وقت راهنمای حل را ببین؛ این بار مسیر برای همیشه در ذهنت ثبت می‌شود.",
      en: "Watching a solution teaches the brain almost nothing. If you haven't cracked it after 10 honest minutes, check the method — now the path sticks for good.",
    } as Localized,
    task: {
      fa: "امروز یک تمرین سخت را با تایمر ۱۰ دقیقه‌ای امتحان کن.",
      en: "Try one hard exercise today with a 10-minute timer.",
    } as Localized,
  },
  {
    cat: { fa: "تیزهوشان", en: "Gifted prep" } as Localized,
    time: { fa: "۴ دقیقه", en: "4 min" } as Localized,
    title: {
      fa: "سه دفتر داشته باش، نه یکی",
      en: "Keep three notebooks, not one",
    } as Localized,
    text: {
      fa: "دفترِ نکته (فقط قواعد کلیدی)، دفترِ خطا (سؤال‌هایی که غلط زدی) و دفترِ سرعت (تمرین زمان‌دار). بیشترین پیشرفت از دفتر خطا می‌آید؛ همان که همه از آن فرار می‌کنند.",
      en: "A notes book (key rules only), an error book (questions you got wrong) and a speed book (timed drills). The biggest gains come from the error book — the one everyone avoids.",
    } as Localized,
    task: {
      fa: "اشتباهات آزمون آخرت را در یک صفحه بازنویسی کن.",
      en: "Rewrite the mistakes from your last exam on a single page.",
    } as Localized,
  },
  {
    cat: { fa: "کنکور", en: "Konkur" } as Localized,
    time: { fa: "۵ دقیقه", en: "5 min" } as Localized,
    title: {
      fa: "مدیریت زمان ریاضی: ۲ گذر از دفترچه",
      en: "Time management: two passes over the booklet",
    } as Localized,
    text: {
      fa: "در گذر اول فقط سؤال‌هایی را بزن که در یک نگاه مسیرشان مشخص است؛ بقیه را نشانه بگذار. در گذر دوم با ذهن آزاد سراغ سؤال‌های سنگین برو؛ این کار ۱۰ تا ۲۰ درصد به کارنامه‌ات اضافه می‌کند.",
      en: "First pass: solve only what is immediately clear and flag the rest. Second pass: attack the heavy questions with a calm mind. This alone can add 10–20 points to your score.",
    } as Localized,
    task: {
      fa: "یک آزمون را با همین استراتژی زمان‌بندی کن.",
      en: "Time one mock exam using exactly this strategy.",
    } as Localized,
  },
  {
    cat: { fa: "المپیاد", en: "Olympiad" } as Localized,
    time: { fa: "۶ دقیقه", en: "6 min" } as Localized,
    title: {
      fa: "برای حل مسئله، سؤال کوچک بساز",
      en: "To solve a problem, shrink it first",
    } as Localized,
    text: {
      fa: "وقتی به مسئله‌ی سختی می‌رسی، آن را کوچک کن: n=۲، n=۳، حالت خاص، شکل ساده‌شده. الگوها در همین حالت‌های کوچک خودشان را نشان می‌دهند؛ این همان مهارتی است که المپیادی‌ها تمرین می‌کنند.",
      en: "When a problem looks hard, shrink it: n=2, n=3, a special case, a simplified figure. Patterns reveal themselves in the small cases — the exact skill olympiad students train.",
    } as Localized,
    task: {
      fa: "یکی از تمرین‌های چالش ریاضی سایت را همین‌طور حل کن.",
      en: "Solve one of the math-challenge exercises on this site that way.",
    } as Localized,
  },
];
