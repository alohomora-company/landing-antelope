import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Middleware configuration
export default createMiddleware({
  ...routing,
  // Force locale prefix for all locales
  localePrefix: "always"
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)", "/"]
};
