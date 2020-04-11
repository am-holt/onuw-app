export interface IGameState {
    //otherPlayers: IPlayer[];
    //currentPlayer: IPlayer;
    //availableRole: string[];
    timeLeft: number;
    currentVote: number;
}

export interface IPlayer {
    id: IPlayerId;
    name: string;
    lastKnownRole: string;
}

 export type IPlayerId = number;