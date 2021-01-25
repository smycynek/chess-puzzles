/* eslint-disable func-names */
import {
  units,
  fileSymbols,
  black, white,
} from '../utility';

import { setUnit, setCaptions } from '../board';

export const puzzle1 = function (data) {
  setCaptions('Can white mate?', 'No - draw.', data);
  setUnit(units.king, black, 4, fileSymbols.a, data);
  setUnit(units.king, white, 8, fileSymbols.b, data);
};

export const puzzle2 = function (data) {
  setCaptions('Can white mate?', 'No.', data);
  setUnit(units.king, black, 8, fileSymbols.a, data);
  setUnit(units.bishop, white, 7, fileSymbols.b, data);
  setUnit(units.king, white, 6, fileSymbols.c, data);
};

export const puzzle3 = function (data) {
  setCaptions('Can white mate?', 'Yes (Ra6++)', data);
  setUnit(units.king, black, 8, fileSymbols.a, data);
  setUnit(units.rook, white, 6, fileSymbols.b, data);
  setUnit(units.king, white, 7, fileSymbols.c, data);
};

export const puzzle4 = function (data) {
  setCaptions('Can black check?', 'No. (White rook pins black rook).', data);
  setUnit(units.king, white, 1, fileSymbols.a, data);
  setUnit(units.rook, black, 8, fileSymbols.c, data);
  setUnit(units.king, black, 8, fileSymbols.h, data);
  setUnit(units.rook, white, 8, fileSymbols.a, data);
};

export const defaultSetup = function (data) {
  setCaptions('Is this a valid default setup?', 'Yes.', data);
  setUnit(units.rook, black, 8, fileSymbols.a, data);
  setUnit(units.knight, black, 8, fileSymbols.b, data);
  setUnit(units.bishop, black, 8, fileSymbols.c, data);
  setUnit(units.queen, black, 8, fileSymbols.d, data);
  setUnit(units.king, black, 8, fileSymbols.e, data);
  setUnit(units.bishop, black, 8, fileSymbols.f, data);
  setUnit(units.knight, black, 8, fileSymbols.g, data);
  setUnit(units.rook, black, 8, fileSymbols.h, data);

  setUnit(units.pawn, black, 7, fileSymbols.a, data);
  setUnit(units.pawn, black, 7, fileSymbols.b, data);
  setUnit(units.pawn, black, 7, fileSymbols.c, data);
  setUnit(units.pawn, black, 7, fileSymbols.d, data);
  setUnit(units.pawn, black, 7, fileSymbols.e, data);
  setUnit(units.pawn, black, 7, fileSymbols.f, data);
  setUnit(units.pawn, black, 7, fileSymbols.g, data);
  setUnit(units.pawn, black, 7, fileSymbols.h, data);

  setUnit(units.rook, white, 1, fileSymbols.a, data);
  setUnit(units.knight, white, 1, fileSymbols.b, data);
  setUnit(units.bishop, white, 1, fileSymbols.c, data);
  setUnit(units.queen, white, 1, fileSymbols.d, data);
  setUnit(units.king, white, 1, fileSymbols.e, data);
  setUnit(units.bishop, white, 1, fileSymbols.f, data);
  setUnit(units.knight, white, 1, fileSymbols.g, data);
  setUnit(units.rook, white, 1, fileSymbols.h, data);

  setUnit(units.pawn, white, 2, fileSymbols.a, data);
  setUnit(units.pawn, white, 2, fileSymbols.b, data);
  setUnit(units.pawn, white, 2, fileSymbols.c, data);
  setUnit(units.pawn, white, 2, fileSymbols.d, data);
  setUnit(units.pawn, white, 2, fileSymbols.e, data);
  setUnit(units.pawn, white, 2, fileSymbols.f, data);
  setUnit(units.pawn, white, 2, fileSymbols.g, data);
  setUnit(units.pawn, white, 2, fileSymbols.h, data);
};

export const puzzles = [defaultSetup, puzzle1, puzzle2, puzzle3, puzzle4];
