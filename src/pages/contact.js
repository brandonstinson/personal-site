import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Title from '../components/Title';

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
