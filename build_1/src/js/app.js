import * as flsFunction from './modules/functions.js'
// plugins from npm

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const scene = document.querySelector('.js-rotate')

    let step = 10
    let axiosY = 0
    let axiosX = 0

    function objectRotate(e) {
        if (e.key === 'a' || e.target.classList.contains('js-left-btn')) {
            axiosY += step
            scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
        }
        if (e.key === 'd' || e.target.classList.contains('js-right-btn')) {
            axiosY -= step
            scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
        }
        if (e.key === 'w' || e.target.classList.contains('js-top-btn')) {
            axiosX -= step
            scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
        }
        if (e.key === 's' || e.target.classList.contains('js-bottom-btn')) {
            axiosX += step
            scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
        }
        if (e.key === 'r' || e.target.classList.contains('js-refresh-btn')) {
            axiosX = 0
            axiosY = 0
            scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
        }
    }

    document.addEventListener('click', objectRotate)
    document.addEventListener('keydown', objectRotate)

    // rotatemouse
    const pageContainer = document.querySelector('.page')
    let isHold = false
    let startPosX = 0
    let startPosY = 0
    let fontSize = 6
    const build = document.querySelector('.house')

    function objectRotate(e) {
        if (startPosX < e.clientX) {
            startPosX = e.clientX
            axiosY++
        }
        if (startPosX > e.clientX) {
            startPosX = e.clientX
            axiosY--
        }
        scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`

        if (startPosY > e.clientY) {
            startPosY = e.clientY
            axiosX++
        }
        if (startPosY < e.clientY) {
            startPosY = e.clientY
            axiosX--
        }
        scene.style.transform = `rotateY(${axiosY}deg) rotateX(${axiosX}deg)`
    }

    function objectZoom(e) {
        if (0 > e.deltaY) {
            fontSize--
        }
        if (0 < e.deltaY) {
            fontSize++
        }

        build.style.fontSize = `${fontSize}vw`
    }

    document.addEventListener('mousedown', (e) => {
        startPosX = e.clientX
        startPosY = e.clientY
        isHold = true
        pageContainer.classList.add('rotating')
    })
    document.addEventListener('mouseup', (e) => {
        isHold = false
        pageContainer.classList.remove('rotating')
    })
    document.addEventListener('mousemove', (e) => {
        if (isHold) {
            objectRotate(e)
        }
    })
    document.addEventListener('wheel', (e) => {
        objectZoom(e)
    })

    // for create webP dublicate
    flsFunction.isWebp()
})
