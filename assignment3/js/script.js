"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
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

let answers = [];
const NUM_OPTIONS = 10;
let correctAnimal;
let numOfCorrectAnswers = 0;
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
  $(".startButton").on("click", announce);
}

if (annyang) {

  // Add the commands to annyang. That is it should listen
  // for "I am..." or "I'm..." followed by some number of words.
  // In annyang's commands an asterisk (*) followed by a
  // variable names means that annyang will call the function
  // specified with EVERYTHING it heard from that point on...
  var command = {
    "I give up": giveUp,
    "Say it again": repeat
  };

  // Now we've defined the commands we give them to annyang
  // by using its .addCommands() function.
  annyang.addCommands(command);

  // Finally we tell annyang to start listening with its
  // .start() function
  annyang.start();
}

function addButton(label) {
  let $div = $("<div></div>");
  $div.addClass("guess");
  $div.text(label);
  $div.button();
  $div.appendTo("body");
  $div.on("click", handleGuess);
}

function newRound() {
  answers = [];

  $(".guess").remove();
  $(".answer").remove();

  for (let i = 0; i < NUM_OPTIONS; i++) {
    let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    addButton(randomAnimal);
    answers.push(randomAnimal);
  }
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  sayBackwards(correctAnimal);

  displayCorrectGuesses();
}

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
    $(this).effect("shake");
    responsiveVoice.speak("You idiot, that was wrong. What i said was", "UK English Male", {
      pitch: 0.7,
      rate: 0.9
    });
    sayBackwards(correctAnimal);
    numOfCorrectAnswers = 0;
    displayCorrectGuesses();
  }
}

function sayBackwards(text) {
  let backwardsText = text.split('').reverse().join('');
  responsiveVoice.speak(backwardsText, "UK English Male", {
    pitch: Math.random(),
    rate: Math.random() * 1.5
  });
}

function displayCorrectGuesses() {
  $(".correctGuesses").remove();
  let $p = $("<p></p>");
  $p.addClass("correctGuesses");
  $p.text("Correct Guesses: " + numOfCorrectAnswers);
  $p.appendTo("body");
}

function correctSpeech() {
  let randomSpeech = correctSpeeches[(Math.floor(Math.random() * correctSpeeches.length))];
  return randomSpeech;
}

function announce() {
  $(".startButton").remove();

  responsiveVoice.speak("Okay human, try to guess what animal I am saying backwards", "UK English Male");

  setTimeout(newRound, 5000);
}

function giveUp() {
  responsiveVoice.speak("I knew you would. This was the correct answer", "UK English Male");

  $(".guess").remove();

  let $answer = $("<p></p>");
  $answer.addClass("answer");
  $answer.text(correctAnimal);
  $answer.appendTo("body");

  displayCorrectGuesses();

  numOfCorrectAnswers = 0;
  setTimeout(newRound, 4000);
}

function repeat() {
  sayBackwards(correctAnimal);
}
