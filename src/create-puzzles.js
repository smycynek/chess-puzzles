/* eslint-disable prefer-template */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import 'bootstrap/dist/css/bootstrap.css';
import './css/app.css';

import React, { useState, useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';
import elementToPngDownload from './utils/elementToPngDownload';

import Board from './board';
import { parsePuzzleString, renderPuzzleString } from './render-parse';
import {
  newBoard, renderTool, units,
  black, white, setUnit, clearUnit,
} from './utility';

import twitter from './images/twitter.svg';
import facebook from './images/facebook.svg';
import sms from './images/sms.svg';
import cube from './images/cube.svg';
import png from './images/png.svg';
import email from './images/email.svg';

const queryString = require('query-string');
const rot13Cipher = require('rot13-cipher');

const headline = 'Try%20this%20chess%20puzzle.';

const twitterBase = 'http://twitter.com/share?text=';
const facebookBase = 'https://www.facebook.com/sharer/sharer.php?u=';

const CreatePuzzles = () => {
  const [data, setData] = useState(newBoard());
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [flipped, setFlipped] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [selectedColor, setSelectedColor] = useState(white);
  const [selectedUnit, setSelectedUnit] = useState(units.pawn);
  const [showAnswer, setShowAnswer] = useState(false);
  const [editHint, setEditHint] = useState(false);

  const [twitterLink, setTwitterLink] = useState(`${twitterBase}${headline}&url=${encodeURIComponent(window.location)}&hashtags=chesspuzzle`);
  const [facebookLink, setFacebookLink] = useState(`${facebookBase}${encodeURIComponent(window.location)}`);
  const [textLink, setTextLink] = useState(`sms:&body=${headline}%20${encodeURIComponent(window.location)}`);
  const [emailLink, setEmailLink] = useState(`mailto:?subject=${headline}&body=${encodeURIComponent(window.location)}`);
  const [glLink, setGlLink] = useState('https://stevenvictor.net/chess3d');
  const [updated, setUpdated] = useState(false);
  const exportRef = useRef();
  useEffect(() => {
    // launched by share to 3d
    if (updated) {
      console.log(glLink);
      window.open(glLink, '_blank', 'noopener', 'noreferrer');
      setUpdated(false);
    }
  });

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

  const toolSelect = (e) => {
    const buttons = document.getElementsByClassName('unit-button');
    for (let idx = 0; idx < buttons.length; idx += 1) {
      buttons[idx].classList.remove('selected');
    }
    e.currentTarget.classList.toggle('selected');
  };

  const handleWhitePawnClick = (e) => {
    toolSelect(e);
    setSelectedColor(white);
    setSelectedUnit(units.pawn);
  };

  const handleWhiteBishopClick = (e) => {
    toolSelect(e);
    setSelectedColor(white);
    setSelectedUnit(units.bishop);
  };

  const handleWhiteKnightClick = (e) => {
    toolSelect(e);
    setSelectedColor(white);
    setSelectedUnit(units.knight);
  };

  const handleWhiteRookClick = (e) => {
    toolSelect(e);
    setSelectedColor(white);
    setSelectedUnit(units.rook);
  };

  const handleWhiteQueenClick = (e) => {
    toolSelect(e);
    setSelectedColor(white);
    setSelectedUnit(units.queen);
  };

  const handleWhiteKingClick = (e) => {
    toolSelect(e);
    setSelectedColor(white);
    setSelectedUnit(units.king);
  };

  const handleBlackPawnClick = (e) => {
    toolSelect(e);
    setSelectedColor(black);
    setSelectedUnit(units.pawn);
  };

  const handleBlackBishopClick = (e) => {
    toolSelect(e);
    setSelectedColor(black);
    setSelectedUnit(units.bishop);
  };

  const handleBlackKnightClick = (e) => {
    toolSelect(e);
    setSelectedColor(black);
    setSelectedUnit(units.knight);
  };

  const handleBlackRookClick = (e) => {
    toolSelect(e);
    setSelectedColor(black);
    setSelectedUnit(units.rook);
  };

  const handleBlackQueenClick = (e) => {
    toolSelect(e);
    setSelectedColor(black);
    setSelectedUnit(units.queen);
  };

  const handleBlackKingClick = (e) => {
    toolSelect(e);
    setSelectedColor(black);
    setSelectedUnit(units.king);
  };

  // eslint-disable-next-line no-unused-vars
  function randomChar() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    return `${characters.charAt(Math.floor(Math.random() * characters.length))}`;
  }

  // eslint-disable-next-line no-unused-vars
  function randomFive() {
    return `${randomChar()}${randomChar()}${randomChar()}${randomChar()}${randomChar()}`;
  }

  const getCurrentURL = (newData) => `/chess/#/chess/create/${randomFive()}?${renderPuzzleString(newData)}`;

  const getTwitterUrl = () => {
    const fullStr = encodeURIComponent(window.location);
    return `${twitterBase}${headline}&url=${fullStr}&hashtags=chesspuzzle`;
  };

  const getFacebookUrl = () => {
    const fullStr = encodeURIComponent(window.location);
    return `${facebookBase}${fullStr}`;
  };

  const getTextUrl = () => {
    const fullStr = encodeURIComponent(window.location);
    return `sms:&body=${headline}%20${fullStr}`;
  };

  const getEmailLink = () => {
    const fullStr = encodeURIComponent(window.location);
    return `mailto:?subject=${headline}&body=${fullStr}`;
  };

  const getGlLink = () => {
    const originalLink = window.location.href;
    const dataPortion = originalLink.substr(originalLink.indexOf('?') + 1);
    const newUrl = `https://stevenvictor.net/chess3d?${dataPortion}`;
    return newUrl;
  };

  const updateUrl = (newData) => {
    window.history.replaceState(null, 'Chess Puzzles', getCurrentURL(newData));
    setTwitterLink(getTwitterUrl());
    setFacebookLink(getFacebookUrl());
    setTextLink(getTextUrl());
    setEmailLink(getEmailLink());
    setGlLink(getGlLink());
  };

  const launchExternal = () => {
    const newUserData = { ...data };
    newUserData.editMode = (editMode).toString();
    newUserData.flipped = flipped;
    setData(newUserData);
    updateUrl(newUserData);
    setUpdated(true);
  };

  const setUserDataHandler = (square) => {
    const newUserData = { ...data };

    if ((newUserData[square.rank][square.file])
    && (newUserData[square.rank][square.file].unit === selectedUnit)
    && (newUserData[square.rank][square.file].color === selectedColor)) {
      console.log('Clear square.');
      console.log(square);
      clearUnit(square.rank, square.file, newUserData);
    } else {
      console.log('Set square');
      console.log(`${selectedColor}${selectedUnit}`);
      console.log(square);
      setUnit(selectedUnit, selectedColor, square.rank, square.file, newUserData);
    }
    setData(newUserData);
    updateUrl(newUserData);
  };

  const parseSource = (sourceString) => {
    console.log(`raw source: ${sourceString}`);
    let sourceSquare;
    let sourceUnit;
    if (sourceString.length > 6) {
      // e.g. blackQh1
      console.log('Drag from placed unit.');
      sourceSquare = { file: sourceString[6], rank: Number(sourceString[7]) };
      sourceUnit = { color: sourceString.substr(0, 5), unit: sourceString[5] };
      console.log('Source:');
      console.log(sourceSquare);
      console.log(sourceUnit);
    } else {
      // e.g. whiteP
      console.log('Drag from toolbar.');
      sourceSquare = null;
      sourceUnit = { color: sourceString.substr(0, 5), unit: sourceString[5] };
      setSelectedUnit(sourceUnit.unit);
      setSelectedColor(sourceUnit.color);
      console.log('Source:');
      console.log(sourceUnit);
    }
    return { sourceSquare, sourceUnit };
  };

  const parseTarget = (targetString) => {
    let targetSquare;
    console.log(`raw target: ${targetString}`);
    if (targetString.startsWith('rank') || targetString.startsWith('file')) {
      // e.g. rank1 or fileb
      console.log(targetString);
      console.log('Drag off the board, targetSquare set to null.');
      targetSquare = null;
    } else if (targetString.length <= 4) {
      // e.g. c4
      console.log('Drag source to vacant square');
      targetSquare = { file: targetString[0], rank: Number(targetString[1]) };
    } else {
      // e.g. whiteRb2 -- ignore the target unit and color
      console.log('Drag to square with existing unit, replacing it.');
      targetSquare = { file: targetString[6], rank: Number(targetString[7]) };
    }
    console.log('Target');
    console.log(targetSquare);
    return targetSquare;
  };

  const setDragUseDataHandler = (source, target) => {
    if (!source) {
      console.log('No source!');
      // If we are not dragging from anything that has data,
      // do nothing.
      return;
    }
    console.log('DragHandler');
    const newUserData = { ...data };
    const { sourceSquare, sourceUnit } = parseSource(source);
    const targetSquare = parseTarget(target, flipped);

    if (sourceSquare) {
      console.log('Clearing source square');
      clearUnit(sourceSquare.rank, sourceSquare.file, newUserData);
    }
    if (targetSquare) {
      console.log('Setting target square');
      setUnit(sourceUnit.unit, sourceUnit.color, targetSquare.rank, targetSquare.file, newUserData);
    }
    setData(newUserData);
    updateUrl(newUserData);
  };

  const queryParmString = useLocation().search;

  const initFromUrl = () => {
    try {
      const queryParamDict = queryString.parse(queryParmString);
      if (queryParamDict.data) {
        const urlBoard = parsePuzzleString(queryParamDict.data);
        urlBoard.question = queryParamDict.question;
        urlBoard.answer = rot13Cipher(queryParamDict.answer ? queryParamDict.answer : '');
        urlBoard.flipped = queryParamDict.view === 'b';
        setData(urlBoard);
        setFlipped(urlBoard.flipped);
        setQuestion(queryParamDict.question);
        setAnswer(urlBoard.answer);
        if (queryParamDict.editMode && (queryParamDict.editMode === 'true')) {
          setEditMode(true);
        }
      } else {
        setEditMode(true);
      }
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    initFromUrl();
  }, []);

  const handleEditModeClick = () => {
    setEditMode(!editMode);
    const newUserData = { ...data };
    newUserData.editMode = (!editMode).toString();
    newUserData.flipped = flipped;
    setData(newUserData);
    updateUrl(newUserData);
  };

  const handleFlipClick = () => {
    setFlipped(!flipped);
    const newUserData = { ...data };
    newUserData.flipped = !flipped;
    updateUrl(newUserData);
  };

  const handleChangeQuestion = (e) => {
    setQuestion(e.target.value);
    const newUserData = { ...data };
    newUserData.question = e.target.value;
    newUserData.flipped = flipped;
    setData(newUserData);
    updateUrl(newUserData);
  };

  const handleChangeAnswer = (e) => {
    setAnswer(e.target.value);
    const newUserData = { ...data };
    newUserData.answer = e.target.value;
    newUserData.flipped = flipped;
    setData(newUserData);
    updateUrl(newUserData);
  };

  const dragToolSelectUpdate = (ev) => {
    toolSelect(ev);
  };

  let formattedAnswer = answer;
  if (!showAnswer || !answer) {
    formattedAnswer = '...';
  }
  const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
  return (
    <>
      <div id="frame" className="border" ref={exportRef}>
        <div
          onClick={() => (!editMode ? highlightEdit() : false)}
        >
          <Board
            flipped={flipped}
            data={data}
            clickCallback={editMode ? setUserDataHandler : () => {}}
            dragCallback={editMode ? setDragUseDataHandler : () => highlightEdit()}
          />
          {!editMode && (
          <div className="rowQuestion">
            {question}
          </div>
          )}
          {(editMode || !question) && (
          <div className="rowQuestion">
            ...
          </div>
          )}
        </div>
        <div className="row">
          <label className="sliderbox">
            <input type="checkbox" value={editMode} onClick={handleEditModeClick} />
            <span className="slider">{editMode ? ' Edit' : 'View'}</span>
          </label>
          <label className="sliderbox">
            <input type="checkbox" value={flipped} onClick={handleFlipClick} />
            <span className="slider">{flipped ? ' Black' : 'White'}</span>
          </label>
        </div>
        <div className="row">
          {editMode && <span>Tap (or drag on desktop) the tools and squares. </span>}
        </div>

        <div className="row">
          {editHint && (
          <span className="edit-hint">
            Toggle the
            <strong>
              {' '}
              View
              {' '}
            </strong>
            slider to update puzzle
          </span>
          )}
        </div>
        <div className="row">
          {!editMode
      && (
      <>
        <div className="row">
          <button title="Hide/show answer" id="btn-answer" className="styled-button styled-button-textured" type="button" onClick={handleShowHideClick}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
        </div>
        <div className="row">
          <span className="caption info-item">
            {formattedAnswer}
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
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} black pawn`} title={`${toolHint} black pawn`} className="unit-button" type="button" onClick={handleBlackPawnClick}>{renderTool(units.pawn, black)}</button>
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} black knight`} title={`${toolHint} black knight`} className="unit-button" type="button" onClick={handleBlackKnightClick}>{renderTool(units.knight, black)}</button>
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} black bishop`} title={`${toolHint} black bishop`} className="unit-button" type="button" onClick={handleBlackBishopClick}>{renderTool(units.bishop, black)}</button>
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} black rook`} title={`${toolHint} black rook`} className="unit-button" type="button" onClick={handleBlackRookClick}>{renderTool(units.rook, black)}</button>
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} black queen`} title={`${toolHint} black queen`} className="unit-button" type="button" onClick={handleBlackQueenClick}>{renderTool(units.queen, black)}</button>
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} black king`} title={`${toolHint} black king`} className="unit-button" type="button" onClick={handleBlackKingClick}>{renderTool(units.king, black)}</button>
        </div>
        <div className="row indented">
          <button onDragStart={(event) => dragToolSelectUpdate(event)} id="whitePawnTool" aria-label={`${toolHint} white pawn`} title={`${toolHint} white pawn`} className="unit-button selected" type="button" onClick={handleWhitePawnClick}>{renderTool(units.pawn, white)}</button>
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} white knight`} title={`${toolHint} white knight`} className="unit-button" type="button" onClick={handleWhiteKnightClick}>{renderTool(units.knight, white)}</button>
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} white bishop`} title={`${toolHint} white bishop`} className="unit-button" type="button" onClick={handleWhiteBishopClick}>{renderTool(units.bishop, white)}</button>
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} white rook`} title={`${toolHint} white rook`} className="unit-button" type="button" onClick={handleWhiteRookClick}>{renderTool(units.rook, white)}</button>
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} white queen`} title={`${toolHint} white queen`} className="unit-button" type="button" onClick={handleWhiteQueenClick}>{renderTool(units.queen, white)}</button>
          <button onDragStart={(event) => dragToolSelectUpdate(event)} aria-label={`${toolHint} white king`} title={`${toolHint} white king`} className="unit-button" type="button" onClick={handleWhiteKingClick}>{renderTool(units.king, white)}</button>
        </div>

        <div className="field" style={{ marginTop: '1em' }}>
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
          <div className="row">
            <h3>Share</h3>
          </div>
          <div className="row">
            <a className="side-link" href={twitterLink} target="_blank" rel="noopener noreferrer">
              <img title="Share to Twitter" style={{ display: 'block', width: '1.75em', height: '1.75em' }} alt="share to twitter" src={twitter} />
            </a>
            <a className="side-link" href={facebookLink} target="_blank" rel="noopener noreferrer">
              <img title="Share to Facebook" style={{ display: 'block', width: '1.75em', height: '1.75em' }} alt="share to facebook" src={facebook} />
            </a>
            <a className="side-link" href={emailLink} target="_blank" rel="noopener noreferrer">
              <img title="Share to email" style={{ display: 'block', width: '1.75em', height: '1.75em' }} alt="share to email" src={email} />
            </a>
            <a className="side-link" href={textLink} target="_blank" rel="noopener noreferrer">
              <img title="Share to SMS/text" style={{ display: 'block', width: '1.75em', height: '1.75em' }} alt="share to sms" src={sms} />
            </a>
            {glLink && <img title="View in 3D" className="side-link" onClick={launchExternal} style={{ display: 'block', width: '1.75em', height: '1.75em' }} alt="View in 3d" src={cube} />}
            {!isMobile && <img title="Save as PNG" className="side-link" onClick={() => elementToPngDownload(exportRef.current, `chess_puzzle_${Date.now()}`)} style={{ display: 'block', width: '1.75em', height: '1.75em' }} alt="Save as PNG" src={png} />}
          </div>

        </>
        )}
      </div>
    </>
  );
};

export default CreatePuzzles;
