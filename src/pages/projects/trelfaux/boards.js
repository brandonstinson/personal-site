import React from 'react';

import Layout from '../../../components/layout';
import Header from '../../../components/header';
import Title from '../../../components/title';
import ContentContainer from '../../../components/contentContainer';
import Boards from '../../../components/trelfaux/boards';

const BoardsPage = () => (
  <Layout>
    <Header />
    <Title title="Trelfaux" />
    <ContentContainer>
      <Boards />
    </ContentContainer>
  </Layout>
);

export default BoardsPage;
