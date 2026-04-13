import { projects } from "../../content/profile";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[color:var(--section-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="lg:sticky lg:top-28">
            <p className="section-plate">05 // Projects</p>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border border-[color:var(--border-soft)] bg-[color:var(--surface-elevated)] p-6 sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-start">
                  <div>
                    <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[color:var(--section-eyebrow)]">
                      {project.period}
                    </p>

                    <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-[color:var(--heading)]">
                      {project.title}
                    </h3>

                    <ul className="mt-6 space-y-4">
                      {project.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="border-t border-[color:var(--border-soft)] pt-4 text-sm leading-7 text-[color:var(--text-primary)]"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[color:var(--border-soft)] pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 lg:text-right">
                    <p className="font-display text-5xl font-bold tracking-[-0.04em] text-[color:var(--accent-strong)] sm:text-6xl">
                      {project.metric}
                    </p>
                    <p className="mt-3 font-label text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[color:var(--section-eyebrow)]">
                      {project.metricLabel}
                    </p>
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
