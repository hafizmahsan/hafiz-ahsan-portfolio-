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

export interface ContactItem {
  label: string;

  value: string;

  href?: string;

  icon?: string;

  external?: boolean;

  accent?: "cyan" | "violet" | "blue" | "green";

  featured?: boolean;

  enabled?: boolean;
}


/**
 * ============================================================
 * PRIMARY CONTACT INFORMATION
 * ============================================================
 *
 * These values can be imported anywhere in the portfolio.
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

  linkedin:
    "https://www.linkedin.com/in/your-profile",

  github:
    "https://github.com/your-profile",

  resume:
    "/resume.pdf"
};


/**
 * ============================================================
 * CONTACT CARDS
 * ============================================================
 *
 * The ContactCard component can consume this collection
 * directly.
 *
 * Set `enabled: false` if you don't want a particular
 * contact method displayed.
 *
 * ============================================================
 */

export const contactItems: ContactItem[] = [
  {
    label:
      "EMAIL",

    value:
      contactInfo.email,

    href:
      `mailto:${contactInfo.email}`,

    icon:
      "@",

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
      "in",

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
      "⌘",

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

    icon:
      "⌖",

    accent:
      "green",

    enabled:
      true
  },


  {
    label:
      "AVAILABILITY",

    value:
      contactInfo.availability,

    icon:
      "◉",

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
      "↓",

    accent:
      "cyan",

    enabled:
      true
  }
];


/**
 * ============================================================
 * ENABLED CONTACT ITEMS
 * ============================================================
 *
 * Automatically removes disabled items.
 * ============================================================
 */

export const enabledContactItems =
  contactItems.filter(
    (contact) =>
      contact.enabled !== false
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
): ContactItem | undefined {
  return contactItems.find(
    (contact) =>
      contact.label === label
  );
}
