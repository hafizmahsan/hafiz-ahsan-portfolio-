/**
 * ============================================================
 * SITE CONFIGURATION
 * ============================================================
 *
 * This file contains the global settings for the portfolio.
 *
 * IMPORTANT:
 * You can safely edit the values in this file without needing
 * to understand the website's components, animations, or 3D
 * code.
 *
 * More detailed information such as experience, projects,
 * skills, education and social links will live in separate
 * files inside this same /data directory.
 * ============================================================
 */

export type ThemeMode = "dark" | "light";

export type SiteConfig = {
  /**
   * Basic identity
   */
  name: string;
  shortName: string;
  professionalTitle: string;
  tagline: string;

  /**
   * Location and availability
   */
  location: string;
  country: string;
  availability: string;

  /**
   * Website information
   */
  siteUrl: string;
  siteName: string;

  /**
   * Temporary repository path.
   *
   * This will be changed when the project moves from:
   *
   * hafiz-ahsan-portfolio
   *
   * to:
   *
   * hafizmahsan.github.io
   */
  basePath: string;

  /**
   * CV configuration
   *
   * The final deployment workflow will automatically locate
   * the PDF resume from the configured source repository.
   */
  cv: {
    enabled: boolean;
    sourceRepository: string;
    sourceBranch: string;
    downloadFileName: string;
    buttonLabel: string;
    viewLabel: string;
  };

  /**
   * Visual configuration
   */
  appearance: {
    defaultTheme: ThemeMode;
    allowThemeSwitch: boolean;
    enableAnimations: boolean;
    enable3D: boolean;
    enableParticles: boolean;
  };

  /**
   * Contact configuration
   *
   * The actual contact details will be maintained separately
   * later. This section controls whether the related UI
   * features are displayed.
   */
  contact: {
    showContactSection: boolean;
    showEmailButton: boolean;
    showLinkedInButton: boolean;
    showGitHubButton: boolean;
  };

  /**
   * Portfolio behavior
   */
  features: {
    showExperience: boolean;
    showProjects: boolean;
    showSkills: boolean;
    showEducation: boolean;
    showCertifications: boolean;
    showTestimonials: boolean;
    showBlog: boolean;
  };
};

export const siteConfig: SiteConfig = {
  /*
   * ----------------------------------------------------------
   * BASIC IDENTITY
   * ----------------------------------------------------------
   */

  name: "Hafiz Mohammad Ahsan",

  shortName: "Hafiz Ahsan",

  professionalTitle:
    "Senior RPA Consultant · Automation Specialist · Solution Architect",

  tagline:
    "Designing intelligent automation solutions that connect people, processes, technology and AI.",

  /*
   * ----------------------------------------------------------
   * LOCATION
   * ----------------------------------------------------------
   */

  location: "Saudi Arabia",

  country: "Saudi Arabia",

  availability: "Open to selected opportunities and collaborations",

  /*
   * ----------------------------------------------------------
   * WEBSITE
   * ----------------------------------------------------------
   */

  siteUrl: "https://hafizmahsan.github.io",

  siteName: "Hafiz Mohammad Ahsan — Portfolio",

  /*
   * Temporary GitHub Pages repository path.
   *
   * DO NOT change this yet.
   *
   * When we move the completed project to the main
   * hafizmahsan.github.io repository, this will become:
   *
   * basePath: ""
   */

  basePath: "/hafiz-ahsan-portfolio",

  /*
   * ----------------------------------------------------------
   * CV / RESUME
   * ----------------------------------------------------------
   *
   * The source repository contains the authoritative resume.
   *
   * We intentionally do NOT specify the current PDF filename.
   *
   * The GitHub Actions workflow that we create later will:
   *
   * 1. Inspect the source repository.
   * 2. Find the appropriate PDF.
   * 3. Prefer filenames containing "resume" or "cv".
   * 4. Fall back to an available PDF when necessary.
   * 5. Publish it using a stable website URL.
   *
   * Therefore, changing the filename of your resume will not
   * require changing the portfolio itself.
   */

  cv: {
    enabled: true,

    sourceRepository: "hafizmahsan/hafiz-ahsan-portfolio",

    sourceBranch: "main",

    downloadFileName: "cv.pdf",

    buttonLabel: "Download CV",

    viewLabel: "View CV"
  },

  /*
   * ----------------------------------------------------------
   * APPEARANCE
   * ----------------------------------------------------------
   *
   * The initial design will be dark and futuristic.
   *
   * The user will still be able to switch to light mode
   * through the theme control that we create later.
   */

  appearance: {
    defaultTheme: "dark",

    allowThemeSwitch: true,

    enableAnimations: true,

    enable3D: true,

    enableParticles: true
  },

  /*
   * ----------------------------------------------------------
   * CONTACT
   * ----------------------------------------------------------
   *
   * The actual contact/social information will be stored in
   * separate data files.
   *
   * These switches control whether particular UI elements
   * should appear.
   */

  contact: {
    showContactSection: true,

    showEmailButton: true,

    showLinkedInButton: true,

    showGitHubButton: true
  },

  /*
   * ----------------------------------------------------------
   * OPTIONAL PORTFOLIO FEATURES
   * ----------------------------------------------------------
   *
   * We can turn entire areas of the website on/off from here.
   *
   * For example, if you later decide that you don't want a
   * Testimonials section, change:
   *
   * showTestimonials: false
   *
   * The components will be designed to respect these settings.
   */

  features: {
    showExperience: true,

    showProjects: true,

    showSkills: true,

    showEducation: true,

    showCertifications: true,

    showTestimonials: false,

    showBlog: false
  }
};
