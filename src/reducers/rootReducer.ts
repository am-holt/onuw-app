import {combineReducers} from 'redux';
import {gameReducer} from './gameReducer';
import { IGameState } from '../store/types';

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;

export type RootState = {game : IGameState}