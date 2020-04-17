
import React, { Component, Dispatch } from 'react';
import { connect, useDispatch } from 'react-redux';
import { IGameState } from '../../store/types';
import { RootState } from '../../reducers/rootReducer';
import PlayerDisplay from './PlayerDisplay';
import VoteSelector from './VoteSelector';
import './GamePage.css'
import RoleCard from './RoleCard';
import { wsConnect, startGame } from '../../actions/websocketActions';
import { IGame, Phase } from 'onuw-server-api';

interface IGamePageProps {
    gameState: IGame;
    wsConnect: (host: any) => void;
    startGame: () => void;
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
    const areCardsVisible = this.props.gameState.currentPhase === Phase.DAY;
    return (
        <div className="gamePage">
            <div className="otherPlayers">
                {this.props.gameState.otherPlayers.map(element => <PlayerDisplay player={element}/>)}
            </div>
            <div className="neutralCards">
                {this.props.gameState.neutralCards.map(element => <RoleCard role={element.role}/>)}
            </div>
            <div className="currentPlayer">
                <PlayerDisplay player={this.props.gameState.currentPlayer}/>
            </div>
            <div className="vote">
                <VoteSelector/>
                {this.props.gameState.currentPhase === Phase.LOBBY && <button onClick={() => this.props.startGame()}> Start</button>}
                {this.props.gameState.timeLeft}
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
    startGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
