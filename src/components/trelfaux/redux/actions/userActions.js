import firebase from '../../firebase';

// action types
const SIGN_UP_STARTED = `SIGN_UP_STARTED`;
const SIGN_UP_SUCCESS = `SIGN_UP_SUCCESS`;
const SIGN_UP_ERROR = `SIGN_UP_ERROR`;

const LOG_IN_STARTED = `LOG_IN_STARTED`;
const LOG_IN_SUCCESS = `LOG_IN_SUCCESS`;
const LOG_IN_ERROR = `LOG_IN_ERROR`;

const SIGN_OUT_SUCCESS = `SIGN_OUT_SUCCESS`;
const SIGN_OUT_ERROR = `SIGN_OUT_ERROR`;

// action creators
export const signUp = (email, password) => {
  return dispatch => {
    dispatch({ type: SIGN_UP_STARTED });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => dispatch({ type: SIGN_UP_SUCCESS, payload: res.user }))
      .catch(err => dispatch({ type: SIGN_UP_ERROR, payload: err }));
  };
};

export const logIn = (email, password) => {
  return dispatch => {
    dispatch({ type: LOG_IN_STARTED });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => dispatch({ type: LOG_IN_SUCCESS, payload: res.user }))
      .catch(err => dispatch({ type: LOG_IN_ERROR, payload: err }));
  };
};

export const signOut = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(dispatch({ type: SIGN_OUT_SUCCESS }))
      .catch(err => dispatch({ type: SIGN_OUT_ERROR, payload: err }));
  };
};
