import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Title from '../components/Title';

const StyledResources = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    padding: 0 40px 40px;
`;

const ResourcesPage = () => (
    <Layout>
        <Header />
        <StyledResources>
            <Title title="Resources" />
            <h3>Coming Soon...</h3>
        </StyledResources>
    </Layout>
);

export default ResourcesPage;
