import React, { Component } from 'react';
import styled from 'styled-components';

import Particle from '../helpers/particle';
import { randomIntInRange, randomItemInArray } from '../helpers/helpers';

const StyledCircularMotion = styled.div`
    background-color: ${props => props.theme.offWhite};
`;

class CircularMotion extends Component {
    canvasRef = React.createRef();

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('mousemove', this.handleMouseMove);
        this.canvas = this.canvasRef.current;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.particles = [];
        this.animation = null;
        this.colors = ['#ff71ce', '#01cdfe', '#05ffa1', '#b967ff', '#fffb96'];
        this.mouse = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
        this.numberOfParticles = 50;
        this.init();
    };

    componentWillUnmount = () => {
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
        this.particles = [];
        for (let i = 0; i < this.numberOfParticles; i++) {
            const radius = randomIntInRange(3, 5);
            this.particles.push(
                new Particle(
                    this.ctx,
                    this.canvas.width / 2,
                    this.canvas.height / 2,
                    radius,
                    randomItemInArray(this.colors)
                )
            );
        }
        this.animate();
    };

    animate = () => {
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(particle => {
            particle.update(this.mouse);
        });
        this.animation = requestAnimationFrame(this.animate);
    };

    render() {
        return (
            <StyledCircularMotion>
                <canvas ref={this.canvasRef} />
            </StyledCircularMotion>
        );
    }
}

export default CircularMotion;
