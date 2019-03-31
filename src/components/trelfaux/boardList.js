import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AddBoard from './addBoard';

import { signOut } from './redux/actions/userActions';
import { newBoardToggle } from './redux/actions/boardActions';

const StyledBoardList = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
  button {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background: white;
  }
  .location {
    font-size: 2rem;
  }
`;

const BoardList = ({ board, handleSignOut, handleNewBoardToggle }) => {
  return (
    <StyledBoardList>
      <button onClick={handleSignOut} type="button">
        Log Out
      </button>
      <div className="location">Boards</div>
      {board.newBoardClicked ? (
        <AddBoard />
      ) : (
        <button type="button" onClick={handleNewBoardToggle}>
          New Board
        </button>
      )}
    </StyledBoardList>
  );
};

BoardList.propTypes = {
  board: PropTypes.instanceOf(Object).isRequired,
  handleSignOut: PropTypes.func.isRequired,
  handleNewBoardToggle: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    board: state.board,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSignOut: () => {
      dispatch(signOut());
    },
    handleNewBoardToggle: () => {
      dispatch(newBoardToggle());
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(BoardList);
