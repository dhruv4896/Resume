import { contact, education } from "../../content/profile";
import { publicLinks } from "../../content/site";
import { SectionHeading } from "../ui/SectionHeading";

type ContactCardProps = {
  href: string;
  label: string;
  value: string;
  external?: boolean;
};

function ContactCard({
  href,
  label,
  value,
  external = false,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="rounded-[1.5rem] border border-[color:var(--strong-border)] bg-[color:var(--strong-card)] p-5 transition-transform duration-200 hover:-translate-y-1 motion-reduce:transition-none"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--strong-accent)]">
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
    <section
      id="contact"
      className="overflow-hidden bg-[linear-gradient(135deg,var(--strong-surface-start),var(--strong-surface-end))] py-24 text-[color:var(--strong-text)] sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.9fr)] lg:gap-20">
          <div id="education">
            <SectionHeading
              eyebrow="Academic Foundation"
              title="Education"
              inverse
            />

            <div className="mt-12 space-y-8">
              {education.map((item) => (
                <article
                  key={`${item.school}-${item.period}`}
                  className="rounded-[1.75rem] border border-[color:var(--strong-border)] bg-[color:var(--strong-card)] p-6 sm:p-8"
                >
                  <h3 className="font-display text-3xl text-[color:var(--strong-text)]">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-lg italic text-[color:var(--strong-muted)]">
                    {item.detail}
                  </p>
                  <div className="mt-5 space-y-2 text-sm uppercase tracking-[0.18em] text-[color:var(--strong-subtle)]">
                    <p>{item.school}</p>
                    <p>{item.period}</p>
                    <p>{item.gpa}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Professional Contact"
              title="Let's Connect"
              inverse
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <ContactCard
                href={publicLinks.email}
                label="Email"
                value={contact.email}
              />
              <ContactCard
                href={publicLinks.phone}
                label="Phone"
                value={contact.phone}
              />
              <ContactCard
                href={publicLinks.linkedin}
                label="LinkedIn"
                value="linkedin.com/in/dhruv-mehta2205"
                external
              />
              <ContactCard
                href={publicLinks.resume}
                label="Curriculum Vitae"
                value="Open the PDF resume"
                external
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
