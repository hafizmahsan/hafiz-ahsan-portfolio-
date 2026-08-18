/**
 * ============================================================
 * PROFESSIONAL EXPERIENCE DATA
 * ============================================================
 *
 * This file contains the editable career history used by
 * Experience.astro.
 *
 * NON-TECHNICAL EDITING:
 * To change a job, update the values below.
 * The visual timeline does not need to be modified.
 *
 * ============================================================
 */

export interface ExperienceItem {
  company: string;
  client: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
}


/**
 * ============================================================
 * CAREER HISTORY
 * ============================================================
 *
 * IMPORTANT:
 * Keep the newest/current role first.
 *
 * Tawuniya is intentionally represented across its vendor
 * transitions so the evolution of the engagement is clear.
 *
 * ============================================================
 */

export const experience: ExperienceItem[] = [

  {
    company: "Tawuniya Insurance",
    client: "Tawuniya Technology / Enterprise Automation",
    role: "Senior RPA Consultant",
    period: "Jul 2026 — Present",
    location: "Saudi Arabia",
    current: true,

    description:
      "Continuing enterprise automation and RPA consulting for Tawuniya through its technology subsidiary, Teejan Al Khaleej (Muroon), with a focus on automation delivery, solution design and scalable enterprise processes.",

    highlights: [
      "Senior-level RPA consulting within a major insurance enterprise.",
      "Designing and supporting automation solutions across business processes.",
      "Working with stakeholders to translate business requirements into technical automation solutions.",
      "Continuing the evolution toward intelligent automation and GenAI-enabled workflows."
    ],

    technologies: [
      "RPA",
      "Automation",
      "Solution Design",
      "Enterprise Integration",
      "GenAI",
      "LLMs"
    ]
  },


  {
    company: "Tawuniya Insurance",
    client: "Vendor: Mob Coder",
    role: "Senior RPA Consultant",
    period: "May 2025 — Jun 2026",
    location: "Saudi Arabia",

    description:
      "Continued the Tawuniya enterprise automation engagement through Mob Coder, delivering RPA consulting, automation development and solution-oriented support for business processes.",

    highlights: [
      "Delivered and supported enterprise RPA solutions for Tawuniya.",
      "Worked with business and technical stakeholders on automation requirements.",
      "Contributed to automation design, development and production support.",
      "Supported process optimization through digital automation."
    ],

    technologies: [
      "RPA",
      "Process Automation",
      "Solution Design",
      "Enterprise Applications",
      "APIs",
      "Automation Support"
    ]
  },


  {
    company: "Tawuniya Insurance",
    client: "Vendor: Xocialve",
    role: "Senior RPA Consultant",
    period: "Feb 2024 — Apr 2025",
    location: "Saudi Arabia",

    description:
      "Started the Tawuniya engagement as a Senior RPA Consultant through Xocialve, working on enterprise automation initiatives and helping translate business requirements into reliable RPA solutions.",

    highlights: [
      "Joined the Tawuniya engagement as a Senior RPA Consultant.",
      "Worked on enterprise process automation and RPA delivery.",
      "Collaborated with business teams to identify automation opportunities.",
      "Contributed to solution design, implementation and operational support."
    ],

    technologies: [
      "RPA",
      "Automation",
      "Process Analysis",
      "Solution Design",
      "Enterprise Systems",
      "APIs"
    ]
  },


  {
    company: "TechVista Systems",
    client: "Etisalat",
    role: "Senior RPA Developer & Solution Architect",
    period: "2022 — 2024",
    location: "Pakistan / UAE Client Engagement",

    description:
      "Worked as an outsourced technology resource for Etisalat through TechVista Systems, progressing into senior RPA development and solution architecture responsibilities.",

    highlights: [
      "Worked as an outsourced RPA technology resource for Etisalat.",
      "Designed and developed enterprise automation solutions.",
      "Contributed to solution architecture and technical design.",
      "Worked across business processes, integrations and automation delivery.",
      "Collaborated with client stakeholders to translate requirements into technical solutions."
    ],

    technologies: [
      "RPA",
      "Solution Architecture",
      "Enterprise Automation",
      "APIs",
      "Process Design",
      "Integration"
    ]
  },


  {
    company: "Visionet Systems",
    client: "Systems Limited Group",
    role: "Junior Consultant — RPA",
    period: "2021 — 2022",
    location: "Lahore, Pakistan",

    description:
      "Joined Visionet Systems, a Systems Limited group company, as a Junior Consultant and continued developing expertise in RPA, automation delivery and client-focused consulting.",

    highlights: [
      "Worked on RPA development and enterprise automation initiatives.",
      "Participated in requirements analysis and solution implementation.",
      "Developed automation workflows for business processes.",
      "Worked in a consulting-oriented delivery environment.",
      "Expanded technical and client-facing capabilities."
    ],

    technologies: [
      "RPA",
      "Automation",
      "Process Analysis",
      "Consulting",
      "Workflow Design",
      "Enterprise Applications"
    ]
  },


  {
    company: "Systems Limited",
    client: "Systems Limited",
    role: "Associate Consultant — RPA",
    period: "2021",
    location: "Lahore, Pakistan",

    description:
      "Progressed into an Associate Consultant — RPA role at Systems Limited, beginning the dedicated RPA and automation phase of the professional journey.",

    highlights: [
      "Focused on robotic process automation and workflow automation.",
      "Worked on automation development and implementation.",
      "Participated in process analysis and technical solution development.",
      "Built foundational experience in enterprise RPA delivery."
    ],

    technologies: [
      "RPA",
      "Automation",
      "Process Analysis",
      "Workflow Automation",
      "Enterprise IT"
    ]
  },


  {
    company: "Systems Limited",
    client: "Systems Limited",
    role: "IT Professional",
    period: "2020 — 2021",
    location: "Lahore, Pakistan",

    description:
      "Started the professional IT career at Systems Limited in Lahore in 2020, establishing the technical foundation that later developed into a specialization in RPA, automation and solution architecture.",

    highlights: [
      "Started professional IT career in 2020.",
      "Built foundational enterprise technology experience.",
      "Developed understanding of business and technical environments.",
      "Transitioned toward RPA and automation as a professional specialization."
    ],

    technologies: [
      "Enterprise IT",
      "Automation",
      "Business Processes",
      "Technical Support",
      "Systems"
    ]
  }

];
