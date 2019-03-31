import firebase from '../../firebase';

const db = firebase.firestore();

// action types
const NEW_BOARD_TOGGLE = `NEW_BOARD_TOGGLE`;
const ADD_BOARD_SUCCESS = `ADD_BOARD_SUCCESS`;

// action creators
export const newBoardToggle = () => {
  return dispatch => {
    dispatch({ type: NEW_BOARD_TOGGLE });
  };
};

export const addBoard = board => {
  return (dispatch, getState) => {
    const state = getState();
    const { uid } = state.user;
    db.collection(`boards`)
      .add({
        boardName: board,
        createdBy: uid,
        lists: [],
      })
      .then(dispatch({ type: ADD_BOARD_SUCCESS }))
      .catch(err => console.log(err));
  };
};
