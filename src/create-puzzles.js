/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-wrap-multilines */

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState } from 'react';

import { Board } from './board';
import {
  newBoard, renderTool, units,
  black, white,
} from './utility';

// eslint-disable-next-line react/prop-types
export const CreatePuzzles = ({ squareTextures }) => {
  const [data, setData] = useState(newBoard());
  const [selectedColor, setSelectedColor] = useState(white);
  const [selectedUnit, setSelectedUnit] = useState(units.pawn);

  const toolHint = 'Click to use this piece.';

  const handleWhitePawnClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.pawn);
  };

  const handleWhiteBishopClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.bishop);
  };

  const handleWhiteKnightClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.knight);
  };

  const handleWhiteRookClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.rook);
  };

  const handleWhiteQueenClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.queen);
  };

  const handleWhiteKingClick = () => {
    setSelectedColor(white);
    setSelectedUnit(units.king);
  };

  const handleBlackPawnClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.pawn);
  };

  const handleBlackBishopClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.bishop);
  };

  const handleBlackKnightClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.knight);
  };

  const handleBlackRookClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.rook);
  };

  const handleBlackQueenClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.queen);
  };

  const handleBlackKingClick = () => {
    setSelectedColor(black);
    setSelectedUnit(units.king);
  };

  const setUserDataHandler = function (square) {
    const newUserData = { ...data };

    if ((newUserData[square.rank][square.file])
    && (newUserData[square.rank][square.file].unit === selectedUnit)
    && (newUserData[square.rank][square.file].color === selectedColor)) {
      newUserData[square.rank][square.file] = null;
    } else {
      newUserData[square.rank][square.file] = { unit: selectedUnit, color: selectedColor };
    }
    setData(newUserData);
  };

  return (
    <>
      <div className="selectable table-top">
        <Board data={data} squareTextures={squareTextures} clickCallback={setUserDataHandler} />
      </div>
      <div className="row indented">
        <button title={toolHint} className="unit-button" type="button" onClick={handleBlackPawnClick}>{renderTool(units.pawn, black)}</button>
        <button title={toolHint} className="unit-button" type="button" onClick={handleBlackKnightClick}>{renderTool(units.knight, black)}</button>
        <button title={toolHint} className="unit-button" type="button" onClick={handleBlackBishopClick}>{renderTool(units.bishop, black)}</button>
        <button title={toolHint} className="unit-button" type="button" onClick={handleBlackRookClick}>{renderTool(units.rook, black)}</button>
        <button title={toolHint} className="unit-button" type="button" onClick={handleBlackQueenClick}>{renderTool(units.queen, black)}</button>
        <button title={toolHint} className="unit-button" type="button" onClick={handleBlackKingClick}>{renderTool(units.king, black)}</button>
      </div>
      <div className="row indented">
        <button title={toolHint} className="unit-button" type="button" onClick={handleWhitePawnClick}>{renderTool(units.pawn, white)}</button>
        <button title={toolHint} className="unit-button" type="button" onClick={handleWhiteKnightClick}>{renderTool(units.knight, white)}</button>
        <button title={toolHint} className="unit-button" type="button" onClick={handleWhiteBishopClick}>{renderTool(units.bishop, white)}</button>
        <button title={toolHint} className="unit-button" type="button" onClick={handleWhiteRookClick}>{renderTool(units.rook, white)}</button>
        <button title={toolHint} className="unit-button" type="button" onClick={handleWhiteQueenClick}>{renderTool(units.queen, white)}</button>
        <button title={toolHint} className="unit-button" type="button" onClick={handleWhiteKingClick}>{renderTool(units.king, white)}</button>
      </div>
      <div className="row expanded indented">
        <span className="caption">Ability to save and publish coming soon!</span>
      </div>
    </>
  );
};
