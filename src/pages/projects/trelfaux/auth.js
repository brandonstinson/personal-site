import React from 'react';

import Layout from '../../../components/layout';
import Header from '../../../components/header';
import Title from '../../../components/title';
import ContentContainer from '../../../components/contentContainer';
import LogInOrSignUp from '../../../components/trelfaux/logInOrSignUp';
import withProvider from '../../../components/trelfaux/withProvider';

const AuthPage = () => (
  <Layout>
    <Header />
    <Title title="Trelfaux" />
    <ContentContainer>
      <LogInOrSignUp />
    </ContentContainer>
  </Layout>
);

export default withProvider(AuthPage);
