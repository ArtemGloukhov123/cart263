"use strict";

/********************************************************************

Slamina
Artem Gloukhov

In this game, the not so friendly Uk English Male will say the name of an animal
backwards and you have to guess the animal, either by clicking on the animal or
by saying it out loud.

*********************************************************************/

//array of animals the program can choose from
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

//array of the animals to be shown on screen
let answers = [];
//number of buttons to be in play
const NUM_OPTIONS = 10;
//variable for correct animal to be stored in
let correctAnimal;
//the player's score
let numOfCorrectAnswers = 0;
//array of possible things for the UK English Male to say when you guess
//correctly. Having only one phrase gets redundant.
let correctSpeeches = [
  "Congrats. You somehow got that right.",
  "Maybe you're not as dumb as I thought.",
  "Took you long enough.",
  "Pat yourself on the back.",
  "Not bad for someone like you.",
  "That one was too easy",
  "Your victory means nothing"
];

$(document).ready(setup);

function setup() {
  //have a start button so that the page has a user interaction before playing sound.
  $(".startButton").on("click", announce);
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

//create and append a button to the body of the document with an animal name on it
function addButton(label) {
  let $div = $("<div></div>");
  $div.addClass("guess");
  $div.text(label);
  $div.button();
  $div.appendTo("body");
  $div.on("click", handleGuess);
}

//load a new round by deleting old buttons and adding new ones
function newRound() {
  answers = [];

  $(".guess").remove();
  $(".answer").remove();

  //select a random animal from the animals array
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    addButton(randomAnimal);
    answers.push(randomAnimal);
  }
  //select a random animal from the answers array to be the correct one, then say it backwards
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  sayBackwards(correctAnimal);

  //display the player's score
  displayCorrectGuesses();
}

//check if the button the player pressed corresponds with the correct animal
function handleGuess() {
  if ($(this).text() === correctAnimal) {
    $(".guess").remove();

    numOfCorrectAnswers += 1;
    responsiveVoice.speak(correctSpeech(), "UK English Male", {
      rate: 1,
      pitch: 0.9
    });
    setTimeout(newRound, 3000);
  } else {
    $(this).remove();
    responsiveVoice.speak("You idiot, that was wrong. What i said was", "UK English Male", {
      pitch: 0.7,
      rate: 0.9
    });
    //repeat the backwards animal if the player guessed incorrectly
    sayBackwards(correctAnimal);
    numOfCorrectAnswers = 0;
    displayCorrectGuesses();
  }
}

//check if the player gueesed the correct animal through annyang
function handleSpokenGuess(spokenGuess) {
  if (spokenGuess === correctAnimal) {
    $(".guess").remove();

    numOfCorrectAnswers += 1;
    responsiveVoice.speak(correctSpeech(), "UK English Male", {
      rate: 1,
      pitch: 0.9
    });
    setTimeout(newRound, 3000);
  } else {
    responsiveVoice.speak("You idiot, that was wrong. What i said was", "UK English Male", {
      pitch: 0.7,
      rate: 0.9
    });
    sayBackwards(correctAnimal);
    numOfCorrectAnswers = 0;
    displayCorrectGuesses();
  }
}

//say the name of the correct animal backwards
function sayBackwards(text) {
  let backwardsText = text.split('').reverse().join('');
  responsiveVoice.speak(backwardsText, "UK English Male", {
    pitch: Math.random(),
    rate: Math.random() * 1.5
  });
}

//display the player's score. First delete any previous version so that the score is never displayed twice or more.
function displayCorrectGuesses() {
  $(".correctGuesses").remove();
  let $p = $("<p></p>");
  $p.addClass("correctGuesses");
  $p.text("Correct Guesses: " + numOfCorrectAnswers);
  $p.appendTo("body");
}

//have the robot voice congratulate the player in a not so flattering way
function correctSpeech() {
  let randomSpeech = correctSpeeches[(Math.floor(Math.random() * correctSpeeches.length))];
  return randomSpeech;
}

//have the robot voice give tghe player instructions on how to play the game after they have pressed the start game button
function announce() {
  $(".startButton").remove();
  $("#instructions").css("visibility", "visible");

  responsiveVoice.speak("Okay human, try to guess what animal I am saying backwards", "UK English Male");

  setTimeout(newRound, 5000);
}

//have the game show the correct answer and load a new round
function giveUp() {
  responsiveVoice.speak("I knew you would. This was the correct answer", "UK English Male");

  $(".guess").remove();

  //display the correct answer at the top of the page
  let $answer = $("<p></p>");
  $answer.addClass("answer");
  $answer.text(correctAnimal);
  $answer.appendTo("body");

  displayCorrectGuesses();

  //reset the score
  numOfCorrectAnswers = 0;
  setTimeout(newRound, 4000);
}

//repeats the name of the animal backwards
function repeat() {
  sayBackwards(correctAnimal);
}
