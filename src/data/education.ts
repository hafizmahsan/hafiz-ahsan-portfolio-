/**
 * ============================================================
 * EDUCATION DATA
 * ============================================================
 *
 * Central source of truth for academic background.
 *
 * Change education information here rather than modifying
 * individual page components.
 *
 * ============================================================
 */

export type EducationAccent =
  | "cyan"
  | "violet"
  | "blue"
  | "green";


export interface Education {
  institution: string;

  degree: string;

  field?: string;

  startDate?: string;

  endDate?: string;

  current?: boolean;

  location?: string;

  description?: string;

  coursework?: string[];

  achievements?: string[];

  technologies?: string[];

  institutionUrl?: string;

  featured?: boolean;

  accent?: EducationAccent;

  order?: number;
}


/**
 * ============================================================
 * EDUCATION
 * ============================================================
 *
 * IMPORTANT:
 *
 * Replace the placeholder values below with the verified
 * information from your actual resume/academic records.
 *
 * Do not invent degrees, dates, grades or achievements.
 *
 * ============================================================
 */

export const education: Education[] = [

  {
    institution:
      "University / Institution Name",

    degree:
      "Degree Name",

    field:
      "Field of Study",

    startDate:
      "YYYY",

    endDate:
      "YYYY",

    current:
      false,

    location:
      "",

    description:
      "Replace this placeholder with a concise description of the academic program and its relevance to your professional work.",

    coursework: [
      "Relevant Subject",
      "Relevant Subject",
      "Relevant Subject"
    ],

    achievements: [
      "Replace with a verified academic achievement if applicable."
    ],

    technologies: [
      "Technology",
      "Technology"
    ],

    institutionUrl:
      "",

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
 * SORTED EDUCATION
 * ============================================================
 */

export const sortedEducation =
  [...education].sort(
    (a, b) =>
      (a.order ?? 999) -
      (b.order ?? 999)
  );


/**
 * ============================================================
 * FEATURED EDUCATION
 * ============================================================
 */

export const featuredEducation =
  sortedEducation.filter(
    (item) =>
      item.featured === true
  );


/**
 * ============================================================
 * EDUCATION HELPERS
 * ============================================================
 */

/**
 * Find education entries by institution.
 */
export function getEducationByInstitution(
  institution: string
): Education[] {

  const search =
    institution.toLowerCase();

  return sortedEducation.filter(
    (item) =>
      item.institution
        .toLowerCase()
        .includes(search)
  );
}


/**
 * Find education entries by degree.
 */
export function getEducationByDegree(
  degree: string
): Education[] {

  const search =
    degree.toLowerCase();

  return sortedEducation.filter(
    (item) =>
      item.degree
        .toLowerCase()
        .includes(search)
  );
}


/**
 * Find education entries by field.
 */
export function getEducationByField(
  field: string
): Education[] {

  const search =
    field.toLowerCase();

  return sortedEducation.filter(
    (item) =>
      item.field
        ?.toLowerCase()
        .includes(search)
  );
}


/**
 * Return all unique fields of study.
 */
export function getFieldsOfStudy(): string[] {

  return [
    ...new Set(
      sortedEducation
        .map(
          (item) =>
            item.field
        )
        .filter(
          (
            field
          ): field is string =>
            Boolean(field)
        )
    )
  ];
}


/**
 * Return all technologies associated with education.
 */
export function getEducationTechnologies():
  string[] {

  return [
    ...new Set(
      sortedEducation.flatMap(
        (item) =>
          item.technologies ?? []
      )
    )
  ];
}
