import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LogInOrSignUp from './logInOrSignUp';
import BoardList from './boardList';

const Boards = ({ user }) => (user.uid ? <BoardList /> : <LogInOrSignUp />);

Boards.propTypes = {
  user: PropTypes.instanceOf(Object),
};

const mapState = state => {
  return {
    user: state.user,
  };
};

export default connect(mapState)(Boards);
