import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
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
              {t("footer.privacyPolicy")}
            </Link>
            <Link
              href="/terms-of-service"
              className="text-neutral-100 hover:text-neutral-400 transition text-sm"
            >
              {t("footer.termsOfService")}
            </Link>
            <Link
              href="/community-guideline"
              className="text-neutral-100 hover:text-neutral-400 transition text-sm"
            >
              {t("footer.communityGuidelines")}
            </Link>
            <a
              href="https://tally.so/r/n0A2pN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 hover:text-neutral-400 transition text-sm"
            >
              {t("footer.support")}
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <a
              href="mailto:support@alohomora.company"
              className="text-neutral-100 hover:text-neutral-400 transition text-sm"
            >
              support@alohomora.company
            </a>
            <span className="text-neutral-100 text-sm">
              {t("footer.copyright")}
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
              {t("footer.copyright")}
            </span>
          </div>
          <div className="col-span-9 flex justify-evenly items-center">
            <Link
              href="/privacy-policy"
              className="text-neutral-100 hover:text-neutral-400 transition text-xs"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <Link
              href="/terms-of-service"
              className="text-neutral-100 hover:text-neutral-400 transition text-xs"
            >
              {t("footer.termsOfService")}
            </Link>
            <Link
              href="/community-guideline"
              className="text-neutral-100 hover:text-neutral-400 transition text-xs"
            >
              {t("footer.communityGuidelines")}
            </Link>
            <a
              href="https://tally.so/r/n0A2pN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 hover:text-neutral-400 transition text-xs"
            >
              {t("footer.support")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
