/**
 * ============================================================
 * SKILLS DATA
 * ============================================================
 *
 * Central source of truth for technical and professional
 * capabilities.
 *
 * Change skills here rather than modifying UI components.
 *
 * ============================================================
 */

export type SkillAccent =
  | "cyan"
  | "violet"
  | "blue"
  | "green";


export interface Skill {
  name: string;

  category: string;

  description?: string;

  level?: string;

  years?: string;

  technologies?: string[];

  featured?: boolean;

  accent?: SkillAccent;

  order?: number;
}


export interface SkillGroup {
  title: string;

  description?: string;

  skills: Skill[];
}


/**
 * ============================================================
 * SKILL CATEGORIES
 * ============================================================
 */

export const skillCategories = [
  "AUTOMATION",
  "AI & GEN AI",
  "SOFTWARE ENGINEERING",
  "INTEGRATION",
  "DATABASES",
  "DEVOPS & TOOLS",
  "ARCHITECTURE"
] as const;


/**
 * ============================================================
 * SKILLS
 * ============================================================
 */

export const skills: Skill[] = [

  /* ========================================================
     AUTOMATION
     ======================================================== */

  {
    name:
      "RPA",

    category:
      "AUTOMATION",

    description:
      "Designing and developing automation workflows for repetitive business processes.",

    level:
      "ADVANCED",

    technologies: [
      "UiPath",
      "RPA"
    ],

    featured:
      true,

    accent:
      "cyan",

    order:
      1
  },


  {
    name:
      "Workflow Automation",

    category:
      "AUTOMATION",

    description:
      "Building reliable automated workflows that connect business processes and systems.",

    level:
      "ADVANCED",

    technologies: [
      "Automation",
      "Workflow Design",
      "Process Automation"
    ],

    featured:
      true,

    accent:
      "cyan",

    order:
      2
  },


  /* ========================================================
     AI & GEN AI
     ======================================================== */

  {
    name:
      "Generative AI",

    category:
      "AI & GEN AI",

    description:
      "Exploring and implementing LLM-powered workflows and intelligent automation patterns.",

    level:
      "WORKING KNOWLEDGE",

    technologies: [
      "LLMs",
      "RAG",
      "AI Agents"
    ],

    featured:
      true,

    accent:
      "violet",

    order:
      3
  },


  {
    name:
      "AI Integration",

    category:
      "AI & GEN AI",

    description:
      "Connecting AI capabilities with existing applications, APIs and automation workflows.",

    level:
      "WORKING KNOWLEDGE",

    technologies: [
      "LLM APIs",
      "REST APIs",
      "AI Workflows"
    ],

    accent:
      "violet",

    order:
      4
  },


  /* ========================================================
     SOFTWARE ENGINEERING
     ======================================================== */

  {
    name:
      "Python",

    category:
      "SOFTWARE ENGINEERING",

    description:
      "Developing automation utilities, integrations and application logic using Python.",

    level:
      "ADVANCED",

    technologies: [
      "Python",
      "Scripting",
      "Automation"
    ],

    featured:
      true,

    accent:
      "blue",

    order:
      5
  },


  /* ========================================================
     INTEGRATION
     ======================================================== */

  {
    name:
      "API Development & Integration",

    category:
      "INTEGRATION",

    description:
      "Designing and consuming APIs to connect applications and enterprise systems.",

    level:
      "ADVANCED",

    technologies: [
      "REST",
      "JSON",
      "HTTP",
      "API Integration"
    ],

    featured:
      true,

    accent:
      "blue",

    order:
      6
  },


  /* ========================================================
     DATABASES
     ======================================================== */

  {
    name:
      "SQL",

    category:
      "DATABASES",

    description:
      "Working with relational databases, queries and data-driven automation workflows.",

    level:
      "ADVANCED",

    technologies: [
      "SQL",
      "Relational Databases"
    ],

    accent:
      "green",

    order:
      7
  },


  /* ========================================================
     DEVOPS / TOOLS
     ======================================================== */

  {
    name:
      "Git & Version Control",

    category:
      "DEVOPS & TOOLS",

    description:
      "Maintaining source code, branches and collaborative development workflows.",

    level:
      "ADVANCED",

    technologies: [
      "Git",
      "GitHub"
    ],

    accent:
      "green",

    order:
      8
  },


  /* ========================================================
     ARCHITECTURE
     ======================================================== */

  {
    name:
      "Solution Architecture",

    category:
      "ARCHITECTURE",

    description:
      "Designing scalable automation and integration solutions around business and technical requirements.",

    level:
      "ADVANCED",

    technologies: [
      "System Design",
      "Integration",
      "Automation Architecture"
    ],

    featured:
      true,

    accent:
      "cyan",

    order:
      9
  }

];


/**
 * ============================================================
 * SORTED SKILLS
 * ============================================================
 */

export const sortedSkills =
  [...skills].sort(
    (a, b) =>
      (a.order ?? 999) -
      (b.order ?? 999)
  );


/**
 * ============================================================
 * FEATURED SKILLS
 * ============================================================
 */

export const featuredSkills =
  sortedSkills.filter(
    (skill) =>
      skill.featured === true
  );


/**
 * ============================================================
 * SKILL GROUPS
 * ============================================================
 *
 * Derived automatically from the main skill collection.
 *
 * This is the structure consumed by Skills.astro.
 * ============================================================
 */

export const skillGroups: SkillGroup[] =
  skillCategories
    .map(
      (category) => {

        const categorySkills =
          sortedSkills.filter(
            (skill) =>
              skill.category === category
          );


        if (
          categorySkills.length === 0
        ) {
          return null;
        }


        return {
          title:
            category,

          description:
            `Core capabilities across ${category.toLowerCase()}.`,

          skills:
            categorySkills
        };

      }
    )
    .filter(
      (
        group
      ): group is SkillGroup =>
        group !== null
    );


/**
 * ============================================================
 * CATEGORY HELPERS
 * ============================================================
 */

/**
 * Return all skills belonging to a category.
 */
export function getSkillsByCategory(
  category: string
): Skill[] {

  return sortedSkills.filter(
    (skill) =>
      skill.category === category
  );

}


/**
 * Return all skills that contain a specific
 * technology.
 */
export function getSkillsByTechnology(
  technology: string
): Skill[] {

  const search =
    technology.toLowerCase();


  return sortedSkills.filter(
    (skill) =>
      skill.technologies?.some(
        (item) =>
          item
            .toLowerCase()
            .includes(search)
      ) ?? false
  );

}


/**
 * Return a skill by name.
 */
export function getSkillByName(
  name: string
): Skill | undefined {

  return sortedSkills.find(
    (skill) =>
      skill.name === name
  );

}


/**
 * Return all unique categories that are
 * actually used by the current skill collection.
 */
export function getUsedSkillCategories():
  string[] {

  return [
    ...new Set(
      sortedSkills.map(
        (skill) =>
          skill.category
      )
    )
  ];

}
