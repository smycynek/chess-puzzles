/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-wrap-multilines */

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import { StaticPuzzles } from './static-puzzles';
import { CreatePuzzles } from './create-puzzles';
import { Footer } from './footer';

import infoButton from './images/information-button.svg';
import terrain from './images/terrain.svg';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [squareTextures, setSquareTextures] = useState(true);

  useEffect(() => {
    document.body.classList.add('tbg');
    document.body.classList.add('tbg-textured');
  }, []);

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
      <Tabs className="app-tab" defaultActiveKey="puzzles" id="chessTabs">
        <Tab eventKey="puzzles" title="Solve">
          <StaticPuzzles squareTextures={squareTextures} />
        </Tab>
        <Tab eventKey="create" title="Create">
          <CreatePuzzles squareTextures={squareTextures} />
        </Tab>
      </Tabs>
      <div className="row expanded caption">
        <img style={{ width: '1.5em', height: '1.5em' }} alt="info" src={infoButton} onClick={handleShowAboutClick} />
        <img style={{ marginLeft: '0.5em', width: '1.5em', height: '1.5em' }} alt="info" src={terrain} onClick={handleToggleTextures} />
        {showAbout && <Footer />}
      </div>
    </>);
}

export default App;
