import React from 'react';
import GamePage from './components/game/GamePage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteComponentProps,
  useHistory
} from "react-router-dom";
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
