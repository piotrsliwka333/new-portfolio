"use client";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { ProjectWithDecoration } from "@/models/Project";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface OwnProps {
  projects: ProjectWithDecoration[];
}

export const StickyScroll: React.FC<OwnProps> = (props) => {
  const { projects } = props;

  return (
    <div className="py-4 md:py-20">
      <motion.div className="hidden lg:flex h-full  flex-col max-w-7xl mx-auto justify-between relative   p-10 ">
        {projects.map((project, index) => (
          <ScrollContent key={project.title} project={project} index={index} />
        ))}
      </motion.div>
      <motion.div className="flex lg:hidden  flex-col max-w-7xl mx-auto justify-between relative  p-10 ">
        {projects.map((project, index) => (
          <ScrollContentMobile
            key={project.title + index}
            project={project}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

interface ScrollContentInterface {
  project: ProjectWithDecoration;
  index: number;
}

export const ScrollContent: React.FC<ScrollContentInterface> = (props) => {
  const { project, index } = props;
  const t = useTranslations();

  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0]
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      transition={{
        duration: 0.3,
      }}
      key={project.title + index}
      className="my-40 relative grid grid-cols-2 gap-8"
    >
      <motion.div
        key={project.title + index}
        style={{
          y: translate,
          opacity: opacity,
        }}
        className="h-full w-full rounded-sm  self-start"
      >
        {project.content}
      </motion.div>
      <div className="w-full">
        <motion.div
          style={{
            y: translateContent,
            opacity: index === 0 ? opacityContent : 1,
          }}
          className=""
        >
          <div className="mb-4">{project.icon}</div>
          <motion.h2 className="max-w-sm mb-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white">
            {project.title}
          </motion.h2>

          <motion.p className="text-lg text-neutral-500 font-regular max-w-sm mb-8">
            {project.description}
          </motion.p>
          {project.linkToFrontendProd && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToFrontendProd", {
                link: function (chunks) {
                  // extra condition because it loose it previously checked state for typescript
                  if (project.linkToFrontendProd)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToFrontendProd}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.linkToBackendProd && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToBackendProd", {
                link: (chunks) => {
                  if (project.linkToBackendProd)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToBackendProd}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.linkToFrontendDev && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToFrontendDev", {
                link: (chunks) => {
                  if (project.linkToFrontendDev)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToFrontendDev}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.linkToBackendDev && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToBackendDev", {
                link: (chunks) => {
                  if (project.linkToBackendDev)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToBackendDev}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.extraInfo1 && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {project.extraInfo1}
            </motion.p>
          )}
          {project.extraInfo2 && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {project.extraInfo2}
            </motion.p>
          )}
          {project.linkToFigma && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToFigma", {
                link: (chunks) => {
                  if (project.linkToFigma)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToFigma}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.linkToFrontendRepo && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToFrontendRepo", {
                link: (chunks) => {
                  if (project.linkToFrontendRepo)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToFrontendRepo}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.linkToBackendRepo && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToBackendRepo", {
                link: (chunks) => {
                  if (project.linkToBackendRepo)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToBackendRepo}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ScrollContentMobile: React.FC<ScrollContentInterface> = (
  props
) => {
  const { project, index } = props;
  const t = useTranslations();

  return (
    <motion.div
      transition={{
        duration: 0.3,
      }}
      key={project.title + index}
      className="my-10  relative flex flex-col md:flex-row md:space-x-4"
    >
      <motion.div
        key={project.title + index}
        className="w-full rounded-sm  self-start mb-8"
      >
        {project.content && project.content}
      </motion.div>
      <div className="w-full">
        <motion.div className="mb-6">
          <div className="mb-4">{project.icon}</div>
          <motion.h2 className="mb-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white">
            {project.title}
          </motion.h2>

          <motion.p className="text-sm md:text-base text-neutral-500 font-bold max-w-sm mb-4">
            {project.description}
          </motion.p>

          {project.linkToFrontendProd && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToFrontendProd", {
                link: function (chunks) {
                  // extra condition because it loose it previously checked state for typescript
                  if (project.linkToFrontendProd)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToFrontendProd}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.linkToBackendProd && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToBackendProd", {
                link: (chunks) => {
                  if (project.linkToBackendProd)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToBackendProd}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.linkToFrontendDev && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToFrontendDev", {
                link: (chunks) => {
                  if (project.linkToFrontendDev)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToFrontendDev}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.linkToBackendDev && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToBackendDev", {
                link: (chunks) => {
                  if (project.linkToBackendDev)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToBackendDev}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.extraInfo1 && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {project.extraInfo1}
            </motion.p>
          )}
          {project.extraInfo2 && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {project.extraInfo2}
            </motion.p>
          )}
          {project.linkToFigma && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToFigma", {
                link: (chunks) => {
                  if (project.linkToFigma)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToFigma}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.linkToFrontendRepo && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToFrontendRepo", {
                link: (chunks) => {
                  if (project.linkToFrontendRepo)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToFrontendRepo}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
          {project.linkToBackendRepo && (
            <motion.p className="text-sm font-regular max-w-sm mt-2">
              {t.rich("home.listOfProjects.projects.linkToBackendRepo", {
                link: (chunks) => {
                  if (project.linkToBackendRepo)
                    return (
                      <Link
                        target="blank"
                        className="underline underline-offset-2"
                        href={project.linkToBackendRepo}
                      >
                        {chunks}
                      </Link>
                    );
                },
              })}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
