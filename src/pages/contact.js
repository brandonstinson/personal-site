import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';

import brandon from '../utils/images/brandon.png';
import gmail from '../utils/images/icons/gmail.svg';
import twitter from '../utils/images/icons/twitter.svg';
import github from '../utils/images/icons/github.svg';

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: 400px;
  grid-gap: 2rem;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding: 3rem 0;
  .brandon {
    border: 1px solid black;
    border-radius: 50%;
  }
  .contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    align-items: center;
    justify-items: center;
    span {
      font-size: 2rem;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const ContactPage = () => (
  <Layout>
    <Header />
    <StyledContact>
      <img src={brandon} alt="Brandon Stinson" className="brandon" />
      <div className="contact">
        <img src={gmail} alt="GMail icon" width="50" />
        <a href="mailto:iamthequestion@gmail.com">
          <span>Email</span>
        </a>
      </div>
      <div className="contact">
        <img src={github} alt="GitHub icon" width="50" />
        <a href="https://github.com/brandonstinson">
          <span>Github</span>
        </a>
      </div>
      <div className="contact">
        <img src={twitter} alt="Twitter icon" width="50" />
        <a href="https://twitter.com/melchyor7">
          <span>Twitter</span>
        </a>
      </div>
    </StyledContact>
  </Layout>
);

export default ContactPage;
