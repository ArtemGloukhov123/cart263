"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/
let errorSound = new Audio("../sounds/error.mp3");

//amount of characters entered in the text field
let textFieldChars;

//password for entering the website
let password = "GloryToLeader45";

//run setup when document is loaded
$(document).ready(setup);

function setup() {
  //check if the password is correct
  $("#signIn").on("click", checkPassword);

  //return to the home page of Faceplant
  $("#back").on("click", function() {
    window.location.href = "Faceplant.html";
  });

  //check if the character requirement has been met
  $("#submit").on("click", submit);

  //when any key is released, update the character count
  $("#textField").keyup(updateChars);
}

//updates the character count at the bottom right of the text field
function updateChars() {
  //https://codepen.io/zabielski/pen/gPPywv
  textFieldChars = $("#textField").val().length;
  let chars = textFieldChars + "/1000";
  $("#charAmount").html(chars);
}

//checks the character count of the text entry field
function submit() {
  textFieldChars = $("#textField").val().length;

  if (textFieldChars < 1000) {
    dialogBox("You have not fulfilled the required character count. Do as told, or risk corporal punishment.")
  } else {
    dialogBox(`Our gracious leader is merciful and has granted you access to your account. Your password is "${password}".`)
  }
}

//check if the password entered is correct
function checkPassword() {
  //get the value of the text in the password text field
  let pass = document.getElementById("password").value;
  let fname = document.getElementById("firstName").value;
  let lname = document.getElementById("lastName").value;

  //checks that all fields are entered correctly
  if (fname === "") {
    dialogBox("Enter your first name.");
  } else if (lname === "") {
    dialogBox("Enter your last name.");
  } else if (pass === password) {
    localStorage.setItem("firstNameVal", fname);
    localStorage.setItem("lastNameVal", lname);
    window.location.href = "FaceplantHomepage.html";
  } else {
    dialogBox("Incorrect Password");
  }
}

//create a dialog box as an error message
function dialogBox(text) {
  errorSound.play();

  //create a div to be turn into a dialog box
  let $dialog = $(`<div id='dialogdiv'></div>`).attr(`title`, `Error`);

  //add text to the div
  $dialog.append(`<p>${text}</p>`);

  //Add the div to the page
  $('body').append($dialog);

  //turn the div into a dialog box
  $dialog.dialog({

    //add a button to take the user to the ending screen
    buttons: {
      "Close": function() {
        $(this).dialog(`close`);
      }
    },

    //contain within body
    containment: 'body',
    width: 300
  });

  $dialog.parent().offset({
    top: 0.5 * ($(window).height() - $dialog.parent().height()),
    left: 0.5 * ($(window).width() - $dialog.parent().width())
  });
}
