import React from "react";

import { Seo } from "../components/seo";
import { renderModules } from "../lib/renderModules";

const Page = ({ pageContext, location }) => {
  const {
    content: { modules },
    meta,
  } = pageContext;

  return (
    <div>
      <Seo metaInfo={meta} location={location} />
      <div>{renderModules(modules)}</div>
    </div>
  );
};

export default Page;