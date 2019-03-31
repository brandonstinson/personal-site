import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useFormInput from '../hooks/useFormInput';
import { addBoard, newBoardToggle } from './redux/actions/boardActions';

const StyledAddBoard = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    align-items: center;
    input {
      width: 300px;
    }
    label {
      grid-column: 1 / -1;
    }
  }
  button {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background: white;
  }
  @media (min-width: 700px) {
    form {
      grid-template-columns: 1fr auto auto;
      label {
        grid-column: 1;
      }
    }
  }
`;

const AddBoard = ({ handleAddBoard, handleNewBoardToggle }) => {
  const [name, onNameChange] = useFormInput();

  const submit = e => {
    e.preventDefault();
    handleAddBoard(name);
  };

  return (
    <StyledAddBoard>
      <form onSubmit={submit}>
        <label htmlFor="boardName">
          <input
            type="text"
            id="boardName"
            placeholder="Board Name"
            value={name}
            onChange={onNameChange}
            required
          />
        </label>
        <button type="submit">Add Board</button>
        <button type="button" onClick={handleNewBoardToggle}>
          X
        </button>
      </form>
    </StyledAddBoard>
  );
};

AddBoard.propTypes = {
  handleAddBoard: PropTypes.func.isRequired,
  handleNewBoardToggle: PropTypes.func.isRequired,
};

const mapDispatch = dispatch => {
  return {
    handleAddBoard: board => {
      dispatch(addBoard(board));
    },
    handleNewBoardToggle: () => {
      dispatch(newBoardToggle());
    },
  };
};

export default connect(
  null,
  mapDispatch
)(AddBoard);
