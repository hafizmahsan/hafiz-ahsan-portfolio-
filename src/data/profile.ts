/**
 * ============================================================
 * PROFILE DATA
 * ============================================================
 *
 * Central source of truth for the professional profile.
 *
 * Change personal/professional information here rather than
 * editing individual page components.
 *
 * ============================================================
 */

export interface Profile {
  name: string;

  firstName?: string;

  lastName?: string;

  title: string;

  shortTitle?: string;

  tagline: string;

  summary: string;

  location?: string;

  availability?: string;

  yearsOfExperience?: string;

  focus?: string[];

  hero?: {
    eyebrow?: string;

    headline: string;

    highlightedWords?: string[];

    subheadline: string;

    primaryCta?: string;

    secondaryCta?: string;
  };

  resume?: {
    label: string;

    url: string;

    available: boolean;
  };

  metadata?: {
    role?: string;

    industry?: string;

    specialization?: string;

    timezone?: string;
  };
}


/**
 * ============================================================
 * PROFILE
 * ============================================================
 *
 * IMPORTANT:
 *
 * The information below should be replaced with the actual
 * information from your resume/repository as we connect the
 * portfolio to your real content.
 *
 * Do not invent achievements or experience.
 *
 * ============================================================
 */

export const profile: Profile = {
  name:
    "Hafiz Ahsan",

  firstName:
    "Hafiz",

  lastName:
    "Ahsan",

  title:
    "Automation & Intelligent Systems Professional",

  shortTitle:
    "Automation Engineer",

  tagline:
    "Building intelligent automation systems that connect people, processes and technology.",

  summary:
    "Automation-focused professional working across RPA, software engineering, system integration and emerging AI technologies.",

  location:
    "Saudi Arabia",

  availability:
    "OPEN TO OPPORTUNITIES",

  yearsOfExperience:
    "",

  focus: [
    "RPA",
    "Intelligent Automation",
    "Generative AI",
    "Software Engineering",
    "System Integration",
    "Solution Architecture"
  ],


  /**
   * ==========================================================
   * HERO
   * ==========================================================
   */

  hero: {
    eyebrow:
      "AUTOMATION / AI / SOFTWARE",

    headline:
      "Engineering Intelligent Systems",

    highlightedWords: [
      "Intelligent",
      "Systems"
    ],

    subheadline:
      "Designing automation solutions that turn complex business processes into scalable, reliable digital workflows.",

    primaryCta:
      "VIEW PROJECTS",

    secondaryCta:
      "DOWNLOAD RESUME"
  },


  /**
   * ==========================================================
   * RESUME
   * ==========================================================
   *
   * This URL is intentionally kept in one place.
   *
   * Later we will connect this value to the actual PDF
   * available in the repository rather than depending on a
   * hardcoded filename throughout the application.
   *
   * ==========================================================
   */

  resume: {
    label:
      "DOWNLOAD RESUME",

    url:
      "/resume.pdf",

    available:
      true
  },


  /**
   * ==========================================================
   * METADATA
   * ==========================================================
   */

  metadata: {
    role:
      "Automation Engineer",

    industry:
      "Technology / Enterprise Automation",

    specialization:
      "RPA, Intelligent Automation & AI",

    timezone:
      "AST (UTC+3)"
  }
};


/**
 * ============================================================
 * PROFILE HELPERS
 * ============================================================
 */

/**
 * Return the display name.
 */
export function getDisplayName(): string {
  return profile.name;
}


/**
 * Return the professional title.
 */
export function getProfessionalTitle(): string {
  return profile.title;
}


/**
 * Return the hero configuration.
 */
export function getHeroContent() {
  return profile.hero;
}


/**
 * Return the resume configuration.
 */
export function getResume() {
  return profile.resume;
}


/**
 * Check whether a resume is configured.
 */
export function hasResume(): boolean {
  return Boolean(
    profile.resume?.available &&
    profile.resume?.url
  );
}


/**
 * Return the profile focus areas.
 */
export function getFocusAreas(): string[] {
  return profile.focus ?? [];
}
