import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AuthForm from './authForm';
import LoadingIndicator from './loadingIndicator';

import { signUp } from './redux/actions/userActions';

const StyledSignUp = styled.div`
  display: grid;
`;

const SignUp = ({ user, handleSignUp }) => (
  <StyledSignUp>
    {user.loading ? <LoadingIndicator /> : null}
    <AuthForm user={user} onSubmitFunction={handleSignUp} />
  </StyledSignUp>
);

SignUp.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    user: state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSignUp: (email, password) => {
      dispatch(signUp(email, password));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(SignUp);
