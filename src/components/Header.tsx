/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 font-serif">
      <nav className="max-w-[1200px] mx-auto px-6 py-8 flex justify-center items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Loqu"
            className="h-8 w-auto max-w-[180px] object-contain"
            width={120}
            height={32}
          />
        </Link>
      </nav>
    </header>
  );
}
