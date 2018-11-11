import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/Header';

const StyledBlog = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    > * {
        margin: 40px 0;
    }
`;

const BlogPage = () => (
    <Layout>
        <Header />
        <StyledBlog>
            <h1>My Personal Blog</h1>
            <h3>Coming Soon...</h3>
        </StyledBlog>
    </Layout>
);

export default BlogPage;
