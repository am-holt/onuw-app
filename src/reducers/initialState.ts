import { IGameState } from "../store/types";

export const initialGame: IGameState = {
    otherPlayers: [{name: "Bob", id: 2, lastKnownRole: "Unknown"}, {name: "Alice", id: 3, lastKnownRole: "Unknown"},{name: "John", id: 4, lastKnownRole: "Unknown"}],
    currentPlayer: {name: "Jeff", id: 1, lastKnownRole: "Villager"},
    neutralCards: [{id: 6, lastKnownRole: "Unknown"},{id: 5, lastKnownRole: "Unknown"}],
    availableRoles: [],
    gamePhase: "Day",
    timeLeft: 0,
    currentVote: 0,
}