/* eslint-disable react/jsx-filename-extension */

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';

import Board from './board';
import puzzles from './puzzles/puzzles';
import { newBoard } from './utility';

// eslint-disable-next-line react/prop-types
const StaticPuzzles = ({ squareTextures }) => {
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

  const handleNextPuzzle = () => {
    setShowAnswer(false);
    newPuzzleIndex();
    const puzzleFunc = puzzles[index];
    const newData = { ...data };
    puzzleFunc(newData);
    setData(newData);
  };

  // eslint-disable-next-line no-unused-vars
  const handleShowHideClick = (e) => {
    setShowAnswer(!showAnswer);
  };

  useEffect(() => {
    handleNextPuzzle();
  }, []);
  return (
    <>
      <div className="table-top">
        <Board data={data} squareTextures={squareTextures} />
      </div>
      <div className="row expanded">
        <span className="caption">
          {data.question}
          {' '}
          {showAnswer && <b><i>{data.answer}</i></b>}
        </span>
      </div>

      <div className="row expanded">
        <button title="Hide/show answer" id="btn-answer" className="styled-button styled-button-textured" type="button" onClick={handleShowHideClick}>{showAnswer ? 'Hide answer' : 'Show answer'}</button>
        <button title="Show next puzzle" id="btn-next" className="styled-button styled-button-textured" type="button" onClick={handleNextPuzzle}>Next puzzle</button>
      </div>
    </>
  );
};

export default StaticPuzzles;
