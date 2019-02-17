import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import AuthForm from './authForm';

import { signUp } from '../../redux/actions/trelfauxActions';

const StyledSignUp = styled.div`
  display: grid;
  justify-content: center;
`;

const SignUp = ({ user, handleSignUp }) => (
  <StyledSignUp>
    {user.loading ? (
      <Loader type="Triangle" color="#000000" width={200} height={200} />
    ) : (
      <AuthForm user={user} onSubmitFunction={handleSignUp} />
    )}
  </StyledSignUp>
);

SignUp.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    user: state.trelfaux.user,
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
