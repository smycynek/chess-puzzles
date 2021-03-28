/* eslint-disable no-inner-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
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

const Board = ({
  data, squareTextures, clickCallback, dragCallback,
}) => {
  const drop = (ev) => {
    ev.preventDefault();
    const source = ev.dataTransfer.getData('unit');
    const target = ev.target.id;
    dragCallback(source, target);
  };

  const allowDrop = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="board" aria-label="Chess Board">
      {squareMap.map((rank, index) => (
        <div key={rank[0].rank} className="row">
          {rank.map((square) => (
            <button
              id={`${square.file}${square.rank}`}
              draggable
              onDragOver={(event) => allowDrop(event)}
              onDrop={(event) => drop(event)}
              title={`${square.file}${square.rank}`}
              type="button"
              onClick={() => (clickCallback ? clickCallback(square) : () => {})}
              className={`square ${squareColor(squareTextures, square.rank, square.file)}`}
              key={`${square.file}${square.rank}`}
              aria-label={`${square.file}${square.rank}`}
            >
              {getUnitFromData(square, data)}
            </button>
          ))}
          <span draggable onDragOver={(event) => allowDrop(event)} id={`rank-${8 - index}`} onDrop={(event) => drop(event)} aria-label="rank" className="label">{8 - index}</span>
        </div>
      ))}
      <div className="row">
        <div id="file-a" onDragOver={(event) => allowDrop(event)} draggable onDrop={(event) => drop(event)} aria-label="file" className="label">a</div>
        <div id="file-b" onDragOver={(event) => allowDrop(event)} draggable onDrop={(event) => drop(event)} aria-label="file" className="label">b</div>
        <div id="file-c" onDragOver={(event) => allowDrop(event)} draggable onDrop={(event) => drop(event)} aria-label="file" className="label">c</div>
        <div id="file-d" onDragOver={(event) => allowDrop(event)} draggable onDrop={(event) => drop(event)} aria-label="file" className="label">d</div>
        <div id="file-e" onDragOver={(event) => allowDrop(event)} draggable onDrop={(event) => drop(event)} aria-label="file" className="label">e</div>
        <div id="file-f" onDragOver={(event) => allowDrop(event)} draggable onDrop={(event) => drop(event)} aria-label="file" className="label">f</div>
        <div id="file-g" onDragOver={(event) => allowDrop(event)} draggable onDrop={(event) => drop(event)} aria-label="file" className="label">g</div>
        <div id="file-h" onDragOver={(event) => allowDrop(event)} draggable onDrop={(event) => drop(event)} aria-label="file" className="label">h</div>
      </div>
    </div>
  );
};

export default Board;
