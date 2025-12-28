/* eslint-disable react/jsx-filename-extension */

import 'bootstrap/dist/css/bootstrap.css';
import './css/app.css';

import React from 'react';
import {
  HashRouter, Route, Switch, NavLink,
} from 'react-router-dom';

import StaticPuzzles from './static-puzzles';
import CreatePuzzles from './create-puzzles';
import About from './About';

function App() {
  return (
    <div className="container" style={{ padding: '0px' }}>
      <div className="banner">Chess Puzzles</div>
      <HashRouter basename="/chess2">
        <NavLink className="nav-tab" title="Sample puzzles" exact strict={false} to="/">Samples</NavLink>
        <NavLink className="nav-tab" title="View puzzles from others or create your own." exact strict={false} to="/create">View/Create</NavLink>
        <NavLink className="nav-tab" title="About this site" exact strict={false} to="/about">About</NavLink>
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

export default App;
