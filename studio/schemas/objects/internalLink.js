import React from "react";

export default {
  title: "Internal Link",
  name: "internalLink",
  type: "object",
  hidden: true,
  fields: [
    {
      name: "title",
      title: "Link CTA",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: "link",
    //   title: "Link",
    //   type: "reference",
    //   to: [{ type: "page" }, { type: "product" }, { type: "collection" }],
    // },
  ],
  prepare({ title }) {
    return {
      title: title,
      media: <span style={{ fontSize: "1.5rem" }}>{"🔗"}</span>,
    };
  },
};