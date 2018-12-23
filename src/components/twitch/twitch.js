import React, { Component } from 'react';
import styled from 'styled-components';

import OnlineUserDisplay from './onlineUserDisplay';
import OfflineUserDisplay from './offlineUserDisplay';

import svg from '../../utils/images/projects/twitch.svg';

const users = [
  'ESL_SC2',
  'OgamingSC2',
  'cretetion',
  'freecodecamp',
  'storbeck',
  'habathcx',
  'RobotCaleb',
  'noobs2ninjas',
  'brunofin',
  'comster404',
];

const StyledTwitch = styled.div`
  --multiplier: 1;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color: #6441a4;
  padding: 2rem;
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
    data: {
      online: null,
      offline: null,
    },
  };

  componentDidMount = () => {
    this.fetchUserData(users);
  };

  fetchUserData = async userArray => {
    const userPromises = [];
    userArray.map(user =>
      userPromises.push(
        fetch(`https://wind-bow.glitch.me/twitch-api/channels/${user}`).then(data => data.json())
      )
    );
    const userData = await Promise.all(userPromises);
    const filteredUsers = userData.filter(user => !user.error);
    const streamPromises = [];
    filteredUsers.map(user =>
      streamPromises.push(
        fetch(`https://wind-bow.glitch.me/twitch-api/streams/${user.name}`).then(data =>
          data.json()
        )
      )
    );
    const streamData = await Promise.all(streamPromises);
    const online = [];
    const offline = [];
    filteredUsers.forEach((user, index) =>
      streamData[index].stream ? online.push(user) : offline.push(user)
    );
    this.setState({ data: { online, offline } });
  };

  render() {
    const { data } = this.state;
    return (
      <StyledTwitch>
        <div className="title" />
        <div className="section-title">Online</div>
        {data.online && <OnlineUserDisplay users={data.online} />}
        <div className="section-title">Offline</div>
        {data.offline && <OfflineUserDisplay users={data.offline} />}
      </StyledTwitch>
    );
  }
}

export default TwitchPage;
