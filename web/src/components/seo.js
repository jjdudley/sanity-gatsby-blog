import React from "react";
import Helmet from "react-helmet";
import { GlobalSeoQuery } from "../static-queries/siteGlobalQuery.js";

export const Seo = ({ metaInfo, fallbackImage, location }) => {
  const globalMetaInfo = GlobalSeoQuery();

  const title = metaInfo
    ? metaInfo.metaTitle
      ? `${metaInfo.metaTitle} | Corro`
      : `${globalMetaInfo.metaTitle}`
    : `${globalMetaInfo.metaTitle}`;
  const metaDescription = metaInfo
    ? metaInfo.metaDescription
      ? metaInfo.metaDescription
      : globalMetaInfo.metaDescription
    : globalMetaInfo.metaDescription;

  const ogImage =
    metaInfo?.openImage?.asset.url ||
    fallbackImage ||
    globalMetaInfo.openImage?.asset.url;

  const twitterImage =
    metaInfo?.twitterImage?.asset.url ||
    fallbackImage ||
    globalMetaInfo.twitterImage?.asset.url;

  const openTitle = metaInfo
    ? metaInfo.openTitle
      ? metaInfo.openTitle
      : globalMetaInfo.openTitle
      ? globalMetaInfo.openTitle
      : title
    : globalMetaInfo.openTitle
    ? globalMetaInfo.openTitle
    : title;
  const openGraphDescription = metaInfo
    ? metaInfo.openGraphDescription
      ? metaInfo.openGraphDescription
      : globalMetaInfo.openGraphDescription
      ? globalMetaInfo.openGraphDescription
      : metaDescription
    : globalMetaInfo.openGraphDescription
    ? globalMetaInfo.openGraphDescription
    : metaDescription;
  const twitterTitle = metaInfo
    ? metaInfo.twitterTitle
      ? metaInfo.twitterTitle
      : globalMetaInfo.twitterTitle
      ? globalMetaInfo.twitterTitle
      : title
    : globalMetaInfo.twitterTitle
    ? globalMetaInfo.twitterTitle
    : title;
  const twitterDescription = metaInfo
    ? metaInfo.twitterDescription
      ? metaInfo.twitterDescription
      : globalMetaInfo.twitterDescription
      ? globalMetaInfo.twitterDescription
      : metaDescription
    : globalMetaInfo.twitterDescription
    ? globalMetaInfo.twitterDescription
    : metaDescription;

  return (
    <Helmet title={title}>
      <html lang="en" />
      <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
      <meta property="og:locale" content="en_US" />
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={location.href} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:title" content={openTitle} />
      <meta property="og:site_name" content="Corro" />
      <meta property="og:description" content={openGraphDescription} />
      <meta name="twitter:site" content="@ShopCorro" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:image:src" content={twitterImage} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:url" content={location.href} />
    </Helmet>
  );
};