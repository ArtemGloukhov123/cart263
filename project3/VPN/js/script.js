"use strict";

/********************************************************************

Glorious Nation Internet Simulator
Artem Gloukhov



*********************************************************************/


//run setup when document is loaded
$(document).ready(setup);

function setup() {
  $('#button').on('click', getVPN);

  let vpnVal = localStorage.getItem("hasVPN");

  if(vpnVal === "true"){
    $('#button').html("You are already protected");
    $('#button').css("background", "grey");
    $('#button').off();
  }
}

function getVPN(){
  $('#button').off();

  $('#button').html("");
  $('#button').css('width', '60px');
  $('#button').css('border-radius', '30px');
  setTimeout(function() {
    $('#button').html("✓");
  }, 700);

  localStorage.setItem('hasVPN', true);
  setTimeout(youAreNowProtected, 2500);
}

function youAreNowProtected() {
  $('#button').html("");
  $('#button').css('width', '350px');
  $('#button').css('border-radius', '15px');
  setTimeout(function() {
    $('#button').html("You are now protected");
  }, 700);
}
