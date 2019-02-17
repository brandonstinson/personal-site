import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './sessionStorage';
import rootReducer from './reducers/rootReducer';

const persistedState = loadState();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
