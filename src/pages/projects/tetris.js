import React from 'react';

import Layout from '../../components/layout';
import Header from '../../components/header';
import Title from '../../components/title';
import ContentContainer from '../../components/contentContainer';
import Tetris from '../../components/tetris/tetris';

const TetrisPage = () => (
  <Layout>
    <Header />
    <Title title="Tetris" />
    <ContentContainer>
      <Tetris />
    </ContentContainer>
  </Layout>
);

export default TetrisPage;
