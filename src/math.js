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
export function pt(x, y) {
	return { x, y };
}
