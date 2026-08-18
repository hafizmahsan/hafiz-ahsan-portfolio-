/**
 * ============================================================
 * NAVIGATION DATA
 * ============================================================
 *
 * Central source of truth for portfolio navigation.
 *
 * Change navigation items here instead of editing the navbar
 * component directly.
 *
 * ============================================================
 */

export type NavigationItemType =
  | "section"
  | "page"
  | "external";


export interface NavigationItem {
  label: string;

  href: string;

  type?: NavigationItemType;

  id?: string;

  external?: boolean;

  enabled?: boolean;

  featured?: boolean;

  order?: number;

  mobileLabel?: string;
}


/**
 * ============================================================
 * PRIMARY NAVIGATION
 * ============================================================
 *
 * These entries correspond to sections on the main portfolio
 * page.
 *
 * `id` should match the corresponding section's HTML id.
 *
 * ============================================================
 */

export const navigationItems: NavigationItem[] = [

  {
    label:
      "HOME",

    mobileLabel:
      "HOME",

    href:
      "#home",

    id:
      "home",

    type:
      "section",

    enabled:
      true,

    order:
      1
  },


  {
    label:
      "ABOUT",

    mobileLabel:
      "ABOUT",

    href:
      "#about",

    id:
      "about",

    type:
      "section",

    enabled:
      true,

    order:
      2
  },


  {
    label:
      "EXPERIENCE",

    mobileLabel:
      "EXPERIENCE",

    href:
      "#experience",

    id:
      "experience",

    type:
      "section",

    enabled:
      true,

    order:
      3
  },


  {
    label:
      "PROJECTS",

    mobileLabel:
      "PROJECTS",

    href:
      "#projects",

    id:
      "projects",

    type:
      "section",

    enabled:
      true,

    featured:
      true,

    order:
      4
  },


  {
    label:
      "SKILLS",

    mobileLabel:
      "SKILLS",

    href:
      "#skills",

    id:
      "skills",

    type:
      "section",

    enabled:
      true,

    order:
      5
  },


  {
    label:
      "CONTACT",

    mobileLabel:
      "CONTACT",

    href:
      "#contact",

    id:
      "contact",

    type:
      "section",

    enabled:
      true,

    order:
      6
  }

];


/**
 * ============================================================
 * RESUME CTA
 * ============================================================
 *
 * Kept separate from the primary navigation because it is a
 * call-to-action rather than a normal navigation item.
 *
 * The actual resume URL will later be connected to the PDF
 * discovered from the repository.
 *
 * ============================================================
 */

export const resumeNavigationItem: NavigationItem = {
  label:
    "RESUME",

  mobileLabel:
    "RESUME / CV",

  href:
    "/resume.pdf",

  type:
    "page",

  enabled:
    true,

  featured:
    true,

  order:
    7
};


/**
 * ============================================================
 * OPTIONAL EXTERNAL LINKS
 * ============================================================
 *
 * Add external navigation links here if needed.
 *
 * They are disabled by default.
 *
 * ============================================================
 */

export const externalNavigationItems:
  NavigationItem[] = [

  {
    label:
      "BLOG",

    mobileLabel:
      "BLOG",

    href:
      "/blog",

    type:
      "page",

    enabled:
      false,

    order:
      8
  },


  {
    label:
      "LINKEDIN",

    mobileLabel:
      "LINKEDIN",

    href:
      "https://www.linkedin.com/in/your-profile",

    type:
      "external",

    external:
      true,

    enabled:
      false,

    order:
      9
  }

];


/**
 * ============================================================
 * ENABLED PRIMARY NAVIGATION
 * ============================================================
 */

export const enabledNavigationItems =
  [...navigationItems]
    .filter(
      (item) =>
        item.enabled !== false
    )
    .sort(
      (a, b) =>
        (a.order ?? 999) -
        (b.order ?? 999)
    );


/**
 * ============================================================
 * ENABLED EXTERNAL / OPTIONAL NAVIGATION
 * ============================================================
 */

export const enabledExternalNavigationItems =
  [...externalNavigationItems]
    .filter(
      (item) =>
        item.enabled !== false
    )
    .sort(
      (a, b) =>
        (a.order ?? 999) -
        (b.order ?? 999)
    );


/**
 * ============================================================
 * ALL ENABLED NAVIGATION
 * ============================================================
 *
 * Useful for mobile menus and navigation systems that need
 * one complete collection.
 * ============================================================
 */

export const allEnabledNavigationItems =
  [
    ...enabledNavigationItems,
    ...enabledExternalNavigationItems
  ].sort(
    (a, b) =>
      (a.order ?? 999) -
      (b.order ?? 999)
  );


/**
 * ============================================================
 * HELPERS
 * ============================================================
 */

/**
 * Find navigation item by its section/page id.
 */
export function getNavigationItem(
  id: string
): NavigationItem | undefined {
  return allEnabledNavigationItems.find(
    (item) =>
      item.id === id
  );
}


/**
 * Return only section-based navigation items.
 */
export function getSectionNavigationItems():
  NavigationItem[] {
  return enabledNavigationItems.filter(
    (item) =>
      item.type === "section"
  );
}


/**
 * Return only featured navigation items.
 */
export function getFeaturedNavigationItems():
  NavigationItem[] {
  return allEnabledNavigationItems.filter(
    (item) =>
      item.featured === true
  );
}
