import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import firebase from './firebase';
import { signOut } from './redux/actions/userActions';

const StyledBoardList = styled.div`
  display: grid;
`;

const BoardList = ({ user, handleSignOut }) => {
  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('boards')
      .get()
      .then(res =>
        res.docs.forEach(doc => {
          console.log(doc.data());
        })
      );
  });

  return (
    <StyledBoardList>
      <button onClick={handleSignOut} type="button">
        Log Out
      </button>
      <h1>Board List</h1>
    </StyledBoardList>
  );
};

BoardList.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapState = state => {
  return {
    user: state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSignOut: () => {
      dispatch(signOut());
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(BoardList);
