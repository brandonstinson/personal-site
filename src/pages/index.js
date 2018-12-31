import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';
import image from '../utils/images/coder.svg';

const StyledHome = styled.div`
  height: calc(100vh - 5rem);
  background-color: #cfd8dc;
  background: url(${image}) bottom/cover no-repeat;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);
  grid-template-areas:
    'full full full full full'
    '. about about about .'
    '. . . . .'
    '. . . . .'
    '. . . . .';
  justify-items: center;
  align-items: center;
  text-align: center;
  h1 {
    color: ${props => props.theme.blue};
    background-color: #cfd8dc;
    font-size: 2rem;
  }
  p {
    color: ${props => props.theme.black};
    font-size: 1.25rem;
    background-color: #cfd8dc;
  }
  .first {
    grid-area: first;
  }
  .last {
    grid-area: last;
  }
  .full {
    grid-area: full;
  }
  .about {
    grid-area: about;
  }
  @media (min-width: 1000px) {
    height: calc(100vh - 3rem);
    grid-template-areas:
      '. about about about .'
      '. about about about .'
      'first first . last last'
      '. . . . .'
      '. . . . .';
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
    }
  }
`;

const Home = () => (
  <Layout>
    <Header />
    <StyledHome>
      <h1 className="first">Brandon</h1>
      <h1 className="last">Stinson</h1>
      <h1 className="full">Brandon Stinson</h1>
      <p className="about">
        Software engineer focused on the web, but interested in machine learning. Currently active
        duty Air Force in Abilene, Texas.
      </p>
    </StyledHome>
  </Layout>
);

export default Home;
