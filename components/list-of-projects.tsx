"use client";
import { motion, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll";
import { IconRocket } from "@tabler/icons-react";
import { useScroll } from "framer-motion";
import { FeatureIconContainer } from "./feature-icon-container";
import { Heading } from "./elements/heading";
import { Subheading } from "./elements/subheading";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Project, ProjectWithDecoration } from "@/models/Project";
import Image from "next/image";

export const ListOfProjects = () => {
  const t = useTranslations();

  const projects: Project[] = [
    {
      projectNumber: 1,
      title: t("home.listOfProjects.projects.project1.title"),
      description: t("home.listOfProjects.projects.project1.description"),
      imageUrl: "/christianspotmovies.png",
      linkToFrontendProd: "https://christianspotmovies.com",
      linkToFrontendDev: "https://dev.christianspotmovies.com",
      linkToFigma:
        "https://www.figma.com/design/WmHtiJfmz6RB9ie26Qlsbf/Praca-in%C5%BCynierska?node-id=17-407&t=cObSOjF1BRlkE1rP-0",
      linkToFrontendRepo:
        "https://gitlab.com/piotrsliwka333/movies-watch-web-application",
      usedTechnologies: [
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
          name: "Firebase",
          logo: "/tech-icons/firebase.svg",
        },
        {
          name: "Stripe",
          logo: "/tech-icons/stripe.svg",
        },
        {
          name: "Styled Components",
          logo: "/tech-icons/styled-components.svg",
        },
      ],
    },
    {
      projectNumber: 2,
      title: t("home.listOfProjects.projects.project2.title"),
      description: t("home.listOfProjects.projects.project2.description"),
      imageUrl: "/pitneybowes.png",
      linkToFrontendProd: "https://pitneybowes.shipment.co/track",
      linkToFrontendDev: "https://pitneybowes.shipment-dev.co/track",
      usedTechnologies: [
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
          name: "Styled Components",
          logo: "/tech-icons/styled-components.svg",
        },
        {
          name: "REST API",
          logo: "/tech-icons/rest-api.svg",
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
          name: "Java",
          logo: "/tech-icons/java.svg",
        },
        {
          name: "Java Spring Boot",
          logo: "/tech-icons/spring-boot.svg",
        },
        {
          name: "MongoDB",
          logo: "/tech-icons/mongodb.svg",
        },
      ],
    },
    {
      projectNumber: 3,
      title: t("home.listOfProjects.projects.project3.title"),
      description: t("home.listOfProjects.projects.project3.description"),
      imageUrl: "/rohiglobalconsulting.png",
      linkToFrontendProd: "https://www.test1020.xyz",
      linkToBackendProd: "https://admin.test1020.xyz",
      linkToFrontendRepo:
        "https://github.com/piotrsliwka333/strapi-v5-frontend",
      linkToBackendRepo: "https://github.com/piotrsliwka333/strapi-v5-backend",
      extraInfo1: t("home.listOfProjects.projects.project3.extraInfo1"),
      extraInfo2: t("home.listOfProjects.projects.project3.extraInfo2"),
      usedTechnologies: [
        {
          name: "Next.js",
          logo: "/tech-icons/next.svg",
        },
        {
          name: "Strapi",
          logo: "/tech-icons/strapi.svg",
        },
        {
          name: "Typescript",
          logo: "/tech-icons/typescript.svg",
        },
        {
          name: "Tailwind",
          logo: "/tech-icons/tailwind.svg",
        },
        {
          name: "Postgresql",
          logo: "/tech-icons/postgresql.svg",
        },
        {
          name: "AWS EC2",
          logo: "/tech-icons/aws-ec2.svg",
        },
        {
          name: "AWS S3",
          logo: "/tech-icons/aws-s3.svg",
        },
        {
          name: "AWS RDS",
          logo: "/tech-icons/aws-rds.svg",
        },
      ],
    },
  ];

  const projectsWithDecoration: ProjectWithDecoration[] = projects.map(
    (project) => ({
      ...project,
      icon: <IconRocket className="h-8 w-8 text-secondary" />,
      content: (
        <div>
          <p className="text-4xl md:text-7xl font-bold text-white mb-4">
            #{project.projectNumber}
          </p>
          <Link
            target="blank"
            href={project.linkToFrontendProd}
            className="rounded-xl overflow-hidden w-full hover:scale-105 hover:transition-all transition-all cursor-pointer block"
          >
            <Image
              width={0}
              height={0}
              alt="image"
              src={project.imageUrl}
              className="w-full"
              sizes="500px"
            />
          </Link>
        </div>
      ),
    })
  );

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgrounds = ["var(--charcoal)", "var(--zinc-900)", "var(--charcoal)"];

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = projects.map(
      (_, index) => index / projects.length
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{
        background: gradient,
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className="w-full relative h-full pt-20 md:pt-40"
    >
      <div className="px-6">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconRocket className="h-6 w-6 text-white" />
        </FeatureIconContainer>
        <Heading className="mt-4">{t("home.listOfProjects.title")}</Heading>
        <Subheading>{t("home.listOfProjects.subtitle")}</Subheading>
      </div>
      <StickyScroll projects={projectsWithDecoration} />
    </motion.div>
  );
};
