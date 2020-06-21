import { IGame, IMessage, IPlayer } from "@am-holt/onuw-server-api";

export const FETCH_GAME = "FETCH_GAME"
export const FETCHED_GAME = "UPDATE_GAME_STATE"
export const VOTE_PLAYER = "VOTE_PLAYER"
export const FETCHED_GAME_TIME = "FETCHED_GAME_TIME"
export const FETCHED_PLAYER = "FETCHED_PLAYER"
export const SELECT_PLAYER = "SELECT_PLAYER"
export const RECEIVED_MESSAGE = "RECEIVED_MESSAGE"

interface FetchGameAction {
    type: typeof FETCH_GAME;
    gameId: string;
}

interface FetchedGameAction {
    type: typeof FETCHED_GAME;
    game: IGame;
}

interface FetchedGameTime {
    type: typeof FETCHED_GAME_TIME;
    time: number;
}

interface FetchedPlayer {
    type: typeof FETCHED_PLAYER;
    player: IPlayer;
}

interface ReceivedMessage {
    type: typeof RECEIVED_MESSAGE;
    message: IMessage;
}

interface SelectPlayer {
    type: typeof SELECT_PLAYER;
    playerId: String;
}

export type GameActionTypes = FetchGameAction  
    | FetchedGameAction 
    | FetchedGameTime 
    | FetchedPlayer 
    | ReceivedMessage
    | SelectPlayer;

export function getGame(gameId : string) : FetchGameAction {
    return {type: FETCH_GAME, gameId: gameId};
}

export function receivedGameState(gameState : IGame) : FetchedGameAction {
    return {type: FETCHED_GAME, game: gameState};
}

export function receivedGameTime(gameTime: number) {
    return {type: FETCHED_GAME_TIME, time: gameTime};
}

export function receivedPlayer(player: IPlayer) {
    return {type: FETCHED_PLAYER, player: player};
}

export function receivedMessage(message: IMessage) {
    return {type: RECEIVED_MESSAGE, message: message}
}

export function selectPlayer(player: IPlayer) {
    return {type: SELECT_PLAYER, playerId: player.id};
}