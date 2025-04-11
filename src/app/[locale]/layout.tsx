import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loqu - AI-Supercharged Language Exchange",
  description:
    "Experience the most advanced language exchange with Loqu. Share posts, follow friends, and learn languages beyond basic greetings with AI-Supercharged features.",
  metadataBase: new URL("https://www.loqu.xyz"),
  openGraph: {
    title: "Loqu - AI-Supercharged Language Exchange",
    description:
      "Experience the most advanced language exchange with Loqu. Share posts, follow friends, and learn languages beyond basic greetings with AI-supercharged features.",
    url: "https://www.loqu.xyz",
    siteName: "Loqu",
    images: [
      {
        url: "/assets/thumbnail2.png",
        width: 1200,
        height: 500,
        alt: "Loqu - AI-Supercharged Language Exchange",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loqu - AI-Supercharged Language Exchange",
    description:
      "Experience the most advanced language exchange with Loqu. Share posts, follow friends, and learn languages beyond basic greetings with AI-Supercharged features.",
    site: "@loqu",
    creator: "@loqu",
    images: [
      {
        url: "/assets/thumbnail2.png",
        width: 1200,
        height: 500,
        alt: "Loqu - AI-Supercharged Language Exchange",
        type: "image/png",
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <main className="min-h-screen">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
