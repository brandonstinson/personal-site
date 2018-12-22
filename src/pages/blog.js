import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Title from '../components/Title';

const StyledBlog = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  padding: 40px;
`;

const BlogPage = ({ data }) => (
  <Layout>
    <Header />
    <Title title="My Personal Blog" />
    <StyledBlog>
      <h3>Posts</h3>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <h1>{node.frontmatter.title}</h1>
          <p>{node.frontmatter.date}</p>
        </div>
      ))}
    </StyledBlog>
  </Layout>
);

BlogPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default BlogPage;

export const blogQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            author
            path
            date
          }
        }
      }
    }
  }
`;
