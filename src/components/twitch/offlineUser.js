import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUser = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const OfflineUser = ({ user }) => (
  <StyledUser>
    <a href={`https://www.twitch.tv/${user}`}>
      <h3>{user}</h3>
    </a>
  </StyledUser>
);

OfflineUser.propTypes = {
  user: PropTypes.string.isRequired,
};

export default OfflineUser;
