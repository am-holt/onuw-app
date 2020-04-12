
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { Role, IPlayer } from '../../store/types';
import RoleCard from './RoleCard';

export interface IPlayerDisplayProps {
    isRoleVisible: boolean;
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
          <RoleCard role={this.props.player.lastKnownRole} isVisible={this.props.isRoleVisible}/>
        </div>
    )
  }
}