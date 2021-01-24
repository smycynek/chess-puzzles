/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-wrap-multilines */
import './App.css';
import React from 'react';

import { Board, clearBoard } from './board';
import { puzzles } from './puzzles/puzzles';

const data = {};
clearBoard(data);
const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
randomPuzzle(data);

function App() {
  return (
    <>
      <h1>Random Chess Puzzle</h1>
      <div style={{ display: 'block' }}>
        <Board data={data} />
      </div>
    </>);
}

export default App;
