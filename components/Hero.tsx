"use client";
import { Cover } from "@/components/decorations/cover";
import ShootingStars from "@/components/decorations/shooting-star";
import StarBackground from "@/components/decorations/star-background";
import { Heading } from "@/components/elements/heading";
import { Subheading } from "@/components/elements/subheading";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import "./Hero.css";

export function Hero() {
  const [dynamicText, setDynamicText] = useState<string>("");
  const [dynamicTextTitleName, setDynamicTextTitleName] = useState<string>("");
  const [dynamicTextTitleSecondPart, setDynamicTextTitleSecondPart] =
    useState<string>("");
  const [dynamicTextSubtitle, setDynamicTextSubtitle] = useState<string>("");
  const t = useTranslations("home");

  useEffect(() => {
    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const phrases = ["code", "make beats", "hug puppies"];

    let sleepTime = 200;

    let curPhraseIndex = 0;

    const writeLoop = async () => {
      while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
          setDynamicText(curWord.substring(0, i + 1));
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
          setDynamicText(curWord.substring(0, i - 1));
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
          curPhraseIndex = 0;
        } else {
          curPhraseIndex++;
        }
      }
    };

    const writeTitleName = async () => {
      await sleep(300);

      const name = t("title.name");

      for (let i = 0; i < name.length; i++) {
        setDynamicTextTitleName(name.substring(0, i + 1));
        await sleep(100);
      }
    };

    const writeTitleSecondPart = async () => {
      await sleep(2300);

      const titleSecondPart = t("title.secondPart");

      for (let i = 0; i < titleSecondPart.length; i++) {
        setDynamicTextTitleSecondPart(titleSecondPart.substring(0, i + 1));
        await sleep(100);
      }
    };

    const writeSubtitle = async () => {
      await sleep(6300);

      const subtitle = t("subtitle");

      for (let i = 0; i < subtitle.length; i++) {
        setDynamicTextSubtitle(subtitle.substring(0, i + 1));
        await sleep(100);
      }
    };

    writeTitleName();
    writeTitleSecondPart();
    writeSubtitle();

    writeLoop();
  }, []);

  return (
    <div className="h-[calc(100vh-0px)] xl:h-[calc(100vh-0px)] overflow-hidden relative flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <ShootingStars />
        <StarBackground />
      </motion.div>
      <Heading
        as="h1"
        className="text-4xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center mb-16 relative z-10  py-6"
      >
        <span className="inline-block mb-2">
          {t.rich("title.firstPart", {
            cover: (chunks) => <Cover>{dynamicTextTitleName}</Cover>,
            br: () => <br />,
          })}
        </span>

        <br />
        {dynamicTextTitleSecondPart}
        <span className="inline-block cursor-disappear">
          <span className="inline-block cursor-appear">
            <span className="cursor">|</span>
          </span>
        </span>
      </Heading>
      <div className="relative w-full ">
        <Subheading className="smooth-appear w-full text-center text-base md:text-xl text-muted  max-w-3xl mx-auto relative z-10">
          {t("subtitle")}
        </Subheading>
      </div>
      <Link className="smooth-appear-arrow" href="/about-me">
        <svg
          className="animate-bounce w-8 h-8  from-neutral-800 via-white to-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </Link>
    </div>
  );
}
