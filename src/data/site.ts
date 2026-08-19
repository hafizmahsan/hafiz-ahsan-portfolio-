/**
 * ============================================================
 * SITE CONFIGURATION
 * ============================================================
 *
 * Central source of truth for website-level configuration.
 *
 * This file contains information about the website itself,
 * navigation, social links, footer information, and system
 * status.
 *
 * Detailed career/profile content belongs in portfolio.ts.
 *
 * ============================================================
 */

export interface SiteConfig {
  name: string;

  title: string;

  description: string;

  url: string;

  language: string;

  themeColor: string;

  defaultTheme:
    | "dark"
    | "light"
    | "system";

  author: string;

  keywords: string[];

  social?: {
    image?: string;

    twitterCard?:
      | "summary"
      | "summary_large_image";

    github?: string;

    linkedin?: string;
  };

  navigation?: {
    label: string;

    href: string;
  }[];

  footer?: {
    copyrightName?: string;

    message?: string;

    version?: string;
  };

  system?: {
    status?: string;

    environment?: string;

    region?: string;
  };
}


/**
 * ============================================================
 * SITE
 * ============================================================
 *
 * Replace placeholder site/SEO values with the final public
 * values once the portfolio is ready for deployment.
 *
 * ============================================================
 */

export const site: SiteConfig = {
  name:
    "Hafiz Ahsan",

  title:
    "Hafiz Ahsan — Automation & Intelligent Systems",

  description:
    "Portfolio of Hafiz Ahsan, focused on automation, RPA, software engineering, intelligent systems and emerging AI technologies.",

  url:
    "https://example.com",

  language:
    "en",

  themeColor:
    "#05070a",

  defaultTheme:
    "dark",

  author:
    "Hafiz Ahsan",

  keywords: [
    "Hafiz Ahsan",
    "Automation Engineer",
    "RPA",
    "Intelligent Automation",
    "Generative AI",
    "Software Engineering",
    "Python",
    "System Integration",
    "Automation Portfolio"
  ],


  /**
   * ==========================================================
   * SOCIAL
   * ==========================================================
   */

  social: {
    image:
      "/og-image.png",

    twitterCard:
      "summary_large_image",

    github:
      "https://github.com/hafizmahsan",

    linkedin:
      "https://www.linkedin.com/"
  },


  /**
   * ==========================================================
   * PRIMARY NAVIGATION
   * ==========================================================
   */

  navigation: [
    {
      label:
        "ABOUT",

      href:
        "#about"
    },

    {
      label:
        "WORK",

      href:
        "#projects"
    },

    {
      label:
        "EXPERIENCE",

      href:
        "#experience"
    },

    {
      label:
        "SKILLS",

      href:
        "#skills"
    },

    {
      label:
        "CONTACT",

      href:
        "#contact"
    }
  ],


  /**
   * ==========================================================
   * FOOTER
   * ==========================================================
   */

  footer: {
    copyrightName:
      "Hafiz Ahsan",

    message:
      "ENGINEERED WITH PRECISION.",

    version:
      "1.0.0"
  },


  /**
   * ==========================================================
   * SYSTEM STATUS
   * ==========================================================
   */

  system: {
    status:
      "ONLINE",

    environment:
      "PRODUCTION",

    region:
      "GLOBAL"
  }
};


/**
 * ============================================================
 * SEO HELPERS
 * ============================================================
 */


/**
 * Return the full page title.
 */
export function getPageTitle(
  pageTitle?: string
): string {

  if (!pageTitle) {
    return site.title;
  }

  return `${pageTitle} — ${site.name}`;
}


/**
 * Return the canonical site URL.
 */
export function getCanonicalUrl(
  path = ""
): string {

  const base =
    site.url.replace(
      /\/$/,
      ""
    );

  const normalizedPath =
    path.startsWith("/")
      ? path
      : `/${path}`;

  return `${base}${normalizedPath}`;
}


/**
 * Return the current site status.
 */
export function getSystemStatus(): string {
  return (
    site.system?.status ??
    "ONLINE"
  );
}


/**
 * Return the current site version.
 */
export function getSiteVersion(): string {
  return (
    site.footer?.version ??
    "1.0.0"
  );
}
