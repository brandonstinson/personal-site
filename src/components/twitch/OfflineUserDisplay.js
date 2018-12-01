import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import OfflineUser from './OfflineUser';

const StyledOfflineUserDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    width: 100%;
    > * {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 20px;
    }
`;

const OfflineUserDisplay = ({ users }) => (
    <StyledOfflineUserDisplay>
        {users.map(user => (
            <OfflineUser key={user._id} user={user} />
        ))}
    </StyledOfflineUserDisplay>
);

OfflineUserDisplay.propTypes = {
    users: PropTypes.instanceOf(Array).isRequired,
};

export default OfflineUserDisplay;
