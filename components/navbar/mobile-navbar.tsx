"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/components/elements/button";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Link } from "@/i18n/routing";

type Props = {
  leftNavbarItems: MainNavItem[];
  rightNavbarItems: NavItem[];
};

export const MobileNavbar = ({ leftNavbarItems, rightNavbarItems }: Props) => {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  return (
    <div
      className={cn(
        "flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200",
        showBackground &&
          "bg-neutral-900  shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]"
      )}
    >
      <IoIosMenu
        className="text-white h-6 w-6"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-start justify-start space-y-10  pt-5  text-xl text-zinc-600  transition duration-200 hover:text-zinc-800">
          <div className="flex items-center justify-between w-full px-5">
            <div className="flex items-center space-x-2">
              <LocaleSwitcher />
              <IoIosClose
                className="h-8 w-8 text-white"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
          <ul className="flex flex-col items-start justify-start gap-[14px] px-8">
            {leftNavbarItems.map((mainNavItem: MainNavItem, idx: number) => (
              <li key={mainNavItem.URL}>
                {mainNavItem.children && mainNavItem.children.length > 0 ? (
                  <>
                    {mainNavItem.children.map(
                      (childNavItem: NavItem, idx: number) => (
                        <Link
                          key={childNavItem.URL + idx}
                          href={childNavItem.URL}
                          onClick={() => setOpen(false)}
                          className="relative max-w-[15rem] text-left text-2xl"
                        >
                          <span className="block text-white">
                            {childNavItem.text}
                          </span>
                        </Link>
                      )
                    )}
                  </>
                ) : (
                  <Link
                    href={mainNavItem.URL}
                    onClick={() => setOpen(false)}
                    className="relative"
                  >
                    <span className="block text-[26px] text-white">
                      {mainNavItem.text}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-row w-full items-start gap-2.5  px-8 py-4 ">
            {rightNavbarItems.map((item: NavItem, index: number) => (
              <Button
                key={item.text}
                variant={
                  index === rightNavbarItems.length - 1 ? "primary" : "simple"
                }
                as={Link}
                href={item.URL}
              >
                {item.text}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
