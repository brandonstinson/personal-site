import React from 'react';

import Layout from '../../components/layout';
import Header from '../../components/header';
import Title from '../../components/title';
import ContentContainer from '../../components/contentContainer';
import TicTacToe from '../../components/ticTacToe/ticTacToe';

const TicTacToePage = () => (
  <Layout>
    <Header />
    <Title title="Tic-Tac-Toe" />
    <ContentContainer>
      <TicTacToe />
    </ContentContainer>
  </Layout>
);

export default TicTacToePage;
