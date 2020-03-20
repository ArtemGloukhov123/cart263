"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
$(document).ready(setup);

function setup() {
  getJSONdata();

  $(document).on("click", refreshPage);
}

function getJSONdata() {
  $.getJSON("data/data.json")
    .done(loaded)
    .fail(notLoaded);
}

function loaded(data) {
  console.log(data);

  let randomCondiment = getRandomArrayElement(data.condiments);
  let randomCat = getRandomArrayElement(data.cats);
  let randomRoom = getRandomArrayElement(data.rooms);
  let randomRabbit = getRandomArrayElement(data.rabbits);
  let randomGod = getRandomArrayElement(data.gods);
  let randomGoddess = getRandomArrayElement(data.goddesses);
  let randomMovie = getRandomArrayElement(data.popularMovies);
  let randomSport = getRandomArrayElement(data.sports);

  let verb = "is";
  if (randomCondiment.charAt(randomCondiment.length - 1) === "s") {
    verb = "are";
  }

  let indefiniteArticle = getCorrectIndefiniteArticle(randomCat);
  let indefiniteArticle2 = getCorrectIndefiniteArticle(randomRabbit);

  createPhrase(randomCondiment, verb, indefiniteArticle, randomCat, indefiniteArticle2, randomRabbit, randomRoom, randomGod, randomGoddess, randomMovie, randomSport);
}

function notLoaded(request, text, error) {
  console.error(error);
}

function getCorrectIndefiniteArticle(element) {
  let article = "a";

  if (element.charAt(0) === "A") {
    article = "an";
  }
  if (element.charAt(0) === "E") {
    article = "an";
  }
  if (element.charAt(0) === "I") {
    article = "an";
  }
  if (element.charAt(0) === "O") {
    article = "an";
  }
  if (element.charAt(0) === "U") {
    article = "an";
  }
  return article;
}

function getRandomArrayElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}

function createPhrase(condiment, verb, indefiniteArticle, cat, indefiniteArticle2, rabbit, room, god, goddess, movie, sport) {
  let phrase = `${condiment} ${verb} like ${indefiniteArticle} ${cat} cat chasing ${indefiniteArticle2} ${rabbit} rabbit in the ${room}, whilst ${god} and ${goddess} ponder whether to watch ${movie} or ${sport} on TV.`;

  let $p = $("<p></p>");
  $p.addClass("phrase");
  $p.text(phrase);
  $p.appendTo("body");
}

function refreshPage() {
  $(".phrase").remove();

  getJSONdata();
}
