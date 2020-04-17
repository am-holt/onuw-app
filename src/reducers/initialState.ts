import { IGameState } from "../store/types";
import {IGame, Role, Phase} from "onuw-server-api";

// export const initialGame: IGameState = {
//     otherPlayers: [{name: "Bob", id: "2", lastKnownRole: "Unknown"}, {name: "Alice", id: "3", lastKnownRole: "Unknown"},{name: "John", id: "4", lastKnownRole: "Unknown"}],
//     currentPlayer: {name: "Jeff", id: "2", lastKnownRole: "Villager"},
//     neutralCards: [{id: "6", lastKnownRole: "Unknown"},{id: "5", lastKnownRole: "Unknown"}],
//     availableRoles: [],
//     gamePhase: "Day",
//     timeLeft: 0,
//     currentVote: 0,
//     gameId : 12,
// }

export const initialGame: IGame = {
        otherPlayers: [],
        currentPlayer: {name: "0", id: "0", role: Role.HIDDEN},
        neutralCards: [],
        availableRoles: [],
        currentPhase: Phase.LOBBY,
        timeLeft: 0,
        currentVote: "",
        gameId : "12",
    }