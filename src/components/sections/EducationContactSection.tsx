import { contact, education } from "../../content/profile";
import { publicLinks } from "../../content/site";

type ContactRowProps = {
  external?: boolean;
  href: string;
  label: string;
  value: string;
};

function ContactRow({
  external = false,
  href,
  label,
  value,
}: ContactRowProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="hardware-row contact-row"
    >
      <span className="status-led" data-active />
      <div>
        <p className="contact-row__label">{label}</p>
        <p className="contact-row__value">{value}</p>
      </div>
    </a>
  );
}

export function EducationContactSection() {
  return (
    <section
      id="contact"
      className="section-zone section-zone--contact bg-[color:var(--page-bg)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="xl:pt-6">
            <p className="section-plate">06 // Education &amp; Contact</p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,0.95fr)]">
            <div className="hardware-panel surface-tone--bone p-6 sm:p-8">
              <div className="module-header">
                <span className="status-led" data-active />
                <p className="module-header__label">Education</p>
              </div>

              <div className="mt-6 space-y-5">
                {education.map((item) => (
                  <article
                    key={`${item.school}-${item.period}`}
                    className="hardware-row education-row"
                  >
                    <h3 className="education-row__degree">{item.degree}</h3>
                    <p className="education-row__detail">{item.detail}</p>
                    <div className="education-row__meta">
                      <p>{item.school}</p>
                      <p>{item.period}</p>
                      <p>{item.gpa}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hardware-panel surface-tone--graphite p-6 sm:p-8">
              <div className="module-header">
                <span className="status-led" data-active />
                <p className="module-header__label">Contact</p>
              </div>

              <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-[-0.05em] text-[color:var(--heading)]">
                Contact
              </h2>

              <div className="mt-6 space-y-4">
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
