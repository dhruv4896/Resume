import {
  contact,
  education,
  expertiseGroups,
  experienceItems,
  projects,
  resumeIntro,
  roleFraming,
  summaryGroups,
} from "../../content/profile";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function phoneHref(phone: string) {
  return `tel:${phone.replaceAll(/[^+\d]/g, "")}`;
}

function resumeHref() {
  if (typeof window === "undefined") {
    return contact.resumeHref;
  }

  return new URL(
    contact.resumeHref,
    `${window.location.origin}${import.meta.env.BASE_URL}`,
  ).toString();
}

function openInNewTab(anchor: HTMLAnchorElement) {
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
}

function setInnerHtml(element: Element | null | undefined, html: string) {
  if (element instanceof HTMLElement) {
    element.innerHTML = html;
  }
}

function setText(element: Element | null | undefined, text: string) {
  if (element) {
    element.textContent = text;
  }
}

function renderSummaryCards() {
  return summaryGroups[0].items
    .map(
      (item) => `
        <div class="p-8 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
          <p class="text-on-surface-variant leading-relaxed">${escapeHtml(item)}</p>
        </div>`,
    )
    .join("");
}

function renderFocusChips() {
  return summaryGroups[1].items
    .map(
      (item) => `
        <span class="inline-flex items-center px-3 py-2 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-[0.16em]">
          ${escapeHtml(item)}
        </span>`,
    )
    .join("");
}

function renderExperienceEntries() {
  return experienceItems
    .map(
      (item, index) => `
        <div class="relative pl-12 border-l border-outline-variant/30">
          <div class="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-primary" : "bg-primary/30"}"></div>
          <div class="flex flex-col md:flex-row md:justify-between mb-6 gap-3">
            <div>
              <h4 class="text-2xl font-serif text-primary">${escapeHtml(item.company)}</h4>
              <p class="text-lg text-secondary">${escapeHtml(item.title)}</p>
            </div>
            <p class="text-sm font-label text-on-surface-variant mt-2 md:mt-0">${escapeHtml(item.period)}</p>
          </div>
          <ul class="space-y-4 text-on-surface-variant leading-relaxed list-disc ml-4">
            ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
          </ul>
        </div>`,
    )
    .join("");
}

function renderExpertiseGroups() {
  return expertiseGroups
    .map(
      (group) => `
        <div>
          <div class="flex items-center mb-6">
            <span class="material-symbols-outlined text-primary mr-3">overview</span>
            <h4 class="font-serif text-xl">${escapeHtml(group.title)}</h4>
          </div>
          <ul class="space-y-3">
            ${group.items
              .map(
                (item) => `
                  <li class="text-on-surface-variant flex items-start bg-surface-container-lowest p-3 rounded-md leading-relaxed">
                    ${escapeHtml(item)}
                  </li>`,
              )
              .join("")}
          </ul>
        </div>`,
    )
    .join("");
}

function renderProjectCards() {
  return projects
    .map(
      (project) => `
        <div class="p-10 bg-surface-container-low rounded-lg flex flex-col gap-8">
          <div class="flex flex-wrap items-center gap-3">
            <span class="px-2 py-1 bg-primary text-[10px] uppercase tracking-wider text-on-primary font-bold">${escapeHtml(project.period)}</span>
            <span class="px-2 py-1 bg-tertiary-fixed/60 text-[10px] uppercase tracking-wider text-on-tertiary-fixed font-bold">${escapeHtml(project.metric)}</span>
          </div>
          <div>
            <h4 class="text-3xl font-serif text-primary mb-6">${escapeHtml(project.title)}</h4>
            <ul class="space-y-4 text-on-surface-variant leading-relaxed list-disc ml-4">
              ${project.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
          </div>
          <p class="text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">${escapeHtml(project.metricLabel)}</p>
        </div>`,
    )
    .join("");
}

function renderEducationEntries() {
  return education
    .map(
      (item, index) => `
        <div class="flex gap-6 ${index === 0 ? "" : "pt-6 border-t border-white/10"}">
          <div class="flex-shrink-0 h-16 w-16 bg-white/10 rounded-full flex items-center justify-center">
            <span class="material-symbols-outlined text-primary-fixed text-2xl">${index === 0 ? "school" : "architecture"}</span>
          </div>
          <div>
            <h4 class="text-2xl font-serif text-primary-fixed">${escapeHtml(item.degree)}</h4>
            <p class="text-lg opacity-80 italic">${escapeHtml(item.detail)}</p>
            <p class="text-sm font-label mt-2 tracking-wide uppercase">${escapeHtml(item.school)}</p>
            <p class="text-sm opacity-80 mt-3">${escapeHtml(item.period)}</p>
            <p class="text-sm opacity-80">${escapeHtml(item.gpa)}</p>
          </div>
        </div>`,
    )
    .join("");
}

export function buildStitchResumeHtml(sourceHtml: string) {
  const doc = new DOMParser().parseFromString(sourceHtml, "text/html");

  doc.title = "Dhruv Mehta | Resume Microsite";

  const navigation = doc.querySelector("nav");
  if (navigation) {
    setText(navigation.querySelector("div.text-2xl"), "Dhruv Mehta");
    setInnerHtml(
      navigation.querySelector(".hidden.md\\:flex"),
      `
        <a class="text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#summary">Summary</a>
        <a class="text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#experience">Experience</a>
        <a class="text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#projects">Projects</a>
        <a class="text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#toolkit">Toolkit</a>
        <a class="bg-primary text-on-primary px-6 py-2 rounded-md hover:opacity-90 transition-all" href="#contact">Contact</a>`,
    );

    const mobileButton = navigation.querySelector("button.md\\:hidden");
    if (mobileButton) {
      mobileButton.outerHTML = `<a class="md:hidden text-primary text-xs font-bold uppercase tracking-[0.18em]" href="#contact">Contact</a>`;
    }
  }

  const hero = doc.querySelector("header");
  if (hero) {
    setText(
      hero.querySelector("span.inline-block"),
      roleFraming.replaceAll(" / ", " • "),
    );
    setText(hero.querySelector("h1"), "Dhruv Mehta");
    setText(hero.querySelector("p"), resumeIntro);
    setInnerHtml(
      hero.querySelector("div.flex.flex-wrap.gap-4"),
      `
        <a class="inline-flex items-center px-8 py-4 bg-primary text-on-primary rounded-md font-medium group transition-all" href="${resumeHref()}">
          View CV
          <span class="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
        <a class="inline-flex items-center px-8 py-4 border border-outline-variant/30 text-primary rounded-md font-medium hover:bg-surface-container transition-all" href="${contact.linkedin}" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a class="inline-flex items-center px-8 py-4 text-primary font-medium hover:underline" href="mailto:${contact.email}">
          Email
        </a>
        <a class="inline-flex items-center px-8 py-4 text-primary font-medium hover:underline" href="${phoneHref(contact.phone)}">
          ${escapeHtml(contact.phone)}
        </a>`,
    );
  }

  const summarySection = doc.getElementById("summary");
  if (summarySection) {
    setText(summarySection.querySelector("h2"), "Strategic Profile");
    setText(summarySection.querySelector("h3"), "Professional Summary");

    const headingBlock = summarySection.querySelector(".mb-20");
    if (headingBlock) {
      const chipRow = doc.createElement("div");
      chipRow.className = "mt-8 flex flex-wrap gap-3";
      chipRow.innerHTML = renderFocusChips();
      headingBlock.appendChild(chipRow);
    }

    setInnerHtml(summarySection.querySelector(".grid"), renderSummaryCards());
  }

  const experienceSection = doc.getElementById("experience");
  if (experienceSection) {
    setText(experienceSection.querySelector("h2"), "Professional Experience");
    setText(experienceSection.querySelector("h3"), "Experience");
    setInnerHtml(
      experienceSection.querySelector(".lg\\:col-span-8"),
      renderExperienceEntries(),
    );
  }

  const toolkitSection = doc.getElementById("toolkit");
  if (toolkitSection) {
    setText(toolkitSection.querySelector("h2"), "Expertise & Technical Toolkit");
    setText(toolkitSection.querySelector("h3"), "Capabilities");
    setInnerHtml(toolkitSection.querySelector(".grid"), renderExpertiseGroups());
  }

  const projectSection = doc.getElementById("projects");
  if (projectSection) {
    setText(projectSection.querySelector("h2"), "Selected Projects");
    setText(projectSection.querySelector("h3"), "Academic & Technical Work");
    setInnerHtml(projectSection.querySelector(".grid"), renderProjectCards());
  }

  const sections = Array.from(doc.querySelectorAll("section"));
  const educationSection = sections.find((section) =>
    section.textContent?.includes("Academic Foundation"),
  );

  if (educationSection) {
    educationSection.id = "education";
    setText(educationSection.querySelector("h2"), "Education");
    setText(educationSection.querySelector("h3"), "Academic Foundation");
    setInnerHtml(
      educationSection.querySelector(".space-y-12"),
      renderEducationEntries(),
    );

    setInnerHtml(
      educationSection.querySelector(".hidden.lg\\:block"),
      `
        <span class="material-symbols-outlined text-7xl text-primary-fixed mb-6">contacts</span>
        <p class="font-serif italic text-3xl mb-4">Professional Contact</p>
        <div class="space-y-3 text-sm">
          <a class="block underline underline-offset-4" href="mailto:${contact.email}">${escapeHtml(contact.email)}</a>
          <a class="block underline underline-offset-4" href="${phoneHref(contact.phone)}">${escapeHtml(contact.phone)}</a>
          <a class="block underline underline-offset-4" href="${contact.linkedin}" target="_blank" rel="noreferrer">${escapeHtml(contact.linkedin)}</a>
        </div>`,
    );
  }

  const contactSection = doc.getElementById("contact");
  if (contactSection) {
    setText(contactSection.querySelector("h2"), "Contact");
    setText(contactSection.querySelector("h3"), "Let's Connect");
    setInnerHtml(
      contactSection.querySelector(".grid"),
      `
        <a class="p-8 bg-surface-container-low rounded-lg hover:bg-surface-container transition-all" href="mailto:${contact.email}">
          <span class="material-symbols-outlined mb-2 text-primary">alternate_email</span>
          <p class="font-medium text-primary">Email</p>
          <p class="text-sm text-secondary">${escapeHtml(contact.email)}</p>
        </a>
        <a class="p-8 bg-surface-container-low rounded-lg hover:bg-surface-container transition-all" href="${contact.linkedin}" target="_blank" rel="noreferrer">
          <span class="material-symbols-outlined mb-2 text-primary">link</span>
          <p class="font-medium text-primary">LinkedIn</p>
          <p class="text-sm text-secondary">linkedin.com/in/dhruv-mehta2205</p>
        </a>
        <a class="p-8 bg-surface-container-low rounded-lg hover:bg-surface-container transition-all" href="${phoneHref(contact.phone)}">
          <span class="material-symbols-outlined mb-2 text-primary">call</span>
          <p class="font-medium text-primary">Phone</p>
          <p class="text-sm text-secondary">${escapeHtml(contact.phone)}</p>
        </a>
        <a class="p-8 bg-surface-container-low rounded-lg hover:bg-surface-container transition-all" href="${resumeHref()}">
          <span class="material-symbols-outlined mb-2 text-primary">description</span>
          <p class="font-medium text-primary">Curriculum Vitae</p>
          <p class="text-sm text-secondary">Download PDF resume</p>
        </a>`,
    );
  }

  const footer = doc.querySelector("footer");
  if (footer) {
    setText(footer.querySelector(".font-serif"), "Dhruv Mehta");
    setInnerHtml(
      footer.querySelector(".flex.space-x-8"),
      `
        <a class="text-primary-fixed hover:text-white transition-opacity font-label text-sm uppercase tracking-wide" href="${contact.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
        <a class="text-primary-fixed hover:text-white transition-opacity font-label text-sm uppercase tracking-wide" href="mailto:${contact.email}">Email</a>
        <a class="text-primary-fixed hover:text-white transition-opacity font-label text-sm uppercase tracking-wide" href="${phoneHref(contact.phone)}">Phone</a>`,
    );

    const footerCopy = footer.querySelector(".border-t");
    setInnerHtml(
      footerCopy,
      `
        <p>© Dhruv Mehta</p>
        <p class="mt-4 md:mt-0">${escapeHtml(roleFraming)}</p>`,
    );
    footerCopy?.classList.add(
      "pt-8",
      "flex",
      "flex-col",
      "md:flex-row",
      "justify-between",
      "items-center",
      "text-xs",
      "uppercase",
      "tracking-[0.2em]",
      "opacity-60",
    );
  }

  doc.querySelectorAll<HTMLAnchorElement>('a[href="https://linkedin.com"]').forEach(
    (anchor) => {
      anchor.href = contact.linkedin;
      openInNewTab(anchor);
    },
  );

  doc.querySelectorAll<HTMLAnchorElement>('a[href="#"]').forEach((anchor) => {
    const label = anchor.textContent?.trim().toLowerCase() ?? "";
    if (label.includes("linkedin")) {
      anchor.href = contact.linkedin;
      openInNewTab(anchor);
    } else if (label.includes("phone")) {
      anchor.href = phoneHref(contact.phone);
    } else if (label.includes("curriculum") || label.includes("view cv")) {
      anchor.href = resumeHref();
    }
  });

  return `<!DOCTYPE html>\n${doc.documentElement.outerHTML}`;
}
