import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Header from '../components/header';
import Title from '../components/title';
import ContentContainer from '../components/contentContainer';

const StyledBlog = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  a {
    color: inherit;
    text-decoration: none;
  }
  hr {
    border: 0;
    height: 3px;
    background: #ccc;
    background-image: linear-gradient(to right, #333, #ccc, #333);
  }
  h1 {
    margin-bottom: 1rem;
  }
  .post {
    margin: 1rem 0;
  }
  h5 {
    padding: 0.5rem 0;
  }
`;

const BlogPage = ({ data }) => (
  <Layout>
    <Header />
    <Title title="Blog" />
    <ContentContainer>
      <StyledBlog>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="post">
            <Link to={node.frontmatter.path}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <h5>{node.frontmatter.date}</h5>
            <hr />
          </div>
        ))}
      </StyledBlog>
    </ContentContainer>
  </Layout>
);

BlogPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default BlogPage;

export const AllBlogPostsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;
