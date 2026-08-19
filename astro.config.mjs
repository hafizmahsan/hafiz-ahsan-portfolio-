/**
 * ============================================================
 * ASTRO CONFIGURATION
 * ============================================================
 *
 * Configuration for the Hafiz Ahsan portfolio.
 *
 * Deployment target:
 * GitHub Pages
 *
 * Repository:
 * hafizmahsan/hafiz-ahsan-portfolio-
 *
 * ============================================================
 */

import { defineConfig } from "astro/config";


export default defineConfig({

  /**
   * ==========================================================
   * SITE URL
   * ==========================================================
   *
   * GitHub Pages account URL.
   *
   */

  site:
    "https://hafizmahsan.github.io",


  /**
   * ==========================================================
   * BASE PATH
   * ==========================================================
   *
   * The repository is served from:
   *
   * /hafiz-ahsan-portfolio-/
   *
   */

  base:
    "/hafiz-ahsan-portfolio-",


  /**
   * ==========================================================
   * TRAILING SLASH
   * ==========================================================
   */

  trailingSlash:
    "always",


  /**
   * ==========================================================
   * OUTPUT
   * ==========================================================
   *
   * GitHub Pages serves static files, so use Astro's
   * static output.
   */

  output:
    "static",


  /**
   * ==========================================================
   * VITE
   * ==========================================================
   *
   * Keep source maps disabled for the production deployment.
   */

  vite: {

    build: {

      sourcemap:
        false

    }

  }

});
