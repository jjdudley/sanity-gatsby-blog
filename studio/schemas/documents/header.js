export default {
    name: "header",
    _id: "header",
    title: "Header",
    type: "document",
    description: "This handles header configuration",
    fields: [
      {
        name: "headerMenu",
        title: "Header menu",
        type: "reference",
        to: [{ type: "menus" }],
      },
    ],
    preview: {
      select: {},
      prepare() {
        return Object.assign(
          {},
          {
            title: "Header",
          }
        );
      },
    },
  };