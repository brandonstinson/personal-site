import React, { Component } from 'react';
import styled from 'styled-components';

import Ball from './ball';
import { randomIntInRange, randomItemInArray } from '../../utils/helpers';

const StyledGravity = styled.div`
  background-color: ${props => props.theme.offWhite};
`;

class Gravity extends Component {
  canvasRef = React.createRef();

  componentDidMount = () => {
    window.addEventListener(`click`, this.init);
    window.addEventListener(`resize`, this.init);
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext(`2d`);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.animation = null;
    this.colors = [`#ff7b7b`, `#ff545e`, `#589ea5`, `#6ec2b1`, `#95e3bb`];
    this.numberOfBalls = this.canvas.width / 7.5;
    this.ballArray = [];
    this.init();
  };

  componentWillUnmount = () => {
    cancelAnimationFrame(this.animation);
    window.removeEventListener(`click`, this.init);
    window.removeEventListener(`resize`, this.init);
  };

  init = () => {
    cancelAnimationFrame(this.animation);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.numberOfBalls = this.canvas.width / 7.5;
    this.ballArray = [];
    for (let i = 0; i < this.numberOfBalls; i++) {
      const radius = randomIntInRange(20, 40);
      const x = randomIntInRange(radius, this.canvas.width - radius);
      const y = randomIntInRange(radius, this.canvas.height - radius);
      const dx = randomIntInRange(-3, 3);
      const dy = randomIntInRange(4, 20) / 10;
      const color = randomItemInArray(this.colors);
      this.ballArray.push(new Ball(this.canvas, this.ctx, x, y, radius, dx, dy, color));
    }
    this.animate();
  };

  animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ballArray.forEach(ball => ball.update());
    this.animation = requestAnimationFrame(this.animate);
  };

  render() {
    return (
      <StyledGravity>
        <canvas ref={this.canvasRef} />
      </StyledGravity>
    );
  }
}

export default Gravity;
