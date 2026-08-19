import { defineConfig } from "astro";

export default defineConfig({
  /**
   * ============================================================
   * SITE
   * ============================================================
   *
   * GitHub Pages project-site deployment.
   *
   * Repository:
   *
   *   hafizmahsan/hafiz-ahsan-portfolio-
   *
   * Public site:
   *
   *   https://hafizmahsan.github.io/hafiz-ahsan-portfolio-/
   *
   * ============================================================
   */

  site:
    "https://hafizmahsan.github.io",

  base:
    "/hafiz-ahsan-portfolio-",


  /**
   * ============================================================
   * URL BEHAVIOUR
   * ============================================================
   */

  trailingSlash:
    "always",


  /**
   * ============================================================
   * OUTPUT
   * ============================================================
   *
   * GitHub Pages serves static files.
   */

  output:
    "static",


  /**
   * ============================================================
   * BUILD
   * ============================================================
   */

  vite: {
    build: {
      sourcemap:
        false
    }
  }
});
