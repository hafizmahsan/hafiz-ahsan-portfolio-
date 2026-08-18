/**
 * ============================================================
 * CONTACT DATA
 * ============================================================
 *
 * Editable contact and professional availability information.
 *
 * IMPORTANT
 * ------------------------------------------------------------
 * This file contains CONTENT only.
 *
 * The visual design is handled by:
 *
 *     src/components/Contact.astro
 *
 * If you want to change your contact information later,
 * normally edit this file rather than the component.
 * ============================================================
 */

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: "email" | "linkedin" | "github" | "phone" | "location";
  description?: string;
  external?: boolean;
}


export interface ContactData {
  eyebrow: string;
  title: string;
  description: string;
  availability: string;
  availabilityDescription: string;
  links: ContactLink[];
  responseTime: string;
  location: string;
}


/**
 * ============================================================
 * CONTACT PROFILE
 * ============================================================
 */

export const contact: ContactData = {

  eyebrow:
    "07 / Contact",

  title:
    "Let's automate something meaningful.",

  description:
    "Whether you are looking for an RPA specialist, automation consultant, solution architect or someone exploring the intersection of enterprise automation and Generative AI, I'd be happy to discuss the problem.",

  availability:
    "OPEN TO PROFESSIONAL OPPORTUNITIES",

  availabilityDescription:
    "Available for selected consulting, automation, architecture and technology opportunities.",

  responseTime:
    "Usually responds within 1–2 business days.",

  location:
    "Saudi Arabia",


  /**
   * ----------------------------------------------------------
   * CONTACT CHANNELS
   * ----------------------------------------------------------
   *
   * Replace the placeholder values with your real information.
   *
   * Examples:
   *
   * email:
   * mailto:your@email.com
   *
   * LinkedIn:
   * https://www.linkedin.com/in/your-profile/
   *
   * GitHub:
   * https://github.com/your-username
   *
   * ----------------------------------------------------------
   */

  links: [

    {
      label:
        "Email",

      value:
        "your.email@example.com",

      href:
        "mailto:your.email@example.com",

      icon:
        "email",

      description:
        "Best for professional enquiries."
    },


    {
      label:
        "LinkedIn",

      value:
        "linkedin.com/in/your-profile",

      href:
        "https://www.linkedin.com/",

      icon:
        "linkedin",

      description:
        "Connect professionally.",

      external:
        true
    },


    {
      label:
        "GitHub",

      value:
        "github.com/hafizmahsan",

      href:
        "https://github.com/hafizmahsan",

      icon:
        "github",

      description:
        "Explore projects and technical work.",

      external:
        true
    }

  ]

};
