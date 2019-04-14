import React from 'react';

import Layout from '../../../components/layout';
import Header from '../../../components/header';
import Title from '../../../components/title';
import ContentContainer from '../../../components/contentContainer';
import BoardView from '../../../components/trelfaux/boardView';
import withProvider from '../../../components/trelfaux/withProvider';

const BoardViewPage = () => (
  <Layout>
    <Header />
    <Title title="Trelfaux" />
    <ContentContainer>
      <BoardView />
    </ContentContainer>
  </Layout>
);

export default withProvider(BoardViewPage);
