/**
 * ============================================================
 * SITE CONFIGURATION
 * ============================================================
 *
 * Central source of truth for website-level configuration.
 *
 * ============================================================
 */

export interface NavigationItem {
  label: string;

  href: string;
}


export interface SiteConfig {
  name: string;

  shortName: string;

  professionalTitle: string;

  title: string;

  description: string;

  url: string;

  language: string;

  location: string;

  themeColor: string;

  defaultTheme:
    | "dark"
    | "light";

  author: string;

  keywords: string[];

  navigation: NavigationItem[];

  cv: {
    enabled: boolean;

    href?: string;
  };

  social?: {
    image?: string;

    twitterCard?:
      | "summary"
      | "summary_large_image";
  };

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
 */

export const site: SiteConfig = {

  name:
    "Hafiz Ahsan",


  shortName:
    "HA",


  professionalTitle:
    "RPA / AUTOMATION ENGINEER",


  title:
    "Hafiz Ahsan — Automation & Intelligent Systems",


  description:
    "Portfolio of Hafiz Ahsan, focused on automation, RPA, software engineering, intelligent systems and emerging AI technologies.",


  /*
   * IMPORTANT:
   *
   * Replace this with the real production domain before
   * deploying the portfolio.
   *
   * Example:
   *
   * https://yourdomain.com
   *
   */

  url:
    "https://example.com",


  language:
    "en",


  location:
    "GLOBAL",


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
   * NAVIGATION
   * ==========================================================
   */

  navigation: [
    {
      label:
        "About",

      href:
        "#about"
    },

    {
      label:
        "Projects",

      href:
        "#projects"
    },

    {
      label:
        "Experience",

      href:
        "#experience"
    },

    {
      label:
        "Skills",

      href:
        "#skills"
    },

    {
      label:
        "Contact",

      href:
        "#contact"
    }
  ],


  /**
   * ==========================================================
   * CV
   * ==========================================================
   *
   * Disabled until the final CV file/location is configured.
   *
   * ==========================================================
   */

  cv: {
    enabled:
      false,

    href:
      ""
  },


  /**
   * ==========================================================
   * SOCIAL PREVIEW
   * ==========================================================
   */

  social: {

    image:
      "/og-image.png",

    twitterCard:
      "summary_large_image"

  },


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
 *
 * Examples:
 *
 * getCanonicalUrl()
 * → https://example.com/
 *
 * getCanonicalUrl("/projects")
 * → https://example.com/projects
 *
 */

export function getCanonicalUrl(
  path = ""
): string {

  const base =
    site.url.replace(
      /\/$/,
      ""
    );


  if (!path) {
    return `${base}/`;
  }


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
