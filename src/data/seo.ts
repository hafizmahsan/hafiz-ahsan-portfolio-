/**
 * ============================================================
 * SEO CONFIGURATION
 * ============================================================
 *
 * This file controls the search-engine and social-sharing
 * information for the portfolio.
 *
 * IMPORTANT:
 *
 * Do not put SEO metadata directly into individual components
 * unless there is a specific reason to do so.
 *
 * This file acts as the central SEO configuration.
 *
 * Later, the website's <head> component will automatically
 * consume this data.
 * ============================================================
 */

export type SeoConfig = {
  /**
   * Basic metadata
   */
  title: string;

  titleTemplate: string;

  description: string;

  keywords: string[];

  author: string;

  language: string;

  /**
   * Search engine behavior
   */
  robots: string;

  /**
   * Canonical website information
   */
  canonicalUrl: string;

  /**
   * Open Graph / social sharing
   */
  openGraph: {
    type: "website" | "profile";

    title: string;

    description: string;

    image: string;

    imageAlt: string;
  };

  /**
   * Twitter/X card metadata.
   */
  twitter: {
    card:
      | "summary"
      | "summary_large_image";

    title: string;

    description: string;

    image: string;
  };

  /**
   * Structured-data information.
   *
   * This will later be converted into JSON-LD.
   */
  structuredData: {
    personName: string;

    jobTitle: string;

    description: string;

    url: string;

    knowsAbout: string[];

    areaServed: string;

    worksFor: {
      name: string;

      type: string;
    };
  };
};

/**
 * ============================================================
 * SEO DATA
 * ============================================================
 */

export const seoConfig: SeoConfig = {
  /*
   * ----------------------------------------------------------
   * PAGE TITLE
   * ----------------------------------------------------------
   */

  title:
    "Hafiz Mohammad Ahsan | Senior RPA Consultant & Automation Specialist",

  titleTemplate:
    "%s | Hafiz Mohammad Ahsan",

  /*
   * ----------------------------------------------------------
   * META DESCRIPTION
   * ----------------------------------------------------------
   *
   * Keep this relatively concise because search engines may
   * truncate longer descriptions.
   */

  description:
    "Portfolio of Hafiz Mohammad Ahsan, a Senior RPA Consultant and automation professional with 6+ years of IT experience across RPA, intelligent automation, solution architecture and emerging Generative AI technologies.",

  /*
   * ----------------------------------------------------------
   * KEYWORDS
   * ----------------------------------------------------------
   *
   * Keywords are not a major modern Google ranking factor,
   * but maintaining a controlled vocabulary is useful for our
   * own metadata and content organization.
   */

  keywords: [
    "Hafiz Mohammad Ahsan",
    "Hafiz Ahsan",
    "Senior RPA Consultant",
    "RPA Consultant",
    "RPA Developer",
    "RPA",
    "Robotic Process Automation",
    "Automation Specialist",
    "Automation Consultant",
    "Solution Architect",
    "Intelligent Automation",
    "Enterprise Automation",
    "Process Automation",
    "AI Automation",
    "Generative AI",
    "GenAI",
    "LangChain",
    "LLM",
    "AI Agents",
    "RAG",
    "Saudi Arabia",
    "IT Consultant",
    "Automation Architecture"
  ],

  /*
   * ----------------------------------------------------------
   * AUTHOR
   * ----------------------------------------------------------
   */

  author: "Hafiz Mohammad Ahsan",

  /*
   * ----------------------------------------------------------
   * LANGUAGE
   * ----------------------------------------------------------
   */

  language: "en",

  /*
   * ----------------------------------------------------------
   * SEARCH ENGINE ACCESS
   * ----------------------------------------------------------
   *
   * We want the public portfolio indexed.
   */

  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  /*
   * ----------------------------------------------------------
   * CANONICAL URL
   * ----------------------------------------------------------
   *
   * This is the final canonical portfolio domain.
   *
   * During testing in the repository, GitHub Pages may use
   * the repository path, but the canonical production URL
   * will be this domain when the project is moved to the
   * main hafizmahsan.github.io repository.
   */

  canonicalUrl:
    "https://hafizmahsan.github.io/",

  /*
   * ----------------------------------------------------------
   * OPEN GRAPH
   * ----------------------------------------------------------
   *
   * Used when the website is shared on platforms that support
   * Open Graph metadata.
   *
   * The image will be created later.
   */

  openGraph: {
    type: "profile",

    title:
      "Hafiz Mohammad Ahsan | Senior RPA Consultant & Automation Specialist",

    description:
      "Explore the professional portfolio, experience, automation projects, technical skills and AI learning journey of Hafiz Mohammad Ahsan.",

    image:
      "/images/og/portfolio-preview.png",

    imageAlt:
      "Hafiz Mohammad Ahsan — Senior RPA Consultant and Automation Specialist"
  },

  /*
   * ----------------------------------------------------------
   * TWITTER / X
   * ----------------------------------------------------------
   */

  twitter: {
    card: "summary_large_image",

    title:
      "Hafiz Mohammad Ahsan | RPA & Automation",

    description:
      "Senior RPA Consultant specializing in enterprise automation, solution architecture and emerging Generative AI technologies.",

    image:
      "/images/og/portfolio-preview.png"
  },

  /*
   * ----------------------------------------------------------
   * STRUCTURED DATA
   * ----------------------------------------------------------
   *
   * This information will later become schema.org JSON-LD.
   *
   * The purpose is to help search engines understand that
   * this website represents a real professional/person rather
   * than simply treating it as an anonymous webpage.
   */

  structuredData: {
    personName:
      "Hafiz Mohammad Ahsan",

    jobTitle:
      "Senior RPA Consultant",

    description:
      "Senior RPA Consultant and automation professional with 6+ years of IT experience in RPA, intelligent automation, solution architecture and emerging Generative AI technologies.",

    url:
      "https://hafizmahsan.github.io/",

    knowsAbout: [
      "Robotic Process Automation",
      "RPA",
      "Intelligent Automation",
      "Process Automation",
      "Solution Architecture",
      "Automation Architecture",
      "API Integration",
      "Enterprise Automation",
      "Generative AI",
      "LangChain",
      "Large Language Models",
      "AI Agents",
      "Retrieval-Augmented Generation"
    ],

    areaServed:
      "Saudi Arabia",

    worksFor: {
      name:
        "Tawuniya Insurance",

      type:
        "Organization"
    }
  }
};
