import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CommunityGuideline = () => {
  const t = useTranslations();
  return (
    <>
      <div className="w-full flex justify-center py-8">
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

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow px-8 py-12 max-w-[1664px] mx-auto">
          <h1 className="text-4xl font-bold mb-8 font-sans">
            {t("communityGuidelines.title")}
          </h1>

          <div className="prose prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-semibold">
                {t("communityGuidelines.sections.respect.title")}
              </h2>
              <ul className="list-disc pl-6">
                <li>{t("communityGuidelines.sections.respect.items0")}</li>
                <li>{t("communityGuidelines.sections.respect.items1")}</li>
                <li>{t("communityGuidelines.sections.respect.items2")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                {t("communityGuidelines.sections.inclusivity.title")}
              </h2>
              <ul className="list-disc pl-6">
                <li>{t("communityGuidelines.sections.inclusivity.items0")}</li>
                <li>{t("communityGuidelines.sections.inclusivity.items1")}</li>
                <li>{t("communityGuidelines.sections.inclusivity.items2")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                {t("communityGuidelines.sections.communication.title")}
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  {t("communityGuidelines.sections.communication.items0")}
                </li>
                <li>
                  {t("communityGuidelines.sections.communication.items1")}
                </li>
                <li>
                  {t("communityGuidelines.sections.communication.items2")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                {t("communityGuidelines.sections.safety.title")}
              </h2>
              <ul className="list-disc pl-6">
                <li>{t("communityGuidelines.sections.safety.items0")}</li>
                <li>{t("communityGuidelines.sections.safety.items1")}</li>
                <li>{t("communityGuidelines.sections.safety.items2")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                {t("communityGuidelines.sections.harassment.title")}
              </h2>
              <ul className="list-disc pl-6">
                <li>{t("communityGuidelines.sections.harassment.items0")}</li>
                <li>{t("communityGuidelines.sections.harassment.items1")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                {t("communityGuidelines.sections.conflictResolution.title")}
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  {t("communityGuidelines.sections.conflictResolution.items0")}
                </li>
                <li>
                  {t("communityGuidelines.sections.conflictResolution.items1")}
                </li>
                <li>
                  {t("communityGuidelines.sections.conflictResolution.items2")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                {t("communityGuidelines.sections.reporting.title")}
              </h2>
              <ul className="list-disc pl-6">
                <li>{t("communityGuidelines.sections.reporting.items0")}</li>
                <li>{t("communityGuidelines.sections.reporting.items1")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                {t("communityGuidelines.sections.improvement.title")}
              </h2>
              <ul className="list-disc pl-6">
                <li>{t("communityGuidelines.sections.improvement.items0")}</li>
                <li>{t("communityGuidelines.sections.improvement.items1")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                {t("communityGuidelines.sections.purpose.title")}
              </h2>
              <ul className="list-disc pl-6">
                <li>{t("communityGuidelines.sections.purpose.items0")}</li>
                <li>{t("communityGuidelines.sections.purpose.items1")}</li>
                <li>{t("communityGuidelines.sections.purpose.items2")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                {t("communityGuidelines.sections.roleModel.title")}
              </h2>
              <ul className="list-disc pl-6">
                <li>{t("communityGuidelines.sections.roleModel.items0")}</li>
                <li>{t("communityGuidelines.sections.roleModel.items1")}</li>
              </ul>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CommunityGuideline;
