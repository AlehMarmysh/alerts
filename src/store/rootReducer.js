import { combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { globalAlert } from './globalAlert/reducer';

const rootReducer = combineReducers({
  globalAlert,
});

export const store = createStore(rootReducer, composeWithDevTools());
