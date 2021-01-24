/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import BishopDark from './images/Chess_bdt45.svg';
import BishopLight from './images/Chess_blt45.svg';

import RookDark from './images/Chess_rdt45.svg';
import RookLight from './images/Chess_rlt45.svg';

import KnightDark from './images/Chess_ndt45.svg';
import KnightLight from './images/Chess_nlt45.svg';

import PawnDark from './images/Chess_pdt45.svg';
import PawnLight from './images/Chess_plt45.svg';

import KingDark from './images/Chess_kdt45.svg';
import KingLight from './images/Chess_klt45.svg';

import QueenDark from './images/Chess_qdt45.svg';
import QueenLight from './images/Chess_qlt45.svg';

import { white, units } from './utility';

// eslint-disable-next-line consistent-return
const getUnitImage = (type, color) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case units.queen:
      return color === white ? QueenLight : QueenDark;
    case units.king:
      return color === white ? KingLight : KingDark;
    case units.rook:
      return color === white ? RookLight : RookDark;
    case units.bishop:
      return color === white ? BishopLight : BishopDark;
    case units.knight:
      return color === white ? KnightLight : KnightDark;
    case units.pawn:
      return color === white ? PawnLight : PawnDark;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const renderUnit = (type, color) => {
  const image = getUnitImage(type, color);
  return <img alt={`${color}-${type}`} style={{ width: '0.8em' }} className="unit" src={image} />;
};
