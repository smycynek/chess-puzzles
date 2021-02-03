/* eslint-disable react/prop-types */
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
/* eslint-disable import/prefer-default-export */

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';

export const Footer = () => (
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
  </ul>);
