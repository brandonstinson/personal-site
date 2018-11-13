import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Session from '../../components/pomodoro/Session';
import Clock from '../../components/pomodoro/Clock';

const StyledPomodoro = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
        'title title'
        'work break'
        'clock clock';
    grid-gap: 20px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    text-align: center;
    padding: 20px 0;
    background-color: #7bb3ff;
    color: ${props => props.theme.black};
    .title {
        grid-area: title;
        font-size: 3rem;
    }
    @media (min-width: 800px) {
        .title {
            font-size: 4rem;
        }
    }
    @media (min-width: 1400px) {
        grid-template-columns: repeat(3, 33.3%);
        grid-template-areas:
            'title title title'
            'work clock break';
        .title {
            font-size: 5rem;
        }
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
