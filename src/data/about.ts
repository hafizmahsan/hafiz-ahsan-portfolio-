/**
 * ============================================================
 * ABOUT / PROFESSIONAL PROFILE DATA
 * ============================================================
 *
 * This file contains the editable content for the About
 * section of the portfolio.
 *
 * IMPORTANT
 * ------------------------------------------------------------
 * The visual design lives in:
 *
 *     src/components/About.astro
 *
 * You should normally edit THIS FILE when you want to change
 * your professional profile.
 *
 * ============================================================
 */

export interface AboutProfile {
  identity: string;
  specialization: string;
  experience: string;
  currentFocus: string;
  paragraphs: string[];
}


/**
 * ============================================================
 * PROFESSIONAL PROFILE
 * ============================================================
 */

export const about: AboutProfile = {

  identity:
    "Senior RPA Consultant & Automation Professional",

  specialization:
    "RPA / Enterprise Automation / Solution Architecture",

  experience:
    "6+ years of professional IT experience",

  currentFocus:
    "Intelligent Automation + Generative AI + LLM Applications",

  paragraphs: [

    "I am a technology professional with more than 6 years of experience in IT, specializing in Robotic Process Automation, enterprise automation, solution design and technology consulting.",

    "I started my professional IT journey with Systems Limited in Lahore in 2020 and progressively moved into RPA-focused consulting, client delivery, senior RPA development and solution architecture responsibilities across enterprise environments.",

    "My professional experience includes working with Systems Limited and its subsidiaries Visionet Systems and TechVista Systems, including enterprise client-facing assignments. Since February 2024, I have been working with Tawuniya Insurance as a Senior RPA Consultant through different technology and delivery partners.",

    "My approach combines business-process understanding with technical implementation. I enjoy taking a repetitive or complex business process, understanding the underlying problem and designing an automation solution that is reliable, maintainable and scalable.",

    "I am also expanding my skill set into Generative AI and intelligent automation, currently exploring technologies and concepts around LLM applications, LangChain, AI agents and the convergence of AI with traditional RPA."
  ]
};


/**
 * ============================================================
 * PROFESSIONAL PRINCIPLES
 * ============================================================
 *
 * These cards appear beside the terminal-style profile.
 *
 * Add/remove cards here without modifying the component.
 * ============================================================
 */

export interface AboutPrinciple {
  title: string;
  description: string;
}


export const aboutPrinciples: AboutPrinciple[] = [

  {
    title:
      "Automation Engineering",

    description:
      "Designing practical automation solutions that reduce repetitive work, improve consistency and support scalable business operations."
  },


  {
    title:
      "Systems Thinking",

    description:
      "Looking beyond individual workflows to understand applications, integrations, processes, dependencies and the wider enterprise ecosystem."
  },


  {
    title:
      "Intelligent Automation",

    description:
      "Exploring how Generative AI, LLMs and agentic technologies can complement traditional deterministic RPA and unlock new automation possibilities."
  }

];
