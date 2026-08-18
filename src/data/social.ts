/**
 * ============================================================
 * SOCIAL & CONTACT DATA
 * ============================================================
 *
 * All external profile and contact destinations are maintained
 * here.
 *
 * IMPORTANT:
 * Do not put personal URLs directly inside UI components.
 *
 * To change a social profile later, edit this file only.
 *
 * Example:
 *
 * linkedin: "https://www.linkedin.com/in/your-profile/"
 *
 * ============================================================
 */

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "email"
  | "portfolio"
  | "medium"
  | "stackoverflow"
  | "x"
  | "youtube";

export type SocialLink = {
  id: string;

  platform: SocialPlatform;

  label: string;

  shortLabel: string;

  url: string;

  icon: string;

  description: string;

  /**
   * Controls whether this link is displayed publicly.
   */
  visible: boolean;

  /**
   * Controls whether the link receives prominent treatment
   * in the hero/contact areas.
   */
  featured: boolean;

  /**
   * Whether the destination should open in a new browser tab.
   */
  external: boolean;
};

/**
 * ============================================================
 * SOCIAL LINKS
 * ============================================================
 *
 * Only verified/provided destinations are enabled initially.
 *
 * Empty URLs remain hidden until you add the correct profile.
 */

export const socialLinks: SocialLink[] = [
  /*
   * ----------------------------------------------------------
   * GITHUB
   * ----------------------------------------------------------
   */

  {
    id: "github",

    platform: "github",

    label: "GitHub",

    shortLabel: "GitHub",

    url: "https://github.com/hafizmahsan",

    icon: "github",

    description:
      "Explore source code, experiments, portfolio projects and technical work.",

    visible: true,

    featured: true,

    external: true
  },

  /*
   * ----------------------------------------------------------
   * CURRENT PORTFOLIO
   * ----------------------------------------------------------
   */

  {
    id: "portfolio",

    platform: "portfolio",

    label: "Current Portfolio",

    shortLabel: "Portfolio",

    url: "https://hafizmahsan.github.io/",

    icon: "globe",

    description:
      "Visit the existing portfolio and professional work.",

    visible: true,

    featured: false,

    external: true
  },

  /*
   * ----------------------------------------------------------
   * LINKEDIN
   * ----------------------------------------------------------
   *
   * Add the real URL when ready.
   *
   * Keeping this entry here means the UI architecture is
   * already prepared for it.
   */

  {
    id: "linkedin",

    platform: "linkedin",

    label: "LinkedIn",

    shortLabel: "LinkedIn",

    url: "",

    icon: "linkedin",

    description:
      "Professional profile and career information.",

    visible: false,

    featured: true,

    external: true
  },

  /*
   * ----------------------------------------------------------
   * EMAIL
   * ----------------------------------------------------------
   *
   * Add your preferred public professional email here.
   *
   * Example:
   *
   * url: "mailto:hello@example.com"
   *
   * Do not put a private/personal email into the repository
   * unless you intentionally want it publicly visible.
   */

  {
    id: "email",

    platform: "email",

    label: "Email",

    shortLabel: "Email",

    url: "",

    icon: "mail",

    description:
      "Contact me regarding professional opportunities, consulting or collaboration.",

    visible: false,

    featured: true,

    external: false
  },

  /*
   * ----------------------------------------------------------
   * MEDIUM
   * ----------------------------------------------------------
   */

  {
    id: "medium",

    platform: "medium",

    label: "Medium",

    shortLabel: "Medium",

    url: "",

    icon: "book-open",

    description:
      "Technical articles, learning notes and professional writing.",

    visible: false,

    featured: false,

    external: true
  },

  /*
   * ----------------------------------------------------------
   * STACK OVERFLOW
   * ----------------------------------------------------------
   */

  {
    id: "stackoverflow",

    platform: "stackoverflow",

    label: "Stack Overflow",

    shortLabel: "Stack Overflow",

    url: "",

    icon: "layers",

    description:
      "Technical questions, answers and software development activity.",

    visible: false,

    featured: false,

    external: true
  },

  /*
   * ----------------------------------------------------------
   * X / TWITTER
   * ----------------------------------------------------------
   */

  {
    id: "x",

    platform: "x",

    label: "X",

    shortLabel: "X",

    url: "",

    icon: "twitter",

    description:
      "Technology updates, ideas and professional activity.",

    visible: false,

    featured: false,

    external: true
  },

  /*
   * ----------------------------------------------------------
   * YOUTUBE
   * ----------------------------------------------------------
   */

  {
    id: "youtube",

    platform: "youtube",

    label: "YouTube",

    shortLabel: "YouTube",

    url: "",

    icon: "youtube",

    description:
      "Technical demonstrations, automation content and videos.",

    visible: false,

    featured: false,

    external: true
  }
];

/**
 * ============================================================
 * HELPERS
 * ============================================================
 */

/**
 * Return all visible social/contact links.
 */
export function getVisibleSocialLinks(): SocialLink[] {
  return socialLinks.filter(
    (link) => link.visible && link.url.trim() !== ""
  );
}

/**
 * Return featured social/contact links.
 */
export function getFeaturedSocialLinks(): SocialLink[] {
  return socialLinks.filter(
    (link) =>
      link.visible &&
      link.featured &&
      link.url.trim() !== ""
  );
}

/**
 * Find a social link by ID.
 */
export function getSocialLink(
  id: string
): SocialLink | undefined {
  return socialLinks.find(
    (link) => link.id === id
  );
}

/**
 * Find a social link by platform.
 */
export function getSocialByPlatform(
  platform: SocialPlatform
): SocialLink | undefined {
  return socialLinks.find(
    (link) => link.platform === platform
  );
}

/**
 * ============================================================
 * EASY CONFIGURATION HELP
 * ============================================================
 *
 * To enable LinkedIn later, change:
 *
 * visible: false
 *
 * to:
 *
 * visible: true
 *
 * and add the real URL.
 *
 * Example:
 *
 * url: "https://www.linkedin.com/in/your-name/"
 *
 * The website will then automatically be able to display
 * the LinkedIn button wherever the social component is used.
 * ============================================================
 */
