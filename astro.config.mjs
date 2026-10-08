import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://bmanke.github.io",
  base: "/dev-atlas",
  output: "static",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});