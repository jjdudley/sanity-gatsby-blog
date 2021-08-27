export default {
    title: "Page Content",
    name: "pageContent",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "page.content.title",
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "sections",
        title: "Sections",
        type: "pageSection",
      },
    ],
  };