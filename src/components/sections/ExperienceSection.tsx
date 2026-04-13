import { experienceItems } from "../../content/profile";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[color:var(--section-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="lg:sticky lg:top-28">
            <p className="section-plate">03 // Experience</p>
          </div>

          <div className="space-y-14">
            {experienceItems.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="hardware-panel p-6 sm:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-12">
                  <div className="border-b border-[color:var(--border-soft)] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                    <p className="mono-data font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                      {item.period}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-[color:var(--heading)] sm:text-[2.35rem]">
                      {item.company}
                    </h3>
                    <p className="mt-3 font-label text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                      {item.title}
                    </p>
                  </div>

                  <ul className="grid gap-3 md:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="hardware-row text-sm leading-7 text-[color:var(--text-primary)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
