"use client";

import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const referrer = searchParams.get("referrer");
  useEffect(() => {
    setTimeout(() => {
      if(!isPlaying) {
        setUseFallback(true);
      }
    }, 3000);
  },[])
  const [isPlaying, setIsPlaying] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen max-w-[1664px] mx-auto bg-background">
        {/** main section */}
        <section className="relative flex flex-col items-center justify-center gap-8 overflow-hidden bg-neutral-950">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center justify-center gap-6 px-4 py-12 md:hidden">
            <div className="w-[280px] h-[88px] flex items-center justify-center">
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/assets/loqu-logo.png"
                  alt="Loqu Logo"
                  width={280}
                  height={88}
                  className="object-contain w-full h-full"
                />
              </Link>
            </div>

            <div className="w-full">
              <h1 className="text-2xl font-bold text-white font-sans text-center leading-tight">
                {t("main.title.line1")}
                <br />
                {t("main.title.line2")}
              </h1>
            </div>

            <div className="w-full">
              {useFallback ? (
                <Image
                  src="/assets/landing.gif"
                  alt="Loqu Landing"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                  unoptimized
                />
              ) : (
                <video
                  src="/assets/loqu_0417.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                  onPlay={() => setIsPlaying(true)}
                  onError={() => setUseFallback(true)}
                />
              )}
            </div>

            <div className="relative w-full max-w-[900px]">
              {referrer ? (
                <>
                  <p className="text-md text-yellow-400 text-center mb-2">
                    {t("main.referrer.invitedBy")}{" "}
                    <span className="font-bold">@{referrer}</span>
                  </p>
                  <p className="text-md text-white text-center mb-2">
                    {t("main.referrer.downloadPromptPrefix")}{" "}
                    <span className="font-bold text-yellow-400">
                      @{referrer}
                    </span>{" "}
                    {t("main.referrer.downloadPromptSuffix")}
                  </p>
                </>
              ) : (
                <p className="text-md text-white text-center leading-relaxed">
                  {t("main.description")}
                </p>
              )}
            </div>

            <div className="flex flex-row items-center gap-4">
              <a
                href="https://apps.apple.com/app/id6736823979"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 w-[120px] h-[52px] rounded-xl"
                >
                  {t("main.buttons.ios")}
                </Button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=company.alohomora.loqu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 w-[120px] h-[52px] rounded-xl"
                >
                  {t("main.buttons.android")}
                </Button>
              </a>
            </div>
          </div>

          {/* Web Layout */}
          <div className="hidden md:flex flex-col items-center justify-center gap-8 px-8 py-16 h-[980px]">
            <div className="w-[458px] h-[143px] flex items-center justify-center">
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/assets/loqu-logo.png"
                  alt="Loqu Logo"
                  width={458}
                  height={143}
                  className="object-contain w-full h-full"
                />
              </Link>
            </div>

            <div className="relative w-full max-w-[500px]">
              <h1 className="text-3xl font-bold text-white font-sans text-center">
                {t("main.title.line1")} {t("main.title.line2")}
              </h1>
            </div>

            <div className="relative w-full max-w-[500px]">
              {useFallback ? (
                <Image
                  src="/assets/landing.gif"
                  alt="Loqu Landing"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                  unoptimized
                />
              ) : (
                <video
                  src="/assets/loqu_0417.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                  onPlay={() => setIsPlaying(true)}
                  onError={() => setUseFallback(true)}
                />
              )}
            </div>

            <div className="relative w-full max-w-[900px]">
              {referrer ? (
                <>
                  <p className="text-sm text-yellow-400 text-center mb-2">
                    {t("main.referrer.invitedBy")}{" "}
                    <span className="font-bold">@{referrer}</span>
                  </p>
                  <p className="text-sm text-white text-center mb-2">
                    {t("main.referrer.downloadPromptPrefix")}{" "}
                    <span className="font-bold text-yellow-400">
                      @{referrer}
                    </span>{" "}
                    {t("main.referrer.downloadPromptSuffix")}
                  </p>
                </>
              ) : (
                <p className="text-md text-white text-center leading-relaxed">
                  {t("main.description")}
                </p>
              )}
            </div>

            <div className="flex flex-row items-center gap-4">
              <a
                href="https://apps.apple.com/app/id6736823979"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 w-[120px] h-[52px] rounded-xl"
                >
                  {t("main.buttons.ios")}
                </Button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=company.alohomora.loqu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 w-[120px] h-[52px] rounded-xl"
                >
                  {t("main.buttons.android")}
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
