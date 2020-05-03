
import React, { Component } from 'react';
import RoleCard from './RoleCard';
import { IPlayer, Phase } from '@am-holt/onuw-server-api';

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
          <div className="playerName">
            {this.props.player.name}
          </div>
          {(this.props.phase === Phase.END || (this.props.phase === Phase.VOTE && this.props.player.votingFor))&& this.renderVote()}
          <RoleCard role={this.props.player.role} onClick={this.props.onClick}/>
        </div>
    )
  }

  renderVote() {
    const voteeId = this.props.player.votingFor;
    const votee = (voteeId? this.props.playerDisplayNames.get(voteeId) :"None!")
    return (
      <div className="playerVote">
        {(this.props.phase === Phase.END ? "Voted" : "Voting") + ": " + votee}
      </div>
    )
  }
}