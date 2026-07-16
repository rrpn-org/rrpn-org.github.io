import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "RRPN",
  // Your website's title and description (meta fields)
  title: "Responsible Recovery Planning Network",
  description:
    "The Responsible Recovery Planning Network (RRPN) develops best-practices policy, advocacy, and education for communities recovering from disaster and building lasting resilience — so they can rebuild, adapt, and thrive.",

  // Your information for blog post purposes
  author: {
    name: "Responsible Recovery Planning Network",
    email: "info@rrpn.org",
    twitter: "",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/rrpn-og.jpg",
    alt: "Responsible Recovery Planning Network",
  },
};

export default siteData;
