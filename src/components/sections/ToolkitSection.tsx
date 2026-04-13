import { expertiseGroups } from "../../content/profile";

const toneClasses = [
  "surface-tone--bone",
  "surface-tone--graphite",
  "surface-tone--utility",
  "surface-tone--teal",
];

export function ToolkitSection() {
  return (
    <section id="expertise" className="bg-[color:var(--page-bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="xl:pt-6">
            <p className="section-plate">04 // Expertise &amp; Toolkit</p>
          </div>

          <div className="space-y-6">
            {expertiseGroups.map((group, index) => (
              <article
                key={group.title}
                className={`hardware-panel ${toneClasses[index % toneClasses.length]} p-6 sm:p-7`}
              >
                <div className="module-header">
                  <span className="status-led" data-active={index % 2 === 0} />
                  <p className="module-header__label">{group.title}</p>
                </div>

                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="hardware-row toolkit-item"
                    >
                      <span className="toolkit-item__dash" />
                      <span>{item}</span>
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
