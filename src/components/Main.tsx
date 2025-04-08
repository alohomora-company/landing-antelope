import { Button } from "@/components/ui/button";
import Link from "next/link";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1664px] mx-auto bg-background">
      {/** main section */}
      <section className="relative h-[980px] flex flex-col items-center justify-center gap-8 overflow-hidden bg-neutral-950">
        <div className="w-[458px] h-[143px] flex items-center justify-center -mt-30">
          <img
            src="/assets/loqu-logo.png"
            alt="Loqu Logo"
            width={458}
            height={143}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="relative w-[100%] max-w-[500px]">
          <div className="absolute inset-0 flex flex-col items-center justify-between pt-2 pb-8 text-center z-10 max-w-[500px]">
            <h1 className="text-3xl font-bold text-white font-sans">
              Experience the most advanced
              <br />
              language exchange with Loqu
            </h1>
          </div>
        </div>

        <div className="relative w-[100%] max-w-[500px]">
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

        <div className="relative w-[100%] max-w-[900px]">
          <div className="flex flex-col items-center w-[100%]">
            <p className="text-md text-white text-center leading-relaxed">
              Discover a vibrant, feed-based community where you can share
              posts, follow friends, and learn
              <br />
              languages beyond basic greetings. Our AI-powered features make
              language exchange fun and easy.
              <br />
              Just start Loqu now!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center mb-8 z-10">
          <div className="flex flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 w-[120px] h-[52px]"
            >
              iOS
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 w-[120px] h-[52px]"
            >
              Android
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 w-[120px] h-[52px]"
            >
              Web
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section - Contact info and legal links */}
      <footer className="py-2 bg-neutral-900">
        <div className="max-w-[1664px] mx-auto px-8">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3 flex flex-col items-start justify-center gap-1">
              <a
                href="mailto:support@alohomora.company"
                className="text-neutral-100 hover:text-neutral-400 transition text-xs"
              >
                support@alohomora.company
              </a>
              <span className="text-neutral-100 text-xs">
                Copyright 2025 © Alohomora Company. All Rights Reserved.
              </span>
            </div>
            <div className="col-span-9 flex justify-between items-center">
              <Link
                href="/privacy"
                className="text-neutral-100 hover:text-neutral-400 transition text-xs ml-[200px]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-neutral-100 hover:text-neutral-400 transition text-xs ml-8"
              >
                Terms of Service
              </Link>
              <Link
                href="/community"
                className="text-neutral-100 hover:text-neutral-400 transition text-xs mr-[200px]"
              >
                Community Guidelines
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
