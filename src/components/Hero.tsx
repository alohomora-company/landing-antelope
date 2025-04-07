import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 sm:pt-32 md:pt-48 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid sm:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-[36px] sm:text-[42px] md:text-[52px] lg:text-[64px] leading-[1.2] font-serif mb-6 md:mb-10">
              Experience the most advanced language exchange with Loqu
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-12 md:mb-16 leading-relaxed max-w-[600px] mx-auto sm:mx-0">
              Discover a vibrant, feed-based community where you can share posts, follow friends, and learn languages beyond basic greetings. Our AI-powered features make language exchange fun and easy. Just start Loqu now!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3 max-w-[500px] mx-auto sm:mx-0">
              <Link
                href="https://apps.apple.com"
                className="inline-block bg-[#000] text-[#fff] py-4 sm:py-5 hover:bg-gray-900 transition text-base sm:text-lg font-serif w-full sm:w-[160px] md:w-[180px]"
                style={{ color: '#ffffff' }}
              >
                iOS
              </Link>
              <Link
                href="https://play.google.com"
                className="inline-block bg-[#000] text-[#fff] py-4 sm:py-5 hover:bg-gray-900 transition text-base sm:text-lg font-serif w-full sm:w-[160px] md:w-[180px]"
                style={{ color: '#ffffff' }}
              >
                Android
              </Link>
              <Link
                href="https://web.loqu.xyz"
                className="inline-block bg-[#000] text-[#fff] py-4 sm:py-5 hover:bg-gray-900 transition text-base sm:text-lg font-serif w-full sm:w-[160px] md:w-[180px]"
                style={{ color: '#ffffff' }}
              >
                Web
              </Link>
            </div>
          </div>
          
          <div className="order-1 sm:order-2 mb-8 sm:mb-0">
            <img
              src="/assets/loqu-landing-video.gif"
              alt="Loqu App Demo"
              className="w-full object-contain max-h-[600px] md:max-h-[700px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 