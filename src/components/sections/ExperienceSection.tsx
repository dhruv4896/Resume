import { experienceIntro, experienceItems } from "../../content/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section className="surface-mist py-20 md:py-28" id="experience">
      <div className="section-shell px-6 md:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            intro={experienceIntro}
            label="Experience"
            title="Continuity, governance, and analytical delivery across regulated contexts."
            tone="light"
          />
        </Reveal>

        <ol className="mt-16 space-y-10">
          {experienceItems.map((item, index) => (
            <Reveal delay={index * 0.08} key={item.company}>
              <li className="timeline-row relative grid gap-8 rounded-[2rem] bg-[rgba(255,253,249,0.9)] px-6 py-8 shadow-[0_24px_60px_rgba(49,39,31,0.06)] ring-1 ring-[rgba(94,79,66,0.06)] md:px-8 lg:grid-cols-[0.68fr_1.32fr] lg:px-10">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-3 w-3 rounded-full bg-[color:var(--accent-warm)] shadow-[0_0_0_10px_rgba(154,123,90,0.08)]" />
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-stone-500">
                      {item.period}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl tracking-[-0.04em] text-stone-900">
                      {item.company}
                    </h3>
                    <p className="mt-2 text-base font-medium text-stone-600">
                      {item.title}
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm leading-7 text-stone-600 md:text-base">
                  {item.bullets.map((bullet) => (
                    <li className="flex gap-4" key={bullet}>
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--primary)]" />
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
