import React, { Component } from 'react';
import styled from 'styled-components';
import Hammer from 'hammerjs';

import Canvas from './Canvas';
import ScoreCard from './ScoreCard';
import Tetromino from './tetromino';

import shapes from './shapes';
import { randomItemInArray } from '../../helpers/helpers';

const StyledTetris = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 33.3%);
    grid-template-areas:
        'score . next'
        'play play play';
    grid-gap: 10px;
    justify-content: center;
    justify-items: center;
    padding: 20px;
    #playCanvas {
        grid-area: play;
    }
    #nextCanvas {
        grid-area: next;
    }
    .score {
        grid-area: score;
    }
`;

class Tetris extends Component {
    constructor() {
        super();
        this.playRef = React.createRef();
        this.nextRef = React.createRef();
        this.fillColor = '#f2f2f2';
        this.gameInPlay = false;
        this.inactiveBlocks = null;
        this.dropInterval = 1000;
        this.dropCounter = 0;
        this.lastTime = 0;
        this.animation = null;
        this.scale = 20;
    }

    state = {
        level: 1,
        score: 0,
        lines: 0,
    };

    calculateScores = numLines => {
        const { score, lines, level } = this.state;
        if (numLines) {
            const newPoints = level * 100 * (2 ** numLines - 1);
            const ones = lines % 10;
            const leveledUp = ones + numLines >= 10;
            if (leveledUp) {
                this.dropInterval =
                    this.dropInterval > 100 ? this.dropInterval - 70 : this.dropInterval;
            }
            this.setState({
                score: score + newPoints,
                lines: lines + numLines,
                level: leveledUp ? level + 1 : level,
            });
        }
    };

    collision = piece => {
        let collided = false;
        piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (piece.position.x + x > 9 && value !== 0) {
                    collided = true;
                }
                if (piece.position.x + x < 0 && value !== 0) {
                    collided = true;
                }
                if (piece.position.y + y > 19 && value !== 0) {
                    collided = true;
                }
                if (piece.position.y + y >= 0 && piece.position.y + y <= 19 && value !== 0) {
                    if (
                        this.inactiveBlocks[y + piece.position.y][x + piece.position.x] !== 0 &&
                        value !== 0
                    ) {
                        collided = true;
                    }
                }
            });
        });
        return collided;
    };

    componentDidMount = () => {
        this.scale = Math.floor(window.innerHeight / 35);
        window.addEventListener('keydown', this.handleKeydown);
        this.playCanvas = this.playRef.current;
        this.playContext = this.playCanvas.getContext('2d');
        this.nextCanvas = this.nextRef.current;
        this.nextContext = this.nextCanvas.getContext('2d');
        this.hammer = new Hammer(this.playCanvas);
        this.hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        this.hammer.on('swipeleft swiperight swipeup swipedown', this.handleSwipe);
        this.newGame();
    };

    componentWillUnmount = () => {
        cancelAnimationFrame(this.animation);
        window.removeEventListener('keydown', this.handleKeydown);
    };

    drawGrid = grid => {
        grid.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.playContext.fillStyle = value;
                    this.playContext.fillRect(
                        x * this.scale,
                        y * this.scale,
                        this.scale,
                        this.scale
                    );
                }
            });
        });
    };

    findCompleteLines = () => {
        const fullRows = [];
        this.inactiveBlocks.forEach((row, index) => {
            if (row.every(element => element !== 0)) {
                fullRows.push(index);
            }
        });
        fullRows.forEach(row => {
            while (row > 0) {
                for (let i = 0; i < 10; i++) {
                    this.inactiveBlocks[row][i] = this.inactiveBlocks[row - 1][i];
                }
                row--; // eslint-disable-line
            }
        });
        for (let j = 0; j < 10; j++) {
            this.inactiveBlocks[0][j] = 0;
        }
        return fullRows.length;
    };

    gameOver = () => {
        alert('Game Over. Click Ok to play again.');
        this.newGame();
    };

    generateBlockGrid = () => {
        const width = 10;
        let height = 20;
        const grid = [];
        while (height--) {
            grid.push(new Array(width).fill(0));
        }
        return grid;
    };

    handleKeydown = event => {
        switch (event.keyCode) {
            case 37:
                this.handleMove(this.currentTetromino, 'left');
                break;
            case 39:
                this.handleMove(this.currentTetromino, 'right');
                break;
            case 40:
                this.handleMove(this.currentTetromino, 'down');
                break;
            case 81:
                this.handleRotate(this.currentTetromino, 'left');
                break;
            case 38:
            case 87:
                this.handleRotate(this.currentTetromino, 'right');
                break;
            case 80:
                this.pause();
                break;
            case 78:
                this.newGame();
                break;
            default:
                break;
        }
    };

    handleMove = (piece, direction) => {
        if (this.gameInPlay) {
            if (direction === 'left') {
                piece.moveLeft();
                if (this.collision(piece)) {
                    piece.moveRight();
                }
            }
            if (direction === 'right') {
                piece.moveRight();
                if (this.collision(piece)) {
                    piece.moveLeft();
                }
            }
            if (direction === 'down') {
                piece.moveDown();
                if (this.collision(piece)) {
                    piece.moveUp();
                    if (piece.position.y <= 0) {
                        this.gameOver();
                    } else {
                        this.transferCurrentToInactive(piece);
                        this.calculateScores(this.findCompleteLines());
                        this.switchPiece();
                    }
                }
            }
        }
    };

    handleSwipe = event => {
        switch (event.type) {
            case 'swipeleft':
                this.handleMove(this.currentTetromino, 'left');
                break;
            case 'swiperight':
                this.handleMove(this.currentTetromino, 'right');
                break;
            case 'swipedown':
                this.handleMove(this.currentTetromino, 'down');
                break;
            case 'swipeup':
                this.handleRotate(this.currentTetromino, 'right');
                break;
            default:
                break;
        }
    };

    handleRotate = (piece, direction) => {
        if (direction === 'left') {
            piece.rotateLeft();
        } else if (direction === 'right') {
            piece.rotateRight();
        }
        let offset = 1;
        const pos = piece.getPosition().x;
        while (this.collision(piece)) {
            piece.setPosition(offset);
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > 5) {
                if (direction === 'left') {
                    piece.rotateRight();
                } else if (direction === 'right') {
                    piece.rotateLeft();
                }
                piece.setPosition(pos);
                break;
            }
        }
    };

    newGame = () => {
        cancelAnimationFrame(this.animation);
        this.setState({
            level: 1,
            score: 0,
            lines: 0,
        });
        this.currentShape = randomItemInArray(shapes);
        this.nextShape = randomItemInArray(shapes);
        this.currentTetromino = new Tetromino(
            this.currentShape,
            this.playContext,
            true,
            this.scale
        );
        this.nextTetromino = new Tetromino(this.nextShape, this.nextContext, false, this.scale);
        this.inactiveBlocks = this.generateBlockGrid();
        this.dropInterval = 1000;
        this.gameInPlay = true;
        this.update();
    };

    pause = () => {
        this.gameInPlay = !this.gameInPlay;
    };

    transferCurrentToInactive = piece => {
        piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.inactiveBlocks[y + piece.position.y][x + piece.position.x] = piece.color;
                }
            });
        });
    };

    switchPiece = () => {
        this.currentTetromino = new Tetromino(this.nextShape, this.playContext, true, this.scale);
        this.currentShape = this.nextShape;
        this.nextShape = randomItemInArray(shapes);
        this.nextTetromino = new Tetromino(this.nextShape, this.nextContext, false, this.scale);
    };

    update = (time = 0) => {
        this.playContext.fillStyle = this.fillColor;
        this.playContext.fillRect(0, 0, this.playCanvas.width, this.playCanvas.height);
        this.nextContext.fillStyle = this.fillColor;
        this.nextContext.fillRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);
        const deltaTime = time - this.lastTime;
        this.lastTime = time;
        this.dropCounter += deltaTime;
        if (this.dropCounter > this.dropInterval) {
            this.handleMove(this.currentTetromino, 'down');
            this.dropCounter = 0;
        }
        this.drawGrid(this.inactiveBlocks);
        this.currentTetromino.draw();
        this.nextTetromino.draw();
        this.animation = requestAnimationFrame(this.update);
    };

    render() {
        return (
            <StyledTetris>
                <Canvas
                    refName={this.playRef}
                    id="playCanvas"
                    width={10 * this.scale}
                    height={20 * this.scale}
                />
                <Canvas
                    refName={this.nextRef}
                    id="nextCanvas"
                    width={4 * this.scale}
                    height={4 * this.scale}
                />
                <div className="score">
                    <ScoreCard {...this.state} />
                </div>
            </StyledTetris>
        );
    }
}

export default Tetris;
