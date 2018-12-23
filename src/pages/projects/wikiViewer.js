import React from 'react';

import Layout from '../../components/layout';
import Header from '../../components/header';
import WikiViewer from '../../components/wikiViewer/WikiViewer';

const WikiViewerPage = () => (
  <Layout>
    <Header />
    <WikiViewer />
  </Layout>
);

export default WikiViewerPage;
