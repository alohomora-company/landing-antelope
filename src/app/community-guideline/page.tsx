import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const CommunityGuideline = () => {
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
            Community Guidelines
          </h1>

          <div className="prose prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-semibold">
                1. Respect and Kindness
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Treat all members with dignity. Be patient and courteous,
                  especially when interacting with learners who are still
                  building proficiency in a new language.
                </li>
                <li>
                  Avoid using offensive or discriminatory language, including
                  slurs, insults, or remarks that target someone’s gender,
                  ethnicity, race, religion, sexual orientation, or
                  physical/mental abilities.
                </li>
                <li>
                  When offering corrections or suggestions, do so politely and
                  constructively.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                2. Inclusive and Welcoming Culture
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Encourage a supportive environment where everyone feels safe
                  sharing thoughts, questions, and cultural perspectives.
                </li>
                <li>
                  Acknowledge and celebrate cultural differences. Ask questions
                  and listen with empathy—remember that language is closely tied
                  to culture.
                </li>
                <li>
                  Strive to make space for diverse voices and experiences in
                  discussions. If you notice someone being left out or
                  uncomfortable, consider reaching out and inviting them to
                  participate.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                3. Appropriate and Constructive Communication
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Focus on language learning and cultural exchange. Share
                  helpful resources, experiences, and constructive feedback.
                </li>
                <li>
                  Avoid spamming, self-promotion, or off-topic discussions that
                  detract from the community’s main purpose.
                </li>
                <li>
                  Refrain from sharing explicit or overly graphic content. Keep
                  discussions professional and courteous.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. Safety and Privacy</h2>
              <ul className="list-disc pl-6">
                <li>
                  Respect members’ personal boundaries and privacy. Do not
                  pressure anyone to share more personal information than they
                  are comfortable with.
                </li>
                <li>
                  Avoid posting private conversations or sensitive data (e.g.,
                  personal contact information, financial data) in public forums
                  or group discussions.
                </li>
                <li>
                  If you see content or behavior that makes you feel unsafe or
                  violates our guidelines, report it immediately through the
                  appropriate channel.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                5. No Tolerance for Harassment or Hate Speech
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Harassment, bullying, intimidation, or targeted attacks
                  against any individual or group are strictly prohibited.
                </li>
                <li>
                  Hate speech and threats of violence or harm will lead to
                  immediate action, which may include content removal or account
                  suspension.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                6. Constructive Conflict Resolution
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Healthy debates can help people learn, but keep disagreements
                  respectful. Attack ideas rather than individuals.
                </li>
                <li>
                  If a dispute escalates, use the platform’s conflict-resolution
                  tools or reach out to moderators for guidance.
                </li>
                <li>
                  Encourage calm dialogue. In cross-cultural interactions,
                  differences of perspective are natural. Approach these
                  differences with an open mind.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                7. Reporting and Enforcement
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  We rely on community members to help us maintain a positive
                  space. If you witness or experience harassment, hate speech,
                  or any violation of these guidelines, please report it to our
                  moderation team.
                </li>
                <li>
                  Our moderation team will review all reports. Appropriate
                  actions—such as content removal, warnings, or account
                  suspension—will be taken promptly to address violations.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                8. Continuous Improvement
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Recognize that our community evolves as language-learning
                  trends and cultural dynamics change. We welcome feedback on
                  our guidelines to better serve and protect everyone.
                </li>
                <li>
                  Updates to these guidelines will be posted and highlighted.
                  Members are responsible for familiarizing themselves with the
                  latest policies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">
                9. Platform Purpose First
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Keep interactions aligned with the community’s core goal:
                  language learning and cultural exchange.
                </li>
                <li>
                  Stay focused and respectful of the space we’re all building
                  together.
                </li>
                <li>
                  Avoid derailing discussions or dominating conversations in
                  ways that prevent others from participating.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">10. Be a Role Model</h2>
              <ul className="list-disc pl-6">
                <li>
                  Set a positive example for others. Encourage good behavior by
                  being inclusive, helpful, and respectful in your own
                  interactions.
                </li>
                <li>
                  Small actions—like welcoming a new member or giving
                  constructive feedback—help shape the overall culture of Loqu.
                </li>
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
