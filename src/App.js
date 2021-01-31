/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-wrap-multilines */

import './App.css';
import React, { useState, useEffect } from 'react';

import { Board } from './board';
import { puzzles } from './puzzles/puzzles';
import infoButton from './images/information-button.svg';
import terrain from './images/terrain.svg';

const data = {};
const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
randomPuzzle(data);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(Math.floor(Math.random() * puzzles.length));
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [squareTextures, setSquareTextures] = useState(true);
  useEffect(() => {
    document.body.classList.add('tbg');
    document.body.classList.add('tbg-textured');
  }, []);

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

  return (
    <>
      <h1>Chess Puzzles</h1>
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
      <div className="row expanded">
        <img style={{ width: '1.5em', height: '1.5em' }} alt="info" src={infoButton} onClick={handleShowAboutClick} />
        <img style={{ marginLeft: '0.5em', width: '1.5em', height: '1.5em' }} alt="info" src={terrain} onClick={handleToggleTextures} />
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
            <li>
              Textures by
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
