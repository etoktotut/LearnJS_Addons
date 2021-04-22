'use strict';
const inpText = document.querySelector('input');
const pText = document.querySelector('p');

const render = () => pText.textContent = inpText.value;

const postpone = (func, ms) => {
    let isPostponed = false;
    let postponeTimer;

    const postponeAndRun = () => {
        if (isPostponed) {
            clearTimeout(postponeTimer);
        }
        isPostponed = true;
        postponeTimer = setTimeout(() => {
            isPostponed = false;
            func();
        }, ms);
    };

    return postponeAndRun;
};

inpText.addEventListener('input', postpone(render, 1000));
