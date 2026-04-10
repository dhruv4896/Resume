import { experienceIntro, experienceItems } from "../../content/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section className="bg-ink-950 py-20 md:py-28" id="experience">
      <div className="section-shell px-6 md:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            intro={experienceIntro}
            label="Experience"
            title="Continuity, governance, and analytical delivery across regulated contexts."
          />
        </Reveal>

        <ol className="mt-16 space-y-10">
          {experienceItems.map((item, index) => (
            <Reveal delay={index * 0.08} key={item.company}>
              <li className="timeline-row relative grid gap-8 rounded-[2rem] bg-[linear-gradient(180deg,rgba(26,31,47,0.88),rgba(22,27,43,0.82))] px-6 py-8 md:px-8 lg:grid-cols-[0.68fr_1.32fr] lg:px-10">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-3 w-3 rounded-full bg-accent-soft shadow-[0_0_0_10px_rgba(112,216,200,0.08)]" />
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[color:rgba(222,225,247,0.46)]">
                      {item.period}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl tracking-[-0.04em] text-ivory">
                      {item.company}
                    </h3>
                    <p className="mt-2 text-base font-medium text-[color:rgba(222,225,247,0.78)]">
                      {item.title}
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm leading-7 text-[color:rgba(222,225,247,0.72)] md:text-base">
                  {item.bullets.map((bullet) => (
                    <li className="flex gap-4" key={bullet}>
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
