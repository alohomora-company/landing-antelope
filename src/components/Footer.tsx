import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black md:bg-neutral-900 py-4 md:py-2 px-4 md:px-8">
      <div className="md:max-w-[1664px] mx-auto">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-4 md:hidden">
          <div className="flex justify-between items-center">
            <Link
              href="/privacy-policy"
              className="text-neutral-100 hover:text-neutral-400 transition text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-neutral-100 hover:text-neutral-400 transition text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/community-guideline"
              className="text-neutral-100 hover:text-neutral-400 transition text-sm"
            >
              Community Guidelines
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <a
              href="mailto:support@alohomora.company"
              className="text-neutral-100 hover:text-neutral-400 transition text-sm"
            >
              support@alohomora.company
            </a>
            <span className="text-neutral-100 text-sm">
              Copyright 2025 © Alohomora Company. All Rights Reserved.
            </span>
          </div>
        </div>

        {/* Web Layout */}
        <div className="hidden md:grid grid-cols-12 items-center">
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
              href="/privacy-policy"
              className="text-neutral-100 hover:text-neutral-400 transition text-xs ml-[200px]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-neutral-100 hover:text-neutral-400 transition text-xs ml-8"
            >
              Terms of Service
            </Link>
            <Link
              href="/community-guideline"
              className="text-neutral-100 hover:text-neutral-400 transition text-xs mr-[200px]"
            >
              Community Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
