/**
 * ============================================================
 * PORTFOLIO CONTENT
 * ============================================================
 *
 * Central source of truth for:
 *
 * - Projects
 * - Experience
 * - Skills
 *
 * Section components should receive their content from here.
 *
 * ============================================================
 */


/**
 * ============================================================
 * PROJECTS
 * ============================================================
 */

export interface PortfolioProject {
  title: string;

  description: string;

  technologies: string[];

  href?: string;

  github?: string;

  image?: string;

  imageAlt?: string;

  featured?: boolean;

  status:
    | "LIVE"
    | "IN PROGRESS"
    | "ARCHIVED"
    | "PRIVATE";
}


/**
 * ============================================================
 * EXPERIENCE
 * ============================================================
 */

export interface PortfolioExperience {
  period: string;

  title: string;

  organization?: string;

  description?: string;

  technologies?: string[];

  current?: boolean;
}


/**
 * ============================================================
 * SKILLS
 * ============================================================
 */

export interface PortfolioSkill {
  name: string;

  level?: string;
}


export interface PortfolioSkillGroup {
  title: string;

  description?: string;

  skills: PortfolioSkill[];
}


/**
 * ============================================================
 * PROJECT DATA
 * ============================================================
 *
 * These are intentionally conservative starter entries.
 *
 * Replace the placeholder descriptions/links with your actual
 * projects as we build the portfolio.
 *
 * ============================================================
 */

export const projects: PortfolioProject[] = [

  {
    title:
      "Intelligent Automation Systems",

    description:
      "Automation workflows designed to reduce repetitive operational work and connect business processes with reliable software systems.",

    technologies: [
      "Python",
      "RPA",
      "APIs",
      "Automation"
    ],

    featured:
      true,

    status:
      "IN PROGRESS"
  },


  {
    title:
      "AI-Assisted Workflow Automation",

    description:
      "Exploration of AI-assisted workflows that combine intelligent processing with structured automation and system integration.",

    technologies: [
      "Python",
      "AI",
      "APIs",
      "Automation"
    ],

    featured:
      false,

    status:
      "IN PROGRESS"
  },


  {
    title:
      "System Integration Tools",

    description:
      "Practical integration utilities for connecting applications, APIs, data sources, and operational workflows.",

    technologies: [
      "Python",
      "REST APIs",
      "Integration",
      "Data"
    ],

    featured:
      false,

    status:
      "IN PROGRESS"
  }

];


/**
 * ============================================================
 * EXPERIENCE DATA
 * ============================================================
 *
 * Keep this section factual.
 *
 * We will replace the starter structure with your exact
 * professional history when we enter your verified details.
 *
 * ============================================================
 */

export const experience: PortfolioExperience[] = [

  {
    period:
      "CURRENT",

    title:
      "Automation & Intelligent Systems",

    organization:
      "Professional Development",

    description:
      "Focused on automation, software engineering, system integration, and practical applications of intelligent technologies.",

    technologies: [
      "Automation",
      "Python",
      "RPA",
      "AI"
    ],

    current:
      true
  }

];


/**
 * ============================================================
 * SKILLS DATA
 * ============================================================
 */

export const skillGroups: PortfolioSkillGroup[] = [

  {
    title:
      "Automation",

    description:
      "Building reliable workflows that reduce repetitive operational work.",

    skills: [
      {
        name:
          "RPA",

        level:
          "CORE"
      },

      {
        name:
          "Workflow Automation",

        level:
          "CORE"
      },

      {
        name:
          "Process Automation",

        level:
          "CORE"
      },

      {
        name:
          "System Integration",

        level:
          "CORE"
      }
    ]
  },


  {
    title:
      "Software Engineering",

    description:
      "Developing practical software and integration solutions.",

    skills: [
      {
        name:
          "Python",

        level:
          "CORE"
      },

      {
        name:
          "REST APIs",

        level:
          "CORE"
      },

      {
        name:
          "Git",

        level:
          "WORKING"
      },

      {
        name:
          "Web Development",

        level:
          "WORKING"
      }
    ]
  },


  {
    title:
      "Intelligent Systems",

    description:
      "Exploring AI technologies where they can create useful outcomes.",

    skills: [
      {
        name:
          "Generative AI",

        level:
          "WORKING"
      },

      {
        name:
          "AI-Assisted Automation",

        level:
          "WORKING"
      },

      {
        name:
          "Intelligent Workflows",

        level:
          "WORKING"
      }
    ]
  },


  {
    title:
      "Data & Integration",

    description:
      "Working with information flows, APIs, and connected systems.",

    skills: [
      {
        name:
          "Data Processing",

        level:
          "WORKING"
      },

      {
        name:
          "API Integration",

        level:
          "CORE"
      },

      {
        name:
          "JSON",

        level:
          "CORE"
      }
    ]
  }

];
