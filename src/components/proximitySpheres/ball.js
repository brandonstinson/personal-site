import { posOrNeg, randomIntInRange } from '../../utils/helpers';

export default function Ball(canvas, ctx, radius, color, maxRadius) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.radius = radius;
  this.color = color;
  this.maxRadius = maxRadius;
  this.vel = 1.7;
  this.minVel = 0.3;
  this.proximity = 50;
  this.growthFactor = 4;
  this.growthRate = 2;
  this.x = randomIntInRange(this.radius, this.canvas.width - this.radius);
  this.y = randomIntInRange(this.radius, this.canvas.height - this.radius);
  this.dx = posOrNeg() * Math.random() * this.vel + this.minVel;
  this.dy = posOrNeg() * Math.random() * this.vel + this.minVel;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  this.update = mouse => {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x <= this.radius || this.x >= this.canvas.width - this.radius) {
      this.dx *= -1;
    }
    if (this.y <= this.radius || this.y >= this.canvas.height - this.radius) {
      this.dy *= -1;
    }

    if (
      mouse.x - this.x < this.proximity &&
      mouse.x - this.x > this.proximity * -1 &&
      mouse.y - this.y < this.proximity &&
      mouse.y - this.y > this.proximity * -1
    ) {
      if (this.radius < this.maxRadius * this.growthFactor) {
        this.radius += this.growthRate;
      }
    } else if (this.radius > this.maxRadius) {
      this.radius -= this.growthRate;
    }

    this.draw();
  };
}
