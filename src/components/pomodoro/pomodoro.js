import React, { Component } from 'react';
import styled from 'styled-components';

import Title from '../title';
import Session from './session';
import Clock from './clock';

import alarm from '../../utils/audio/alarm.wav';

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
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 33.3%);
    grid-template-areas:
      'title title title'
      'work clock break';
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
    this.alarmSound = new Audio(alarm);
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
        this.alarmSound.play();
        setTimeout(() => {
          if (cycle === 'work') {
            this.handleSessionChange(breakTime, 'break');
          } else {
            this.handleSessionChange(workTime, 'work');
          }
        }, 3000);
      }
      secondsRemaining -= 1;
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.interval);
  };

  handleSessionChange = type => {
    this.stopTimer();
    if (type === 'work') {
      this.setState({ cycle: type }, this.startTimer);
    } else {
      this.setState({ cycle: type }, this.startTimer);
    }
  };

  handleTimeChange = (type, time) => {
    if (type === 'work') {
      this.setState({ workTime: time });
    } else {
      this.setState({ breakTime: time });
    }
  };

  render() {
    const { minutesLeft, secondsLeft, cycle, workTime, breakTime } = this.state;
    return (
      <StyledPomodoro>
        <div className="title">
          <Title title="Pomodoro Timer" />
        </div>
        <Session
          type="work"
          time={workTime}
          sessionChangeFunction={this.handleSessionChange}
          timeChangeFunction={this.handleTimeChange}
        />
        <Session
          type="break"
          time={breakTime}
          sessionChangeFunction={this.handleSessionChange}
          timeChangeFunction={this.handleTimeChange}
        />
        <Clock minutes={minutesLeft} seconds={secondsLeft} cycle={cycle} />
      </StyledPomodoro>
    );
  }
}

export default Pomodoro;
