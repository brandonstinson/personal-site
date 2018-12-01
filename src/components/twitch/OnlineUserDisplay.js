import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import OnlineUser from './OnlineUser';

const StyledOnlineUserDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    width: 100%;
    > * {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 20px;
    }
`;

const OnlineUserDisplay = ({ users }) => (
    <StyledOnlineUserDisplay>
        {users.map(user => (
            <OnlineUser key={user._id} user={user} />
        ))}
    </StyledOnlineUserDisplay>
);

OnlineUserDisplay.propTypes = {
    users: PropTypes.instanceOf(Array).isRequired,
};

export default OnlineUserDisplay;
