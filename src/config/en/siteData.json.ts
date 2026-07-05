import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "RRPN",
  // Your website's title and description (meta fields)
  title: "Responsible and Resilient Planning Network",
  description:
    "The Responsible and Resilient Planning Network (RRPN) develops best-practices policy, advocacy, and education at the intersection of state law and local land use — so communities can rebuild, adapt, and thrive.",

  // Your information for blog post purposes
  author: {
    name: "Responsible and Resilient Planning Network",
    email: "info@rrpn.org",
    twitter: "",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/rrpn-og.jpg",
    alt: "Responsible and Resilient Planning Network",
  },
};

export default siteData;
