/**
 * ============================================================
 * PROFESSIONAL EXPERIENCE
 * ============================================================
 *
 * This file contains the complete professional timeline.
 *
 * IMPORTANT:
 * - Keep experience entries separate from UI/design code.
 * - The website will automatically render this data.
 * - To add a new role, add another object to the `experience`
 *   array.
 * - To update an existing role, change its data here.
 *
 * DISPLAY ORDER:
 * The current Tawuniya engagement is intentionally first.
 * Historical roles follow afterward.
 * ============================================================
 */

export type ExperienceType =
  | "current"
  | "client-engagement"
  | "previous"
  | "career-start";

export type Experience = {
  id: string;

  company: string;
  companyType?: string;

  role: string;

  startDate: string;
  endDate: string;

  location?: string;

  type: ExperienceType;

  client?: string;

  description: string;

  responsibilities: string[];

  technologies: string[];

  highlights: string[];

  /**
   * Used by the UI to visually distinguish current
   * employment from historical experience.
   */
  current: boolean;

  /**
   * Optional logo identifier.
   *
   * The visual layer will decide how this is rendered.
   */
  logo: string;
};

export const experience: Experience[] = [
  /*
   * ==========================================================
   * 01 — CURRENT ROLE
   * ==========================================================
   *
   * Tawuniya must appear first.
   */

  {
    id: "tawuniya-teejan-al-khaleej",

    company: "Tawuniya Insurance",

    companyType: "Insurance & Financial Services",

    role: "Senior RPA Consultant",

    startDate: "July 2026",

    endDate: "Present",

    location: "Saudi Arabia",

    type: "current",

    client: "Tawuniya Insurance",

    description:
      "Currently working as a Senior RPA Consultant within Tawuniya's technology ecosystem through its technology subsidiary, Teejan Al Khaleej (Muroon), focusing on enterprise automation and intelligent automation initiatives.",

    responsibilities: [
      "Design and support enterprise RPA solutions.",
      "Analyze business processes and identify suitable automation opportunities.",
      "Contribute to scalable automation architecture and solution design.",
      "Collaborate with business and technology stakeholders on automation initiatives.",
      "Support automation delivery, optimization and operational improvement.",
      "Explore opportunities to combine traditional RPA with modern AI and Generative AI capabilities."
    ],

    technologies: [
      "RPA",
      "Automation",
      "Solution Architecture",
      "API Integration",
      "Enterprise Automation",
      "Generative AI"
    ],

    highlights: [
      "Current Senior RPA Consultant engagement with Tawuniya.",
      "Working through Tawuniya's technology subsidiary, Teejan Al Khaleej (Muroon).",
      "Expanding automation capabilities toward intelligent and AI-assisted automation."
    ],

    current: true,

    logo: "tawuniya"
  },

  /*
   * ==========================================================
   * 02 — TAWUNIYA ENGAGEMENT
   * ==========================================================
   *
   * Vendor: Mob Coder
   * Client: Tawuniya Insurance
   */

  {
    id: "tawuniya-mob-coder",

    company: "Mob Coder",

    companyType: "Technology Services / Vendor",

    role: "Senior RPA Consultant",

    startDate: "May 2025",

    endDate: "June 2026",

    location: "Saudi Arabia",

    type: "client-engagement",

    client: "Tawuniya Insurance",

    description:
      "Worked as a Senior RPA Consultant for Tawuniya Insurance through Mob Coder, contributing to enterprise automation initiatives and supporting the delivery of RPA solutions.",

    responsibilities: [
      "Develop and support RPA automation solutions for enterprise processes.",
      "Work with stakeholders to understand process requirements.",
      "Translate business requirements into automation solutions.",
      "Support production automation and issue resolution.",
      "Contribute to automation improvements and solution optimization."
    ],

    technologies: [
      "RPA",
      "Automation",
      "Process Analysis",
      "Solution Design",
      "Enterprise Applications"
    ],

    highlights: [
      "Senior RPA consulting engagement for Tawuniya Insurance.",
      "Enterprise-scale automation exposure.",
      "Continued progression toward solution architecture and intelligent automation."
    ],

    current: false,

    logo: "mob-coder"
  },

  /*
   * ==========================================================
   * 03 — TAWUNIYA ENGAGEMENT
   * ==========================================================
   *
   * Vendor: Xocialve
   * Client: Tawuniya Insurance
   */

  {
    id: "tawuniya-xocialve",

    company: "Xocialve",

    companyType: "Technology Services / Vendor",

    role: "Senior RPA Consultant",

    startDate: "February 2024",

    endDate: "April 2025",

    location: "Saudi Arabia",

    type: "client-engagement",

    client: "Tawuniya Insurance",

    description:
      "Started the Tawuniya Insurance engagement as a Senior RPA Consultant through Xocialve, working on enterprise automation and RPA delivery.",

    responsibilities: [
      "Analyze business processes for automation opportunities.",
      "Design and develop RPA-based process automation.",
      "Collaborate with technical and business stakeholders.",
      "Support automation testing, deployment and maintenance.",
      "Help improve existing automation workflows and operational processes."
    ],

    technologies: [
      "RPA",
      "Process Automation",
      "Business Analysis",
      "Automation Development",
      "Enterprise Systems"
    ],

    highlights: [
      "Beginning of the long-term Tawuniya Insurance engagement in February 2024.",
      "Senior-level RPA consulting responsibilities.",
      "Enterprise automation and stakeholder collaboration."
    ],

    current: false,

    logo: "xocialve"
  },

  /*
   * ==========================================================
   * 04 — TECHVISTA SYSTEMS
   * ==========================================================
   *
   * TechVista Systems is represented as a Systems Limited
   * subsidiary/client-services environment based on the
   * career history provided.
   *
   * The Etisalat assignment is explicitly preserved as the
   * client context.
   */

  {
    id: "techvista-etisalat",

    company: "TechVista Systems",

    companyType: "Systems Limited Subsidiary",

    role: "Senior RPA Developer & Solution Architect",

    startDate: "2022",

    endDate: "2024",

    location: "Pakistan / Client Engagement",

    type: "previous",

    client: "Etisalat",

    description:
      "Worked with TechVista Systems, a Systems Limited subsidiary, as an outsourced resource for Etisalat, progressing into senior RPA development and solution architecture responsibilities.",

    responsibilities: [
      "Design and develop RPA solutions for client processes.",
      "Translate business requirements into scalable automation designs.",
      "Contribute to solution architecture and technical decisions.",
      "Develop reusable automation components and workflows.",
      "Collaborate with client stakeholders and delivery teams.",
      "Support automation deployment, maintenance and optimization."
    ],

    technologies: [
      "RPA",
      "Solution Architecture",
      "Automation Development",
      "Enterprise Automation",
      "Process Analysis",
      "Client Consulting"
    ],

    highlights: [
      "Senior RPA Developer and Solution Architect responsibilities.",
      "Worked as an outsourced resource for Etisalat.",
      "Progression from RPA development toward architecture and consulting."
    ],

    current: false,

    logo: "techvista"
  },

  /*
   * ==========================================================
   * 05 — VISIONET SYSTEMS
   * ==========================================================
   */

  {
    id: "visionet-junior-consultant",

    company: "Visionet Systems",

    companyType: "Systems Limited Subsidiary",

    role: "Junior Consultant",

    startDate: "2021",

    endDate: "2022",

    location: "Pakistan",

    type: "previous",

    description:
      "Worked as a Junior Consultant within Visionet Systems, a Systems Limited subsidiary, supporting client-facing technology and automation engagements.",

    responsibilities: [
      "Support client requirements analysis.",
      "Contribute to automation and technology delivery activities.",
      "Assist with solution development and implementation.",
      "Collaborate with consultants, developers and client stakeholders.",
      "Support testing, troubleshooting and process improvement."
    ],

    technologies: [
      "RPA",
      "Consulting",
      "Process Automation",
      "Business Analysis",
      "Software Development"
    ],

    highlights: [
      "Client-facing consulting experience.",
      "Progression into specialized RPA responsibilities.",
      "Experience within a Systems Limited subsidiary environment."
    ],

    current: false,

    logo: "visionet"
  },

  /*
   * ==========================================================
   * 06 — SYSTEMS LIMITED
   * ==========================================================
   *
   * RPA specialization began in 2021.
   */

  {
    id: "systems-associate-consultant-rpa",

    company: "Systems Limited",

    companyType: "Technology & Digital Services",

    role: "Associate Consultant — RPA",

    startDate: "2021",

    endDate: "2021",

    location: "Lahore, Pakistan",

    type: "previous",

    description:
      "Progressed into an Associate Consultant role specializing in Robotic Process Automation, beginning the dedicated RPA-focused phase of the professional career.",

    responsibilities: [
      "Develop automation solutions for business processes.",
      "Analyze repetitive and rule-based processes for automation potential.",
      "Work with consulting and technical teams on RPA delivery.",
      "Support automation testing and deployment.",
      "Contribute to process improvement initiatives."
    ],

    technologies: [
      "RPA",
      "Automation",
      "Process Analysis",
      "Consulting",
      "Software Development"
    ],

    highlights: [
      "Dedicated specialization in RPA.",
      "Transition into consulting-oriented automation work.",
      "Foundation for later senior RPA and architecture responsibilities."
    ],

    current: false,

    logo: "systems-limited"
  },

  /*
   * ==========================================================
   * 07 — CAREER START
   * ==========================================================
   */

  {
    id: "systems-career-start",

    company: "Systems Limited",

    companyType: "Technology & Digital Services",

    role: "IT Professional — Career Start",

    startDate: "2020",

    endDate: "2021",

    location: "Lahore, Pakistan",

    type: "career-start",

    description:
      "Started the professional IT career at Systems Limited in Lahore in 2020, establishing the foundation for subsequent work in consulting, RPA, automation and solution architecture.",

    responsibilities: [
      "Work within professional IT delivery environments.",
      "Develop foundational technical and professional skills.",
      "Collaborate with technology and delivery teams.",
      "Build experience that led into RPA specialization."
    ],

    technologies: [
      "Information Technology",
      "Software Development",
      "Automation",
      "Enterprise Technology"
    ],

    highlights: [
      "Professional IT career started in 2020.",
      "Foundation for a 6+ year IT career.",
      "Progressed toward RPA and intelligent automation."
    ],

    current: false,

    logo: "systems-limited"
  }
];

/**
 * ============================================================
 * EXPERIENCE HELPERS
 * ============================================================
 *
 * Keeping simple logic here means UI components don't need to
 * know how the experience data is organized.
 */

/**
 * Return only currently active positions.
 */
export function getCurrentExperience(): Experience[] {
  return experience.filter((item) => item.current);
}

/**
 * Return historical positions.
 */
export function getPreviousExperience(): Experience[] {
  return experience.filter((item) => !item.current);
}

/**
 * Find one experience entry by ID.
 */
export function getExperienceById(
  id: string
): Experience | undefined {
  return experience.find((item) => item.id === id);
}

/**
 * Get experience entries associated with a specific client.
 */
export function getExperienceByClient(
  client: string
): Experience[] {
  return experience.filter(
    (item) =>
      item.client?.toLowerCase() === client.toLowerCase()
  );
}
