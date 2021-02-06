/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import {
  files,
  ranks,
  squareColor,
  getUnitFromData,
} from './utility';

const squareMap = ranks.map((rank) => files.map((file) => ({ file, rank })));

const Board = ({ data, squareTextures, clickCallback }) => (
  <div className="mat">
    <div className="board">
      {squareMap.map((rank, index) => (
        <div key={rank[0].rank} className="row">
          {rank.map((square) => (
            <button
              type="button"
              onClick={() => (clickCallback ? clickCallback(square) : () => {})}
              className={`square ${squareColor(squareTextures, square.rank, square.file)}`}
              key={`${square.file}${square.rank}`}
            >
              {getUnitFromData(square, data)}
            </button>
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

export default Board;
