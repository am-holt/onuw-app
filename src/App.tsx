import React from 'react';
import GamePage from './components/game/GamePage';
import './App.css';
import { useDispatch } from 'react-redux';
import { votePlayer } from './actions/actionTypes';
import VoteSelector from './components/game/VoteSelector';

function App(){
  const dispatch = useDispatch();
  return (
    <div className="App">
      <GamePage/>
    </div>
  );
}

export default App;
