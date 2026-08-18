/**
 * ============================================================
 * SITE CONFIGURATION
 * ============================================================
 *
 * CENTRAL WEBSITE SETTINGS
 *
 * This file contains the most frequently changed information
 * about the portfolio.
 *
 * NON-TECHNICAL EDITING
 * ------------------------------------------------------------
 * If you want to change your:
 *
 * - Name
 * - Professional title
 * - Tagline
 * - Location
 * - Navigation labels
 * - Social profiles
 * - SEO title
 * - SEO description
 * - CV settings
 *
 * start here.
 *
 * The visual components should normally NOT need to be edited.
 * ============================================================
 */


export interface NavigationItem {
  label: string;
  href: string;
}


export interface SocialLink {
  label: string;
  href: string;
  icon:
    | "linkedin"
    | "github"
    | "email"
    | "website";
  external?: boolean;
}


export interface SiteConfig {

  /* ==========================================================
     PERSONAL IDENTITY
     ========================================================== */

  name: string;

  shortName: string;

  professionalTitle: string;

  secondaryTitle: string;

  tagline: string;

  location: string;


  /* ==========================================================
     WEBSITE
     ========================================================== */

  siteName: string;

  siteUrl: string;

  language: string;

  copyrightName: string;


  /* ==========================================================
     SEO
     ========================================================== */

  seoTitle: string;

  seoDescription: string;

  seoKeywords: string[];

  ogImage: string;


  /* ==========================================================
     NAVIGATION
     ========================================================== */

  navigation: NavigationItem[];


  /* ==========================================================
     SOCIAL / PROFESSIONAL LINKS
     ========================================================== */

  socialLinks: SocialLink[];


  /* ==========================================================
     CV / RESUME
     ========================================================== */

  cv: {
    enabled: boolean;

    label: string;

    description: string;

    sourceRepository: string;

    repositoryUrl: string;

    /**
     * The resume file will be detected dynamically from the
     * repository during the build.
     *
     * Do NOT put a hardcoded PDF filename here.
     *
     * This allows you to replace the PDF in the repository
     * without changing this configuration.
     */
    autoDetect: boolean;
  };


  /* ==========================================================
     FOOTER
     ========================================================== */

  footer: {
    message: string;

    status: string;

    statusLabel: string;
  };
}


/**
 * ============================================================
 * MAIN SITE CONFIGURATION
 * ============================================================
 */

export const site: SiteConfig = {

  /* ==========================================================
     PERSONAL IDENTITY
     ========================================================== */

  name:
    "Hafiz Ahsan",

  shortName:
    "HA",

  professionalTitle:
    "Senior RPA Consultant",

  secondaryTitle:
    "RPA Developer · Solution Architect · Automation Specialist",

  tagline:
    "Designing intelligent automation systems that connect people, processes and technology.",

  location:
    "Saudi Arabia",


  /* ==========================================================
     WEBSITE
     ========================================================== */

  siteName:
    "Hafiz Ahsan — RPA & Intelligent Automation",

  /**
   * GitHub Pages project repository.
   *
   * IMPORTANT:
   * During testing this is the portfolio repository.
   *
   * When the final website is moved to:
   *
   *     hafizmahsan.github.io
   *
   * change this to:
   *
   *     https://hafizmahsan.github.io
   */

  siteUrl:
    "https://hafizmahsan.github.io/hafiz-ahsan-portfolio",

  language:
    "en",

  copyrightName:
    "Hafiz Ahsan",


  /* ==========================================================
     SEO
     ========================================================== */

  seoTitle:
    "Hafiz Ahsan | Senior RPA Consultant & Solution Architect",

  seoDescription:
    "Professional portfolio of Hafiz Ahsan, a Senior RPA Consultant and automation specialist with 6+ years of IT experience across RPA development, solution architecture, enterprise automation and emerging Generative AI technologies.",

  seoKeywords: [
    "Hafiz Ahsan",
    "RPA Consultant",
    "Senior RPA Consultant",
    "RPA Developer",
    "RPA Solution Architect",
    "Robotic Process Automation",
    "Intelligent Automation",
    "Automation Consultant",
    "UiPath",
    "Enterprise Automation",
    "Solution Architecture",
    "Generative AI",
    "LangChain",
    "Saudi Arabia",
    "IT Consultant",
    "Automation Architect"
  ],

  /**
   * This will be replaced by the actual social preview
   * graphic when we build the SEO/Open Graph assets.
   */
  ogImage:
    "/og-image.png",


  /* ==========================================================
     NAVIGATION
     ========================================================== */

  navigation: [

    {
      label:
        "Home",

      href:
        "#top"
    },

    {
      label:
        "About",

      href:
        "#about"
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
        "Projects",

      href:
        "#projects"
    },

    {
      label:
        "Contact",

      href:
        "#contact"
    }

  ],


  /* ==========================================================
     PROFESSIONAL LINKS
     ========================================================== */

  socialLinks: [

    {
      label:
        "LinkedIn",

      href:
        "https://www.linkedin.com/",

      icon:
        "linkedin",

      external:
        true
    },


    {
      label:
        "GitHub",

      href:
        "https://github.com/hafizmahsan",

      icon:
        "github",

      external:
        true
    },


    {
      label:
        "Email",

      href:
        "mailto:your.email@example.com",

      icon:
        "email"
    }

  ],


  /* ==========================================================
     CV / RESUME
     ========================================================== */

  cv: {

    enabled:
      true,

    label:
      "Download CV",

    description:
      "Download the latest version of my professional CV.",

    /**
     * Resume repository supplied for this portfolio.
     */

    sourceRepository:
      "hafizmahsan/hafiz-ahsan-portfolio",

    repositoryUrl:
      "https://github.com/hafizmahsan/hafiz-ahsan-portfolio",

    /**
     * IMPORTANT
     *
     * Keep this TRUE.
     *
     * The website will later contain logic to identify the
     * PDF resume from the repository rather than requiring
     * you to manually update a filename every time.
     */

    autoDetect:
      true

  },


  /* ==========================================================
     FOOTER
     ========================================================== */

  footer: {

    message:
      "Built around automation, architecture and continuous learning.",

    status:
      "AVAILABLE",

    statusLabel:
      "Professional Network"
  }

};
