import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';
import { rootState } from './components/interface';

function App() {
  const board = useSelector((state: rootState) => state.board.board);
  return (
    <div className="App">
      <Header type="h1" text="Wordiee" />
      <Header type="subtitle" text="Another Wordle Clone" />
      <div className='board-container'>
        <Board board={board}/>
      </div>
    </div>
  );
}

export default App;
