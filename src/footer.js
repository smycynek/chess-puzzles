/* eslint-disable react/jsx-filename-extension */

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';

const Footer = () => (
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
  </ul>
);

export default Footer;
