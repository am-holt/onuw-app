import {initialGame} from './initialState';
import {FETCH_GAME, VOTE_PLAYER, GameActionTypes, FETCHED_GAME, FETCHED_GAME_TIME, FETCHED_PLAYER} from '../actions/actionTypes';
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
    case FETCHED_GAME_TIME:
      console.log('Game time action')
      return {...state, timeLeft: action.time};
    case FETCHED_PLAYER:
      console.log('player action')
      const updatedPlayer = action.player;
      if (state.currentPlayer.id === updatedPlayer.id) {
        return {...state, currentPlayer: updatedPlayer};    
      } else {
        const otherPlayers = state.otherPlayers.filter(x => x.id !== updatedPlayer.id).concat(updatedPlayer)
        return {...state, otherPlayers};    
      }
      
    default:
      return state;
  }
}