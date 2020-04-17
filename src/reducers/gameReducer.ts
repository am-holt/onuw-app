import {initialGame} from './initialState';
import {FETCH_GAME, VOTE_PLAYER, GameActionTypes, FETCHED_GAME} from '../actions/actionTypes';
//import { IGameState } from '../store/types';
import {IGame} from "onuw-server-api";

export function gameReducer(state: IGame, action: GameActionTypes): IGame {
  if(state === undefined) {
      return initialGame;
  }
  switch (action.type) {
    case FETCH_GAME:
      console.log('FETCH_GAME Action')
      return state;
    case FETCHED_GAME:
      console.log('FETCHED_GAME Action')
      return action.game;
    case VOTE_PLAYER:
      console.log('VOTE_PLAYER Action')
      return {...state, currentVote: action.playerId};
    default:
      return state;
  }
}