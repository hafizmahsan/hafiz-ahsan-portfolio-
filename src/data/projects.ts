/**
 * ============================================================
 * PROJECTS DATA
 * ============================================================
 *
 * This file controls everything displayed in the Projects
 * section.
 *
 * EDITING GUIDE
 * ------------------------------------------------------------
 *
 * title
 *   Project name displayed on the portfolio.
 *
 * category
 *   Project classification.
 *
 * subtitle
 *   Short supporting description.
 *
 * description
 *   Main project explanation.
 *
 * highlights
 *   Important capabilities or outcomes.
 *
 * technologies
 *   Technologies / platforms used.
 *
 * featured
 *   Makes the project visually prominent.
 *
 * status
 *   Small status indicator.
 *
 * github
 *   GitHub repository URL.
 *
 * demo
 *   Live project URL.
 *
 * accent
 *   Visual accent colour.
 *
 * code
 *   Short visual identifier.
 *
 * ============================================================
 */

export interface Project {
  title: string;
  category: string;
  subtitle?: string;
  description: string;

  highlights: string[];

  technologies: string[];

  featured?: boolean;

  status?: string;

  github?: string;

  demo?: string;

  accent?: string;

  code?: string;
}


/**
 * ============================================================
 * SELECTED PROJECTS
 * ============================================================
 *
 * Keep the strongest / most relevant project first.
 *
 * Public and personal projects can be expanded later.
 *
 * Client work should only be identified by name when it is
 * publicly safe and appropriate to do so.
 *
 * ============================================================
 */

export const projects: Project[] = [

  {
    title: "Enterprise RPA Automation",
    category: "RPA / ENTERPRISE AUTOMATION",

    subtitle:
      "Business process automation and digital workforce solutions.",

    description:
      "Enterprise automation work focused on transforming repetitive, rule-based business processes into reliable automated workflows. The work spans process understanding, solution design, development, testing, deployment and operational support.",

    highlights: [
      "Business process analysis and automation opportunity identification.",
      "Design and development of enterprise RPA workflows.",
      "Integration of automation with existing business applications.",
      "Production support and continuous improvement."
    ],

    technologies: [
      "RPA",
      "Process Automation",
      "APIs",
      "Enterprise Systems",
      "Workflow Design"
    ],

    featured: true,

    status:
      "ENTERPRISE",

    accent:
      "#22d3ee",

    code:
      "RPA"
  },


  {
    title: "Automation Solution Architecture",
    category: "SOLUTION ARCHITECTURE",

    subtitle:
      "From business requirements to scalable automation architecture.",

    description:
      "Solution architecture work focused on translating business requirements into technical automation solutions, defining integrations, designing workflows and establishing a foundation that can scale across enterprise processes.",

    highlights: [
      "Requirement analysis and technical solution design.",
      "Automation architecture and workflow modelling.",
      "Enterprise application and API integration planning.",
      "Collaboration between business and technical stakeholders."
    ],

    technologies: [
      "Solution Architecture",
      "RPA",
      "APIs",
      "Integration",
      "Process Design"
    ],

    status:
      "ARCHITECTURE",

    accent:
      "#3b82f6",

    code:
      "ARCH"
  },


  {
    title: "Client Automation Delivery",
    category: "CONSULTING / DELIVERY",

    subtitle:
      "Client-focused automation engineering and consulting.",

    description:
      "Consulting and delivery experience across enterprise environments, combining technical implementation with stakeholder communication and business-process understanding.",

    highlights: [
      "Worked with stakeholders to understand automation requirements.",
      "Translated business requirements into technical solutions.",
      "Supported implementation and production delivery.",
      "Contributed to process optimization and automation adoption."
    ],

    technologies: [
      "RPA",
      "Consulting",
      "Requirements",
      "Automation",
      "Solution Delivery"
    ],

    status:
      "CLIENT DELIVERY",

    accent:
      "#8b5cf6",

    code:
      "CONS"
  },


  {
    title: "Enterprise Integration Automation",
    category: "INTEGRATION / APIs",

    subtitle:
      "Connecting automation workflows with enterprise technology.",

    description:
      "Automation solutions that combine robotic workflows with APIs, enterprise applications and data exchange mechanisms to reduce manual interaction and improve process consistency.",

    highlights: [
      "API-driven automation concepts.",
      "Integration between automation workflows and enterprise systems.",
      "Structured data exchange between systems.",
      "Reusable integration-oriented automation patterns."
    ],

    technologies: [
      "REST APIs",
      "RPA",
      "Integration",
      "JSON",
      "Enterprise Applications"
    ],

    status:
      "INTEGRATION",

    accent:
      "#06b6d4",

    code:
      "API"
  },


  {
    title: "Intelligent Automation Lab",
    category: "GENAI / EXPERIMENTAL",

    subtitle:
      "Exploring the convergence of RPA and Generative AI.",

    description:
      "An evolving personal learning and experimentation track exploring how Generative AI, LLM applications, LangChain and agentic workflows can extend traditional automation beyond deterministic rule-based processes.",

    highlights: [
      "Exploring LLM-powered application patterns.",
      "Learning LangChain and modern AI application architectures.",
      "Experimenting with intelligent workflow concepts.",
      "Investigating how AI agents can complement enterprise automation."
    ],

    technologies: [
      "Generative AI",
      "LLMs",
      "LangChain",
      "AI Agents",
      "Python"
    ],

    status:
      "LEARNING",

    accent:
      "#a78bfa",

    code:
      "GENAI"
  },


  {
    title: "Personal Automation Toolkit",
    category: "PERSONAL / ENGINEERING",

    subtitle:
      "Reusable ideas and utilities for automation engineering.",

    description:
      "A collection of personal engineering concepts focused on reusable automation patterns, development utilities, integrations and practical tooling that can accelerate repetitive technical tasks.",

    highlights: [
      "Reusable automation concepts.",
      "Developer-oriented utilities and workflows.",
      "API and integration experimentation.",
      "Continuous experimentation with automation technologies."
    ],

    technologies: [
      "Python",
      "APIs",
      "Git",
      "Automation",
      "JavaScript"
    ],

    status:
      "EXPERIMENTAL",

    accent:
      "#38bdf8",

    code:
      "LAB"
  }

];
