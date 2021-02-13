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
import About from './About';

import terrain from './images/terrain.svg';

function App() {
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

  return (
    <>
      <h1 className="banner">Chess Puzzles</h1>
      <HashRouter basename="/chess">
        <NavTab title="Sample puzzles" exact strict={false} to="/">Samples</NavTab>
        <NavTab title="View puzzles from others or create your own." exact strict={false} to="/create">View/Create</NavTab>
        <NavTab title="About this site" exact strict={false} to="/about">About</NavTab>

        <Switch>
          <Route exact strict={false} path="/">
            <StaticPuzzles squareTextures={squareTextures} />
          </Route>
          <Route exact strict={false} path="/create">
            <CreatePuzzles squareTextures={squareTextures} />
          </Route>
          <Route exact strict={false} path="/about">
            <>
              <About />
              <div className="row expanded caption">
                <button
                  title="Toggle textures"
                  aria-label="Toggle textures"
                  className="main-button"
                  type="button"
                  onClick={handleToggleTextures}
                >
                  <img style={{ width: '1.5em', height: '1.5em' }} alt="textureToggle" src={terrain} />
                </button>
              </div>
            </>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
