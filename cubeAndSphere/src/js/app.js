import * as flsFunction from "./modules/functions.js";
// plugins from npm

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const h = document.querySelector("#mouseRotate");
	const b = document.body;

	let base = (e) => {
		var x = e.pageX / window.innerWidth - 0.5;
		var y = e.pageY / window.innerHeight - 0.5;
		h.style.transform = `
        rotateX(${y * 50 + 170}deg)
        rotateZ(${-x * 150 + 180}deg)
	`;
	}

	b.addEventListener("pointermove", base);
	// for create webP dublicate
	flsFunction.isWebp();

});


