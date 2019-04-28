import React from 'react';

import Layout from '../../components/layout';
import Header from '../../components/header';
import Title from '../../components/title';
import ContentContainer from '../../components/contentContainer';
import Pomodoro from '../../components/pomodoro/pomodoro';

const PomodoroPage = () => (
  <Layout>
    <Header />
    <Title title="Pomodoro Timer" />
    <ContentContainer>
      <Pomodoro />
    </ContentContainer>
  </Layout>
);

export default PomodoroPage;
