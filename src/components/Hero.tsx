/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 px-4 font-serif">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-center mb-16">
          <img
            src="/assets/logo.png"
            alt="Loqu"
            className="h-8 w-auto max-w-[180px] object-contain"
            width={120}
            height={32}
          />
        </div>
        <div className="flex flex-row items-center gap-12">
          <div className="w-1/2">
            <h1 className="text-[42px] md:text-[52px] lg:text-[64px] leading-[1.2] mb-6">
              Experience the most advanced language exchange with Loqu
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-[600px] mb-12">
              Discover a vibrant, feed-based community where you can share posts, follow friends, and learn languages beyond basic greetings. Our AI-powered features make language exchange fun and easy. Just start Loqu now!
            </p>
            <div className="flex justify-between max-w-[800px]">
              <Link
                href="https://apps.apple.com"
                className="bg-[#000000] text-[#ffffff] py-5 text-center text-lg font-serif hover:bg-gray-900 transition w-[32%]"
              >
                iOS
              </Link>
              <Link
                href="https://play.google.com"
                className="bg-[#000000] text-[#ffffff] py-5 text-center text-lg font-serif hover:bg-gray-900 transition w-[32%]"
              >
                Android
              </Link>
              <Link
                href="https://web.loqu.xyz"
                className="bg-[#000000] text-[#ffffff] py-5 text-center text-lg font-serif hover:bg-gray-900 transition w-[32%]"
              >
                Web
              </Link>
            </div>
          </div>

          <div className="w-1/2 flex justify-center">
            <img
              src="/assets/loqu-landing-video.gif"
              alt="Loqu App Demo"
              className="w-full max-w-[350px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
