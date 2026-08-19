/**
 * ============================================================
 * PROJECT DATA
 * ============================================================
 *
 * This file contains portfolio project content only.
 *
 * DO NOT put layout or styling here.
 *
 * To add/edit/remove a project, modify this file.
 *
 * The ProjectCard component is responsible for presentation.
 *
 * ============================================================
 */

export interface Project {
  title: string;

  category: string;

  description: string;

  impact?: string;

  image?: string;

  technologies?: string[];

  github?: string;

  demo?: string;

  featured?: boolean;

  status?:
    | "LIVE"
    | "IN PROGRESS"
    | "ARCHIVED"
    | "PRIVATE";

  year?: string;

  accent?:
    | "cyan"
    | "violet"
    | "blue"
    | "green";
}


/**
 * ============================================================
 * PROJECTS
 * ============================================================
 */

export const projects: Project[] = [
  {
    title:
      "Enterprise RPA Automation Platform",

    category:
      "RPA / ENTERPRISE AUTOMATION",

    description:
      "A scalable automation solution designed to streamline repetitive enterprise workflows, reduce manual intervention and improve operational consistency.",

    impact:
      "Reduced manual processing effort and improved workflow consistency.",

    technologies: [
      "RPA",
      "UiPath",
      "Python",
      "REST APIs",
      "SQL"
    ],

    status:
      "LIVE",

    year:
      "2024",

    featured:
      true,

    accent:
      "cyan"
  },


  {
    title:
      "Gen AI Automation Assistant",

    category:
      "GENERATIVE AI / AUTOMATION",

    description:
      "An intelligent automation concept exploring LLM-powered workflows, contextual reasoning and AI-assisted task execution.",

    impact:
      "Explored opportunities to combine generative AI with enterprise automation workflows.",

    technologies: [
      "Python",
      "LLM",
      "RAG",
      "LangChain",
      "APIs"
    ],

    status:
      "IN PROGRESS",

    year:
      "2026",

    accent:
      "violet"
  },


  {
    title:
      "Automation Developer Toolkit",

    category:
      "DEVELOPER TOOLS / OPEN SOURCE",

    description:
      "A collection of reusable utilities, patterns and development helpers designed to accelerate automation engineering work.",

    technologies: [
      "Python",
      "Automation",
      "REST APIs",
      "Git"
    ],

    status:
      "LIVE",

    year:
      "2025",

    accent:
      "blue"
  },


  {
    title:
      "Intelligent Document Processing",

    category:
      "AI / DOCUMENT AUTOMATION",

    description:
      "An intelligent document-processing workflow designed to extract structured information from business documents and feed downstream automation processes.",

    impact:
      "Automated repetitive document-processing activities and reduced manual data handling.",

    technologies: [
      "Python",
      "OCR",
      "AI",
      "RPA",
      "APIs"
    ],

    status:
      "ARCHIVED",

    year:
      "2024",

    accent:
      "green"
  },


  {
    title:
      "Enterprise Workflow Integration",

    category:
      "SYSTEM INTEGRATION / AUTOMATION",

    description:
      "An integration-focused automation solution connecting enterprise systems through APIs, workflow orchestration and reusable automation components.",

    impact:
      "Improved interoperability between business systems and automation workflows.",

    technologies: [
      "REST APIs",
      "RPA",
      "Python",
      "SQL",
      "Integration"
    ],

    status:
      "ARCHIVED",

    year:
      "2023",

    accent:
      "cyan"
  }
];


/**
 * ============================================================
 * FEATURED PROJECTS
 * ============================================================
 *
 * Automatically derived from the main project collection.
 *
 * Set `featured: true` above and the project automatically
 * appears here.
 *
 * ============================================================
 */

export const featuredProjects =
  projects.filter(
    (project) =>
      project.featured === true
  );


/**
 * ============================================================
 * PROJECT HELPERS
 * ============================================================
 */


/**
 * Return projects by category.
 */
export function getProjectsByCategory(
  category: string
): Project[] {
  return projects.filter(
    (project) =>
      project.category === category
  );
}


/**
 * Return projects by year.
 */
export function getProjectsByYear(
  year: string
): Project[] {
  return projects.filter(
    (project) =>
      project.year === year
  );
}


/**
 * Return a single project by title.
 */
export function getProjectByTitle(
  title: string
): Project | undefined {
  return projects.find(
    (project) =>
      project.title === title
  );
}


/**
 * Return the latest projects.
 *
 * Projects with a missing year are placed last.
 */
export function getLatestProjects(
  limit?: number
): Project[] {

  const sortedProjects =
    [...projects].sort(
      (a, b) => {

        const yearA =
          Number(a.year ?? 0);

        const yearB =
          Number(b.year ?? 0);

        return yearB - yearA;
      }
    );


  return typeof limit === "number"
    ? sortedProjects.slice(
        0,
        limit
      )
    : sortedProjects;
}
