import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
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
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source src="/assets/landing.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="relative w-full max-w-[900px]">
              <p className="text-md text-white text-center leading-relaxed">
                {t("main.description")}
              </p>
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
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source src="/assets/landing.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="relative w-full max-w-[900px]">
              <p className="text-md text-white text-center leading-relaxed">
                {t("main.description")}
              </p>
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
