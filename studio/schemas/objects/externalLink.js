import React from "react";
export default {
  title: "External Link",
  name: "externalLink",
  type: "object",
  hidden: true,
  fields: [
    {
      name: "title",
      title: "Link CTA",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      description:
        "There is no `link` validation on this so please type accurate urls with https://, mailto:, tel: etc.",
      validation: (Rule) => Rule.required(),
    },
  ],
  prepare({ title }) {
    return {
      title: title,
      media: <span style={{ fontSize: "1.5rem" }}>{`🔗`}</span>,
    };
  }
};