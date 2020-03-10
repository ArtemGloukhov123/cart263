"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
$(document).ready(setup);

function setup() {
  $.getJSON("data/data.json")
    .done(loaded)
    .fail(notLoaded);
}

function loaded(data) {
  console.log(data);

  let randomCondiment = getRandomArrayElement(data.condiments);
  let randomCat = getRandomArrayElement(data.cats);
  let randomRoom = getRandomArrayElement(data.rooms);

  let verb = "is";
  if(randomCondiment.charAt(randomCondiment.length - 1) === "s") {
    verb = "are";
  }

  createPhrase(randomCondiment, verb, randomCat, randomRoom);
}

function notLoaded(request, text, error) {
  console.error(error);
}

function getRandomArrayElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}

function createPhrase(condiment, verb, cat, room) {
  let phrase = `${condiment} ${verb} like a ${cat} in the ${room}`;

  let $p = $("<p></p>");
  $p.addClass("phrase");
  $p.text(phrase);
  $p.appendTo("body");
}
