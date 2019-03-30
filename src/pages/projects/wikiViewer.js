import React from 'react';

import Layout from '../../components/layout';
import Header from '../../components/header';
import Title from '../../components/title';
import ContentContainer from '../../components/contentContainer';
import WikiViewer from '../../components/wikiViewer/wikiViewer';

const WikiViewerPage = () => (
  <Layout>
    <Header />
    <Title title="WikiViewer" />
    <ContentContainer>
      <WikiViewer />
    </ContentContainer>
  </Layout>
);

export default WikiViewerPage;
