import React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from "react-router-dom";
import './App.css';
import GamePage from './components/game/GamePage';
import GameMenu from './components/menu/GameMenu';

function App(){

  return (
    <div className="App">
      <Router basename={'/onuw-server'}>
        <Switch>
          {/* Move below into own component then can useHistory */}
          <Route exact path="/" component={GameMenu} />
          <Route path="/game/:gameId" render={renderGamePage} />
        </Switch>
      </Router>
    </div>
  );
}

const renderGamePage = ( match :RouteComponentProps<any> ) => {
  return (<GamePage gameId={match.match.params.gameId}/>)
}

export default App;
