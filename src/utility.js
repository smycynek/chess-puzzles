/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
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

// eslint-disable-next-line import/prefer-default-export
export const renderUnit = (type, color) => {
  const image = getUnitImage(type, color);
  return <img alt={`${color}-${type}`} className="unit" src={image} />;
};

export const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

export const files = [1, 2, 3, 4, 5, 6, 7, 8];

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

const fileMap = {
  1: fileSymbols.a,
  2: fileSymbols.b,
  3: fileSymbols.c,
  4: fileSymbols.d,
  5: fileSymbols.e,
  6: fileSymbols.f,
  7: fileSymbols.g,
  8: fileSymbols.h,
};

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

export const fileToDisplay = (file) => fileMap[file];

export const displayToFile = (file) => reverseFileMap[file];

export const squareColor = (squareTextures, rank, file) => {
  const color = ((rank + file) % 2 === 0 ? dark : light);
  if (squareTextures) {
    return `${color} ${color}-textured`;
  }
  return color;
};

/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
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

export const getUnitFromData = (val, data) => {
  const dataRank = val.rank;
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
