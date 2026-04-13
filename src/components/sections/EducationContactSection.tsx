import { contact, education } from "../../content/profile";
import { publicLinks } from "../../content/site";

type ContactRowProps = {
  href: string;
  label: string;
  value: string;
  external?: boolean;
};

function ContactRow({
  href,
  label,
  value,
  external = false,
}: ContactRowProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="hardware-row block transition-colors duration-200 hover:text-[color:var(--strong-accent)] motion-reduce:transition-none"
    >
      <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[color:var(--strong-subtle)]">
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-[color:var(--strong-muted)]">
        {value}
      </p>
    </a>
  );
}

export function EducationContactSection() {
  return (
    <section id="contact" className="overflow-hidden bg-[color:var(--page-bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="lg:sticky lg:top-28">
            <p className="section-plate">06 // Education // Contact</p>
          </div>

          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,0.88fr)]">
            <div id="education">
              <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-[color:var(--heading)] sm:text-5xl">
                Education
              </h2>

              <div className="mt-8 space-y-8">
                {education.map((item) => (
                  <article
                    key={`${item.school}-${item.period}`}
                    className="hardware-row"
                  >
                    <h3 className="font-display text-3xl font-bold tracking-[-0.03em] text-[color:var(--heading)]">
                      {item.degree}
                    </h3>
                    <p className="mt-2 text-lg text-[color:var(--text-primary)]">
                      {item.detail}
                    </p>
                    <div className="mt-5 grid gap-2 font-label text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[color:var(--section-eyebrow)] sm:grid-cols-3">
                      <p>{item.school}</p>
                      <p>{item.period}</p>
                      <p>{item.gpa}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hardware-panel bg-[linear-gradient(180deg,var(--strong-surface-start),var(--strong-surface-end))] p-6 text-[color:var(--strong-text)] sm:p-8">
              <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-[color:var(--strong-text)]">
                Contact
              </h2>

              <div className="mt-8 space-y-4">
                <ContactRow
                  href={publicLinks.email}
                  label="Email"
                  value={contact.email}
                />
                <ContactRow
                  href={publicLinks.phone}
                  label="Phone"
                  value={contact.phone}
                />
                <ContactRow
                  href={publicLinks.linkedin}
                  label="LinkedIn"
                  value="linkedin.com/in/dhruv-mehta2205"
                  external
                />
                <ContactRow
                  href={publicLinks.resume}
                  label="Curriculum Vitae"
                  value="Download PDF CV"
                  external
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
