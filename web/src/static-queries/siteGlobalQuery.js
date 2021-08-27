import { graphql, useStaticQuery } from "gatsby";

export const GlobalSeoQuery = () => {
  const { sanityGlobalMeta } = useStaticQuery(graphql`
    query SiteGlobalMetaQuery {
      sanityGlobalMeta(_id: { eq: "globalSeo" }) {
        _rawGlobalSeo
      }
    }
  `);
  return sanityGlobalMeta._rawGlobalSeo;
};