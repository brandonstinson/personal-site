const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve('src/components/blogPost.js');
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: template,
        });
      });
      resolve();
    });
  });
};
