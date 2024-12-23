"use client";
import { useLocale, useTranslations } from "next-intl";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const left_navbar_items: MainNavItem[] = [
    {
      URL: "/",
      text: t("leftSide.element1"),
    },
    {
      URL: "/offers",
      text: t("leftSide.element2"),
    },
    {
      URL: "/about-me",
      text: t("leftSide.element3"),
    },
    {
      URL: "/contact",
      text: t("leftSide.element4"),
    },
  ];

  const right_navbar_items: NavItem[] = [
    {
      URL: "/",
      text: t("leftSide.element1"),
    },
  ];
  return (
    <motion.nav className="max-w-7xl  fixed top-4  mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
      <div className="hidden lg:block w-full">
        <DesktopNavbar
          leftNavbarItems={left_navbar_items}
          rightNavbarItems={right_navbar_items}
        />
      </div>
      <div className="flex h-full w-full items-center lg:hidden ">
        <MobileNavbar
          leftNavbarItems={left_navbar_items}
          rightNavbarItems={right_navbar_items}
        />
      </div>
    </motion.nav>
  );
}
