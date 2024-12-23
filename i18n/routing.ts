import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const localePrefix = "as-needed";
export const defaultLocale = "en" as const;
export const locales: string[] = ["en", "pl"];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  localePrefix,
  pathnames: {
    "/": "/",
    "/offers": {
      en: "/offers",
      pl: "/oferty",
    },
    "/about-me": {
      en: "/about-me",
      pl: "/o-mnie",
    },
    "/contact": {
      en: "/contact",
      pl: "/kontakt",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
