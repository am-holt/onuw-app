
import React, { Component, Dispatch } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory, withRouter, Redirect } from 'react-router-dom';

interface IState {
    gameId: undefined | string
}

class GameMenu extends Component {

  state = { gameId: undefined };
    
  render(){
    return (
        <div className="gameMenu">
            <button onClick={this.startNewGame}>Start new game</button>
            {this.state.gameId !== undefined && <Redirect to={"/game/".concat((this.state.gameId as unknown) as string)} />}
        </div>
    )
  }

  startNewGame = () => {
    fetch('http://localhost:8080/onuw/new', {
      method: 'POST'
    }).then(response => response.json())
    .then(data => {
      let path = `game/` + data.gameId;
      console.log("gameId")
      console.log(path)
      this.setState({gameId: data.gameId})
    });
  }
  
}
export default GameMenu;
