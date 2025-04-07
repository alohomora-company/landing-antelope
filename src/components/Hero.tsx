/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 sm:pt-32 md:pt-48 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-row items-center gap-12">
          <div className="w-1/2 text-left">
            <h1 className="text-[36px] sm:text-[42px] md:text-[52px] lg:text-[64px] leading-[1.2] font-serif mb-6 md:mb-10">
              Experience the most advanced language exchange with Loqu
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-12 md:mb-16 leading-relaxed font-serif max-w-[600px]" >
              Discover a vibrant, feed-based community where you can share
              posts, follow friends, and learn languages beyond basic greetings.
              Our AI-powered features make language exchange fun and easy. Just
              start Loqu now!
            </p>
            <div className="flex flex-col sm:flex-row justify-start gap-3 max-w-[500px]">
              <Link
                href="https://apps.apple.com"
                className="inline-block bg-[#000] text-[#fff] py-4 sm:py-5 hover:bg-gray-900 transition font-serif text-base sm:text-lg font-serif w-full sm:w-[160px] md:w-[180px]"
              >
                iOS
              </Link>
              <Link
                href="https://play.google.com"
                className="inline-block bg-[#000] text-[#fff] py-4 sm:py-5 hover:bg-gray-900 transition text-base font-serif sm:text-lg font-serif w-full sm:w-[160px] md:w-[180px]"
              >
                Android
              </Link>
              <Link
                href="https://web.loqu.xyz"
                className="inline-block bg-[#000] text-[#fff] py-4 sm:py-5 hover:bg-gray-900 transition text-base sm:text-lg font-serif w-full sm:w-[160px] md:w-[180px]"
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
