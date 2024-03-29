/* eslint-disable no-alert */
/* eslint-disable no-throw-literal */
import {
  black, white, newBoard, units, fileSymbols,
} from './utility';

const queryString = require('query-string');
const rot13Cipher = require('rot13-cipher');

export const parseSquareString = (position) => {
  if (position.length !== 4) {
    // eslint-disable-next-line no-console
    throw (`Error, bad position string ${position}`);
  }

  const colorChar = position[0];
  const unitChar = position[1];
  const fileChar = position[2];
  const rankChar = position[3];
  if (
    ((colorChar !== 'w')
  && (colorChar !== 'b'))
  || ![units.king, units.queen, units.rook, units.bishop,
    units.knight, units.pawn].includes(unitChar)
  || ![fileSymbols.a, fileSymbols.b, fileSymbols.c, fileSymbols.d,
    fileSymbols.e, fileSymbols.f, fileSymbols.g, fileSymbols.h].includes(fileChar)
  || ![1, 2, 3, 4, 5, 6, 7, 8].includes(Number(rankChar))
  ) {
    // eslint-disable-next-line no-console
    throw (`Error, bad position string ${position}`);
  }
  const color = colorChar === 'w' ? white : black;
  const unit = unitChar;
  const file = fileChar;
  const rank = Number(rankChar);

  return {
    unit: {
      color, unit,
    },
    square: { rank, file },
  };
};

// eslint-disable-next-line consistent-return
export const parsePuzzleString = (puzzle) => {
  const board = newBoard();
  const puzzleData = puzzle.split(',');
  const data = puzzleData.map((m) => parseSquareString(m));
  // eslint-disable-next-line no-return-assign
  data.forEach((datum) => board[datum.square.rank][datum.square.file] = datum.unit);
  board.flipped = data.flipped;
  return board;
};

const traverseMap = (data) => {
  const flat = [];
  Object.keys(data).forEach((r) => {
    if ((r !== 'question') && (r !== 'answer')) {
      Object.keys(data[r]).forEach((f) => {
        flat.push({ square: { rank: r, file: f }, item: data[r][f] });
      });
    }
  });
  return flat;
};

const renderSquareString = (square, item) => {
  if (item && item.color) {
    return `${item.color[0]}${item.unit}${square.file}${square.rank}`;
  }
  return '';
};

const renderAllSquares = (data) => {
  const unitArray = traverseMap(data);
  const renderedUnits = unitArray.map((unit) => renderSquareString(unit.square, unit.item));
  const renderedUnitsNonNull = renderedUnits.filter((item) => item !== '');
  return renderedUnitsNonNull.join(',');
};

export const renderPuzzleString = (data) => {
  const str = `question=${encodeURIComponent(data.question)}&answer=${encodeURIComponent(rot13Cipher(data.answer ? data.answer : ''))}&data=${encodeURIComponent(renderAllSquares(data))}&editMode=${data.editMode}&view=${data.flipped ? 'b' : 'w'}`;
  return str;
};

export const fromQueryString = (qString) => {
  const urlData = queryString.parse(decodeURIComponent(qString));
  const data = parsePuzzleString(urlData.data);
  data.question = urlData.question;
  data.answer = rot13Cipher(urlData.answer);
  data.flipped = urlData.view === 'b';
  return data;
};
