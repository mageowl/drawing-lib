import { scale, ctx, canvasEl } from "./canvas.js";

/**
 * Draws a rectange to the screen
 *
 * @param {number} x
 * @param {number} y
 * @param {number} w Width of rectangle
 * @param {number} h Height of rectangle
 * @param {string?} color
 */
export function drawRectangle(x, y, w, h, color) {
	ctx.fillStyle = color;
	ctx.fillRect(scale(x), scale(y), scale(w), scale(h));
}

/**
 * Draws a polygon to the screen
 *
 * @param {number} x X offset
 * @param {number} y Y offset
 * @param {import("./math.js").Point[]} points
 * @param {string?} color
 */
export function drawPolygon(x, y, points, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	for (let point of points) {
		ctx.moveTo(scale(point.x + x), scale(point.y + y));
	}
	ctx.closePath();
	ctx.fill();
}

/**
 * Draws a circle to the screen
 *
 * @param {number} x X position of the center of the circle
 * @param {number} y Y position of the center of the circle
 * @param {number} r Radius
 * @param {string?} color
 */
export function drawCircle(x, y, r, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(scale(x), scale(y), scale(r), 0, Math.PI * 2);
	ctx.closePath();
	ctx.fill();
}

/**
 * Draws text to the screen
 *
 * @param {string} text
 * @param {number} x
 * @param {number} y
 * @param {string?} color
 * @param {string?} font Font style (e.g. bold italic 40px serif)
 */
export function drawText(text, x, y, color, align, font = "16px monospace") {
	ctx.fillStyle = color;
	ctx.font = font;
	ctx.textAlign = align;
	ctx.fillText(text, scale(x), scale(y));
}

/**
 * Draws an image to the screen
 *
 * @param {number} x
 * @param {number} y
 * @param {ImageBitmap} image Image to render. It is recommended to use loadImage(url) to get an image.
 */
export function drawImage(x, y, image) {
	ctx.drawImage(image, scale(x), scale(y));
}

/**
 * Clears the screen
 */
export function clearScreen() {
	ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
}
