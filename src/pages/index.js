import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';
import image from '../images/coder.svg';

const StyledHome = styled.div`
  height: calc(100vh - 5rem);
  background-color: #cfd8dc;
  background: url(${image}) bottom/cover no-repeat;
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-template-rows: repeat(3, 33.3%);
  grid-template-areas:
    'full'
    '.'
    '.';
  justify-items: center;
  align-items: center;
  text-align: center;
  h1 {
    color: ${props => props.theme.blue};
    background-color: #cfd8dc;
    font-size: 2rem;
  }
  .full {
    grid-area: full;
  }
  @media (min-width: 1000px) {
    height: calc(100vh - 3rem);
    grid-template-areas:
      'full'
      '.'
      '.';
    h1 {
      font-size: 3rem;
    }
  }
`;

const Home = () => (
  <Layout>
    <Header />
    <StyledHome>
      <h1 className="full">Brandon Stinson</h1>
    </StyledHome>
  </Layout>
);

export default Home;
