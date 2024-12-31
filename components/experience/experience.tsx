import { IconSettings } from "@tabler/icons-react";
import { Container } from "../container";
import { Heading } from "../elements/heading";
import { Subheading } from "../elements/subheading";
import { FeatureIconContainer } from "../feature-icon-container";
import { useTranslations } from "next-intl";
import { Card } from "./card";

export const Experience = () => {
  const t = useTranslations("home.experience");
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
  return (
    <Container className="py-20 mx-auto relative z-40" id="experience">
      <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
        <IconSettings className="h-6 w-6 text-white" />
      </FeatureIconContainer>
      <Heading className="pt-4">{t("title")}</Heading>
      <Subheading className="max-w-3xl mx-auto">{t("subtitle")}</Subheading>

      <ul className="py-20">
        {jobs.map((job: Job, index: number) => (
          <Card job={job} key={index} />
        ))}
      </ul>
    </Container>
  );
};
