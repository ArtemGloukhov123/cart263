"use strict";

/********************************************************************

Assignment 1
Artem Gloukhov

*********************************************************************/

window.onload = setup;

let rotation = 0;

function setup() {

  for (let i = 0; i < 1000; i++) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');

    document.body.appendChild(pixel);
    pixel.addEventListener('mouseover', paint);
    pixel.addEventListener('click', remove);
  }

  document.addEventListener('keydown', rotate)
}

function paint(e) {
  let rgbVal = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
  e.target.style.backgroundColor = rgbVal;
  setTimeout(unpaint, 5000, e.target);
}

function unpaint(e) {
  e.style.backgroundColor = 'black';
}

function remove(e) {
  e.target.style.backgroundColor = 'rgba(0,0,0,1)';
  e.target.removeEventListener('mouseover', paint);
}

function random(maxVal) {
  let val = Math.random() * maxVal;
  return val;
}

function rotate(e) {
  if (e.keyCode === 37) {
    rotation -= 1;
    console.log("LEFT");
  }
  if (e.keyCode === 39) {
    rotation += 1;
    console.log("RIGHT");
  }
  let pix = document.getElementsByClassName('pixel');
  let rotationVal = "rotate(" + rotation + "deg)";

  for (let i = 0; i < pix.length; i++) {
    pix[i].style.transform = rotationVal;
  }
}
