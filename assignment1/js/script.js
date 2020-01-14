"use strict";

/********************************************************************

CART263 Week 2
Artem Gloukhov

*********************************************************************/

window.onload = setup;

function setup() {
console.log("whaddup");

  for(let i = 0; i < 1000; i++) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');

    document.body.appendChild(pixel);
    pixel.addEventListener('mouseover', paint);
  }
}

function paint(e) {
  e.target.style.backgroundColor = 'white';
  setTimeout(unpaint, 10000, e.target);
}

function unpaint(pix) {
  pix.style.backgroundColor = 'black';
}
