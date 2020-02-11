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
  if($(this).text() === correctAnimal) {
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

    responsiveVoice.speak("Okay human, here's the deal. I will say the name of an animal backwards, and you have to guess which animal that is. If you can. which i doubt", "UK English Male");

    setTimeout(newRound, 11000);
}
