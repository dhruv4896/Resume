import { contact } from "./profile";

export type SectionId =
  | "top"
  | "summary"
  | "experience"
  | "expertise"
  | "projects"
  | "contact";

export type SectionLink = {
  code: string;
  id: SectionId;
  label: string;
};

export const sectionLinks: SectionLink[] = [
  { id: "top", label: "Overview", code: "01" },
  { id: "summary", label: "Summary", code: "02" },
  { id: "experience", label: "Experience", code: "03" },
  { id: "expertise", label: "Expertise", code: "04" },
  { id: "projects", label: "Projects", code: "05" },
  { id: "contact", label: "Contact", code: "06" },
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
