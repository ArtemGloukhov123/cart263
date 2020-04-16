"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/
let textFieldChars;

let password = "GloryToOurLeader45";

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
    alert("You have not fulfilled the required character count. Do as told, or risk corporal punishment.")
  } else {
    alert(`Our gracious leader is merciful and has granted you access to your account. Your password is "${password}".`)
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
    alert("Enter your first name.");
  } else if (lname === "") {
    alert("Enter your last name.");
  } else if (pass === password) {
    localStorage.setItem("firstNameVal", fname);
    window.location.href = "FaceplantHomepage.html";
  } else {
    alert("Incorrect Password");
  }
}
