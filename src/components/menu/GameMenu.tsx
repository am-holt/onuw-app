
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './GameMenu.css';

class GameMenu extends Component {

  state = { gameId: undefined };
    
  render(){
    return (
        <div className="gameMenu">
            <h1>One Night Ultimate Werewolf!</h1>
            <button onClick={this.startNewGame} className="newGameBtn">Start new game</button>
            {this.state.gameId !== undefined && <Redirect to={"/game/".concat((this.state.gameId as unknown) as string)} />}
        </div>
    )
  }

  startNewGame = () => {
    fetch('http://' + process.env.REACT_APP_API_URL + '/api/onuw/new', {
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
