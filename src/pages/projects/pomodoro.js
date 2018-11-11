import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Session from '../../components/pomodoro/Session';
import Clock from '../../components/pomodoro/Clock';

const StyledPomodoro = styled.div`
    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-template-areas:
        'title title'
        'work break'
        'clock clock';
    grid-gap: 20px;
    justify-content: center;
    justify-items: center;
    text-align: center;
    padding: 20px 0;
    background-color: #7bb3ff;
    color: ${props => props.theme.black};
    .title {
        grid-area: title;
        font-size: 3rem;
    }
`;

const PomodoroPage = () => (
    <Layout>
        <Header />
        <StyledPomodoro>
            <div className="title">Pomodoro Clock</div>
            <Session type="Work" />
            <Session type="Break" />
            <Clock />
        </StyledPomodoro>
    </Layout>
);

export default PomodoroPage;
