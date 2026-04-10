import { projects } from "../../content/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function ProjectArtwork({ accent }: { accent: "cyan" | "teal" }) {
  const highlight =
    accent === "cyan"
      ? "bg-[radial-gradient(circle_at_30%_34%,rgba(190,199,183,0.34),transparent_34%),linear-gradient(180deg,#fffdf9,#f3ece3)]"
      : "bg-[radial-gradient(circle_at_72%_24%,rgba(209,180,151,0.34),transparent_34%),linear-gradient(180deg,#fffdf9,#f5efe7)]";

  return (
    <div className={`relative overflow-hidden rounded-[1.5rem] ${highlight}`}>
      <div className="aspect-[1.28/1]">
        <svg className="h-full w-full" fill="none" viewBox="0 0 640 500">
          <path
            d="M68 380C126 315 170 286 230 278C316 267 355 326 426 316C485 308 532 256 571 170"
            stroke="rgba(154,123,90,0.18)"
            strokeWidth="2"
          />
          <path
            d="M74 364C146 310 196 294 262 306C324 317 374 356 443 345C512 334 556 278 579 212"
            stroke="rgba(107,122,101,0.72)"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M87 403C139 385 193 354 250 356C330 359 400 430 490 402C525 391 557 368 582 337"
            stroke="rgba(154,123,90,0.38)"
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
              <circle cx={x} cy={y} fill="rgba(107,122,101,0.14)" r="18" />
              <circle cx={x} cy={y} fill="#6b7a65" r="7" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="surface-mist py-20 md:py-28" id="projects">
      <div className="section-shell px-6 md:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            intro="Two academic projects carry the technical story without hijacking the site's present-day positioning."
            label="Selected Projects"
            title="Applied machine learning work that adds depth, not noise."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal delay={index * 0.08} key={project.title}>
              <article className="group overflow-hidden rounded-[2.2rem] bg-[rgba(255,253,249,0.92)] p-5 shadow-[0_24px_60px_rgba(49,39,31,0.06)] ring-1 ring-[rgba(94,79,66,0.06)] transition-transform duration-500 hover:-translate-y-1">
                <ProjectArtwork accent={project.accent} />
                <div className="px-3 pb-3 pt-6">
                  <p className="section-kicker text-stone-500">{project.period}</p>
                  <div className="mt-4 flex flex-col gap-3">
                    <h3 className="font-serif text-[2rem] leading-tight tracking-[-0.05em] text-stone-900">
                      {project.title}
                    </h3>
                    <p className="text-lg font-medium leading-8 text-[color:var(--accent-warm)]">
                      {project.highlight}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-stone-600">
                    {project.bullets.map((bullet) => (
                      <li className="flex gap-3" key={bullet}>
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--primary)]" />
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
