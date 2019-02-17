import React, { useState } from 'react';
import styled from 'styled-components';

import LogIn from './logIn';
import SignUp from './signUp';

const StyledLogInOrSignUp = styled.div`
  display: grid;
  grid-gap: 1rem;
  .tabs {
    display: flex;
    > * {
      flex-grow: 1;
      padding: 1rem 2rem;
      font-size: 2rem;
      border: none;
    }
  }
  .bottom-border {
    border-bottom: solid 5px ${props => props.theme.yellow};
  }
`;

const LogInOrSignUp = () => {
  const [isLogIn, setIsLogIn] = useState(true);

  return (
    <StyledLogInOrSignUp>
      <div className="tabs">
        <button
          type="button"
          onClick={() => setIsLogIn(true)}
          className={isLogIn ? 'bottom-border' : null}>
          Log In
        </button>
        <button
          type="button"
          onClick={() => setIsLogIn(false)}
          className={isLogIn ? null : 'bottom-border'}>
          Sign Up
        </button>
      </div>
      {isLogIn ? <LogIn /> : <SignUp />}
    </StyledLogInOrSignUp>
  );
};

export default LogInOrSignUp;
