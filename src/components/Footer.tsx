import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-[800px] mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-base mb-2">Loqu - where two languages meet</h3>
          <a href="mailto:support@alohomora.company" className="text-gray-500 hover:text-gray-800 transition text-sm">
            support@alohomora.company
          </a>
        </div>
        
        <div className="flex justify-center gap-6 mb-6">
          <Link href="/privacy" className="text-gray-500 hover:text-gray-800 transition text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-gray-800 transition text-sm">
            Terms of Service
          </Link>
          <Link href="/community" className="text-gray-500 hover:text-gray-800 transition text-sm">
            Community Guidelines
          </Link>
        </div>
        
        <div className="text-center text-gray-400 text-xs">
          Copyright 2025 © Alohomora Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
} 