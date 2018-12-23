import React from 'react';

import Layout from '../../components/layout';
import Header from '../../components/header';
import Pomodoro from '../../components/pomodoro/Pomodoro';

const PomodoroPage = () => (
  <Layout>
    <Header />
    <Pomodoro />
  </Layout>
);

export default PomodoroPage;
