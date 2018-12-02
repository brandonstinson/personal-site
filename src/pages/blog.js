import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Title from '../components/Title';

const StyledBlog = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    padding: 40px;
`;

const BlogPage = () => (
    <Layout>
        <Header />
        <Title title="My Personal Blog" />
        <StyledBlog>
            <h3>Coming Soon...</h3>
        </StyledBlog>
    </Layout>
);

export default BlogPage;
