// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Foundations of Programming',
			customCss: [
        		// Relative path to your custom CSS file
        		'./src/styles/custom.css',
      		],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Introduction', slug: 'start-here/introduction' },
						{ label: 'Installation', slug: 'start-here/installation' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guide Preface', slug: 'guides/guide-start' },

						// All the chapter entries
						{ label: 'Variables & Functions', slug: 'guides/variables-functions' },
						{ label: 'Conditionals', slug: 'guides/conditionals' },
						{ label: 'Git & Github', slug: 'guides/git-github' },
						{ label: 'Loops', slug: 'guides/loops' },
						{ label: 'Arrays', slug: 'guides/arrays' },
						{ label: 'Object-Oriented Programming', slug: 'guides/oop'},
						{ label: 'Github Pages', slug: 'guides/github-pages' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
		mdx(),
	],
});
