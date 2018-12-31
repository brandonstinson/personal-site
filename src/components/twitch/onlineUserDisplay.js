import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import OnlineUser from './onlineUser';

const StyledOnlineUserDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  > * {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }
`;

const OnlineUserDisplay = ({ users }) => (
  <StyledOnlineUserDisplay>
    {users.map((user, index) => (
      <OnlineUser key={index} user={user.data[0]} />
    ))}
  </StyledOnlineUserDisplay>
);

OnlineUserDisplay.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
};

export default OnlineUserDisplay;
