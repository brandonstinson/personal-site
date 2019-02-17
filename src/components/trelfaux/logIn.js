import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import AuthForm from './authForm';

import { logIn } from '../../redux/actions/trelfauxActions';

const StyledLogIn = styled.div`
  display: grid;
  justify-content: center;
`;

const LogIn = ({ user, handleLogIn }) => (
  <StyledLogIn>
    {user.loading ? (
      <Loader type="Triangle" color="#000000" width={200} height={200} />
    ) : (
      <AuthForm user={user} onSubmitFunction={handleLogIn} />
    )}
  </StyledLogIn>
);

LogIn.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  handleLogIn: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    user: state.trelfaux.user,
  };
};

const mapDispatch = dispatch => {
  return {
    handleLogIn: (email, password) => {
      dispatch(logIn(email, password));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(LogIn);
