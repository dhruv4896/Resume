import { contact, education, toolGroups } from "../../content/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type SummarySectionProps = {
  emailHref: string;
  linkedinHref: string;
  resumeUrl: string;
};

export function SummarySection({
  emailHref,
  linkedinHref,
  resumeUrl,
}: SummarySectionProps) {
  return (
    <section className="bg-[rgba(255,253,249,0.96)] py-20 md:py-28" id="summary">
      <div className="section-shell px-6 md:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            intro="Education, technical tools, and contact stay compact and factual so the close feels refined rather than crowded."
            label="Education + Tools + Contact"
            title="Grounded credentials, practical tools, and a direct way to connect."
            tone="light"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.05fr_1.1fr_0.85fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,#f5efe7,#fffdf9)] px-7 py-8 text-stone-900 shadow-[0_24px_60px_rgba(49,39,31,0.06)] ring-1 ring-[rgba(94,79,66,0.06)]">
              <p className="section-kicker text-stone-500">Education</p>
              <div className="mt-8 space-y-8">
                {education.map((item) => (
                  <article key={`${item.institution}-${item.degree}`}>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-stone-500">
                      {item.period}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl tracking-[-0.04em] text-stone-900">
                      {item.institution}
                    </h3>
                    <p className="mt-2 text-base font-medium text-stone-700">
                      {item.degree}
                    </p>
                    <p className="mt-1 text-sm text-stone-600">{item.detail}</p>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-warm)]">
                      {item.gpa}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_rgba(49,39,31,0.05)] ring-1 ring-[rgba(94,79,66,0.05)]">
              <p className="section-kicker text-stone-500">Tools</p>
              <div className="mt-8 space-y-7">
                {toolGroups.map((group) => (
                  <article key={group.label}>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-stone-500">
                      {group.label}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <li
                          className="rounded-full border border-[rgba(94,79,66,0.08)] bg-stone-50 px-4 py-2 text-sm font-medium text-stone-900"
                          key={item}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <aside className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(209,180,151,0.18),rgba(190,199,183,0.1))] px-7 py-8 shadow-[0_24px_60px_rgba(49,39,31,0.05)] ring-1 ring-[rgba(94,79,66,0.06)]">
              <p className="section-kicker text-stone-500">Contact</p>
              <h3 className="mt-4 font-serif text-4xl leading-none tracking-[-0.05em] text-stone-900">
                Open to thoughtful conversations.
              </h3>
              <p className="mt-6 text-base leading-8 text-stone-600">
                {contact.note}
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ivory transition-transform duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
                  href={emailHref}
                >
                  Email Dhruv
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-900 ring-1 ring-[rgba(94,79,66,0.12)] transition-transform duration-300 hover:-translate-y-0.5"
                  href={linkedinHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-900 ring-1 ring-[rgba(94,79,66,0.12)] transition-transform duration-300 hover:-translate-y-0.5"
                  download
                  href={resumeUrl}
                >
                  Download CV
                </a>
              </div>
              <p className="mt-8 text-sm font-medium text-stone-600">
                {contact.email}
              </p>
              <p className="mt-2 text-sm text-stone-500">{contact.phone}</p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
