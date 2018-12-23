import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';
import Title from '../components/title';

const StyledResources = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  padding: 40px;
`;

const ResourcesPage = () => (
  <Layout>
    <Header />
    <Title title="Resources" />
    <StyledResources>
      <h3>Coming Soon...</h3>
    </StyledResources>
  </Layout>
);

export default ResourcesPage;
