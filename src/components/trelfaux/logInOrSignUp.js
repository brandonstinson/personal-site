import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AuthForm from './authForm';

import { logIn, signUp } from './redux/actions/userActions';

const StyledLogInOrSignUp = styled.div`
  display: grid;
  grid-gap: 1rem;
  width: 400px;
  .tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    > * {
      background-color: white;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      border: none;
    }
  }
  .form {
    display: grid;
  }
  .bottom-border {
    border-bottom: solid 5px ${props => props.theme.yellow};
  }
`;

const LogInOrSignUp = ({ user, handleLogIn, handleSignUp }) => {
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
      <div className="form">
        <AuthForm
          user={user}
          onSubmitFunction={isLogIn ? handleLogIn : handleSignUp}
          buttonText={user.loading ? 'Loading...' : isLogIn ? 'Log In' : 'Sign Up'}
        />
      </div>
    </StyledLogInOrSignUp>
  );
};

LogInOrSignUp.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  handleLogIn: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    user: state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    handleLogIn: (email, password) => {
      dispatch(logIn(email, password));
    },
    handleSignUp: (email, password) => {
      dispatch(signUp(email, password));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(LogInOrSignUp);
