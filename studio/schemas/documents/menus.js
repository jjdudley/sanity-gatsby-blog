export default {
    name: "menus",
    _id: "menus",
    title: "Menus",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "items",
        title: "Nav Items",
        type: "array",
        of: [{ type: "internalLink" }, { type: "externalLink" }],
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: "title",
      },
    },
  };