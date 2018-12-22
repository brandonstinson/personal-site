import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import WikiViewer from '../../components/wikiViewer/WikiViewer';

const WikiViewerPage = () => (
  <Layout>
    <Header />
    <WikiViewer />
  </Layout>
);

export default WikiViewerPage;
