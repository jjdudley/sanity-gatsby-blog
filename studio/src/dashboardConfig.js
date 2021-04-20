export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "607f109cbe408900b313a858",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-eymkxozz",
                  apiId: "548808ad-8771-42b3-bf5f-91935aebb7ce",
                },
                {
                  buildHookId: "607f109cc82c8e009c82d638",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fpn4yxqj",
                  apiId: "5151cc7a-b6c9-4dc7-9e94-ef912fd1f04a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jjdudley/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fpn4yxqj.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
