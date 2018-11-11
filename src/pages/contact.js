import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/Header';

const StyledContact = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    > * {
        margin: 40px 0;
    }
`;

const ContactPage = () => (
    <Layout>
        <Header />
        <StyledContact>
            <h1>Contact Me</h1>
            <h3>Coming Soon...</h3>
        </StyledContact>
    </Layout>
);

export default ContactPage;
