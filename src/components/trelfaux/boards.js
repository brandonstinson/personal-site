import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LogInOrSignUp from './logInOrSignUp';
import BoardList from './boardList';

const StyledBoards = styled.div`
  display: grid;
  justify-content: center;
`;

const Boards = ({ user }) => (
  <StyledBoards>{user.uid ? <BoardList /> : <LogInOrSignUp />}</StyledBoards>
);

Boards.propTypes = {
  user: PropTypes.instanceOf(Object),
};

const mapState = state => {
  return {
    user: state.trelfaux.user,
  };
};

export default connect(mapState)(Boards);
