/**
 * ============================================================
 * PORTFOLIO DATA
 * ============================================================
 *
 * All editable portfolio content lives here.
 *
 * Components should handle presentation.
 * This file should handle content.
 *
 * ============================================================
 */

export const portfolio = {
  person: {
    name: "YOUR NAME",

    role:
      "Software Engineer · Automation · AI",

    email:
      "hello@example.com",

    location:
      "YOUR LOCATION",

    availability:
      "AVAILABLE FOR SELECTED PROJECTS"
  },


  hero: {
    eyebrow:
      "SOFTWARE ENGINEERING · AUTOMATION · AI",

    title:
      "YOUR NAME",

    highlightedTitle:
      "BUILDING USEFUL SYSTEMS.",

    description:
      "I design and build practical software, automation workflows, and intelligent systems that turn complex problems into reliable solutions."
  },


  about: {
    number: "01",

    eyebrow: "ABOUT",

    title:
      "Building useful systems.",

    description:
      "I work at the intersection of software engineering, automation, and AI. My focus is turning repetitive or complex workflows into reliable systems that are easier to operate, maintain, and scale."
  },


  projects: [
    {
      title:
        "YOUR FEATURED PROJECT",

      description:
        "A concise description of the most important project in your portfolio. Explain the problem, what you built, and the result.",

      technologies: [
        "Python",
        "Automation",
        "APIs"
      ],

      href:
        "#contact",

      status:
        "IN PROGRESS" as const,

      featured: true
    },

    {
      title:
        "PROJECT TWO",

      description:
        "A short description of another meaningful project.",

      technologies: [
        "TypeScript",
        "Astro"
      ],

      status:
        "LIVE" as const
    },

    {
      title:
        "PROJECT THREE",

      description:
        "A short description of another system or automation project.",

      technologies: [
        "Python",
        "PostgreSQL"
      ],

      status:
        "ARCHIVED" as const
    }
  ],


  experience: [
    {
      period:
        "2024 — PRESENT",

      title:
        "YOUR CURRENT ROLE",

      organization:
        "YOUR COMPANY",

      description:
        "Describe your current responsibilities, the systems you work on, and the impact you've had.",

      technologies: [
        "Python",
        "Automation",
        "AI"
      ],

      current: true
    },

    {
      period:
        "2022 — 2024",

      title:
        "PREVIOUS ROLE",

      organization:
        "PREVIOUS COMPANY",

      description:
        "Describe the work you did and the systems or products you contributed to.",

      technologies: [
        "Software Engineering",
        "APIs",
        "SQL"
      ]
    }
  ],


  skills: [
    {
      title:
        "LANGUAGES",

      description:
        "Languages I use to build systems.",

      skills: [
        {
          name: "Python",
          level: "CORE"
        },
        {
          name: "TypeScript",
          level: "WORKING"
        },
        {
          name: "SQL",
          level: "CORE"
        }
      ]
    },

    {
      title:
        "AUTOMATION",

      description:
        "Tools and patterns for workflow automation.",

      skills: [
        {
          name: "APIs",
          level: "CORE"
        },
        {
          name: "Webhooks",
          level: "CORE"
        },
        {
          name: "RPA",
          level: "WORKING"
        }
      ]
    },

    {
      title:
        "AI",

      description:
        "Technologies for intelligent workflows.",

      skills: [
        {
          name: "LLM APIs",
          level: "CORE"
        },
        {
          name: "AI Agents",
          level: "WORKING"
        },
        {
          name: "Prompt Engineering",
          level: "CORE"
        }
      ]
    },

    {
      title:
        "INFRASTRUCTURE",

      description:
        "Tools used to ship and operate software.",

      skills: [
        {
          name: "Git",
          level: "CORE"
        },
        {
          name: "Docker",
          level: "CORE"
        },
        {
          name: "Linux",
          level: "WORKING"
        }
      ]
    }
  ],


  contact: {
    number: "05",

    eyebrow:
      "CONTACT",

    title:
      "Let's build something useful.",

    description:
      "Have a project, workflow, or technical problem worth exploring? I'd be happy to hear about it.",

    email:
      "hello@example.com",

    availability:
      "AVAILABLE FOR SELECTED PROJECTS",

    links: [
      {
        label: "GITHUB",

        href:
          "https://github.com/your-profile",

        external: true
      },

      {
        label: "LINKEDIN",

        href:
          "https://www.linkedin.com/in/your-profile/",

        external: true
      }
    ]
  }
} as const;
