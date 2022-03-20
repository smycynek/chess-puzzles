/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import 'bootstrap/dist/css/bootstrap.css';
import 'react-router-tabs/styles/react-router-tabs.css';

import './css/app.css';

import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';

import { NavTab } from 'react-router-tabs';

import StaticPuzzles from './static-puzzles';
import CreatePuzzles from './create-puzzles';
import About from './About';

function App() {
  return (
    <div className="container" style={{ padding: '0px' }}>
      <h1 className="banner">Chess Puzzles</h1>
      <HashRouter basename="/chess">
        <NavTab title="Sample puzzles" exact strict={false} to="/">Samples</NavTab>
        <NavTab title="View puzzles from others or create your own." exact strict={false} to="/create">View/Create</NavTab>
        <NavTab title="About this site" exact strict={false} to="/about">About</NavTab>
        <Switch>
          <Route exact strict={false} path="/">
            <StaticPuzzles />
          </Route>
          <Route strict={false} path="/create/:id">
            <CreatePuzzles />
          </Route>
          <Route strict={false} path="/create">
            <CreatePuzzles />
          </Route>
          <Route exact strict={false} path="/about">
            <About />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default hot(App);
