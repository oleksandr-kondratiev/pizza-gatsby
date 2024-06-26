import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const gatsbyConfig = {
  pathPrefix: "/pizza",
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: "https://gatsby.pizza",
    description: "The best pizza place in Hamilton!",
    twitter: "@slicksSlices",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

export default gatsbyConfig;
