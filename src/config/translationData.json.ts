/**
 * * Configuration of the i18n system data files and text translations
 * This site is configured single-language (English).
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import faqDataEn from "./en/faqData.json";
import navDataEn from "./en/navData.json";
import siteDataEn from "./en/siteData.json";
import testimonialDataEn from "./en/testimonialData.json";

export const dataTranslations = {
  en: {
    siteData: siteDataEn,
    navData: navDataEn,
    testimonialData: testimonialDataEn,
    faqData: faqDataEn,
  },
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 */
export const textTranslations = {
  en: {
    hero_text: "Better planning for a resilient California.",
    back_to_all_posts: "Back to all posts",
    updated: "Updated",
    nav_cta: "Get Involved",
  },
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * Not used on a single-language site.
 */
export const routeTranslations = {
  en: {
    aboutKey: "about",
  },
} as const;

/**
 * * Content collection translations used by the language switcher and hreflang generator
 * Not used on a single-language site.
 */
export const localizedCollections = {
  // Add collections/locales as needed if the site ever becomes multilingual
} as const;
