/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import Board from './board';
import {
  newBoard, setUnit, units, black, white,
} from './utility';

describe('Board', () => {
  it('can render a simple board setup', () => {
    const board = newBoard();
    setUnit(units.king, black, 8, 'h', board);
    setUnit(units.king, white, 1, 'h', board);
    const renderResult = render(<Board
      clickCallback={() => {}}
      data={board}
      dragCallback={() => {}}
    />);
    expect(renderResult).toMatchSnapshot();
  });
});
