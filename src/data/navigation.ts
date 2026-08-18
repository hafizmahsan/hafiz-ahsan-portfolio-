/**
 * ============================================================
 * NAVIGATION CONFIGURATION
 * ============================================================
 *
 * This file controls the main navigation of the portfolio.
 *
 * The navigation UI will read from this file instead of
 * hard-coding menu items.
 *
 * To change the menu later:
 *
 * - Change `label` to rename an item.
 * - Change `href` to change its destination.
 * - Change `visible` to hide/show an item.
 * - Change `order` to change its position.
 *
 * ============================================================
 */

export type NavigationItem = {
  id: string;

  label: string;

  shortLabel: string;

  href: string;

  /**
   * Used for accessibility and screen readers.
   */
  ariaLabel: string;

  /**
   * Small visual icon identifier.
   */
  icon: string;

  /**
   * Navigation ordering.
   */
  order: number;

  /**
   * Whether the item appears in the main navigation.
   */
  visible: boolean;

  /**
   * Whether this is considered a primary navigation item.
   */
  primary: boolean;

  /**
   * Whether the link points to an internal page/section.
   */
  internal: boolean;
};

/**
 * ============================================================
 * MAIN NAVIGATION
 * ============================================================
 */

export const navigation: NavigationItem[] = [
  /*
   * ----------------------------------------------------------
   * HOME
   * ----------------------------------------------------------
   */

  {
    id: "home",

    label: "Home",

    shortLabel: "Home",

    href: "#home",

    ariaLabel: "Go to homepage",

    icon: "home",

    order: 1,

    visible: true,

    primary: true,

    internal: true
  },

  /*
   * ----------------------------------------------------------
   * ABOUT
   * ----------------------------------------------------------
   */

  {
    id: "about",

    label: "About",

    shortLabel: "About",

    href: "#about",

    ariaLabel: "Learn more about Hafiz Ahsan",

    icon: "user",

    order: 2,

    visible: true,

    primary: true,

    internal: true
  },

  /*
   * ----------------------------------------------------------
   * EXPERIENCE
   * ----------------------------------------------------------
   */

  {
    id: "experience",

    label: "Experience",

    shortLabel: "Experience",

    href: "#experience",

    ariaLabel: "View professional experience",

    icon: "briefcase",

    order: 3,

    visible: true,

    primary: true,

    internal: true
  },

  /*
   * ----------------------------------------------------------
   * PROJECTS
   * ----------------------------------------------------------
   */

  {
    id: "projects",

    label: "Projects",

    shortLabel: "Projects",

    href: "#projects",

    ariaLabel: "Explore portfolio projects",

    icon: "folder-code",

    order: 4,

    visible: true,

    primary: true,

    internal: true
  },

  /*
   * ----------------------------------------------------------
   * SKILLS
   * ----------------------------------------------------------
   */

  {
    id: "skills",

    label: "Skills",

    shortLabel: "Skills",

    href: "#skills",

    ariaLabel: "View technical skills",

    icon: "cpu",

    order: 5,

    visible: true,

    primary: true,

    internal: true
  },

  /*
   * ----------------------------------------------------------
   * AI / LEARNING
   * ----------------------------------------------------------
   *
   * This gives GenAI a visible place in the portfolio without
   * pretending that it is the entirety of the professional
   * background.
   */

  {
    id: "ai",

    label: "AI & Automation",

    shortLabel: "AI",

    href: "#ai",

    ariaLabel: "Explore AI and intelligent automation",

    icon: "brain-circuit",

    order: 6,

    visible: true,

    primary: true,

    internal: true
  },

  /*
   * ----------------------------------------------------------
   * CONTACT
   * ----------------------------------------------------------
   */

  {
    id: "contact",

    label: "Contact",

    shortLabel: "Contact",

    href: "#contact",

    ariaLabel: "Contact Hafiz Ahsan",

    icon: "mail",

    order: 7,

    visible: true,

    primary: true,

    internal: true
  }
];

/**
 * ============================================================
 * NAVIGATION HELPERS
 * ============================================================
 */

/**
 * Return all visible navigation items in their configured
 * order.
 */
export function getNavigation(): NavigationItem[] {
  return navigation
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order);
}

/**
 * Return only primary navigation items.
 */
export function getPrimaryNavigation(): NavigationItem[] {
  return navigation
    .filter(
      (item) =>
        item.visible &&
        item.primary
    )
    .sort((a, b) => a.order - b.order);
}

/**
 * Find a navigation item by ID.
 */
export function getNavigationItem(
  id: string
): NavigationItem | undefined {
  return navigation.find(
    (item) => item.id === id
  );
}

/**
 * ============================================================
 * MOBILE NAVIGATION
 * ============================================================
 *
 * The mobile menu will use the same source data.
 *
 * We do NOT need a second mobile navigation list.
 *
 * This prevents the desktop and mobile menus from becoming
 * inconsistent.
 * ============================================================
 */

export function getMobileNavigation(): NavigationItem[] {
  return getNavigation();
}
