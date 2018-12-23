import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUser = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 1vw;
  }
  .left {
    display: grid;
    grid-gap: 1vw;
  }
`;

const OnlineUser = ({ user }) => (
  <StyledUser>
    <a href={user.url}>
      <div className="container">
        <div className="left">
          <h1>{user.display_name}</h1>
          <h3>{user.game}</h3>
          <p>{user.status}</p>
        </div>
        <div className="right">
          <img src={user.logo} alt={`${user.name}'s logo`} width="100" />
        </div>
      </div>
    </a>
  </StyledUser>
);

OnlineUser.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default OnlineUser;
