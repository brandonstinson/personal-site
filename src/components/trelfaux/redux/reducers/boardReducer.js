const boardInitialState = {
  newBoardClicked: false,
};

const boardReducer = (state = boardInitialState, { type, payload }) => {
  switch (type) {
    case `NEW_BOARD_TOGGLE`:
      return Object.assign({}, state, { newBoardClicked: !state.newBoardClicked });
    case `ADD_BOARD_SUCCESS`:
      return Object.assign({}, state, { newBoardClicked: false });
    default:
      return state;
  }
};

export default boardReducer;
