/**
 * ============================================================
 * EXPERIENCE DATA
 * ============================================================
 *
 * Central source of truth for professional experience.
 *
 * Change job history here instead of editing page components.
 *
 * ============================================================
 */

export type ExperienceAccent =
  | "cyan"
  | "violet"
  | "blue"
  | "green";


export interface Experience {
  company: string;

  role: string;

  employmentType?: string;

  location?: string;

  startDate: string;

  endDate?: string;

  current?: boolean;

  summary?: string;

  responsibilities?: string[];

  achievements?: string[];

  technologies?: string[];

  companyUrl?: string;

  featured?: boolean;

  accent?: ExperienceAccent;

  order?: number;
}


/**
 * ============================================================
 * EXPERIENCE
 * ============================================================
 *
 * IMPORTANT:
 *
 * The entries below are structured placeholders.
 *
 * Replace them with your actual professional history from
 * your resume/repository information.
 *
 * No achievements, metrics or employment details should be
 * invented.
 *
 * ============================================================
 */

export const experience: Experience[] = [

  {
    company:
      "Company Name",

    role:
      "Automation Engineer",

    employmentType:
      "FULL-TIME",

    location:
      "Saudi Arabia",

    startDate:
      "YYYY",

    endDate:
      "",

    current:
      true,

    summary:
      "Designing and developing automation solutions that improve business processes and operational efficiency.",

    responsibilities: [
      "Develop and maintain automation workflows.",
      "Integrate enterprise systems through APIs and automation platforms.",
      "Collaborate with business and technical stakeholders.",
      "Support solution design, testing and deployment."
    ],

    achievements: [
      "Replace this placeholder with an actual measurable achievement.",
      "Replace this placeholder with another verified achievement."
    ],

    technologies: [
      "RPA",
      "Python",
      "REST APIs",
      "SQL"
    ],

    companyUrl:
      "",

    featured:
      true,

    accent:
      "cyan",

    order:
      1
  },


  {
    company:
      "Previous Company",

    role:
      "RPA Developer",

    employmentType:
      "FULL-TIME",

    location:
      "",

    startDate:
      "YYYY",

    endDate:
      "YYYY",

    current:
      false,

    summary:
      "Developed automation solutions for repetitive and process-intensive business workflows.",

    responsibilities: [
      "Analyze business processes and identify automation opportunities.",
      "Develop, test and maintain automation workflows.",
      "Work with stakeholders to gather and refine requirements."
    ],

    achievements: [
      "Replace this placeholder with an actual verified achievement."
    ],

    technologies: [
      "RPA",
      "Automation",
      "SQL"
    ],

    companyUrl:
      "",

    featured:
      false,

    accent:
      "blue",

    order:
      2
  }

];


/**
 * ============================================================
 * SORTED EXPERIENCE
 * ============================================================
 *
 * Newest / highest priority roles appear first according to
 * the explicit `order` field.
 * ============================================================
 */

export const sortedExperience =
  [...experience].sort(
    (a, b) =>
      (a.order ?? 999) -
      (b.order ?? 999)
  );


/**
 * ============================================================
 * CURRENT EXPERIENCE
 * ============================================================
 */

export const currentExperience =
  sortedExperience.filter(
    (item) =>
      item.current === true
  );


/**
 * ============================================================
 * FEATURED EXPERIENCE
 * ============================================================
 */

export const featuredExperience =
  sortedExperience.filter(
    (item) =>
      item.featured === true
  );


/**
 * ============================================================
 * EXPERIENCE HELPERS
 * ============================================================
 */

/**
 * Find all roles at a specific company.
 */
export function getExperienceByCompany(
  company: string
): Experience[] {
  const search =
    company.toLowerCase();

  return sortedExperience.filter(
    (item) =>
      item.company
        .toLowerCase()
        .includes(search)
  );
}


/**
 * Find experience by role.
 */
export function getExperienceByRole(
  role: string
): Experience[] {
  const search =
    role.toLowerCase();

  return sortedExperience.filter(
    (item) =>
      item.role
        .toLowerCase()
        .includes(search)
  );
}


/**
 * Find experience containing a specific technology.
 */
export function getExperienceByTechnology(
  technology: string
): Experience[] {
  const search =
    technology.toLowerCase();

  return sortedExperience.filter(
    (item) =>
      item.technologies?.some(
        (technologyItem) =>
          technologyItem
            .toLowerCase()
            .includes(search)
      ) ?? false
  );
}


/**
 * Return all unique companies.
 */
export function getCompanies(): string[] {
  return [
    ...new Set(
      sortedExperience.map(
        (item) =>
          item.company
      )
    )
  ];
}


/**
 * Return all unique technologies used across
 * the experience collection.
 */
export function getExperienceTechnologies():
  string[] {

  return [
    ...new Set(
      sortedExperience.flatMap(
        (item) =>
          item.technologies ?? []
      )
    )
  ];
}
