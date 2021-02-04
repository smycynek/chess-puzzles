import { black, white, clearBoard } from './utility';

export const parseSquareString = (position) => {
  // Warning, no error checking currently.
  const colorChar = position[0];
  const unitChar = position[1];
  const fileChar = position[2];
  const rankChar = position[3];

  const color = colorChar === 'w' ? white : black;
  const unit = unitChar;
  const file = fileChar;
  const rank = Number(rankChar);

  return {
    unit: {
      color, unit,
    },
    square: { rank, file },
  };
};

export const parsePuzzleString = (puzzle) => {
  const board = {};
  clearBoard(board);
  const puzzleData = puzzle.split(',');
  const data = puzzleData.map((m) => parseSquareString(m));
  // eslint-disable-next-line no-return-assign
  data.forEach((datum) => board[datum.square.rank][datum.square.file] = datum.unit);
  return board;
};

const traverseMap = (data) => {
  const flat = [];
  Object.keys(data).forEach((r) => {
    if ((r !== 'question') && (r !== 'answer')) {
      Object.keys(data[r]).forEach((f) => {
        flat.push({ square: { rank: r, file: f }, item: data[r][f] });
      });
    }
  });
  return flat;
};

const renderSquareString = (square, item) => {
  if (item && item.color) {
    return `${item.color[0]}${item.unit}${square.file}${square.rank}`;
  }
  return '';
};

const renderAllSquares = (data) => {
  const unitArray = traverseMap(data);
  const renderedUnits = unitArray.map((unit) => renderSquareString(unit.square, unit.item));

  const renderedUnitsNonNull = renderedUnits.filter((item) => item !== '');

  return renderedUnitsNonNull.join(',');
};

export const renderPuzzleString = (data) => {
  const str = `question=${encodeURIComponent(data.question)}&answer=${encodeURIComponent(data.answer)}&data=${encodeURIComponent(renderAllSquares(data))}`;
  return str;
};
