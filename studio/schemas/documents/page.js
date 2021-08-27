export default {
    name: "page",
    title: "Page",
    type: "document",
    liveEdit: false,
    fields: [
      {
        name: "page",
        type: "pageTabs",
      },
    ],
    preview: {
      select: {
        title: "page.content.title",
        subtitle: "page.content.slug.current",
      },
    },
  };