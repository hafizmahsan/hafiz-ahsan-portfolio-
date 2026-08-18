/**
 * ============================================================
 * SKILLS DATA
 * ============================================================
 *
 * This file controls the technology ecosystem displayed on
 * the Skills section.
 *
 * EDITING GUIDE
 * ------------------------------------------------------------
 * - Add a skill by adding another object to `items`.
 * - Remove a skill by deleting its object.
 * - Change the order by moving the object.
 * - Set `featured: true` for core technologies.
 * - Set `learning: true` for technologies currently being
 *   explored or developed.
 *
 * ============================================================
 */

export interface SkillItem {
  name: string;
  featured?: boolean;
  learning?: boolean;
}


export interface SkillGroup {
  category: string;
  description?: string;
  items: SkillItem[];
}


/**
 * ============================================================
 * TECHNOLOGY ECOSYSTEM
 * ============================================================
 */

export const skills: SkillGroup[] = [

  {
    category: "RPA & Automation",
    description:
      "Core professional specialization in enterprise robotic process automation and digital workflows.",

    items: [
      {
        name: "RPA",
        featured: true,
      },
      {
        name: "Process Automation",
        featured: true,
      },
      {
        name: "Workflow Automation",
        featured: true,
      },
      {
        name: "Process Analysis",
        featured: true,
      },
      {
        name: "Automation Design",
        featured: true,
      },
      {
        name: "Bot Development",
        featured: true,
      },
      {
        name: "Enterprise Automation",
        featured: true,
      },
    ],
  },


  {
    category: "Solution Architecture",
    description:
      "Designing scalable automation solutions and translating business requirements into technical architectures.",

    items: [
      {
        name: "Solution Architecture",
        featured: true,
      },
      {
        name: "Technical Design",
        featured: true,
      },
      {
        name: "Requirements Analysis",
        featured: true,
      },
      {
        name: "Process Design",
        featured: true,
      },
      {
        name: "Integration Architecture",
        featured: true,
      },
      {
        name: "Enterprise Solutions",
      },
    ],
  },


  {
    category: "Enterprise Integration",
    description:
      "Connecting automation platforms with enterprise applications, APIs and business systems.",

    items: [
      {
        name: "REST APIs",
        featured: true,
      },
      {
        name: "API Integration",
        featured: true,
      },
      {
        name: "Web Services",
      },
      {
        name: "System Integration",
        featured: true,
      },
      {
        name: "Enterprise Applications",
      },
      {
        name: "Data Exchange",
      },
    ],
  },


  {
    category: "Development & Engineering",
    description:
      "Software engineering foundations supporting automation, integrations and technical solution delivery.",

    items: [
      {
        name: "Python",
        featured: true,
      },
      {
        name: "JavaScript",
      },
      {
        name: "TypeScript",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "SQL",
      },
      {
        name: "Git",
      },
      {
        name: "GitHub",
      },
    ],
  },


  {
    category: "Intelligent Automation",
    description:
      "Combining traditional automation with emerging AI capabilities.",

    items: [
      {
        name: "Generative AI",
        learning: true,
      },
      {
        name: "LLM Applications",
        learning: true,
      },
      {
        name: "LangChain",
        learning: true,
      },
      {
        name: "AI Agents",
        learning: true,
      },
      {
        name: "Prompt Engineering",
        learning: true,
      },
      {
        name: "Intelligent Workflows",
        learning: true,
      },
    ],
  },


  {
    category: "Professional & Consulting",
    description:
      "The consulting and delivery capabilities required to move automation from idea to production.",

    items: [
      {
        name: "Stakeholder Management",
      },
      {
        name: "Client Consulting",
        featured: true,
      },
      {
        name: "Business Requirements",
        featured: true,
      },
      {
        name: "Solution Delivery",
        featured: true,
      },
      {
        name: "Technical Documentation",
      },
      {
        name: "Production Support",
      },
      {
        name: "Process Optimization",
      },
    ],
  },

];
