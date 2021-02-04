/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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
import 'react-router-tabs/styles/react-router-tabs.css';

import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import { NavTab } from 'react-router-tabs';

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
    const buttons = document.getElementsByClassName('styled-button');
    for (let idx = 0; idx < buttons.length; idx++) {
      buttons[idx].classList.toggle('styled-button-textured');
    }
    setSquareTextures(!squareTextures);
  };

  // eslint-disable-next-line no-unused-vars
  const handleShowAboutClick = (e) => {
    setShowAbout(!showAbout);
  };

  return (
    <>
      <h1 className="banner">Chess Puzzles</h1>
      <Router>
        <NavTab exact strict={false} to="/chess">Samples</NavTab>
        <NavTab exact strict={false} to="/chess/create">View/Create</NavTab>
        <Switch>
          <Route exact strict={false} path="/chess">
            <StaticPuzzles squareTextures={squareTextures} />
          </Route>
          <Route exact strict={false} path="/chess/create">
            <CreatePuzzles squareTextures={squareTextures} />
          </Route>
        </Switch>
      </Router>
      <div className="row expanded caption">
        <img style={{ width: '1.5em', height: '1.5em' }} alt="info" src={infoButton} onClick={handleShowAboutClick} />
        <img style={{ marginLeft: '0.5em', width: '1.5em', height: '1.5em' }} alt="info" src={terrain} onClick={handleToggleTextures} />
        {showAbout && <Footer />}
      </div>
    </>);
}

export default App;
