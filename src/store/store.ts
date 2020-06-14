import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from './root-reducer';

function configureStore(initialState?: {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk as ThunkMiddleware<RootState, any>),
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
