import { Navbar } from "@/components/navbar";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";
import { Header } from "@/components/navbar/Header";
import { Header as HeaderType } from "@/models/Header";
import { AmbientColor } from "@/components/decorations/ambient-color";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  const header: HeaderType = {
    mainLinks: [
      {
        id: 1,
        url: "/",
        text: t("leftSide.element1"),
        isExternal: false,
        nestedLinks: [],
      },
      {
        id: 2,
        url: "/offers",
        text: t("leftSide.element2"),
        isExternal: false,
        nestedLinks: [],
      },
      {
        id: 3,
        url: "/about-me",
        text: t("leftSide.element3"),
        isExternal: false,
        nestedLinks: [],
      },
      {
        id: 4,
        url: "/contact",
        text: t("leftSide.element4"),
        isExternal: false,
        nestedLinks: [
          {
            id: 5,
            url: "/about-me",
            text: t("leftSide.element3"),
            isExternal: false,
          },
        ],
      },
    ],
    button: {
      id: 1,
      url: "/",
      text: t("leftSide.element1"),
      isExternal: false,
    },
  };

  return (
    <html lang={locale}>
      <body
        className={cn(inter.className, "bg-charcoal antialiased h-full w-full")}
      >
        <NextIntlClientProvider messages={messages}>
          {/* <Navbar /> */}
          <Header header={header} />
          <div className="relative overflow-hidden w-full">
            <AmbientColor />

            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
