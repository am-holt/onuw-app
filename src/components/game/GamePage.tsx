
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

interface IOtherProps {
    gameId: string;
}

interface IGamePageProps {
    gameState: IGame;
    gameId: string;
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
        const host = `ws://127.0.0.1:8080/onuw/game/${this.props.gameId}`;
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
                {this.props.gameState.otherPlayers.sort((a,b)=> a.id > b.id ? 1 : (a.id ==b.id?0 :-1)).map(element => <PlayerDisplay player={element} playerDisplayNames={this.getPlayerDisplayNames()} onClick={() => this.props.selectPlayer(element)} phase={this.props.gameState.currentPhase}/>)}
            </div>
            <div className="neutralCards">
                {this.props.gameState.neutralCards.sort((a,b)=> a.id > b.id ? 1 : (a.id ==b.id?0 :-1)).map(element => <RoleCard role={element.role} onClick={()=> this.props.selectPlayer(element)}/>)}
            </div>
            <div className="currentPlayer">
                <PlayerDisplay player={this.props.gameState.currentPlayer} playerDisplayNames={this.getPlayerDisplayNames()} onClick={() => this.props.selectPlayer(this.props.gameState.currentPlayer)} phase={this.props.gameState.currentPhase}/>
            </div>
            <div className="status">
                {this.maybeShowWinner()}
                {this.maybeRenderPhaseInfo()}
            </div>
        </div>
      )
  }

  maybeShowWinner() {
      if (this.props.gameState.winningTeam) {
        return (<h1>Winning Team: {this.props.gameState.winningTeam}</h1>)
      } else {
        return;
      }
  }

  maybeRenderPhaseInfo() {
    if (!this.props.gameState.winningTeam) {
        return (
            <div>
              <h1>
                Phase: {this.props.gameState.currentPhase}
              </h1>
              Time: {this.props.gameState.timeLeft}
            </div>)
    } else {
        return;
    }
  }
  
  getPlayerDisplayNames() {
      const result = new Map<string, string>();
      result.set(this.props.gameState.currentPlayer.id, this.props.gameState.currentPlayer.name);
      this.props.gameState.otherPlayers.forEach(p => result.set(p.id, p.name));
      return result;
  }
}

const mapStateToProps = (state: RootState, otherProps: IOtherProps) => {
    console.log(otherProps)
    return {gameState: state.game, gameId:otherProps.gameId};
}

const mapDispatchToProps = {
    wsConnect,
    startGame,
    selectPlayer,
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
