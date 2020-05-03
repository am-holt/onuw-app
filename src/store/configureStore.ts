import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import socketMiddleware from './websocketMiddleware';

export default function configureStore() {
    return createStore(
      rootReducer,
      applyMiddleware(socketMiddleware),
    );
  }