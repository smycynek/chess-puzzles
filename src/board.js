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
    <div className="board" arial-label="Chess Board">
      {squareMap.map((rank, index) => (
        <div key={rank[0].rank} className="row">
          {rank.map((square) => (
            <button
              type="button"
              onClick={() => (clickCallback ? clickCallback(square) : () => {})}
              className={`square ${squareColor(squareTextures, square.rank, square.file)}`}
              key={`${square.file}${square.rank}`}
              arial-label={`${square.file}${square.rank}`}
            >
              {getUnitFromData(square, data)}
            </button>
          ))}
          <span arial-label="rank" className="label">{8 - index}</span>
        </div>
      ))}
      <div className="row">
        <div arial-label="file" className="label">a</div>
        <div arial-label="file" className="label">b</div>
        <div arial-label="file" className="label">c</div>
        <div arial-label="file" className="label">d</div>
        <div arial-label="file" className="label">e</div>
        <div arial-label="file" className="label">f</div>
        <div arial-label="file" className="label">g</div>
        <div arial-label="file" className="label">h</div>
      </div>
    </div>
  </div>
);

export default Board;
