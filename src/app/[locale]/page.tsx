"use client";

import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const referrer = searchParams.get("referrer");

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
              <Suspense fallback={<Image
                src="/assets/landing.gif"
                alt="Loqu Landing"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                unoptimized
              />}>
                <video
                  src="/assets/loqu_0417.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                />
              </Suspense>
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
              <Suspense fallback={<Image
                src="/assets/landing.gif"
                alt="Loqu Landing"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                unoptimized
              />}>
                <video
                  src="/assets/loqu_0417.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                />
              </Suspense>
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

        {/* Feature Sections */}
        <section className="flex flex-col w-full bg-gray-50 py-12 px-4 md:py-24 md:px-8 rounded-3xl">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between max-w-7xl mx-auto mb-16 md:mb-32 gap-8 bg-gray-50 p-6 md:p-12">

            <div className="flex flex-col md:w-1/2 space-y-4 md:pl-4">
              <h2 className="text-2xl md:text-5xl font-bold text-neutral-900">Just Try!<br />It&apos;ll fix it</h2>
              <p className="text-base md:text-lg text-neutral-700">
                Start messy. Loqu AI will clean it up —<br />
                and you&apos;ll learn from it.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/bottom-landing-1.png"
                alt="AI Language Correction"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between max-w-7xl mx-auto mb-16 md:mb-32 gap-8 bg-gray-50 p-6 md:p-12">
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="w-3/5 md:w-3/5">
                <Image
                  src="/assets/bottom-landing-2.png"
                  alt="Feed-based Learning"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 space-y-4 md:pr-4">
              <h2 className="text-2xl md:text-5xl font-bold text-neutral-900">Fluency starts<br />in the feed</h2>
              <p className="text-base md:text-lg text-neutral-700">
                Learning Japanese?<br />
                Everything you will see now is in Japanese.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between max-w-7xl mx-auto mb-16 md:mb-32 gap-8 bg-gray-50 p-6 md:p-12">
            <div className="flex flex-col md:w-1/2 space-y-4 md:pr-4">
              <h2 className="text-2xl md:text-5xl font-bold text-neutral-900">
                No one-sided<br />learning
              </h2>
              <p className="text-base md:text-lg text-neutral-700">
                Talking in both languages —<br />
                that&#39;s the Loqu way.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="w-4/5 md:w-4/5">
                <Image
                  src="/assets/bottom-landing-3.png"
                  alt="Community Learning"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row md:items-center justify-between max-w-7xl mx-auto mb-16 md:mb-32 gap-8 bg-gray-50 p-6 md:p-12">
            <div className="flex flex-col md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-5xl font-bold text-neutral-900">No one-sided<br />learning</h2>
              <p className="text-base md:text-lg text-neutral-700">
                Talking in both languages —<br />
                that&apos;s the Loqu way.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="w-4/5 md:w-4/5">
                <Image 
                  src="/assets/bottom-landing-3.png" 
                  alt="Community Learning" 
                  width={500} 
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div> */}

          {/* CTA Section */}
          <div className="flex flex-col items-center justify-center max-w-7xl mx-auto mt-8 md:mt-16 gap-6">
            <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 text-center">
              Start your language journey today
            </h2>
            <p className="text-base md:text-lg text-neutral-700 text-center max-w-2xl">
              Download our app and join thousands of language learners who are already improving their skills with Loqu.
            </p>
            <div className="flex flex-row items-center gap-4 mt-4">
              <a
                href="https://apps.apple.com/app/id6736823979"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-neutral-900 text-white hover:bg-neutral-700 w-[120px] h-[52px] rounded-xl"
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
                  className="bg-neutral-900 text-white hover:bg-neutral-700 w-[120px] h-[52px] rounded-xl"
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
