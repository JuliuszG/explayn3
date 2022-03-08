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
          en {
            slug
          }
          pl {
            slug
          }
        }
      }
    }
    allWpRealizacja {
      nodes {
        realizacja {
          en {
            slug
          }
          pl {
            slug
          }
        }
        id
      }
    }
  }
  `);
  result.data.allWpArticle.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.article.en.slug}`,
      path: `/blog/${post.article.pl.slug}`,
      component: postTemplate,
      context: {
        id: post.id,
      },
    });
  });
  result.data.allWpRealizacja.nodes.forEach(project => {
    createPage({
      path: `case/${project.realizacja.en.slug}`,
      path: `case/${project.realizacja.pl.slug}`,
      component: caseTemplate,
      context: {
        id: project.id,
      },
    });
  });
};