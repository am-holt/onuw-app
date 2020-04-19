
import React, { Component, Dispatch } from 'react';
import { connect, useDispatch } from 'react-redux';
import { selectPlayer} from '../../actions/actionTypes'
import { RootState } from '../../reducers/rootReducer';
import PlayerDisplay from './PlayerDisplay';
import VoteSelector from './VoteSelector';
import './GamePage.css'
import RoleCard from './RoleCard';
import { wsConnect, startGame } from '../../actions/websocketActions';
import { IGame, Phase, IPlayer } from 'onuw-server-api';
import Lobby from './Lobby';

interface IGamePageProps {
    gameState: IGame;
    wsConnect: (host: any) => void;
    startGame: () => void;
    selectPlayer: (player:IPlayer) => void;
}

class GamePage extends Component<IGamePageProps> {
    constructor(props: IGamePageProps) {
        super(props);
    }
    
    componentDidMount = () => {
        if (this.props.gameState.gameId) {
            this.connectAndJoin();
        }
    }
    
    connectAndJoin = () => {
        const host = `ws://127.0.0.1:8080/onuw/${this.props.gameState.gameId}`;
        console.log("connect")
        this.props.wsConnect(host);
    }

  render(){
      const inLobby = this.props.gameState.currentPhase === Phase.LOBBY;
    return (
        <div className="gamePage">
            {inLobby && <Lobby/>}
            {!inLobby && this.renderCardView()}
        </div>
    )
  }

  renderCardView() {
      return(
        <div className="cardView">
            <div className="otherPlayers">
                {this.props.gameState.otherPlayers.map(element => <PlayerDisplay player={element} onClick={() => this.props.selectPlayer(element)}/>)}
            </div>
            <div className="neutralCards">
                {this.props.gameState.neutralCards.map(element => <RoleCard role={element.role} onClick={()=> this.props.selectPlayer(element)}/>)}
            </div>
            <div className="currentPlayer">
                <PlayerDisplay player={this.props.gameState.currentPlayer} onClick={() => this.props.selectPlayer(this.props.gameState.currentPlayer)}/>
            </div>
            <div className="status">
                <h1>
                Current Phase: {this.props.gameState.currentPhase}
                </h1>
                {this.props.gameState.currentPhase === Phase.VOTE && <VoteSelector/>}
                Time left: {this.props.gameState.timeLeft}
            </div>
        </div>
      )
  }
}

const mapStateToProps = (state: RootState) => {
    return {gameState: state.game};
}

const mapDispatchToProps = {
    wsConnect,
    startGame,
    selectPlayer,
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
