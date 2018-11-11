import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/Header';

const StyledResources = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    > * {
        margin: 40px 0;
    }
`;

const ResourcesPage = () => (
    <Layout>
        <Header />
        <StyledResources>
            <h1>Resources</h1>
            <h3>Coming Soon...</h3>
        </StyledResources>
    </Layout>
);

export default ResourcesPage;
