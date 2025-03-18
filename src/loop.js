import { clearScreen } from "./drawing.js";

export let dt = 0;
export let tickCallbacks = [];

/**
 * Start event loop, calling `tick` every frame.
 *
 * @param {() => void} onTick
 */
export function loop(onTick) {
	if (tickCallbacks.length == 0) {
		let lastTime = 0;
		function tick(now) {
			if (lastTime == 0) lastTime = now;
			dt = (now - lastTime) / 1000;

			clearScreen();
			tickCallbacks.forEach((fn) => fn());
			requestAnimationFrame(tick);
		}

		requestAnimationFrame(tick);
	}

	tickCallbacks.push(onTick);
}

/**
 * Get the amount of time that has passed since the last frame, in seconds.
 *
 * @returns {number}
 */
export function deltaTime() {
	return dt;
}
