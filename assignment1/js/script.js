"use strict";

/********************************************************************

Assignment 1
Artem Gloukhov

*********************************************************************/

window.onload = setup;

let rotation = 0;
let currentKey = "";

function setup() {

  for (let i = 0; i < 1000; i++) {
    //create one div
    let pixel = document.createElement('div');
    //assigns each pixel the class "pixel"
    pixel.setAttribute('class', 'pixel');
    //add the div to the body of the document
    document.body.appendChild(pixel);
    //when the mouse hovers over the pixel, call the "paint" function
    pixel.addEventListener('mouseover', paint);
    //when the pixel is clicked, call the "remove" function
    pixel.addEventListener('click', remove);
  }
  //listens for any keypress, specific key is determined in "rotate" function
  document.addEventListener('keydown', rotate);
  document.addEventListener('keydown', typed);
}

//Changes the color of the pixel to any random color
function paint(e) {
  let rgbVal = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
  e.target.style.backgroundColor = rgbVal;
  setTimeout(unpaint, 5000, e.target);
}

//After a certain time, change the pixel back to black
function unpaint(e) {
  e.style.backgroundColor = 'black';
}

//Turns the pixel black and removes the event listener so that the pixel can no longer be painted
function remove(e) {
  e.target.style.backgroundColor = 'rgba(0,0,0,1)';
  e.target.removeEventListener('mouseover', paint);
}

//Returns a random number between 0 and the value sent
function random(maxVal) {
  let val = Math.random() * maxVal;
  return val;
}

//Checks which key was pressed and changes the rotation of the pixels
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

function typed(e) {
  currentKey = e.keyCode;
  console.log(currentKey);
}
