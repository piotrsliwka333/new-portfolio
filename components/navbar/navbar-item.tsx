"use client";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  href: RoutingPathOptions;
  children: ReactNode;
  isMobile?: boolean;
  className?: string;
};

export function NavbarItem({
  children,
  href,
  isMobile = false,
  className,
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        isMobile
          ? "mobile-nav-link"
          : "flex items-center justify-center leading-[110%] px-4 py-2 rounded-md  hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_var(--neutral-600)_inset] transition duration-200 nav-link",
        pathname === href && "bg-white text-black",
        className
      )}
    >
      {children}
    </Link>
  );
}
