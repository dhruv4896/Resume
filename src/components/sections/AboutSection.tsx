import { aboutContent } from "../../content/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="bg-[rgba(255,253,249,0.92)] py-20 md:py-28" id="about">
      <div className="section-shell px-6 md:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            intro={aboutContent.intro}
            label="Profile"
            title="A risk-aware operator with analytical breadth."
            tone="light"
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <article className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(245,239,231,0.9),rgba(255,253,249,0.96))] px-8 py-9 shadow-[0_24px_60px_rgba(49,39,31,0.06)] ring-1 ring-[rgba(94,79,66,0.06)]">
              <p className="section-kicker text-stone-500">Current framing</p>
              <h3 className="mt-6 font-serif text-4xl leading-none tracking-[-0.05em] text-stone-900">
                Business continuity first, technical depth second.
              </h3>
              <p className="mt-6 text-base leading-8 text-stone-600">
                Dhruv&apos;s profile is strongest when continuity governance,
                information security, and business analysis lead the story, with
                machine learning serving as analytical range rather than as the
                headline.
              </p>
            </article>
          </Reveal>

          <div className="grid gap-6 border-l border-[color:var(--outline)] pl-0 lg:pl-10">
            {aboutContent.support.map((paragraph, index) => (
              <Reveal delay={index * 0.08} key={paragraph}>
                <div className="rounded-[1.6rem] bg-white px-7 py-7 shadow-[0_18px_42px_rgba(49,39,31,0.05)] ring-1 ring-[rgba(94,79,66,0.05)]">
                  <p className="text-base leading-8 text-stone-600 md:text-lg">
                    {paragraph}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
