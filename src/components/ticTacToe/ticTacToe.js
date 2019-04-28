import React, { Component } from 'react';
import styled from 'styled-components';

import Board from './board';
import Controls from './controls';

const StyledTicTacToe = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  justify-items: center;
  padding: 1rem 0;
  @media (min-width: 1000px) {
    grid-template-columns: 50% 50%;
    grid-gap: 2rem;
  }
`;

class TicTacToe extends Component {
  state = {
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    winner: false,
    squareSize: ``,
  };

  componentDidMount = () => {
    document.getElementById(`board`).addEventListener(`click`, this.handleClick);
    window.addEventListener(`animationend`, this.handleAnimationEnd);
    window.addEventListener(`resize`, this.handleResize);
    this.isPlayersTurn = true;
    this.isAnimationPlaying = false;
    this.animatedElement = null;
    this.handleResize();
  };

  componentWillUnmount = () => {
    document.getElementById(`board`).removeEventListener(`click`, this.handleClick);
    window.removeEventListener(`animationend`, this.handleAnimationEnd);
    window.removeEventListener(`resize`, this.handleResize);
  };

  computerTurn = () => {
    const { board, winner } = this.state;
    if (!this.isPlayersTurn && !winner) {
      const available = this.getAvailableSquares(board);
      const moves = this.minimax(board);
      const move = available[moves.indexOf(Math.max(...moves))];
      const element = document.querySelector(`.square[number='${move}']`);
      this.markSquare(move, element);
    }
  };

  createBoardCopy = board => [...board];

  getAvailableSquares = board => {
    const empty = [];
    board.forEach((value, index) => {
      if (value === 0) {
        empty.push(index);
      }
    });
    return empty;
  };

  getBoardStatus = board => {
    const checkArray = arr => {
      const test = arr[0];
      return arr.every(x => x === test) && test;
    };
    if (
      checkArray([board[0], board[1], board[2]]) ||
      checkArray([board[0], board[3], board[6]]) ||
      checkArray([board[0], board[4], board[8]])
    ) {
      return board[0];
    }
    if (checkArray([board[1], board[4], board[7]])) {
      return board[1];
    }
    if (checkArray([board[2], board[5], board[8]]) || checkArray([board[2], board[4], board[6]])) {
      return board[2];
    }
    if (checkArray([board[3], board[4], board[5]])) {
      return board[3];
    }
    if (checkArray([board[6], board[7], board[8]])) {
      return board[6];
    }
    if (!board.includes(0)) {
      return `Draw`;
    }
    return null;
  };

  handleAnimationEnd = () => {
    const { board } = this.state;
    this.animatedElement.classList.remove(`blink`);
    this.isAnimationPlaying = false;
    this.animatedElement = null;
    const status = this.getBoardStatus(board);
    if (!status) {
      this.isPlayersTurn = !this.isPlayersTurn;
      this.computerTurn();
    } else {
      this.setState({ winner: status });
    }
  };

  handleClick = event => {
    const { board, winner } = this.state;
    const square = event.target.attributes.number.value;
    const element = event.target;
    if (this.isPlayersTurn && !board[square] && !this.isAnimationPlaying && !winner) {
      this.markSquare(square, element);
    }
  };

  handleResize = () => {
    const width = window.innerWidth;
    let squareSize;
    if (width < 1000) {
      squareSize = Math.floor(width / 5);
    } else {
      squareSize = Math.floor(width / 7.5);
    }
    const squareSizeString = `${squareSize}px`;
    this.setState({ squareSize: squareSizeString });
  };

  markSquare = (square, element) => {
    const { board } = this.state;
    const boardCopy = this.createBoardCopy(board);
    boardCopy[square] = this.isPlayersTurn ? `X` : `O`;
    this.isAnimationPlaying = true;
    this.animatedElement = element;
    this.setState({ board: boardCopy });
    element.classList.add(`blink`);
  };

  minimax = (board, isMaximizing = true, depth = 0) => {
    const available = this.getAvailableSquares(board);
    const scores = [];
    available.forEach(square => {
      const copy = this.createBoardCopy(board);
      copy[square] = isMaximizing ? `O` : `X`;
      const status = this.getBoardStatus(copy);
      const multiplier = isMaximizing ? 1 : -1;
      let score;
      if (!status) {
        score = this.minimax(copy, !isMaximizing, depth + 1);
      } else if (status === `Draw`) {
        score = 0;
      } else {
        score = multiplier * (10 - depth);
      }
      scores.push(score);
    });
    if (depth === 0) {
      return scores;
    }
    return isMaximizing ? Math.max(...scores) : Math.min(...scores);
  };

  newGame = () => {
    if (!this.isAnimationPlaying) {
      this.setState({
        board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        winner: false,
      });
      this.isPlayersTurn = true;
      this.isAnimationPlaying = false;
      this.animatedElement = null;
    }
  };

  render() {
    const { board, winner, squareSize } = this.state;
    return (
      <StyledTicTacToe>
        <Board board={board} squareSize={squareSize} />
        <Controls winner={winner} newGame={this.newGame} />
      </StyledTicTacToe>
    );
  }
}

export default TicTacToe;
