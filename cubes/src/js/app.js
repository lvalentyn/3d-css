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
        perspective(1250px)
        rotateX(${y * 200 + 75}deg)
        rotateZ(${-x * 300 + 45}deg)
    `;
	}

	b.addEventListener("pointermove", base);
	// for create webP dublicate
	flsFunction.isWebp();

});


