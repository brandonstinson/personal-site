import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';

import brandon from '../utils/images/brandon.png';
import gmail from '../utils/images/icons/gmail.svg';
import twitter from '../utils/images/icons/twitter.svg';
import github from '../utils/images/icons/github.svg';

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 400px;
  grid-gap: 2rem;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding: 3rem 0;
  .about {
    font-size: 1.5rem;
  }
  .brandon {
    border: 1px solid black;
    border-radius: 50%;
  }
  .contact {
    display: flex;
    span {
      font-size: 2rem;
      margin-left: 1rem;
    }
    a {
      display: flex;
      align-items: center;
      color: inherit;
      text-decoration: none;
    }
  }
`;

const AboutPage = () => (
  <Layout>
    <Header />
    <StyledAbout>
      <p className="about">
        Software engineer focused on the web, but interested in machine learning. Currently active
        duty Air Force in Abilene, Texas.
      </p>
      <img src={brandon} alt="Brandon Stinson" className="brandon" />
      <div className="contact">
        <a href="mailto:iamthequestion@gmail.com">
          <img src={gmail} alt="GMail icon" width="50" />
          <span>Email</span>
        </a>
      </div>
      <div className="contact">
        <a href="https://github.com/brandonstinson">
          <img src={github} alt="GitHub icon" width="50" />
          <span>Github</span>
        </a>
      </div>
      <div className="contact">
        <a href="https://twitter.com/melchyor7">
          <img src={twitter} alt="Twitter icon" width="50" />
          <span>Twitter</span>
        </a>
      </div>
    </StyledAbout>
  </Layout>
);

export default AboutPage;
