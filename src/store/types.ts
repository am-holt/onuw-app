export interface IGameState {
    otherPlayers: IPlayer[];
    neutralCards: INeutral[];
    currentPlayer: IPlayer;
    availableRoles: Role[];
    gamePhase: GamePhase;
    timeLeft: number;
    currentVote: number;
}

export interface IPlayer {
    id: IPlayerId;
    name: string;
    lastKnownRole: Role;
}

export interface INeutral {
    id: IPlayerId;
    lastKnownRole: Role;
}

export type Role = "Villager" | "Werewolf" | "Unknown"

export type GamePhase = "Day" | NightGamePhase | "Vote"

export type NightGamePhase = "Werewolf"

export type IPlayerId = number;