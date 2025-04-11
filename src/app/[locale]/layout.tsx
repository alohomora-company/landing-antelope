import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loqu - Language Exchange Social Network",
  description:
    "Experience the most advanced language exchange with Loqu. Share posts, follow friends, and learn languages beyond basic greetings with AI-powered features.",
  openGraph: {
    title: "Loqu - Language Exchange Social Network",
    description:
      "Experience the most advanced language exchange with Loqu. Share posts, follow friends, and learn languages beyond basic greetings with AI-powered features.",
    images: [
      {
        url: "/assets/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Loqu - Language Exchange Social Network",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loqu - Language Exchange Social Network",
    description:
      "Experience the most advanced language exchange with Loqu. Share posts, follow friends, and learn languages beyond basic greetings with AI-powered features.",
    images: ["/assets/thumbnail.png"],
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
