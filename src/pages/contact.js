import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';
import Title from '../components/title';

const StyledContact = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  padding: 40px;
`;

const ContactPage = () => (
  <Layout>
    <Header />
    <Title title="Contact Me" />
    <StyledContact>
      <h3>Coming Soon...</h3>
    </StyledContact>
  </Layout>
);

export default ContactPage;
