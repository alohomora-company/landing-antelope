import Link from "next/link";

const Footer = () => {
  return (
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
