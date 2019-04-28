import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';
import Title from '../components/title';
import ContentContainer from '../components/contentContainer';

import brandon from '../images/brandon.png';
import gmail from '../images/icons/gmail.svg';
import twitter from '../images/icons/twitter.svg';
import github from '../images/icons/github.svg';
import codepen from '../images/icons/codepen.svg';

const StyledAbout = styled.div`
  display: grid;
  grid-gap: 2rem;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding: 1rem 0;
  .about {
    font-size: 1.5rem;
  }
  .brandon {
    border: 1px solid black;
    border-radius: 50%;
  }
  .contact {
    display: flex;
    background-color: ${props => props.theme.white};
    color: black;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
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
    <Title title="Brandon Stinson" />
    <ContentContainer>
      <StyledAbout>
        <p className="about">
          Software engineer focused on the web, but interested in machine learning.
          <br />
          Currently active duty Air Force in Abilene, Texas.
        </p>
        <img src={brandon} alt="Brandon Stinson" className="brandon" />
        <div className="contact">
          <a href="mailto:iamthequestion@gmail.com">
            <img src={gmail} alt="gmail icon" width="50" />
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
        <div className="contact">
          <a href="https://codepen.io/brandonstinson/">
            <img src={codepen} alt="CodePen icon" width="50" />
            <span>CodePen</span>
          </a>
        </div>
      </StyledAbout>
    </ContentContainer>
  </Layout>
);

export default AboutPage;
