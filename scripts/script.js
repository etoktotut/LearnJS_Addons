'use strict';
const bird = document.querySelector('.bird');
const btn = document.querySelector('.button-stop');
const btnReset = document.querySelector('.button-reset');

let frameId, stopped = true;
let step = 10;

const render = () => {

    bird.style.top = step + 'px';
    bird.style.left = step + 'px';
    step += 10;
    frameId = requestAnimationFrame(render);

    if (step >= (window.innerHeight - 138) || step >= (window.innerWidth - 138)) {
        step = 10;
    }

};

btn.addEventListener('click', () => {
    stopped = !stopped;
    if (stopped) {
        cancelAnimationFrame(frameId);
        btn.textContent = "СТАРТ!";
    } else {
        frameId = requestAnimationFrame(render);
        btn.textContent = " СТОП !";
    }

});

btnReset.addEventListener('click', () => {
    if (frameId) { cancelAnimationFrame(frameId); }
    bird.style.top = '10px';
    bird.style.left = '0px';
    step = 10;
    stopped = true;
    btn.textContent = "СТАРТ!";
});

