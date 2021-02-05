/* eslint-disable func-names */
import {
  units,
  fileSymbols,
  black, white, setCaptions, setUnit, clearBoard,
} from '../utility';

function puzzle1(data) {
  clearBoard(data);
  setCaptions('White to move: Can white mate?', 'No - draw.', data);
  setUnit(units.king, black, 4, fileSymbols.a, data);
  setUnit(units.king, white, 8, fileSymbols.b, data);
}

function puzzle2(data) {
  clearBoard(data);
  setCaptions('White to move: Can white mate?', 'No - draw.', data);
  setUnit(units.king, black, 8, fileSymbols.a, data);
  setUnit(units.bishop, white, 8, fileSymbols.c, data);
  setUnit(units.king, white, 6, fileSymbols.c, data);
}

function puzzle3(data) {
  clearBoard(data);
  setCaptions('White to move: Can white mate?', 'Yes. (Ra6++)', data);
  setUnit(units.king, black, 8, fileSymbols.a, data);
  setUnit(units.rook, white, 6, fileSymbols.b, data);
  setUnit(units.king, white, 7, fileSymbols.c, data);
}

function puzzle4(data) {
  clearBoard(data);
  setCaptions('Black to move: Can black check in one move?', 'No. (White rook pins black rook).', data);
  setUnit(units.king, white, 1, fileSymbols.a, data);
  setUnit(units.rook, black, 8, fileSymbols.d, data);
  setUnit(units.king, black, 8, fileSymbols.h, data);
  setUnit(units.rook, white, 8, fileSymbols.b, data);
}

function puzzle5(data) {
  clearBoard(data);
  setCaptions('White to move: Can white mate in one move?', 'Yes. (Bc6++)', data);
  setUnit(units.king, black, 8, fileSymbols.a, data);
  setUnit(units.king, white, 6, fileSymbols.b, data);
  setUnit(units.bishop, white, 7, fileSymbols.c, data);
  setUnit(units.bishop, white, 5, fileSymbols.b, data);
}

function puzzle6(data) {
  clearBoard(data);
  setCaptions('White to move: Can white mate? How? (This one is not mine.  It is from *Bobby Fischer Teaches Chess*).', 'Yes. (Qxg7...Rxg7,Rb8+...Rg8, g7++)', data);
  setUnit(units.rook, black, 8, fileSymbols.g, data);
  setUnit(units.king, black, 8, fileSymbols.h, data);
  setUnit(units.pawn, black, 7, fileSymbols.c, data);
  setUnit(units.pawn, black, 7, fileSymbols.g, data);
  setUnit(units.pawn, black, 7, fileSymbols.h, data);
  setUnit(units.pawn, black, 6, fileSymbols.a, data);
  setUnit(units.pawn, black, 6, fileSymbols.c, data);
  setUnit(units.pawn, white, 6, fileSymbols.g, data);

  setUnit(units.pawn, black, 5, fileSymbols.d, data);
  setUnit(units.knight, white, 5, fileSymbols.f, data);
  setUnit(units.pawn, white, 5, fileSymbols.h, data);

  setUnit(units.pawn, white, 4, fileSymbols.a, data);
  setUnit(units.pawn, white, 4, fileSymbols.e, data);
  setUnit(units.queen, black, 4, fileSymbols.f, data);

  setUnit(units.pawn, white, 3, fileSymbols.d, data);
  setUnit(units.bishop, black, 3, fileSymbols.e, data);

  setUnit(units.queen, white, 2, fileSymbols.b, data);
  setUnit(units.pawn, white, 2, fileSymbols.g, data);
  setUnit(units.rook, white, 1, fileSymbols.b, data);
  setUnit(units.king, white, 1, fileSymbols.h, data);
}

function puzzle7(data) {
  clearBoard(data);
  setCaptions('White to move: What is the *worst* thing white could do here?', 'g4 or most other moves except g3. Black can then mate with Qh4++', data);
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
  setUnit(units.pawn, black, 5, fileSymbols.e, data);
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
  setUnit(units.pawn, white, 3, fileSymbols.f, data);
  setUnit(units.pawn, white, 2, fileSymbols.g, data);
  setUnit(units.pawn, white, 2, fileSymbols.h, data);
}

function defaultSetup(data) {
  clearBoard(data);
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
}

const puzzles = [defaultSetup, puzzle1,
  puzzle2, puzzle3, puzzle4, puzzle5, puzzle6, puzzle7];

export default puzzles;
