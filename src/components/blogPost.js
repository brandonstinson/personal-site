import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from './layout';
import Header from './header';

const StyledBlogPost = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 20px;
  max-width: 1000px;
  hr {
    border: 0;
    height: 3px;
    background: #ccc;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
  }
  .title {
    font-size: 2.5rem;
    text-align: center;
  }
  .date {
    font-size: 1rem;
    text-align: center;
    margin: 5px 0 10px;
  }
  p {
    font-size: 1.5rem;
    margin: 10px 0;
  }
`;

const BlogPost = ({ data: { markdownRemark: post } }) => (
  <React.Fragment>
    <Layout>
      <Header />
      <StyledBlogPost>
        <div className="title">{post.frontmatter.title}</div>
        <div className="date">{post.frontmatter.date}</div>
        <hr />
        <p dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledBlogPost>
    </Layout>
  </React.Fragment>
);

BlogPost.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default BlogPost;

export const BlogPostQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
