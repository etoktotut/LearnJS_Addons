'use strict';
const DomElement = function (selector, options) {
    this.selector = selector;
    options = options || {};
    this.height = options.height;
    this.width = options.width;
    this.bg = options.bg;
    this.fontSize = options.fontSize;
};

DomElement.prototype.elemCreate = function (strToElem) {
    let el;
    if (this.selector.charAt(0) === '.') {
        el = document.createElement('div');
        el.className = this.selector.substring(1);
    } else
        if (this.selector.charAt(0) === '#') {
            el = document.createElement('p');
            el.setAttribute('id', this.selector.substring(1));
        } else {
            return;
        }
    el.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
    el.textContent = strToElem;
    document.querySelector('body').insertAdjacentElement('afterbegin', el);
};
const elem1 = new DomElement('#fufu', { height: '100px', width: '100px', bg: 'red', fontSize: '30px' });

document.addEventListener('DOMContentLoaded', function () {
    elem1.elemCreate();
    const elem2 = document.querySelector('#fufu');
    elem2.style.position = 'absolute';
    let x = 0;
    let y = 0;
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            console.log('something Wrong');
            return; // Do nothing if the event was already processed
        }
        switch (event.key) {
            case "ArrowDown":
                y += 10;
                elem2.style.transform = `translate(${x}px,${y}px)`;
                break;
            case "ArrowUp":
                y -= 10;
                elem2.style.transform = `translate(${x}px,${y}px)`;
                break;
            case "ArrowLeft":
                x -= 10;
                elem2.style.transform = `translate(${x}px,${y}px)`;
                break;
            case "ArrowRight":
                x += 10;
                elem2.style.transform = `translate(${x}px,${y}px)`;
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
    });
    // elem2.addEventListener('')


});