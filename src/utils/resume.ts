/**
 * ============================================================
 * RESUME / CV RESOLVER
 * ============================================================
 *
 * PURPOSE
 * ------------------------------------------------------------
 * Finds the resume PDF inside the source GitHub repository.
 *
 * This intentionally does NOT depend on a hardcoded filename.
 *
 * Therefore, if the repository contains:
 *
 *     Hafiz_Ahsan_Resume.pdf
 *
 * and later you replace it with:
 *
 *     Hafiz_Ahsan_CV_2027.pdf
 *
 * the website can discover the new PDF during the next build.
 *
 * SOURCE REPOSITORY
 * ------------------------------------------------------------
 * github.com/hafizmahsan/hafiz-ahsan-portfolio
 *
 * IMPORTANT
 * ------------------------------------------------------------
 * This function is intended to run during the Astro build.
 * Do not call it from browser/client-side JavaScript.
 * ============================================================
 */


const GITHUB_OWNER =
  "hafizmahsan";


const GITHUB_REPOSITORY =
  "hafiz-ahsan-portfolio";


const GITHUB_BRANCH =
  "main";


const GITHUB_API_VERSION =
  "2026-03-10";


const GITHUB_API_BASE =
  "https://api.github.com";


/**
 * ============================================================
 * TYPES
 * ============================================================
 */

export interface ResumeFile {

  /**
   * Filename only.
   *
   * Example:
   *
   *     Hafiz_Ahsan_Resume.pdf
   */
  name: string;


  /**
   * Full path inside the repository.
   *
   * Example:
   *
   *     documents/Hafiz_Ahsan_Resume.pdf
   */
  path: string;


  /**
   * Public URL that can be used by the website.
   */
  url: string;


  /**
   * Relative repository path.
   */
  repositoryPath: string;
}


/**
 * ============================================================
 * GITHUB TREE RESPONSE
 * ============================================================
 */

interface GitHubTreeItem {

  path: string;

  mode: string;

  type: string;

  sha: string;

  size?: number;

  url: string;
}


interface GitHubTreeResponse {

  sha: string;

  tree: GitHubTreeItem[];

  truncated: boolean;
}


/**
 * ============================================================
 * RESUME NAME PRIORITY
 * ============================================================
 *
 * If multiple PDFs exist, files whose names strongly indicate
 * they are resumes receive a higher priority.
 *
 * This lets the repository contain other PDFs without blindly
 * selecting the first PDF found.
 * ============================================================
 */

const RESUME_KEYWORDS = [

  "resume",

  "cv",

  "curriculum",

  "hafiz",

  "ahsan",

  "profile"

];


/**
 * ============================================================
 * NORMALIZE FILE NAME
 * ============================================================
 */

function normalizeFileName(
  fileName: string
): string {

  return fileName
    .toLowerCase()
    .replace(/[_\-\s]+/g, " ")
    .trim();

}


/**
 * ============================================================
 * SCORE RESUME CANDIDATE
 * ============================================================
 *
 * Higher score = stronger resume candidate.
 * ============================================================
 */

function scoreResumeCandidate(
  path: string
): number {

  const fileName =
    path
      .split("/")
      .pop()
      ?.toLowerCase() ?? "";


  const normalized =
    normalizeFileName(fileName);


  let score =
    0;


  /**
   * Strongest indicators.
   */

  if (
    normalized.includes("resume")
  ) {

    score += 100;

  }


  if (
    normalized.includes("cv")
  ) {

    score += 90;

  }


  if (
    normalized.includes("curriculum")
  ) {

    score += 80;

  }


  /**
   * Personal-name indicators.
   */

  if (
    normalized.includes("hafiz")
  ) {

    score += 25;

  }


  if (
    normalized.includes("ahsan")
  ) {

    score += 25;

  }


  /**
   * Profile-related files are possible candidates,
   * but should rank below an explicitly named resume.
   */

  if (
    normalized.includes("profile")
  ) {

    score += 15;

  }


  /**
   * Prefer PDFs located in conventional resume folders.
   */

  const lowerPath =
    path.toLowerCase();


  if (
    lowerPath.includes("/resume/")
  ) {

    score += 30;

  }


  if (
    lowerPath.includes("/cv/")
  ) {

    score += 30;

  }


  if (
    lowerPath.includes("/documents/")
  ) {

    score += 10;

  }


  return score;

}


/**
 * ============================================================
 * BUILD PUBLIC RAW URL
 * ============================================================
 */

function buildRawGitHubUrl(
  path: string
): string {

  const encodedPath =
    path
      .split("/")
      .map(
        (segment) =>
          encodeURIComponent(segment)
      )
      .join("/");


  return (
    `https://raw.githubusercontent.com/` +
    `${GITHUB_OWNER}/` +
    `${GITHUB_REPOSITORY}/` +
    `${GITHUB_BRANCH}/` +
    `${encodedPath}`
  );

}


/**
 * ============================================================
 * FETCH REPOSITORY TREE
 * ============================================================
 */

async function fetchRepositoryTree():
  Promise<GitHubTreeResponse> {

  const endpoint =
    `${GITHUB_API_BASE}/repos/` +
    `${GITHUB_OWNER}/` +
    `${GITHUB_REPOSITORY}/git/trees/` +
    `${GITHUB_BRANCH}?recursive=1`;


  const response =
    await fetch(
      endpoint,
      {
        headers: {
          Accept:
            "application/vnd.github+json",

          "X-GitHub-Api-Version":
            GITHUB_API_VERSION
        }
      }
    );


  if (
    !response.ok
  ) {

    throw new Error(
      `Unable to inspect the resume repository. ` +
      `GitHub API returned ${response.status}.`
    );

  }


  return (
    response.json()
  ) as Promise<GitHubTreeResponse>;

}


/**
 * ============================================================
 * FIND RESUME
 * ============================================================
 */

export async function findResume():
  Promise<ResumeFile | null> {

  try {

    const repository =
      await fetchRepositoryTree();


    /**
     * Find all PDF files.
     */

    const pdfFiles =
      repository.tree
        .filter(
          (item) =>
            item.type === "blob" &&
            item.path
              .toLowerCase()
              .endsWith(".pdf")
        );


    /**
     * No PDF means no resume.
     */

    if (
      pdfFiles.length === 0
    ) {

      console.warn(
        "[resume] No PDF file found in the source repository."
      );


      return null;

    }


    /**
     * Score each PDF.
     */

    const rankedFiles =
      pdfFiles
        .map(
          (file) => ({
            file,

            score:
              scoreResumeCandidate(
                file.path
              )
          })
        )
        .sort(
          (a, b) =>
            b.score - a.score
        );


    const selected =
      rankedFiles[0]?.file;


    if (
      !selected
    ) {

      return null;

    }


    const fileName =
      selected.path
        .split("/")
        .pop() ??
      selected.path;


    const resume: ResumeFile = {

      name:
        fileName,

      path:
        selected.path,

      repositoryPath:
        selected.path,

      url:
        buildRawGitHubUrl(
          selected.path
        )

    };


    console.info(
      `[resume] Selected: ${resume.path}`
    );


    return resume;

  } catch (error) {

    console.error(
      "[resume] Failed to resolve resume:",
      error
    );


    return null;

  }

}


/**
 * ============================================================
 * FALLBACK RESUME URL
 * ============================================================
 *
 * This is intentionally the repository itself rather than a
 * guessed PDF filename.
 *
 * If GitHub's API is temporarily unavailable, the UI can still
 * send the visitor to the repository where the current resume
 * can be found.
 * ============================================================
 */

export function getResumeRepositoryUrl():
  string {

  return (
    `https://github.com/` +
    `${GITHUB_OWNER}/` +
    `${GITHUB_REPOSITORY}`
  );

}
