"use strict";

/********************************************************************

Assignment 1
Artem Gloukhov

*********************************************************************/

window.onload = setup;

function setup() {

  for(let i = 0; i < 1000; i++) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');

    document.body.appendChild(pixel);
    pixel.addEventListener('mouseover', paint);
    pixel.addEventListener('click', remove);
  }
}

function paint(e) {
  let rgbVal = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
  e.target.style.backgroundColor = rgbVal;
  setTimeout(unpaint, 2000, e.target);
}

function unpaint(pix) {
  pix.style.backgroundColor = 'black';
}

function remove(e) {
  e.target.style.backgroundColor = 'rgba(0,0,0,1)';
}

function random(maxVal) {
  let val = Math.random() * maxVal;
  return val;
}
