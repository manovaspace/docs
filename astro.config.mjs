// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
	site: "https://manovaspace.github.io",
	base: "/docs",
	integrations: [
		starlight({
			title: "manovaspace docs",
			tagline: "MIT open commons — @manovaspace/* on npm",
			editLink: {
				baseUrl: "https://github.com/manovaspace/docs/edit/main/",
			},
			social: [
				{
					icon: "github",
					label: "GitHub org",
					href: "https://github.com/manovaspace",
				},
				{
					icon: "external",
					label: "npm",
					href: "https://www.npmjs.com/org/manovaspace",
				},
			],
			customCss: ["./src/styles/custom.css"],
			sidebar: [
				{ label: "Home", slug: "index" },
				{
					label: "Utilities",
					items: [
						{ label: "Getting started", slug: "utilities/getting-started" },
						{ label: "tsconfig", slug: "utilities/packages/tsconfig" },
						{ label: "markdown", slug: "utilities/packages/markdown" },
						{ label: "pwa", slug: "utilities/packages/pwa" },
						{
							label: "observability",
							slug: "utilities/packages/observability",
						},
					],
				},
				{
					label: "Design system",
					items: [
						{
							label: "Getting started",
							slug: "design-system/getting-started",
						},
						{ label: "Storybook", slug: "design-system/storybook" },
						{ label: "tokens", slug: "design-system/packages/tokens" },
						{ label: "ui", slug: "design-system/packages/ui" },
						{ label: "devtools", slug: "design-system/packages/devtools" },
					],
				},
				{ label: "Contributing", slug: "contributing" },
			],
		}),
	],
});
