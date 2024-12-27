"use client";

import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Link } from "@/i18n/routing";
import { Header as HeaderResponseType } from "@/models/Header";
import { Link as LinkType } from "@/models/common/Link";
import { MainLink } from "@/models/common/MainLink";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.webp";
import { Button } from "../elements/button";
import { NavbarItem } from "./navbar-item";

interface OwnProps {
  header: HeaderResponseType;
}

export function Header({ header }: Readonly<OwnProps>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
    <div className="pt-[0px] xl:pt-[0px] bg-transparent">
      <motion.nav
        className={`${
          isOpen
            ? "bg-black"
            : showBackground
            ? "bg-backgroundSecondary xl:bg-transparent"
            : "bg-transparent"
        } flex justify-center top-0 fixed w-full z-50 h-[68px] xl:top-[12px]`}
      >
        {/* mobile nav */}
        <motion.div
          className="w-full mx-auto px-1 sm:px-2 flex items-center transition duration-200  justify-between h-full xl:hidden"
          animate={{
            // width: showBackground ? "95%" : "100%",
            background: showBackground && !isOpen ? "#171717" : "transparent",
          }}
          transition={{
            duration: 0.4,
          }}
        >
          {/* <AnimatePresence>
            {showBackground && !isOpen && (
              <motion.div
                key={String(showBackground)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                }}
                className="absolute inset-0 h-full w-full bg-neutral-900 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent,white)] rounded-md"
              />
            )}
          </AnimatePresence> */}
          <div className="flex items-center gap-12 h-full">
            <Link
              href="/"
              onClick={handleClick}
              className="py-2 pl-4 flex items-center h-full"
            >
              <Image
                priority
                src={Logo}
                alt={"logo"}
                width={0}
                height={0}
                sizes="100px"
                className="h-[75%] w-auto rounded-xl mr-4"
              />
              <span className="text-white  font-bold">Peter Sliwka</span>
              {/* <img
                src={HttpClient.getStrapiMedia(header.logo.image.url)}
                alt={header.logo.image.alternativeText || 'not provided'}
                className="h-full w-auto"
              /> */}
            </Link>
          </div>
          <div className="flex items-center">
            {/* <ToggleThemeButton /> */}
            <LocaleSwitcher />
            <button
              onClick={handleClick}
              aria-label="Menu Burger"
              className="flex flex-col justify-center items-center p-4"
            >
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
              ></span>
            </button>
          </div>
          <nav
            className={`bg-black left-0 top-[68px] absolute w-full h-[calc(100vh-68px)] ${
              isOpen ? "" : "hidden"
            }`}
          >
            <ul className="h-full overflow-y-auto p-4">
              {header.mainLinks.map((mainLink: MainLink) => (
                <li key={mainLink.id} className="mb-2" onClick={handleClick}>
                  {/* eslint-disable-next-line */}
                  <NavbarItem href={mainLink.url as any} isMobile>
                    <span>{mainLink.text}</span>
                  </NavbarItem>
                  {mainLink.nestedLinks.length > 0 && (
                    <ul className="pl-8">
                      {mainLink.nestedLinks.map((nestedLink: LinkType) => (
                        <li key={nestedLink.id}>
                          <NavbarItem
                            // eslint-disable-next-line
                            href={nestedLink.url as any}
                            isMobile
                          >
                            {nestedLink.text}
                          </NavbarItem>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* desktop nav */}
        <motion.div
          className="hidden xl:flex w-full mx-auto max-w-[1544px] px-2 2xl:px-4 flex items-center justify-between relative h-full rounded-md"
          animate={{
            width: showBackground ? "70%" : "100%",
            background: showBackground ? "#171717" : "transparent",
          }}
          transition={{
            duration: 0.4,
          }}
        >
          {/* <AnimatePresence>
            {showBackground && (
              <motion.div
                key={String(showBackground)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                }}
                className="absolute h-full w-full bg-neutral-900 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent,white)] rounded-md"
              />
            )}
          </AnimatePresence> */}
          <div className="flex items-center gap-12 h-full">
            <Link href="/" className="py-2 flex items-center h-full">
              <Image
                priority
                src={Logo}
                alt={"logo"}
                width={0}
                height={0}
                sizes="100px"
                className="h-full w-auto rounded-xl mr-4"
              />
              <span className="text-white  font-bold">Peter Sliwka</span>
              {/* <img
                src={HttpClient.getStrapiMedia(header.logo.image.url)}
                alt={header.logo.image.alternativeText || 'not provided'}
                className="h-full w-auto"
              /> */}
            </Link>
            <nav className="flex items-center h-full">
              <ul className="flex items-center h-full">
                {header.mainLinks.map((mainLink: MainLink) => (
                  <li key={mainLink.id} className="h-full">
                    {/* eslint-disable-next-line */}
                    <NavbarItem href={mainLink.url as any}>
                      <span className="flex items-center relative">
                        <span
                          className={` ${
                            mainLink.nestedLinks.length > 0
                              ? "inline-block mr-2"
                              : ""
                          }`}
                        >
                          {mainLink.text}
                        </span>
                        {mainLink.nestedLinks.length > 0 && (
                          <svg
                            className=""
                            width="8"
                            height="5"
                            viewBox="0 0 8 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_61_3148)">
                              <path
                                d="M7 1L4 4L1 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_61_3148">
                                <rect width="8" height="5" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        )}
                      </span>
                    </NavbarItem>

                    {/* <Link className="nav-link" href={mainLink.url as any}>
                      <span className="block relative">
                        {mainLink.text}
                        {mainLink.nestedLinks.length > 0 && (
                          <svg
                            className="absolute right-[-13px] top-[9px] translate-y-1/2"
                            width="8"
                            height="5"
                            viewBox="0 0 8 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_61_3148)">
                              <path
                                d="M7 1L4 4L1 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_61_3148">
                                <rect width="8" height="5" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        )}
                      </span>
                    </Link> */}
                    {mainLink.nestedLinks.length > 0 && (
                      <div className={`sub-menu__wrapper `}>
                        <ul
                          className={`sub-menu ${
                            showBackground ? "bg-backgroundSecondary" : ""
                          }`}
                        >
                          {mainLink.nestedLinks.map((nestedLink: LinkType) => (
                            <li key={nestedLink.id}>
                              {/* eslint-disable-next-line */}
                              <NavbarItem
                                isMobile
                                href={nestedLink.url as any}
                                className="p-6"
                              >
                                {nestedLink.text}
                              </NavbarItem>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <LocaleSwitcher />
            <Button
              key={header.button.text}
              variant={"primary"}
              as={Link}
              href={header.button.url as any}
            >
              {header.button.text}
            </Button>
            {/* <Link
              className="btn-primary flex items-center"
              // eslint-disable-next-line
              href={header.button.url as any}
              target="_blank"
            >
              <span className="flex items-center mr-3">
                {header.button.text}
              </span>
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6H13M13 6L8.41176 2M13 6L8.41176 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link> */}
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
}
