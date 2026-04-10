export type NavItem = {
  href: string;
  label: string;
};

export type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

export type CapabilityGroup = {
  description: string;
  name: string;
  items: string[];
};

export type ProjectItem = {
  title: string;
  period: string;
  bullets: string[];
  highlight: string;
  accent: "cyan" | "teal";
};

export type EducationItem = {
  institution: string;
  degree: string;
  detail: string;
  period: string;
  gpa: string;
};

export const navItems: NavItem[] = [
  { href: "#about", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#summary", label: "Education + Contact" },
];

export const heroContent = {
  eyebrow: "Business continuity / Information security / Business analysis",
  headline: "Business continuity with technical depth.",
  intro:
    "Business continuity and information security professional with prior business analysis experience and a machine learning background from Georgia Tech. Experience spans banking, healthcare, requirements analysis, testing, SQL-based data work, and applied ML projects.",
  name: "Dhruv Mehta",
  signalNotes: [
    {
      label: "Current focus",
      text: "Continuity governance, stakeholder coordination, risk review, and resilience planning within banking.",
    },
    {
      label: "Technical foundation",
      text: "Machine learning, NLP, SQL-based analysis, UAT planning, and structured delivery across banking and healthcare.",
    },
  ],
};

export const aboutContent = {
  intro:
    "Dhruv Mehta brings together business continuity, information security, business analysis, and machine learning. His background combines risk and impact assessment, continuity planning, governance, stakeholder coordination, requirements gathering, UAT and testing, SQL-based analysis, and applied ML work in both banking and healthcare contexts.",
  title: "A risk-aware operator with analytical breadth.",
  support: [
    "Current work centers on continuity, governance, and risk thinking within banking, while earlier roles and academic projects add strong analytical, technical, and data-oriented depth.",
    "The through-line is disciplined decision-making: understanding impact, translating requirements clearly, testing rigorously, and keeping systems resilient under pressure.",
  ],
};

export const experienceIntro =
  "Current work centers on continuity, governance, and risk thinking within banking, while earlier roles and academic projects add strong analytical, technical, and data-oriented depth.";

export const experienceItems: ExperienceItem[] = [
  {
    company: "First Abu Dhabi Bank (FAB)",
    title: "Information Security - Business Continuity",
    period: "Feb 2021 - Present",
    bullets: [
      "Liaise with stakeholders on system implementation and testing and provide continuity-focused input.",
      "Analyze risks and potential impacts across business units and recommend mitigation measures and strategies.",
      "Develop and update management plans including the Crisis Management Plan and Pandemic Response Plan.",
      "Provide second-line governance to business functions across the bank.",
      "Monitor the bank-wide Business Continuity Program and provide updates to senior management.",
      "Review impact and risk assessments including Business Impact Analysis (BIA), Risk & Control Self-Assessment (RCSA), and Facility Risk Assessment (BCRA).",
    ],
  },
  {
    company: "Delta Dental of California",
    title: "Business Analyst",
    period: "Mar 2016 - Jun 2018",
    bullets: [
      "Served as point of contact with healthcare marketplaces including Covered CA and CMS on data transmission protocols and business requirements.",
      "Gathered requirements from stakeholders and subject matter experts to define scope and application-process requirements.",
      "Organized and led bi-weekly vendor meetings to onboard marketplace customers and document business processes and protocols.",
      "Analyzed user stories for feasibility and coordinated with the project manager and technical lead on business rules.",
      "Performed regression, functional, end-to-end, and UAT testing; created test plans and supported QA execution.",
      "Developed SQL queries including joins and sub-joins to retrieve data across multiple tables.",
    ],
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    name: "Continuity & Governance",
    description:
      "Work centered on risk interpretation, resilience planning, and bank-wide continuity oversight.",
    items: [
      "Business continuity planning",
      "Risk and impact assessment",
      "Governance support",
      "Senior-management reporting",
      "Stakeholder alignment",
    ],
  },
  {
    name: "Analysis & Delivery",
    description:
      "Structured requirements and testing discipline shaped by business analysis work in healthcare systems.",
    items: [
      "Requirements gathering",
      "BRD / FRD / FRS analysis",
      "UAT and test planning",
      "SQL querying and data verification",
      "Cross-functional coordination",
    ],
  },
  {
    name: "Technical Foundation",
    description:
      "Georgia Tech machine learning study and applied projects that deepen technical credibility.",
    items: [
      "Machine learning",
      "Deep learning",
      "NLP and image processing",
      "Data mining and scraping",
      "Python / TensorFlow / PyTorch / Keras",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Facebook Deep Learning Project",
    period: "Aug 2020 - Dec 2020",
    highlight: "Reduced training time and storage requirements by 50%.",
    accent: "cyan",
    bullets: [
      "Explored an alternative to pre-training state-of-the-art NLP applications using Transformers and Transformer Adapters.",
      "Applied the work to classification tasks in computer science and biomedicine.",
      "Reduced training time and storage requirements by 50%.",
    ],
  },
  {
    title: "Machine Learning Financial Analysis",
    period: "Aug 2019 - Dec 2019",
    highlight: "Reported average accuracy of 85% for forecasts up to one week ahead.",
    accent: "teal",
    bullets: [
      "Built a stock-market predictor for indices including S&P 500, NASDAQ, and NIFTY.",
      "Used Random Forest, XGBoost, Support Vector Machines, and Decision Tree Regression with technical and fundamental indicators.",
      "Reported average accuracy of 85% for forecasts up to one week ahead.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Georgia Institute of Technology",
    degree: "M.S. in Computer Science",
    detail: "Specialization in Machine Learning",
    period: "2018 - 2020",
    gpa: "GPA 3.8/4.0",
  },
  {
    institution: "Georgia Institute of Technology",
    degree: "B.S. in Mechanical Engineering",
    detail: "Minor in Computer Science",
    period: "2011 - 2015",
    gpa: "GPA 3.5/4.0",
  },
];

export const toolGroups = [
  {
    label: "Languages & Data",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "R",
      "Java",
      "C++",
      "JavaScript",
      "MySQL",
      "Oracle",
      "SQL Server",
    ],
  },
  {
    label: "ML & Engineering",
    items: ["PyTorch", "Keras", "TensorFlow", "GitHub", "Docker"],
  },
  {
    label: "Workflow & Delivery",
    items: [
      "JIRA",
      "Agile Scrum",
      "RUP",
      "Waterfall",
      "Eclipse",
      "NetBeans",
      "IntelliJ",
      "MS Office",
    ],
  },
];

export const contact = {
  email: "dhruv.mehta2205@gmail.com",
  linkedin: "https://linkedin.com/in/dhruv-mehta2205",
  phone: "+971 50 7031775",
  note:
    "Open to conversations around continuity strategy, risk-aware delivery, and analytical roles that benefit from structured technical depth.",
};
