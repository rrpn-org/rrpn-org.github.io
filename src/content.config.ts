import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// publications: RRPN research library
const publicationsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/publications" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      // "forthcoming" renders a badge and no download link
      status: z.enum(["forthcoming", "published"]).default("published"),
      authors: z.array(z.string()).optional(),
      // set reviewStatus to "draft" to render a visible DRAFT badge (content pending review)
      reviewStatus: z.enum(["draft", "approved"]).default("approved"),
      // entries with draft: true are excluded from the build entirely
      draft: z.boolean().optional(),
    }),
});

// news: press coverage of RRPN and its projects
const newsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/news" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      outlet: z.string().optional(),
      externalLink: z.string().optional(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      reviewStatus: z.enum(["draft", "approved"]).default("approved"),
      draft: z.boolean().optional(),
    }),
});

// updates: plain-language bill and topic tracking
const updatesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/updates" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      bills: z.array(z.string()).optional(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .or(z.date())
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      reviewStatus: z.enum(["draft", "approved"]).default("approved"),
      draft: z.boolean().optional(),
    }),
});

// other pages (privacy policy, etc.)
const otherPagesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/otherPages" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      // mappingKey allows you to match entries across languages for SEO purposes
      mappingKey: z.string().optional(),
      draft: z.boolean().optional(),
    }),
});

export const collections = {
  publications: publicationsCollection,
  news: newsCollection,
  updates: updatesCollection,
  otherPages: otherPagesCollection,
};
