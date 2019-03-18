import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

const withProvider = Component => {
  return () => (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default withProvider;
