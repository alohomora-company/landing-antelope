import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95">
      <nav className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {/* Logo space if needed */}
        </Link>
      </nav>
    </header>
  );
} 