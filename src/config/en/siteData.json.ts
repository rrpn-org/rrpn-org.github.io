import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "RRPN",
  // Your website's title and description (meta fields)
  title: "Responsible Recovery Planning Network",
  description:
    "The Responsible Recovery Planning Network (RRPN) strengthens the recovery and resiliency networks that let California communities respond to disaster as one — supporting survivor return, housing stability, and equitable, systems-level recovery — backed by research, policy, and advocacy in service of that work.",

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
