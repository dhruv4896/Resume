import { capabilityGroups } from "../../content/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function CapabilitiesSection() {
  return (
    <section className="bg-[rgba(255,253,249,0.96)] py-20 md:py-28" id="capabilities">
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
              <article className="group h-full rounded-[2rem] border border-[color:rgba(94,79,66,0.08)] bg-[linear-gradient(180deg,rgba(255,253,249,1),rgba(245,239,231,0.86))] p-8 shadow-[0_20px_48px_rgba(49,39,31,0.05)] transition-transform duration-500 hover:-translate-y-1">
                <p className="section-kicker text-stone-500">{group.name}</p>
                <p className="mt-4 text-base leading-8 text-stone-600">
                  {group.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <li
                      className="rounded-full border border-[rgba(94,79,66,0.08)] bg-[rgba(255,253,249,0.88)] px-4 py-2 text-sm font-medium text-stone-900"
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
