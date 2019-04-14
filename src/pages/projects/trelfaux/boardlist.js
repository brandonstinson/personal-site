import React from 'react';

import Layout from '../../../components/layout';
import Header from '../../../components/header';
import Title from '../../../components/title';
import ContentContainer from '../../../components/contentContainer';
import BoardList from '../../../components/trelfaux/boardList';
import withProvider from '../../../components/trelfaux/withProvider';

const BoardListPage = () => (
  <Layout>
    <Header />
    <Title title="Trelfaux" />
    <ContentContainer>
      <BoardList />
    </ContentContainer>
  </Layout>
);

export default withProvider(BoardListPage);
