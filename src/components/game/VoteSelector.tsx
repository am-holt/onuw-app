
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IGameState } from '../../store/types';
import { RootState } from '../../reducers/rootReducer';

export interface IVoteSelectorProps {
    currentVote : string | null | undefined;
}

class VoteSelector extends Component<IVoteSelectorProps> {
  constructor(props : IVoteSelectorProps){
    super(props);
  }
  render(){
    console.log("test");
      console.log(this.props.currentVote);
    return (
          <h1>
          Current vote: {this.props.currentVote}
          </h1>
    )
  }
}

const mapStateToProps = (state: RootState) : IVoteSelectorProps => {
    return {
        currentVote: state.game.currentPlayer.votingFor
    };
}

export default connect(mapStateToProps)(VoteSelector);