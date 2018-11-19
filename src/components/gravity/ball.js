export default function Ball(canvas, context, x, y, r, dx, dy, color) {
    this.canvas = canvas;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.gravity = 1;
    this.friction = 0.95;

    this.draw = () => {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    };

    this.update = () => {
        if (this.y + this.r + this.dy > this.canvas.height) {
            this.dy = -this.dy * this.friction;
            this.dx *= this.friction;
        } else {
            this.dy += this.gravity;
        }

        if (this.x + this.r + this.dx > canvas.width || this.x - this.r + this.dx < 0) {
            this.dx = -this.dx * this.friction;
            this.dy *= this.friction;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };
}
