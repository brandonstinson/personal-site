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
    grid-gap: 5px;
  }
  .left {
    display: grid;
    grid-gap: 5px;
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
        <div className="left">
          <div className="name">{user.user_name}</div>
          <div className="desc">{user.title}</div>
        </div>
        <div className="right">
          <img
            src={user.thumbnail_url.replace(/{width}/g, '200').replace(/{height}/g, '130')}
            alt={`${user.user_name}'s logo`}
          />
        </div>
      </div>
    </a>
  </StyledUser>
);

OnlineUser.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default OnlineUser;
