import { IconRocket } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Container } from "./container";
import { Heading } from "./elements/heading";
import { Subheading } from "./elements/subheading";
import { FeatureIconContainer } from "./feature-icon-container";
import { memo } from "react";
import { SparklesCore } from "./ui/sparkles";

export const TechStack = () => {
  const t = useTranslations("home.techStack");

  const technologies: Technology[] = [
    {
      name: "React",
      logo: "/tech-icons/react.svg",
    },
    {
      name: "Typescript",
      logo: "/tech-icons/typescript.svg",
    },
    {
      name: "Material UI",
      logo: "/tech-icons/mui.svg",
    },
    {
      name: "Next.js",
      logo: "/tech-icons/next.svg",
    },
    {
      name: "Strapi",
      logo: "/tech-icons/strapi.svg",
    },
    {
      name: "Javascript",
      logo: "/tech-icons/javascript.svg",
    },
    // level Two
    {
      name: "CSS",
      logo: "/tech-icons/css.svg",
    },
    {
      name: "SCSS",
      logo: "/tech-icons/sass.svg",
    },
    {
      name: "Styled Components",
      logo: "/tech-icons/styled-components.svg",
    },
    {
      name: "Unit Tests",
      logo: "/tech-icons/testing.svg",
    },
    {
      name: "Integration Tests",
      logo: "/tech-icons/testing.svg",
    },
    {
      name: "Testcafe",
      logo: "/tech-icons/testcafe.svg",
    },
    {
      name: "Jest",
      logo: "/tech-icons/jest.svg",
    },
    {
      name: "Testing-Library",
      logo: "/tech-icons/react-testing-library.svg",
    },
    {
      name: "TDD",
      logo: "/tech-icons/testing.svg",
    },
    {
      name: "Tailwind",
      logo: "/tech-icons/tailwind.svg",
    },
    {
      name: "Firebase",
      logo: "/tech-icons/firebase.svg",
    },
    {
      name: "REST API",
      logo: "/tech-icons/rest-api.svg",
    },
    {
      name: "Vimeo",
      logo: "/tech-icons/vimeo.svg",
    },
    {
      name: "Stripe",
      logo: "/tech-icons/stripe.svg",
    },
    {
      name: "HTML",
      logo: "/tech-icons/html.svg",
    },
  ];

  const levelOne = technologies.slice(0, 7);
  const levelTwo = technologies.slice(7, 13);
  const levelThree = technologies.slice(13, 20);

  return (
    // <GradientContainer className="md:my-20">
    <Container
      className="py-20 max-w-7xl mx-auto  relative z-40"
      id="tech-stack"
    >
      <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
        <IconRocket className="h-6 w-6 text-secondary" />
      </FeatureIconContainer>
      <Heading className="pt-4 relative">
        {t("title")}
        <div className="absolute left-1/2 -translate-x-1/2 top-[20px] sm:top-[18px] -z-10 w-[230px] sm:w-[270px] h-[35px] sm:h-[50px]">
          <MemoizedSparklesCore
            id="new-particles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={600}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </Heading>
      <Subheading className="max-w-3xl mx-auto mb-32">
        {t("subtitle")}
      </Subheading>

      <div className="mx-auto max-w-[550px]">
        <div className="flex h-full relative">
          <div className="h-full absolute w-20 left-0 inset-y-0 z-30 bg-gradient-to-r from-charcoal to-transparent" />
          <div className="h-full absolute w-20 right-0 inset-y-0 z-30 bg-gradient-to-l from-charcoal to-transparent" />
          {/* <div className="absolute left-1/2 -translate-x-1/2 w-[100%] -z-10 ">
            <MemoizedSparklesCore
              id="new-particles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div> */}
          <Marquee>
            {levelOne.map((technology: Technology, index: number) => (
              <li
                key={technology.name}
                className="mx-4 list-none flex flex-col items-center relative"
              >
                <Image
                  width={0}
                  height={0}
                  alt="hexagon"
                  src="/hexagon.png"
                  className="mb-2 w-[85px] h-[90px] sm:w-[105px] sm:h-[110px]"
                  sizes="110px"
                />
                <Image
                  width={0}
                  height={0}
                  alt={technology.name}
                  src={technology.logo}
                  className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-85%] sm:translate-y-[-80%] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                />
                <p className="text-white text-center">{technology.name}</p>
              </li>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="mx-auto max-w-[400px] mt-12 sm:mt-16">
        <div className="flex h-full relative">
          <div className="h-full absolute w-20 left-0 inset-y-0 z-30 bg-gradient-to-r from-charcoal to-transparent" />
          <div className="h-full absolute w-20 right-0 inset-y-0 z-30 bg-gradient-to-l from-charcoal to-transparent" />
          <Marquee direction="right">
            {levelTwo.map((technology: Technology, index: number) => (
              <li
                key={technology.name}
                className="mx-4 list-none flex flex-col items-center relative"
              >
                <Image
                  width={0}
                  height={0}
                  alt="hexagon"
                  src="/hexagon.png"
                  className="mb-2 w-[85px] h-[90px] sm:w-[105px] sm:h-[110px]"
                  sizes="110px"
                />
                <Image
                  width={0}
                  height={0}
                  alt={technology.name}
                  src={technology.logo}
                  className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-85%] sm:translate-y-[-80%] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                />
                <p className="text-white text-center">{technology.name}</p>
              </li>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="mx-auto max-w-[550px] mt-12 sm:mt-16">
        <div className="flex h-full relative">
          <div className="h-full absolute w-20 left-0 inset-y-0 z-30 bg-gradient-to-r from-charcoal to-transparent" />
          <div className="h-full absolute w-20 right-0 inset-y-0 z-30 bg-gradient-to-l from-charcoal to-transparent" />
          <Marquee>
            {levelThree.map((technology: Technology, index: number) => (
              <li
                key={technology.name}
                className="mx-4 list-none flex flex-col items-center relative"
              >
                <Image
                  width={0}
                  height={0}
                  alt="hexagon"
                  src="/hexagon.png"
                  className="mb-2 w-[85px] h-[90px] sm:w-[105px] sm:h-[110px]"
                  sizes="110px"
                />
                <Image
                  width={0}
                  height={0}
                  alt={technology.name}
                  src={technology.logo}
                  className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-85%] sm:translate-y-[-80%] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                />
                <p className="text-white text-center">{technology.name}</p>
              </li>
            ))}
          </Marquee>
        </div>
      </div>
    </Container>
    // </GradientContainer>
  );
};

const MemoizedSparklesCore = memo(SparklesCore);
