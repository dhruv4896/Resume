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
    <section className="surface-mist py-20 md:py-28" id="summary">
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
            <div className="rounded-[2rem] bg-slate-950 px-7 py-8 text-ivory shadow-[0_24px_90px_rgba(16,33,50,0.12)]">
              <p className="section-kicker text-[color:rgba(222,225,247,0.46)]">
                Education
              </p>
              <div className="mt-8 space-y-8">
                {education.map((item) => (
                  <article key={`${item.institution}-${item.degree}`}>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[color:rgba(222,225,247,0.42)]">
                      {item.period}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl tracking-[-0.04em] text-ivory">
                      {item.institution}
                    </h3>
                    <p className="mt-2 text-base font-medium text-[color:rgba(222,225,247,0.82)]">
                      {item.degree}
                    </p>
                    <p className="mt-1 text-sm text-[color:rgba(222,225,247,0.64)]">
                      {item.detail}
                    </p>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
                      {item.gpa}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_90px_rgba(16,33,50,0.08)]">
              <p className="section-kicker text-slate-500/80">Tools</p>
              <div className="mt-8 space-y-7">
                {toolGroups.map((group) => (
                  <article key={group.label}>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">
                      {group.label}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <li
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900"
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
            <aside className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(0,218,243,0.14),rgba(112,216,200,0.08))] px-7 py-8 shadow-[0_24px_90px_rgba(16,33,50,0.08)]">
              <p className="section-kicker text-slate-500/80">Contact</p>
              <h3 className="mt-4 font-serif text-4xl leading-none tracking-[-0.05em] text-slate-950">
                Open to thoughtful conversations.
              </h3>
              <p className="mt-6 text-base leading-8 text-slate-600">
                {contact.note}
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ivory transition-transform duration-300 hover:-translate-y-0.5"
                  href={emailHref}
                >
                  Email Dhruv
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-0.5"
                  href={linkedinHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-0.5"
                  download
                  href={resumeUrl}
                >
                  Download CV
                </a>
              </div>
              <p className="mt-8 text-sm font-medium text-slate-600">
                {contact.email}
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
