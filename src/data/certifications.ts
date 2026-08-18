/**
 * ============================================================
 * CERTIFICATIONS DATA
 * ============================================================
 *
 * Central source of truth for professional certifications.
 *
 * Change certification information here instead of editing
 * individual page components.
 *
 * ============================================================
 */

export type CertificationAccent =
  | "cyan"
  | "violet"
  | "blue"
  | "green";


export interface Certification {
  name: string;

  issuer: string;

  issueDate?: string;

  expirationDate?: string;

  credentialId?: string;

  credentialUrl?: string;

  description?: string;

  skills?: string[];

  featured?: boolean;

  accent?: CertificationAccent;

  order?: number;
}


/**
 * ============================================================
 * CERTIFICATIONS
 * ============================================================
 *
 * IMPORTANT:
 *
 * Replace the placeholder entry below with your actual
 * certifications from your resume and verified records.
 *
 * Do not invent certification names, IDs or dates.
 *
 * ============================================================
 */

export const certifications:
  Certification[] = [

  {
    name:
      "Certification Name",

    issuer:
      "Issuing Organization",

    issueDate:
      "YYYY",

    expirationDate:
      "",

    credentialId:
      "",

    credentialUrl:
      "",

    description:
      "Replace this placeholder with a concise description of the certification.",

    skills: [
      "Relevant Skill",
      "Relevant Technology"
    ],

    featured:
      true,

    accent:
      "cyan",

    order:
      1
  }

];


/**
 * ============================================================
 * SORTED CERTIFICATIONS
 * ============================================================
 */

export const sortedCertifications =
  [...certifications].sort(
    (a, b) =>
      (a.order ?? 999) -
      (b.order ?? 999)
  );


/**
 * ============================================================
 * FEATURED CERTIFICATIONS
 * ============================================================
 */

export const featuredCertifications =
  sortedCertifications.filter(
    (certification) =>
      certification.featured === true
  );


/**
 * ============================================================
 * CERTIFICATION HELPERS
 * ============================================================
 */

/**
 * Find certifications issued by an organization.
 */
export function getCertificationsByIssuer(
  issuer: string
): Certification[] {

  const search =
    issuer.toLowerCase();

  return sortedCertifications.filter(
    (certification) =>
      certification.issuer
        .toLowerCase()
        .includes(search)
  );
}


/**
 * Find certifications containing a skill.
 */
export function getCertificationsBySkill(
  skill: string
): Certification[] {

  const search =
    skill.toLowerCase();

  return sortedCertifications.filter(
    (certification) =>
      certification.skills?.some(
        (item) =>
          item
            .toLowerCase()
            .includes(search)
      ) ?? false
  );
}


/**
 * Find a certification by name.
 */
export function getCertificationByName(
  name: string
): Certification | undefined {

  return sortedCertifications.find(
    (certification) =>
      certification.name === name
  );
}


/**
 * Return certifications that have a credential URL.
 */
export function getVerifiableCertifications():
  Certification[] {

  return sortedCertifications.filter(
    (certification) =>
      Boolean(
        certification.credentialUrl
      )
  );
}


/**
 * Return all unique certification issuers.
 */
export function getCertificationIssuers():
  string[] {

  return [
    ...new Set(
      sortedCertifications.map(
        (certification) =>
          certification.issuer
      )
    )
  ];
}
