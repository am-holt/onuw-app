import { IGameState } from "../store/types";
import { IGame } from "onuw-server-api";

export const FETCH_GAME = "FETCH_GAME"
export const FETCHED_GAME = "UPDATE_GAME_STATE"
export const VOTE_PLAYER = "VOTE_PLAYER"

interface FetchGameAction {
    type: typeof FETCH_GAME;
    gameId: string;
}

interface FetchedGameAction {
    type: typeof FETCHED_GAME;
    game: IGame;
}

interface VotePlayerAction {
    type: typeof VOTE_PLAYER;
    playerId: string;
}

export type GameActionTypes = VotePlayerAction | FetchGameAction | FetchedGameAction;

export function getGame(gameId : string) : FetchGameAction {
    return {type: FETCH_GAME, gameId: gameId};
}

export function receivedGameState(gameState : IGame) : FetchedGameAction {
    return {type: FETCHED_GAME, game: gameState};
}

export function votePlayer(playerId : string) {
    return {type: VOTE_PLAYER, playerId: playerId};
}

