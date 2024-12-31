"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEvent as ReactMouseEvent, useRef } from "react";
import Beam from "../beam";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import "./card.css";
import Portal from "./portal";

interface OwnProps {
  job: Job;
}

export const Card: React.FC<OwnProps> = (props: OwnProps) => {
  const { job } = props;
  const { name, link, totalWorkTime, address, positions, description, logo } =
    job;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLUListElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const { scrollYProgress: secondScrollYProgress } = useScroll({
    target: ref2,
    offset: ["end end", "start start"],
  });

  const width = useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 400]), {
    stiffness: 500,
    damping: 90,
  });

  const height = useSpring(useTransform(scrollYProgress, [0, 0.1], [0, 150]), {
    stiffness: 500,
    damping: 90,
  });

  useMotionValueEvent(width, "change", (latest) => {});
  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto mb-16 md:mb-36 job"
    >
      <div className="flex min-w-[300px]">
        <Link target="_blank" className="block h-fit  mr-4" href={link}>
          <Image
            priority
            src={logo}
            alt={"logo"}
            width={69}
            height={69}
            className="rounded-sm"
          />
        </Link>

        <div className="text-sm">
          <div className="mb-12">
            <Link
              target="_blank"
              className="underline underline-offset-2"
              href={link}
            >
              <p className="mb-1 font-bold">{name}</p>
            </Link>
            <p className="mb-1 text-neutral-400">{totalWorkTime}</p>
            <p className="text-neutral-400">{address}</p>
          </div>

          <ul ref={ref2}>
            {positions.map((position: Position, index: number) => (
              <li
                key={index}
                className="mb-12 last-of-type:mb-0 relative position"
              >
                <p className="mb-1 font-bold">{position.name}</p>
                <p className="mb-1 text-neutral-400">
                  {position.workDimension}
                </p>
                <p className="text-neutral-400">{position.period}</p>
                {/* <div className="point"></div> */}

                <div className="point">
                  <motion.div
                    className={`absolute left-[50%] top-[20px] translate-x-[-50%] w-[1px] block bg-gradient-to-r from-neutral-800 to-neutral-600 rounded-full overflow-hidden point-dash`}
                    style={{ height }}
                  ></motion.div>
                </div>
              </li>
            ))}
          </ul>
          <Portal description={description} />
        </div>
      </div>
      <motion.div
        className="h-[1px] w-full hidden md:block bg-gradient-to-r from-neutral-800 to-neutral-600 rounded-full mt-16 relative overflow-hidden"
        style={{ width }}
      >
        <Beam className="top-0" />
      </motion.div>
      <div
        className=" group p-8 rounded-md border hidden md:block border-neutral-800 bg-neutral-950  relative z-40 col-span-2"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute z-10 -inset-px rounded-md opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            maskImage: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              var(--neutral-900),
              transparent 80%
            )
          `,
          }}
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={2}
          />
        </motion.div>

        <p className="text-xl font-bold relative z-20 mt-2">
          {description.title}
        </p>
        <ul className="list-disc list-inside text-neutral-400 mt-4 relative z-20">
          {description.points.map((elements: string) => (
            <li key={elements}>{elements}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
