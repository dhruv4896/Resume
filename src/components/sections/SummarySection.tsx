import { summaryGroups } from "../../content/profile";
import { SectionHeading } from "../ui/SectionHeading";

export function SummarySection() {
  const [professionalSummary, coreFocus] = summaryGroups;

  return (
    <section id="summary" className="bg-[color:var(--section-soft)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Strategic Profile"
          title={professionalSummary.title}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {professionalSummary.items.map((item) => (
            <article
              key={item}
              className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--card-bg)] p-7 text-[color:var(--text-primary)] shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-1 motion-reduce:transition-none"
            >
              <p className="leading-8">{item}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-elevated)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem),1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--section-eyebrow)]">
                Focus Areas
              </p>
              <h3 className="mt-3 font-display text-3xl italic text-[color:var(--heading)]">
                {coreFocus.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {coreFocus.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full bg-[color:var(--chip-bg)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--chip-text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
