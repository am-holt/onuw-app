import { IGameState } from "../store/types";
import { IGame, IPlayer } from "onuw-server-api";

export const FETCH_GAME = "FETCH_GAME"
export const FETCHED_GAME = "UPDATE_GAME_STATE"
export const VOTE_PLAYER = "VOTE_PLAYER"
export const FETCHED_GAME_TIME = "FETCHED_GAME_TIME"
export const FETCHED_PLAYER = "FETCHED_PLAYER"


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

interface FetchedGameTime {
    type: typeof FETCHED_GAME_TIME;
    time: number;
}

interface FetchedPlayer {
    type: typeof FETCHED_PLAYER;
    player: IPlayer;
}

export type GameActionTypes = VotePlayerAction | FetchGameAction | FetchedGameAction | FetchedGameTime | FetchedPlayer;

export function getGame(gameId : string) : FetchGameAction {
    return {type: FETCH_GAME, gameId: gameId};
}

export function receivedGameState(gameState : IGame) : FetchedGameAction {
    return {type: FETCHED_GAME, game: gameState};
}

export function votePlayer(playerId : string) {
    return {type: VOTE_PLAYER, playerId: playerId};
}

export function receivedGameTime(gameTime: number) {
    return {type: FETCHED_GAME_TIME, time: gameTime};
}

export function receivedPlayer(player: IPlayer) {
    return {type: FETCHED_PLAYER, player: player};
}