// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://li-so.github.io",
  base: "/Starlight-FOP",
  trailingSlash: "never",
  integrations: [
    starlight({
      title: "Foundations of Programming",
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      social: [
        {
          icon: "open-book",
          label: "Canvas",
          href: "https://ju.instructure.com/",
        },
        {
          icon: "question",
          label: "Padlet",
          href: "https://padlet.com/padnanometer174/feedback-wall-fop-2026-s024pgyq67za8k2u6dev",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            {
              label: "Introduction",
              slug: "start-here/introduction",
            },
            {
              label: "Installation",
              slug: "start-here/installation",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.

            // All the chapter entries
            {
              label: "Variables & Functions",
              slug: "guides/variables-functions",
            },
          ],
        },
      ],
    }),
    mdx(),
  ],
});
