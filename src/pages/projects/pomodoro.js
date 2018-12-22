import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Pomodoro from '../../components/pomodoro/Pomodoro';

const PomodoroPage = () => (
  <Layout>
    <Header />
    <Pomodoro />
  </Layout>
);

export default PomodoroPage;
