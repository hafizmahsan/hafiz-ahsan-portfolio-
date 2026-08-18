/**
 * ============================================================
 * PROFESSIONAL PROFILE
 * ============================================================
 *
 * This file contains the information used to introduce Hafiz
 * professionally throughout the portfolio.
 *
 * CONTENT ONLY:
 * Do not put colors, animations, HTML or layout code here.
 *
 * If you want to update your professional positioning later,
 * this is one of the main files you should edit.
 * ============================================================
 */

export type ProfileStat = {
  value: string;
  label: string;
};

export type Specialization = {
  title: string;
  description: string;
  icon: string;
};

export type ProfessionalProfile = {
  name: string;
  displayName: string;

  primaryTitle: string;
  secondaryTitle: string;

  shortIntroduction: string;
  heroStatement: string;
  professionalSummary: string;

  experienceLabel: string;

  stats: ProfileStat[];

  specializations: Specialization[];

  currentFocus: string[];

  professionalKeywords: string[];
};

export const profile: ProfessionalProfile = {
  /*
   * ----------------------------------------------------------
   * IDENTITY
   * ----------------------------------------------------------
   */

  name: "Hafiz Mohammad Ahsan",

  displayName: "Hafiz Ahsan",

  /*
   * ----------------------------------------------------------
   * PROFESSIONAL POSITIONING
   * ----------------------------------------------------------
   *
   * These titles will appear in different areas of the
   * website. Keeping them separate lets us use a concise
   * title in the hero while retaining a broader description
   * elsewhere.
   */

  primaryTitle: "Senior RPA Consultant",

  secondaryTitle:
    "Automation Specialist · Solution Architect · Intelligent Automation Professional",

  /*
   * ----------------------------------------------------------
   * INTRODUCTION
   * ----------------------------------------------------------
   */

  shortIntroduction:
    "I design and deliver enterprise automation solutions across RPA, process automation, system integration and emerging Generative AI technologies.",

  /*
   * Main hero statement.
   *
   * This will eventually be displayed alongside the 3D
   * automation/network visual.
   */

  heroStatement:
    "Engineering intelligent automation for complex business processes.",

  /*
   * Professional summary.
   *
   * This is intentionally written as a portfolio summary
   * rather than a copied resume paragraph.
   */

  professionalSummary:
    "Senior RPA and automation professional with 6+ years of IT experience, beginning in 2020 and progressing through consulting, RPA development, solution architecture and enterprise automation engagements. Experienced in delivering automation solutions for complex client environments and currently focused on combining RPA expertise with Generative AI, LangChain, intelligent agents and modern AI-driven automation patterns.",

  /*
   * ----------------------------------------------------------
   * EXPERIENCE LABEL
   * ----------------------------------------------------------
   */

  experienceLabel: "6+ Years in IT & Intelligent Automation",

  /*
   * ----------------------------------------------------------
   * QUICK PROFESSIONAL STATS
   * ----------------------------------------------------------
   *
   * These are intentionally kept as editable data.
   *
   * We can later replace these with automatically calculated
   * values where appropriate.
   */

  stats: [
    {
      value: "6+",
      label: "Years in IT"
    },
    {
      value: "RPA",
      label: "Core Specialization"
    },
    {
      value: "2020",
      label: "IT Career Started"
    },
    {
      value: "GenAI",
      label: "Current Learning Focus"
    }
  ],

  /*
   * ----------------------------------------------------------
   * CORE SPECIALIZATIONS
   * ----------------------------------------------------------
   *
   * The icon values are identifiers.
   *
   * The UI layer will decide how these identifiers are
   * visually rendered. This keeps content independent from
   * the design system.
   */

  specializations: [
    {
      title: "Robotic Process Automation",
      description:
        "Designing, developing and maintaining enterprise RPA solutions for repetitive and rule-driven business processes.",
      icon: "bot"
    },
    {
      title: "Solution Architecture",
      description:
        "Translating business requirements into scalable automation architectures, integrations and implementation strategies.",
      icon: "architecture"
    },
    {
      title: "Intelligent Automation",
      description:
        "Combining automation, APIs, data and AI capabilities to create smarter end-to-end business workflows.",
      icon: "workflow"
    },
    {
      title: "Generative AI",
      description:
        "Expanding automation capabilities through LLMs, LangChain, AI agents, retrieval-based systems and emerging GenAI patterns.",
      icon: "brain"
    }
  ],

  /*
   * ----------------------------------------------------------
   * CURRENT LEARNING / FOCUS
   * ----------------------------------------------------------
   *
   * This section is especially useful because your skill set
   * is evolving toward AI and GenAI.
   */

  currentFocus: [
    "Generative AI",
    "LangChain",
    "Large Language Model applications",
    "AI agents",
    "Retrieval-Augmented Generation",
    "Intelligent automation",
    "RPA + AI integration",
    "Automation architecture"
  ],

  /*
   * ----------------------------------------------------------
   * PROFESSIONAL KEYWORDS
   * ----------------------------------------------------------
   *
   * These will later help with:
   *
   * - SEO
   * - structured metadata
   * - project filtering
   * - search engines
   * - portfolio categorization
   *
   * They should describe genuine areas of expertise or
   * professional focus.
   */

  professionalKeywords: [
    "RPA",
    "Robotic Process Automation",
    "Automation",
    "Intelligent Automation",
    "Senior RPA Consultant",
    "Solution Architecture",
    "RPA Developer",
    "Automation Engineer",
    "Business Process Automation",
    "Enterprise Automation",
    "API Integration",
    "Generative AI",
    "GenAI",
    "LangChain",
    "LLM",
    "AI Agents",
    "RAG",
    "Saudi Arabia"
  ]
};
