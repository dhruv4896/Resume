import { experienceItems } from "../../content/profile";

const toneClasses = ["surface-tone--graphite", "surface-tone--bone"];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[color:var(--section-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="xl:pt-6">
            <p className="section-plate">03 // Professional Experience</p>
          </div>

          <div className="experience-timeline">
            {experienceItems.map((item, index) => (
              <div
                key={`${item.company}-${item.period}`}
                className="experience-timeline__entry"
              >
                <div className="experience-timeline__marker">
                  <span className="experience-timeline__dot">
                    <span className="status-led" data-active />
                  </span>
                  <p className="experience-timeline__period">{item.period}</p>
                </div>

                <article
                  className={`hardware-panel experience-timeline__card ${toneClasses[index % toneClasses.length]} p-6 sm:p-8`}
                >
                  <div className="module-header">
                    <span className="status-led" data-active />
                    <p className="module-header__label">Role</p>
                  </div>

                  <div className="experience-meta">
                    <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.05em] text-[color:var(--heading)] sm:text-[2.4rem]">
                      {item.company}
                    </h3>
                    <p className="experience-meta__title">{item.title}</p>
                  </div>

                  <ul className="experience-timeline__list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="hardware-row experience-bullet">
                        <span className="status-led experience-bullet__led" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
