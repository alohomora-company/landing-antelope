import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const PrivacyPolicy = () => {
  const t = useTranslations();
  return (
    <>
      <div className="w-full flex flex-col items-center bg-black text-white min-h-screen">
        {/* Logo Section */}
        <div className="w-full flex justify-center py-8 md:py-12">
          <div className="w-[120px] h-[52px] flex items-center justify-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/assets/loqu-logo.png"
                alt="Loqu Logo"
                width={120}
                height={52}
                className="object-contain w-full h-full"
              />
            </Link>
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full max-w-[480px] md:max-w-[1224px] px-4 md:px-8">
          <main className="flex-grow">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 font-sans text-center md:text-left">
              {t("privacyPolicy.title")}
            </h1>

            <div className="prose prose-invert max-w-none text-sm md:text-base">
              <p className="mb-6">{t("privacyPolicy.description")}</p>

              <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-4">
                {t("privacyPolicy.sections.collection.title")}
              </h2>
              <p className="mb-4">
                {t("privacyPolicy.sections.collection.intro")}
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>{t("privacyPolicy.sections.collection.items0")}</li>
                <li>{t("privacyPolicy.sections.collection.items1")}</li>
                <li>{t("privacyPolicy.sections.collection.items2")}</li>
                <li>{t("privacyPolicy.sections.collection.items3")}</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-4">
                {t("privacyPolicy.sections.usage.title")}
              </h2>
              <p className="mb-4">{t("privacyPolicy.sections.usage.intro")}</p>
              <ul className="list-disc pl-6 mb-6">
                <li>{t("privacyPolicy.sections.usage.items0")}</li>
                <li>{t("privacyPolicy.sections.usage.items1")}</li>
                <li>{t("privacyPolicy.sections.usage.items2")}</li>
                <li>{t("privacyPolicy.sections.usage.items3")}</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-4">
                {t("privacyPolicy.sections.security.title")}
              </h2>
              <p className="mb-6">
                {t("privacyPolicy.sections.security.content")}
              </p>

              <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-4">
                {t("privacyPolicy.sections.rights.title")}
              </h2>
              <p className="mb-4">{t("privacyPolicy.sections.rights.intro")}</p>
              <ul className="list-disc pl-6 mb-6">
                <li>{t("privacyPolicy.sections.rights.items0")}</li>
                <li>{t("privacyPolicy.sections.rights.items1")}</li>
                <li>{t("privacyPolicy.sections.rights.items2")}</li>
                <li>{t("privacyPolicy.sections.rights.items3")}</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-4">
                {t("privacyPolicy.sections.contact.title")}
              </h2>
              <p className="mb-6">
                {t("privacyPolicy.sections.contact.content")}
                <a
                  href="mailto:support@alohomora.company"
                  className="text-blue-400 hover:text-blue-300"
                >
                  support@alohomora.company
                </a>
              </p>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
