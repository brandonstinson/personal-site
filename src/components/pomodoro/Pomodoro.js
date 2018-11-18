import React, { Component } from 'react';
import styled from 'styled-components';

import Session from './Session';
import Clock from './Clock';

import alarm from '../../audio/alarm.wav';

const alarmSound = new Audio(alarm);

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
        workTime: '25',
        breakTime: '10',
        cycle: 'work',
        minutesLeft: '',
        secondsLeft: '',
    };

    interval = null;

    componentDidMount = () => {
        const { workTime } = this.state;
        this.setState({
            minutesLeft: workTime,
            secondsLeft: '00',
        });
    };

    componentWillUnmount = () => {
        this.stopTimer();
    };

    startTimer = () => {
        const { workTime, breakTime, cycle } = this.state;
        const intervalDuration = Number(cycle === 'work' ? workTime : breakTime);
        let secondsRemaining = intervalDuration * 60;
        this.interval = setInterval(() => {
            const minutes = Math.floor(secondsRemaining / 60);
            const seconds = secondsRemaining - minutes * 60;
            this.setState({
                minutesLeft: minutes < 10 ? `0${String(minutes)}` : String(minutes),
                secondsLeft: seconds < 10 ? `0${String(seconds)}` : String(seconds),
            });
            if (!minutes && !seconds) {
                this.stopTimer();
                alarmSound.play();
                setTimeout(() => {
                    if (cycle === 'work') {
                        this.handleTimeChange(breakTime, 'break');
                    } else {
                        this.handleTimeChange(workTime, 'work');
                    }
                }, 3000);
            }
            secondsRemaining -= 1;
        }, 1000);
    };

    stopTimer = () => {
        clearInterval(this.interval);
    };

    handleTimeChange = (time, type) => {
        this.stopTimer();
        if (type === 'work') {
            this.setState({ workTime: time, cycle: type }, this.startTimer);
        } else {
            this.setState({ breakTime: time, cycle: type }, this.startTimer);
        }
    };

    render() {
        const { minutesLeft, secondsLeft, cycle } = this.state;
        return (
            <StyledPomodoro>
                <div className="title">Pomodoro Clock</div>
                <Session type="work" timeChangeFunction={this.handleTimeChange} />
                <Session type="break" timeChangeFunction={this.handleTimeChange} />
                <Clock minutes={minutesLeft} seconds={secondsLeft} cycle={cycle} />
            </StyledPomodoro>
        );
    }
}

export default Pomodoro;
