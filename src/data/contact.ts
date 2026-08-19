/**
 * ============================================================
 * CONTACT DATA
 * ============================================================
 *
 * Central source of truth for all professional contact
 * information.
 *
 * Change your contact details here instead of editing
 * individual components.
 *
 * ============================================================
 */

export type ContactAccent =
  | "cyan"
  | "violet"
  | "blue"
  | "green";


export interface ContactLink {
  label: string;

  value: string;

  href: string;

  icon:
    | "email"
    | "linkedin"
    | "github"
    | "phone"
    | "location"
    | "resume";

  description?: string;

  external?: boolean;

  accent?: ContactAccent;

  featured?: boolean;

  enabled?: boolean;
}


export interface ContactConfig {
  eyebrow: string;

  title: string;

  description: string;

  availability: string;

  availabilityDescription: string;

  location: string;

  responseTime: string;

  links: ContactLink[];
}


/**
 * ============================================================
 * PRIMARY CONTACT INFORMATION
 * ============================================================
 */

export const contactInfo = {

  email:
    "your.email@example.com",

  phone:
    "",

  location:
    "Saudi Arabia",

  availability:
    "OPEN TO OPPORTUNITIES",

  availabilityDescription:
    "Available for selected automation, software engineering and intelligent systems opportunities.",

  responseTime:
    "WITHIN 1–2 BUSINESS DAYS",

  linkedin:
    "https://www.linkedin.com/in/your-profile",

  github:
    "https://github.com/hafizmahsan",

  resume:
    "/resume.pdf"

};


/**
 * ============================================================
 * CONTACT CONFIGURATION
 * ============================================================
 */

export const contact: ContactConfig = {

  eyebrow:
    "CONTACT",

  title:
    "Let's build something useful.",

  description:
    "Have a project, workflow, or technical problem worth exploring? I'd be happy to hear about it.",

  availability:
    contactInfo.availability,

  availabilityDescription:
    contactInfo.availabilityDescription,

  location:
    contactInfo.location,

  responseTime:
    contactInfo.responseTime,

  links: [

    {
      label:
        "EMAIL",

      value:
        contactInfo.email,

      href:
        `mailto:${contactInfo.email}`,

      icon:
        "email",

      description:
        "Direct professional contact",

      accent:
        "cyan",

      featured:
        true,

      enabled:
        true
    },


    {
      label:
        "LINKEDIN",

      value:
        "Professional Profile",

      href:
        contactInfo.linkedin,

      icon:
        "linkedin",

      description:
        "Professional network",

      external:
        true,

      accent:
        "blue",

      enabled:
        true
    },


    {
      label:
        "GITHUB",

      value:
        "Projects & Open Source",

      href:
        contactInfo.github,

      icon:
        "github",

      description:
        "Code and portfolio projects",

      external:
        true,

      accent:
        "violet",

      enabled:
        true
    },


    {
      label:
        "LOCATION",

      value:
        contactInfo.location,

      href:
        "#contact",

      icon:
        "location",

      accent:
        "green",

      enabled:
        true
    },


    {
      label:
        "RESUME / CV",

      value:
        "Download Resume",

      href:
        contactInfo.resume,

      icon:
        "resume",

      accent:
        "cyan",

      enabled:
        true
    }

  ].filter(
    (item) =>
      item.enabled !== false
  )

};


/**
 * ============================================================
 * CONTACT ITEMS
 * ============================================================
 *
 * Compatibility export for components that consume the
 * simpler contact-item collection.
 *
 * ============================================================
 */

export const contactItems: ContactLink[] =
  contact.links;


/**
 * ============================================================
 * ENABLED CONTACT ITEMS
 * ============================================================
 */

export const enabledContactItems =
  contactItems.filter(
    (contactItem) =>
      contactItem.enabled !== false
  );


/**
 * ============================================================
 * HELPER
 * ============================================================
 *
 * Find a contact item by its label.
 * ============================================================
 */

export function getContactItem(
  label: string
): ContactLink | undefined {

  return contactItems.find(
    (contactItem) =>
      contactItem.label === label
  );

}
