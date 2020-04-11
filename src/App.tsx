import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { votePlayer } from './actions/actionTypes';
import VoteSelector from './components/voteSelector';

function App(){
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => {console.log("voting now"); dispatch(votePlayer(1))}}>Jeff!</button>
          <VoteSelector/>
        </p>
      </header>
    </div>
  );
}

export default App;
