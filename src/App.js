/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-wrap-multilines */
import './App.css';
import React, { useState } from 'react';

import { Board, clearBoard } from './board';
import { puzzles } from './puzzles/puzzles';
import infoButton from './images/information-button.svg';

const data = {};
clearBoard(data);
const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
randomPuzzle(data);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(Math.floor(Math.random() * puzzles.length));
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
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

  // eslint-disable-next-line no-unused-vars
  const handleShowAboutClick = (e) => {
    setShowAbout(!showAbout);
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

      <div style={{ marginTop: '1em', display: 'block', clear: 'left' }}>
        <img style={{ width: '1.5em', height: '1.5em' }} alt="info" src={infoButton} onClick={handleShowAboutClick} />
        { showAbout &&
        <ul>
          <li><a href="https://github.com/smycynek/chess-puzzles">https://github.com/smycynek/chess-puzzles</a></li>
          <li>
            Icons by
            {' '}
            <a href="https://en.wikipedia.org/wiki/User:Cburnett" title="en:User:Cburnett">Cburnett</a>
            ,
            <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>
            ,
            <a href="https://commons.wikimedia.org/w/index.php?curid=1496656">Wikimedia</a>
            {' '}
            and
            {' '}
            <a href="http://Artua.com">Artua.com</a>
          </li>
        </ul>}
      </div>

    </>);
}

export default App;
