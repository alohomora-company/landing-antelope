import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [
    "en",
    "ko",
    "ja",
    "de",
    "fr",
    "es",
    "it",
    "pt",
    "hi",
    "zhtw",
    "zhcn",
  ],

  // Used when no locale matches
  defaultLocale: "en",
});
