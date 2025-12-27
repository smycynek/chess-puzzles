/* eslint-disable react/jsx-filename-extension */

import 'bootstrap/dist/css/bootstrap.css';
import './css/app.css';

import React, { useState, useEffect, useRef } from 'react';

import Board from './board';
import puzzles from './puzzles/puzzles';
import { newBoard } from './utility';

function StaticPuzzles() {
  const [index, setIndex] = useState(Math.floor(Math.random() * puzzles.length));
  const [showAnswer, setShowAnswer] = useState(false);
  const [data, setData] = useState(newBoard());
  const newPuzzleIndex = () => {
    setIndex((prev) => {
      if (prev + 1 < puzzles.length) {
        return prev + 1;
      }
      return 0;
    });
  };
  const btnRef = useRef(null);
  const handleNextPuzzle = () => {
    setShowAnswer(false);
    newPuzzleIndex();
    setData(puzzles[index]());
    btnRef.current.blur();
  };

  const handleShowHideClick = () => {
    setShowAnswer(!showAnswer);
  };

  useEffect(() => {
    handleNextPuzzle();
  }, []);
  return (
    <>
      <div className="border">
        <Board data={data} flipped={data.flipped} dragCallback={() => {}} />
      </div>
      <div className="row expanded">
        <button title="Hide/show answer" id="btn-answer" className="styled-button" type="button" onClick={handleShowHideClick}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
        <button ref={btnRef} title="Show next puzzle" id="btn-next" className="styled-button" type="button" onClick={handleNextPuzzle}>Next Puzzle</button>
      </div>
      <div className="row expanded">
        <span className="caption">
          {data.question}
          {' '}
          {showAnswer && <b><i>{data.answer}</i></b>}
        </span>
      </div>
    </>
  );
}

export default StaticPuzzles;
