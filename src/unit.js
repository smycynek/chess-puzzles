/* eslint-disable react/jsx-filename-extension */
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

import { white, units } from './utility';

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
  return <img alt={`${color}-${type}`} style={{ width: '0.8em' }} className="unit" src={image} />;
};
