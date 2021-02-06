/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import 'bootstrap/dist/css/bootstrap.css';
import 'react-router-tabs/styles/react-router-tabs.css';

import './App.css';
import React, { useState, useEffect } from 'react';
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';

import { NavTab } from 'react-router-tabs';

import StaticPuzzles from './static-puzzles';
import CreatePuzzles from './create-puzzles';
import Footer from './footer';

import infoButton from './images/information-button.svg';
import terrain from './images/terrain.svg';
import home from './images/home.svg';
import github from './images/github.svg';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [squareTextures, setSquareTextures] = useState(true);

  useEffect(() => {
    document.body.classList.add('tbg');
    document.body.classList.add('tbg-textured');
  }, []);

  const handleToggleTextures = () => {
    document.body.classList.toggle('tbg-textured');
    const buttons = document.getElementsByClassName('styled-button');
    for (let idx = 0; idx < buttons.length; idx += 1) {
      buttons[idx].classList.toggle('styled-button-textured');
    }
    setSquareTextures(!squareTextures);
  };

  const handleShowAboutClick = () => {
    setShowAbout(!showAbout);
  };

  return (
    <>
      <h1 className="banner">Chess Puzzles</h1>
      <HashRouter basename="/chess">
        <NavTab title="Sample puzzles" exact strict={false} to="/">Samples</NavTab>
        <NavTab title="View puzzles from others or create your own." exact strict={false} to="/create">View/Create</NavTab>
        <Switch>
          <Route exact strict={false} path="/">
            <StaticPuzzles squareTextures={squareTextures} />
          </Route>
          <Route exact strict={false} path="/create">
            <CreatePuzzles squareTextures={squareTextures} />
          </Route>
        </Switch>
      </HashRouter>
      <div className="row expanded caption">
        <button
          title="About this application"
          arial-label="About this application"
          className="main-button"
          onClick={handleShowAboutClick}
          type="button"
        >
          <img style={{ width: '1.5em', height: '1.5em' }} alt="about info" src={infoButton} />
        </button>
        <button
          title="Toggle textures"
          arial-label="Toggle textures"
          className="main-button"
          type="button"
          onClick={handleToggleTextures}
        >
          <img style={{ marginLeft: '0.5em', width: '1.5em', height: '1.5em' }} alt="textureToggle" src={terrain} />
        </button>
        <a title="homepage" href="https://stevenvictor.net">
          <img
            style={{
              paddingBottom: '0.225em',
              marginLeft: '0.5em',
              width: '1.75em',
              height: '1.75em',
            }}
            alt="home"
            src={home}
          />
        </a>
        <a title="github" href="https://github.com/smycynek/chess-puzzles">
          <img
            style={{
              paddingBottom: '0.225em',
              marginLeft: '0.5em',
              width: '1.75em',
              height: '1.75em',
            }}
            alt="github"
            src={github}
          />
        </a>
        {showAbout && <Footer />}
      </div>
    </>
  );
}

export default App;
