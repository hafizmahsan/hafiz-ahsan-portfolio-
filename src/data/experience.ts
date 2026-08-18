/**
 * ============================================================
 * PROFESSIONAL EXPERIENCE DATA
 * ============================================================
 *
 * This file controls the Experience / Career Timeline.
 *
 * IMPORTANT
 * ------------------------------------------------------------
 * Tawuniya experience is intentionally displayed first because
 * it is the current and most relevant professional experience.
 *
 * The remaining experience follows the career progression from
 * Systems Limited → Visionet Systems → TechVista Systems.
 *
 * EDITING GUIDE
 * ------------------------------------------------------------
 * You can safely change:
 *
 * - company
 * - role
 * - period
 * - client
 * - description
 * - highlights
 * - technologies
 * - current
 *
 * without changing the Experience component.
 *
 * ============================================================
 */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;

  /**
   * Client / assignment context.
   * Optional.
   */
  client?: string;

  /**
   * Main role description.
   */
  description: string;

  /**
   * Key responsibilities / achievements.
   */
  highlights: string[];

  /**
   * Relevant technologies / capabilities.
   */
  technologies: string[];

  /**
   * Highlights the current position.
   */
  current?: boolean;
}


/**
 * ============================================================
 * CAREER HISTORY
 * ============================================================
 *
 * Display order:
 *
 * 1. Tawuniya — current
 * 2. Tawuniya — Mob Coder
 * 3. Tawuniya — Xocialve
 * 4. TechVista Systems / Etisalat
 * 5. Visionet Systems
 * 6. Systems Limited
 *
 * ============================================================
 */

export const experience: ExperienceItem[] = [

  /**
   * ----------------------------------------------------------
   * TAWUNIYA — CURRENT
   * ----------------------------------------------------------
   */

  {
    company: "Tawuniya Insurance",

    role: "Senior RPA Consultant",

    period: "Jul 2026 — Present",

    client:
      "Tawuniya Technology Subsidiary — Teejan Al Khaleej (Muroon)",

    description:
      "Currently working as a Senior RPA Consultant within Tawuniya's technology ecosystem, focusing on enterprise automation, solution design, process optimization and the evolution of intelligent automation capabilities.",

    highlights: [
      "Design and deliver enterprise RPA and automation solutions.",
      "Analyze business processes and identify opportunities for automation and optimization.",
      "Translate business requirements into scalable technical solutions.",
      "Collaborate with business and technology stakeholders throughout the solution lifecycle.",
      "Continue exploring Generative AI and intelligent automation technologies."
    ],

    technologies: [
      "RPA",
      "Solution Architecture",
      "Process Automation",
      "APIs",
      "Generative AI",
      "LLMs"
    ],

    current: true
  },


  /**
   * ----------------------------------------------------------
   * TAWUNIYA — MOB CODER
   * ----------------------------------------------------------
   */

  {
    company: "Tawuniya Insurance",

    role: "Senior RPA Consultant",

    period: "May 2025 — Jun 2026",

    client:
      "Vendor: Mob Coder",

    description:
      "Continued enterprise RPA consulting and automation delivery for Tawuniya through Mob Coder, contributing to automation development, solution design, process analysis and production-oriented delivery.",

    highlights: [
      "Developed and supported enterprise automation solutions.",
      "Worked with stakeholders to understand business and process requirements.",
      "Contributed to solution design and automation implementation.",
      "Supported testing, deployment and production activities.",
      "Worked toward improving automation reliability and maintainability."
    ],

    technologies: [
      "RPA",
      "Automation",
      "Process Analysis",
      "Solution Design",
      "Enterprise Systems"
    ]
  },


  /**
   * ----------------------------------------------------------
   * TAWUNIYA — XOCIALVE
   * ----------------------------------------------------------
   */

  {
    company: "Tawuniya Insurance",

    role: "Senior RPA Consultant",

    period: "Feb 2024 — Apr 2025",

    client:
      "Vendor: Xocialve",

    description:
      "Worked as a Senior RPA Consultant supporting Tawuniya's enterprise automation initiatives through Xocialve, with responsibilities spanning process analysis, automation development, solution implementation and stakeholder collaboration.",

    highlights: [
      "Worked on enterprise RPA initiatives for Tawuniya.",
      "Analyzed business processes for automation opportunities.",
      "Designed and developed automation workflows.",
      "Collaborated with stakeholders on requirements and solution delivery.",
      "Supported automation testing, deployment and production operations."
    ],

    technologies: [
      "RPA",
      "Process Automation",
      "Business Analysis",
      "Workflow Automation",
      "Enterprise Applications"
    ]
  },


  /**
   * ----------------------------------------------------------
   * TECHVISTA SYSTEMS / ETISALAT
   * ----------------------------------------------------------
   */

  {
    company: "TechVista Systems",

    role: "Senior RPA Developer & Solution Architect",

    period: "Career progression",

    client:
      "Outsourced enterprise resource — Etisalat",

    description:
      "Worked with TechVista Systems, a Systems Limited subsidiary, as an outsourced resource supporting Etisalat. Progressed into senior RPA development and solution architecture responsibilities across enterprise automation initiatives.",

    highlights: [
      "Worked as a Senior RPA Developer on enterprise automation solutions.",
      "Designed automation solutions based on business and technical requirements.",
      "Contributed to solution architecture and technical design.",
      "Worked with enterprise stakeholders and delivery teams.",
      "Supported development, testing, deployment and production activities.",
      "Applied automation and integration patterns to enterprise processes."
    ],

    technologies: [
      "RPA",
      "Solution Architecture",
      "Process Automation",
      "APIs",
      "Enterprise Integration",
      "Automation Development"
    ]
  },


  /**
   * ----------------------------------------------------------
   * VISIONET SYSTEMS
   * ----------------------------------------------------------
   */

  {
    company: "Visionet Systems",

    role: "Junior Consultant",

    period: "Career progression",

    client:
      "Systems Limited subsidiary",

    description:
      "Progressed into a Junior Consultant role with Visionet Systems, a subsidiary of Systems Limited, contributing to client-focused automation and technology delivery.",

    highlights: [
      "Worked on client-oriented automation and technology initiatives.",
      "Supported requirements gathering and process understanding.",
      "Contributed to RPA solution development and implementation.",
      "Collaborated with technical and business teams.",
      "Built practical experience in enterprise automation delivery."
    ],

    technologies: [
      "RPA",
      "Automation",
      "Consulting",
      "Requirements Analysis",
      "Enterprise Applications"
    ]
  },


  /**
   * ----------------------------------------------------------
   * SYSTEMS LIMITED — START
   * ----------------------------------------------------------
   */

  {
    company: "Systems Limited",

    role: "IT / Automation Professional",

    period: "2020 — 2021",

    client:
      "Lahore, Pakistan",

    description:
      "Started professional IT career with Systems Limited in Lahore in 2020, building the foundation for a career focused on enterprise technology, automation and RPA.",

    highlights: [
      "Started professional career in the IT industry in 2020.",
      "Developed foundational experience in enterprise technology.",
      "Built exposure to software and business processes.",
      "Developed the technical foundation that led toward RPA specialization.",
      "Progressed into an Associate Consultant — RPA role."
    ],

    technologies: [
      "IT",
      "Software",
      "Automation",
      "RPA",
      "Enterprise Technology"
    ]
  }

];
