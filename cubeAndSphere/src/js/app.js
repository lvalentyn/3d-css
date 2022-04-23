import * as flsFunction from "./modules/functions.js";
// plugins from npm

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const scene = document.querySelector(".js-rotate");
	const revers = document.querySelector(".js-revers");

	let step = 10
	let axiosY = 0
	let axiosX = 0

	function objectRotate(e) {
		console.log(e);
		if (e.key === 'a' || e.target.classList.contains('js-left-btn')) {
			axiosY += step
			scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
			revers.style.transform = `rotateY(${-axiosY}deg) rotateX(${-axiosX}deg)`
		}
		if (e.key === 'd' || e.target.classList.contains('js-right-btn')) {
			axiosY -= step
			scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
			revers.style.transform = `rotateY(${-axiosY}deg) rotateX(${-axiosX}deg)`
		}
		if (e.key === 'w' || e.target.classList.contains('js-top-btn')) {
			axiosX -= step
			scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
			revers.style.transform = `rotateY(${-axiosY}deg) rotateX(${-axiosX}deg)`
		}
		if (e.key === 's' || e.target.classList.contains('js-bottom-btn')) {
			axiosX += step
			scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
			revers.style.transform = `rotateY(${-axiosY}deg) rotateX(${-axiosX}deg)`
		}
		if (e.key === 'r' || e.target.classList.contains('js-refresh-btn')) {
			axiosX = 0
			axiosY = 0
			scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
			revers.style.transform = `rotateY(${-axiosY}deg) rotateX(${-axiosX}deg)`
		}
	}

	document.addEventListener('click', objectRotate)
	document.addEventListener('keydown', objectRotate)
	// for create webP dublicate
	flsFunction.isWebp();

});


