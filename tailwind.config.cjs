/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,tpl}"],
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
				lightblue: "#e7ecf7",
				green: "#3CAD55",
				yellow: "#FBBC15",
				lightyellow: "#fef3c7",
				"yellow-select": "#fcd44d",
				red: "#E94337",
				lightred: "#fde5e3",
			},
		},
	},
	plugins: [],
};
