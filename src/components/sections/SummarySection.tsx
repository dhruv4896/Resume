import { summaryGroups } from "../../content/profile";

export function SummarySection() {
  const [professionalSummary, coreFocus] = summaryGroups;

  return (
    <section id="summary" className="bg-[color:var(--page-bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="lg:sticky lg:top-28">
            <p className="section-plate">02 // Summary</p>
          </div>

          <div className="grid gap-12 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-[color:var(--heading)] sm:text-5xl">
                {professionalSummary.title}
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {professionalSummary.items.map((item, index) => (
                  <article
                    key={item}
                    className="border-t border-[color:var(--border-soft)] pt-5"
                  >
                    <p className="font-label text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 leading-8 text-[color:var(--text-primary)]">
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="border border-[color:var(--border-soft)] bg-[color:var(--section-soft)] p-6 sm:p-8">
              <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[color:var(--section-eyebrow)]">
                Core Focus
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-[color:var(--heading)]">
                {coreFocus.title}
              </h3>

              <ul className="mt-8 space-y-4">
                {coreFocus.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-[color:var(--border-soft)] pt-4 text-sm font-medium uppercase tracking-[0.12em] text-[color:var(--text-strong)]"
                  >
                    <span className="utility-dot mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
