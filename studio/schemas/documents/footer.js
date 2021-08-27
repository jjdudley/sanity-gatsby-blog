export default {
    name: "footer",
    _id: "footer",
    title: "Footer",
    type: "document",
    description: "This handles footer configuration",
    fields: [
      {
        name: "footerLinkLists",
        title: "Footer link lists",
        type: "array",
        of: [{ type: "reference", to: [{ type: "menus" }] }],
      },
      {
        name: "footerBottomLink",
        title: "Bottom link",
        type: "array",
        of: [{ type: "reference", to: [{ type: "menus" }] }],
      },
    ],
    preview: {
      select: {},
      prepare() {
        return Object.assign(
          {},
          {
            title: "Footer",
          }
        );
      },
    },
  };