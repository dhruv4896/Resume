import { projects } from "../../content/profile";
import { SectionHeading } from "../ui/SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[color:var(--page-bg)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="High-Impact Projects"
        />

        <div className="mt-16 grid gap-8 xl:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--card-bg)] shadow-[var(--shadow-soft)]"
            >
              <div className="h-32 bg-[radial-gradient(circle_at_center,var(--ornament-secondary),transparent_62%)]" />

              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[color:var(--surface-elevated)] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--section-eyebrow)]">
                    {project.period}
                  </span>
                  <span className="rounded-full bg-[color:var(--chip-bg)] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--chip-text)]">
                    {project.metric}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-3xl italic text-[color:var(--heading)]">
                  {project.title}
                </h3>

                <ul className="mt-6 space-y-4 pl-5 text-[color:var(--text-primary)] marker:text-[color:var(--accent-strong)]">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="leading-8">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--section-eyebrow)]">
                  {project.metricLabel}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
