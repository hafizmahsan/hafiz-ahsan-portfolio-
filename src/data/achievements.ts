/**
 * ============================================================
 * ACHIEVEMENTS DATA
 * ============================================================
 *
 * Central source of truth for professional achievements,
 * measurable outcomes and portfolio highlights.
 *
 * Keep factual achievements here.
 *
 * ============================================================
 */

export type AchievementAccent =
  | "cyan"
  | "violet"
  | "blue"
  | "green";


export interface Achievement {
  title: string;

  value?: string;

  unit?: string;

  description: string;

  category?: string;

  date?: string;

  source?: string;

  sourceUrl?: string;

  relatedProject?: string;

  relatedCompany?: string;

  featured?: boolean;

  accent?: AchievementAccent;

  order?: number;
}


/**
 * ============================================================
 * ACHIEVEMENTS
 * ============================================================
 *
 * IMPORTANT:
 *
 * The entries below are placeholders.
 *
 * Replace them with actual, verified achievements and
 * measurable results from your professional history.
 *
 * Do not invent percentages, financial figures, project counts
 * or other metrics.
 *
 * ============================================================
 */

export const achievements:
  Achievement[] = [

  {
    title:
      "Automation Impact",

    value:
      "—",

    unit:
      "",

    description:
      "Replace this placeholder with a verified measurable automation outcome.",

    category:
      "AUTOMATION",

    date:
      "",

    relatedProject:
      "",

    relatedCompany:
      "",

    featured:
      true,

    accent:
      "cyan",

    order:
      1
  },


  {
    title:
      "Processes Automated",

    value:
      "—",

    unit:
      "",

    description:
      "Replace this placeholder with the verified number of processes or workflows automated.",

    category:
      "RPA",

    date:
      "",

    relatedProject:
      "",

    relatedCompany:
      "",

    featured:
      true,

    accent:
      "violet",

    order:
      2
  },


  {
    title:
      "Efficiency Improvement",

    value:
      "—",

    unit:
      "",

    description:
      "Replace this placeholder with a verified efficiency or time-saving result.",

    category:
      "PROCESS IMPROVEMENT",

    date:
      "",

    relatedProject:
      "",

    relatedCompany:
      "",

    featured:
      true,

    accent:
      "blue",

    order:
      3
  },


  {
    title:
      "AI / Automation Initiative",

    value:
      "—",

    unit:
      "",

    description:
      "Replace this placeholder with a verified AI or intelligent automation contribution.",

    category:
      "AI",

    date:
      "",

    relatedProject:
      "",

    relatedCompany:
      "",

    featured:
      false,

    accent:
      "green",

    order:
      4
  }

];


/**
 * ============================================================
 * SORTED ACHIEVEMENTS
 * ============================================================
 */

export const sortedAchievements =
  [...achievements].sort(
    (a, b) =>
      (a.order ?? 999) -
      (b.order ?? 999)
  );


/**
 * ============================================================
 * FEATURED ACHIEVEMENTS
 * ============================================================
 */

export const featuredAchievements =
  sortedAchievements.filter(
    (achievement) =>
      achievement.featured === true
  );


/**
 * ============================================================
 * ACHIEVEMENT HELPERS
 * ============================================================
 */

/**
 * Find achievements by category.
 */
export function getAchievementsByCategory(
  category: string
): Achievement[] {

  const search =
    category.toLowerCase();

  return sortedAchievements.filter(
    (achievement) =>
      achievement.category
        ?.toLowerCase()
        .includes(search)
  );
}


/**
 * Find achievements related to a project.
 */
export function getAchievementsByProject(
  project: string
): Achievement[] {

  const search =
    project.toLowerCase();

  return sortedAchievements.filter(
    (achievement) =>
      achievement.relatedProject
        ?.toLowerCase()
        .includes(search)
  );
}


/**
 * Find achievements related to a company.
 */
export function getAchievementsByCompany(
  company: string
): Achievement[] {

  const search =
    company.toLowerCase();

  return sortedAchievements.filter(
    (achievement) =>
      achievement.relatedCompany
        ?.toLowerCase()
        .includes(search)
  );
}


/**
 * Find an achievement by title.
 */
export function getAchievementByTitle(
  title: string
): Achievement | undefined {

  return sortedAchievements.find(
    (achievement) =>
      achievement.title === title
  );
}


/**
 * Return achievements that contain an actual numeric
 * value.
 *
 * Useful for statistic/metric components.
 */
export function getMetricAchievements():
  Achievement[] {

  return sortedAchievements.filter(
    (achievement) =>
      Boolean(
        achievement.value &&
        achievement.value !== "—"
      )
  );
}
