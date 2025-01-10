import { Experience } from "@/components/experience/experience";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/tech-stack";
import { IconSchool, IconSettings } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home.experience");
  const tEducation = await getTranslations("home.education");

  const jobs: Job[] = [
    {
      link: "https://peoplemore.pl",
      logo: "/people_more.png",
      name: t("job1.name"),
      totalWorkTime: t("job1.totalWorkTime"),
      address: t("job1.address"),
      positions: [
        {
          name: t("job1.positions.position1.name"),
          workDimension: t("job1.positions.position1.workDimension"),
          period: t("job1.positions.position1.period"),
        },
      ],
      description: {
        title: t("job1.description.title"),
        points: [t("job1.description.point1")],
      },
    },
    {
      link: "https://www.virtuacodelab.com",
      logo: "/virtua.png",
      name: t("job2.name"),
      totalWorkTime: t("job2.totalWorkTime"),
      address: t("job2.address"),
      positions: [
        {
          name: t("job2.positions.position1.name"),
          workDimension: t("job2.positions.position1.workDimension"),
          period: t("job2.positions.position1.period"),
        },
        {
          name: t("job2.positions.position2.name"),
          workDimension: t("job2.positions.position2.workDimension"),
          period: t("job2.positions.position2.period"),
        },
      ],
      description: {
        title: t("job2.description.title"),
        points: [
          t("job2.description.point1"),
          t("job2.description.point2"),
          t("job2.description.point3"),
          t("job2.description.point4"),
          t("job2.description.point5"),
          t("job2.description.point6"),
          t("job2.description.point7"),
          t("job2.description.point8"),
          t("job2.description.point9"),
        ],
      },
    },
  ];

  const educations: Job[] = [
    {
      link: "https://www.wsiz.wroc.pl",
      logo: "/copernikus.png",
      name: tEducation("job1.name"),
      totalWorkTime: tEducation("job1.totalWorkTime"),
      address: tEducation("job1.address"),
      positions: [
        {
          name: tEducation("job1.positions.position1.name"),
          workDimension: tEducation("job1.positions.position1.workDimension"),
          period: tEducation("job1.positions.position1.period"),
        },
      ],
      description: {
        title: tEducation("job1.description.title"),
        points: [
          tEducation("job1.description.point1"),
          tEducation("job1.description.point2"),
          tEducation("job1.description.point3"),
          tEducation("job1.description.point4"),
          tEducation("job1.description.point5"),
          tEducation("job1.description.point6"),
          tEducation("job1.description.point7"),
          tEducation("job1.description.point8"),
          tEducation("job1.description.point9"),
          tEducation("job1.description.point10"),
        ],
      },
    },
  ];
  return (
    <>
      <Hero />
      <Experience
        jobs={jobs}
        title={t("title")}
        subtitle={t("subtitle")}
        icon={<IconSettings className="h-6 w-6 text-white" />}
      />
      <Experience
        jobs={educations}
        title={tEducation("title")}
        subtitle={tEducation("subtitle")}
        icon={<IconSchool className="h-6 w-6 text-white" />}
      />
      <TechStack />
    </>
  );
}
