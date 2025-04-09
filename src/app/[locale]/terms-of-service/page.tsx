import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const TermsOfService = () => {
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
          Terms of Service
        </h1>

        {/* 📌 Table of Contents */}
        <nav className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2 list-disc list-inside text-blue-400">
            <li>
              <a href="#introduction" className="hover:text-blue-300">
                Introduction
              </a>
            </li>
            <li>
              <a href="#acceptance" className="hover:text-blue-300">
                Acceptance of Terms
              </a>
            </li>
            <li>
              <a href="#intellectual-property" className="hover:text-blue-300">
                Intellectual Property
              </a>
            </li>
            <li>
              <a href="#modifications" className="hover:text-blue-300">
                Modifications & Charges
              </a>
            </li>
            <li>
              <a href="#data-security" className="hover:text-blue-300">
                Data & Security
              </a>
            </li>
            <li>
              <a href="#third-party" className="hover:text-blue-300">
                Third-Party Services
              </a>
            </li>
            <li>
              <a href="#connectivity" className="hover:text-blue-300">
                Connectivity & Limitations
              </a>
            </li>
            <li>
              <a href="#device" className="hover:text-blue-300">
                Device Responsibilities
              </a>
            </li>
            <li>
              <a href="#updates" className="hover:text-blue-300">
                Updates & Termination
              </a>
            </li>
            <li>
              <a href="#changes" className="hover:text-blue-300">
                Changes to Terms
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Sections (with IDs) */}
        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="leading-relaxed mb-4">
            These terms and conditions apply to the Loqu app (hereby referred to
            as Application) created by Alohomora Company (Service Provider) as a
            Freemium service.
          </p>
          <p className="leading-relaxed mb-4">
            By downloading or using the Application, you agree to the terms
            described herein. It is strongly advised that you read them
            carefully before using the Application.
          </p>
        </section>

        <section id="acceptance" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            2. Acceptance of Terms
          </h2>
          <p className="leading-relaxed mb-4">
            By using the Application, you are automatically agreeing to these
            terms. Unauthorized copying or modification is strictly prohibited.
          </p>
        </section>

        <section id="intellectual-property" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            3. Intellectual Property
          </h2>
          <p className="leading-relaxed mb-4">
            You may not extract source code, translate, or create derivative
            versions of the Application. All IP rights remain with the Service
            Provider.
          </p>
        </section>

        <section id="modifications" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            4. Modifications & Charges
          </h2>
          <p className="leading-relaxed mb-4">
            The Service Provider reserves the right to modify the Application or
            charge for services at any time. Any changes will be clearly
            communicated to users.
          </p>
        </section>

        <section id="data-security" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Data & Security</h2>
          <p className="leading-relaxed mb-4">
            Your personal data is stored and processed securely. Do not
            jailbreak/root your device as it may affect security and
            functionality.
          </p>
        </section>

        <section id="third-party" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            6. Third-Party Services
          </h2>
          <p className="leading-relaxed mb-4">
            The Application uses third-party services. Refer to their terms:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-blue-400">
            <li>
              <a
                href="https://policies.google.com/terms"
                className="hover:text-blue-300"
              >
                Google Play Services
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/admob/terms"
                className="hover:text-blue-300"
              >
                AdMob
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/analytics/terms/"
                className="hover:text-blue-300"
              >
                Google Analytics for Firebase
              </a>
            </li>
            <li>
              <a href="https://expo.dev/terms" className="hover:text-blue-300">
                Expo
              </a>
            </li>
            <li>
              <a
                href="https://www.revenuecat.com/terms/"
                className="hover:text-blue-300"
              >
                RevenueCat
              </a>
            </li>
          </ul>
        </section>

        <section id="connectivity" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            7. Connectivity & Limitations
          </h2>
          <p className="leading-relaxed mb-4">
            The Application may not function properly without internet access.
            Data charges may apply. Roaming fees are also your responsibility.
          </p>
        </section>

        <section id="device" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            8. Device Responsibilities
          </h2>
          <p className="leading-relaxed mb-4">
            Ensure your device is charged and maintained. The Service Provider
            is not liable for loss of service due to battery issues.
          </p>
        </section>

        <section id="updates" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            9. Updates & Termination
          </h2>
          <p className="leading-relaxed mb-4">
            You agree to install updates to continue using the Application. The
            Service Provider may stop providing the app at any time.
          </p>
        </section>

        <section id="changes" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
          <p className="leading-relaxed mb-4">
            These terms may be updated. Please check this page periodically for
            updates.
          </p>
          <p className="leading-relaxed font-semibold">
            Effective as of 2025-04-04
          </p>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
          <p className="leading-relaxed">
            If you have any questions, please contact us at{" "}
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
