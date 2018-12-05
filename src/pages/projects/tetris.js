import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Tetris from '../../components/tetris/Tetris';

const TetrisPage = () => (
    <Layout>
        <Header />
        <Title title="Tetris" />
        <Tetris />
    </Layout>
);

export default TetrisPage;
