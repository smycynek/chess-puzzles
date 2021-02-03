/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-wrap-multilines */

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';

import { Board } from './board';
import { puzzles } from './puzzles/puzzles';
import { newBoard } from './utility';

// eslint-disable-next-line react/prop-types
export const StaticPuzzles = ({ squareTextures }) => {
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
      <h1 className="banner">Chess Puzzles</h1>
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
        <button id="btn-answer" className="styled-button styled-button-textured" type="button" onClick={handleShowHideClick}>Hide/show answer</button>
        <button id="btn-next" className="styled-button styled-button-textured" type="button" onClick={handleNextPuzzle}>Next puzzle</button>
      </div>
    </>);
};
