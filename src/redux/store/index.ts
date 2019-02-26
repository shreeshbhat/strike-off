import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const configureStore = (preloadedState: any) =>
  createStore(rootReducer, preloadedState);

export { configureStore };