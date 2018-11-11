import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Session from '../../components/pomodoro/Session';

const StyledPomodoro = styled.div`
    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-template-areas:
        'title title'
        'work break'
        'clock clock';
    justify-content: center;
    justify-items: center;
    text-align: center;
    background-color: #7bb3ff;
    .title {
        grid-area: title;
        font-size: 5rem;
        color: black;
    }
`;

const PomodoroPage = () => (
    <Layout>
        <Header />
        <StyledPomodoro>
            <div className="title">Pomodoro Clock</div>
            <Session type="work" />
            <Session type="break" />
        </StyledPomodoro>
    </Layout>
);

export default PomodoroPage;
