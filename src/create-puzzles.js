/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
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
import React, { useState, useEffect } from 'react';

import { useLocation, Link } from 'react-router-dom';
import { Board } from './board';
import { parsePuzzleString, renderPuzzleString } from './render-parse';
import {
  newBoard, renderTool, units,
  black, white,
} from './utility';

const queryString = require('query-string');
const rot13Cipher = require('rot13-cipher');

// eslint-disable-next-line react/prop-types
export const CreatePuzzles = ({ squareTextures }) => {
  const [data, setData] = useState(newBoard());
  const [selectedColor, setSelectedColor] = useState(white);
  const [selectedUnit, setSelectedUnit] = useState(units.pawn);
  const [showAnswer, setShowAnswer] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editMode, setEditMode] = useState(false);

  const toolHint = 'Click to use this piece.';

  // eslint-disable-next-line no-unused-vars
  const handleShowHideClick = (e) => {
    setShowAnswer(!showAnswer);
  };

  // eslint-disable-next-line no-unused-vars
  const handleEditModeClick = (e) => {
    setEditMode(!editMode);
  };

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
  const queryParmString = useLocation().search;

  const initFromUrl = function () {
    const queryParmDict = queryString.parse(queryParmString);
    console.log(queryParmDict);
    if (queryParmDict.data) {
      const urlBoard = parsePuzzleString(queryParmDict.data);
      urlBoard.question = queryParmDict.question;
      urlBoard.answer = rot13Cipher(queryParmDict.answer ? queryParmDict.answer : '');
      setData(urlBoard);
      setQuestion(queryParmDict.question);
      setAnswer(urlBoard.answer);
    }
  };

  useEffect(() => {
    initFromUrl();
  }, []);
  const handleChangeQuestion = (e) => {
    setQuestion(e.target.value);
    const newUserData = { ...data };
    newUserData.question = e.target.value;
    setData(newUserData);
  };

  const handleChangeAnswer = (e) => {
    setAnswer(e.target.value);
    const newUserData = { ...data };
    newUserData.answer = e.target.value;
    setData(newUserData);
  };

  const getLinkText = (id) => {
    const link = document.getElementById(id);
    if (link) {
      return link.href;
    }
    return null;
  };

  const copyLinkText = (bufferId, linkId) => {
    const buffer = document.getElementById(bufferId);
    const linkText = getLinkText(linkId);
    buffer.value = linkText;
    buffer.select();
    document.execCommand('copy');
  };

  return (
    <>
      <div className="selectable table-top">
        <Board data={data} squareTextures={squareTextures} clickCallback={editMode ? setUserDataHandler : () => {}} />
      </div>
      <div className="row">
        <button className="styled-button styled-button-textured" type="button" onClick={handleEditModeClick}>{editMode ? 'View' : 'Edit'}</button>
      </div>
      {editMode &&
      <>
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

        <div className="field">
          <input className="transparent-input" size="45" placeholder="Question, e.g. 'How can white mate in 2?'" type="text" value={question} onChange={handleChangeQuestion} />
        </div>
        <div className="field">
          <input className="transparent-input" size="45" placeholder="Answer, e.g. 'Qa8...Ra7'" type="text" value={answer} onChange={handleChangeAnswer} />
        </div>
        <div className="row">
          <button
            className="styled-button styled-button-textured"
            id="copyLinkButton"
            onClick={() => copyLinkText('id_copy_buffer', 'link_1')}
            type="button"
          >
            &#x1F517; Copy Puzzle Link
          </button>
        </div>
        <div className="row">
          <Link id="link_1" to={`/create?${renderPuzzleString(data)}`} />
          <input
            type="text"
            className="hidden-input"
            value={getLinkText('link_1')}
            id="id_copy_buffer"
          />
        </div>
      </>}

      {!editMode &&
      <>
        <div className="row expanded">
          <button id="btn-answer" className="styled-button styled-button-textured" type="button" onClick={handleShowHideClick}>Hide/show answer</button>
        </div>
        <div className="row expanded">
          <span className="caption">
            {question}
            {' '}
            {showAnswer && <b><i>{answer}</i></b>}
          </span>
        </div>
      </>}
    </>
  );
};
