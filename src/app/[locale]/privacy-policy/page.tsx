import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none text-sm md:text-base">
              <p className="mb-6">
                At Loqu, we take your privacy seriously. This Privacy Policy
                explains how we collect, use, and protect your personal
                information.
              </p>

              <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Account information (name, email, password)</li>
                <li>Profile information (bio, language preferences)</li>
                <li>Content you post or share</li>
                <li>Communications with other users</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide and improve our services</li>
                <li>Personalize your experience</li>
                <li>Communicate with you</li>
                <li>Ensure platform safety and security</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-4">
                Data Security
              </h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration, or
                disclosure.
              </p>

              <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-4">
                Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-4">
                Contact Us
              </h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
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
