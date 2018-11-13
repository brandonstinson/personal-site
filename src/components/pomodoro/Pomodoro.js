import React, { Component } from 'react';
import styled from 'styled-components';

import Session from './Session';
import Clock from './Clock';

// const alarm = '../../audio/alarm.wav';

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

class Pomodoro extends Component {
    state = {
        time: 25,
        cycle: 'work',
    };

    handleTimeChange = (time, type) => {
        this.setState({ time, cycle: type });
    };

    render() {
        const { time, cycle } = this.state;
        return (
            <StyledPomodoro>
                <div className="title">Pomodoro Clock</div>
                <Session type="work" timeChangeFunction={this.handleTimeChange} />
                <Session type="break" timeChangeFunction={this.handleTimeChange} />
                <Clock time={time} cycle={cycle} />
            </StyledPomodoro>
        );
    }
}

export default Pomodoro;
