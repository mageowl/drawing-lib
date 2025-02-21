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

globalThis.drawRectangle = drawRectangle;
globalThis.drawPolygon = drawPolygon;
globalThis.drawCircle = drawCircle;
globalThis.drawText = drawText;
globalThis.clearScreen = clearScreen;
globalThis.setCanvasSize = setCanvasSize;
globalThis.loadImage = loadImage;
globalThis.isKeyDown = isKeyDown;
globalThis.pt = pt;
globalThis.loop = loop;
globalThis.deltaTime = deltaTime;
