/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-wrap-multilines */
import './App.css';
import React, { useState } from 'react';

import { Board, clearBoard } from './board';
import { puzzles } from './puzzles/puzzles';

const data = {};
clearBoard(data);
const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
randomPuzzle(data);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(Math.floor(Math.random() * puzzles.length));
  const [showAnswer, setShowAnswer] = useState(false);
  const newPuzzleIndex = () => {
    setIndex((prev) => {
      if (prev + 1 < puzzles.length) {
        return prev + 1;
      }
      return 0;
    });
  };

  const handleNextPuzzle = () => {
    setShowAnswer(false);
    newPuzzleIndex();
    const puzzleFunc = puzzles[index];
    clearBoard(data);
    puzzleFunc(data);
  };

  // eslint-disable-next-line no-unused-vars
  const handleShowHideClick = (e) => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      <h1>Chess Puzzles</h1>
      <div style={{ display: 'block' }}>
        <Board data={data} showAnswer={showAnswer} />
      </div>
      <div style={{ display: 'block', clear: 'left' }}>
        <button type="button" onClick={handleShowHideClick}>Hide/show answer</button>
      </div>
      <div style={{ marginTop: '1em', display: 'block', clear: 'left' }}>
        <button type="button" onClick={handleNextPuzzle}>Next puzzle</button>
      </div>
    </>);
}

export default App;
