import { setCanvasSize } from "./canvas.js";
import { pt } from "./math.js";
import {
	drawRectangle,
	drawPolygon,
	drawCircle,
	drawText,
	clearScreen,
} from "./drawing.js";
import { loop, deltaTime } from "./loop.js";
import { loadImage } from "./image.js";
import { isKeyDown } from "./input.js";

const drawing = {
	drawRectangle,
	drawPolygon,
	drawCircle,
	drawText,
	clearScreen,
	setCanvasSize,
	loadImage,
	isKeyDown,
	pt,
	loop,
	deltaTime,
};
/** @global */
globalThis.drawing = drawing;

export default drawing;
