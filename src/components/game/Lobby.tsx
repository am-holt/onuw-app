
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import './GamePage.css'
import { editName, startGame } from '../../actions/websocketActions';
import { IPlayer } from '@am-holt/onuw-server-api';

interface ILobbyProps {
    otherPlayers: IPlayer[];
    currentPlayer: IPlayer;
    startGame: () => void;
    editName: (newName:string) => void;
}

class Lobby extends Component<ILobbyProps> {

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
