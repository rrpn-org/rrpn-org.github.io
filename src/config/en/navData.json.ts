/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 */

// types
import { type navItem } from "../types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Projects",
    link: "/projects",
  },
  {
    text: "Publications",
    link: "/publications",
  },
  {
    text: "Updates",
    link: "/updates",
  },
  {
    text: "News",
    link: "/news",
  },
];

export default navConfig;
