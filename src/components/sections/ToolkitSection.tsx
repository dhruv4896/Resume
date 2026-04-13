import { expertiseGroups } from "../../content/profile";
import { SectionHeading } from "../ui/SectionHeading";

export function ToolkitSection() {
  return (
    <section id="toolkit" className="bg-[color:var(--section-soft)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Technical Toolkit"
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {expertiseGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--card-bg)] p-6 shadow-[var(--shadow-soft)]"
            >
              <h3 className="font-display text-2xl text-[color:var(--heading)]">
                {group.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-[color:var(--surface-elevated)] px-4 py-3 text-sm leading-7 text-[color:var(--text-primary)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
