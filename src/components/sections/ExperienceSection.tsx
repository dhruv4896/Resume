import { experienceItems } from "../../content/profile";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[color:var(--page-bg)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Professional History"
                title="Experience"
              />
            </div>
          </div>

          <div className="space-y-14 lg:col-span-8">
            {experienceItems.map((item, index) => (
              <article
                key={`${item.company}-${item.period}`}
                className="relative border-l border-[color:var(--timeline-line)] pl-8 sm:pl-12"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[0.44rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-[color:var(--page-bg)] ${
                    index === 0
                      ? "bg-[color:var(--timeline-dot)]"
                      : "bg-[color:var(--timeline-dot-soft)]"
                  }`}
                />

                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="font-display text-3xl text-[color:var(--heading)] sm:text-[2rem]">
                      {item.company}
                    </h3>
                    <p className="mt-2 text-lg text-[color:var(--muted)]">
                      {item.title}
                    </p>
                  </div>
                  <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--section-eyebrow)]">
                    {item.period}
                  </p>
                </div>

                <ul className="space-y-4 pl-5 text-[color:var(--text-primary)] marker:text-[color:var(--accent-strong)]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="leading-8">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
