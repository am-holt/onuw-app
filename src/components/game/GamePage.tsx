
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IGameState } from '../../store/types';
import { RootState } from '../../reducers/rootReducer';
import PlayerDisplay from './PlayerDisplay';
import VoteSelector from './VoteSelector';
import './GamePage.css'
import RoleCard from './RoleCard';

interface IGamePageProps {
    gameState: IGameState;
}

class GamePage extends Component<IGamePageProps> {
  constructor(props: IGamePageProps) {
      super(props);
  }

  render(){
    const areCardsVisible = this.props.gameState.gamePhase === "Day";
    return (
        <div className="gamePage">
            <div className="otherPlayers">
                {this.props.gameState.otherPlayers.map(element => <PlayerDisplay isRoleVisible={areCardsVisible} player={element}/>)}
            </div>
            <div className="neutralCards">
                {this.props.gameState.neutralCards.map(element => <RoleCard isVisible={areCardsVisible} role={element.lastKnownRole}/>)}
            </div>
            <div className="currentPlayer">
                <PlayerDisplay isRoleVisible={areCardsVisible} player={this.props.gameState.currentPlayer}/>
            </div>
            <div className="vote">
                <VoteSelector/>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
    return {gameState: state.game};
}

export default connect(mapStateToProps)(GamePage);
