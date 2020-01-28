"use strict";

/*****************

Assignment 2
Artem Gloukhov

Improved version of the Raving Redactionist
******************/

// The chance a span will be revealed per update
const REVEAL_POSSIBILITY = 0.1;
// How often to update the spans (potentially revealing them) in ms
const UPDATE_FREQUENCY = 500;

// A place to store the jQuery selection of all spans
let $spans;
//selection of all spans labeled "secret"
let $secrets;
//amount of secret words found by the user
let secretsFound = 0;
//the total amount of secret words
let secretsTotal = 7;

// When the document is loaded we call the setup function
$(document).ready(setup);

// setup()
//
// Sets the click handler and starts the time loop
function setup() {
  // Save the selection of all spans with class "redacted" (since we do stuff to them multiple times)
  $spans = $('.redacted');
  // Set a click handler on the spans (so we know when they're clicked)
  $spans.on('click', spanClicked);
  // Set an interval of 500 milliseconds to update the state of the page
  setInterval(update, UPDATE_FREQUENCY);

  //Save the spans with class "secret"
  $secrets = $('.secret');
  //Set a mouse over handler for them to be revealed
  $secrets.on('mouseover', showSecretWord);
};

// spanClicked()
//
// When a span is clicked we remove its revealed class and add the redacted class
// thus blacking it out
function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

// update()
//
// Update is called every 500 milliseconds and it updates all the spans on the page
// using jQuery's each() function which calls the specified function on _each_ of the
// elements in the selection
function update() {
  $spans.each(updateSpan);
}

// updateSpan()
//
// With random chance it unblanks the current span by removing the
// redacted class and adding the revealed class. Because this function is called
// by each(), "this" refers to the current element that each has selected.
function updateSpan() {
  let r = Math.random();
  if (r < REVEAL_POSSIBILITY) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

//showSecretWord()
//
//shows the word hidden withing the lorem ipsum phrase
function showSecretWord() {
  //only counts the secret word found once.
  if($(this).attr("class") === "secret") {
    secretsFound ++;
  }

  //change the class of the secret word to "found", which highlights it
  $(this).removeClass('secret');
  $(this).addClass('found');

  //Change the "Secrets Found" label to reflect the newly found secret word
  $('#secretsLabel').text('Secrets Found: ' + secretsFound + "/" + secretsTotal);
  console.log(secretsFound);
}
