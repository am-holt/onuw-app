import { IGame, MessageLevel } from "@am-holt/onuw-server-api";
import { toast } from 'react-toastify';
import { FETCHED_GAME, FETCHED_GAME_TIME, FETCHED_PLAYER, FETCH_GAME, GameActionTypes, RECEIVED_MESSAGE } from '../actions/actionTypes';
import { initialGame } from './initialState';

export function gameReducer(state: IGame, action: GameActionTypes): IGame {
  if (state === undefined) {
      return initialGame;
  }
  switch (action.type) {
    case FETCH_GAME:
      console.log('FETCH_GAME Action')
      return state;
    case FETCHED_GAME:
      console.log('FETCHED_GAME Action')
      return action.game;
    case FETCHED_GAME_TIME:
      console.log('Game time action')
      return {...state, timeLeft: action.time};
    case RECEIVED_MESSAGE:
      console.log("Received message")
      if (action.message.level === MessageLevel.INFO) {
        toast.info(action.message.message)
      } else if (action.message.level === MessageLevel.WARNING) {
        toast.warn(action.message.message)
      } else if (action.message.level === MessageLevel.ERROR) {
        toast.error(action.message.message)
      } else {
        toast.info(action.message.message)
      }
      return state;
    case FETCHED_PLAYER:
      console.log('player action')
      const updatedPlayer = action.player;
      if (state.currentPlayer.id === updatedPlayer.id) {
        return {...state, currentPlayer: updatedPlayer};    
      } else if (state.otherPlayers.some(player => player.id === updatedPlayer.id)) {
        const otherPlayers = state.otherPlayers.filter(x => x.id !== updatedPlayer.id).concat(updatedPlayer)
        return {...state, otherPlayers};    
      } else if (state.neutralCards.some(player => player.id === updatedPlayer.id)) {
        const neutralCards = state.neutralCards.filter(x => x.id !== updatedPlayer.id).concat(updatedPlayer)
        return {...state, neutralCards};    
      }
      return state;
    default:
      return state;
  }
}