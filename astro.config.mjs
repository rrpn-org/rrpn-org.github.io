import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import AutoImport from "astro-auto-import";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://rrpn.org",
  // i18n configuration must match src/config/translations.json.ts
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      // Shiki Themes: https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
      wrap: true,
    },
  },
  integrations: [
    // example auto import component into mdx files
    AutoImport({
      imports: [
        // https://github.com/delucis/astro-auto-import
        "@/components/admonition/Admonition.astro",
      ],
    }),
    mdx(),
    icon(),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      esbuildOptions: {
        target: "es2022",
      },
    },
    // stop inlining short scripts to fix issues with ClientRouter
    build: {
      assetsInlineLimit: 0,
      target: "es2022",
    },
  },
});
