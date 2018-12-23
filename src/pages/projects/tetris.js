import React from 'react';

import Layout from '../../components/layout';
import Header from '../../components/header';
import Title from '../../components/title';
import Tetris from '../../components/tetris/Tetris';

const TetrisPage = () => (
  <Layout>
    <Header />
    <Title title="Tetris" />
    <Tetris />
  </Layout>
);

export default TetrisPage;
