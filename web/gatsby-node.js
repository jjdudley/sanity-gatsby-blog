async function createPages(graphql, actions) {
  const { createPage } = actions;

  // Query Pages
  const pagesQuery = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            _rawPage(resolveReferences: { maxDepth: 9 })
          }
        }
      }
    }
  `);

  if (pagesQuery.errors) {
    throw pagesQuery.errors;
  }

  const pages = pagesQuery.data.allSanityPage.edges || [];
  pages.forEach((edge) => {
    const path = `/${
      edge.node._rawPage.content.slug.current === "home"
        ? ""
        : edge.node._rawPage.content.slug.current
    }`;

    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { ...edge.node._rawPage },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createPages(graphql, actions);
};