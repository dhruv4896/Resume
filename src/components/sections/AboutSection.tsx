import { aboutContent } from "../../content/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="bg-ink-900 py-20 md:py-28" id="about">
      <div className="section-shell px-6 md:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            intro={aboutContent.intro}
            label="Profile"
            title="A risk-aware operator with analytical breadth."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {aboutContent.support.map((paragraph, index) => (
            <Reveal delay={index * 0.08} key={paragraph}>
              <div className="rounded-[2rem] bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(9,14,28,0.18)] backdrop-blur-sm">
                <p className="text-base leading-8 text-[color:rgba(222,225,247,0.74)] md:text-lg">
                  {paragraph}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
