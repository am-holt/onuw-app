
import React, { Component } from 'react';
import { RoleType } from '@am-holt/onuw-server-api';

export interface IRoleCardProps {
    role: RoleType;
    onClick: () => void;
}

export default class RoleCard extends Component<IRoleCardProps> {

  render(){
    return (
        <div className="roleCard" onClick={this.props.onClick}>
          {this.renderRole()}
        </div>
    )
  }
  
  renderRole() {
    if (this.props.role !== RoleType.HIDDEN) {
      return( <p>{this.props.role}</p>)   
    } else {
      return( <p>?</p>)   
    }
    
  }
}