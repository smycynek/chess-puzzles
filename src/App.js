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
import { Tab, Tabs } from 'react-bootstrap';

import { Board } from './board';
import { puzzles } from './puzzles/puzzles';
import infoButton from './images/information-button.svg';
import terrain from './images/terrain.svg';
import {
  clearBoard, units, black, white, renderTool,
} from './utility';

const data = {};
const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
randomPuzzle(data);
const initUserData = {};
clearBoard(initUserData);

// eslint-disable-next-line func-names
// eslint-disable-next-line no-unused-vars

function App() {
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(Math.floor(Math.random() * puzzles.length));
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [squareTextures, setSquareTextures] = useState(true);
  const [userData, setUserData] = useState(initUserData);
  const [selectedColor, setSelectedColor] = useState(white);
  const [selectedUnit, setSelectedUnit] = useState(units.pawn);
  // eslint-disable-next-line no-unused-vars
  const toolHint = 'Click to use this piece.';

  useEffect(() => {
    document.body.classList.add('tbg');
    document.body.classList.add('tbg-textured');
  }, []);

  const setUserDataHandler = function (square) {
    const newUserData = { ...userData };

    if ((newUserData[square.rank][square.file])
    && (newUserData[square.rank][square.file].unit === selectedUnit)
    && (newUserData[square.rank][square.file].color === selectedColor)) {
      newUserData[square.rank][square.file] = null;
    } else {
      newUserData[square.rank][square.file] = { unit: selectedUnit, color: selectedColor };
    }
    setUserData(newUserData);
  };

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
    puzzleFunc(data);
  };

  // eslint-disable-next-line no-unused-vars
  const handleShowHideClick = (e) => {
    setShowAnswer(!showAnswer);
  };

  // eslint-disable-next-line no-unused-vars
  const handleToggleTextures = (e) => {
    document.body.classList.toggle('tbg-textured');
    document.getElementById('btn-answer').classList.toggle('styled-button-textured');
    document.getElementById('btn-next').classList.toggle('styled-button-textured');
    setSquareTextures(!squareTextures);
  };

  // eslint-disable-next-line no-unused-vars
  const handleShowAboutClick = (e) => {
    setShowAbout(!showAbout);
  };

  const handleWhitePawnClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.pawn);
  };

  const handleWhiteBishopClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.bishop);
  };

  const handleWhiteKnightClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.knight);
  };

  const handleWhiteRookClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.rook);
  };

  const handleWhiteQueenClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.queen);
  };

  const handleWhiteKingClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.king);
  };

  const handleBlackPawnClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.pawn);
  };

  const handleBlackBishopClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.bishop);
  };

  const handleBlackKnightClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.knight);
  };

  const handleBlackRookClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.rook);
  };

  const handleBlackQueenClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.queen);
  };

  const handleBlackKingClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.king);
  };

  return (
    <>
      <Tabs className="app-tab" defaultActiveKey="puzzles" id="chessTabs">
        <Tab eventKey="puzzles" title="Solve">
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

        </Tab>
        <Tab eventKey="create" title="Create">
          <h1 className="banner">Create a puzzle</h1>
          <div className="selectable table-top">
            <Board data={userData} squareTextures={squareTextures} clickCallback={setUserDataHandler} />
          </div>
          <div className="row indented">
            <button title={toolHint} className="unit-button" type="button" onClick={handleBlackPawnClick}>{renderTool(units.pawn, black)}</button>
            <button title={toolHint} className="unit-button" type="button" onClick={handleBlackKnightClick}>{renderTool(units.knight, black)}</button>
            <button title={toolHint} className="unit-button" type="button" onClick={handleBlackBishopClick}>{renderTool(units.bishop, black)}</button>
            <button title={toolHint} className="unit-button" type="button" onClick={handleBlackRookClick}>{renderTool(units.rook, black)}</button>
            <button title={toolHint} className="unit-button" type="button" onClick={handleBlackQueenClick}>{renderTool(units.queen, black)}</button>
            <button title={toolHint} className="unit-button" type="button" onClick={handleBlackKingClick}>{renderTool(units.king, black)}</button>
          </div>
          <div className="row indented">
            <button title={toolHint} className="unit-button" type="button" onClick={handleWhitePawnClick}>{renderTool(units.pawn, white)}</button>
            <button title={toolHint} className="unit-button" type="button" onClick={handleWhiteKnightClick}>{renderTool(units.knight, white)}</button>
            <button title={toolHint} className="unit-button" type="button" onClick={handleWhiteBishopClick}>{renderTool(units.bishop, white)}</button>
            <button title={toolHint} className="unit-button" type="button" onClick={handleWhiteRookClick}>{renderTool(units.rook, white)}</button>
            <button title={toolHint} className="unit-button" type="button" onClick={handleWhiteQueenClick}>{renderTool(units.queen, white)}</button>
            <button title={toolHint} className="unit-button" type="button" onClick={handleWhiteKingClick}>{renderTool(units.king, white)}</button>
          </div>
          <div className="row expanded indented">
            <span className="caption">Ability to save and publish coming soon!</span>
          </div>
        </Tab>
      </Tabs>
      <div className="row expanded caption">
        <img style={{ width: '1.5em', height: '1.5em' }} alt="info" src={infoButton} onClick={handleShowAboutClick} />
        <img style={{ marginLeft: '0.5em', width: '1.5em', height: '1.5em' }} alt="info" src={terrain} onClick={handleToggleTextures} />
        { showAbout &&
        <ul style={{ padding: '0em', marginTop: '0.75em', listStyleType: 'none' }}>
          <li><a href="https://github.com/smycynek/chess-puzzles">https://github.com/smycynek/chess-puzzles</a></li>
          <li>
            Icons:
            {' '}
            <a href="https://en.wikipedia.org/wiki/User:Cburnett" title="en:User:Cburnett">Cburnett</a>
            ,
            <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>
            ,
            <a href="https://commons.wikimedia.org/w/index.php?curid=1496656">Wikimedia</a>
            ,
            <a href="http://Artua.com">Artua.com</a>
          </li>
          <li>
            Textures:
            {' '}
            <a
              href="https://unsplash.com/@augustinewong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >
              Augustine Wong
            </a>
            {' '}
            on
            {' '}
            <a href="https://unsplash.com/s/photos/marble-texture?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </li>
        </ul>}
      </div>
    </>);
}

export default App;
