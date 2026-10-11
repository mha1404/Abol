export type Lang = "fa" | "en";

/** یک مقدار دوزبانه */
export type Localized<T = string> = { fa: T; en: T };
