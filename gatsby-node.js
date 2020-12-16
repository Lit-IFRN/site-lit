exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.erros) {
    reporter.panic('failed to create post', result.errors);
  }

  const projects = result.data.allMdx.nodes;
  projects.forEach(project => {
    actions.createPage({
      path: `projetos/${project.frontmatter.slug}`,
      component: require.resolve('./src/templates/project.js'),
      context: {
        slug: project.frontmatter.slug
      }
    });
  });
};
