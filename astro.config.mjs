// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: "https://Li-So.github.io",
    base: "/Starlight-FOP",
    integrations: [
        starlight({
            title: "Foundations of Programming",
            customCss: [
                // Relative path to your custom CSS file
                "./src/styles/custom.css",
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
