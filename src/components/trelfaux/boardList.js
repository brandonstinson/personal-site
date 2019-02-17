import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import firebase from './firebase';
import { logOut } from '../../redux/actions/trelfauxActions';

const StyledBoardList = styled.div`
  display: grid;
`;

const BoardList = ({ user, handleLogOut }) => {
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
      <button onClick={handleLogOut} type="button">
        Log Out
      </button>
      <h1>Board List</h1>
    </StyledBoardList>
  );
};

BoardList.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapState = state => {
  return {
    user: state.trelfaux.user,
  };
};

const mapDispatch = dispatch => {
  return {
    handleLogOut: () => {
      dispatch(logOut());
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(BoardList);
