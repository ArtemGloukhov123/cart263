"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/
let textFieldChars;

//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $("#textField").html();

  $("#back").on("click", function(){
    window.location.href="Faceplant.html";
  });

  $("#submit").on("click", submit);

  $("#textField").keyup(updateChars);
}

function updateChars() {
  textFieldChars = $("#textField").val().length;
  let chars = textFieldChars + "/1000";
  $("#charAmount").html(chars);
}

function submit(){
  textFieldChars = $("#textField").val().length;
  
  if(textFieldChars < 1000) {
    alert("You have not fulfilled the required character count. Do as told, or risk capital punishment.")
  } else {
    alert("Our gracious leader is merciful and has granted you access to your account. Your password is 'GloryToOurLeader45'.")
  }
}
