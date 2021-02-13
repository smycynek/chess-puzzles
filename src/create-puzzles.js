/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Board from './board';
import { parsePuzzleString, renderPuzzleString } from './render-parse';
import {
  newBoard, renderTool, units,
  black, white, setUnit, clearUnit,
} from './utility';

import eye from './images/eye.svg';
import edit from './images/edit.svg';
import twitter from './images/twitter.svg';
import facebook from './images/facebook.svg';
import sms from './images/sms.svg';
import email from './images/email.svg';

const queryString = require('query-string');
const rot13Cipher = require('rot13-cipher');

const headline = 'Try%20this%20chess%20puzzle.';

const CreatePuzzles = ({ squareTextures }) => {
  const [data, setData] = useState(newBoard());
  const [selectedColor, setSelectedColor] = useState(white);
  const [selectedUnit, setSelectedUnit] = useState(units.pawn);
  const [showAnswer, setShowAnswer] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editHint, setEditHint] = useState(false);
  const [twitterLink, setTwitterLink] = useState(`http://twitter.com/share?text=${headline}&url=${encodeURIComponent(window.location)}&hashtags=chesspuzzles`);
  const [facebookLink, setFacebookLink] = useState(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location)}`);
  const [textLink, setTextLink] = useState(`sms:&body=${headline}%20${encodeURIComponent(window.location)}`);
  const [emailLink, setEmailLink] = useState(`mailto:?subject=${headline}&body=${encodeURIComponent(window.location)}`);

  const highlightEdit = () => {
    setEditHint(true);
    function reverse() {
      setEditHint(false);
    }
    setTimeout(reverse, 1000);
  };
  const toolHint = 'Click to select';

  const handleShowHideClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleEditModeClick = () => {
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

  const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

  const getCurrentURL = (newData) => `/chess/#/chess/create?${renderPuzzleString(newData)}`;

  const getTwitterUrl = () => {
    const fullStr = encodeURIComponent(window.location);
    return `http://twitter.com/share?text=${headline}&url=${fullStr}&hashtags=chesspuzzles`;
  };

  const getFacebookUrl = () => {
    const fullStr = encodeURIComponent(window.location);
    return `https://www.facebook.com/sharer/sharer.php?u=${fullStr}`;
  };

  const getTextUrl = () => {
    const fullStr = encodeURIComponent(window.location);
    return `sms:&body=${headline}%20${fullStr}`;
  };

  const getEmailLink = () => {
    const fullStr = encodeURIComponent(window.location);
    return `mailto:?subject=${headline}&body=${fullStr}`;
  };

  const updateUrl = (newData) => {
    window.history.replaceState(null, 'Chess Puzzles', getCurrentURL(newData));
    setTwitterLink(getTwitterUrl());
    setFacebookLink(getFacebookUrl());
    setTextLink(getTextUrl());
    setEmailLink(getEmailLink());
  };

  const setUserDataHandler = (square) => {
    const newUserData = { ...data };

    if ((newUserData[square.rank][square.file])
    && (newUserData[square.rank][square.file].unit === selectedUnit)
    && (newUserData[square.rank][square.file].color === selectedColor)) {
      clearUnit(square.rank, square.file, newUserData);
    } else {
      setUnit(selectedUnit, selectedColor, square.rank, square.file, newUserData);
    }
    setData(newUserData);
    updateUrl(newUserData);
  };
  const queryParmString = useLocation().search;

  const initFromUrl = () => {
    const queryParmDict = queryString.parse(queryParmString);
    if (queryParmDict.data) {
      const urlBoard = parsePuzzleString(queryParmDict.data);
      urlBoard.question = queryParmDict.question;
      urlBoard.answer = rot13Cipher(queryParmDict.answer ? queryParmDict.answer : '');
      setData(urlBoard);
      setQuestion(queryParmDict.question);
      setAnswer(urlBoard.answer);
    } else {
      setEditMode(true);
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
    updateUrl(newUserData);
  };

  const handleChangeAnswer = (e) => {
    setAnswer(e.target.value);
    const newUserData = { ...data };
    newUserData.answer = e.target.value;
    setData(newUserData);
    updateUrl(newUserData);
  };

  return (
    <>
      <div
        className="table-top"
        onClick={() => (!editMode ? highlightEdit() : false)}
      >
        <Board
          data={data}
          squareTextures={squareTextures}
          clickCallback={editMode ? setUserDataHandler : () => {}}
        />
      </div>
      <div className="row">
        {editHint && <span className="edit-hint">Click edit icon to update puzzle</span>}
      </div>
      <div className="row">
        <button title="Toggle edit/view mode" aria-label="Toggle edit/view mode" type="button" className="main-button" onClick={handleEditModeClick}>
          { editMode ? <img style={{ width: '1.75em', height: '1.75em' }} alt="view" src={eye} /> : <img style={{ width: '1.75em', height: '1.75em' }} alt="edit" src={edit} /> }
        </button>

        {!editMode
      && (
      <>
        <div className="row expanded">
          <button title="Hide/show answer" id="btn-answer" className="styled-button styled-button-textured" type="button" onClick={handleShowHideClick}>{showAnswer ? 'Hide answer' : 'Show answer'}</button>
        </div>
        <div className="row expanded">
          <span className="caption">
            {question}
            {' '}
            {showAnswer && <b><i>{answer}</i></b>}
          </span>
        </div>
      </>
      )}

      </div>
      {
      editMode
      && (
      <>
        <div className="row indented">
          <button aria-label={`${toolHint} black pawn`} title={`${toolHint} black pawn`} className="unit-button" type="button" onClick={handleBlackPawnClick}>{renderTool(units.pawn, black)}</button>
          <button aria-label={`${toolHint} black knight`} title={`${toolHint} black knight`} className="unit-button" type="button" onClick={handleBlackKnightClick}>{renderTool(units.knight, black)}</button>
          <button aria-label={`${toolHint} black bishop`} title={`${toolHint} black bishop`} className="unit-button" type="button" onClick={handleBlackBishopClick}>{renderTool(units.bishop, black)}</button>
          <button aria-label={`${toolHint} black rook`} title={`${toolHint} black rook`} className="unit-button" type="button" onClick={handleBlackRookClick}>{renderTool(units.rook, black)}</button>
          <button aria-label={`${toolHint} black queen`} title={`${toolHint} black queen`} className="unit-button" type="button" onClick={handleBlackQueenClick}>{renderTool(units.queen, black)}</button>
          <button aria-label={`${toolHint} black king`} title={`${toolHint} black king`} className="unit-button" type="button" onClick={handleBlackKingClick}>{renderTool(units.king, black)}</button>
        </div>
        <div className="row indented">
          <button aria-label={`${toolHint} white pawn`} title={`${toolHint} white pawn`} className="unit-button" type="button" onClick={handleWhitePawnClick}>{renderTool(units.pawn, white)}</button>
          <button aria-label={`${toolHint} white knight`} title={`${toolHint} white knight`} className="unit-button" type="button" onClick={handleWhiteKnightClick}>{renderTool(units.knight, white)}</button>
          <button aria-label={`${toolHint} white bishop`} title={`${toolHint} white bishop`} className="unit-button" type="button" onClick={handleWhiteBishopClick}>{renderTool(units.bishop, white)}</button>
          <button aria-label={`${toolHint} white rook`} title={`${toolHint} white rook`} className="unit-button" type="button" onClick={handleWhiteRookClick}>{renderTool(units.rook, white)}</button>
          <button aria-label={`${toolHint} white queen`} title={`${toolHint} white queen`} className="unit-button" type="button" onClick={handleWhiteQueenClick}>{renderTool(units.queen, white)}</button>
          <button aria-label={`${toolHint} white king`} title={`${toolHint} white king`} className="unit-button" type="button" onClick={handleWhiteKingClick}>{renderTool(units.king, white)}</button>
        </div>

        <div className="field">
          <input className="transparent-input" size="45" placeholder="Question, e.g. 'How can white mate in 2?'" type="text" value={question} onChange={handleChangeQuestion} />
        </div>
        <div className="field">
          <input className="transparent-input" size="45" placeholder="Answer, e.g. 'Qa8...Ra7'" type="text" value={answer} onChange={handleChangeAnswer} />
        </div>
      </>
      )
}
      { !editMode && (
        <>
          <div className="row expanded">
            <h3 className="sub-sub-heading">Share</h3>
          </div>
          <div className="row expanded">
            <a className="side-link" href={twitterLink} target="_blank" rel="noopener noreferrer">
              <img style={{ display: 'block', width: '1.75em', height: '1.75em' }} alt="share to twitter" src={twitter} />
            </a>
            <a className="side-link" href={facebookLink} target="_blank" rel="noopener noreferrer">
              <img style={{ display: 'block', width: '1.75em', height: '1.75em' }} alt="share to facebook" src={facebook} />
            </a>
            <a className="side-link" href={emailLink} target="_blank" rel="noopener noreferrer">
              <img style={{ display: 'block', width: '1.75em', height: '1.75em' }} alt="share to email" src={email} />
            </a>
            {isMobile
              && (
              <a className="side-link" href={textLink} target="_blank" rel="noopener noreferrer">
                <img style={{ display: 'block', width: '1.75em', height: '1.75em' }} alt="share to sms" src={sms} />
              </a>
              )}
          </div>
        </>
      )}
    </>
  );
};

export default CreatePuzzles;
