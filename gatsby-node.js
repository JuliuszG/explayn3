const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/postTemplate.jsx`);
  const caseTemplate = path.resolve(`src/templates/caseTemplate.js`);

  const result = await graphql(`
  query MyQuery {
    allWpArticle {
      nodes {
        id
        article {
          slug
        }
      }
    }
    allWpRealizacja {
      nodes {
        realizacja {
          slug
        }
        id
      }
    }
  }
  `);
  result.data.allWpArticle.nodes.forEach(post => {
    createPage({
      path: `blog/${post.article.slug}`,
      component: postTemplate,
      context: {
        id: post.id,
      },
    });
  });
  result.data.allWpRealizacja.nodes.forEach(project => {
    createPage({
      path: `case/${project.realizacja.slug}`,
      component: caseTemplate,
      context: {
        id: project.id,
      },
    });
  });
};