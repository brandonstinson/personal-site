import { randomIntInRange } from '../../utils/helpers';

export default function Particle(ctx, x, y, r, color) {
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  this.rad = Math.random() * Math.PI * 2;
  this.vel = 0.05;
  this.distanceFromCenter = randomIntInRange(50, 150);
  this.lastMouse = { xc: x, yc: y };
  this.dragRate = 0.05;

  this.draw = last => {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.r;
    this.ctx.moveTo(last.x, last.y);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();
    this.ctx.closePath();
  };

  this.update = mouse => {
    const lastPoint = {
      x: this.x,
      y: this.y,
    };

    this.rad += this.vel;

    this.lastMouse.xc += (mouse.x - this.lastMouse.xc) * this.dragRate;
    this.lastMouse.yc += (mouse.y - this.lastMouse.yc) * this.dragRate;

    this.x = this.lastMouse.xc + Math.cos(this.rad) * this.distanceFromCenter;
    this.y = this.lastMouse.yc + Math.sin(this.rad) * this.distanceFromCenter;

    this.draw(lastPoint);
  };
}
