import createMiddleware from "next-intl/middleware";

// Middleware configuration
export default createMiddleware({
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
    "zhcn"
  ],

  // Used when no locale matches
  defaultLocale: "en",

  // Force locale prefix for all locales
  localePrefix: "always",
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)", "/"],
};
