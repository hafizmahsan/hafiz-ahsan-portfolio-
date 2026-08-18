import { defineConfig } from "astro";

export default defineConfig({
  /**
   * Temporary production URL for the test repository.
   *
   * When this project is eventually moved to:
   * hafizmahsan/hafizmahsan.github.io
   *
   * this configuration will be updated to the root domain.
   */
  site: "https://hafizmahsan.github.io",

  /**
   * Because this repository is currently:
   *
   * hafizmahsan/hafiz-ahsan-portfolio
   *
   * GitHub Pages serves it under this path.
   */
  base: "/hafiz-ahsan-portfolio",

  /**
   * Keep generated URLs consistent:
   *
   * /about/
   * /experience/
   * /projects/
   */
  trailingSlash: "always",

  /**
   * Use Astro's static output.
   *
   * This is ideal for GitHub Pages and gives us:
   * - fast loading
   * - excellent SEO
   * - CDN-friendly files
   * - no server required
   */
  output: "static",

  /**
   * Keep source maps available during development/build
   * for easier debugging while we build the portfolio.
   */
  vite: {
    build: {
      sourcemap: false
    }
  }
});
