export default {
    name: "globalMeta",
    _id: "globalMeta",
    title: "Global Meta",
    type: "document",
    description: "Handles general global meta settings for SEO",
    fields: [
      {
        name: "globalSeo",
        type: "metaCard",
      },
    ],
    preview: {
      select: {},
      prepare() {
        return Object.assign(
          {},
          {
            title: "Global SEO Settings",
          }
        );
      },
    },
  };