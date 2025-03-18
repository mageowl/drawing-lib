declare module "canvas" {
    /**
     * Sets the size of the canvas.
     *
     * @param {number} width Width in pixels of canvas.
     * @param {number} height Height in pixels of canvas.
     */
    export function setCanvasSize(width: number, height: number): void;
    /**
     * @param {number} x
     */
    export function scale(x: number): number;
    /** @type {HTMLCanvasElement} */
    export const canvasEl: HTMLCanvasElement;
    export const ctx: CanvasRenderingContext2D;
    export let virtualWidth: number;
    export let virtualHeight: number;
    export let virtualRatio: number;
}
declare module "math" {
    /**
     * A 2D point in space.
     * @typedef {Object} Point
     * @prop {number} x
     * @prop {number} y
     */
    /**
     * Creates a point
     *
     * @param {number} x
     * @param {number} y
     * @returns {Point}
     */
    export function pt(x: number, y: number): Point;
    /**
     * A 2D point in space.
     */
    export type Point = {
        x: number;
        y: number;
    };
}
declare module "drawing" {
    /**
     * Draws a rectange to the screen
     *
     * @param {number} x
     * @param {number} y
     * @param {number} w Width of rectangle
     * @param {number} h Height of rectangle
     * @param {string?} color
     */
    export function drawRectangle(x: number, y: number, w: number, h: number, color: string | null): void;
    /**
     * Draws a polygon to the screen
     *
     * @param {number} x X offset
     * @param {number} y Y offset
     * @param {import("./math.js").Point[]} points
     * @param {string?} color
     */
    export function drawPolygon(x: number, y: number, points: import("math").Point[], color: string | null): void;
    /**
     * Draws a circle to the screen
     *
     * @param {number} x X position of the center of the circle
     * @param {number} y Y position of the center of the circle
     * @param {number} r Radius
     * @param {string?} color
     */
    export function drawCircle(x: number, y: number, r: number, color: string | null): void;
    /**
     * Draws text to the screen
     *
     * @param {string} text
     * @param {number} x
     * @param {number} y
     * @param {string?} color
     * @param {string?} font Font style (e.g. bold italic 40px serif)
     */
    export function drawText(text: string, x: number, y: number, color: string | null, font?: string | null): void;
    /**
     * Draws an image to the screen
     *
     * @param {number} x
     * @param {number} y
     * @param {ImageBitmap} image Image to render. It is recommended to use loadImage(url) to get an image.
     */
    export function drawImage(x: number, y: number, image: ImageBitmap): void;
    /**
     * Clears the screen
     */
    export function clearScreen(): void;
}
declare module "image" {
    /**
     * Loads an image.
     *
     * @param {string} url Path to image.
     * @returns {ImageBitmap}
     */
    export function loadImage(url: string): ImageBitmap;
}
declare module "loop" {
    /**
     * Start event loop, calling `tick` every frame.
     *
     * @param {() => void} onTick
     */
    export function loop(onTick: () => void): void;
    /**
     * Get the amount of time that has passed since the last frame, in seconds.
     *
     * @returns {number}
     */
    export function deltaTime(): number;
    export let dt: number;
    export let tickCallbacks: any[];
}
declare module "input" {
    /**
     * Returns `true` if the key is being held down.
     *
     * @param {string} key
     */
    export function isKeyDown(key: string): any;
}
declare module "index" {
    export default drawing;
    namespace drawing {
        export { drawRectangle };
        export { drawPolygon };
        export { drawCircle };
        export { drawText };
        export { clearScreen };
        export { setCanvasSize };
        export { loadImage };
        export { isKeyDown };
        export { pt };
        export { loop };
        export { deltaTime };
    }
    import { drawRectangle } from "drawing";
    import { drawPolygon } from "drawing";
    import { drawCircle } from "drawing";
    import { drawText } from "drawing";
    import { clearScreen } from "drawing";
    import { setCanvasSize } from "canvas";
    import { loadImage } from "image";
    import { isKeyDown } from "input";
    import { pt } from "math";
    import { loop } from "loop";
    import { deltaTime } from "loop";
}
//# sourceMappingURL=drawingLib.d.ts.map