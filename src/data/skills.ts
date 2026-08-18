/**
 * ============================================================
 * SKILLS & TECHNOLOGY DATA
 * ============================================================
 *
 * This file controls the technologies, professional skills
 * and learning areas displayed throughout the portfolio.
 *
 * IMPORTANT:
 * The visual website does NOT hard-code these skills.
 *
 * The 3D technology constellation, skill cards, filters and
 * animated visualizations will consume this data.
 *
 * To add a skill:
 *
 * 1. Copy an existing object.
 * 2. Give it a unique ID.
 * 3. Add the skill name.
 * 4. Select a category.
 * 5. Add a proficiency level appropriate to your experience.
 *
 * ============================================================
 */

export type SkillCategory =
  | "rpa"
  | "automation"
  | "architecture"
  | "development"
  | "integration"
  | "ai"
  | "genai"
  | "data"
  | "tools"
  | "professional";

export type SkillLevel =
  | "expert"
  | "advanced"
  | "working"
  | "learning";

export type Skill = {
  id: string;

  name: string;

  category: SkillCategory;

  level: SkillLevel;

  /**
   * Numeric value used by visualizations.
   *
   * This is NOT intended to represent an objectively
   * measured percentage of expertise.
   *
   * It is simply a visual weighting for the portfolio UI.
   */
  visualWeight: number;

  description: string;

  icon: string;

  featured: boolean;

  /**
   * Used by the animated technology constellation.
   */
  node: {
    size: "small" | "medium" | "large";

    color:
      | "cyan"
      | "blue"
      | "violet"
      | "green"
      | "orange"
      | "white";
  };
};

/**
 * ============================================================
 * SKILLS
 * ============================================================
 */

export const skills: Skill[] = [
  /*
   * ==========================================================
   * RPA
   * ==========================================================
   */

  {
    id: "rpa",
    name: "Robotic Process Automation",
    category: "rpa",
    level: "expert",
    visualWeight: 100,
    description:
      "Core professional specialization focused on designing, developing and supporting enterprise RPA solutions.",
    icon: "bot",
    featured: true,
    node: {
      size: "large",
      color: "cyan"
    }
  },

  {
    id: "rpa-development",
    name: "RPA Development",
    category: "rpa",
    level: "expert",
    visualWeight: 95,
    description:
      "Development of automation workflows for structured and rule-driven business processes.",
    icon: "code",
    featured: true,
    node: {
      size: "large",
      color: "cyan"
    }
  },

  {
    id: "process-automation",
    name: "Process Automation",
    category: "automation",
    level: "expert",
    visualWeight: 95,
    description:
      "Identifying, designing and implementing automation opportunities across business processes.",
    icon: "workflow",
    featured: true,
    node: {
      size: "large",
      color: "blue"
    }
  },

  {
    id: "intelligent-automation",
    name: "Intelligent Automation",
    category: "automation",
    level: "advanced",
    visualWeight: 88,
    description:
      "Combining automation, integrations, data and AI capabilities into intelligent business workflows.",
    icon: "sparkles",
    featured: true,
    node: {
      size: "large",
      color: "violet"
    }
  },

  /*
   * ==========================================================
   * ARCHITECTURE
   * ==========================================================
   */

  {
    id: "solution-architecture",
    name: "Solution Architecture",
    category: "architecture",
    level: "advanced",
    visualWeight: 90,
    description:
      "Designing scalable automation solutions and translating business requirements into technical architectures.",
    icon: "network",
    featured: true,
    node: {
      size: "large",
      color: "violet"
    }
  },

  {
    id: "automation-architecture",
    name: "Automation Architecture",
    category: "architecture",
    level: "advanced",
    visualWeight: 90,
    description:
      "Designing maintainable automation environments with appropriate orchestration, integration and operational patterns.",
    icon: "layers",
    featured: true,
    node: {
      size: "medium",
      color: "blue"
    }
  },

  /*
   * ==========================================================
   * INTEGRATION
   * ==========================================================
   */

  {
    id: "api-integration",
    name: "API Integration",
    category: "integration",
    level: "advanced",
    visualWeight: 82,
    description:
      "Using APIs and system integrations to connect automation workflows with enterprise applications.",
    icon: "plug",
    featured: true,
    node: {
      size: "medium",
      color: "green"
    }
  },

  {
    id: "system-integration",
    name: "System Integration",
    category: "integration",
    level: "advanced",
    visualWeight: 80,
    description:
      "Connecting business applications and automation components into cohesive workflows.",
    icon: "share-2",
    featured: true,
    node: {
      size: "medium",
      color: "green"
    }
  },

  /*
   * ==========================================================
   * SOFTWARE / DEVELOPMENT
   * ==========================================================
   */

  {
    id: "software-development",
    name: "Software Development",
    category: "development",
    level: "advanced",
    visualWeight: 82,
    description:
      "Professional software development experience supporting automation and enterprise technology solutions.",
    icon: "code-2",
    featured: true,
    node: {
      size: "medium",
      color: "blue"
    }
  },

  {
    id: "web-development",
    name: "Web Development",
    category: "development",
    level: "working",
    visualWeight: 65,
    description:
      "Web development knowledge used for interfaces, portfolio engineering and technology experimentation.",
    icon: "globe",
    featured: false,
    node: {
      size: "small",
      color: "blue"
    }
  },

  /*
   * ==========================================================
   * GENERATIVE AI
   * ==========================================================
   *
   * These are deliberately marked as "learning" where they
   * represent your current development/learning focus rather
   * than established long-term professional experience.
   */

  {
    id: "generative-ai",
    name: "Generative AI",
    category: "genai",
    level: "learning",
    visualWeight: 70,
    description:
      "Current learning and experimentation area focused on applying Generative AI to automation and enterprise workflows.",
    icon: "brain",
    featured: true,
    node: {
      size: "large",
      color: "violet"
    }
  },

  {
    id: "langchain",
    name: "LangChain",
    category: "genai",
    level: "learning",
    visualWeight: 65,
    description:
      "Learning LangChain for building LLM-powered applications, chains, agents and retrieval-based workflows.",
    icon: "link",
    featured: true,
    node: {
      size: "medium",
      color: "violet"
    }
  },

  {
    id: "llm-applications",
    name: "LLM Applications",
    category: "ai",
    level: "learning",
    visualWeight: 65,
    description:
      "Exploring practical applications of large language models within enterprise automation and productivity workflows.",
    icon: "message-square",
    featured: true,
    node: {
      size: "medium",
      color: "violet"
    }
  },

  {
    id: "ai-agents",
    name: "AI Agents",
    category: "ai",
    level: "learning",
    visualWeight: 60,
    description:
      "Exploring agentic AI patterns and how autonomous reasoning workflows can complement traditional automation.",
    icon: "bot",
    featured: true,
    node: {
      size: "medium",
      color: "violet"
    }
  },

  {
    id: "rag",
    name: "Retrieval-Augmented Generation",
    category: "genai",
    level: "learning",
    visualWeight: 60,
    description:
      "Learning retrieval-based approaches for grounding LLM applications with external knowledge.",
    icon: "database",
    featured: true,
    node: {
      size: "medium",
      color: "violet"
    }
  },

  /*
   * ==========================================================
   * DATA
   * ==========================================================
   */

  {
    id: "data-processing",
    name: "Data Processing",
    category: "data",
    level: "advanced",
    visualWeight: 78,
    description:
      "Working with structured process data as part of automation workflows and enterprise solutions.",
    icon: "database",
    featured: true,
    node: {
      size: "medium",
      color: "green"
    }
  },

  {
    id: "process-analysis",
    name: "Process Analysis",
    category: "automation",
    level: "advanced",
    visualWeight: 85,
    description:
      "Analyzing business processes to identify automation opportunities, bottlenecks and improvement areas.",
    icon: "search",
    featured: true,
    node: {
      size: "medium",
      color: "orange"
    }
  },

  /*
   * ==========================================================
   * PROFESSIONAL / CONSULTING
   * ==========================================================
   */

  {
    id: "business-analysis",
    name: "Business Analysis",
    category: "professional",
    level: "advanced",
    visualWeight: 80,
    description:
      "Understanding business requirements and translating them into practical technology and automation solutions.",
    icon: "briefcase-business",
    featured: true,
    node: {
      size: "medium",
      color: "orange"
    }
  },

  {
    id: "technical-consulting",
    name: "Technical Consulting",
    category: "professional",
    level: "advanced",
    visualWeight: 85,
    description:
      "Client-facing technical consulting across RPA, automation, architecture and enterprise technology environments.",
    icon: "users",
    featured: true,
    node: {
      size: "medium",
      color: "orange"
    }
  },

  {
    id: "solution-design",
    name: "Solution Design",
    category: "architecture",
    level: "advanced",
    visualWeight: 88,
    description:
      "Turning business requirements into practical, scalable and maintainable technology solutions.",
    icon: "pen-tool",
    featured: true,
    node: {
      size: "medium",
      color: "blue"
    }
  }
];

/**
 * ============================================================
 * SKILL HELPERS
 * ============================================================
 */

/**
 * Return featured skills.
 */
export function getFeaturedSkills(): Skill[] {
  return skills.filter(
    (skill) => skill.featured
  );
}

/**
 * Return skills belonging to a category.
 */
export function getSkillsByCategory(
  category: SkillCategory
): Skill[] {
  return skills.filter(
    (skill) => skill.category === category
  );
}

/**
 * Find a skill by ID.
 */
export function getSkillById(
  id: string
): Skill | undefined {
  return skills.find(
    (skill) => skill.id === id
  );
}

/**
 * Return skills currently being learned.
 */
export function getLearningSkills(): Skill[] {
  return skills.filter(
    (skill) => skill.level === "learning"
  );
}

/**
 * Return advanced/expert skills.
 */
export function getCoreSkills(): Skill[] {
  return skills.filter(
    (skill) =>
      skill.level === "expert" ||
      skill.level === "advanced"
  );
}

/**
 * Generate a list of all categories currently used.
 *
 * This allows the future skill-filter UI to generate itself
 * automatically from the data.
 */
export function getSkillCategories(): SkillCategory[] {
  const categories = new Set<SkillCategory>();

  skills.forEach((skill) => {
    categories.add(skill.category);
  });

  return Array.from(categories);
}

/**
 * Get skills for the 3D technology constellation.
 */
export function getTechnologyNodes(): Skill[] {
  return skills.filter(
    (skill) => skill.featured
  );
}
