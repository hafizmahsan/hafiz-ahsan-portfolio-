/**
 * ============================================================
 * PROJECT PORTFOLIO
 * ============================================================
 *
 * This file contains all portfolio projects.
 *
 * IMPORTANT:
 * The UI, animations, filters and project pages will read
 * from this file.
 *
 * To add a new project:
 *
 * 1. Copy an existing project object.
 * 2. Give it a unique ID.
 * 3. Change the title/description/details.
 * 4. Add the technologies.
 * 5. Add the project URL if one exists.
 *
 * You should NOT need to modify the visual components.
 * ============================================================
 */

export type ProjectCategory =
  | "rpa"
  | "automation"
  | "ai"
  | "genai"
  | "integration"
  | "architecture"
  | "development";

export type ProjectStatus =
  | "featured"
  | "completed"
  | "ongoing"
  | "learning"
  | "concept";

export type Project = {
  id: string;

  title: string;

  shortTitle: string;

  category: ProjectCategory[];

  status: ProjectStatus;

  year: string;

  client?: string;

  description: string;

  challenge: string;

  solution: string;

  outcome: string;

  technologies: string[];

  capabilities: string[];

  /**
   * Visual identifier.
   *
   * The UI will convert this into a futuristic visual scene
   * rather than requiring a project screenshot.
   */
  visual: {
    type:
      | "automation"
      | "workflow"
      | "robot"
      | "ai-network"
      | "architecture"
      | "data-flow";

    accent: "cyan" | "blue" | "violet" | "green" | "orange";

    icon: string;
  };

  /**
   * External links.
   *
   * Leave empty when the project cannot be publicly shared.
   */
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };

  /**
   * Controls whether the project appears prominently on
   * the homepage.
   */
  featured: boolean;

  /**
   * Controls whether the project appears in the public
   * portfolio.
   */
  visible: boolean;
};

/**
 * ============================================================
 * PROJECT DATA
 * ============================================================
 *
 * The entries below are intentionally structured so that
 * actual projects from the existing portfolio/repository can
 * be inserted without changing the UI architecture.
 *
 * DEMO / PLACEHOLDER NOTICE:
 * The specific project names and descriptions below should be
 * replaced with verified projects from the existing portfolio
 * once its source data is accessible.
 */

export const projects: Project[] = [
  /*
   * ==========================================================
   * PROJECT 01
   * ==========================================================
   */

  {
    id: "enterprise-rpa-automation",

    title: "Enterprise RPA Automation",

    shortTitle: "RPA Automation",

    category: ["rpa", "automation"],

    status: "featured",

    year: "2024",

    description:
      "Enterprise process automation solution designed to reduce repetitive manual work, improve processing consistency and provide scalable digital workforce capabilities.",

    challenge:
      "Manual, repetitive business processes can consume significant operational effort, introduce human error and make process monitoring difficult.",

    solution:
      "Designed an RPA workflow that connects business applications, validates process data, executes predefined actions and provides controlled exception handling.",

    outcome:
      "Created a repeatable automation pattern that can be adapted to additional business processes and integrated into broader enterprise automation strategies.",

    technologies: [
      "RPA",
      "Process Automation",
      "Workflow Automation",
      "Enterprise Applications",
      "API Integration"
    ],

    capabilities: [
      "Process discovery",
      "Automation design",
      "Workflow orchestration",
      "Exception handling",
      "Production support"
    ],

    visual: {
      type: "robot",
      accent: "cyan",
      icon: "bot"
    },

    links: {},

    featured: true,

    visible: true
  },

  /*
   * ==========================================================
   * PROJECT 02
   * ==========================================================
   */

  {
    id: "intelligent-workflow-automation",

    title: "Intelligent Workflow Automation",

    shortTitle: "Smart Workflows",

    category: ["automation", "architecture"],

    status: "featured",

    year: "2024",

    description:
      "Automation architecture connecting multiple process steps into an intelligent end-to-end workflow.",

    challenge:
      "Complex business processes often span several applications and teams, creating disconnected manual handoffs.",

    solution:
      "Designed an automation-oriented workflow model where process stages, system interactions and exception paths are orchestrated through a consistent automation architecture.",

    outcome:
      "Established a reusable approach for designing scalable process automation rather than treating individual bots as isolated scripts.",

    technologies: [
      "RPA",
      "Workflow Automation",
      "Solution Architecture",
      "API Integration",
      "Enterprise Systems"
    ],

    capabilities: [
      "Process orchestration",
      "Architecture design",
      "System integration",
      "Exception management",
      "Process optimization"
    ],

    visual: {
      type: "workflow",
      accent: "blue",
      icon: "workflow"
    },

    links: {},

    featured: true,

    visible: true
  },

  /*
   * ==========================================================
   * PROJECT 03
   * ==========================================================
   */

  {
    id: "automation-solution-architecture",

    title: "Automation Solution Architecture",

    shortTitle: "Automation Architecture",

    category: ["architecture", "rpa", "integration"],

    status: "featured",

    year: "2023",

    description:
      "Solution architecture approach for enterprise automation environments involving business processes, RPA components, integrations and operational controls.",

    challenge:
      "Growing automation programs require architectural standards that support maintainability, scalability, monitoring and secure integration.",

    solution:
      "Designed reusable architectural patterns for automation components, integrations, process orchestration, exception handling and operational support.",

    outcome:
      "Created a foundation for treating automation as an enterprise technology capability rather than a collection of disconnected scripts.",

    technologies: [
      "Solution Architecture",
      "RPA",
      "API Integration",
      "Enterprise Architecture",
      "Automation"
    ],

    capabilities: [
      "Architecture design",
      "Technical analysis",
      "Integration planning",
      "Scalability planning",
      "Automation governance"
    ],

    visual: {
      type: "architecture",
      accent: "violet",
      icon: "network"
    },

    links: {},

    featured: true,

    visible: true
  },

  /*
   * ==========================================================
   * PROJECT 04
   * ==========================================================
   *
   * GenAI project/learning track.
   *
   * This is deliberately classified as a learning/concept
   * project rather than claiming production experience.
   */

  {
    id: "genai-automation-lab",

    title: "GenAI + Automation Lab",

    shortTitle: "GenAI Automation",

    category: ["genai", "ai", "automation"],

    status: "learning",

    year: "2026",

    description:
      "An evolving learning and experimentation track exploring how Generative AI can extend traditional RPA and intelligent automation capabilities.",

    challenge:
      "Traditional automation is strongest when processes are structured and deterministic, while modern business processes increasingly involve unstructured information and natural-language interactions.",

    solution:
      "Exploring LLM-based workflows, LangChain, retrieval techniques and AI-agent patterns that can complement deterministic RPA automation.",

    outcome:
      "Building practical knowledge around the convergence of RPA, LLM applications and intelligent automation.",

    technologies: [
      "Generative AI",
      "LangChain",
      "LLMs",
      "AI Agents",
      "RAG",
      "RPA"
    ],

    capabilities: [
      "LLM application development",
      "Prompt engineering",
      "Agent workflows",
      "Retrieval-Augmented Generation",
      "AI + RPA integration"
    ],

    visual: {
      type: "ai-network",
      accent: "violet",
      icon: "brain"
    },

    links: {},

    featured: true,

    visible: true
  },

  /*
   * ==========================================================
   * PROJECT 05
   * ==========================================================
   */

  {
    id: "api-integration-automation",

    title: "API-Driven Automation",

    shortTitle: "API Automation",

    category: ["integration", "automation"],

    status: "completed",

    year: "2023",

    description:
      "Automation architecture using APIs and system integrations to reduce unnecessary user-interface dependency and improve process reliability.",

    challenge:
      "UI-only automation can become fragile when applications change or when large volumes of data need to be processed.",

    solution:
      "Applied API and integration-oriented patterns where appropriate, allowing automation workflows to communicate with enterprise systems through structured interfaces.",

    outcome:
      "Improved the architectural flexibility of automation solutions and reduced unnecessary dependency on repetitive UI interactions.",

    technologies: [
      "REST APIs",
      "API Integration",
      "RPA",
      "Automation",
      "Enterprise Applications"
    ],

    capabilities: [
      "API integration",
      "Data exchange",
      "Automation orchestration",
      "System integration",
      "Process optimization"
    ],

    visual: {
      type: "data-flow",
      accent: "green",
      icon: "plug"
    },

    links: {},

    featured: false,

    visible: true
  },

  /*
   * ==========================================================
   * PROJECT 06
   * ==========================================================
   */

  {
    id: "automation-process-discovery",

    title: "Automation Process Discovery",

    shortTitle: "Process Discovery",

    category: ["automation", "rpa"],

    status: "completed",

    year: "2022",

    description:
      "Process analysis methodology for identifying repetitive, rule-based and automation-ready business activities.",

    challenge:
      "Not every process is a good candidate for automation. Automating the wrong process can create additional complexity instead of value.",

    solution:
      "Applied process analysis to identify repetitive activities, decision points, system interactions, exception scenarios and opportunities for automation.",

    outcome:
      "Created a structured foundation for selecting automation candidates and prioritizing implementation opportunities.",

    technologies: [
      "Process Analysis",
      "RPA",
      "Business Analysis",
      "Process Optimization"
    ],

    capabilities: [
      "Process discovery",
      "Automation assessment",
      "Requirement analysis",
      "Process mapping",
      "Opportunity identification"
    ],

    visual: {
      type: "workflow",
      accent: "orange",
      icon: "search"
    },

    links: {},

    featured: false,

    visible: true
  }
];

/**
 * ============================================================
 * PROJECT HELPERS
 * ============================================================
 */

/**
 * Return projects marked as featured.
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(
    (project) =>
      project.visible && project.featured
  );
}

/**
 * Return all publicly visible projects.
 */
export function getVisibleProjects(): Project[] {
  return projects.filter(
    (project) => project.visible
  );
}

/**
 * Find a project by its unique ID.
 */
export function getProjectById(
  id: string
): Project | undefined {
  return projects.find(
    (project) => project.id === id
  );
}

/**
 * Filter projects by category.
 */
export function getProjectsByCategory(
  category: ProjectCategory
): Project[] {
  return projects.filter(
    (project) =>
      project.visible &&
      project.category.includes(category)
  );
}

/**
 * Return all projects associated with a technology.
 */
export function getProjectsByTechnology(
  technology: string
): Project[] {
  const searchTerm = technology.toLowerCase();

  return projects.filter((project) =>
    project.visible &&
    project.technologies.some(
      (item) =>
        item.toLowerCase() === searchTerm
    )
  );
}

/**
 * Return the categories currently used by visible projects.
 *
 * This will later allow the project filter UI to generate
 * itself automatically instead of hard-coding categories.
 */
export function getProjectCategories(): ProjectCategory[] {
  const categories = new Set<ProjectCategory>();

  projects
    .filter((project) => project.visible)
    .forEach((project) => {
      project.category.forEach((category) =>
        categories.add(category)
      );
    });

  return Array.from(categories);
}
