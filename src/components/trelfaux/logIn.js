import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AuthForm from './authForm';
import LoadingIndicator from './loadingIndicator';

import { logIn } from './redux/actions/userActions';

const StyledLogIn = styled.div`
  display: grid;
`;

const LogIn = ({ user, handleLogIn }) => (
  <StyledLogIn>
    {user.loading ? <LoadingIndicator /> : null}
    <AuthForm user={user} onSubmitFunction={handleLogIn} />
  </StyledLogIn>
);

LogIn.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  handleLogIn: PropTypes.func.isRequired,
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
  };
};

export default connect(
  mapState,
  mapDispatch
)(LogIn);
