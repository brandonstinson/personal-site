import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUser = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const OfflineUser = ({ user }) => (
  <StyledUser>
    <a href={user.url}>
      <h3>{user}</h3>
    </a>
  </StyledUser>
);

OfflineUser.propTypes = {
  user: PropTypes.string.isRequired,
};

export default OfflineUser;
