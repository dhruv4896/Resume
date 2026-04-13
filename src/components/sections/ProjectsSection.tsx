import type { CSSProperties } from "react";

import { projects } from "../../content/profile";

function ProjectPreview({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="project-preview project-preview--matrix surface-tone--graphite">
        <div className="project-preview__header">
          <span className="status-led" data-active />
          <span className="project-preview__label">Model Adapter Grid</span>
        </div>
        <div className="project-preview__matrix">
          {Array.from({ length: 24 }).map((_, cellIndex) => (
            <span
              key={`matrix-${cellIndex}`}
              className="project-preview__cell"
              data-active={cellIndex % 3 === 0 || cellIndex % 5 === 0}
              style={{ "--pulse-delay": `${cellIndex * 70}ms` } as CSSProperties}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview project-preview--chart surface-tone--bone">
      <div className="project-preview__header">
        <span className="status-led" data-active />
        <span className="project-preview__label">Forecast Signal</span>
      </div>
      <div className="project-preview__chart">
        {Array.from({ length: 10 }).map((_, barIndex) => (
          <span
            key={`bar-${barIndex}`}
            className="project-preview__bar"
            style={{
              "--bar-height": `${32 + ((barIndex * 11) % 54)}%`,
              "--bar-delay": `${barIndex * 80}ms`,
            } as CSSProperties}
          />
        ))}
        <svg
          aria-hidden="true"
          className="project-preview__line"
          viewBox="0 0 300 120"
        >
          <path
            d="M10 85 C45 30, 70 35, 100 48 S160 95, 190 64 S245 18, 290 40"
            fill="none"
            stroke="currentColor"
            strokeDasharray="5 5"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
}

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
                className={`hardware-panel project-card ${index === 0 ? "surface-tone--graphite" : "surface-tone--orange-soft"} p-6 sm:p-8`}
              >
                <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(14rem,0.9fr)] xl:items-start">
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

                  <div className="space-y-4">
                    <ProjectPreview index={index} />
                    <div className="metric-well metric-well--project surface-tone--utility">
                      <p className="metric-well__title">{project.metricLabel}</p>
                      <p className="metric-well__value mono-data">{project.metric}</p>
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
