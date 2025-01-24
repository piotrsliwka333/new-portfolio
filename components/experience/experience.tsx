import { ReactNode } from "react";
import { Container } from "../container";
import { Heading } from "../elements/heading";
import { Subheading } from "../elements/subheading";
import { FeatureIconContainer } from "../feature-icon-container";
import { Card } from "./card";

interface OwnProps {
  jobs: Job[];
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export const Experience = (props: OwnProps) => {
  const { title, subtitle, icon, jobs } = props;
  return (
    <Container className="py-20 mx-auto relative z-40" id="experience">
      <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
        {icon}
      </FeatureIconContainer>
      <Heading className="pt-4">{title}</Heading>
      <Subheading className="max-w-3xl mx-auto mb-32">{subtitle}</Subheading>

      <ul>
        {jobs.map((job: Job, index: number) => (
          <Card job={job} key={index} />
        ))}
      </ul>
    </Container>
  );
};
