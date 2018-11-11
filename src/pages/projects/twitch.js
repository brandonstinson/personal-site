import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import OnlineUser from '../../components/twitch/OnlineUser';
import OfflineUser from '../../components/twitch/OfflineUser';

import svg from '../../images/projects/twitch.svg';
import users from '../../data/twitchUsers';

const StyledTwitch = styled.div`
    --margin1: 3vw;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    background-color: #6441a4;
    padding: var(--margin1);
    .title {
        background: url(${svg}) no-repeat;
        background-size: cover;
        width: 20vw;
        height: calc(20vw / 1.62);
    }
    .section-title {
        font-size: var(--margin1);
        margin: var(--margin1) 0;
    }
    .online {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 1vw;
        width: 100%;
    }
    .offline {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 1vw;
        width: 100%;
    }
    .online > *,
    .offline > * {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 1vw;
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
                fetch(`https://wind-bow.glitch.me/twitch-api/channels/${user}`).then(data =>
                    data.json()
                )
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
        filteredUsers.forEach(
            (user, index) => (streamData[index].stream ? online.push(user) : offline.push(user))
        );
        this.setState({ data: { online, offline } });
    };

    render() {
        const { data } = this.state;
        return (
            <Layout>
                <Header />
                <StyledTwitch>
                    <div className="title" />
                    <div className="section-title">Online</div>
                    <div className="online">
                        {data.online &&
                            data.online.map(user => <OnlineUser key={user._id} user={user} />)}
                    </div>
                    <div className="section-title">Offline</div>
                    <div className="offline">
                        {data.offline &&
                            data.offline.map(user => <OfflineUser key={user._id} user={user} />)}
                    </div>
                </StyledTwitch>
            </Layout>
        );
    }
}

export default TwitchPage;
