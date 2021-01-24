export const ranks = [7, 6, 5, 4, 3, 2, 1, 0];

export const files = [0, 1, 2, 3, 4, 5, 6, 7];

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
  0: fileSymbols.a,
  1: fileSymbols.b,
  2: fileSymbols.c,
  3: fileSymbols.d,
  4: fileSymbols.e,
  5: fileSymbols.f,
  6: fileSymbols.g,
  7: fileSymbols.h,
};

const reverseFileMap = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};
export const rankToDisplay = (rank) => rank + 1;
export const fileToDisplay = (file) => fileMap[file];

export const displayToRank = (rank) => rank - 1;
export const displayToFile = (file) => reverseFileMap[file];

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

export const squareColor = (rank, file) => ((rank + file) % 2 === 0 ? dark : light);
