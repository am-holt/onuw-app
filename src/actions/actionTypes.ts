
export const FETCH_GAME = "FETCH_GAME"
export const VOTE_PLAYER = "VOTE_PLAYER"

interface FetchGameAction {
    type: typeof FETCH_GAME;
    gameId: number;
}

interface VotePlayerAction {
    type: typeof VOTE_PLAYER;
    playerId: number;
}

export type GameActionTypes = VotePlayerAction | FetchGameAction;

export function getGame(gameId : number) : FetchGameAction {
    return {type: FETCH_GAME, gameId: gameId};
}

export function votePlayer(playerId : number) {
    return {type: VOTE_PLAYER, playerId: playerId};
}

