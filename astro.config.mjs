// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bowenzheng25.github.io",
  base: "last",
  vite: {
    plugins: [tailwindcss()],
  },
});
