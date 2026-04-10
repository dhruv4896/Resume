import { projects } from "../../content/profile";
import { GridOverlay } from "../../visuals/grid-overlay";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function ProjectArtwork({ accent }: { accent: "cyan" | "teal" }) {
  const highlight =
    accent === "cyan"
      ? "bg-[radial-gradient(circle_at_30%_34%,rgba(0,218,243,0.34),transparent_34%),linear-gradient(180deg,rgba(9,14,28,0.4),rgba(9,14,28,0.88))]"
      : "bg-[radial-gradient(circle_at_72%_24%,rgba(112,216,200,0.34),transparent_34%),linear-gradient(180deg,rgba(9,14,28,0.36),rgba(9,14,28,0.86))]";

  return (
    <div className={`relative overflow-hidden rounded-[1.5rem] ${highlight}`}>
      <GridOverlay className="opacity-70" />
      <div className="aspect-[1.28/1]">
        <svg className="h-full w-full" fill="none" viewBox="0 0 640 500">
          <path
            d="M68 380C126 315 170 286 230 278C316 267 355 326 426 316C485 308 532 256 571 170"
            stroke="rgba(255,255,255,0.24)"
            strokeWidth="2"
          />
          <path
            d="M74 364C146 310 196 294 262 306C324 317 374 356 443 345C512 334 556 278 579 212"
            stroke="rgba(0,218,243,0.55)"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M87 403C139 385 193 354 250 356C330 359 400 430 490 402C525 391 557 368 582 337"
            stroke="rgba(112,216,200,0.36)"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
          {[
            [112, 366],
            [176, 326],
            [260, 304],
            [346, 336],
            [447, 345],
            [578, 212],
          ].map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} fill="rgba(0,218,243,0.18)" r="18" />
              <circle cx={x} cy={y} fill="#70d8c8" r="7" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="bg-ink-950 py-20 md:py-28" id="projects">
      <div className="section-shell px-6 md:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            intro="Two academic projects carry the technical story without hijacking the site’s present-day positioning."
            label="Selected Projects"
            title="Applied machine learning work that adds depth, not noise."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal delay={index * 0.08} key={project.title}>
              <article className="group overflow-hidden rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(26,31,47,0.92),rgba(15,19,34,0.92))] p-5 shadow-[0_24px_90px_rgba(9,14,28,0.24)] transition-transform duration-500 hover:-translate-y-1">
                <ProjectArtwork accent={project.accent} />
                <div className="px-3 pb-3 pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-[2rem] leading-tight tracking-[-0.05em] text-ivory">
                      {project.title}
                    </h3>
                    <p className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[color:rgba(222,225,247,0.46)]">
                      {project.period}
                    </p>
                  </div>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[color:rgba(222,225,247,0.74)] md:text-base">
                    {project.highlight}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-[color:rgba(222,225,247,0.68)]">
                    {project.bullets.map((bullet) => (
                      <li className="flex gap-3" key={bullet}>
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
