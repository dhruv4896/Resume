import { expertiseGroups } from "../../content/profile";

export function ToolkitSection() {
  return (
    <section id="expertise" className="bg-[color:var(--page-bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="lg:sticky lg:top-28">
            <p className="section-plate">04 // Expertise</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {expertiseGroups.map((group) => (
              <article
                key={group.title}
                className="border border-[color:var(--border-soft)] bg-[color:var(--surface-elevated)] p-6 sm:p-7"
              >
                <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[color:var(--section-eyebrow)]">
                  {group.title}
                </p>

                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-[color:var(--border-soft)] pt-4 text-sm leading-7 text-[color:var(--text-primary)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
