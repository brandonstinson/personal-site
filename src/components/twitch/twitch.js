import React, { Component } from 'react';
import styled from 'styled-components';

import OnlineUserDisplay from './onlineUserDisplay';
import OfflineUserDisplay from './offlineUserDisplay';

import svg from '../../utils/images/projects/twitch.svg';

const users = [
  'esl_sc2',
  'ogamingsc2',
  'redbull',
  'cretetion',
  'freecodecamp',
  'storbeck',
  'habathcx',
  'noobs2ninjas',
];

const StyledTwitch = styled.div`
  --multiplier: 1;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color: #6441a4;
  padding: 2rem;
  color: ${props => props.theme.offWhite};
  .title {
    background: url(${svg}) no-repeat;
    background-size: cover;
    width: calc(10rem * var(--multiplier));
    height: calc((10rem / 1.62) * var(--multiplier));
  }
  .section-title {
    font-size: calc(2rem * var(--multiplier));
    margin: 2rem 0;
  }
  @media (min-width: 800px) {
    --multiplier: 1.5;
  }
  @media (min-width: 1200px) {
    --multiplier: 2;
  }
`;

class TwitchPage extends Component {
  state = {
    online: null,
    offline: null,
  };

  componentDidMount = () => {
    this.fetchUserData(users);
  };

  fetchUserData = async userArray => {
    const userPromises = [];
    userArray.map(user =>
      userPromises.push(
        fetch(`https://wind-bow.glitch.me/helix/streams?user_login=${user}`).then(data =>
          data.json()
        )
      )
    );
    const userData = await Promise.all(userPromises);
    const online = [];
    const offline = [];
    userData.forEach((user, index) => {
      if (user.data.length) {
        online.push(user);
      } else {
        offline.push(userArray[index]);
      }
    });
    this.setState({ online, offline });
  };

  render() {
    const { online, offline } = this.state;
    return (
      <StyledTwitch>
        <div className="title" />
        <div className="section-title">Online</div>
        {online && <OnlineUserDisplay users={online} />}
        <div className="section-title">Offline</div>
        {offline && <OfflineUserDisplay users={offline} />}
      </StyledTwitch>
    );
  }
}

export default TwitchPage;
