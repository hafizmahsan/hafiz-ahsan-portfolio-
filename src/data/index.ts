/**
 * ============================================================
 * DATA INDEX
 * ============================================================
 *
 * Central export point for portfolio data.
 *
 * Components and pages can import data from:
 *
 *   ../data
 *
 * instead of importing every individual data module.
 *
 * ============================================================
 */


/**
 * ============================================================
 * PROFILE
 * ============================================================
 */

export {
  profile,
  getDisplayName,
  getProfessionalTitle,
  getHeroContent,
  getResume,
  hasResume,
  getFocusAreas
} from "./profile";

export type {
  Profile
} from "./profile";


/**
 * ============================================================
 * CONTACT
 * ============================================================
 */

export {
  contactInfo,
  contactItems,
  enabledContactItems,
  getContactItem
} from "./contact";

export type {
  ContactItem
} from "./contact";


/**
 * ============================================================
 * NAVIGATION
 * ============================================================
 */

export {
  navigationItems,
  resumeNavigationItem,
  externalNavigationItems,
  enabledNavigationItems,
  enabledExternalNavigationItems,
  allEnabledNavigationItems,
  getNavigationItem,
  getSectionNavigationItems,
  getFeaturedNavigationItems
} from "./navigation";

export type {
  NavigationItem,
  NavigationItemType
} from "./navigation";


/**
 * ============================================================
 * PROJECTS
 * ============================================================
 *
 * Re-export the existing project data module.
 * ============================================================
 */

export {
  projects,
  sortedProjects,
  featuredProjects,
  getProjectBySlug,
  getProjectsByCategory,
  getProjectsByTechnology
} from "./projects";

export type {
  Project
} from "./projects";


/**
 * ============================================================
 * SKILLS
 * ============================================================
 */

export {
  skills,
  sortedSkills,
  featuredSkills,
  skillCategories,
  getSkillsByCategory,
  getSkillsByTechnology,
  getSkillByName,
  getUsedSkillCategories
} from "./skills";

export type {
  Skill,
  SkillAccent
} from "./skills";


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
 * EDUCATION
 * ============================================================
 */

export {
  education,
  sortedEducation,
  featuredEducation,
  getEducationByInstitution,
  getEducationByDegree,
  getEducationByField,
  getFieldsOfStudy,
  getEducationTechnologies
} from "./education";

export type {
  Education,
  EducationAccent
} from "./education";


/**
 * ============================================================
 * CERTIFICATIONS
 * ============================================================
 */

export {
  certifications,
  sortedCertifications,
  featuredCertifications,
  getCertificationsByIssuer,
  getCertificationsBySkill,
  getCertificationByName,
  getVerifiableCertifications,
  getCertificationIssuers
} from "./certifications";

export type {
  Certification,
  CertificationAccent
} from "./certifications";


/**
 * ============================================================
 * ACHIEVEMENTS
 * ============================================================
 */

export {
  achievements,
  sortedAchievements,
  featuredAchievements,
  getAchievementsByCategory,
  getAchievementsByProject,
  getAchievementsByCompany,
  getAchievementByTitle,
  getMetricAchievements
} from "./achievements";

export type {
  Achievement,
  AchievementAccent
} from "./achievements";


/**
 * ============================================================
 * SITE CONFIGURATION
 * ============================================================
 */

export {
  site,
  getPageTitle,
  getCanonicalUrl,
  getSystemStatus,
  getSiteVersion
} from "./site";

export type {
  SiteConfig
} from "./site";
