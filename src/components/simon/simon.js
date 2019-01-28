import React, { Component } from 'react';
import styled from 'styled-components';

import ColoredButton from './coloredButton';
import Center from './center';

import buzzer from '../../utils/audio/buzzer.wav';

const StyledSimon = styled.div`
  display: grid;
  justify-content: center;
  .container {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5vmin;
    border: 5vmin solid black;
    border-radius: 50%;
    background: black;
    position: relative;
  }
  .name {
    font-size: 10vmin;
    padding: 5vmin;
    text-align: center;
  }
`;

class Simon extends Component {
  state = {
    level: '03',
  };

  componentDidMount = () => {
    this.sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    this.sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    this.sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    this.sound4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    this.buzzer = new Audio(buzzer);
  };

  render() {
    const { level } = this.state;
    return (
      <React.Fragment>
        <StyledSimon>
          <div className="name">Simon</div>
          <div className="container">
            <ColoredButton
              dim="#2b9a34"
              bright="#3edd4b"
              borderRadius="100% 0 0 0"
              sound={this.sound1}
            />
            <ColoredButton
              dim="#9a342b"
              bright="#dd4b3e"
              borderRadius="0 100% 0 0"
              sound={this.sound2}
            />
            <ColoredButton
              dim="#b2a326"
              bright="#ffea37"
              borderRadius="0 0 0 100%"
              sound={this.sound4}
            />
            <ColoredButton
              dim="#342b9a"
              bright="#4b3edd"
              borderRadius="0 0 100% 0"
              sound={this.sound3}
            />
            <Center level={level} />
          </div>
        </StyledSimon>
      </React.Fragment>
    );
  }
}

export default Simon;
