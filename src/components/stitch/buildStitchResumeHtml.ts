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

function extractHead(html: string) {
  const match = html.match(/<head>([\s\S]*?)<\/head>/i);

  if (!match) {
    throw new Error("Could not extract Stitch head markup.");
  }

  return match[1].trim();
}

function renderDesktopSummarySignals() {
  return summaryGroups[0].items
    .map(
      (signal, index) => `
        <li class="flex gap-6">
          <span class="text-primary font-serif italic text-2xl">${String(index + 1).padStart(2, "0")}</span>
          <span>${escapeHtml(signal)}</span>
        </li>`,
    )
    .join("");
}

function renderDesktopExperience() {
  return experienceItems
    .map(
      (item) => `
        <div class="grid md:grid-cols-12 gap-8">
          <div class="md:col-span-4">
            <h3 class="headline-display text-2xl font-bold">${escapeHtml(item.company)}</h3>
            <p class="label-caps text-on-surface-variant mt-2">${escapeHtml(item.title)}</p>
            <p class="text-on-surface-variant italic mt-4">${escapeHtml(item.period)}</p>
          </div>
          <div class="md:col-span-8 border-l border-outline-variant/30 pl-12">
            <ul class="space-y-6 text-on-surface-variant leading-relaxed list-disc marker:text-primary">
              ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
          </div>
        </div>`,
    )
    .join("");
}

function renderDesktopExpertise() {
  return expertiseGroups
    .map(
      (group) => `
        <div>
          <h4 class="label-caps border-b border-primary pb-4 mb-6 text-primary">${escapeHtml(group.title)}</h4>
          <ul class="space-y-3 text-on-surface">
            ${group.items.map((item) => `<li class="font-medium">${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>`,
    )
    .join("");
}

function renderDesktopProjects() {
  return projects
    .map(
      (project) => `
        <div class="bg-surface-container-high p-12 flex flex-col justify-between">
          <div>
            <span class="label-caps text-primary block mb-4">${escapeHtml(project.period)}</span>
            <h3 class="headline-display text-3xl mb-6">${escapeHtml(project.title)}</h3>
            <ul class="space-y-4 text-on-surface-variant leading-relaxed text-lg">
              ${project.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
          </div>
          <div class="bg-surface-bright/50 p-6 border-l border-primary mt-10">
            <span class="label-caps text-primary block mb-2">Verified metric</span>
            <div class="headline-display text-4xl font-bold">${escapeHtml(project.metric)}</div>
            <p class="text-sm text-on-surface-variant mt-2">${escapeHtml(project.metricLabel)}</p>
          </div>
        </div>`,
    )
    .join("");
}

function renderDesktopEducation() {
  return education
    .map(
      (item, index) => `
        <div class="flex flex-col md:flex-row justify-between items-start gap-6 ${index === 0 ? "" : "pt-8 border-t border-outline-variant/10"}">
          <div>
            <h3 class="headline-display text-3xl">${escapeHtml(item.degree)}</h3>
            <p class="text-on-surface-variant mt-2 italic">${escapeHtml(item.detail)}</p>
            <p class="label-caps text-on-surface-variant mt-4">${escapeHtml(item.school)}</p>
          </div>
          <div class="text-left md:text-right">
            <p class="font-bold">${escapeHtml(item.gpa)}</p>
            <p class="label-caps text-on-surface-variant mt-2">${escapeHtml(item.period)}</p>
          </div>
        </div>`,
    )
    .join("");
}

function renderMobileSummarySignals() {
  return summaryGroups[0].items
    .map(
      (signal, index) => `
        <li class="flex gap-4">
          <span class="text-primary font-headline italic text-xl">${String(index + 1).padStart(2, "0")}</span>
          <p class="font-body text-on-surface-variant leading-relaxed">${escapeHtml(signal)}</p>
        </li>`,
    )
    .join("");
}

function renderMobileCoreFocus() {
  return summaryGroups[1].items
    .map(
      (item) => `<span class="text-xs bg-surface-container-highest px-2 py-1">${escapeHtml(item)}</span>`,
    )
    .join("");
}

function renderMobileExperience() {
  return experienceItems
    .map(
      (item) => `
        <div class="relative">
          <div class="mb-4">
            <span class="font-label text-xs text-on-surface-variant uppercase tracking-widest block mb-2">${escapeHtml(item.period)}</span>
            <h3 class="font-headline text-3xl text-on-surface mb-1">${escapeHtml(item.company)}</h3>
            <p class="font-body text-primary text-sm font-medium">${escapeHtml(item.title)}</p>
          </div>
          <div class="mt-8 max-w-2xl">
            <ul class="space-y-4 font-body text-on-surface-variant text-sm list-none border-l border-outline-variant/20 pl-6">
              ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
          </div>
        </div>`,
    )
    .join("");
}

function renderMobileExpertise() {
  return expertiseGroups
    .map(
      (group) => `
        <div class="bg-surface-container-lowest p-8 border-b-4 border-primary">
          <h3 class="font-headline text-xl mb-4 italic">${escapeHtml(group.title)}</h3>
          <ul class="space-y-3 font-body text-sm text-on-surface-variant leading-relaxed">
            ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>`,
    )
    .join("");
}

function renderMobileProjects() {
  return projects
    .map(
      (project) => `
        <div class="bg-surface-container-lowest p-10 flex flex-col justify-between">
          <div>
            <span class="font-label text-[10px] text-primary uppercase tracking-widest mb-4 block">${escapeHtml(project.period)}</span>
            <h3 class="font-headline text-2xl mb-6">${escapeHtml(project.title)}</h3>
            <ul class="space-y-4 font-body text-sm text-on-surface-variant leading-relaxed">
              ${project.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
          </div>
          <div class="pt-8 border-t border-outline-variant/20 flex items-baseline gap-2 mt-8">
            <span class="font-headline text-4xl text-primary">${escapeHtml(project.metric)}</span>
            <span class="font-label text-xs uppercase text-on-surface-variant">${escapeHtml(project.metricLabel)}</span>
          </div>
        </div>`,
    )
    .join("");
}

export function buildDesktopHtml(sourceHtml: string) {
  const head = extractHead(sourceHtml);

  return `<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
  <head>
    ${head}
  </head>
  <body class="selection:bg-primary-container selection:text-on-primary-container">
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#fffcf7] shadow-[0_12px_40px_rgba(56,56,49,0.05)] transition-all duration-300">
      <nav class="flex justify-between items-center w-full px-6 md:px-20 py-8 max-w-[1440px] mx-auto">
        <div class="text-2xl font-serif italic text-[#383831] tracking-tight">Dhruv Mehta</div>
        <div class="hidden md:flex items-center gap-10">
          <a class="text-[#65655c] text-[13px] uppercase tracking-[0.05em] hover:text-[#383831] transition-colors duration-300" href="#experience">Experience</a>
          <a class="text-[#65655c] text-[13px] uppercase tracking-[0.05em] hover:text-[#383831] transition-colors duration-300" href="#expertise">Expertise</a>
          <a class="text-[#65655c] text-[13px] uppercase tracking-[0.05em] hover:text-[#383831] transition-colors duration-300" href="#projects">Projects</a>
          <a class="text-[#65655c] text-[13px] uppercase tracking-[0.05em] hover:text-[#383831] transition-colors duration-300" href="#education">Education</a>
          <a class="text-[#65655c] text-[13px] uppercase tracking-[0.05em] hover:text-[#383831] transition-colors duration-300" href="#contact">Contact</a>
        </div>
        <a class="bg-primary text-on-primary px-8 py-3 text-[13px] uppercase tracking-[0.05em] hover:opacity-90 transition-opacity" href="${contact.resumeHref}">View CV</a>
      </nav>
    </header>
    <main class="pt-32">
      <section class="max-w-[1440px] mx-auto px-6 md:px-20 py-24 border-b border-outline-variant/15">
        <div class="grid md:grid-cols-12 gap-12 items-start">
          <div class="md:col-span-8">
            <span class="label-caps text-on-surface-variant block mb-6">Resume microsite</span>
            <h1 class="headline-display text-7xl md:text-8xl font-light leading-[1.1] mb-12 tracking-tight">Dhruv Mehta</h1>
            <p class="headline-display text-3xl italic text-on-surface-variant leading-relaxed max-w-4xl">${escapeHtml(roleFraming)}</p>
          </div>
          <div class="md:col-span-4 pt-4 space-y-6">
            <div class="bg-surface-container-low p-8 border-l-4 border-primary">
              <p class="text-on-surface leading-relaxed text-lg">${escapeHtml(resumeIntro)}</p>
            </div>
            <div class="space-y-4">
              <a class="block bg-primary text-on-primary px-6 py-4 text-center text-sm uppercase tracking-[0.08em] hover:opacity-90 transition-opacity" href="${contact.resumeHref}">View CV</a>
              <a class="block border border-outline-variant/30 px-6 py-4 text-center text-sm uppercase tracking-[0.08em] hover:bg-surface-container-low transition-colors" href="${contact.linkedin}">LinkedIn</a>
              <a class="block border border-outline-variant/30 px-6 py-4 text-center text-sm uppercase tracking-[0.08em] hover:bg-surface-container-low transition-colors" href="mailto:${contact.email}">Email</a>
              <a class="block border border-outline-variant/30 px-6 py-4 text-center text-sm uppercase tracking-[0.08em] hover:bg-surface-container-low transition-colors" href="tel:+971507031775">${escapeHtml(contact.phone)}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1440px] mx-auto px-6 md:px-20 py-32 bg-surface-container-low">
        <div class="grid md:grid-cols-12 gap-16">
          <div class="md:col-span-4">
            <h2 class="headline-display text-4xl mb-8">Professional Summary</h2>
            <div class="space-y-4">
              <div class="label-caps text-primary border-b border-primary/20 pb-2 inline-block">Core focus</div>
              <ul class="space-y-3 font-medium">
                ${summaryGroups[1].items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="md:col-span-8">
            <ul class="space-y-8 text-xl leading-relaxed text-on-surface-variant">
              ${renderDesktopSummarySignals()}
            </ul>
          </div>
        </div>
      </section>

      <section class="max-w-[1440px] mx-auto px-6 md:px-20 py-32" id="experience">
        <span class="label-caps text-on-surface-variant block mb-12">Professional Experience</span>
        <div class="space-y-24">
          ${renderDesktopExperience()}
        </div>
      </section>

      <section class="bg-surface-container py-32" id="expertise">
        <div class="max-w-[1440px] mx-auto px-6 md:px-20">
          <span class="label-caps text-on-surface-variant block mb-12">Expertise &amp; Technical Toolkit</span>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            ${renderDesktopExpertise()}
          </div>
        </div>
      </section>

      <section class="max-w-[1440px] mx-auto px-6 md:px-20 py-32" id="projects">
        <span class="label-caps text-on-surface-variant block mb-12">Selected Projects</span>
        <div class="grid md:grid-cols-2 gap-12">
          ${renderDesktopProjects()}
        </div>
      </section>

      <section class="bg-[#fcf9f3] py-32 border-t border-outline-variant/15" id="education">
        <div class="max-w-[1440px] mx-auto px-6 md:px-20">
          <div class="grid md:grid-cols-12 gap-16 items-start">
            <div class="md:col-span-7">
              <span class="label-caps text-on-surface-variant block mb-12">Academic Background</span>
              <div class="space-y-8">
                ${renderDesktopEducation()}
              </div>
            </div>
            <div class="md:col-span-5" id="contact">
              <span class="label-caps text-on-surface-variant block mb-12">Contact</span>
              <div class="space-y-6 bg-surface-container-lowest p-10 border border-outline-variant/10">
                <p class="headline-display text-4xl">Let's Connect</p>
                <p class="text-on-surface-variant leading-relaxed">Available for professional conversations around business continuity, information security, business analysis, and analytical roles with technical depth.</p>
                <a class="block text-lg underline underline-offset-8 decoration-outline-variant hover:decoration-primary transition-colors" href="mailto:${contact.email}">${escapeHtml(contact.email)}</a>
                <a class="block text-lg underline underline-offset-8 decoration-outline-variant hover:decoration-primary transition-colors" href="tel:+971507031775">${escapeHtml(contact.phone)}</a>
                <a class="block text-lg underline underline-offset-8 decoration-outline-variant hover:decoration-primary transition-colors" href="${contact.linkedin}">${escapeHtml(contact.linkedin)}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#fcf9f3] w-full px-6 md:px-20 py-12 border-t border-[#babab0]/15">
      <div class="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-lg font-serif text-[#383831]">Dhruv Mehta</div>
        <div class="text-[12px] tracking-wide text-[#5d5e61]">${escapeHtml(roleFraming)}</div>
        <div class="flex gap-8">
          <a class="text-[#65655c] hover:text-[#383831] hover:underline transition-all" href="${contact.linkedin}">LinkedIn</a>
          <a class="text-[#65655c] hover:text-[#383831] hover:underline transition-all" href="mailto:${contact.email}">Email</a>
        </div>
      </div>
    </footer>
  </body>
</html>`;
}

export function buildMobileHtml(sourceHtml: string) {
  const head = extractHead(sourceHtml);

  return `<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
  <head>
    ${head}
  </head>
  <body class="font-body selection:bg-primary-container selection:text-on-primary-container">
    <header class="fixed top-0 w-full flex justify-between items-center px-6 py-4 z-50 bg-[#f9f9f9]/80 backdrop-blur-md shadow-[0px_10px_30px_rgba(45,52,53,0.04)]">
      <span class="font-['Newsreader'] text-xl font-medium tracking-tight text-[#2d3435]">Dhruv Mehta</span>
      <a class="text-[#5a6061] font-['Inter'] text-sm tracking-wide hover:text-[#2d3435] transition-colors duration-200" href="${contact.resumeHref}">View CV</a>
    </header>
    <main class="pt-24 pb-12">
      <section class="px-6 mb-20">
        <div class="editorial-grid">
          <div class="editorial-content">
            <h1 class="font-headline text-5xl md:text-7xl mb-6 leading-tight font-light italic">Dhruv Mehta</h1>
            <div class="flex flex-wrap gap-2 mb-8">
              ${renderMobileCoreFocus()}
            </div>
            <p class="font-headline text-2xl md:text-3xl text-on-surface-variant leading-relaxed mb-6 max-w-2xl">${escapeHtml(resumeIntro)}</p>
            <div class="flex flex-col gap-4">
              <a class="bg-primary text-on-primary px-8 py-4 text-center font-label text-sm uppercase tracking-widest hover:bg-primary-dim transition-all active:scale-95" href="${contact.resumeHref}">View CV</a>
              <div class="grid grid-cols-2 gap-4">
                <a class="border border-outline-variant/30 px-6 py-4 text-center font-label text-sm uppercase tracking-widest hover:bg-surface-container-lowest transition-all" href="${contact.linkedin}">LinkedIn</a>
                <a class="border border-outline-variant/30 px-6 py-4 text-center font-label text-sm uppercase tracking-widest hover:bg-surface-container-lowest transition-all" href="mailto:${contact.email}">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-surface-container-low py-20 px-6">
        <div class="editorial-grid">
          <div class="editorial-content">
            <h2 class="font-headline text-sm uppercase tracking-[0.2em] text-primary mb-12 border-l-2 border-primary pl-4">Professional Summary &amp; Core Focus</h2>
            <div class="space-y-12">
              <div class="bg-surface-container-lowest p-8 shadow-sm">
                <ul class="space-y-6">
                  ${renderMobileSummarySignals()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 px-6 bg-surface-bright" id="experience">
        <div class="editorial-grid">
          <div class="editorial-content">
            <h2 class="font-headline text-sm uppercase tracking-[0.2em] text-primary mb-16 border-l-2 border-primary pl-4">Professional History</h2>
            <div class="space-y-24">
              ${renderMobileExperience()}
            </div>
          </div>
        </div>
      </section>

      <section class="bg-surface-container-low py-24 px-6" id="expertise">
        <div class="editorial-grid">
          <div class="editorial-content">
            <h2 class="font-headline text-sm uppercase tracking-[0.2em] text-primary mb-16 border-l-2 border-primary pl-4">Expertise &amp; Toolkit</h2>
            <div class="space-y-8">
              ${renderMobileExpertise()}
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 px-6 bg-surface-bright" id="projects">
        <div class="editorial-grid">
          <div class="editorial-content">
            <h2 class="font-headline text-sm uppercase tracking-[0.2em] text-primary mb-16 border-l-2 border-primary pl-4">Selected Projects</h2>
            <div class="grid grid-cols-1 gap-6">
              ${renderMobileProjects()}
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 px-6 bg-surface-container-low" id="education">
        <div class="editorial-grid">
          <div class="editorial-content">
            <h2 class="font-headline text-sm uppercase tracking-[0.2em] text-primary mb-12 border-l-2 border-primary pl-4">Education &amp; Contact</h2>
            <div class="space-y-8">
              ${education
                .map(
                  (item) => `
                    <div class="bg-surface-container-lowest p-8 border border-outline-variant/10">
                      <h3 class="font-headline text-2xl mb-2">${escapeHtml(item.degree)}</h3>
                      <p class="font-body text-primary text-sm font-medium mb-4">${escapeHtml(item.detail)}</p>
                      <div class="space-y-2 font-body text-sm text-on-surface-variant">
                        <p>${escapeHtml(item.school)}</p>
                        <p>${escapeHtml(item.period)}</p>
                        <p>${escapeHtml(item.gpa)}</p>
                      </div>
                    </div>`,
                )
                .join("")}
              <div class="bg-surface-container-lowest p-8 border border-outline-variant/10" id="contact">
                <h3 class="font-headline text-3xl mb-6">Let's Connect</h3>
                <p class="font-body text-on-surface-variant mb-8">Available for professional conversations around business continuity, information security, business analysis, and analytical work with technical depth.</p>
                <div class="space-y-4">
                  <a class="block font-body underline underline-offset-8 decoration-outline-variant hover:decoration-primary transition-colors" href="mailto:${contact.email}">${escapeHtml(contact.email)}</a>
                  <a class="block font-body underline underline-offset-8 decoration-outline-variant hover:decoration-primary transition-colors" href="tel:+971507031775">${escapeHtml(contact.phone)}</a>
                  <a class="block font-body underline underline-offset-8 decoration-outline-variant hover:decoration-primary transition-colors" href="${contact.linkedin}">${escapeHtml(contact.linkedin)}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="w-full py-12 px-6 flex flex-col items-center gap-4 bg-[#f9f9f9] border-t border-[#adb3b4]/15">
      <p class="font-['Inter'] text-xs uppercase tracking-[0.05em] text-[#5a6061]">Dhruv Mehta</p>
      <div class="flex gap-8">
        <a class="font-['Inter'] text-xs uppercase tracking-[0.05em] text-[#5a6061] hover:text-[#2d3435] underline decoration-1 underline-offset-4 transition-all duration-300" href="${contact.linkedin}">LinkedIn</a>
        <a class="font-['Inter'] text-xs uppercase tracking-[0.05em] text-[#5a6061] hover:text-[#2d3435] underline decoration-1 underline-offset-4 transition-all duration-300" href="mailto:${contact.email}">Email</a>
      </div>
    </footer>
  </body>
</html>`;
}
