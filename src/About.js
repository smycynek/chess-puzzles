/* eslint-disable react/jsx-filename-extension */

import 'bootstrap/dist/css/bootstrap.css';
import './css/app.css';

import React from 'react';

function About() {
  return (
    <div style={{ width: '30em' }}>
      <h2>Samples Tab</h2>
      <p className="info-item">
        The Samples
        tab
        has puzzles for you to browse -- see if you can figure them out, and then click the
        {' '}
        <strong>Show Answer</strong>
        {' '}
        button.
      </p>
      <h2>View/Create Tab</h2>
      <p className="info-item">
        The View/Create
        tab lets you view puzzles you&apos;ve gotten from
        friends or online via a URL as well as edit them or create your own.
        Just click the
        {' '}
        <strong>
          View/Edit
        </strong>
        {' '}
        slider to go between view and edit modes.
      </p>
      <h3>
        View Mode
      </h3>
      <p className="info-item sub-item">
        This is pretty much like the sample view mode, but note the additional buttons
        to share the puzzle on social media.  You can also use your device&apos;s
        {' '}
        <strong>share</strong>
        {' '}
        button.
      </p>
      <h3>
        Edit Mode
      </h3>

      <p className="info-item sub-item">
        Here, you can create your own chess position or edit an existing one -- as well as
        add a puzzle question and answer.  Just tap one of the chess piece tools and tap a square
        on the board.  Double-tap to clear a square.
        Drag and drop support is currently desktop-only
        and is a bit limited -- drag to one of the rank or file labels to remove a piece.
      </p>
      <h2 className="sub-heading">Geeky stuff</h2>
      <p className="info-item">
        User-created puzzles and changes are encoded entirely
        into the URL that you send and receive.
        The puzzle doesn&apos;t
        persist anywhere on the Internet except in the text of the link, so you don&apos;t
        need a login or account any any site to share puzzles.
      </p>
      <h2 className="sub-heading">Created by</h2>
      <ul className="info-list info-item">
        <li>
          Steven Victor Mycynek 2021-2026
        </li>
        <li>
          <a className="normal-link" title="homepage" href="https://stevenvictor.net">
            stevenvictor.net
          </a>
          {' | ' }
          <a className="normal-link" title="github" href="https://github.com/smycynek/chess-puzzles">
            github.com/smycynek/chess-puzzles
          </a>
        </li>
        <li className="it">
          No ads, no logins, just content.
        </li>
      </ul>
      <h2 className="sub-heading">Credit to</h2>
      <ul className="info-list info-item">
        <li>
          <strong>Icons:</strong>
          {' '}
          <a className="normal-link" href="https://en.wikipedia.org/wiki/User:Cburnett" title="en:User:Cburnett">Cburnett</a>
          ,
          {' '}
          <a className="normal-link" href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>
          ,
          {' '}
          <a className="normal-link" href="https://commons.wikimedia.org/w/index.php?curid=1496656">Wikimedia</a>
          ,
          {' '}
          <a className="normal-link" href="http://freepik.com">freepik.com</a>

        </li>
        <li>
          <strong>Textures:</strong>
          {' '}
          <a
            className="normal-link"
            href="https://unsplash.com/@augustinewong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          >
            Augustine Wong
          </a>
          {' '}
          on
          {' '}
          <a
            className="normal-link"
            href="https://unsplash.com/s/photos/marble-texture?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          >
            Unsplash
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
