import { combineReducers } from 'redux';

import trelfauxReducer from './trelfauxReducers';

const rootReducer = combineReducers({
  trelfaux: trelfauxReducer,
});

export default rootReducer;
