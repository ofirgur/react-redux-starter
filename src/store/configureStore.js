import { createStore } from 'redux';

import createRootReducer from 'reducers';
import createRootMiddleware from 'middlewares';

const configureStore = (preloadedState = {}, history) => {
  const store = createStore(
    createRootReducer({}, history), // root reducer with router state
    preloadedState,
    createRootMiddleware(history)
  );

  return store;
};

export default configureStore;

