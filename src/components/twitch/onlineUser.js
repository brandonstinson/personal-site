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
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    justify-items: center;
    text-align: center;
  }
  .name {
    font-size: 2rem;
  }
  .desc {
    font-size: 1rem;
  }
`;

const OnlineUser = ({ user }) => (
  <StyledUser>
    <a href={`https://www.twitch.tv/${user.user_name}`}>
      <div className="container">
        <div className="name">{user.user_name}</div>
        <img
          src={user.thumbnail_url.replace(/{width}/g, `240`).replace(/{height}/g, `155`)}
          alt={`${user.user_name}'s logo`}
        />
        <div className="desc">{user.title}</div>
      </div>
    </a>
  </StyledUser>
);

OnlineUser.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default OnlineUser;
