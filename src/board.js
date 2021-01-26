/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useState } from 'react';

import {
  files,
  ranks,
  rankToDisplay,
  fileToDisplay,
  squareColor,
} from './utility';

import { renderUnit } from './unit';

const squareMap = ranks.map((rank) => files.map((file) => ({ file, rank })));

const getUnitFromData = (val, data) => {
  const dataRank = rankToDisplay(val.rank);
  const dataFile = fileToDisplay(val.file);

  if (data[dataRank]) {
    const item = data[dataRank][dataFile];
    if (item) {
      return renderUnit(item.unit, item.color);
    }
    return <span />;
  }
  return <span />;
};

export const Board = ({ data, showAnswer }) => (
  <div className="mat" style={{ display: 'block' }}>
    <div className="board" style={{ display: 'block' }}>
      {squareMap.map((rank, index) => (
        <div className="row">
          {rank.map((square, idx) => (
            <div
              className={`square ${squareColor(square.rank, square.file)}`}
              key={`${fileToDisplay(square.file)}${rankToDisplay(
                square.rank,
              )}`}
            >
              {getUnitFromData(square, data)}
            </div>
          ))}
          <span className="label">{rankToDisplay(7 - index)}</span>
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
    <div className="row" style={{ marginTop: '2em' }}>
      <span className="caption">
        {data.question}
        {' '}
        {showAnswer && <b><i>{data.answer}</i></b>}
      </span>
    </div>

  </div>
);

export const clearBoard = function (data) {
  data[1] = {};
  data[2] = {};
  data[3] = {};
  data[4] = {};
  data[5] = {};
  data[6] = {};
  data[7] = {};
  data[8] = {};
};

export const setCaptions = function (question, answer, data) {
  data.question = question;
  data.answer = answer;
};

export const setUnit = function (unit, color, rank, file, data) {
  data[rank][file] = { unit, color };
};

export const clearUnit = function (rank, file, data) {
  data[rank][file] = null;
};
