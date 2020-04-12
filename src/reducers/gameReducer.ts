import {initialGame} from './initialState';
import {FETCH_GAME, VOTE_PLAYER, GameActionTypes} from '../actions/actionTypes';
import { IGameState } from '../store/types';

export function gameReducer(state: IGameState, action: GameActionTypes): IGameState {
  if(state === undefined) {
      return initialGame;
  }
  switch (action.type) {
    case FETCH_GAME:
      console.log('FETCH_GAME Action')
      return state;
    case VOTE_PLAYER:
      console.log('VOTE_PLAYER Action')
      return {...state, currentVote: action.playerId};
    default:
      return state;
  }
}