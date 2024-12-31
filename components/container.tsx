import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
  id,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className={cn(`max-w-7xl mx-auto px-4 md:px-10 xl:px-4 `, className)}
    >
      {children}
    </section>
  );
};
