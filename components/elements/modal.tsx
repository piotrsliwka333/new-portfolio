import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent as ReactMouseEvent, ReactNode } from "react";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { Button } from "../elements/button";
import { IconX } from "@tabler/icons-react";

export default function Modal(props: OwnProps) {
  const { children, fancyBackground, onClose } = props;

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

  const preventPropagation = (
    event: ReactMouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-50"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={onClose}
          className="fixed inset-0 p-4 flex justify-center items-center bg-background transition-opacity"
        >
          <div
            className="flex sm:p-8"
            onClick={(event) => preventPropagation(event)}
          >
            <div
              className="group p-8 rounded-md border border-neutral-800 bg-neutral-950  relative z-40 "
              onMouseMove={handleMouseMove}
            >
              <Button
                className="absolute right-[10px] top-[10px] z-20 p-2"
                onClick={onClose}
              >
                <IconX className="h-4 w-4 text-black" />
              </Button>
              {fancyBackground && (
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
              )}

              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface OwnProps {
  fancyBackground: boolean;
  children: ReactNode;
  onClose: () => void;
}
