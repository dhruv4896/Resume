import { summaryGroups } from "../../content/profile";

export function SummarySection() {
  const [professionalSummary, coreFocus] = summaryGroups;

  return (
    <section
      id="summary"
      className="section-zone section-zone--summary bg-[color:var(--page-bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="xl:pt-6">
            <p className="section-plate">02 // Professional Summary</p>
          </div>

          <div className="space-y-6">
            <div className="hardware-panel surface-tone--graphite p-6 sm:p-8">
              <div className="module-header">
                <span className="status-led" data-active />
                <p className="module-header__label">Professional Summary</p>
              </div>

              <div className="summary-stack mt-6">
                {professionalSummary.items.map((item, index) => (
                  <article
                    key={item}
                    className="hardware-row summary-card surface-tone--bone"
                  >
                    <p className="summary-card__index mono-data">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="summary-card__copy">{item}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hardware-panel surface-tone--utility p-6 sm:p-8">
              <div className="module-header">
                <span className="status-led" data-active />
                <p className="module-header__label">Core Focus</p>
              </div>

              <div className="focus-stack mt-6">
                {coreFocus.items.map((item) => (
                  <div key={item} className="focus-tile">
                    <span className="status-led" data-active />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
