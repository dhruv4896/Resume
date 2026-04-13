import { contact } from "./profile";

export type SectionId =
  | "summary"
  | "experience"
  | "expertise"
  | "projects"
  | "contact";

export type SectionLink = {
  id: SectionId;
  label: string;
};

export const sectionLinks: SectionLink[] = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function buildPhoneHref(phone: string) {
  return `tel:${phone.replaceAll(/[^+\d]/g, "")}`;
}

export function buildResumeHref(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, "");

  return `${normalizedBase}${normalizedPath}`;
}

export const publicLinks = {
  email: `mailto:${contact.email}`,
  linkedin: contact.linkedin,
  phone: buildPhoneHref(contact.phone),
  resume: buildResumeHref(contact.resumeHref),
};
