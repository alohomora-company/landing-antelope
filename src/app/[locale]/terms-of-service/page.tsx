import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const TermsOfService = () => {
  const t = useTranslations();
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-grow px-6 md:px-12 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center font-sans">
          {t("termsOfService.title")}
          {/* Terms of Service */}
        </h1>

        {/* 📌 Table of Contents */}
        <nav className="mb-16">
          <h2 className="text-xl font-semibold mb-4">
            {t("termsOfService.description")}
          </h2>
          <ul className="space-y-2 list-disc list-inside text-blue-400">
            <li>
              <a href="#introduction" className="hover:text-blue-300">
                {t("termsOfService.sections.introduction.title")}
              </a>
            </li>
            <li>
              <a href="#acceptance" className="hover:text-blue-300">
                {t("termsOfService.sections.acceptance.title")}
              </a>
            </li>
            <li>
              <a href="#intellectual-property" className="hover:text-blue-300">
                {t("termsOfService.sections.intellectualProperty.title")}
              </a>
            </li>
            <li>
              <a href="#modifications" className="hover:text-blue-300">
                {t("termsOfService.sections.modifications.title")}
              </a>
            </li>
            <li>
              <a href="#data-security" className="hover:text-blue-300">
                {t("termsOfService.sections.dataSecurity.title")}
              </a>
            </li>
            <li>
              <a href="#third-party" className="hover:text-blue-300">
                {t("termsOfService.sections.thirdParty.title")}
              </a>
            </li>
            <li>
              <a href="#connectivity" className="hover:text-blue-300">
                {t("termsOfService.sections.connectivity.title")}
              </a>
            </li>
            <li>
              <a href="#device" className="hover:text-blue-300">
                {t("termsOfService.sections.device.title")}
              </a>
            </li>
            <li>
              <a href="#updates" className="hover:text-blue-300">
                {t("termsOfService.sections.updates.title")}
              </a>
            </li>
            <li>
              <a href="#changes" className="hover:text-blue-300">
                {t("termsOfService.sections.changes.title")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300">
                {t("termsOfService.sections.subscription.title")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300">
                {t("termsOfService.sections.contact.title")}
              </a>
            </li>
          </ul>
        </nav>

        {/* Sections (with IDs) */}
        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.introduction.title")}
          </h2>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.introduction.content0")}
          </p>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.introduction.content1")}
          </p>
        </section>

        <section id="acceptance" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.acceptance.title")}
          </h2>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.acceptance.content0")}
          </p>
        </section>

        <section id="intellectual-property" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.intellectualProperty.title")}
          </h2>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.intellectualProperty.content0")}
          </p>
        </section>

        <section id="modifications" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.modifications.title")}
          </h2>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.modifications.content0")}
          </p>
        </section>

        <section id="data-security" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.dataSecurity.title")}
          </h2>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.dataSecurity.content0")}
          </p>
        </section>

        <section id="third-party" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.thirdParty.title")}
          </h2>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.thirdParty.content0")}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-blue-400">
            <li>
              <a
                href="https://policies.google.com/terms"
                className="hover:text-blue-300"
              >
                {t("termsOfService.sections.thirdParty.links.googlePlay")}
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/admob/terms"
                className="hover:text-blue-300"
              >
                {t("termsOfService.sections.thirdParty.links.admob")}
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/analytics/terms/"
                className="hover:text-blue-300"
              >
                {t("termsOfService.sections.thirdParty.links.analytics")}
              </a>
            </li>
            <li>
              <a href="https://expo.dev/terms" className="hover:text-blue-300">
                {t("termsOfService.sections.thirdParty.links.expo")}
              </a>
            </li>
            <li>
              <a
                href="https://www.revenuecat.com/terms/"
                className="hover:text-blue-300"
              >
                {t("termsOfService.sections.thirdParty.links.revenuecat")}
              </a>
            </li>
          </ul>
        </section>

        <section id="connectivity" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.connectivity.title")}
          </h2>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.connectivity.content0")}
          </p>
        </section>

        <section id="device" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.device.title")}
          </h2>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.device.content0")}
          </p>
        </section>

        <section id="updates" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.updates.title")}
          </h2>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.updates.content0")}
          </p>
        </section>

        <section id="changes" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.changes.title")}
          </h2>
          <p className="leading-relaxed mb-4">
            {t("termsOfService.sections.changes.content0")}
          </p>
          <p className="leading-relaxed font-semibold">
            {t("termsOfService.sections.changes.effectiveDate")}
          </p>
        </section>

        <section id="subscription" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            {t("termsOfService.sections.subscription.title")}
          </h2>

          <div className="pl-4">
            {/* 1. Subscription Plans */}
            <p className="leading-relaxed font-semibold">
              1. {t("termsOfService.sections.subscription.content.items0")}
            </p>
            <ul className="mb-4 ml-4 list-disc text-sm text-neutral-300">
              <li>
                {t("termsOfService.sections.subscription.description.items0")}
              </li>
              <li>
                {t("termsOfService.sections.subscription.description.items1")}
              </li>
              <li>
                {t("termsOfService.sections.subscription.description.items2")}
              </li>
              <li>
                {t("termsOfService.sections.subscription.description.items3")}
              </li>
            </ul>

            {/* 2. Payment & Renewal */}
            <p className="leading-relaxed font-semibold">
              2. {t("termsOfService.sections.subscription.content.items1")}
            </p>
            <ul className="mb-4 ml-4 list-disc text-sm text-neutral-300">
              <li>
                {t("termsOfService.sections.subscription.description.items4")}
              </li>
              <li>
                {t("termsOfService.sections.subscription.description.items5")}
              </li>
            </ul>

            {/* 3. Managing Subscriptions */}
            <p className="leading-relaxed font-semibold">
              3. {t("termsOfService.sections.subscription.content.items2")}
            </p>
            <ul className="mb-4 ml-4 list-disc text-sm text-neutral-300">
              <li>
                {t("termsOfService.sections.subscription.description.items6")}
              </li>
            </ul>

            {/* 4. Free Trial */}
            <p className="leading-relaxed font-semibold">4. Free Trial</p>
            <ul className="mb-4 ml-4 list-disc text-sm text-neutral-300">
              <li>
                {t("termsOfService.sections.subscription.description.items7")}
              </li>
            </ul>

            {/* 5. Refund Policy */}
            <p className="leading-relaxed font-semibold">
              5. {t("termsOfService.sections.subscription.content.items3")}
            </p>
            <ul className="ml-4 list-disc text-sm text-neutral-300">
              <li>
                {t("termsOfService.sections.subscription.description.items8")}
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            {t("termsOfService.sections.contact.title")}
          </h2>
          <p className="leading-relaxed">
            {t("termsOfService.sections.contact.content0")}
            <a
              href="mailto:privacy@alohomora.company"
              className="text-blue-400 hover:text-blue-300"
            >
              privacy@alohomora.company
            </a>
            .
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfService;
