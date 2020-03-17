"use strict";

/********************************************************************

Javario Ware
Artem Gloukhov

This game is a collection of minigames, meant to be played in quick succession
in order to rack up the highest score possible.

*********************************************************************/


$(document).ready(setup);

function setup() {
  //have a start button so that the page has a user interaction before playing sound.
  $(".startButton").on("click", startGame);
}

//set up annyang to listen to certain phrases
if (annyang) {

  //annyang will only react when it hears these phrases
  var command = {
    "I give up": giveUp,
    "Say it again": repeat,
    "I think it is *spokenGuess": handleSpokenGuess
  };

  //add the phrases to annyang
  annyang.addCommands(command);

  //now that it is set up, start annyang
  annyang.start();
}

function startGame() {

}
