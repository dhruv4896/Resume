import { capabilityGroups } from "../../content/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function CapabilitiesSection() {
  return (
    <section className="surface-mist py-20 md:py-28" id="capabilities">
      <div className="section-shell px-6 md:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            intro="Grouped capabilities keep the story focused: continuity governance first, delivery rigor second, and technical depth as the supporting engine."
            label="Capabilities"
            title="Three disciplined capability bands, not a noisy skill wall."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {capabilityGroups.map((group, index) => (
            <Reveal delay={index * 0.08} key={group.name}>
              <article className="group h-full rounded-[2rem] bg-white p-8 shadow-[0_24px_90px_rgba(16,33,50,0.08)] transition-transform duration-500 hover:-translate-y-1">
                <p className="section-kicker text-slate-500/80">{group.name}</p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {group.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <li
                      className="rounded-full bg-[linear-gradient(135deg,rgba(0,218,243,0.12),rgba(112,216,200,0.16))] px-4 py-2 text-sm font-medium text-slate-900"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
