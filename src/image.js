/**
 * Loads an image.
 *
 * @param {string} url Path to image.
 * @returns {ImageBitmap}
 */
export async function loadImage(url) {
	let blob = await fetch(url).then((res) => res.blob());
	return createImageBitmap(blob);
}
