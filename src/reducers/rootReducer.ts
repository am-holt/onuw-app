import {combineReducers} from 'redux';
import {gameReducer} from './gameReducer';
import { IGame } from 'onuw-server-api';

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;

export type RootState = {game : IGame}