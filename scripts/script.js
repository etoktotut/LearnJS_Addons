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
    }
    if (this.selector.charAt(0) === '#') {
        el = document.createElement('p');
        el.setAttribute('id', this.selector.substring(1));
    }
    el.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
    el.textContent = strToElem;
    document.querySelector('body').insertAdjacentElement('afterbegin', el);
};

const first = new DomElement('#fufu', { height: '10%', width: '40%', bg: 'green', fontSize: '30px' });
first.elemCreate('Гога!');