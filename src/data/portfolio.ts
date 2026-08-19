/**
 * ============================================================
 * PORTFOLIO DATA BARREL
 * ============================================================
 *
 * Compatibility layer for portfolio data.
 *
 * The actual source of truth lives in:
 *
 *   projects.ts
 *   experience.ts
 *   skills.ts
 *
 * Do not define portfolio content in this file.
 *
 * New code should preferably import directly from the
 * corresponding data file.
 *
 * ============================================================
 */


/**
 * ============================================================
 * PROJECTS
 * ============================================================
 */

export {
  projects,
  featuredProjects,
  getProjectsByCategory,
  getProjectsByYear,
  getProjectByTitle,
  getLatestProjects
} from "./projects";

export type {
  Project
} from "./projects";


/**
 * ============================================================
 * EXPERIENCE
 * ============================================================
 */

export {
  experience,
  sortedExperience,
  currentExperience,
  featuredExperience,
  getExperienceByCompany,
  getExperienceByRole,
  getExperienceByTechnology,
  getCompanies,
  getExperienceTechnologies
} from "./experience";

export type {
  Experience,
  ExperienceAccent
} from "./experience";


/**
 * ============================================================
 * SKILLS
 * ============================================================
 */

export {
  skills,
  skillCategories,
  sortedSkills,
  featuredSkills,
  skillGroups,
  getSkillsByCategory,
  getSkillsByTechnology,
  getSkillByName,
  getUsedSkillCategories
} from "./skills";

export type {
  Skill,
  SkillAccent,
  SkillGroup
} from "./skills";
