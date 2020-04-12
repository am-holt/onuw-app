
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { Role, IPlayer } from '../../store/types';

export interface IRoleCardProps {
    isVisible: boolean;
    role: Role;
}

export default class RoleCard extends Component<IRoleCardProps> {
  constructor(props : IRoleCardProps){
    super(props);
  }
  render(){
    return (
        <div className="roleCard">
          {this.renderRole()}
        </div>
    )
  }
  
  renderRole() {
    if (this.props.isVisible && this.props.role !== "Unknown") {
      return( <p>{this.props.role}</p>)   
    } else {
      return( <p>?</p>)   
    }
    
  }
}