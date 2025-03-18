/** @type {HTMLCanvasElement} */
export const canvasEl = document.querySelector("canvas#drawing-lib");
if (canvasEl == null) {
	alert('I couldn\'t find a canvas with id="drawing-lib".');
}
export const ctx = canvasEl.getContext("2d");

export let virtualWidth = 480;
export let virtualHeight = 360;
export let virtualRatio = virtualWidth / virtualHeight;

/**
 * Sets the size of the canvas.
 *
 * @param {number} width Width in pixels of canvas.
 * @param {number} height Height in pixels of canvas.
 */
export function setCanvasSize(width, height) {
	virtualWidth = width;
	virtualHeight = height;
	virtualRatio = width / height;
	resizeElement();
}

/**
 * @param {number} x
 */
export function scale(x) {
	return x * (canvasEl.width / virtualWidth);
}

function resizeElement() {
	const screenWidth = innerWidth - 80;
	const screenHeight = innerHeight - 80;
	const widthConstraint = screenWidth / virtualRatio < screenHeight;
	if (widthConstraint) {
		canvasEl.width = screenWidth;
		canvasEl.height = screenWidth / virtualRatio;
	} else {
		canvasEl.width = screenHeight * virtualRatio;
		canvasEl.height = screenHeight;
	}
}
addEventListener("resize", resizeElement);
resizeElement();

canvasEl.style.display = "block";
