const keysDown = {};

/**
 * Returns `true` if the key is being held down.
 *
 * @param {string} key
 */
export function isKeyDown(key) {
	return keysDown[key] ?? false;
}

addEventListener("keydown", ({ key }) => {
	keysDown[key.toLowerCase()] = true;
});
addEventListener("keyup", ({ key }) => {
	keysDown[key.toLowerCase()] = false;
});
