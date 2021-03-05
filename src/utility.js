/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-param-reassign */

import React from 'react';

import BishopBlack from './images/units/Chess_bdt45.svg';
import BishopWhite from './images/units/Chess_blt45.svg';

import RookBlack from './images/units/Chess_rdt45.svg';
import RookWhite from './images/units/Chess_rlt45.svg';

import KnightBlack from './images/units/Chess_ndt45.svg';
import KnightWhite from './images/units/Chess_nlt45.svg';

import PawnBlack from './images/units/Chess_pdt45.svg';
import PawnWhite from './images/units/Chess_plt45.svg';

import KingBlack from './images/units/Chess_kdt45.svg';
import KingWhite from './images/units/Chess_klt45.svg';

import QueenBlack from './images/units/Chess_qdt45.svg';
import QueenWhite from './images/units/Chess_qlt45.svg';

export const units = {
  pawn: 'P',
  knight: 'N',
  king: 'K',
  queen: 'Q',
  bishop: 'B',
  rook: 'R',
};

export const dark = 'dark';
export const light = 'light';

export const white = 'white';
export const black = 'black';

// eslint-disable-next-line consistent-return
const getUnitImage = (type, color) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case units.queen:
      return color === white ? QueenWhite : QueenBlack;
    case units.king:
      return color === white ? KingWhite : KingBlack;
    case units.rook:
      return color === white ? RookWhite : RookBlack;
    case units.bishop:
      return color === white ? BishopWhite : BishopBlack;
    case units.knight:
      return color === white ? KnightWhite : KnightBlack;
    case units.pawn:
      return color === white ? PawnWhite : PawnBlack;
  }
};

const drag = (ev) => {
  ev.dataTransfer.setData('unit', ev.target.id);
};

export const renderUnit = (type, color, dataRank, dataFile) => {
  const image = getUnitImage(type, color);
  return <img onDragStart={(event) => drag(event)} id={`${color}${type}${dataFile}${dataRank}`} draggable title={`${color}-${type}`} alt={`${color}-${type}`} className="unit" src={image} />;
};

export const renderTool = (type, color) => {
  const image = getUnitImage(type, color);
  return <img alt={`${color}-${type}`} className="unit-tool" src={image} />;
};

export const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

export const fileSymbols = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
  g: 'g',
  h: 'h',
};

export const files = [fileSymbols.a, fileSymbols.b, fileSymbols.c, fileSymbols.d,
  fileSymbols.e, fileSymbols.f, fileSymbols.g, fileSymbols.h];

const reverseFileMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
};

export const squareColor = (squareTextures, rank, file) => {
  const color = ((rank + reverseFileMap[file]) % 2 === 0 ? dark : light);
  if (squareTextures) {
    return `${color} ${color}-textured`;
  }
  return color;
};

export function setCaptions(question, answer, data) {
  data.question = question;
  data.answer = answer;
}

export function setUnit(unit, color, rank, file, data) {
  data[rank][file] = { unit, color };
}

export function clearUnit(rank, file, data) {
  data[rank][file] = null;
}

export function clearBoard(data) {
  data[1] = {};
  data[2] = {};
  data[3] = {};
  data[4] = {};
  data[5] = {};
  data[6] = {};
  data[7] = {};
  data[8] = {};
}

export function newBoard() {
  const initData = {};
  clearBoard(initData);
  return initData;
}

export const getUnitFromData = (val, data) => {
  const dataRank = val.rank;
  const dataFile = val.file;

  if (data[dataRank]) {
    const item = data[dataRank][dataFile];
    if (item) {
      return renderUnit(item.unit, item.color, dataRank, dataFile);
    }
    return <span />;
  }
  return <span />;
};
