
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import RoleCard from './RoleCard';
import { IPlayer, Phase } from 'onuw-server-api';

export interface IPlayerDisplayProps {
    player: IPlayer;
    playerDisplayNames: Map<string,string>;
    phase: Phase;
    onClick: () => void;
}

export default class PlayerDisplay extends Component<IPlayerDisplayProps> {
  constructor(props : IPlayerDisplayProps){
    super(props);
  }
  render(){
    return (
        <div className="playerDisplay">
          <p>{this.props.player.name}</p>
          {(this.props.phase === Phase.END || (this.props.phase === Phase.VOTE && this.props.player.votingFor))&& this.getVoteString()}
          <RoleCard role={this.props.player.role} onClick={this.props.onClick}/>
        </div>
    )
  }

  getVoteString() {
    const voteeId = this.props.player.votingFor;
    const votee = (voteeId? this.props.playerDisplayNames.get(voteeId) :"None!")
    return (this.props.phase === Phase.END ? "Voted" : "Voting") + ": " + votee;
  }
}