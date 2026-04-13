export type SummaryGroup = {
  items: string[];
  title: string;
};

export type ExperienceItem = {
  bullets: string[];
  company: string;
  period: string;
  title: string;
};

export type ExpertiseGroup = {
  items: string[];
  title: string;
};

export type ProjectItem = {
  bullets: string[];
  metric: string;
  metricLabel: string;
  period: string;
  title: string;
};

export type EducationItem = {
  degree: string;
  detail: string;
  gpa: string;
  period: string;
  school: string;
};

export type ContactDetails = {
  email: string;
  linkedin: string;
  phone: string;
  resumeHref: string;
};

export const resumeIntro =
  "Business continuity and information security professional with prior business analysis experience and a Master's in Computer Science (Machine Learning) from Georgia Tech. Background spans banking, healthcare, software delivery, requirements gathering, testing, SQL-based data work, and applied machine learning projects.";

export const roleFraming =
  "Business Continuity / Information Security / Business Analysis / Machine Learning";

export const summaryGroups: SummaryGroup[] = [
  {
    title: "Professional Summary",
    items: [
      "Highly analytical individual with strong programming and communication skills.",
      "Skilled in Data Analytics, Machine Learning, Deep Learning, and Business Analysis.",
      "Two years of professional experience in Business Analysis.",
      "One and a half years of professional experience in Banking and Security domain.",
      "Experience in working across the full stack of software development.",
      "Strong analytical skills coupled with problem-solving in deadline-driven projects.",
    ],
  },
  {
    title: "Core Focus",
    items: [
      "Business Continuity",
      "Information Security Governance",
      "Risk & Impact Assessment",
      "Requirements & UAT",
      "SQL & Data Analysis",
      "Machine Learning / NLP",
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: "First Abu Dhabi Bank (FAB)",
    title: "Information Security - Business Continuity",
    period: "Feb 2021 - Present",
    bullets: [
      "Liaise with various stakeholders on system implementation and testing and provide inputs from continuity perspective.",
      "Analyze the risks and potential impacts to various Business Units and recommend corrective measures and strategies to mitigate or prevent continuity risks.",
      "Development and update of bank-wide management-level plans like Crisis Management Plan and Pandemic Response Plan.",
      "Advise and provide governance from 2nd Line perspective to various Business functions across the bank.",
      "Monitor the bank-wide Business Continuity Program and provide regular updates to senior management.",
      "Review and counsel on impact and risk assessments like Business Impact Analysis (BIA), Risk & Control Self-Assessment (RCSA), and Facility Risk Assessment (BCRA).",
    ],
  },
  {
    company: "Delta Dental of California, San Francisco, CA",
    title: "Business Analyst",
    period: "Mar 2016 - Jun 2018",
    bullets: [
      "Be the point of contact with healthcare marketplaces including Covered CA and CMS to decide on data transmission protocols and convey business requirements to appropriate resources.",
      "Gather requirements from stakeholders and subject matter experts to define application-process scope and requirements.",
      "Organize and lead bi-weekly vendor meetings to onboard customers of a health-insurance marketplace and document business processes and protocols.",
      "Analyze feasibility of desired functionality on user stories and determine associated business rules by coordinating with the project manager and technical lead.",
      "Interact with stakeholders, subject matter experts, developers, business analysts, managers, and business users to understand existing business systems and processes.",
      "Perform Regression Testing, Functional Testing, End-to-End testing, and UAT.",
      "Analyze existing systems to identify and create basic to moderately complex test plans.",
      "Develop SQL queries including joins and sub-joins to fetch data from multiple tables.",
      "Assist QA team in the preparation of test data, execution of test plans, and on-time completion of tasks.",
    ],
  },
];

export const expertiseGroups: ExpertiseGroup[] = [
  {
    title: "Machine Learning & Data",
    items: [
      "Ability to develop and deploy machine learning models for data analysis and classification tasks.",
      "Strong background in image and natural language processing techniques using Keras, TensorFlow, and PyTorch.",
      "Skilled in data mining and scraping including assessing data quality and cleaning irrelevant data.",
      "Excellent working knowledge of machine learning algorithms involving clustering, reinforcement learning, supervised and unsupervised learning.",
    ],
  },
  {
    title: "Analysis & QA",
    items: [
      "Proficiency in creating Test Plans, Test Strategies, Test Scenarios, and Test Cases.",
      "Ability to review and analyze BRD, FRD/FRS and develop appropriate test cases.",
      "Data manipulation and extraction using SQL and data visualization using Tableau, MS Visio, and D3 (Javascript).",
      "Active involvement in data verification on different databases.",
      "Act as a liaison between stakeholders, business users, and technical teams to clarify requirements.",
      "Involved in Test Planning, Test Cases, Issue Resolution, and Report Generation.",
    ],
  },
  {
    title: "Technical Toolkit",
    items: [
      "Software Development Methods: RUP, Agile Scrum, Waterfall",
      "Coding Languages: Python (Pandas, NumPy), PyTorch, Keras, TensorFlow, R, Java, C++, Javascript",
      "Database Management: MySQL, Oracle 8.x/9.x, SQL Server",
      "Tools: Eclipse, NetBeans, IntelliJ, Github, Docker",
      "Project Management: MS Office, JIRA Software",
    ],
  },
  {
    title: "Domains & Strengths",
    items: [
      "Domain Expertise: Data Science, Machine Learning, Deep Learning, Banking, Healthcare",
      "Selected Strengths: Stakeholder Liaison, Continuity Planning, Risk Assessment, Requirements Analysis",
      "Selected Strengths: Governance Support, UAT & QA, SQL Querying, Documentation",
      "Support full-stack software development activities across analysis, testing, and delivery.",
      "Excellent working knowledge of methodologies like RUP, Agile Scrum, and Waterfall.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Facebook Deep Learning Project",
    period: "Aug 2020 - Dec 2020",
    bullets: [
      "Goal of the project was to find an alternative to pre-training state-of-the-art NLP applications using Transformers and Transformer Adapters.",
      "Works on classification tasks in the field of Computer Science and Biomedicine.",
      "Reduces training time and storage requirements by 50%.",
    ],
    metric: "50%",
    metricLabel: "training time and storage reduction",
  },
  {
    title: "Machine Learning Financial Analysis",
    period: "Aug 2019 - Dec 2019",
    bullets: [
      "Created a stock-market predictor for indices like S&P 500, NASDAQ, and NIFTY.",
      "Uses Random Forests, XGBoost, Support-Vector Machines, and Decision Tree Regression combined with technical and fundamental indicators.",
      "Predicts future index prices for up to a week with on-average accuracy of 85%.",
    ],
    metric: "85%",
    metricLabel: "forecast accuracy up to one week ahead",
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.S. in Computer Science",
    detail: "Specialization in Machine Learning",
    school: "Georgia Tech, Atlanta, GA",
    period: "Fall 2018 - Fall 2020",
    gpa: "GPA 3.8/4.0",
  },
  {
    degree: "B.S. in Mechanical Engineering",
    detail: "Minor in Computer Science",
    school: "Georgia Tech, Atlanta, GA",
    period: "Fall 2011 - Fall 2015",
    gpa: "GPA 3.5/4.0",
  },
];

export const contact: ContactDetails = {
  email: "dhruv.mehta2205@gmail.com",
  linkedin: "https://linkedin.com/in/dhruv-mehta2205",
  phone: "+971 50 7031775",
  resumeHref: "cv/dhruv-mehta-cv.pdf",
};
