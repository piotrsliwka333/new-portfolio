"use client";

import { PaymentType, Plan } from "@/models/Plan";
import { IconReceipt2 } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { Container } from "../container";
import { Heading } from "../elements/heading";
import { Subheading } from "../elements/subheading";
import { FeatureIconContainer } from "../feature-icon-container";
import { Card } from "./card";

export const Pricing = () => {
  const tButtons = useTranslations();
  const t = useTranslations("home.pricing");

  const plans: Plan[] = [
    {
      name: t("plans.plan1.title"),
      price: 4000,
      paymentType: PaymentType.ONE_TIME,
      points: [
        t("plans.plan1.points.point1"),
        t("plans.plan1.points.point2"),
        t("plans.plan1.points.point3"),
        t("plans.plan1.points.point4"),
        t("plans.plan1.points.point5"),
        t("plans.plan1.points.point6"),
      ],
      examples: [
        t("plans.plan1.examples.example1"),
        t("plans.plan1.examples.example2"),
      ],
      featured: false,
      CTA: {
        text: tButtons("shared.buttons.sendQuestion"),
      },
    },
    {
      name: t("plans.plan2.title"),
      price: 10000,
      paymentType: PaymentType.ONE_TIME,
      points: [
        t("plans.plan2.points.point1"),
        t("plans.plan2.points.point2"),
        t("plans.plan2.points.point3"),
        t("plans.plan2.points.point4"),
        t("plans.plan2.points.point5"),
      ],
      examples: [t("plans.plan2.examples.example1")],
      featured: false,
      CTA: {
        text: tButtons("shared.buttons.sendQuestion"),
      },
    },
    {
      name: t("plans.plan3.title"),
      price: 15000,
      paymentType: PaymentType.ONE_TIME,
      points: [
        t("plans.plan3.points.point1"),
        t("plans.plan3.points.point2"),
        t("plans.plan3.points.point3"),
        t("plans.plan3.points.point4"),
        t("plans.plan3.points.point5"),
        t("plans.plan3.points.point6"),
        t("plans.plan3.points.point7"),
      ],
      examples: [
        t("plans.plan3.examples.example1"),
        t("plans.plan3.examples.example2"),
      ],
      featured: true,
      CTA: {
        text: tButtons("shared.buttons.sendQuestion"),
      },
    },
    {
      name: t("plans.plan4.title"),
      price: 70,
      paymentType: PaymentType.HOUR,
      points: [t("plans.plan4.points.point1"), t("plans.plan4.points.point2")],
      examples: [
        t("plans.plan4.examples.example1"),
        t("plans.plan4.examples.example2"),
      ],
      featured: false,
      CTA: {
        text: tButtons("shared.buttons.contact"),
      },
    },
  ];
  return (
    <div className="pt-40">
      <Container id="pricing">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconReceipt2 className="h-6 w-6 text-white" />
        </FeatureIconContainer>
        <Heading className="pt-4">{t("title")}</Heading>
        <Subheading className="max-w-3xl mx-auto">{t("subtitle")}</Subheading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4 py-20 lg:items-start">
          {plans.map((plan) => (
            <Card key={plan.name} plan={plan} />
          ))}
        </div>
      </Container>
    </div>
  );
};
