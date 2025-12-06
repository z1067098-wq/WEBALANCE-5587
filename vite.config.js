import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { creaoPlugins } from "./config/vite/creao-plugin.mjs";

export default defineConfig({
	base: "/webalance-app-457/",
	plugins: [
		...creaoPlugins(),
		TanStackRouterVite({
			autoCodeSplitting: false,
		}),
		react({
			jsxRuntime: "automatic",
		}),
		svgr(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	server: {
		host: "0.0.0.0",
		port: 3000,
		allowedHosts: true,
		watch: {
			usePolling: true,
			interval: 300,
		},
	},
	build: {
		chunkSizeWarningLimit: 1500,
	},
});
