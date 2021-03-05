import {
  units,
  fileSymbols,
  black, white, setCaptions, setUnit, newBoard,
} from '../utility';

import { fromQueryString } from '../render-parse';

function puzzle1() {
  const data = newBoard();
  setCaptions('White to move: Can white mate?', 'No - draw.', data);
  setUnit(units.king, black, 4, fileSymbols.a, data);
  setUnit(units.king, white, 8, fileSymbols.b, data);
  return data;
}

function puzzle2() {
  const data = newBoard();
  setCaptions('White to move: Can white mate?', 'No - draw.', data);
  setUnit(units.king, black, 8, fileSymbols.a, data);
  setUnit(units.bishop, white, 8, fileSymbols.c, data);
  setUnit(units.king, white, 6, fileSymbols.c, data);
  return data;
}

function puzzle3() {
  const data = newBoard();
  setCaptions('White to move: Can white mate?', 'Yes. (Ra6#)', data);
  setUnit(units.king, black, 8, fileSymbols.a, data);
  setUnit(units.rook, white, 6, fileSymbols.b, data);
  setUnit(units.king, white, 7, fileSymbols.c, data);
  return data;
}

function puzzle4() {
  const data = newBoard();
  setCaptions('Black to move: Can black check in one move?', 'No. (White rook pins black rook).', data);
  setUnit(units.king, white, 1, fileSymbols.a, data);
  setUnit(units.rook, black, 8, fileSymbols.d, data);
  setUnit(units.king, black, 8, fileSymbols.h, data);
  setUnit(units.rook, white, 8, fileSymbols.b, data);
  return data;
}

function puzzle5() {
  const data = newBoard();
  setCaptions('White to move: Can white mate in one move?', 'Yes. (Bc6)', data);
  setUnit(units.king, black, 8, fileSymbols.a, data);
  setUnit(units.king, white, 6, fileSymbols.b, data);
  setUnit(units.bishop, white, 7, fileSymbols.c, data);
  setUnit(units.bishop, white, 5, fileSymbols.b, data);
  return data;
}

function puzzle6() {
  const data = newBoard();
  setCaptions('White to move: Can white mate? How? (This one is not mine.  It is from *Bobby Fischer Teaches Chess*).', 'Yes. (Qxg7...Rxg7,Rb8+...Rg8, g7#)', data);
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
  return data;
}

function puzzle7() {
  const data = newBoard();
  setCaptions('White to move: What is the *worst* thing white could do here?', 'g4 or most other moves except g3. Black can then mate with Qh4#', data);
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
  return data;
}

function defaultSetup() {
  const data = newBoard();
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
  return data;
}

function fromURL1() {
  const queryString = 'question=White%20to%20move%3A&answer=As6%23&data=wKh1%2CbBc1%2CbBd1%2CwPg2%2CwPh2%2CwNe4%2CbPd5%2CbPc6%2CbPb6%2CwRg6%2CwPg7%2CbPf7%2CbPh7%2CbQb7%2CwRe7%2CbRa8%2CbRb8%2CbKg8';
  return fromQueryString(queryString);
}

function fromURL2() {
  const queryString = 'question=Explain%20who%20will%20likely%20win%20if%20white%20is%20to%20move.%20%20If%20Black%20is%20to%20move%3F&answer=Vs%20juvgr%20vf%20gb%20zbir%2C%20gur%20oynpx%20xvat%20jvyy%20abg%20pngpu%20hc%20gb%20gur%20juvgr%20cnja%20orsber%20vg%20cebzbgrf.%20%20Vs%20oynpx%20vf%20gb%20zbir%2C%20vg%20pna%20pngpu%20hc%20(ehyr%20bs%20fdhnerf).%20%20Vg\'f%20cbffvoyr%20juvgr%20pbhyq%20fgvyy%20jva%20vs%20oynpx%20vf%20gb%20zbir%2C%20ohg%20vg\'f%20uvtuyl%20hayvxryl.&data=wKh1%2CwPd3%2CbPd4%2CbPf4%2CbKa5%2CwPc6';
  return fromQueryString(queryString);
}

function fromURL3() {
  const queryString = 'question=White%20to%20move%20--%20any%20ideas%3F&answer=Op3%2B%20--%20fxrjref%20gur%20oynpx%20xvat%20naq%20nyybjf%20sbe%20n%20dhrra%20pncgher.&data=wKh1%2CwBf1%2CwPg2%2CwPh2%2CbNb2%2CbNb3%2CbPc4%2CwBa5%2CwNg5%2CwPb6%2CwRh6%2CbKg7%2CbPh7%2CbBf7%2CbBa7%2CwPb7%2CbQh8';
  return fromQueryString(queryString);
}
const puzzles = [defaultSetup, puzzle1,
  puzzle2, puzzle3, puzzle4, puzzle5, puzzle6, puzzle7, fromURL1, fromURL2, fromURL3];

export default puzzles;
