const userInitialState = {
  uid: '',
  email: '',
  loading: false,
  error: false,
  message: '',
};

const userReducer = (state = userInitialState, { type, payload }) => {
  switch (type) {
    case 'SIGN_UP_STARTED':
      return Object.assign({}, state, { loading: true });
    case 'SIGN_UP_SUCCESS':
      return Object.assign({}, state, {
        uid: payload.uid,
        email: payload.email,
        loading: false,
        error: false,
        message: '',
      });
    case 'SIGN_UP_ERROR':
      return Object.assign({}, state, {
        error: true,
        message: payload.message,
        loading: false,
      });
    case 'LOG_IN_STARTED':
      return Object.assign({}, state, { loading: true });
    case 'LOG_IN_SUCCESS':
      return Object.assign({}, state, {
        uid: payload.uid,
        email: payload.email,
        loading: false,
        error: false,
        message: '',
      });
    case 'LOG_IN_ERROR':
      return Object.assign({}, state, {
        error: true,
        message: payload.message,
        loading: false,
      });
    case 'SIGN_OUT_SUCCESS':
      return Object.assign({}, { ...userInitialState });
    case 'SIGN_OUT_ERROR':
      return Object.assign({}, state, { error: true, message: payload.message });
    default:
      return state;
  }
};

export default userReducer;
