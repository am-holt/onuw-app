
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { Role } from 'onuw-server-api';

export interface IRoleCardProps {
    role: Role;
    onClick: () => void;
}

export default class RoleCard extends Component<IRoleCardProps> {
  constructor(props : IRoleCardProps){
    super(props);
  }
  render(){
    return (
        <div className="roleCard" onClick={this.props.onClick}>
          {this.renderRole()}
        </div>
    )
  }
  
  renderRole() {
    if (this.props.role !== Role.HIDDEN) {
      return( <p>{this.props.role}</p>)   
    } else {
      return( <p>?</p>)   
    }
    
  }
}