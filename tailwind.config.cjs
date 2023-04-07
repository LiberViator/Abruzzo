/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontSize: {
			sm: "0.875rem",
			base: "1rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "2.5rem",
		},
		extend: {
			colors: {
				blue: "#4E7BBE",
				green: "#3CAD55",
				yellow: "#FBBC15",
				red: "#E94337",
			},
			backgroundImage: {
				hero: "url('/assets/images/hero.jpg')",
			},
		},
	},
	plugins: [],
};
