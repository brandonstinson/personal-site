import React, { Component } from 'react';
import styled from 'styled-components';

import Ball from './ball';
import { randomIntInRange, randomItemInArray } from '../../helpers/helpers';

const StyledBallsOnMouse = styled.div`
    background-color: ${props => props.theme.offWhite};
`;

class BallsOnMouse extends Component {
    canvasRef = React.createRef();

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('mousemove', this.handleMouseMove);
        this.canvas = this.canvasRef.current;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.numberOfBalls = 1000;
        this.minRadius = 5;
        this.maxRadius = 25;
        this.colorArray = ['#23282E', '#485058', '#A6A5A1', '#F1ECE9', '#D7443F'];
        this.mouse = { x: null, y: null };
        this.ballArray = [];
        this.animation = null;
        this.init();
    };

    componentWillUnmount = () => {
        cancelAnimationFrame(this.animation);
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousemove', this.handleMouseMove);
    };

    handleResize = () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        cancelAnimationFrame(this.animation);
        this.init();
    };

    handleMouseMove = event => {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
    };

    init = () => {
        this.ballArray = [];
        for (let i = 0; i < this.numberOfBalls; i++) {
            this.ballArray.push(
                new Ball(
                    this.canvas,
                    this.ctx,
                    randomIntInRange(this.minRadius, this.maxRadius),
                    randomItemInArray(this.colorArray),
                    this.maxRadius
                )
            );
        }
        this.animate();
    };

    animate = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ballArray.forEach(ball => ball.update(this.mouse));
        this.animation = requestAnimationFrame(this.animate);
    };

    render() {
        return (
            <StyledBallsOnMouse>
                <canvas ref={this.canvasRef} />
            </StyledBallsOnMouse>
        );
    }
}

export default BallsOnMouse;
