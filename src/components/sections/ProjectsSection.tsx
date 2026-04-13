import { projects } from "../../content/profile";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[color:var(--section-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="xl:pt-6">
            <p className="section-plate">05 // Selected Projects</p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`hardware-panel project-card ${index === 0 ? "surface-tone--graphite" : "surface-tone--bone"} p-6 sm:p-8`}
              >
                <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(15rem,0.85fr)] xl:items-start">
                  <div>
                    <div className="module-header">
                      <span className="status-led" data-active />
                      <p className="module-header__label">{project.period}</p>
                    </div>

                    <h3 className="mt-5 font-display text-3xl font-bold uppercase tracking-[-0.05em] text-[color:var(--heading)]">
                      {project.title}
                    </h3>

                    <ul className="mt-6 space-y-3">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="hardware-row project-bullet">
                          <span className="project-bullet__marker" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="xl:self-stretch">
                    <div
                      className={`metric-well metric-well--project h-full ${index === 0 ? "surface-tone--orange-soft" : "surface-tone--teal"}`}
                    >
                      <p className="metric-well__title">Measured Outcome</p>
                      <p className="metric-well__value mono-data">{project.metric}</p>
                      <p className="metric-well__label">{project.title}</p>
                      <p className="metric-well__detail">{project.metricLabel}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
