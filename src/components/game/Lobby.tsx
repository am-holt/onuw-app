
import React, { Component, Dispatch } from 'react';
import { connect, useDispatch } from 'react-redux';
import { IGameState } from '../../store/types';
import { RootState } from '../../reducers/rootReducer';
import PlayerDisplay from './PlayerDisplay';
import VoteSelector from './VoteSelector';
import './GamePage.css'
import RoleCard from './RoleCard';
import { editName, startGame } from '../../actions/websocketActions';
import { IGame, Phase, IPlayer } from '@am-holt/onuw-server-api';

interface ILobbyProps {
    otherPlayers: IPlayer[];
    currentPlayer: IPlayer;
    startGame: () => void;
    editName: (newName:string) => void;
}

class Lobby extends Component<ILobbyProps> {
    constructor(props: ILobbyProps) {
        super(props);
    }

  render(){
    const anyOtherPlayers = this.props.otherPlayers.length === 0;
    return (
        <div className="lobby">
            <h1>Lobby:</h1>
            <div className="lobbyCurrentPlayer">
                {this.renderEditablePlayer(this.props.currentPlayer)}
            </div>
            <div className="lobbyOtherPlayers">
                Other Players:
                {anyOtherPlayers && <p>Waiting for other players...</p>}
                {this.props.otherPlayers.map(element => this.renderPlayer(element))}
            </div>
            <button onClick={this.props.startGame} disabled={anyOtherPlayers} hidden={anyOtherPlayers}>Start game!</button>
        </div>
    )
  }

  renderPlayer(player: IPlayer) {
    return(
      <div className="lobbyEntry">
        <input value={player.name} disabled={true} />
      </div>
    )
  }

  renderEditablePlayer(player: IPlayer) {
    return(
      <div className="lobbyEntry">
        <input value={player.name} onChange={(e) => this.props.editName(e.target.value)} />
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
    return {
        otherPlayers: state.game.otherPlayers,
        currentPlayer: state.game.currentPlayer,
    };
}

const mapDispatchToProps = {
    startGame,
    editName
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
