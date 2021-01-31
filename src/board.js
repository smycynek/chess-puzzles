/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import {
  files,
  ranks,
  fileToDisplay,
  squareColor,
  getUnitFromData,
} from './utility';

const squareMap = ranks.map((rank) => files.map((file) => ({ file, rank })));

export const Board = ({ data, squareTextures }) => (
  <div className="mat">
    <div className="board">
      {squareMap.map((rank, index) => (
        <div className="row">
          {rank.map((square, idx) => (
            <div
              className={`square ${squareColor(squareTextures, square.rank, square.file)}`}
              key={`${fileToDisplay(square.file)}${square.rank}`}
            >
              {getUnitFromData(square, data)}
            </div>
          ))}
          <span className="label">{8 - index}</span>
        </div>
      ))}
      <div className="row">
        <div className="label">a</div>
        <div className="label">b</div>
        <div className="label">c</div>
        <div className="label">d</div>
        <div className="label">e</div>
        <div className="label">f</div>
        <div className="label">g</div>
        <div className="label">h</div>
      </div>
    </div>
  </div>
);
