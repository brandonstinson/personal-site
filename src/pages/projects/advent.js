import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Title from '../../components/Title';
import AdventOfCode from '../../components/adventOfCode/AdventOfCode';

const AdventOfCodePage = () => (
    <Layout>
        <Header />
        <Title title="Advent of Code 2018" />
        <AdventOfCode />
    </Layout>
);

export default AdventOfCodePage;
