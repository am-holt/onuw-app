
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import RoleCard from './RoleCard';
import { IPlayer } from 'onuw-server-api';

export interface IPlayerDisplayProps {
    player: IPlayer;
}

export default class PlayerDisplay extends Component<IPlayerDisplayProps> {
  constructor(props : IPlayerDisplayProps){
    super(props);
  }
  render(){
    return (
        <div className="playerDisplay">
          <p>{this.props.player.name}</p>
          <RoleCard role={this.props.player.role}/>
        </div>
    )
  }
}