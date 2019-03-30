import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBoard = styled.div`
  --border: 5px solid ${props => props.theme.black};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .square {
    width: ${props => props.size};
    height: ${props => props.size};
    font-size: 4rem;
    display: grid;
    justify-items: center;
    align-items: center;
  }
  .square[number='0'] {
    border-right: var(--border);
    border-bottom: var(--border);
  }
  .square[number='1'] {
    border-left: var(--border);
    border-bottom: var(--border);
    border-right: var(--border);
  }
  .square[number='2'] {
    border-left: var(--border);
    border-bottom: var(--border);
  }
  .square[number='3'] {
    border-top: var(--border);
    border-right: var(--border);
    border-bottom: var(--border);
  }
  .square[number='4'] {
    border: var(--border);
  }
  .square[number='5'] {
    border-top: var(--border);
    border-left: var(--border);
    border-bottom: var(--border);
  }
  .square[number='6'] {
    border-right: var(--border);
    border-top: var(--border);
  }
  .square[number='7'] {
    border-left: var(--border);
    border-top: var(--border);
    border-right: var(--border);
  }
  .square[number='8'] {
    border-left: var(--border);
    border-top: var(--border);
  }
  .winner {
    width: calc(${props => props.size} * 3);
    height: calc(${props => props.size} * 3);
    font-size: 3rem;
  }
  .blink {
    animation: blinker 0.25s 4;
  }
  @keyframes blinker {
    25% {
      color: #a9b7c0;
    }
    50% {
      color: black;
    }
    75% {
      color: #a9b7c0;
    }
    100% {
      color: black;
    }
  }
`;

const Board = ({ board, squareSize }) => (
  <StyledBoard size={squareSize} id="board">
    {board.map((square, index) => (
      <div className="square" number={index} key={index}>
        {square === 0 ? `` : square}
      </div>
    ))}
  </StyledBoard>
);

Board.propTypes = {
  board: PropTypes.instanceOf(Array).isRequired,
  squareSize: PropTypes.string.isRequired,
};

export default Board;
